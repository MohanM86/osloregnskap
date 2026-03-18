'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import type { Firm } from '@/lib/data';

/* ─── FAQ Accordion ─── */
export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="animate-in" style={{ marginTop: '3rem' }}>
      <h2 className="section-heading">Ofte stilte spørsmål</h2>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            <span>{item.q}</span>
            <svg className={`faq-chevron ${openIndex === i ? 'open' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
          </button>
          <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
            {item.a}
          </div>
        </div>
      ))}
    </section>
  );
}

/* ─── Animated Counter ─── */
export function AnimatedStat({ value, label }: { value: number; label: string }) {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 1200;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayed(Math.round(eased * value));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="stat-card">
      <span className="stat-num">{displayed}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

/* ─── Bar Chart (horizontal, animated) ─── */
export function BarChart({ data, title }: { data: { label: string; value: number; href?: string }[]; title: string }) {
  const max = Math.max(...data.map(d => d.value));
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="chart-container">
      <div className="chart-title">{title}</div>
      <div className="bar-chart">
        {data.map((d, i) => (
          <div key={i} className="bar-row">
            <div className="bar-label">
              {d.href ? <Link href={d.href} style={{ color: 'var(--fg-secondary)' }}>{d.label}</Link> : d.label}
            </div>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{
                  width: visible ? `${Math.max((d.value / max) * 100, 8)}%` : '0%',
                  transition: `width 1s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.06}s`,
                }}
              >
                {d.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Timeline Chart (vertical bars) ─── */
export function TimelineChart({ data, title }: { data: { label: string; value: number }[]; title: string }) {
  const max = Math.max(...data.map(d => d.value));
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="chart-container">
      <div className="chart-title">{title}</div>
      <div className="timeline-chart">
        {data.map((d, i) => (
          <div key={i} className="timeline-bar-wrapper">
            <div
              className="timeline-bar"
              style={{
                height: visible ? `${Math.max((d.value / max) * 160, 4)}px` : '0px',
                transition: `height 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.05}s`,
              }}
              title={`${d.label}: ${d.value}`}
            />
            <div className="timeline-bar-label">{d.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Donut Chart (SVG) ─── */
export function DonutChart({ data, title }: { data: { label: string; value: number; color: string }[]; title: string }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let cumulativePercent = 0;
  const segments = data.map(d => {
    const percent = d.value / total;
    const startAngle = cumulativePercent * 2 * Math.PI;
    cumulativePercent += percent;
    const endAngle = cumulativePercent * 2 * Math.PI;

    const r = 70;
    const cx = 90;
    const cy = 90;
    const x1 = cx + r * Math.cos(startAngle - Math.PI / 2);
    const y1 = cy + r * Math.sin(startAngle - Math.PI / 2);
    const x2 = cx + r * Math.cos(endAngle - Math.PI / 2);
    const y2 = cy + r * Math.sin(endAngle - Math.PI / 2);
    const largeArc = percent > 0.5 ? 1 : 0;

    return {
      path: `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`,
      ...d,
      percent,
    };
  });

  return (
    <div ref={ref} className="chart-container">
      <div className="chart-title">{title}</div>
      <div className="donut-container">
        <svg width="180" height="180" viewBox="0 0 180 180" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.2s' }}>
          {segments.map((s, i) => (
            <path key={i} d={s.path} fill={s.color} stroke="var(--bg-elevated)" strokeWidth="2">
              <title>{s.label}: {s.value} ({Math.round(s.percent * 100)}%)</title>
            </path>
          ))}
          <circle cx="90" cy="90" r="40" fill="var(--bg-elevated)" />
          <text x="90" y="86" textAnchor="middle" style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', fill: 'var(--fg)' }}>{total}</text>
          <text x="90" y="102" textAnchor="middle" style={{ fontSize: '0.55rem', fill: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>TOTALT</text>
        </svg>
        <div className="donut-legend">
          {segments.map((s, i) => (
            <div key={i} className="donut-legend-item">
              <div className="donut-legend-dot" style={{ background: s.color }} />
              <span>{s.label}: <strong>{s.value}</strong> ({Math.round(s.percent * 100)}%)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Firm List with Search, Filter, Sort ─── */
export function FirmExplorer({
  firms,
  bydeler,
  showSearch = true,
  showFilters = true,
  initialLimit = 20,
}: {
  firms: Firm[];
  bydeler: { name: string; slug: string; count: number }[];
  showSearch?: boolean;
  showFilters?: boolean;
  initialLimit?: number;
}) {
  const [query, setQuery] = useState('');
  const [activeBydel, setActiveBydel] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'year-new' | 'year-old' | 'bydel'>('name');
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    let result = [...firms];

    if (query) {
      const q = query.toLowerCase();
      result = result.filter(f =>
        f.navn.toLowerCase().includes(q) ||
        f.adresse.toLowerCase().includes(q) ||
        f.bydel.toLowerCase().includes(q) ||
        f.orgnr.includes(q)
      );
    }

    if (activeBydel) {
      result = result.filter(f => f.bydel === activeBydel);
    }

    switch (sortBy) {
      case 'name': result.sort((a, b) => a.navn.localeCompare(b.navn, 'nb')); break;
      case 'year-new': result.sort((a, b) => (b.stiftet || '').localeCompare(a.stiftet || '')); break;
      case 'year-old': result.sort((a, b) => (a.stiftet || '').localeCompare(b.stiftet || '')); break;
      case 'bydel': result.sort((a, b) => a.bydel.localeCompare(b.bydel, 'nb')); break;
    }

    return result;
  }, [firms, query, activeBydel, sortBy]);

  const displayed = showAll ? filtered : filtered.slice(0, initialLimit);

  return (
    <div>
      {showSearch && (
        <div className="search-wrapper">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
          </svg>
          <input
            className="search-input"
            type="text"
            placeholder="Søk etter firma, adresse, org.nr. eller bydel..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      )}

      {showFilters && (
        <div className="filter-row">
          <button
            className={`filter-chip ${!activeBydel ? 'active' : ''}`}
            onClick={() => setActiveBydel(null)}
          >
            Alle ({firms.length})
          </button>
          {bydeler.slice(0, 8).map(b => (
            <button
              key={b.name}
              className={`filter-chip ${activeBydel === b.name ? 'active' : ''}`}
              onClick={() => setActiveBydel(activeBydel === b.name ? null : b.name)}
            >
              {b.name} ({b.count})
            </button>
          ))}
          <select className="sort-select" value={sortBy} onChange={e => setSortBy(e.target.value as typeof sortBy)}>
            <option value="name">A → Å</option>
            <option value="year-new">Nyeste først</option>
            <option value="year-old">Eldste først</option>
            <option value="bydel">Per bydel</option>
          </select>
        </div>
      )}

      <div style={{ fontSize: '0.88rem', color: 'var(--fg-muted)', marginBottom: '1rem' }}>
        Viser {displayed.length} av {filtered.length} firmaer
        {query && ` for «${query}»`}
        {activeBydel && ` i ${activeBydel}`}
      </div>

      <div className="stagger-fade" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {displayed.map(f => (
          <Link key={f.orgnr} href={`/firma/${f.slug}/`} style={{ textDecoration: 'none' }}>
            <div className="firm-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                  <div className="firm-name">{f.navn}</div>
                  <div className="firm-meta">Org.nr: {f.orgnr} · {f.orgform}</div>
                </div>
                <span className="firm-badge">{f.bydel}</span>
              </div>
              {f.adresse && <div className="firm-detail">{f.adresse}, {f.postnummer} {f.poststed}</div>}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                {f.naeringsbeskrivelse && <span className="firm-badge">{f.naeringsbeskrivelse}</span>}
                {f.stiftet && <span className="firm-badge">Stiftet {f.stiftet.substring(0, 4)}</span>}
                {f.mvaRegistrert && <span className="firm-badge">MVA</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <div style={{ fontSize: '2rem', opacity: 0.4 }}>∅</div>
          <p>Ingen firmaer funnet{query && ` for «${query}»`}</p>
        </div>
      )}

      {!showAll && filtered.length > initialLimit && (
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button
            onClick={() => setShowAll(true)}
            className="filter-chip"
            style={{ padding: '0.65rem 2rem', fontSize: '0.9rem' }}
          >
            Vis alle {filtered.length} firmaer ↓
          </button>
        </div>
      )}
    </div>
  );
}
