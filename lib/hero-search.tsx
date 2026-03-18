'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function HeroSearch() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/firmaer/?sok=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/firmaer/');
    }
  };

  return (
    <div className="hero-search-card animate-in animate-in-3">
      <h3>Søk etter firma</h3>
      <p>Finn regnskapsfører etter navn, bydel eller tjeneste</p>
      <div className="hero-search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="f.eks. Deloitte, Sentrum..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
        />
      </div>
      <button className="hero-search-btn" onClick={handleSearch}>Søk</button>
    </div>
  );
}
