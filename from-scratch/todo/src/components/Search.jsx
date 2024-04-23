import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className='search'>
        <h2>Pesquisar:</h2>
        <input
         type="text" 
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         placeholder='Digite sua pesquisa'
         />
         </div>
  );
};

export default Search
