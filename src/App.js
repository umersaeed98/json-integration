import React, { useState } from 'react';
import CommentsTable from './components/commentsTable/CommentsTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FilterInput from './components/filterInput/FilterInput';

function App() {
  const [filterId, setFilterId] = useState('');

  const handleFilterChange = (event) => {
    setFilterId(event.target.value);
  };

  return (
    <div className="App">
      <FilterInput value={filterId} onChange={handleFilterChange}/>
      <CommentsTable filterId={filterId} />
    </div>
  );
}

export default App;
