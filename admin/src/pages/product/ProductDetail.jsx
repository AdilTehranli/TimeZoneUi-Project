import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from '../../components/layout/Sidebar';
import moment from 'moment';


function ProductDetail() {

    const { id } = useParams();
    const baseURL = "https://localhost:7027";
    const [product, setProduct] = useState({})
    const [category, setCategory] = useState({})
    const [brand, setBrand] = useState({})



    const getById = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/Products/GetProductDetail/${id}`);
            setProduct(response.data);
        getCategoryById(response.data.categoryId)
        getBrandById(response.data.brandId)


        } catch (error) {
            console.log(error)
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


    const getCategoryById = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/Categories/GetCategoryDetail/${id}`);
            setCategory(response.data);
            console.log(response.data)
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    window.location.href = '/404';
                }
                // } else if (error.response.status === 400) {
                //     window.location.href = '/400';
                // }
            } else {
                console.error(error);
            }
        }
    };
    const getBrandById = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/Brands/GetBrandDetail/${id}`);
            setBrand(response.data);
            console.log(response.data)
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    window.location.href = '/404';

                }
                // } else if (error.response.status === 400) {
                //     window.location.href = '/400';
                // }
            } else {
                console.error(error);
            }
        }
    };
    


    useEffect(() => {
        getById(id);
        getCategoryById(id)
        getBrandById(id)
    }, []);


    return (

        <>

            <div className='d-flex'>
                <div className='col-2'>

                    <Sidebar />

                </div>


                <div className='col-10  mt-5'>

                    <h2 className='text-center mt-5'>Product Detail</h2>

                    <div className='mt-5'>
                        <h4>Image</h4>
                        <img style={{
                            width: "300px",
                            height: "200px",
                            borderRadius: "unset",
                        }}
                        src={`https://localhost:7027//${product.productImage}`}
                            alt="productimage"
                        />
                    </div>

                    <div>

                        <h5 className='mt-3'>title</h5>
                        <input class="form-control"
                            type="text"
                            defaultValue={product.title}
                            disabled
                        />



                        <h5 className='mt-3'>Create date</h5>
                        <input
                            className="form-control"
                            type="text"
                            value={moment(product.createdAt).format('DD-MM-YYYY HH:mm:ss')}
                            disabled
                        />

                        <h5 className='mt-3'>Category</h5>
                        <input
                            class="form-control"
                            type="text"
                            defaultValue={category.name}
                            disabled />

                        <h5 className='mt-3'>Update date</h5>
                        <input
                            class="form-control"
                            type="text"
                            value={moment(product.updateDate).format('DD-MM-YYYY HH:mm:ss') !== '01-01-0001 00:00:00' ? moment(product.updateDate).format('DD-MM-YYYY HH:mm:ss') : 'Not updated'}
                            disabled />
      <h5 className='mt-3'>Brand</h5>
                        <input
                            class="form-control"
                            type="text"
                            defaultValue={brand.name}
                            disabled />



                    </div>


                    <Link to="/productTable">
                        <button className="btn btn-secondary mt-3 my-2" style={{ float: "left" }}>Back</button>
                    </Link>

                </div>

            </div>


        </>
    )
}

export default ProductDetail