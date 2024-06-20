import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import VideoThumbnail from "react-video-thumbnail";
import axios from "axios";
import { environment } from "./environment";

const formValues = {
    userId: '',
    title: '',
    description: '',
    miniature: null,
    video: null, // archivo
    duration: '', //***
    isCommentable: true, //***
    isPublic: true //*** 
}

const snapshotList = [3, 10, 40] // Toma capturas en el segundo 3, 6, 30

const useFormVideo = () => {
    const [formData, setFormData] = useState(formValues)
    const [errors, setErrors] = useState({})
    const [miniatures, setMiniatures] = useState([])
    const [selectedMiniature, setSelectedMiniature] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const videoInputRef = useRef(null);
    const navigate = useNavigate()
    const token = localStorage.getItem('accessToken')
    const userId = localStorage.getItem('userId')
    const [isModalMessageOpen, setIsModalMessageOpen] = useState(false);

    const openModalMessage = () => {
        setIsModalMessageOpen(true);
    };

    const closeModalMessage = () => {
        setIsModalMessageOpen(false);
    };

    const validateInputs = () => {
        const newErrors = {};
        if (!formData.title.trim()) {
            newErrors.title = 'El título del video es obligatorio.';
        }
        if (!formData.video) {
            newErrors.video = 'Debe seleccionar el archivo de video.';
        }
        if (!formData.miniature) {
            newErrors.miniature = 'Debe seleccionar una miniatura.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateInputs();
        if (!isValid) return;

        const data = new FormData();
        data.append('userId', userId);
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('video', formData.video);
        data.append('duration', formData.duration); //***
        // data.append('isCommentable', formData.isCommentable); //***
        // data.append('views', formData.views);
        // data.append('likes', formData.likes);
        // data.append('dislikes', formData.dislikes);
        // data.append('isPublic', formData.isPublic); //***

        // Verifico si la miniatura seleccionada es una miniatura generada por react-video-thumbnail para convertirla a archivo
        if (miniatures.includes(selectedMiniature)) {
            const mime = 'image/jpeg'; // tipo MIME
            const blob = base64ToBlob(selectedMiniature, mime);
            data.append(`miniature`, blob, `miniature.jpg`);
        } else {
            data.append('miniature', formData.miniature); // adjunto la miniatura subida manualmente (archivo)
        }

        setIsLoading(true)
        axios.post(`${environment.url}videos`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log(response.data)
                setMiniatures([])
                setSelectedMiniature(null)
                setFormData(formValues);

                if (videoInputRef.current) {
                    videoInputRef.current.value = null;
                }
                openModalMessage()
            })
            .catch(error => {
                alert('Hubo un error al subir el video.')
                console.log(error.message)
            })
            .finally(() => setIsLoading(false))
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: name === "isCommentable" || name === "isPublic" ? value === "true" : value,
        }));
    };

    const handleVideoFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevFormData) => ({ ...prevFormData, video: file }));
        generateThumbnails(file); // Llama a generateThumbnails cuando se selecciona un nuevo video
    };

    useEffect(() => {
        if (formData.video) {
            // Se crea un objeto de video temporal para obtener la duración
            const videoElement = document.createElement('video');
            videoElement.src = URL.createObjectURL(formData.video);
            videoElement.onloadedmetadata = () => {
                setFormData((prevFormData) => ({ ...prevFormData, duration: formatVideoDuration(videoElement.duration), }));
            };
        }
    }, [formData.video]);

    const formatVideoDuration = (duration) => {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const seconds = Math.round(duration % 60);
        return duration > 3599 ? `${hours}:${minutes}:${seconds}` : duration > 59 ? `${minutes}:${seconds}` : `0:${seconds}`;
    }

    const handleImageFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedMiniature(URL.createObjectURL(file));
        setFormData((prevFormData) => ({ ...prevFormData, miniature: file }));
    };

    const handleSelectThumbnail = (miniature) => {
        setSelectedMiniature(miniature);
        setFormData((prevFormData) => ({ ...prevFormData, miniature }))
    };

    const generateThumbnails = (videoFile) => {
        const videoUrl = URL.createObjectURL(videoFile);
        const newMiniatures = [];
        snapshotList.forEach((time) => {
            // Crea un elemento de video para cada snapshot
            const videoElement = document.createElement('video');
            videoElement.src = videoUrl;
            videoElement.currentTime = time;
            videoElement.addEventListener('seeked', () => {
                const canvas = document.createElement('canvas');
                canvas.width = videoElement.videoWidth;
                canvas.height = videoElement.videoHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                const dataURL = canvas.toDataURL();
                newMiniatures.push(dataURL);
                if (newMiniatures.length === snapshotList.length) {
                    setMiniatures(newMiniatures);
                    URL.revokeObjectURL(videoUrl); // Limpia la URL del objeto para evitar fugas de memoria
                }
            });
        });
    };

    const base64ToBlob = (base64, mime) => {
        const byteString = atob(base64.split(',')[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mime });
    };


    const handleCancel = () => {
        navigate("/");
    };

    return {
        formData,
        errors,
        videoInputRef,
        miniatures,
        selectedMiniature,
        handleSubmit,
        handleChange,
        handleImageFileChange,
        handleVideoFileChange,
        handleSelectThumbnail,
        handleCancel,
        generateThumbnails,
        isLoading,
        isModalMessageOpen,
        closeModalMessage
    }
}

export default useFormVideo