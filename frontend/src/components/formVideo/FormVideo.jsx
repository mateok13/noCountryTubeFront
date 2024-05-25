import { useState } from 'react';
import './FormVideo.css'
import { useNavigate } from 'react-router-dom';

const formValues = {
    title: '',
    description: '',
    thumbnail: '',
    video: '',
    tags: '',
    category: '',
    comments: 'on'
}

const FormVideo = () => {
    const [formData, setFormData] = useState(formValues);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData(formValues)
        alert('Uploaded!')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0]
        })
    }

    const handleCancel = () => {
        navigate('/')
    }

    return (
        <form className='form-control shadow p-4' onSubmit={handleSubmit}>
            <div>
                <h4>General Information</h4>
                <input className='form-control' type="text" placeholder='Title' id="title" name="title" onChange={handleChange} value={formData.title} required autoFocus />
                <textarea className='form-control resize-none my-2' name="description" id="description" placeholder='Description' onChange={handleChange} value={formData.description} required></textarea>
                <div className='d-flex flex-column my-2'>
                    <label htmlFor="thumbnail">Thumbnail (Upload a picture)</label>
                    <input type="file" id="thumbnail" name='thumbnail' onChange={handleFileChange} required />
                </div>
                <div className='d-flex flex-column my-2'>
                    <label htmlFor="video">Video</label>
                    <input type="file" id="video" name='video' onChange={handleFileChange} required />
                </div>
            </div>

            <div className='my-3'>
                <h4>Details</h4>
                <div className='d-flex flex-column'>
                    <label htmlFor="tags">Tags</label>
                    <textarea className='form-control resize-none' name="tags" id="tags" maxLength={100} placeholder='Enter a comma after each tag' onChange={handleChange} value={formData.tags}></textarea>
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" onChange={handleChange} value={formData.category}>
                        <option value="">Select a category</option>
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                        <option value="category3">Category 3</option>
                        <option value="category4">Category 4</option>
                        <option value="category5">Category 5</option>
                    </select>
                </div>
                <div>
                    <label>Comments</label>
                    <div className='d-flex gap-3'>
                        <div>
                            <input id='comments-on' type="radio" name='comments' value='on' onChange={handleChange} checked={formData.comments === 'on'} />
                            <label htmlFor="comments-on">On</label>
                        </div>
                        <div>
                            <input id='comments-off' type="radio" name='comments' value='off' onChange={handleChange} checked={formData.comments === 'off'} />
                            <label htmlFor="comments-off">Off</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex gap-2'>
                <button className='btn btn-primary w-50' type="submit">Upload</button>
                <button className='btn btn-primary w-50' type='reset' onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default FormVideo;
