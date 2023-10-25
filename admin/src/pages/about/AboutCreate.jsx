import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar'

function AboutCreate() {

    const navigate = useNavigate();
    const url = 'https://localhost:7027';

    const [about, setAbout] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isNameEmpty, setIsNameEmpty] = useState(false);

    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    //Get All Category API

    const getAllAbout = async () => {
        try {
            const response = await axios.get(`${url}/api/Abouts/GetAbout`, config);
            setAbout(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllAbout();
    }, []);


    const newCategory = {

        title: title,
        description:description
    };





    const CreateAbout = async (e) => {
        e.preventDefault();

        if (title.trim() === '') {
            setIsNameEmpty(true);
            return;
        }
        if (description.trim() === '') {
            setIsNameEmpty(true);
            return;
        }



        const formData = new FormData();
        for (const [key, value] of Object.entries(newCategory)) {
            formData.append(key, value);
        };

        await axios.post(`${url}/api/Abouts/CreateAbout`, formData, config, {
            headers: {
                Accept: "*/*"
            }
        })
            .then((res) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Category Created',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
                navigate('/aboutTable');
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Category not Created',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
                navigate('/aboutCreate');
            });


    };

  




    return (

        <>

            <div className='d-flex'>

                <div className='col-2'>

                    <Sidebar />

                </div>


                <div className='col-10 mt-5'>

                    <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
                        <h2 className='my-5' style={{ textAlign: "center" }}>Create About</h2>
                        <Form onSubmit={(e) => CreateAbout(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                             
                               
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter title"
                                    required
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = 'Enter title'}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter description"
                                    required
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = 'Enter description'}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Form.Group>



                            <Button variant="outline-primary" type="submit">
                                Create
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

export default AboutCreate