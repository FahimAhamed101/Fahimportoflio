'use client'
import React, { useState } from 'react'

type Props = {
    imageUrls: string
}

const ImageGallery = ({ imageUrls }: Props) => {
    const [selectedImage, setSelectedImage] = useState<number>(0)
    const urlArray = imageUrls.split(',')

    return (
        <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Thumbnail images - vertical column */}
            <div className="all-images flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible order-2 lg:order-1">
                {urlArray.map((url, index) => (
                    <div 
                        key={index} 
                        className="image flex-shrink-0 cursor-pointer transition-all duration-300"
                        onClick={() => setSelectedImage(index)}
                    >
                        <img 
                            className={`w-24 h-24 lg:w-28 lg:h-28 rounded-xl object-cover object-top border-3 transition-all duration-300 hover:scale-105 ${
                                selectedImage === index 
                                    ? "border-purple-600 shadow-lg scale-105" 
                                    : "border-gray-300 hover:border-purple-400 shadow-md"
                            }`} 
                            src={url} 
                            alt={`Thumbnail ${index + 1}`} 
                        />
                    </div>
                ))}
            </div>

            {/* Selected image - main display */}
            <div className="selected-image flex-1 w-full order-1 lg:order-2">
                <div className="bg-gray-50 rounded-2xl p-4 lg:p-6 border border-gray-200 shadow-inner">
                    <img 
                        src={urlArray[selectedImage]} 
                        className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
                        alt={`Selected image ${selectedImage + 1}`}
                    />
                </div>
                
                {/* Image navigation and counter */}
                <div className="flex justify-between items-center mt-6 px-2">
                    <button 
                        onClick={() => setSelectedImage(prev => prev > 0 ? prev - 1 : urlArray.length - 1)}
                        className="flex items-center px-6 py-3 bg-white text-gray-700 rounded-xl hover:bg-gray-50 border border-gray-300 hover:border-purple-400 transition-all shadow-md hover:shadow-lg"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous
                    </button>
                    
                    <div className="flex items-center space-x-2">
                        <span className="text-lg font-semibold text-gray-700">
                            {selectedImage + 1}
                        </span>
                        <span className="text-gray-400">/</span>
                        <span className="text-lg text-gray-600">{urlArray.length}</span>
                    </div>
                    
                    <button 
                        onClick={() => setSelectedImage(prev => prev < urlArray.length - 1 ? prev + 1 : 0)}
                        className="flex items-center px-6 py-3 bg-white text-gray-700 rounded-xl hover:bg-gray-50 border border-gray-300 hover:border-purple-400 transition-all shadow-md hover:shadow-lg"
                    >
                        Next
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageGallery