import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoThumbnail from "react-video-thumbnail";

const formValues = {
    username: 'username',
    title: '',
    description: '',
    thumbnail: '',
    video: null, // archivo
    duration: '',
    comments: true,
    views: 0,
    likes: 0,
    dislikes: 0,
}

const snapshotList = [3, 6, 30] // Toma capturas en el segundo 3, 6, 30

const useFormVideo = () => {
    const [formData, setFormData] = useState(formValues)
    const [errors, setErrors] = useState({})
    const [thumbnails, setThumbnails] = useState([])
    const [selectedThumbnail, setSelectedThumbnail] = useState(null)
    const videoInputRef = useRef(null);
    const navigate = useNavigate()

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
        if (!formData.thumbnail.trim()) {
            newErrors.thumbnail = 'Debe seleccionar una miniatura.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateInputs();
        if (!isValid) return;

        console.log(formData);
        setThumbnails([])
        setSelectedThumbnail(null)
        setFormData(formValues);

        if (videoInputRef.current) {
            videoInputRef.current.value = null;
        }

        alert("Video subido exitosamente");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: name === "comments" ? value === "true" : value,
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
        const file = e.target.files[0]
        const reader = new FileReader(file)
        reader.onload = () => {
            const base64File = reader.result
            setSelectedThumbnail(base64File)
            setFormData((prevFormData) => ({ ...prevFormData, thumbnail: base64File }))
        };
        reader.readAsDataURL(file)
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