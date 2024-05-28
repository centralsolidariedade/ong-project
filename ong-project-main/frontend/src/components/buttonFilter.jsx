import React, { useState } from 'react';
import '../components/buttonFilter.css';
import Filtro from './filtro.jsx';
import { FaArrowDown } from 'react-icons/fa';

const ButtonFilter = ({ onFilterSelect, onClearFilters }) => {
  const [showFiltro, setShowFiltro] = useState(false);

  const handleButtonClick = () => {
    setShowFiltro(!showFiltro);
  };

  return (
    <div>
      <button className='buttonFilter' onClick={handleButtonClick}>
        <FaArrowDown style={{ marginRight: '5px' }} />
      </button>

      {showFiltro ? (
        <div className="overlay">
          <div className="popup">
            <Filtro onFilterSelect={onFilterSelect} onClearFilters={onClearFilters} onClose={() => setShowFiltro(false)} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ButtonFilter;
