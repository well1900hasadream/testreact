import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer>
          <ul>
            <li>
              <NavLink to="/home">首页</NavLink>
            </li>
            <li>
              <NavLink to="/cate">分类</NavLink>
            </li>
            <li>
              <NavLink to="/shopcart">购物车</NavLink>
            </li>
            <li>
              <NavLink to="/user">个人中心</NavLink>
            </li>
          </ul>
      </footer>
    )
  }
}
