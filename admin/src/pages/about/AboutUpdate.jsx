import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar';

function AboutUpdate() {


    const { id } = useParams();
    const navigate = useNavigate();

    const url = 'https://localhost:7027';

    const [category, setCategory] = useState([]);
    const [Title, setTitle] = useState();
    const [Description, setDescription] = useState();


    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };


     const getAbout= async () => {
        try {
            const response = await axios.get(`${url}/api/Abouts/GetAboutDetail/${id}`);
            setCategory(response.data);
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
        getAbout();
    }, []);

    const newAbout = {
        Title: Title,
        Description:Description

    };

    const UpdateAbout = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const [key, value] of Object.entries(newAbout)) {
            formData.append(key, value);
        };

        await axios.put(`${url}/api/Abouts/UpdateAbout/${id}`, formData, config, {
            headers: {
                Accept: "*/*"
            }
        })
            .then((res) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    name: 'Category Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    name: 'Category not Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
            });

        navigate('/AboutTable');
    };


 

    return (

        <>

            <div className='d-flex'>


                <div className='col-2'>

                    <Sidebar />

                </div>

                <div className='col-10 mt-5'>
                    <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
                        <h2 className='my-5' style={{ textAlign: "center" }}>Update About</h2>
                        <Form onSubmit={(e) => UpdateAbout(e)}>
                    
                     

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name={Title}
                                    placeholder={Title}
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = Title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    name={Description}
                                    placeholder={Description}
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = Description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Form.Group>


                            <Button variant="outline-primary" type="submit">
                                Update
                            </Button>
                            <Link to="/aboutTable">
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

export default AboutUpdate