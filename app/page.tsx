import UserFlowSelector from '@/components/UserFlowSelector'
import StarDecoration from '@/components/StarDecoration'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt="Business Logo"
                width={200}
                height={100}
                className="mx-auto"
                priority
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Sheeni — Cleaning On Demand
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Think "DoorDash for cleaning." Request a quick clean and nearby cleaners (Genies)
              can accept instantly. We're collecting interest now to launch in the right cities.
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <StarDecoration size="md" color="primary" className="mr-3" />
                  What Sheeni Is
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Sheeni is a cleaning-on-demand platform — customers request the time they need and
                  nearby cleaners (Genies) can accept jobs instantly. Today, Sheeni is a landing page
                  to collect interest and validate demand before the full app launches.
                </p>
              </div>
            </div>
          </section>

          {/* Business Model */}
          <section className="mt-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center justify-center">
                <StarDecoration size="md" color="secondary" className="mr-3" />
                Business Model
                <StarDecoration size="md" color="accent" className="ml-3" />
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow p-6 relative">
                <div className="absolute top-4 right-4">
                  <StarDecoration size="sm" color="primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Customers</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Book exact time (1 hour, 2 hours, or longer)</li>
                  <li>Pay for time + tip upfront</li>
                  <li>Upload photos and describe the job</li>
                  <li>Track ETA & communicate in-app (when live)</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 relative">
                <div className="absolute top-4 right-4">
                  <StarDecoration size="sm" color="secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cleaners (Genies)</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Get notified of new jobs nearby</li>
                  <li>See pay + tip upfront before accepting</li>
                  <li>Claim jobs Instacart‑style (first come, first serve)</li>
                  <li>Flexible scheduling and transparent pay</li>
                  <li>Background check required before approval</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 relative">
                <div className="absolute top-4 right-4">
                  <StarDecoration size="sm" color="accent" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Revenue</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Platform fee/service charge per booking</li>
                  <li>Future: subscriptions for recurring cleans</li>
                  <li>Premium cleaner profiles</li>
                  <li>Priority matching</li>
                </ul>
              </div>
            </div>
          </section>

          {/* The How */}
          <section className="mt-12">
            <div className="bg-white rounded-2xl shadow p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Interest collection (today)</h3>
                  <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>Landing page with sign‑up forms for customers and cleaners</li>
                    <li>Form submissions go to waitlist databases (via API)</li>
                    <li>Clear expectations: not live yet; targets are goals, not guarantees</li>
                    <li>Early joiners get first priority when their city launches</li>
                    <li>Cleaners complete background checks before approval</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch (future)</h3>
                  <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>Open access to early sign‑ups first</li>
                    <li>Complete background checks for cleaners</li>
                    <li>Collect real usage data and iterate</li>
                    <li>Expand service area step by step</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* The Why */}
          <section className="mt-12">
            <div className="bg-white rounded-2xl shadow p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Sheeni</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">For customers</h3>
                  <p className="text-gray-700">Convenience for small or focused cleans that don’t fit traditional services — as easy as food delivery.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">For cleaners</h3>
                  <p className="text-gray-700">Empowerment with flexible work, transparent tips, and choice of jobs — backed by verified backgrounds.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">For Sheeni</h3>
                  <p className="text-gray-700">Solves a common, repeatable problem with a scalable, tech‑enabled marketplace.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Messaging */}
          <section className="mt-12">
            <div className="bg-white rounded-2xl shadow p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Key Landing Page Messaging</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-gray-800"><span className="font-semibold">Join the waitlist</span> — be the first to try Sheeni in your area.</p>
                  <p className="text-gray-800">Our goal is <span className="font-semibold">under 60 minutes</span> from request to cleaner on the way — not guaranteed at first, but you’ll always get realistic ETAs.</p>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-800"><span className="font-semibold">Early sign‑ups</span> get first priority access when the app launches to create accounts and book jobs.</p>
                  <p className="text-gray-800">Cleaners who apply will undergo a <span className="font-semibold">background check</span> before approval — ensuring safety and trust.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
