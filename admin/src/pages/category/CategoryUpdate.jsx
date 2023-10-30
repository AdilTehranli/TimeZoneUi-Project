import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar';

function CategoryUpdate() {


    const { id } = useParams();
    const navigate = useNavigate();

    const url = 'https://localhost:7027';

    const [category, setCategory] = useState([]);
    const [Name, setName] = useState();

    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };


     //Get  by id Category  from API
     const getCategory = async () => {
        try {
            const response = await axios.get(`${url}/api/Categories/GetCategoryDetail/${id}`);
            setCategory(response.data);
            setName(response.data.name);
            
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
        getCategory();
    }, []);

    const newCategory = {
        Name: Name,

    };

    const UpdateCategory = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const [key, value] of Object.entries(newCategory)) {
            formData.append(key, value);
        };

        await axios.put(`${url}/api/Categories/UpdateCategory/${id}`, formData, config, {
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

        navigate('/categoryTable');
    };


    //File Upload Handler: Setting Image and Displaying Preview
 

    return (

        <>

            <div className='d-flex'>


                <div className='col-2'>

                    <Sidebar />

                </div>

                <div className='col-10 mt-5'>
                    <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
                        <h2 className='my-5' style={{ textAlign: "center" }}>Update Category</h2>
                        <Form onSubmit={(e) => UpdateCategory(e)}>
                    
                     

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name={Name}
                                    placeholder={Name}
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = Name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>



                            <Button variant="outline-primary" type="submit">
                                Update
                            </Button>
                            <Link to="/categoryTable">
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

export default CategoryUpdate