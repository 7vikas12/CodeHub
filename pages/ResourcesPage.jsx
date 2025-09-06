import React from 'react';
import Navbar from '../components/Navbar';

const resources = [
  { name: 'C Resource', href: 'https://www.geeksforgeeks.org/c/c-programming-language/', img: '/images/c.png' },
  { name: 'C++ Resource', href: 'https://www.geeksforgeeks.org/cpp/c-plus-plus/', img: '/images/c++.png' },
  { name: 'Java Resource', href: 'https://www.geeksforgeeks.org/java/java/', img: '/images/java.png' },
  { name: 'Python Resource', href: 'https://www.geeksforgeeks.org/python/python-programming-language-tutorial/', img: '/images/python.jpeg' },
  { name: 'HTML & CSS Resource', href: 'https://www.geeksforgeeks.org/html/html-css/', img: '/images/htmlcss.jpeg' },
  { name: 'JavaScript Resource', href: 'https://www.w3schools.com/js/', img: '/images/js.png' }
];

export default function ResourcesPage() {
  return (
    <div className="wrap">
      <Navbar />
      <h2 style={{ padding: 16 }}>Resources</h2>
      <div className="grid cards">
        {resources.map(r => (
          <a key={r.name} className="card resource-card" href={r.href} target="_blank" rel="noreferrer">
            <div className="thumb"><img src={r.img} alt={r.name} /></div>
            <div className="card-title">{r.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
