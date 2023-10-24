import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar'

function BrandCreate() {

    const navigate = useNavigate();
    const url = 'https://localhost:7027';

    const [brand, setBrand] = useState([]);
    const [Name, setName] = useState('');
    const [isTitleEmpty, setIsTitleEmpty] = useState(false);

    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };


    //Retrieves all Advertising data from the API.
    const getAllBrand = async () => {
        try {
            const response = await axios.get(`${url}/api/Brands/GetBrand`);
            setBrand(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    

    useEffect(() => {
        getAllBrand();
    }, []);

    const newBrand = {
        Name: Name,
    };

    //Create Advertising
    const CreateBrand = async (e) => {
        e.preventDefault();

        if (Name.trim() === '') {
            setIsTitleEmpty(true);
            return;
        }

        

        const formData = new FormData();
        for (const [key, value] of Object.entries(newBrand)) {
            formData.append(key, value);
        };

        await axios.post(`${url}/api/Brands/CreateBrand`, formData, config, {
            headers: {
                Accept: "*/*"
            }
        })
            .then((res) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Brand Created',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
                navigate('/brandTable');
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Brand not Created',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
                navigate('/BrandCreate');
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
                        <h2 className='my-5' style={{ textAlign: "center" }}>Create Brand</h2>
                        <Form onSubmit={(e) => CreateBrand(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Title"
                                    required
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = 'Enter Title'}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>


              

                            <Button variant="outline-primary" type="submit">
                                Create
                            </Button>
                            <Link to="/Brand">
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

export default BrandCreate