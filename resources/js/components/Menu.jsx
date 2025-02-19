// Menu.jsx
import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Menu = () => {
  return (
    <nav className="menu">
      <Link href="/pricing">Pricing</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact" className="btn btn-blue">Contact</Link>
    </nav>
  );
};

export default Menu;