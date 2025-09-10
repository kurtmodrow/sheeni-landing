# Cursor Brief - Waitlist Application

A modern waitlist application built with Next.js 14 (App Router) and TailwindCSS, designed to collect signups for both customers and cleaners.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Features

- **Dual Waitlist Forms**: Separate forms for customers and cleaners
- **Responsive Design**: Mobile-first approach with modern UI
- **API Endpoints**: RESTful API for handling form submissions
- **Environment Configuration**: Support for external API base URL
- **Form Validation**: Client and server-side validation
- **Success/Error Handling**: User feedback for form submissions

## API Endpoints

### POST /api/waitlist/customer
Handles customer waitlist signups.

**Request Body:**
```json
{
  "email": "string (required)",
  "name": "string (required)",
  "phone": "string (optional)",
  "location": "string (optional)",
  "serviceType": "string (optional)",
  "message": "string (optional)"
}
```

### POST /api/waitlist/cleaner
Handles cleaner waitlist signups.

**Request Body:**
```json
{
  "email": "string (required)",
  "name": "string (required)",
  "phone": "string (optional)",
  "location": "string (optional)",
  "experience": "string (optional)",
  "services": "string[] (optional)",
  "availability": "string (optional)",
  "message": "string (optional)"
}
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Optional: Set to your API base URL, leave blank for same origin
NEXT_PUBLIC_API_BASE=
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm start
   ```

## Project Structure

```
cursor-brief/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       ├── customer/
│   │       │   └── route.ts
│   │       └── cleaner/
│   │           └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CustomerForm.tsx
│   ├── CleanerForm.tsx
│   └── WaitlistForm.tsx
├── lib/
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

## Customization

- **Styling**: Modify `tailwind.config.js` and `app/globals.css`
- **API Logic**: Update the route handlers in `app/api/waitlist/`
- **Form Fields**: Modify the form components in `components/`
- **Validation**: Add custom validation logic in the API routes

## License

MIT License
