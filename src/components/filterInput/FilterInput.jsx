import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const FilterInput = ({ onEnterPress, onClear }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onEnterPress(event);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);
    if (value === '') {
      onEnterPress(event);
      onClear(); // Call the onClear function to reset comments
    }
  };

  return (
    <Container className='d-flex flex-column align-items-center my-5 justify-content-center'>
      <input
        style={{ width: '350px', padding: '10px' }}
        placeholder='Filter by ID:'
        type="number"
        value={filterValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
};

export default FilterInput;
