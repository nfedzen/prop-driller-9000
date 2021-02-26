import React, { Component } from 'react';
import { render } from 'react-dom'


class Header extends Component{
  render() {
  return (
    <header>
      <img
        src = {this.props.src}
        alt = "logo"
      />
    </header>
  );
}
}

export default Header;
