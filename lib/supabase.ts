import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

// Client for public operations (respects RLS)
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Client for server-side operations (bypasses RLS)
export const supabaseAdmin = supabaseUrl && supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null

// Database types
export interface CustomerWaitlist {
  id?: string
  full_name: string
  email: string
  phone: string
  location: string
  service_type: string
  additional_message?: string
  created_at?: string
}

export interface CleanerWaitlist {
  id?: string
  full_name: string
  email: string
  phone: string
  location: string
  years_experience: string
  services_offered: string[]
  availability: string
  additional_info?: string
  created_at?: string
}
