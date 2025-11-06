import React from 'react'
import prisma from "@/app/prismadb"
import ImageGallery from './ImageGallery'
import Link from "next/link";
import { getServerSession } from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options"
import { Github, ExternalLink, ArrowLeft, Heart, Share2 } from "lucide-react";

type Props = {}

export default async function Page({params}: {params: Promise<{ slug: string }>}) {
    const { slug } = await params
    const session = await getServerSession(options);
  
    const product = await prisma.product.findFirst({
        where: {
            id: slug
        }
    })
  
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-purple-100">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
                    <Link 
                        href="/"
                        className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to Projects
                    </Link>
                </div>
            </div>
        )
    }

    const urlString = product?.images

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Navigation */}
                <div className="mb-8">
                    <Link 
                        href="/"
                        className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to Projects
                    </Link>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 p-8">
                        {/* Image Gallery - Larger and Side by Side */}
                        {urlString && (
                            <div className="xl:sticky xl:top-8 xl:h-fit">
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
                                    <ImageGallery imageUrls={urlString} />
                                </div>
                            </div>
                        )}
                        
                        {/* Product Details */}
                        <div className="space-y-8">
                            {/* Header */}
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                                        {product.category}
                                    </span>
                                    <div className="flex items-center space-x-3">
                                        <button className="p-3 text-gray-400 hover:text-red-500 transition-colors bg-gray-100 rounded-lg hover:bg-red-50">
                                            <Heart className="h-5 w-5" />
                                        </button>
                                        <button className="p-3 text-gray-400 hover:text-purple-600 transition-colors bg-gray-100 rounded-lg hover:bg-purple-50">
                                            <Share2 className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                                
                                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    {product.title}
                                </h1>
                                
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            {product.category && (
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-900">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {product.category.split(',').map((tag, index) => (
                                            <span 
                                                key={index}
                                                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                                            >
                                                {tag.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Project Links */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900">Project Links</h3>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {product.github && (
                                        <Link 
                                            href={product.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl group"
                                        >
                                            <Github className="mr-3 h-6 w-6" />
                                            <span className="text-lg font-medium">GitHub</span>
                                            <ExternalLink className="ml-3 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    )}
                                    
                                    {product.link && (
                                        <Link 
                                            href={product.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/30 group"
                                        >
                                            <ExternalLink className="mr-3 h-6 w-6" />
                                            <span className="text-lg font-medium">Live Demo</span>
                                            <ExternalLink className="ml-3 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Additional Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-200">
                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Status</h4>
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                        <p className="text-xl font-semibold text-gray-900">Completed</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Last Updated</h4>
                                    <p className="text-xl font-semibold text-gray-900">
                                        {new Date().toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>

                            {/* Admin Actions */}
                            {session && (
                                <div className="pt-8 border-t border-gray-200">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-6">Admin Actions</h4>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link 
                                            href={`/edit/${product.id}`}
                                            className="flex-1 text-center px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30"
                                        >
                                            Edit Project
                                        </Link>
                                        <button className="flex-1 text-center px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-red-500/30">
                                            Delete Project
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Related Projects Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">More Amazing Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Placeholder for related projects */}
                        <div className="text-center py-12 text-gray-500">
                            <p>More projects coming soon...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}