import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { email, name, phone, location, serviceType, message } = body
    
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      )
    }

    // Here you would typically save to a database
    // For now, we'll just log the data
    console.log('Customer waitlist signup:', {
      email,
      name,
      phone,
      location,
      serviceType,
      message,
      timestamp: new Date().toISOString()
    })

    // Simulate API call to external service if NEXT_PUBLIC_API_BASE is set
    const apiBase = process.env.NEXT_PUBLIC_API_BASE
    if (apiBase) {
      try {
        const response = await fetch(`${apiBase}/api/waitlist/customer`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })
        
        if (!response.ok) {
          throw new Error('External API call failed')
        }
      } catch (error) {
        console.error('External API call failed:', error)
        return NextResponse.json(
          { error: 'Failed to process request' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully joined customer waitlist!' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing customer waitlist:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
