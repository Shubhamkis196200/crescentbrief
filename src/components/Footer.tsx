import { Link } from 'react-router-dom';
import { categories } from '../data/metadata';

export default function Footer() {
  return (
    <footer className="bg-[#1B2838] text-white mt-16">
      {/* Newsletter */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h3 className="font-editorial text-2xl font-bold mb-2">The Morning Brief</h3>
          <p className="text-gray-400 font-sans mb-6 max-w-lg mx-auto">Get the day's most important business and finance news delivered to your inbox every morning at 6 AM ET.</p>
          <form className="flex max-w-md mx-auto gap-2" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-600 rounded text-white font-sans text-sm focus:outline-none focus:border-[#C9A84C]" />
            <button className="px-6 py-2.5 bg-[#C9A84C] text-[#1B2838] font-sans font-bold text-sm rounded hover:bg-[#d4b85e] transition-colors">Subscribe</button>
          </form>
        </div>
      </div>
      
      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-[#C9A84C] mb-4">Sections</h4>
          {categories.map(cat => (
            <Link key={cat.id} to={`/category/${cat.id}`} className="block text-gray-400 hover:text-white text-sm font-sans py-1">{cat.name}</Link>
          ))}
        </div>
        <div>
          <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-[#C9A84C] mb-4">Company</h4>
          <p className="text-gray-400 text-sm font-sans py-1">About Us</p>
          <p className="text-gray-400 text-sm font-sans py-1">Careers</p>
          <p className="text-gray-400 text-sm font-sans py-1">Contact</p>
          <p className="text-gray-400 text-sm font-sans py-1">Advertise</p>
        </div>
        <div>
          <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-[#C9A84C] mb-4">Legal</h4>
          <p className="text-gray-400 text-sm font-sans py-1">Terms of Service</p>
          <p className="text-gray-400 text-sm font-sans py-1">Privacy Policy</p>
          <p className="text-gray-400 text-sm font-sans py-1">Cookie Policy</p>
        </div>
        <div>
          <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-[#C9A84C] mb-4">Follow Us</h4>
          <p className="text-gray-400 text-sm font-sans py-1">Twitter / X</p>
          <p className="text-gray-400 text-sm font-sans py-1">LinkedIn</p>
          <p className="text-gray-400 text-sm font-sans py-1">YouTube</p>
          <p className="text-gray-400 text-sm font-sans py-1">RSS Feed</p>
        </div>
      </div>
      
      <div className="border-t border-gray-700 py-6 text-center text-gray-500 text-xs font-sans">
        © 2026 CrescentBrief. All rights reserved. Market data is delayed by at least 15 minutes.
      </div>
    </footer>
  );
}
