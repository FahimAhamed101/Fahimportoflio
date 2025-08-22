'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DeleteProduct from '@/app/DeleteProduct';
import { useSession } from 'next-auth/react';

function ProjectCard({ product }) {
  const { data: session } = useSession();
  
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add your favorite functionality here
    console.log('Favorite clicked for:', product.title);
  };

  return (
    <div className="group relative h-100 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      {/* Main project link - makes entire card clickable */}
      <Link 
        href={`/projects/${product.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${product.title} project`}
      />
      
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={product.images.split(',')[0]}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        
        {/* Tech Stack Badges */}
        <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2">
          {product.techStack?.split(',').slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-md"
            >
              {tech.trim()}
            </span>
          ))}
        </div>
        
        {/* Favorite/Like Button */}
        <button 
          className="absolute right-4 top-4 z-20 rounded-full bg-black/40 p-2 backdrop-blur-sm transition-all hover:bg-purple-600/80"
          onClick={handleFavoriteClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* Project Info */}
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-white line-clamp-1">
          {product.title}
        </h3>
        
        <p className="mb-4 text-sm text-gray-300 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="group/view flex items-center text-sm font-semibold text-purple-300 hover:text-white transition-colors">
            View Details
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-2 h-4 w-4 transition-transform group-hover/view:translate-x-1"
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* Admin Actions */}
          {session && (
            <div className="flex items-center space-x-3 z-20 relative">
              <Link 
                href={`/edit/${product.id}`}
                className="rounded-full bg-slate-700/50 p-2 text-gray-300 hover:bg-purple-600 hover:text-white transition-colors"
                title="Edit Project"
                onClick={(e) => e.stopPropagation()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </Link>
              
              <DeleteProduct 
                id={product.id} 
                className="rounded-full bg-slate-700/50 p-2 text-gray-300 hover:bg-red-600 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Hover effect border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-purple-500/30" />
      
      {/* Clickable overlay indicator */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center pointer-events-none">
        <div className="bg-black/20 rounded-full p-2 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;