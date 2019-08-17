import React, { Component } from 'react'

import './Header.css'

export default class Header extends Component {
  render() {
    const { content, navTogIcon, searchIcon} = this.props;
    return (
      <header>
        <div className="wrap">
          header
        </div>
      </header>
    )
  }
}
