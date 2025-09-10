# Deployment Guide

## Vercel Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/cursor-brief.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect Next.js and configure the build

3. **Environment Variables**
   - In Vercel dashboard, go to Project Settings > Environment Variables
   - Add `NEXT_PUBLIC_API_BASE` if you need to point to an external API
   - Leave blank for same-origin API calls

## Manual Deployment

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm start
   ```

## Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Optional: Set to your API base URL, leave blank for same origin
NEXT_PUBLIC_API_BASE=
```

## API Endpoints

The application provides two API endpoints:

- `POST /api/waitlist/customer` - Customer waitlist signup
- `POST /api/waitlist/cleaner` - Cleaner waitlist signup

Both endpoints accept JSON data and return success/error responses.

## Testing

Test the application locally:
```bash
npm run dev
```

Then visit http://localhost:3000 to see the waitlist forms.
