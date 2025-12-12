import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
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
        {/* Preload critical font */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        
        {/* Critical CSS Inline - للتحميل الفوري */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Critical CSS - يحمل فوراً قبل أي شيء */
          *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
          html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}
          body{margin:0;line-height:inherit;min-height:100vh;background-color:hsl(var(--background));color:hsl(var(--foreground));-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          
          /* Colors - تحميل فوري */
          :root{
            --background:0 0% 100%;
            --foreground:222.2 84% 4.9%;
            --card:0 0% 100%;
            --card-foreground:222.2 84% 4.9%;
            --primary:221.2 83.2% 53.3%;
            --primary-foreground:210 40% 98%;
            --muted:210 40% 96.1%;
            --muted-foreground:215.4 16.3% 46.9%;
            --border:214.3 31.8% 91.4%;
            --radius:0.5rem;
          }
          @media(prefers-color-scheme:dark){
            :root{
              --background:222.2 84% 4.9%;
              --foreground:210 40% 98%;
              --card:222.2 84% 4.9%;
              --card-foreground:210 40% 98%;
              --primary:217.2 91.2% 59.8%;
              --primary-foreground:222.2 47.4% 11.2%;
              --muted:217.2 32.6% 17.5%;
              --muted-foreground:215 20.2% 65.1%;
              --border:217.2 32.6% 17.5%;
            }
          }
          
          /* Layout Critical - يظهر فوراً */
          .pattern-islamic{
            background-color:hsl(var(--background));
            background-image:
              radial-gradient(circle at 25px 25px, hsl(var(--primary) / 0.03) 2%, transparent 0%),
              radial-gradient(circle at 75px 75px, hsl(var(--primary) / 0.03) 2%, transparent 0%);
            background-size:100px 100px;
            min-height:100vh;
          }
          
          /* Typography Critical */
          h1,h2,h3{font-weight:700;line-height:1.2}
          p{line-height:1.75}
          
          /* Container Critical */
          .container{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}
          @media(min-width:640px){.container{max-width:640px}}
          @media(min-width:768px){.container{max-width:768px}}
          @media(min-width:1024px){.container{max-width:1024px}}
          
          /* Card Critical */
          .bg-card{background-color:hsl(var(--card));color:hsl(var(--card-foreground))}
          .shadow-soft{box-shadow:0 2px 8px -2px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.06)}
          .rounded-2xl{border-radius:1rem}
          
          /* Button Critical */
          .bg-primary{background-color:hsl(var(--primary))}
          .text-primary{color:hsl(var(--primary))}
          .text-foreground{color:hsl(var(--foreground))}
          .text-muted-foreground{color:hsl(var(--muted-foreground))}
          
          /* Grid Critical */
          .grid{display:grid}
          .flex{display:flex}
          .items-center{align-items:center}
          .justify-center{justify-content:center}
          .gap-2{gap:0.5rem}
          .gap-3{gap:0.75rem}
          .gap-4{gap:1rem}
          .space-y-4>:not([hidden])~:not([hidden]){margin-top:1rem}
          
          /* Text Critical */
          .text-center{text-align:center}
          .font-bold{font-weight:700}
          .text-xl{font-size:1.25rem;line-height:1.75rem}
          .text-2xl{font-size:1.5rem;line-height:2rem}
          .text-3xl{font-size:1.875rem;line-height:2.25rem}
          
          /* Visibility */
          .opacity-70{opacity:0.7}
          .leading-relaxed{line-height:1.625}
          
          /* Borders */
          .border{border-width:1px}
          .border-border\\/30{border-color:hsl(var(--border)/0.3)}
          
          /* Padding */
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
          
          /* Max width */
          .max-w-4xl{max-width:56rem}
          .max-w-3xl{max-width:48rem}
          .mx-auto{margin-left:auto;margin-right:auto}
          
          /* Details/Summary for FAQ */
          details summary::-webkit-details-marker{display:none}
          details summary{list-style:none}
          details[open] summary svg{transform:rotate(180deg)}
        `}} />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
