'use client'

interface StarDecorationProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'accent'
}

export default function StarDecoration({ 
  className = '', 
  size = 'md', 
  color = 'primary' 
}: StarDecorationProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  const colorClasses = {
    primary: 'text-blue-500',
    secondary: 'text-purple-500',
    accent: 'text-yellow-500'
  }

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-full h-full animate-pulse"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>
  )
}
