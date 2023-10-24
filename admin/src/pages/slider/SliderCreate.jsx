import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import axios from "axios";
import Sidebar from "../../components/layout/Sidebar";

function SliderCreate() {
  const navigate = useNavigate();
  const url = "https://localhost:7027";

  const [sliders, setSliders] = useState([]);
  const [sliderImage, setSliderImage] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false);

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  //Get All Slider API
  const getAllSlider = async () => {
    try {
      const response = await axios.get(`${url}/api/Sliders/GetSlider`);
      setSliders(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllSlider();
  }, []);

  const newSlider = {
    sliderImage: sliderImage,
    title: title,
    description: description,
  };


  const CreateSlider = async (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setIsTitleEmpty(true);
      return;
    }

    if (description.trim() === "") {
      setIsDescriptionEmpty(true);
      return;
    }

    const formData = new FormData();
    for (const [key, value] of Object.entries(newSlider)) {
      formData.append(key, value);
    }

    await axios
      .post(`${url}/api/Sliders/CreateSlider`, formData, config, {
        headers: {
          Accept: "*/*",
        },
      })
      .then((res) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Slider Created",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(res);
        // navigate("/SliderTable");
      })
      .catch((err) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Slider not Created",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(err);
        // navigate("/SliderTable");
      });
  };


  return (
    <>
      <div className="d-flex">
        <div className="col-2">
          <Sidebar />
        </div>

        <div className="col-10 mt-5">
          <div
            className="create-btn-area container"
            style={{ maxWidth: "500px" }}
          >
            <h2 className="my-5" style={{ textAlign: "center" }}>
              Create Slider
            </h2>
            <Form onSubmit={(e) => CreateSlider(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <p>Image</p>
                <Form.Control
                  type="file"
                  required
                  onChange={(e) => setSliderImage(e.target.files[0])} 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  required
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Enter Title")}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  required
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Enter Description")}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Button variant="outline-primary" type="submit">
                Create
              </Button>
              <Link to="/slider">
                <Button variant="outline-dark" type="submit" className="mx-2">
                  Cancel
                </Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderCreate;
