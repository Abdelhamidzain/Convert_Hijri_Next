import { Suspense } from 'react'
import Link from 'next/link'
import DateConverter from '@/components/DateConverter'
import { PageLayout } from '@/components/PageLayout'
import { getTodayDates } from '@/lib/hijriConverter'
import { InternalLinks } from '@/components/InternalLinks'
import type { Metadata } from 'next'

import dynamic from 'next/dynamic'
const SEOContent = dynamic(() => import('@/components/SEOContent'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'تحويل التاريخ الهجري والميلادي - محول دقيق ومجاني',
  description: 'أداة تحويل التاريخ من هجري إلى ميلادي والعكس بدقة متناهية. اكتشف التاريخ الهجري اليوم وقم بالتحويل بسهولة عبر تقويم أم القرى المعتمد.',
  keywords: 'تحويل, التاريخ, هجري, ميلادي, التقويم, محول',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'محول التاريخ الهجري والميلادي',
    description: 'حوّل التاريخ من هجري إلى ميلادي والعكس بدقة فائقة',
    url: 'https://convert-hijri.com',
    type: 'website',
    locale: 'ar_SA',
  }
}

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "محول التاريخ الهجري والميلادي",
  "alternateName": ["Hijri Date Converter", "Gregorian to Hijri", "تحويل التواريخ"],
  "description": "خدمة تحويل التاريخ المجانية بين النظامين الهجري والميلادي",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://convert-hijri.com",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "browserRequirements": "Requires JavaScript",
  "softwareVersion": "2.0",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "SAR" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "2847",
    "bestRating": "5",
    "worstRating": "1"
  },
  "featureList": [
    "تحويل من هجري لميلادي",
    "تحويل من ميلادي لهجري",
    "حساب العمر بالهجري والميلادي",
    "تاريخ اليوم هجري وميلادي",
    "تقويم أم القرى"
  ],
  "inLanguage": "ar",
  "isAccessibleForFree": true,
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "محول التاريخ",
    "item": process.env.NEXT_PUBLIC_SITE_URL || "https://convert-hijri.com"
  }]
}

export default function Home() {
  const { hijri, gregorian } = getTodayDates()
  
  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pattern-islamic">
        <header className="pt-12 pb-8 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center" role="img" aria-label="هلال">
                <svg width="32" height="32" viewBox="0 0 24 24" className="text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              تحويل التاريخ الهجري والميلادي بسهولة
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              محول التاريخ الأكثر دقة على الإنترنت. حوّل التاريخ من هجري إلى ميلادي والعكس بسهولة، 
              واطلع على التاريخ الهجري اليوم عبر تقويم أم القرى الرسمي.
              <br />
              <span className="text-primary font-semibold mt-2 inline-block">
                خدمة تحويل مجانية - {hijri.year} هـ
              </span>
            </p>
          </div>
        </header>

        <div className="px-4 pb-8">
          <div className="container max-w-4xl mx-auto">
            <DateConverter />

            {/* القسم التعريفي */}
            <section className="mt-10 bg-gradient-to-br from-card via-card/95 to-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-primary text-3xl">🌙</span>
                محول التاريخ - Hijri Gregorian Converter
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p className="text-base md:text-lg">
                  أهلاً بك في أفضل أداة لتحويل التاريخ على الشبكة! نقدم خدمة تحويل موثوقة بين التقويم الهجري والميلادي. 
                  إذا كنت تبحث عن تحويل التاريخ من هجري إلى ميلادي أو من ميلادي لهجري والعكس، 
                  فإن محول التاريخ يمنحك نتائج فورية بسهولة. نعتمد على تقويم أم القرى المعتمد 
                  في المملكة السعودية لضمان دقة التحويل.
                </p>
                
                <p className="text-base md:text-lg">
                  يتيح لك الموقع أيضاً معرفة التاريخ الهجري اليوم بدقة متناهية، واستخدام حاسبة العمر 
                  لحساب عمرك بالتقويم الهجري والميلادي معاً. خدمة تحويل التاريخ مثالية لمن يريد التاريخ من هجري الى ميلادي 
                  بسهولة ودقة. جميع الأدوات متاحة مجاناً على مدار الساعة.
                </p>

                <p className="text-base md:text-lg">
                  ما نقدمه: تحويل سريع بين الهجري والميلادي والعكس، عرض التاريخ الهجري اليوم والتاريخ الميلادي المقابل، 
                  استعراض التقويم السنوي الكامل من 1318 حتى 1500 هـ، حساب العمر بدقة، ومواقيت الصلاة 
                  في مكة والمدن السعودية الكبرى. خدمة تحويل التاريخ مجانية بالكامل.
                </p>
              </div>
            </section>

            {/* طريقة الاستخدام */}
            <section className="mt-10 grid md:grid-cols-2 gap-6">
              <article className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">📅</span>
                  تحويل التاريخ من هجري إلى ميلادي
                </h3>
                <ol className="space-y-3 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <span>حدد خيار التحويل من التاريخ الهجري إلى الميلادي</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <span>أدخل اليوم والشهر والسنة بالتقويم الهجري</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <span>انقر "تحويل" واحصل على التاريخ الميلادي فوراً</span>
                  </li>
                </ol>
              </article>

              <article className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔄</span>
                  تحويل التاريخ من ميلادي والعكس
                </h3>
                <ol className="space-y-3 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <span>اختر التحويل من التاريخ الميلادي إلى الهجري</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <span>سجّل التاريخ الميلادي المراد تحويله</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <span>احصل على التاريخ الهجري المقابل بسهولة ودقة</span>
                  </li>
                </ol>
              </article>
            </section>

            {/* المميزات */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                ✨ مميزات خدمة تحويل التاريخ
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">تحويل فوري</h3>
                  <p className="text-foreground/70 text-sm">
                    تحويل التاريخ من هجري إلى ميلادي والعكس في لحظة بسهولة فائقة
                  </p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">دقة متناهية</h3>
                  <p className="text-foreground/70 text-sm">
                    نستخدم التقويم الهجري (أم القرى) لتحويل التاريخ بدقة مطلقة
                  </p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🆓</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">مجاني بالكامل</h3>
                  <p className="text-foreground/70 text-sm">
                    خدمة تحويل التاريخ متاحة مجاناً على الإنترنت بدون قيود
                  </p>
                </div>
              </div>
            </section>

            {/* معلومات التقويم */}
            <section className="mt-10 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-5">
                📖 معلومات عن التقويم الهجري والميلادي
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-3">التقويم الهجري</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    التقويم الهجري (Hijri Calendar) نظام قمري يبدأ من هجرة الرسول ﷺ. يتألف من 12 شهراً 
                    هجرياً بإجمالي 354 أو 355 يوماً. تحويل التاريخ من هجري إلى ميلادي والعكس ضروري 
                    للمعاملات الرسمية، خاصة في السعودية التي تعتمد التقويم الهجري رسمياً.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-3">الشهور الهجرية</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    محرم، صفر، ربيع الأول، ربيع الآخر، جمادى الأولى، جمادى الآخرة، 
                    رجب، شعبان، رمضان، شوال، ذو القعدة، ذو الحجة. لتحويل التاريخ 
                    بدقة، استخدم محول التاريخ المعتمد على تقويم أم القرى.
                  </p>
                </div>
              </div>
            </section>

            {/* دليل التحويل */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-7">
                🔄 دليل تحويل التاريخ من هجري إلى ميلادي والعكس
              </h2>
              
              <div className="space-y-5 text-foreground/85 leading-relaxed">
                <p>
                  تُعد خدمة تحويل التاريخ من هجري إلى ميلادي من الأدوات الرقمية الأساسية في حياتنا اليومية. 
                  سواء احتجت لتحويل التاريخ من هجري الى ميلادي لإنجاز معاملة رسمية، 
                  أو أردت معرفة التاريخ الهجري اليوم لمناسبة دينية، فإن خدمة تحويل التاريخ 
                  توفر لك السرعة والدقة المطلوبة بسهولة.
                </p>
                
                <p>
                  حين تحتاج لتحويل التاريخ من هجري إلى ميلادي، تقدم أداتنا المجانية النتائج 
                  بشكل لحظي. نعتمد تقويم أم القرى المعتمد رسمياً في المملكة السعودية، 
                  مما يضمن الدقة التامة عند تحويل التاريخ من هجري الى ميلادي والعكس.
                </p>
                
                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold text-foreground mb-4">⚡ لماذا تختار خدمة تحويل التاريخ لدينا؟</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>تحويل التاريخ من هجري إلى ميلادي بدقة عالية وفق أم القرى</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>التاريخ الهجري اليوم يُحدّث تلقائياً بشكل يومي</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>تحويل التاريخ من هجري إلى ميلادي والعكس بأداة واحدة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>حوّل التاريخ في أقل من ثانية واحدة بسهولة</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* حالات الاستخدام */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-7 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                💼 استخدامات تحويل التاريخ من هجري الى ميلادي
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">📄</span>
                    الإجراءات الحكومية
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    أثناء إنجاز المعاملات الرسمية، قد تحتاج لتحويل التاريخ من هجري 
                    المسجل في وثائقك إلى الميلادي. استخدم خدمة تحويل التاريخ 
                    للحصول على النتيجة الصحيحة بسهولة ودقة.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎓</span>
                    البحث والدراسة
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    يحتاج الباحثون والطلاب لتحويل التاريخ من هجري إلى ميلادي 
                    في دراساتهم. أداة تحويل التاريخ تيسّر عليك تحويل التاريخ من هجري الى ميلادي 
                    لأي حقبة زمنية والعكس.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🕌</span>
                    المناسبات الإسلامية
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    لمعرفة مواعيد رمضان والحج والأعياد، حوّل التاريخ 
                    بسهولة. تساعدك الأداة على معرفة التاريخ الهجري اليوم 
                    والتخطيط لمناسباتك بالتقويم الهجري والميلادي.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">💰</span>
                    العقود والأعمال
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    في الاتفاقيات التجارية، قد تحتاج التاريخ من هجري الى ميلادي 
                    لتحديد المدد بدقة. خدمة تحويل لدينا تضمن توافق 
                    التواريخ في وثائقك القانونية والعكس بسهولة.
                  </p>
                </div>
              </div>
            </section>

            {/* نصائح */}
            <section className="mt-10 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                إرشادات لتحويل التاريخ بسهولة
              </h2>
              
              <div className="space-y-5">
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    1️⃣ خطوات تحويل التاريخ من هجري إلى ميلادي
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    العملية سهلة للغاية! حدد نوع التحويل (هجري ← ميلادي أو والعكس)، ثم أدخل التاريخ. 
                    بالضغط على "تحويل"، تحصل على النتيجة فوراً. استخدم محول التاريخ لتحويل التاريخ 
                    مجاناً في أي وقت بسهولة.
                  </p>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    2️⃣ أهمية تقويم أم القرى
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    عند تحويل التاريخ من هجري الى ميلادي، نعتمد تقويم أم القرى 
                    الرسمي في السعودية. هذا يضمن أن نتائج تحويل التاريخ من هجري إلى ميلادي والعكس 
                    تطابق التواريخ الرسمية المستخدمة حكومياً.
                  </p>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    3️⃣ حفظ النتائج
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    بعد تحويل التاريخ من هجري إلى ميلادي أو والعكس، يمكنك نسخ النتيجة 
                    أو التقاط صورة للشاشة. خدمة تحويل التاريخ متاحة دائماً 
                    للرجوع إلى التاريخ الهجري أو الميلادي لاحقاً بسهولة.
                  </p>
                </div>
              </div>
            </section>
            
            <Suspense fallback={null}>
              <SEOContent />
            </Suspense>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
