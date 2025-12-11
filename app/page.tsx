// app/page.tsx
import { Suspense } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import DateConverter from '@/components/DateConverter';
import { PageLayout } from '@/components/PageLayout';
import { getTodayDates } from '@/lib/hijriConverter';
import { InternalLinks } from '@/components/InternalLinks';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const SEOContent = dynamic(() => import('@/components/SEOContent'), {
  ssr: false,
});

// ✅ Metadata
export const metadata: Metadata = {
  title: 'تاريخ اليوم هجري - تحويل التاريخ الهجري والميلادي',
  description:
    'اعرف كم التاريخ الهجري اليوم من خلال محول التاريخ المتخصص في تحويل التاريخ بين التاريخ الهجري والتاريخ الميلادي بدقة عالية.',
  alternates: {
    canonical: '/',
  },
};

// ✅ WebApplication Schema (بدون تغيير كبير)
const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'محول التاريخ الهجري',
  alternateName: [
    'تحويل التاريخ الهجري',
    'Hijri Date Converter',
    'تاريخ اليوم هجري',
    'تحويل التاريخ',
    'محول التاريخ',
    'تحويل التاريخ من ميلادي لهجري',
    'تحويل التاريخ من هجري الى ميلادي',
  ],
  description:
    'منصة وأداة مجانية متخصصة في تحويل التاريخ بين التقويم الهجري والتاريخ الميلادي بدقة عالية.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://convert-hijri.com',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript',
  softwareVersion: '1.0',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'SAR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1250',
    bestRating: '5',
    worstRating: '1',
  },
  featureList: [
    'تحويل التاريخ من هجري إلى ميلادي',
    'تحويل التاريخ من ميلادي إلى هجري',
    'تحويل التاريخ الهجري والميلادي في صفحة واحدة',
    'حساب العمر من خلال تحويل التاريخ من تاريخ الميلاد الهجري أو الميلادي',
    'معرفة تاريخ اليوم هجري وميلادي',
    'دعم التقويم الهجري أم القرى',
    'واجهة عربية سهلة الاستخدام',
  ],
  inLanguage: 'ar',
  isAccessibleForFree: true,
};

// ✅ FAQ Schema – 8 أسئلة فقط
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'كيف أعرف تاريخ اليوم هجري والميلادي؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'تاريخ اليوم الهجري والميلادي يظهر مباشرة في أعلى الصفحة، حيث يعرض محول التاريخ اليوم، الشهر، والسنة بالتقويم الهجري والميلادي معًا، ويتم تحديث التاريخ تلقائيًا حسب تقويم أم القرى.',
      },
    },
    {
      '@type': 'Question',
      name: 'كيف أحول التاريخ من هجري لميلادي؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'لاستخدام أداة تحويل التاريخ من هجري لميلادي، اختر خيار هجري إلى ميلادي، ثم أدخل اليوم والشهر والسنة بالتاريخ الهجري، واضغط زر تحويل ليظهر لك التاريخ الميلادي المقابل بدقة عالية وبسرعة.',
      },
    },
    {
      '@type': 'Question',
      name: 'كيف أحول التاريخ من ميلادي لهجري؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'لتحويل التاريخ من ميلادي لهجري، اختر ميلادي إلى هجري، ثم أدخل التاريخ الميلادي كاملًا (اليوم، الشهر، السنة)، وبعد الضغط على زر تحويل ستحصل على التاريخ الهجري الموافق حسب التقويم الرسمي في المملكة العربية السعودية.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل نتيجة تحويل التاريخ دقيقة وموثوقة؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'محول التاريخ يعتمد على خوارزميات دقيقة وتقويم أم القرى المعتمد في السعودية، لذلك تكون نتيجة التحويل بين التقويم الهجري والميلادي والعكس دقيقة جدًا لمعظم الاستخدامات اليومية والرسمية.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل أداة تحويل التاريخ وخدمة حساب العمر مجانية؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم، جميع خدمات الموقع مجانية بالكامل، بما في ذلك تحويل التاريخ الهجري والميلادي، حاسبة العمر، التقويم الهجري للميلادي، وصفحة تاريخ اليوم، بدون أي اشتراك أو رسوم مخفية.',
      },
    },
    {
      '@type': 'Question',
      name: 'كيف أحسب العمر بالتاريخ الهجري أو الميلادي؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'للحصول على حساب العمر، انتقل إلى صفحة حاسبة العمر، ثم أدخل تاريخ الميلاد بالتقويم الهجري أو الميلادي، وستقوم الأداة بحساب العمر بدقة بالسنوات والشهور والأيام مع إمكانية معرفة كم باقي على عيد الميلاد القادم.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل يمكن عرض التقويم الهجري والميلادي لسنة كاملة؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'يوفر الموقع تقويمًا هجريًا وميلاديًا شاملاً، حيث يمكنك اختيار أي سنة لعرض جميع الشهور والأيام بالهجري مع ما يقابلها بالتاريخ الميلادي، مع دعم السنوات الهجرية من 1350 هـ حتى 1460 هـ تقريبًا.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل أستطيع استخدام محول التاريخ من الجوال ومن دون برامج؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'يمكنك استخدام محول التاريخ مباشرة من المتصفح على الجوال أو الكمبيوتر بدون الحاجة لتنزيل برامج، فالموقع يعمل أونلاين ويدعم أغلب المتصفحات الحديثة ويتيح تحويل التاريخ بسرعة وسهولة من أي مكان عبر الإنترنت.',
      },
    },
  ],
};

// ✅ Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'الرئيسية',
      item: process.env.NEXT_PUBLIC_SITE_URL || 'https://convert-hijri.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'محول التاريخ الهجري',
      item: process.env.NEXT_PUBLIC_SITE_URL || 'https://convert-hijri.com',
    },
  ],
};

export default function Home() {
  const { hijri, gregorian } = getTodayDates();

  return (
    <PageLayout>
      {/* ✅ JSON-LD منفصل لكل Schema، وواحد فقط للـ FAQPage */}
      <Script
        id="webapp-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* بقية محتوى الصفحة: الهيرو + الفورم + SEOContent + FAQ المرئي */}
      <main className="space-y-10">
        <section className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            محول التاريخ الهجري والميلادي – تحويل التاريخ بسهولة وبدقة
          </h1>
          <p className="text-muted-foreground">
            {/* هنا سنضع محتوى الـ Hero من النص الجديد الذي سأكتبه لك بالأسفل */}
          </p>
        </section>

        <section className="mt-6">
          <DateConverter />
        </section>

        <Suspense fallback={null}>
          <SEOContent />
        </Suspense>

        {/* قسم FAQ المرئي يطابق الأسئلة الموجودة في faqSchema */}
        {/* يمكنك استخدام details/summary أو Accordion من shadcn */}
      </main>

      <section className="mt-10">
        <InternalLinks type="all" />
      </section>
    </PageLayout>
  );
}
