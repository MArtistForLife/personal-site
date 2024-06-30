import React from 'react';
import PropTypes from 'prop-types';

const PhotoCard = ({ data }) => (
  <div className="card-container">
    <img src={`${process.env.PUBLIC_URL}${data.image}`} className="card-img-top" alt={data.caption} />
    <div className="card-body">
      <h5 className="card-title">{data.caption}</h5>
      <p className="card-text">Price: ${data.price}</p>
      <a href={data.ebayLink} className="card-link">
        <img src={`${process.env.PUBLIC_URL}/images/functionIcon/ebayCart.png`} alt="eBay Cart" className="card-icon" />
      </a>
    </div>
  </div>
);

PhotoCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ebayLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default PhotoCard;
