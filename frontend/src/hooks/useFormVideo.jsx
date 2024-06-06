import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoThumbnail from "react-video-thumbnail";
import axios from "axios";
import { environment } from "./environment";

const formValues = {
    username: 'username',
    title: '',
    description: '',
    thumbnail: null,
    video: null, // archivo
    duration: '',
    comments: true,
    // views: 0,
    // likes: 0,
    // dislikes: 0,
    isPublic: true
}

const snapshotList = [3, 6, 30] // Toma capturas en el segundo 3, 6, 30

const useFormVideo = () => {
    const [formData, setFormData] = useState(formValues)
    const [errors, setErrors] = useState({})
    const [thumbnails, setThumbnails] = useState([])
    const [selectedThumbnail, setSelectedThumbnail] = useState(null)
    const videoInputRef = useRef(null);
    const navigate = useNavigate()
    const token = '' // ***********************************************

    const validateInputs = () => {
        const newErrors = {};
        if (!formData.title.trim()) {
            newErrors.title = 'El título del video es obligatorio.';
        }
        if (!formData.description.trim()) {
            newErrors.description = 'La descripción del video es obligatoria.';
        }
        if (!formData.video) {
            newErrors.video = 'Debe seleccionar el archivo de video.';
        }
        if (!formData.thumbnail) {
            newErrors.thumbnail = 'Debe seleccionar una miniatura.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateInputs();
        if (!isValid) return;

        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('video', formData.video);
        data.append('duration', formData.duration);
        data.append('comments', formData.comments);
        // data.append('views', formData.views);
        // data.append('likes', formData.likes);
        // data.append('dislikes', formData.dislikes);
        data.append('isPublic', formData.isPublic);

        // Verifico si la miniatura seleccionada es una miniatura generada por react-video-thumbnail para convertirla a archivo
        if (thumbnails.includes(selectedThumbnail)) {
            const mime = 'image/jpeg'; // tipo MIME
            const blob = base64ToBlob(selectedThumbnail, mime);
            data.append(`thumbnail`, blob, `thumbnail.jpg`);
        } else {
            data.append('thumbnail', formData.thumbnail); // adjunto la miniatura subida manualmente (archivo)
        }

        // objeto FormData en la consola
        for (const pair of data.entries()) {
            console.log(pair[0], pair[1]);
        }

        axios.post(`${environment.url}/direccion-upload-video`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log(response.data)
                setThumbnails([])
                setSelectedThumbnail(null)
                setFormData(formValues);

                if (videoInputRef.current) {
                    videoInputRef.current.value = null;
                }
                alert("Video subido exitosamente");
            })
            .catch(error => console.log(error.message))
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: name === "comments" || name === "isPublic" ? value === "true" : value,
        }));
    };

    const handleVideoFileChange = (e) => {
        const file = e.target.files[0]
        setFormData((prevFormData) => ({ ...prevFormData, video: file }))
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
        setSelectedThumbnail(URL.createObjectURL(file));
        setFormData((prevFormData) => ({ ...prevFormData, thumbnail: file }));
    };

    const handleSelectThumbnail = (thumbnail) => {
        setSelectedThumbnail(thumbnail);
        setFormData((prevFormData) => ({ ...prevFormData, thumbnail }))
    };

    const generateThumbnails = () => {
        return snapshotList.map((item, index) => (
            <div key={index} className="d-none">
                <VideoThumbnail videoUrl={URL.createObjectURL(formData.video)}
                    thumbnailHandler={(thumbnail) => setThumbnails((prevThumbnails) => [...prevThumbnails, thumbnail,])}
                    snapshotAtTime={item} />
            </div>))
    }

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
        thumbnails,
        selectedThumbnail,
        handleSubmit,
        handleChange,
        handleImageFileChange,
        handleVideoFileChange,
        handleSelectThumbnail,
        handleCancel,
        generateThumbnails
    }
}

export default useFormVideo