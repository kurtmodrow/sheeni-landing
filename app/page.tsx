'use client'

import UserFlowSelector from '@/components/UserFlowSelector'
import StarDecoration from '@/components/StarDecoration'
import LanguageToggle from '@/components/LanguageToggle'
import { useLanguage } from '@/lib/LanguageContext'
import Image from 'next/image'

export default function Home() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <LanguageToggle />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="flex-1 md:pr-8 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-gold-500 mb-3 font-poppins tracking-tight leading-tight">
                  {t.title}
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-gold-600 mb-6 font-nunito">
                  {t.subtitle}
                </p>
              </div>
              <div className="flex-shrink-0 md:pl-4 order-first md:order-last">
                <Image
                  src="/logo.png"
                  alt="Sheeni Logo"
                  width={280}
                  height={140}
                  className="max-w-full h-auto drop-shadow-lg"
                  priority
                />
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.description}
            </p>
          </div>

          {/* User Flow Selector */}
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 relative overflow-hidden">
            {/* Background stars */}
            <div className="absolute top-4 left-4">
              <StarDecoration size="sm" color="primary" />
            </div>
            <div className="absolute top-8 right-12">
              <StarDecoration size="sm" color="accent" />
            </div>
            <div className="absolute bottom-6 left-8">
              <StarDecoration size="sm" color="secondary" />
            </div>
            <div className="absolute bottom-4 right-6">
              <StarDecoration size="sm" color="primary" />
            </div>
            
            <UserFlowSelector />
          </div>

          {/* What Sheeni Is */}
          <section className="mt-16">
            <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 relative overflow-hidden">
              {/* Background stars */}
              <div className="absolute top-6 right-6">
                <StarDecoration size="md" color="primary" />
              </div>
              <div className="absolute bottom-4 left-6">
                <StarDecoration size="sm" color="accent" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center font-poppins">
                  <Image
                    src="/logo.png"
                    alt="Sheeni Logo"
                    width={40}
                    height={20}
                    className="mr-3"
                  />
                  <span className="text-gold-500">{t.whatSheeniIs}</span>
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t.whatSheeniDescription}
                </p>
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-800 font-semibold">
                    {t.magicalQuote}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Business Model */}
          <section className="mt-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center justify-center font-poppins">
                <Image
                  src="/logo.png"
                  alt="Sheeni Logo"
                  width={40}
                  height={20}
                  className="mr-3"
                />
                <span className="text-gold-500">{t.businessModel}</span>
                <Image
                  src="/logo.png"
                  alt="Sheeni Logo"
                  width={40}
                  height={20}
                  className="ml-3"
                />
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow p-6 relative">
                <div className="absolute top-4 right-4">
                  <StarDecoration size="sm" color="primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.customers}</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>{t.customerFeatures.bookExactTime}</li>
                  <li>{t.customerFeatures.payUpfront}</li>
                  <li>{t.customerFeatures.uploadPhotos}</li>
                  <li>{t.customerFeatures.trackEta}</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 relative">
                <div className="absolute top-4 right-4">
                  <StarDecoration size="sm" color="secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.genies}</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>{t.genieFeatures.getNotified}</li>
                  <li>{t.genieFeatures.seePayUpfront}</li>
                  <li>{t.genieFeatures.claimJobs}</li>
                  <li>{t.genieFeatures.flexibleScheduling}</li>
                  <li>{t.genieFeatures.backgroundCheck}</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 relative">
                <div className="absolute top-4 right-4">
                  <StarDecoration size="sm" color="accent" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.revenue}</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>{t.revenueFeatures.platformFee}</li>
                  <li>{t.revenueFeatures.subscriptions}</li>
                  <li>{t.revenueFeatures.premiumProfiles}</li>
                  <li>{t.revenueFeatures.priorityMatching}</li>
                </ul>
              </div>
            </div>
          </section>


          {/* The Why */}
          <section className="mt-12">
            <div className="bg-white rounded-2xl shadow p-8 relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <StarDecoration size="md" color="primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center font-poppins">
                <Image
                  src="/logo.png"
                  alt="Sheeni Logo"
                  width={40}
                  height={20}
                  className="mr-3"
                />
                <span className="text-gold-500">{t.whyChooseSheeni}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.forCustomers}</h3>
                  <p className="text-gray-700">{t.whyChooseDetails.forCustomersDesc}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.forGenies}</h3>
                  <p className="text-gray-700">{t.whyChooseDetails.forGeniesDesc}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.forSheeni}</h3>
                  <p className="text-gray-700">{t.whyChooseDetails.forSheeniDesc}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Messaging */}
          <section className="mt-12">
            <div className="bg-white rounded-2xl shadow p-8 relative overflow-hidden">
              <div className="absolute top-6 right-6">
                <StarDecoration size="lg" color="accent" />
              </div>
              <div className="absolute bottom-4 left-6">
                <StarDecoration size="md" color="secondary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center font-poppins">
                <Image
                  src="/logo.png"
                  alt="Sheeni Logo"
                  width={40}
                  height={20}
                  className="mr-3"
                />
                <span className="text-gold-500">{t.magicPromise}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-gray-800"><span className="font-semibold text-yellow-600">✨ {t.magicPromiseDetails.registerInterestDesc.split('—')[0]}</span> — {t.magicPromiseDetails.registerInterestDesc.split('—')[1]}</p>
                  <p className="text-gray-800">{t.magicPromiseDetails.under60Minutes}</p>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 font-semibold text-sm">
                      {t.magicPromiseDetails.magicalQuote1}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-800"><span className="font-semibold text-yellow-600">⭐ {t.magicPromiseDetails.earlyRegistrants.split(' ')[0]} {t.magicPromiseDetails.earlyRegistrants.split(' ')[1]}</span> {t.magicPromiseDetails.earlyRegistrants.split('⭐ ')[1]}</p>
                  <p className="text-gray-800">{t.magicPromiseDetails.backgroundCheckDesc}</p>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-purple-800 font-semibold text-sm">
                      {t.magicPromiseDetails.magicalQuote2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
