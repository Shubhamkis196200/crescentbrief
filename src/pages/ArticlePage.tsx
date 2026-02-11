import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getArticleBySlug, getRelatedArticles } from '../data/articles';
import { categories } from '../data/metadata';
import { ArticleCard } from '../components/ArticleCard';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || '');

  if (!article) return <div className="max-w-7xl mx-auto px-4 py-16 text-center"><h1 className="font-editorial text-3xl">Article not found</h1></div>;

  const cat = categories.find(c => c.id === article.category);
  const related = getRelatedArticles(article);
  const paragraphs = article.content.split('\n\n');

  return (
    <>
      <Helmet>
        <title>{article.title} — CrescentBrief</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={article.image} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": article.title,
          "description": article.excerpt,
          "image": article.image,
          "datePublished": article.date,
          "author": { "@type": "Person", "name": article.author.name },
          "publisher": {
            "@type": "Organization",
            "name": "CrescentBrief",
            "logo": { "@type": "ImageObject", "url": "https://crescentbrief.netlify.app/logo.png" }
          },
          "articleSection": cat?.name,
        })}</script>
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Category & Type */}
        <div className="flex items-center gap-3 mb-4">
          <Link to={`/category/${article.category}`} className="text-xs font-sans font-bold uppercase tracking-wider px-2 py-1 rounded text-white" style={{ backgroundColor: cat?.color }}>{cat?.name}</Link>
          {article.type !== 'news' && (
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-gray-500 border border-gray-300 px-2 py-1 rounded">{article.type}</span>
          )}
        </div>

        {/* Title */}
        <h1 className="font-editorial text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">{article.title}</h1>
        <p className="font-sans text-xl text-gray-600 mb-6">{article.subtitle}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 pb-6 mb-8 border-b border-gray-200">
          <img src={article.author.avatar} alt={article.author.name} className="w-12 h-12 rounded-full bg-gray-200" />
          <div>
            <div className="font-sans font-semibold">{article.author.name}</div>
            <div className="text-sm text-gray-500 font-sans">
              {article.author.role} · {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · {article.readTime} min read
            </div>
          </div>
          {/* Share buttons */}
          <div className="ml-auto flex gap-2">
            {['Twitter', 'LinkedIn', 'Email'].map(platform => (
              <button key={platform} className="text-xs font-sans px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-100 transition-colors">{platform}</button>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <figure className="mb-8">
          <img src={article.image} alt={article.imageCaption} className="w-full rounded-lg" />
          <figcaption className="text-sm text-gray-500 font-sans mt-2 italic">{article.imageCaption}</figcaption>
        </figure>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {paragraphs.map((p, i) => {
            if (p.startsWith('## ')) {
              return <h2 key={i} className="font-editorial text-2xl font-bold mt-10 mb-4">{p.replace('## ', '')}</h2>;
            }
            if (p.startsWith('**') && p.endsWith('**')) {
              return <h3 key={i} className="font-editorial text-xl font-bold mt-8 mb-3">{p.replace(/\*\*/g, '')}</h3>;
            }
            if (p.startsWith('**')) {
              // Bold lead paragraph (like in vertical AI article)
              const parts = p.split('**');
              return (
                <p key={i} className="font-sans text-lg leading-relaxed mb-5">
                  {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
                </p>
              );
            }
            if (p.startsWith('"') || p.startsWith('"')) {
              return (
                <blockquote key={i} className="border-l-4 border-[#C9A84C] pl-6 my-8 italic font-editorial text-xl text-gray-700">
                  {p}
                </blockquote>
              );
            }
            return <p key={i} className="font-sans text-lg leading-relaxed mb-5 text-gray-800">{p}</p>;
          })}
        </div>

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span key={tag} className="text-xs font-sans px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full">{tag}</span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg flex gap-4 items-start">
          <img src={article.author.avatar} alt={article.author.name} className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0" />
          <div>
            <div className="font-sans font-bold">{article.author.name}</div>
            <div className="text-sm text-gray-500 font-sans mb-2">{article.author.role}</div>
            <p className="text-sm text-gray-600 font-sans">{article.author.bio}</p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-200">
          <h2 className="font-editorial text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map(a => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
