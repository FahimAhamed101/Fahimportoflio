import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function ProjectCard({ product }) {
  return (
    <div className="group relative h-64 w-full overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl sm:h-80 sm:w-96">
      {/* Project Image */}
      <div className="relative h-full w-full">
        <Image
          src={product.images.split(',')[0]}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      
      {/* Project Info (Hidden until hover) */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
        <div className="translate-y-8 transform transition-transform duration-500 group-hover:translate-y-0">
          <h3 className="mb-2 text-2xl font-bold drop-shadow-md">
            <Link href={`/projects/${product.id}`} className="hover:text-purple-300">
              {product.title}
            </Link>
          </h3>
          
          <Link 
            href={`/projects/${product.id}`}
            className="inline-flex items-center text-lg font-semibold text-purple-200 hover:text-white"
          >
            View Project
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Tech Stack Badges (Example) */}
      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
        {product.techStack?.split(',').slice(0, 3).map((tech, index) => (
          <span 
            key={index}
            className="rounded-full bg-purple-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
          >
            {tech.trim()}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;