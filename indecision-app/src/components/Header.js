import React from 'react';

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
);

// After the component is made, we can tack on default properties (must be called defaultProps)
// defaultProps is a keyword - naming it something else will not work
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;