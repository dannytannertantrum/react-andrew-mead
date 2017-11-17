import React from 'react';

const PortfolioItem = (props) => (
  <div>
    This is the item with id of {props.match.params.id}
  </div>
);

export default PortfolioItem;