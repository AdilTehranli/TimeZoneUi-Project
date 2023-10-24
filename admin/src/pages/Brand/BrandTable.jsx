import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import swal from "sweetalert2";
import moment from 'moment';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar';

function BrandTable() {

    let count = 1;

    const url = 'https://localhost:7027';

    const [brand, setBrand] = useState([]);

    //Setting Authorization Token in Request Headers using Bearer Authentication
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


    //Deletes an advertising from the API.
    const DeleteBrand = async (id) => {
        await axios.delete(`${url}/api/Brands/DeleteBrand/${id}`, config,)
            .then((res) => {
                swal.fire("", "Deleted Advertising", "success");
                console.log(res);
                getAllBrand();
            })
            .catch((err) => {
                swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
                console.log(err);
            });
    };


    return (
        <>



            <div className='d-flex'>
                <div className='col-2'>

                    <Sidebar />
                </div>


                <div className='col-10 mt-5'>

                    <h2 className='text-center mt-5'>
                        Brand Table

                    </h2>

                    <div className="d-flex">
                        <div className="col-lg-12 grid-margin stretch-card my-5">

                            <div >
                                <Link to="/BrandCreate">
                                    <button className="btn btn-success my-2" style={{ float: "right" }}>Create</button>
                                </Link>

                            </div>
                            <Table striped bordered hover variant="dark" >
                                <thead>
                                    <tr style={{ textAlign: "center" }}>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Create date</th>
                                        <th>Update date</th>
                                        <th>Settings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        brand.map((brand, index) => (
                                            <tr key={index} style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                <td>{count++}</td>
                                              
                                                <td className="py-1" dangerouslySetInnerHTML={{ __html: brand.name }}></td>
                                                <td>{moment(brand.createdAt).format('DD-MM-YYYY HH:mm:ss')}</td>
                                                <td>{moment(brand.updateDate).format('DD-MM-YYYY HH:mm:ss') !== '01-01-0001 00:00:00' ? moment(brand.updateDate).format('DD-MM-YYYY HH:mm:ss') : 'Not updated'}</td>
                                                <td>



                                                <Link to={`/BrandUpdate/${brand.id}`}>
    <button className="btn btn-outline-primary" style={{ marginRight: "15px" }}>Update</button>
</Link>
                                                    <button
                                                        onClick={() => DeleteBrand(brand.id)}
                                                        type="button"
                                                        className="btn btn-outline-danger"
                                                    >
                                                        Delete
                                                    </button>

                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>



                </div>

            </div>



        </>
    )
}

export default BrandTable