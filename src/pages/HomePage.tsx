import { Helmet } from 'react-helmet-async';
import { articles, getFeaturedArticle, getTrendingArticles } from '../data/articles';
import { marketIndices } from '../data/metadata';
import { ArticleCard, MarketCard } from '../components/ArticleCard';

export default function HomePage() {
  const featured = getFeaturedArticle();
  const trending = getTrendingArticles().filter(a => a.id !== featured.id);
  const latest = articles.filter(a => a.id !== featured.id && !trending.includes(a)).slice(0, 6);

  return (
    <>
      <Helmet>
        <title>CrescentBrief — Business & Financial Intelligence</title>
        <meta name="description" content="Authoritative coverage of global markets, economics, startups, banking, real estate, crypto, and corporate leadership." />
        <meta property="og:title" content="CrescentBrief — Business & Financial Intelligence" />
        <meta property="og:description" content="Authoritative coverage of global markets, economics, startups, banking, real estate, crypto, and corporate leadership." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "CrescentBrief",
          "url": "https://crescentbrief.netlify.app",
          "logo": "https://crescentbrief.netlify.app/logo.png",
          "description": "Business & Financial Intelligence"
        })}</script>
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero */}
        <section className="mb-12">
          <ArticleCard article={featured} size="large" />
        </section>
        
        {/* Market Overview */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-editorial text-xl font-bold">Market Overview</h2>
            <span className="text-xs font-sans text-gray-500">Delayed 15 min · Feb 10, 2026</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {marketIndices.slice(0, 5).map(idx => (
              <MarketCard key={idx.name} {...idx} />
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Latest Articles */}
          <section className="lg:col-span-2">
            <h2 className="font-editorial text-xl font-bold mb-6 pb-3 border-b-2 border-[#C9A84C]">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {latest.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>

          {/* Trending Sidebar */}
          <aside>
            <h2 className="font-editorial text-xl font-bold mb-6 pb-3 border-b-2 border-[#C9A84C]">Trending</h2>
            {trending.map(article => (
              <ArticleCard key={article.id} article={article} size="small" />
            ))}
            
            {/* Additional market data */}
            <div className="mt-8 bg-[#1B2838] rounded-lg p-5">
              <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-[#C9A84C] mb-4">More Markets</h3>
              {marketIndices.slice(5).map(idx => (
                <div key={idx.name} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-0">
                  <span className="text-gray-300 text-sm font-sans">{idx.name}</span>
                  <div className="text-right">
                    <span className="text-white text-sm font-sans font-semibold">{idx.value}</span>
                    <span className={`text-xs font-sans ml-2 ${idx.up ? 'text-[#00B894]' : 'text-[#E74C3C]'}`}>{idx.changePercent}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
