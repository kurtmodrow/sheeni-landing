import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { email, name, phone, location, experience, services, availability, message } = body
    
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      )
    }

    // Save to Supabase
    const { data, error } = await supabase
      .from('cleaner_waitlist')
      .insert([
        {
          full_name: name,
          email: email,
          phone: phone || '',
          location: location || '',
          years_experience: experience || '',
          services_offered: services || [],
          availability: availability || '',
          additional_info: message || null
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
    
    console.log('Cleaner waitlist signup saved:', data)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully joined cleaner waitlist!' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing cleaner waitlist:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
