import React, { useEffect, useState } from "react";
import "../wrapper/Wrapper.scss";
import axios from "axios";

const Wrapper = () => {
 const [wrapper, setWrapper] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://localhost:7027/api/Wrappers');
      setWrapper(result.data);
    };

    fetchData();
 }, []);

 return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="row">
            {
              wrapper.map((item, index) => (
                <div key={index} className="wrapper__texts col-4">
                 <i class={item.icon}></i>
                 <h4>{item.title}</h4>
                 <p>{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
 );
};

export default Wrapper;