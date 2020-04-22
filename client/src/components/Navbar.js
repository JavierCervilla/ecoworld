import React from 'react'
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className={window.innerWidth <= 1024 ? 'm-nav' : 'flex align-center justify-end'}>
      <Link className="mx-1 d-inline-block bold" to="/">Inicio</Link>
      <Link className="mx-1 d-inline-block bold" to="/Nosotros">Nosotros</Link>
      <Link className="mx-1 d-inline-block bold" to="/Contacto">Contacto</Link>
    </nav>
  )
}
