import React from 'react'

const Post = () => {
  return (
    <div className='post mt-5'>
       <div className='row align-items-center'>
        <div className='col-md-6'>
            <img width={"100%"} src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='col-md-6'>
            <div>
                <h2>This is my car</h2>
                <span>Jagan Javid</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas, ducimus debitis dignissimos iste dolores minima minus pariatur, nemo officia nisi tempora repudiandae incidunt reiciendis aspernatur ut doloremque. Quaerat, tempore!
                </p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Post