'use client'

import { useLanguage } from '@/lib/LanguageContext'
import { Language } from '@/lib/translations'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleLanguage}
        className="bg-white/90 backdrop-blur rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 font-poppins font-semibold text-gray-700 hover:text-gold-600"
      >
        <span className="text-lg">🌐</span>
        <span className="text-sm">
          {language === 'en' ? 'EN' : 'ES'}
        </span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
        </svg>
      </button>
    </div>
  )
}
