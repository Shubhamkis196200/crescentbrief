import { marketIndices } from '../data/metadata';

export default function MarketTicker() {
  return (
    <div className="bg-[#0F1923] text-white text-sm overflow-hidden border-b border-gray-800">
      <div className="flex ticker-scroll whitespace-nowrap py-1.5">
        {[...marketIndices, ...marketIndices].map((idx, i) => (
          <span key={i} className="inline-flex items-center mx-6 font-sans">
            <span className="text-gray-400 mr-2">{idx.name}</span>
            <span className="font-semibold mr-2">{idx.value}</span>
            <span className={idx.up ? 'text-[#00B894]' : 'text-[#E74C3C]'}>
              {idx.change} ({idx.changePercent})
              {idx.up ? ' ▲' : ' ▼'}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
