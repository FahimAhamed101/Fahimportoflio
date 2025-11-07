import React from "react";
import { getServerSession } from 'next-auth'
import { options } from "@/app/api/auth/[...nextauth]/options"
import Link from 'next/link'
import prisma from "@/app/prismadb"
import DeleteProduct from '@/app/DeleteProduct';
import { signIn, signOut, useSession } from 'next-auth/react'
import ProjectCard from "./ProjectCard";
import "./styles.css";

type Props = {}

const ProjectPage = async (props: Props) => {
  // Sort by latest (most recent) products first
  // Try different possible field names for the timestamp
  const allmyproduct = await prisma.product.findMany({
    orderBy: {
      // Try these common field names for creation timestamp
      id: 'desc', // This will work if IDs are auto-incrementing
      // Or try:
      // created_at: 'desc',
      // date_created: 'desc',
      // timestamp: 'desc',
    }
  })
  
  // If the above doesn't work, you can also sort in JavaScript
  // const allmyproduct = await prisma.product.findMany();
  // const sortedProducts = [...allmyproduct].sort((a, b) => 
  //   new Date(b.createdAt || b.created_at || b.date_created || b.timestamp).getTime() - 
  //   new Date(a.createdAt || a.created_at || a.date_created || a.timestamp).getTime()
  // );

  if (allmyproduct.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-purple-900 p-4">
        <div className="text-center max-w-md mx-auto">
          <div className="relative w-64 h-64 mx-auto mb-6">
            <img 
              src="empty.png" 
              alt="No projects" 
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-purple-500/20 rounded-full animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">No Projects Yet</h1>
          <p className="text-purple-200 mb-8">
            It looks like you haven't added any projects yet. Get started by creating your first amazing project!
          </p>
          <Link 
            href="/add-project"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Create Your First Project
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Awesome
            </span>
            <span className="text-white"> projects and websites</span>
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Discover the best projects and websites built with React, Next.js, Tailwind CSS, and more.
          </p>
          
          {/* Stats Bar */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[150px] border border-white/10">
              <div className="text-3xl font-bold text-orange-400">{allmyproduct.length}</div>
              <div className="text-purple-200">Total Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[150px] border border-white/10">
              <div className="text-3xl font-bold text-green-400">14+</div>
              <div className="text-purple-200">Technologies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[150px] border border-white/10">
              <div className="text-3xl font-bold text-blue-400">3+</div>
              <div className="text-purple-200">Companies</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allmyproduct.map((product, i) => (
            <ProjectCard key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectPage