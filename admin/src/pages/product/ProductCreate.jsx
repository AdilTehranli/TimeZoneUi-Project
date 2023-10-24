import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import axios from "axios";
import Sidebar from "../../components/layout/Sidebar";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function ProductCreate() {
  const navigate = useNavigate();

  const url = "https://localhost:7027";

  const [product, setProduct] = useState([]);
  const [productImage, setProductImage] = useState();
  // const [showImage, setShowImage] = useState(null);
  // const [showHoverImage, setShowHoverImage] = useState(null);
  // const [hoverImage, setHoverImage] = useState();

  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  // const [count, setCount] = useState('');
  const [price, setPrice] = useState("");
  // const [rates, setRates] = useState('');

  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false);
  const [categoryInput, setCategoryInput] = useState();

  const [categories, setCategories] = useState([]);

  const [brandInput, setBrandInput] = useState();

  const [brands, setBrands] = useState([]);

  //Setting Authorization Token in Request Headers using Bearer Authentication
  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  //Retrieves all Product data from the API.
  const getAllProduct = async () => {
    try {
      const response = await axios.get(`${url}/api/Products/GetProduct`);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
      setBrands(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const newProduct = {
    productImage: productImage,
    // hoverPhoto: hoverImage,
    description: description,
    categoryId: categoryInput,
    brandId: brandInput,
    price: price,
    // count: count,
    // rates: rates,
    title: title,
  };

  useEffect(() => {
    getAllCategory();
    getAllProduct();
    getAllBrand();
  }, []);

  //Create Product

  const CreateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const [key, value] of Object.entries(newProduct)) {
      formData.append(key, value);
    }

    await axios
      .post(`${url}/api/Products/CreateProduct`, formData, config, {
        headers: {
          Accept: "*/*",
        },
      })
      .then((res) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Product Created",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(res);
        navigate("/productTable");
      })
      .catch((err) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Product not Created",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(err);
        navigate("/ProductCreate");
      });
  };

  // //File Upload Handler: Setting Image and Displaying Preview
  // const fileUploadHandler = async (e) => {
  //     const files = e.target.files[0];
  //     setImage(files);

  //     setShowImage(URL.createObjectURL(files));

  // };

  // //File Upload Handler: Setting Image and Displaying Preview
  // const fileUploadHandlers = async (e) => {
  //     const files = e.target.files[0];

  //     setHoverImage(files);

  //     setShowHoverImage(URL.createObjectURL(files));
  // };

  return (
    <div>
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
              Create Product
            </h2>
            <Form onSubmit={(e) => CreateProduct(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {
                  // showImage !== null ?
                  //     <img
                  //         style={{
                  //             width: "200px",
                  //             height: "100px",
                  //             marginBottom: "10px",
                  //             borderRadius: "unset",
                  //         }}
                  //         src={showImage}
                  //         alt="header image"
                  //     /> : null
                }
                <p>Image</p>
                <Form.Control
                  type="file"
                  required
                  onChange={(e) => setProductImage(e.target.files[0])}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
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

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  required
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Enter Price")}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Category</Form.Label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categoryInput}
                  label="category"
                  onChange={(e) => setCategoryInput(e.target.value)}
                  defaultValue=""
                >
                  {categories.map((res) => (
                    <MenuItem key={res.id} value={res.id}>
                      {res.name}
                    </MenuItem>
                  ))}
                </Select>
              </Form.Group>



              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Brand</Form.Label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categoryInput}
                  label="category"
                  onChange={(e) => setBrandInput(e.target.value)}
                  defaultValue=""
                >
                  {brands.map((res) => (
                    <MenuItem key={res.id} value={res.id}>
                      {res.name}
                    </MenuItem>
                  ))}
                </Select>
              </Form.Group>


              <Button variant="outline-primary" type="submit">
                Create
              </Button>
              <Link to="/productTable">
                <Button variant="outline-dark" type="submit" className="mx-2">
                  Cancel
                </Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCreate;
