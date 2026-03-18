'use client';

import { useState } from 'react';
import Link from 'next/link';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="mobile-menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Meny"
      >
        <span className={`hamburger ${open ? 'open' : ''}`}>
          <span /><span /><span />
        </span>
      </button>
      {open && (
        <div className="mobile-nav" onClick={() => setOpen(false)}>
          <Link href="/regnskapsforer/">Regnskapsfører</Link>
          <Link href="/regnskapskontor/">Regnskapskontor</Link>
          <Link href="/firmaer/">Katalog</Link>
          <Link href="/hva-koster-regnskapsforer-oslo/">Priser</Link>
          <Link href="/hvordan-velge-regnskapsforer-oslo/">Velge regnskapsfører</Link>
          <Link href="/regnskap-for-as-oslo/">Regnskap for AS</Link>
          <Link href="/regnskap-for-enkeltpersonforetak-oslo/">Regnskap for ENK</Link>
        </div>
      )}
    </>
  );
}
