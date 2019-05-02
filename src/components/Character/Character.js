import React from 'react';
import Proptypes from 'prop-types';
import './Character.scss';

const Character = props => {
  const { id, name, image, description, onClick } = props;
  const mainOnclick = () => {
    return onClick(id);
  };
  return (
    <div className="Character">
      <div className="Character-wrapper" onClick={mainOnclick}>
        <div className="Character-wrapper-image-wrapper">
          <img
            src={image}
            alt={name}
            title={name}
            className="Character-wrapper-image-wrapper-image"
          />
        </div>
        <div className="Character-wrapper-name">{name}</div>
        {description ? (
          <div className="Character-wrapper-description">{description}</div>
        ) : (
          <div className="Character-wrapper-description not-available">
            Descrição não disponível
          </div>
        )}
      </div>
    </div>
  );
};

Character.defaultProps = {
  onClick: () => {},
  description: null
};

Character.propTypes = {
  id: Proptypes.oneOfType([Proptypes.string, Proptypes.number]).isRequired,
  name: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  description: Proptypes.string
};

export default Character;
