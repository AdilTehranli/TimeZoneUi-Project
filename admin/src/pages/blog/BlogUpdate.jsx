import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar';

function BlogUpdate() {

    const { id } = useParams();

    const navigate = useNavigate();

    const url = 'https://localhost:7027';

    const [blog, setBlog] = useState([]);
    const [blogimage, setBlogImage] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };




    const getBlog = async () => {
        try {
            const response = await axios.get(`${url}/api/Blogs/${id}`);
            setBlog(response.data);
            setBlogImage(response.data.image);
            setTitle(response.data.title);
            setDescription(response.data.description);
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    window.location.href = '/404';
                } else if (error.response.status === 400) {
                    window.location.href = '/400';
                }
            } else {
                console.error(error);
            }
        }
    };


    useEffect(() => {
        getBlog();
    }, []);

    const newBlog = {
        blogimage: blogimage,
        title: title,
        description: description
    };
    const UpdateBlog = async (e) => {
        e.preventDefault();


        const formData = new FormData();
        formData.append("blogimage", blogimage);
        formData.append("title", title);
        formData.append("description", description);
        
        await axios.put(`${url}/api/Blogs/${id}`, formData, config, {
            headers: {
                ...config.headers,
                Accept: "*/*"
            }
        })
            .then((res) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Blog Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Blog not Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
            });

        navigate('/blogTable');
    };




    return (

        <>

            <div className='d-flex'>


                <div className='col-2'>

                    <Sidebar />

                </div>

                <div className='col-10 mt-5'>
                    <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
                        <h2 className='my-5' style={{ textAlign: "center" }}>Update Blog</h2>
                        <Form onSubmit={(e) => UpdateBlog(e)}>
                            <p>Image</p>
                 
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    type="file"
                                    onChange={(e) => setBlogImage(e.target.files[0])} 
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='title'
                                    placeholder={title}
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    as="textarea" 
                                    rows={3} 
                                    name='description'
                                    placeholder={description}
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Form.Group>

                            <Button variant="outline-primary" type="submit">
                                Update
                            </Button>
                            <Link to="/blogTable">
                                <Button variant="outline-dark" type="submit" className='mx-2'>
                                    Cancel
                                </Button>
                            </Link>
                        </Form>
                    </div>


                </div>
            </div>

        </>
    )
}

export default BlogUpdate