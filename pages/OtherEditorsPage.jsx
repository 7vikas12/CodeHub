import React from 'react';
import Navbar from '../components/Navbar';

const editors = [
  { name: 'C Online Compiler', href: 'https://www.programiz.com/c-programming/online-compiler/', img: '/images/c.png' },
  { name: 'C++ Online Compiler', href: 'https://www.programiz.com/cpp-programming/online-compiler/', img: '/images/c++.png' },
  { name: 'Java Online Compiler', href: 'https://www.programiz.com/java-programming/online-compiler/', img: '/images/java.png' },
  { name: 'Python Online Compiler', href: 'https://www.programiz.com/python-programming/online-compiler/', img: '/images/python.jpeg' },
  { name: 'HTML & CSS Editor', href: 'https://onecompiler.com/html/3wx7252uq', img: '/images/htmlcss.jpeg' },
  { name: 'JS Editor', href: 'https://onecompiler.com/html/3wx7252uq', img: '/images/js.png' }
];

export default function OtherEditorsPage() {
  return (
    <div className="wrap">
      <Navbar />
      <h2 style={{ padding: 16 }}>Other Language Code Editors</h2>
      <div className="grid cards">
        {editors.map(e => (
          <a key={e.name} className="card resource-card" href={e.href} target="_blank" rel="noreferrer">
            <div className="thumb"><img src={e.img} alt={e.name} /></div>
            <div className="card-title">{e.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
