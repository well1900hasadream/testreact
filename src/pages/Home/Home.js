import React, { Component } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header';

import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <div className="content">home</div>
        <Footer></Footer>
      </div>
    )
  }
}
