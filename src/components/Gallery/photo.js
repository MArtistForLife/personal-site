import React from 'react';
import PropTypes from 'prop-types';

const PhotoCard = ({ data }) => (
  <div className="card-container">
    <img src={`${process.env.PUBLIC_URL}${data.image}`} className="card-img-top" alt={data.caption} />
    <div className="card-body">
      <h5 className="card-title">{data.caption}</h5>
      <p className="card-text">Price: ${data.price}</p>
    </div>
  </div>
);

PhotoCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default PhotoCard;
