import React from 'react';
import LoadingImage from '../../images/loading.gif';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="Loading fullscreen">
      <div className="Loading-wrapper">
        <img src={LoadingImage} alt="Carregando" title="Carregando" />
        <span className="Loading-wrapper-texto">Carregando</span>
      </div>
    </div>
  );
};

export default Loading;
