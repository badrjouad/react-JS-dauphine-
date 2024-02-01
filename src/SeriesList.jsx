import React, { useState } from 'react';
import './fuzz.css';
import seriesData from './series.json'; 


const SeriesList = () => {

  const seriesPerPage = 5; // Nombre de séries par page
  const [currentPage, setCurrentPage] = useState(0);

  // Index de la première et de la dernière série sur la page actuelle
  const indexOfLastSeries = (currentPage + 1) * seriesPerPage;
  const indexOfFirstSeries = indexOfLastSeries - seriesPerPage;
  const currentSeries = seriesData.slice(indexOfFirstSeries, indexOfLastSeries);

  // Pagination - changement de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <h2>Liste de Séries Préférées</h2>
      <table className="series-table">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Image</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {currentSeries.map((series, index) => (
            <tr key={index}>
              <td>{series.title}</td>
              <td>
                <img src={series.image} alt={series.title} />
              </td>
              <td>{series.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: Math.ceil(seriesData.length / seriesPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index)}>{index + 1}</button>
        ))}
      </div>
    </div>
  );
};



export default SeriesList;
