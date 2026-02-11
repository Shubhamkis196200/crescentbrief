import { Link } from 'react-router-dom';
import type { Article } from '../data/types';
import { categories } from '../data/metadata';

export function ArticleCard({ article, size = 'normal' }: { article: Article; size?: 'large' | 'normal' | 'small' }) {
  const cat = categories.find(c => c.id === article.category);
  
  if (size === 'large') {
    return (
      <Link to={`/article/${article.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-lg">
          <img src={article.image} alt={article.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-sans font-bold uppercase tracking-wider px-2 py-1 rounded" style={{ backgroundColor: cat?.color, color: '#fff' }}>{cat?.name}</span>
              <span className="text-xs font-sans uppercase tracking-wider text-gray-300">{article.type}</span>
            </div>
            <h2 className="font-editorial text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#C9A84C] transition-colors">{article.title}</h2>
            <p className="text-gray-300 font-sans text-sm line-clamp-2 mb-3">{article.subtitle}</p>
            <div className="flex items-center gap-3 text-xs text-gray-400 font-sans">
              <span>{article.author.name}</span>
              <span>·</span>
              <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <span>·</span>
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  
  if (size === 'small') {
    return (
      <Link to={`/article/${article.slug}`} className="group flex gap-4 py-4 border-b border-gray-200">
        <img src={article.image} alt={article.title} className="w-24 h-24 object-cover rounded flex-shrink-0" />
        <div>
          <span className="text-xs font-sans font-bold uppercase tracking-wider" style={{ color: cat?.color }}>{cat?.name}</span>
          <h3 className="font-editorial text-sm font-bold mt-1 group-hover:text-[#C9A84C] transition-colors line-clamp-2">{article.title}</h3>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-sans mt-1">
            <span>{article.readTime} min</span>
            <span>·</span>
            <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </div>
        </div>
      </Link>
    );
  }
  
  return (
    <Link to={`/article/${article.slug}`} className="group block">
      <div className="overflow-hidden rounded-lg">
        <img src={article.image} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="mt-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-sans font-bold uppercase tracking-wider" style={{ color: cat?.color }}>{cat?.name}</span>
          {article.type !== 'news' && (
            <>
              <span className="text-gray-300">·</span>
              <span className="text-xs font-sans uppercase tracking-wider text-gray-500">{article.type}</span>
            </>
          )}
        </div>
        <h3 className="font-editorial text-lg font-bold group-hover:text-[#C9A84C] transition-colors line-clamp-2">{article.title}</h3>
        <p className="text-gray-600 font-sans text-sm mt-1 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-gray-500 font-sans mt-2">
          <span>{article.author.name}</span>
          <span>·</span>
          <span>{article.readTime} min read</span>
        </div>
      </div>
    </Link>
  );
}

export function MarketCard({ name, value, change, changePercent, up }: { name: string; value: string; change: string; changePercent: string; up: boolean }) {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="text-xs font-sans font-bold text-gray-500 uppercase tracking-wider">{name}</div>
      <div className="text-xl font-sans font-bold mt-1">{value}</div>
      <div className={`text-sm font-sans font-semibold mt-1 ${up ? 'text-[#00B894]' : 'text-[#E74C3C]'}`}>
        {change} ({changePercent}) {up ? '▲' : '▼'}
      </div>
    </div>
  );
}
