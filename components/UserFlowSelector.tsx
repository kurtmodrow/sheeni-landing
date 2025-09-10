'use client'

import { useState } from 'react'
import StarDecoration from './StarDecoration'
import CustomerForm from './CustomerForm'
import CleanerForm from './CleanerForm'
import { useLanguage } from '@/lib/LanguageContext'

export default function UserFlowSelector() {
  const { t } = useLanguage()
  const [selectedFlow, setSelectedFlow] = useState<'none' | 'customer' | 'cleaner'>('none')

  if (selectedFlow === 'customer') {
    return (
      <div className="relative">
        {/* Back button */}
        <button
          onClick={() => setSelectedFlow('none')}
          className="absolute -top-4 left-0 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t.backToOptions}
        </button>
        
        {/* Customer form with stars */}
        <div className="relative">
          <div className="absolute -top-8 -right-8">
            <StarDecoration size="lg" color="primary" />
          </div>
          <div className="absolute -bottom-4 -left-6">
            <StarDecoration size="md" color="accent" />
          </div>
          <CustomerForm />
        </div>
      </div>
    )
  }

  if (selectedFlow === 'cleaner') {
    return (
      <div className="relative">
        {/* Back button */}
        <button
          onClick={() => setSelectedFlow('none')}
          className="absolute -top-4 left-0 flex items-center text-purple-600 hover:text-purple-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to options
        </button>
        
        {/* Cleaner form with stars */}
        <div className="relative">
          <div className="absolute -top-8 -left-8">
            <StarDecoration size="lg" color="secondary" />
          </div>
          <div className="absolute -bottom-4 -right-6">
            <StarDecoration size="md" color="accent" />
          </div>
          <CleanerForm />
        </div>
      </div>
    )
  }

  return (
    <div className="text-center">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 font-poppins">
          Register Your Interest
        </h2>
        <p className="text-xl font-semibold text-gold-600 mb-2 font-nunito">
          🌟 Get Priority Access When We Launch! 🌟
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Be among the first to experience the magic of Sheeni in your city
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Customer Option */}
        <div 
          className="relative group cursor-pointer"
          onClick={() => setSelectedFlow('customer')}
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-300">
            {/* Stars decoration */}
            <div className="absolute top-4 right-4">
              <StarDecoration size="md" color="primary" />
            </div>
            <div className="absolute bottom-4 left-4">
              <StarDecoration size="sm" color="accent" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-poppins">✨ Register as a Customer ✨</h3>
              <p className="text-gray-700 mb-4">
                Ready to make your cleaning wishes come true? Register your interest and be first in line when we launch in your area!
              </p>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <StarDecoration size="sm" color="primary" className="mr-2" />
                  <span>🏠 Residential & Airbnb cleaning</span>
                </div>
                <div className="flex items-center">
                  <StarDecoration size="sm" color="primary" className="mr-2" />
                  <span>💳 Pay upfront with tips</span>
                </div>
                <div className="flex items-center">
                  <StarDecoration size="sm" color="primary" className="mr-2" />
                  <span>📍 Track Genie ETA</span>
                </div>
                <div className="flex items-center">
                  <StarDecoration size="sm" color="primary" className="mr-2" />
                  <span>⭐ Priority access when we launch</span>
                </div>
              </div>
              
              <div className="mt-6">
                <span className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                  Register Interest
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Cleaner Option */}
        <div 
          className="relative group cursor-pointer"
          onClick={() => setSelectedFlow('cleaner')}
        >
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-300">
            {/* Stars decoration */}
            <div className="absolute top-4 left-4">
              <StarDecoration size="md" color="secondary" />
            </div>
            <div className="absolute bottom-4 right-4">
              <StarDecoration size="sm" color="accent" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-poppins">🧞‍♀️ Register as a Genie 🧞‍♂️</h3>
              <p className="text-gray-700 mb-4">
                Ready to grant cleaning wishes? Join our network of verified Genies and earn money on your own schedule!
              </p>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <StarDecoration size="sm" color="secondary" className="mr-2" />
                  <span>⏰ Flexible scheduling</span>
                </div>
                <div className="flex items-center">
                  <StarDecoration size="sm" color="secondary" className="mr-2" />
                  <span>💰 See pay + tips upfront</span>
                </div>
                <div className="flex items-center">
                  <StarDecoration size="sm" color="secondary" className="mr-2" />
                  <span>🔒 Background check required</span>
                </div>
                <div className="flex items-center">
                  <StarDecoration size="sm" color="secondary" className="mr-2" />
                  <span>⭐ Priority access when we launch</span>
                </div>
              </div>
              
              <div className="mt-6">
                <span className="inline-flex items-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors">
                  Register Interest
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
