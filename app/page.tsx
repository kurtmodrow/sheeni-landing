import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Welcome to{' '}
              <span className="text-primary-600">Cursor Brief</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our waitlist and be the first to experience our revolutionary platform
              connecting customers with professional cleaners.
            </p>
          </div>

          {/* Waitlist Form */}
          <WaitlistForm />
        </div>
      </div>
    </main>
  )
}
