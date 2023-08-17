


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './commentsTable.css';
import { Container, Table } from 'react-bootstrap';
import FilterInput from '../filterInput/FilterInput';

function CommentsTable() {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const [expandedComments, setExpandedComments] = useState([]);
  const [filterId, setFilterId] = useState('');
  const [filteredComments, setFilteredComments] = useState([]);
  const [originalComments, setOriginalComments] = useState([]); // Add this state

  const handlePressChange = (e) => {
    setFilterId(e.target.value);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    filterComments();
  }, [filterId, comments]);

  const fetchComments = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
      const data = response.data;
      setComments(data);
      setOriginalComments(data); // Save original comments data
      filterComments();
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const filterComments = () => {
    const filtered = comments.filter(
      (comment) =>
        filterId === '' || comment.id.toString() === filterId
    );
    setFilteredComments(filtered);
    setCurrentPage(0);
  };

  const resetComments = () => {
    setFilterId('');
    setFilteredComments(originalComments); // Reset to original comments
    setCurrentPage(0);
  };

  const totalPages = Math.ceil(filteredComments.length / itemsPerPage);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedComments = filteredComments.slice(startIndex, endIndex);

  const toggleExpand = (commentId) => {
    setExpandedComments((prevExpandedComments) =>
      prevExpandedComments.includes(commentId)
        ? prevExpandedComments.filter((id) => id !== commentId)
        : [...prevExpandedComments, commentId]
    );
  };

  return (
    <>
      <FilterInput onEnterPress={handlePressChange} onClear={resetComments} />
      <Container className='d-flex flex-column align-items-center my-2 justify-content-center'>
        <h2 className='fw-bold display-4'>Check out Our Best Comments </h2>
        <Table striped bordered hover className='mt-3'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {paginatedComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>
                  {expandedComments.includes(comment.id) ||
                  comment.body.length <= 20 ? (
                    comment.body
                  ) : (
                    <>
                      {comment.body.slice(0, 20)}
                      <span
                        style={{ color: 'black', cursor: 'pointer' }}
                        onClick={() => toggleExpand(comment.id)}
                      >
                        ...
                      </span>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={totalPages}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
        />
      </Container>
    </>
  );
}

export default CommentsTable;
