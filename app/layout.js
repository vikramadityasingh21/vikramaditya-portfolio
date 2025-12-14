import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vikramaditya Singh - Principal Product Manager',
  description: 'Building innovative products at the intersection of technology and business.',
  keywords: 'Product Manager, Product Management, Tech Leadership, AI, Real Estate Technology',
  authors: [{ name: 'Vikramaditya Singh' }],
  openGraph: {
    title: 'Vikramaditya Singh - Principal Product Manager',
    description: 'Building innovative products at the intersection of technology and business.',
    url: 'https://vikramadityasingh.tech',
    siteName: 'Vikramaditya Singh',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vikramaditya Singh - Principal Product Manager',
    description: 'Building innovative products at the intersection of technology and business.',
  },
}

export default function RootLayout({ children }) {
  // Use env vars with fallback (works locally and in production)
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-ZK59N91V4C'
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'udrqvph77u'
  
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        
        {/* Microsoft Clarity */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}