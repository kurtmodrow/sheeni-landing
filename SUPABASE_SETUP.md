# Supabase Setup Instructions

## 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up/Login and create a new project
3. Choose a region close to your users (e.g., US East for Orlando)
4. Wait for the project to be ready

## 2. Get Your Credentials
1. Go to Settings > API in your Supabase dashboard
2. Copy your Project URL and anon/public key

## 3. Set Environment Variables
Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 4. Create Database Tables
Run these SQL commands in your Supabase SQL Editor:

### Customer Waitlist Table
```sql
CREATE TABLE customer_waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  location TEXT NOT NULL,
  service_type TEXT NOT NULL,
  additional_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_customer_waitlist_email ON customer_waitlist(email);
CREATE INDEX idx_customer_waitlist_created_at ON customer_waitlist(created_at);
```

### Cleaner Waitlist Table
```sql
CREATE TABLE cleaner_waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  location TEXT NOT NULL,
  years_experience TEXT NOT NULL,
  services_offered TEXT[] NOT NULL,
  availability TEXT NOT NULL,
  additional_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_cleaner_waitlist_email ON cleaner_waitlist(email);
CREATE INDEX idx_cleaner_waitlist_created_at ON cleaner_waitlist(created_at);
```

## 5. Enable Row Level Security (RLS)
```sql
-- Enable RLS on both tables
ALTER TABLE customer_waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE cleaner_waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for waitlist signups)
CREATE POLICY "Allow anonymous inserts" ON customer_waitlist
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON cleaner_waitlist
  FOR INSERT WITH CHECK (true);
```

## 6. Deploy to Vercel
1. Add your environment variables in Vercel dashboard
2. Redeploy your project
3. Test the forms!

## 7. View Data
You can view submitted waitlist entries in your Supabase dashboard under Table Editor.
