

import React from 'react'
import { Container } from 'react-bootstrap'

const FilterInput = ({value,onChange}) => {
  return (
    <Container className='d-flex flex-column align-items-center my-5 justify-content-center'>
         <label htmlFor="filterId"></label>
      <input 
      style={{width:'350px',padding:'10px'}}
      placeholder='Filter by ID:'
        type="number"
        id="filterId"
        value={value}
        onChange={onChange}
      />
    </Container>
      
    
  )
}

export default FilterInput
