import { NextRequest, NextResponse } from 'next/server'
import { supabase, supabaseAdmin } from '@/lib/supabase'

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

    // Save to Supabase if available (use admin client to bypass RLS)
    const client = supabaseAdmin || supabase
    if (client) {
      try {
        const { data, error } = await client
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
          
          // Handle specific error cases
          if (error.code === '23505') {
            return NextResponse.json(
              { error: 'Email already exists in waitlist' },
              { status: 409 }
            )
          }
          
          return NextResponse.json(
            { error: 'Failed to save to database', details: error.message },
            { status: 500 }
          )
        }
        
        console.log('Customer waitlist signup saved:', data)
      } catch (supabaseError) {
        console.error('Supabase connection error:', supabaseError)
        // Fall through to fallback logging
      }
    }
    
    // Fallback: log the data if Supabase is not configured or fails
    console.log('Customer waitlist signup (fallback logging):', {
      name,
      email,
      phone,
      location,
      serviceType,
      message,
      timestamp: new Date().toISOString(),
      supabaseAvailable: !!client,
      usingAdminClient: !!supabaseAdmin
    })

    return NextResponse.json(
      { 
        success: true, 
        message: client ? 'Successfully joined customer waitlist!' : 'Request received! We\'ll be in touch soon.',
        savedToDatabase: !!client
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
