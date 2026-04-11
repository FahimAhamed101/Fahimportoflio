'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  Github,
  Globe,
  Heart,
  PencilLine,
  Sparkles,
} from 'lucide-react';
import DeleteProduct from '@/app/DeleteProduct';
import { useSession } from 'next-auth/react';

const splitValues = (value = '') =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

function ProjectCard({ product }) {
  const { data: session } = useSession();
  const imageList = splitValues(product.images);
  const categoryList = splitValues(product.category);
  const previewImage = imageList[0] || '/fahimgreen.jpg';
  const visibleTags = categoryList.length ? categoryList.slice(0, 3) : ['Portfolio'];

  const handleFavoriteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <article className="group relative flex min-h-[480px] flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_38%),linear-gradient(180deg,_rgba(15,23,42,0.98),_rgba(2,6,23,0.98))] shadow-[0_24px_80px_rgba(2,6,23,0.45)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_30px_90px_rgba(34,211,238,0.16)]">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <Link
        href={`/projects/${product.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${product.title} project`}
      />

      <div className="relative h-64 overflow-hidden">
        <Image
          src={previewImage}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.28),_transparent_35%)]" />

        <div className="absolute left-5 top-5 z-20 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Selected Work
          </span>
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="absolute right-5 top-5 z-20 rounded-full border border-white/10 bg-slate-950/70 p-2.5 text-white/80 backdrop-blur-md transition-all hover:scale-105 hover:border-cyan-300/40 hover:bg-cyan-500/20 hover:text-white"
          onClick={handleFavoriteClick}
          aria-label={`Favorite ${product.title}`}
        >
          <Heart className="h-4 w-4" />
        </button>

        <div className="absolute inset-x-5 bottom-5 z-20 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
              Project Spotlight
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white drop-shadow-lg line-clamp-1">
              {product.title}
            </h3>
          </div>
          <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md">
            {imageList.length > 1 ? `${imageList.length} images` : 'Single showcase'}
          </div>
        </div>
      </div>

      <div className="relative z-20 flex flex-1 flex-col p-6">
        <p className="max-w-xl text-sm leading-7 text-slate-300 line-clamp-3">
          {product.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {product.link && (
            <Link
              href={product.link}
              target="_blank"
              rel="noreferrer"
              className="relative z-20 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200 transition-colors hover:bg-emerald-400/20"
              onClick={(event) => event.stopPropagation()}
            >
              <Globe className="h-3.5 w-3.5" />
              Live Site
            </Link>
          )}
          {product.github && (
            <Link
              href={product.github}
              target="_blank"
              rel="noreferrer"
              className="relative z-20 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 transition-colors hover:bg-white/10"
              onClick={(event) => event.stopPropagation()}
            >
              <Github className="h-3.5 w-3.5" />
              Source
            </Link>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors duration-300 group-hover:text-white">
            View Case Study
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

          {session && (
            <div className="relative z-20 flex items-center gap-2">
              <Link
                href={`/edit/${product.id}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-colors hover:border-cyan-300/40 hover:bg-cyan-500/20 hover:text-white"
                title="Edit project"
                onClick={(event) => event.stopPropagation()}
              >
                <PencilLine className="h-4 w-4" />
              </Link>

              <DeleteProduct
                productId={product.id}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-colors hover:border-rose-300/40 hover:bg-rose-500/20 hover:text-white"
                iconClassName="h-4 w-4"
                onClick={(event) => event.stopPropagation()}
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
