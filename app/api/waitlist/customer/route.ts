import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

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

    // Save to Supabase
    const { data, error } = await supabase
      .from('customer_waitlist')
      .insert([
        {
          full_name: name,
          email: email,
          phone: phone || '',
          location: location || '',
          service_type: serviceType || '',
          additional_message: message || null
        }
      ])
      .select()
    
    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save to database' },
        { status: 500 }
      )
    }
    
    console.log('Customer waitlist signup saved:', data)

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
