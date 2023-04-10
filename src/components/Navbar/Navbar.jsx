import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div class="container">
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Images App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link fw-bold" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        
        <a class="nav-link fw-bold">
          <Link to="/library">Library</Link>
        </a>
        
      </li>
      <li class="nav-item">
        <a class="nav-link fw-bold" href="#">Contribute</a>
      </li>
      
    </ul>
  </div>
</nav>
        </div>
        
    )
}

export default Navbar
