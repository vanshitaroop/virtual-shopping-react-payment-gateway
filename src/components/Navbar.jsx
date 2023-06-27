import React from 'react'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
     <header class="header_section">
                    <div class="container">
                        <nav class="navbar navbar-expand-lg custom_nav-container">
                            <a class="navbar-brand" href="index.html"><img width="250" src={logo} alt="#" /></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class=""></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <Link class="nav-link" to="/">Home <span class="sr-only"></span></Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="product">Products</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="contact">Contact</Link>
                                    </li>
                                  
                                   
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
   </>
  )
}

export default Navbar