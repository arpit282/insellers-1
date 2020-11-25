import React from 'react'
import Card from './Card'

const Post = () => {
    return (
        <>
            <div class="jumbotron jumbotron-fluid mt-4" style={{background:'#F1F9FF'}}>
                <div class="container">
                    <div className="">
                        <h1 className="text-center mb-5" style={{fontWeight:'900'}}>Most Recent Posts</h1>
                    </div>
                    <div className="container-fluid mb-5">
                        <div className="row">
                            <div className="col mx-auto">
                                <div className="row gy-4">
                                <Card/>   
                                <Card/>   
                                <Card/>   
                                <Card/>   
                                <Card/>   
                                <Card/>   
                                </div>
                                </div>
                            </div>
                        </div>
                        <h2 className='text-center' style={{fontWeight:'900'}}>More Blogs</h2>
                    </div>
                </div>
        </>
    )
}

export default Post
