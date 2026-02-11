import { Link } from 'react-router-dom';
import { categories } from '../data/metadata';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="bg-[#1B2838] text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3 border-b border-gray-700">
          <div className="text-sm text-gray-400 font-sans">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <div className="flex items-center gap-4 text-sm">
            <button className="text-[#C9A84C] hover:text-white font-semibold font-sans">Subscribe</button>
            <span className="text-gray-500">|</span>
            <button className="text-gray-400 hover:text-white font-sans">Sign In</button>
          </div>
        </div>
        
        {/* Logo */}
        <div className="py-5 text-center border-b border-gray-700">
          <Link to="/" className="hover:text-white">
            <h1 className="text-4xl md:text-5xl font-editorial font-bold tracking-tight">
              <span className="text-[#C9A84C]">Crescent</span>Brief
            </h1>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mt-1 font-sans">Business & Financial Intelligence</p>
          </Link>
        </div>
        
        {/* Nav */}
        <nav className="relative">
          <button 
            className="md:hidden w-full py-3 text-center text-sm font-sans"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰ Menu
          </button>
          <div className={`${menuOpen ? 'block' : 'hidden'} md:flex md:justify-center md:gap-1 py-1`}>
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className="block md:inline-block px-4 py-2.5 text-sm font-sans font-semibold uppercase tracking-wider text-gray-300 hover:text-[#C9A84C] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
