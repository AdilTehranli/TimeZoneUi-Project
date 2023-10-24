import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar';


function ProductUpdate() {

    const { id } = useParams();

    const navigate = useNavigate();

    const url = 'https://localhost:7027';

    const [product, setProduct] = useState([]);
    const [productimage, setProductImage] = useState();
    const [categories, setCategories] = useState([]);
    const [brand, setBrand] = useState([]);
    const [categoryInput, setCategoryInput] = useState();
    const [brandInput, setBrandInput] = useState(); 
    const [description, setDescription] = useState();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();

    const [brands, setBrands] = useState([]);


    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };


    const getProduct = async () => {
        try {
            const response = await axios.get(`${url}/api/Products/GetProductDetail/${id}`);
            setProduct(response.data);
            setProductImage(response.data.productimage);
            setTitle(response.data.title);
            setDescription(response.data.description);
            setPrice(response.data.price);
            setCategoryInput(response.data.categoryId);
            setBrandInput(response.data.brandId);

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
        getProduct();
        getAllCategory();
        getAllBrand();
    }, []);

    const getAllCategory = async () => {
        try {
            const response = await axios.get(`${url}/api/Categories/GetCategory`);
            setCategories(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const getAllBrand = async () => {
        try {
            const response = await axios.get(`${url}/api/Brands/GetBrand`);
            setBrand(response.data);
        } catch (error) {
            console.error(error);
        }
    };







    const newProduct = {
        productimage: productimage,
        description: description,
        categoryId: categoryInput,
        brandId: brandInput,
        price: price,
        title: title,
    };


    const UpdateProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const [key, value] of Object.entries(newProduct)) {
            formData.append(key, value);
        };

        await axios.put(`${url}/api/Products/UpdateProduct/${id}`, formData, config, {
            headers: {
                Accept: "*/*"
            }
        })
            .then((res) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Product Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Product not Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
            });

        navigate('/productTable');
    };
    return (

        <>

            <div className='d-flex'>


                <div className='col-2'>

                    <Sidebar />

                </div>

                <div className='col-10 mt-5'>
                    <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
                        <h2 className='my-5' style={{ textAlign: "center" }}>Update Product</h2>
                        <Form onSubmit={(e) => UpdateProduct(e)}>
                            <p>Image</p>
                       


                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    type="file"
                                    onChange={(e) => setProductImage(e.target.files[0])} 
                                />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name={title}
                                    placeholder={title}
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    name={description}
                                    placeholder={description}
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name={price}
                                    placeholder={price}
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </Form.Group>

                          

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Select
                                    aria-label="Product Category"
                                    value={categoryInput} // Set the selected category ID as the value
                                    onChange={(e) => setCategoryInput(e.target.value)}
                                >
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Select
                                    aria-label="Product brand"
                                    value={brandInput} 
                                    onChange={(e) => setBrandInput(e.target.value)}
                                >
                                    {brand.map((brand) => (
                                        <option key={brand.id} value={brand.id}>
                                            {brand.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Button variant="outline-primary" type="submit">
                                Update
                            </Button>
                            <Link to="/productTable">
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

export default ProductUpdate