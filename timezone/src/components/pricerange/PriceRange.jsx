import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const PriceRange = ({ onPriceChange }) => {
  const [value, setValue] = React.useState([1, 1000]); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onPriceChange(newValue);
  };

  return (
    <Box sx={{ width: 200, marginTop: '200px' }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={1}
        max={1000}
      />
      <p>
        Price Range: ${value[0]} - ${value[1]}
      </p>
    </Box>
  );
};

export default PriceRange;
