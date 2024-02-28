import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Createpost = () => {


 

    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const createPost = async (e) => {

        e.preventDefault();
        
        const data = new FormData();

        data.set("title", title);
        data.set("file", file[0]);
        data.set("content", content);

       const response = await fetch("http://localhost:8000/post", {
         method:"POST",
         body: data,
         credentials:"include"
       })

       if(response.ok){
            navigate("/");
       }
       
    
    }

    return (
        <form onSubmit={createPost}>

            <h3 className='my-4'>Add your post</h3>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="images" className="form-label">Add your image</label>
                <input className="form-control" type="file" onChange={(e) => setFile(e.target.files)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="content" className="form-label">Add Content</label>
                <textarea className="form-control" 
                onChange={(e) => setContent(e.target.value)}></textarea>
            </div>

            <div>
                <input type="submit" value="Create" className='btn btn-dark'/>
            </div>

        </form>
    )
}

export default Createpost