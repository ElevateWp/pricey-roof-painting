import React from 'react';
import Link from 'next/link';
import { TiltedGridHero } from '@/components/ui/tilted-grid-hero';

const TEAM_IMAGES = [
  { src: '/images/roof-with-tiles.png', alt: 'Painter at work inside a home' },
  { src: '/images/roof-saffron-walden-1024x768-1.jpg', alt: 'Roof painting work' },
  { src: '/images/roofb3-1.jpg', alt: 'Painter applying a finish coat to a wall' },
  { src: '/images/roofing-hero.png', alt: 'Painter working on a residential roof' },
];

export default function HomeDentists() {
  return (
    <section className="relative z-20 w-full border-t border-mist bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <TiltedGridHero
          images={TEAM_IMAGES}
          speed={4}
          tileHeight={24}
          mobileTileHeight={18}
          gap={14}
          axis={48}
          curve={72}
          fade={13}
          className="h-[480px] w-full overflow-hidden rounded-2xl bg-paper md:h-[520px]"
        >
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-paper via-paper/10 via-30% to-paper/85" />
          <div className="relative z-20 flex h-full flex-col items-center px-5 py-10 text-center md:py-14">
            <span className="font-body text-13 font-medium uppercase tracking-[0.18em] text-forest-ink/60">
              Our team
            </span>
            <h2 className="mt-3 max-w-3xl font-display text-26 text-balance text-forest-ink md:text-41">
              Meet Harley at Priceys Roof Painting
            </h2>
            <div className="mt-auto flex flex-col items-center pb-1">
              <p className="max-w-lg text-balance font-body text-15 leading-relaxed text-forest-ink/70">
                Priceys Roof Painting is a local Nelson Bay team for roof restoration and roof painting, with tidy work and attention to detail.
              </p>
              <Link
                href="/equipe/"
                className="pointer-events-auto mt-6 inline-flex rounded-full bg-[#222222] px-7 py-3 font-body text-15 font-semibold text-white shadow-lg shadow-[#222222]/20 transition-transform hover:-translate-y-0.5"
              >
                Meet the team <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </TiltedGridHero>
      </div>
    </section>
  );
}








