import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const PriceRange = ({ onPriceChange, maxPrice }) => {
  const [value, setValue] = useState([1, maxPrice]); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onPriceChange(newValue);
  };

  return (
    <Box sx={{ width: 200, marginTop: '20px' }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={1}
        max={maxPrice}
      />
      <p>
        Price Range: ${value[0]} - ${value[1]}
      </p>
    </Box>
  );
};

export default PriceRange;
