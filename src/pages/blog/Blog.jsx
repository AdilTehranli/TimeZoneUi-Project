import React, { useEffect, useState } from 'react';
import '../blog/Blog.scss';
import Slider from '../../components/slider/Slider';
import { FaComments } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [item, setItem] = useState([]);
    const [q, setQ] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7027/api/Blogs')
            .then(res => {
                setItem(res.data);
                setFilteredItems(res.data);  
                // console.log(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    const handleSearch = () => {
        const filteredItems = item.filter(product =>
            product.title.toLowerCase().includes(q.toLowerCase())
        );
        setFilteredItems(filteredItems);
    };

    return (
        <div>
            <Slider title={"Blog"} />
            <div className="blog">
                <div className="container">
                    <div className="row">
                        <div className="blog__main col-8">
                            {filteredItems.length === 0 ? (
                                <div className="not-available">
                                    <p>Not Available</p>
                                </div>
                            ) : (
                                filteredItems.map((product, index) => (
                                    <div key={index} className="blog__main__item">
                                        <div className="blog__main__image">
                                         
                                        <img src={`https://localhost:7027//${product.blogImage}`} alt="image" />
                                            <div className="blog__main__position">
                                                <p>15 Jan</p>
                                            </div>
                                        </div>
                                        <div className="blog__main__texts">
                                            <Link className='blog__main__title' to={`/blogdetail/${product.id}`}>
                                            <h4>{product.title}</h4>
                                            </Link>
                                            <p>
                                                {product.description}
                                            </p>
                                            <p className="blog__icon">
                                                <FaComments /> 03 Comments
                                            </p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="blog__funktions col-4">
                            <div className="blog__funktions__inp">
                                <input
                                    className='form-control mt-3'
                                    type="text"
                                    placeholder='Search'
                                    value={q}
                                    onChange={(e) => setQ(e.target.value)}
                                    name='search-form'
                                />
                                <div className="blog__funktions__icon">
                                    <AiOutlineSearch className='blog__funktions__search' />
                                </div>
                            </div>
                            <button onClick={handleSearch}>SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
