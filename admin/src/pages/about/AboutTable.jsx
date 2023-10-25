import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import swal from "sweetalert2";
import moment from 'moment';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar';

function AboutTable() {

    let count = 1;
    const url = 'https://localhost:7027';

    const [about, setAbout] = useState([]);

    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };



  
    

    const getAllAbout = async () => {
        try {
          const response = await axios.get(`${url}/api/Abouts/GetAbout`);
          setAbout(response.data);
        } catch (error) {
          console.error(error);
        }
      };


      

    useEffect(() => {
        getAllAbout();
    }, []);


    const DeleteCategory = async (id) => {
        await axios.delete(`${url}/api/Abouts/DeleteAbout/${id}`, config,)
            .then((res) => {
                swal.fire("", "Deleted About", "success");
                console.log(res);
                getAllAbout();
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

                    <h2 className='text-center mt-4'>
                        About Table


                    </h2>

                    <div className="d-flex">
                        <div className="col-lg-12 grid-margin stretch-card my-5">

                            <div >
                                <Link to="/aboutCreate">
                                    <button className="btn btn-success my-2" style={{ float: "right" }}>Create</button>
                                </Link>

                            </div>
                            <Table striped bordered hover variant="dark" >
                                <thead>
                                    <tr style={{ textAlign: "center" }}>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Create date</th>
                                        <th>Update date</th>
                                        <th>Settings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        about.map((about, index) => (
                                            <tr key={index} style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                <td>{count++}</td>
                                                <td className="py-1" dangerouslySetInnerHTML={{ __html: about.title }}></td>
                                                <td>{moment(about.createdAt).format('DD-MM-YYYY HH:mm:ss')}</td>
                                                <td>{moment(about.updateDate).format('DD-MM-YYYY HH:mm:ss') !== '01-01-0001 00:00:00' ? moment(about.updateDate).format('DD-MM-YYYY HH:mm:ss') : 'Not updated'}</td>
                                                <td>


                                                

                                                    <Link to={`/aboutUpdate/${about.id}`}>
                                                        <button className="btn  btn-outline-primary" style={{ marginRight: "15px" }}>Update</button>
                                                    </Link>
                                                    <button
                                                        onClick={() => DeleteCategory(about.id)}
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

export default AboutTable