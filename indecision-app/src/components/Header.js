import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);

// After the component is made, we can tack on default properties (must be called defaultProps)
// defaultProps is a keyword - naming it something else will not work
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;