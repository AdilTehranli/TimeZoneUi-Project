import React from 'react';
import '../blog/Blog.scss';
import Slider from '../../components/slider/Slider';
import { FaComments } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
const Blog = () => {
  return (
    <div>
        <Slider title={"Blog"}/>
        <div className="blog">
            <div className="container">
                <div className="row">

                <div className="blog__main col-8">
                    <div className="blog__main__image">

                    <img src="https://themewagon.github.io/timezone/assets/img/blog/single_blog_1.png" alt="" />
                    <div className="blog__main__position">
                        <p>15 Jan</p>
                    </div>
                    </div>
                    <div className="blog__main__texts">

                    <h4>Google inks pact for new 35-storey office</h4>
                    <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it  <br /> first without heaven in place seed it second morning saying.</p>
                    <p className='blog__icon'> <FaComments/> 03 Comments</p>
                    </div>
                </div>
                <div className="blog__funktions col-4">
                    <div className="blog__funktions__inp">
                    <input className='form-control mt-3' type="text" placeholder='Search'  />
                    <div className="blog__funktions__icon">
                        <AiOutlineSearch className='blog__funktions__search' />
                    </div>
                    </div>
                    <button>SEARCH</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog