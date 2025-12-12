import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#166534',
}

export const metadata: Metadata = {
  title: {
    default: 'محول التاريخ الهجري - تحويل التاريخ من هجري لميلادي والعكس',
    template: '%s | محول التاريخ الهجري'
  },
  description: 'منصة وأداة مجانية متخصصة في تحويل التاريخ بين التقويم الهجري والتاريخ الميلادي بدقة عالية. يتيح لك محول التاريخ إجراء تحويل التاريخ من هجري إلى ميلادي ومن ميلادي إلى هجري، ومعرفة تاريخ اليوم هجري وميلادي، وحساب العمر بالهجري والميلادي بسهولة.',
  keywords: ['محول التاريخ الهجري', 'تحويل التاريخ', 'هجري', 'ميلادي', 'تاريخ اليوم', 'حساب العمر'],
  authors: [{ name: 'Convert Hijri' }],
  creator: 'Convert Hijri',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://convert-hijri.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: '/',
    siteName: 'محول التاريخ الهجري',
    title: 'محول التاريخ الهجري - تحويل التاريخ من هجري لميلادي والعكس',
    description: 'منصة وأداة مجانية متخصصة في تحويل التاريخ بين التقويم الهجري والتاريخ الميلادي بدقة عالية.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'محول التاريخ الهجري',
    description: 'تحويل التاريخ من هجري لميلادي والعكس بدقة عالية',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Critical CSS Inline - Light Mode Only */}
        <style dangerouslySetInnerHTML={{ __html: `
          *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
          html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji";-webkit-tap-highlight-color:transparent}
          body{margin:0;line-height:inherit;min-height:100vh;background-color:#fefdfb;color:#052e16;-webkit-font-smoothing:antialiased}
          
          :root{
            --background:40 20% 99%;
            --foreground:160 50% 5%;
            --card:0 0% 100%;
            --card-foreground:160 50% 5%;
            --primary:158 65% 18%;
            --primary-foreground:0 0% 100%;
            --muted:45 15% 94%;
            --muted-foreground:160 40% 18%;
            --border:160 30% 72%;
            --radius:0.75rem;
          }
          
          .pattern-islamic{
            background-color:#fefdfb;
            background-image:radial-gradient(circle at 25px 25px,rgba(22,101,52,0.03) 2%,transparent 0%),radial-gradient(circle at 75px 75px,rgba(22,101,52,0.03) 2%,transparent 0%);
            background-size:100px 100px;
            min-height:100vh;
          }
          
          h1,h2,h3{font-weight:700;line-height:1.2}
          p{line-height:1.75}
          
          .container{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}
          @media(min-width:640px){.container{max-width:640px}}
          @media(min-width:768px){.container{max-width:768px}}
          @media(min-width:1024px){.container{max-width:1024px}}
          
          .bg-card{background-color:#fff;color:#052e16}
          .shadow-soft{box-shadow:0 2px 8px -2px rgba(0,0,0,.1)}
          .rounded-2xl{border-radius:1rem}
          .bg-primary{background-color:#166534}
          .text-primary{color:#166534}
          .text-foreground{color:#052e16}
          .text-muted-foreground{color:#1a4d2e}
          
          .grid{display:grid}
          .flex{display:flex}
          .items-center{align-items:center}
          .justify-center{justify-content:center}
          .gap-2{gap:0.5rem}
          .gap-3{gap:0.75rem}
          .gap-4{gap:1rem}
          .space-y-4>:not([hidden])~:not([hidden]){margin-top:1rem}
          
          .text-center{text-align:center}
          .font-bold{font-weight:700}
          .text-xl{font-size:1.25rem;line-height:1.75rem}
          .text-2xl{font-size:1.5rem;line-height:2rem}
          .text-3xl{font-size:1.875rem;line-height:2.25rem}
          
          .leading-relaxed{line-height:1.625}
          .border{border-width:1px}
          
          .p-4{padding:1rem}
          .p-6{padding:1.5rem}
          .p-8{padding:2rem}
          .px-4{padding-left:1rem;padding-right:1rem}
          .py-4{padding-top:1rem;padding-bottom:1rem}
          .pt-12{padding-top:3rem}
          .pb-8{padding-bottom:2rem}
          .mb-4{margin-bottom:1rem}
          .mb-6{margin-bottom:1.5rem}
          .mt-10{margin-top:2.5rem}
          .mt-16{margin-top:4rem}
          
          .max-w-4xl{max-width:56rem}
          .max-w-3xl{max-width:48rem}
          .mx-auto{margin-left:auto;margin-right:auto}
          
          details summary::-webkit-details-marker{display:none}
          details summary{list-style:none}
          details[open] summary svg{transform:rotate(180deg)}
        `}} />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
