import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleMenu() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <div
        className={this.state.active ? 'menu-button active' : 'menu-button'}
        onClick={this.toggleMenu.bind(this)}
      >
        <div className="bar bar1" />
        <div className="bar bar2" />
      </div>
    );
  }
}

export default Navigation;
