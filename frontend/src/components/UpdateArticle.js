import React, {useState, useEffect} from 'react';
import APIService from '../components/APIService';


function UpdateArticle(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const updateArticle = () => {
        APIService.updateArticle()
    }

    return (
        <div className='container mt-5'>

            <h2>Update Article</h2>
            <div className='mb-3'>
                <input type='text' className='form-control'
                placeholder='Please Enter a Title'
                value={title}
                onChange={evt =>  setTitle(evt.target.value)}
                />
            </div>
            
            <div className='mb-3'>
                <textarea className='form-control'
                rows = "5"
                value = {description}
                onChange = {evt => setDescription(evt.target.value)}

            />

            </div>

        <div className='mb-3'>
            <button onClick={updateArticle} className = "btn btn-success">Add Article</button>
        </div>
        
    </div>
    )
}