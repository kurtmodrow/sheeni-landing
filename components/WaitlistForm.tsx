'use client'

import { useState } from 'react'
import CustomerForm from './CustomerForm'
import CleanerForm from './CleanerForm'

export default function WaitlistForm() {
  const [activeTab, setActiveTab] = useState<'customer' | 'cleaner'>('customer')

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('customer')}
          className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors duration-200 ${
            activeTab === 'customer'
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          I'm a Customer
        </button>
        <button
          onClick={() => setActiveTab('cleaner')}
          className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors duration-200 ${
            activeTab === 'cleaner'
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          I'm a Cleaner
        </button>
      </div>

      {/* Form Content */}
      {activeTab === 'customer' ? <CustomerForm /> : <CleanerForm />}
    </div>
  )
}
