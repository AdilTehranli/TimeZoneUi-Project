import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar';

function BannerUpdate() {

  const { id } = useParams();

  const navigate = useNavigate();

  const url = 'https://localhost:7027';

  const [banner, setBanner] = useState([]);
  const [BannerImage, setBannerImage] = useState();
  const [Title, setTitle] = useState();
  const [Price, setPrice] = useState();

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };



  //Get  by id Banner  from API
  const getBanner = async () => {
    try {
      const response = await axios.get(`${url}/api/Banners/GetBannerDetail/${id}`);
      setBanner(response.data);
      setBannerImage(response.data.bannerimage);
      setTitle(response.data.title);
      setPrice(response.data.price);
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
    getBanner();
  }, []);

  const newBanner = {
    BannerImage: BannerImage,
    Title: Title,
    Price: Price
  };

  const UpdateBanner = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const [key, value] of Object.entries(newBanner)) {
      formData.append(key, value);
    };

    await axios.put(`${url}/api/Banners/UpdateBanner/${id}`, formData,config, {
      headers: {
        Accept: "*/*"
      }
    })
      .then((res) => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Banner Updated',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(res);
      })
      .catch((err) => {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'Banner not Updated',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(err);
      });

    navigate('/banner');
  };



  return (

    <>
      <div className='d-flex'>


        <div className='col-2'>

          <Sidebar />

        </div>

        <div className='col-10 mt-5'>
        <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
            <h2 className='my-5' style={{ textAlign: "center" }}>Update Banner</h2>
            <Form onSubmit={(e) => UpdateBanner(e)}>
                <p>Image</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="file"
                        onChange={(e) => setBannerImage(e.target.files[0])} 
                    />
                </Form.Group>

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
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        name={Price}
                        placeholder={Price}
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = Price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Group>

                <Button variant="outline-primary" type="submit">
                    Update
                </Button>
                <Link to="/banner">
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

export default BannerUpdate