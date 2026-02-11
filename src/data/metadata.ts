import type { CategoryInfo, MarketIndex, Author } from './types';

export const categories: CategoryInfo[] = [
  { id: 'markets', name: 'Markets', description: 'Equities, bonds, commodities and global market analysis', color: '#C9A84C' },
  { id: 'economy', name: 'Economy', description: 'Monetary policy, inflation, employment and macroeconomic trends', color: '#3498DB' },
  { id: 'startups', name: 'Startups', description: 'Venture capital, unicorns, and the innovation economy', color: '#9B59B6' },
  { id: 'banking', name: 'Banking', description: 'Financial regulation, institutional banking and fintech', color: '#1B2838' },
  { id: 'real-estate', name: 'Real Estate', description: 'Commercial and residential property markets worldwide', color: '#00B894' },
  { id: 'crypto', name: 'Crypto', description: 'Digital assets, blockchain regulation and DeFi developments', color: '#F39C12' },
  { id: 'leadership', name: 'Leadership', description: 'CEO interviews, corporate governance and executive insights', color: '#E74C3C' },
];

export const marketIndices: MarketIndex[] = [
  { name: 'S&P 500', value: '5,847.32', change: '+42.18', changePercent: '+0.73%', up: true },
  { name: 'DJIA', value: '43,291.07', change: '+187.44', changePercent: '+0.43%', up: true },
  { name: 'NASDAQ', value: '19,124.56', change: '-31.22', changePercent: '-0.16%', up: false },
  { name: 'FTSE 100', value: '8,412.88', change: '+28.91', changePercent: '+0.34%', up: true },
  { name: 'Nikkei 225', value: '39,847.12', change: '-112.33', changePercent: '-0.28%', up: false },
  { name: 'EUR/USD', value: '1.0842', change: '+0.0023', changePercent: '+0.21%', up: true },
  { name: 'Gold', value: '2,891.40', change: '+18.70', changePercent: '+0.65%', up: true },
  { name: 'WTI Crude', value: '78.42', change: '-0.87', changePercent: '-1.10%', up: false },
  { name: 'BTC/USD', value: '97,284.50', change: '+1,847.30', changePercent: '+1.94%', up: true },
  { name: '10Y Treasury', value: '4.21%', change: '-0.03', changePercent: '-0.71%', up: false },
];

export const authors: Record<string, Author> = {
  'victoria-chen': {
    name: 'Victoria Chen',
    role: 'Senior Markets Correspondent',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=victoria',
    bio: 'Victoria Chen covers global equity markets and macroeconomic trends. Previously at Reuters and the Wall Street Journal, she brings 15 years of financial journalism experience.',
  },
  'marcus-reid': {
    name: 'Marcus Reid',
    role: 'Chief Economics Editor',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=marcus',
    bio: 'Marcus Reid leads CrescentBrief\'s economics coverage. A former Federal Reserve analyst, he specializes in central bank policy and monetary economics.',
  },
  'sarah-okonkwo': {
    name: 'Sarah Okonkwo',
    role: 'Technology & Startups Editor',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=sarah',
    bio: 'Sarah Okonkwo covers venture capital and the startup ecosystem. She previously reported on Silicon Valley for TechCrunch and Bloomberg Technology.',
  },
  'james-hartwell': {
    name: 'James Hartwell',
    role: 'Banking & Finance Correspondent',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=james',
    bio: 'James Hartwell covers banking regulation and institutional finance. He holds an MBA from Wharton and spent a decade in investment banking before turning to journalism.',
  },
  'elena-vasquez': {
    name: 'Elena Vasquez',
    role: 'Real Estate & Property Editor',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=elena',
    bio: 'Elena Vasquez specializes in commercial and residential real estate markets across the Americas and Europe.',
  },
  'daniel-park': {
    name: 'Daniel Park',
    role: 'Digital Assets Correspondent',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=daniel',
    bio: 'Daniel Park has covered cryptocurrency and blockchain technology since 2017. He provides in-depth analysis of digital asset regulation and DeFi markets.',
  },
  'catherine-liu': {
    name: 'Catherine Liu',
    role: 'Leadership & Corporate Governance Editor',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=catherine',
    bio: 'Catherine Liu profiles C-suite executives and covers corporate governance. She is a two-time Pulitzer Prize finalist for her investigative reporting.',
  },
};
