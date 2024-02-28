import React from 'react'
import { format} from 'date-fns'

const Post = ({title, content, cover, createdAt}) => {

  return (
    <div className='post mt-5'>
       <div className='row align-items-center'>
        <div className='col-md-6'>
            <img width={"100%"} src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='col-md-6'>
            <div>
                <h2>{title}</h2>
                <div className='d-flex gap-3'>
                <span>Jagan Javid</span>
                <time>{format(new Date(createdAt), "MM/dd/yyyy HH:mm")}</time>
                </div>
                <p>
                    {content}
                </p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Post