import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    {/* NavLink is basically identical to Link, but with a few extra props */}
    {/* NavLink is perfect for, well...navs. E.g. when we're on a page, we want an "active" class */}
    <NavLink to="/" activeClassName="is-active" exact={true}>Home page</NavLink>
    <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio page</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact page</NavLink>
  </header>
);

export default Header;