import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getArticlesByCategory } from '../data/articles';
import { categories } from '../data/metadata';
import { ArticleCard } from '../components/ArticleCard';

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const cat = categories.find(c => c.id === categoryId);
  const catArticles = getArticlesByCategory(categoryId || '');

  if (!cat) return <div className="max-w-7xl mx-auto px-4 py-16 text-center"><h1 className="font-editorial text-3xl">Category not found</h1></div>;

  return (
    <>
      <Helmet>
        <title>{cat.name} — CrescentBrief</title>
        <meta name="description" content={cat.description} />
        <meta property="og:title" content={`${cat.name} — CrescentBrief`} />
        <meta property="og:description" content={cat.description} />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-10 border-b-2 pb-6" style={{ borderColor: cat.color }}>
          <h1 className="font-editorial text-4xl font-bold">{cat.name}</h1>
          <p className="text-gray-600 font-sans mt-2 text-lg">{cat.description}</p>
        </div>
        
        {catArticles.length === 0 ? (
          <p className="text-gray-500 font-sans text-center py-16">No articles in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
