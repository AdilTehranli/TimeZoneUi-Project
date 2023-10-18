import React, { useState, useEffect } from 'react';
import '../blogdetails/BlogDetails.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from '../../components/slider/Slider';
import { FaComments } from 'react-icons/fa';
import { LiaHeartSolid } from 'react-icons/lia';
const BlogDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://localhost:7027/api/Blogs/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div>
            <Slider title="BlogDetails" />
            <div className="blogdetails">
                <div className="container">
                    <div className="row">
                        <div className="blogdetails__main col-lg-8">
                            {product && (
                                <div>
                                    <img src={`https://localhost:7027//${product.blogImage}`} alt={product.title} />
                                    <div className="blogdetails__title">{product.title}</div>
                                    <p><FaComments/> (3)Comments</p>
                                    <div className="blogdetails__description">{product.description}</div>
                                    <div className='blofdetails__likes'><LiaHeartSolid/> Lily and 4 people like this</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;
