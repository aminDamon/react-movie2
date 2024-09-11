import React, { Component } from 'react'
import './styles/header-style.css'
import '../../node_modules/font-awesome/css/font-awesome.css'
import searchIcon from './pic/Vector.png'

import { NavLink , Outlet } from 'react-router-dom'
export class Header extends Component {
  render() {
    const {backHomeHandler} = this.props
    return (
        <header>
        <div className='menu'>
            <ul>
                <li><NavLink to='/' onClick={backHomeHandler}>Home</NavLink></li>
                <li><a href='#'>Genre</a></li>
                <li><a href='#'>Country</a></li>
            </ul>
            <i className='fa fa-home' onClick={backHomeHandler}></i>
            <i className='fa-solid fa-masks-theater'></i>
        </div>
        <div className='search_box'>
            <input type='text' placeholder='Search movies.......'></input>
            <img src={searchIcon} alt="A description of the image" />
        </div>
        <div className='category'>
        <ul>
                <li><a href='#'>Movies</a></li>
                <li><a href='#'>Series</a></li>
                <li><a href='#'>Animation</a></li>
            </ul>
        </div>
        <div className='login'>
            <div>
                <span>Login</span>
                /
                <span>Signup</span>
                
            </div>
            <i className='fa fa-bell-o'></i>
        </div>
        <div className='mobile_icon'>
            <i className='fa fa-search'></i>
            <i className='fa fa-user'></i>
        </div>
        <main>
            <Outlet />
        </main>
      </header>
    )
  }
}

export default Header
