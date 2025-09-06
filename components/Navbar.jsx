// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="topbar card-top">
      <div className="left">
        <Link className="topbtn" to="/other-editors">
          Other Language Code Editor
        </Link>
      </div>

      <div className="center">
        <Link className="topbtn" to="/editor">
          Live Code Editor
        </Link>
      </div>

      <div className="right">
        <Link className="topbtn" to="/resources">
          Resources
        </Link>
      </div>
    </div>
  );
}
