'use client'

import React, { useState, useEffect } from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const MoonIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary" {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const CheckIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-primary flex-shrink-0" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ChevronIcon: React.FC<IconProps & { isOpen: boolean }> = ({ isOpen, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} {...props}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`skeleton ${className}`} />
);

interface FAQItem {
  question: string;
  answer: string;
}

const SEOContent: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const hijriMonths = [
    { num: 1, name: "محرم", note: "رأس السنة الهجرية" },
    { num: 2, name: "صفر" },
    { num: 3, name: "ربيع الأول", note: "المولد النبوي" },
    { num: 4, name: "ربيع الآخر" },
    { num: 5, name: "جمادى الأولى" },
    { num: 6, name: "جمادى الآخرة" },
    { num: 7, name: "رجب", note: "الإسراء والمعراج" },
    { num: 8, name: "شعبان" },
    { num: 9, name: "رمضان", note: "شهر الصيام" },
    { num: 10, name: "شوال", note: "عيد الفطر" },
    { num: 11, name: "ذو القعدة" },
    { num: 12, name: "ذو الحجة", note: "الحج والأضحى" },
  ];

  const faqItems: FAQItem[] = [
    {
      question: "كيف أقوم بتحويل التاريخ من هجري إلى ميلادي؟",
      answer: "لتحويل التاريخ من هجري إلى ميلادي بسهولة: أدخل اليوم والشهر والسنة بالتقويم الهجري في الحقول المخصصة، ثم انقر زر التحويل. ستظهر النتيجة فوراً. محول التاريخ يعتمد على تقويم أم القرى الرسمي لضمان دقة تحويل التاريخ بنسبة 100%."
    },
    {
      question: "ما الفرق بين التقويم الهجري والميلادي؟",
      answer: "التقويم الهجري قمري يعتمد على دورات القمر، ويبلغ طول السنة الهجرية 354-355 يوماً. بينما التقويم الميلادي شمسي ويبلغ 365 يوماً. الفرق بينهما نحو 11 يوماً سنوياً، لذا تحويل التاريخ من هجري الى ميلادي والعكس ضروري للمطابقة الصحيحة."
    },
    {
      question: "هل يمكن تحويل التاريخ من ميلادي إلى هجري بدقة؟",
      answer: "نعم، يمكنك تحويل التاريخ من ميلادي إلى هجري بدقة تامة. أدخل التاريخ الميلادي المطلوب، وسيُحسب التاريخ الهجري المقابل باستخدام خوارزمية دقيقة تطابق تقويم أم القرى. خدمة تحويل التاريخ توفر نتائج فورية بسهولة."
    },
    {
      question: "هل خدمة تحويل التاريخ مجانية؟",
      answer: "نعم، جميع خدمات تحويل التاريخ مجانية تماماً. يمكنك تحويل التاريخ من هجري إلى ميلادي والعكس، حساب العمر بالهجري والميلادي، ومعرفة التاريخ الهجري اليوم على الإنترنت بدون أي رسوم أو اشتراكات."
    },
    {
      question: "كيف أحسب عمري بالتقويم الهجري والميلادي؟",
      answer: "استخدم حاسبة العمر المتوفرة بالموقع. أدخل تاريخ الميلاد سواء بالتقويم الهجري أو الميلادي، وستحصل على عمرك بالسنوات والأشهر والأيام بدقة. خدمة مفيدة لتحويل العمر والتسجيل في البرامج الحكومية."
    },
    {
      question: "ما هو تقويم أم القرى؟",
      answer: "تقويم أم القرى هو التقويم الهجري الرسمي المعتمد في المملكة العربية السعودية منذ عام 1346 هـ. يُستخدم في المعاملات الرسمية وتحديد المناسبات الدينية. محول التاريخ يعتمد على هذا التقويم لضمان دقة تحويل التاريخ من هجري الى ميلادي."
    },
    {
      question: "كيف أعرف التاريخ الهجري اليوم؟",
      answer: "التاريخ الهجري اليوم يظهر تلقائياً أعلى الصفحة مع التاريخ الميلادي المقابل. يتم تحديثه يومياً بشكل آلي وفق تقويم أم القرى. يمكنك زيارة صفحة تاريخ اليوم هجري وميلادي للتفاصيل الكاملة."
    },
    {
      question: "هل يدعم الموقع مدناً مختلفة؟",
      answer: "نعم، الموقع يوفر خدمة تحويل التاريخ ومعرفة التاريخ الهجري اليوم لجميع المدن السعودية الكبرى مثل مكة المكرمة، الرياض، جدة، والمدينة المنورة. كما يعرض مواقيت الصلاة حسب موقعك بسهولة."
    }
  ];

  const occasions = [
    "رمضان - شهر الصيام المبارك بالتقويم الهجري",
    "عيد الفطر - أول شوال بالتقويم الهجري والميلادي",
    "موسم الحج - في ذي الحجة بالتقويم الهجري",
    "عيد الأضحى - العاشر من ذي الحجة هجري",
    "المولد النبوي - 12 ربيع الأول هجري وميلادي",
    "يوم عاشوراء - 10 محرم بالتقويم الهجري"
  ];

  const SectionPlaceholder = ({ minHeight = "200px" }: { minHeight?: string }) => (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30" style={{ minHeight }}>
      <div className="flex items-center gap-3 mb-4">
        <Skeleton className="w-12 h-12 rounded-lg" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  );

  return (
    <section className="mt-16 space-y-12">
      {/* التاريخ الهجري اليوم */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="140px" />
      ) : (
        <article className="bg-primary/5 rounded-2xl p-6 md:p-8 border-2 border-primary/20">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            التاريخ الهجري اليوم - تحويل التاريخ بسهولة
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            استخدم أداة <strong>تحويل التاريخ</strong> لمعرفة <strong>التاريخ الهجري اليوم</strong> والتاريخ الميلادي بدقة عالية.
            نوفر لك أسرع طريقة <strong>لتحويل التاريخ من هجري إلى ميلادي</strong> أو <strong>تحويل التاريخ من ميلادي</strong> إلى هجري <strong>والعكس بسهولة</strong> تامة.
            محول التاريخ الهجري يعتمد على <strong>تقويم أم القرى</strong> الرسمي.
          </p>
        </article>
      )}

      {/* ما هو التقويم */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="300px" />
      ) : (
        <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <MoonIcon />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              ما هو التقويم الهجري والميلادي؟
            </h2>
          </div>
          <div className="text-foreground/80 leading-relaxed space-y-4">
            <p>
              <strong>التقويم الهجري</strong> (Hijri Calendar) هو التقويم القمري الإسلامي الذي يعتمده
              المسلمون لتحديد المناسبات الدينية. يُعرف أيضاً باسم <strong>التاريخ الهجري</strong> نسبة لهجرة النبي محمد ﷺ 
              من مكة إلى المدينة المنورة. <strong>تحويل التاريخ من هجري إلى ميلادي والعكس</strong> ضروري للمعاملات 
              الرسمية في المملكة العربية السعودية.
            </p>
            <p>
              يتكون العام <strong>الهجري</strong> من 12 شهراً قمرياً، ويبلغ عدد أيامه 354 أو 355 يوماً.
              لذلك <strong>التاريخ الهجري</strong> يختلف عن <strong>التاريخ الميلادي</strong> كل عام، مما يجعل 
              <strong> تحويل التاريخ من هجري الى ميلادي بسهولة</strong> أمراً ضرورياً. <strong>خدمة تحويل التاريخ</strong> توفر لك الدقة المطلوبة.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              المناسبات الدينية بالتقويم الهجري والميلادي:
            </h3>
            <ul className="list-none space-y-2 mt-4">
              {occasions.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      )}

      {/* كيفية التحويل */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="250px" />
      ) : (
        <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <span className="text-xl">📖</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              كيفية تحويل التاريخ من هجري إلى ميلادي والعكس
            </h2>
          </div>
          <div className="text-foreground/80 leading-relaxed space-y-4">
            <p>
              <strong>تحويل التاريخ</strong> من <strong>هجري</strong> إلى ميلادي أصبح سهلاً مع <strong>أداة تحويل التاريخ</strong> المجانية. 
              سواء كنت تريد <strong>تحويل التاريخ من هجري إلى ميلادي</strong> أو <strong>تحويل التاريخ من ميلادي</strong> إلى <strong>هجري والعكس</strong>، 
              نوفر لك نتائج دقيقة وفورية <strong>بسهولة</strong>. <strong>محول التاريخ الهجري</strong> يستخدم <strong>تقويم أم القرى</strong> الرسمي 
              <strong>لتحويل التاريخ</strong> بدقة عالية.
            </p>
            <h3 className="text-lg font-semibold text-foreground mt-4">
              خطوات تحويل التاريخ من هجري الى ميلادي بسهولة:
            </h3>
            <ol className="list-decimal list-inside space-y-2 mr-4">
              <li>اختر نوع <strong>التحويل</strong>: <strong>التاريخ من ميلادي</strong> إلى <strong>هجري</strong> أو <strong>التاريخ من هجري إلى ميلادي</strong></li>
              <li>أدخل <strong>التاريخ</strong> المراد <strong>تحويل</strong>ه (اليوم، الشهر، السنة <strong>الهجرية</strong> أو <strong>الميلادي</strong>ة)</li>
              <li>اضغط على زر "<strong>تحويل</strong>" للحصول على النتيجة فوراً بدقة</li>
              <li><strong>التحويل</strong> يتم وفق <strong>التقويم الهجري</strong> الرسمي (<strong>أم القرى</strong>)</li>
            </ol>
          </div>
        </article>
      )}

      {/* الأسئلة الشائعة - 8 أسئلة فقط */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="400px" />
      ) : (
        <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="text-2xl">❓</span>
            الأسئلة الشائعة حول تحويل التاريخ
          </h2>
          <div className="space-y-3">
            {faqItems.map((faq, index) => (
              <div key={index} className="border border-border/50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-5 py-4 text-right flex items-center justify-between gap-4 hover:bg-primary/5 transition-colors"
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <ChevronIcon isOpen={openFAQ === index} />
                </button>
                {openFAQ === index && (
                  <div className="px-5 pb-4 text-foreground/80 leading-relaxed border-t border-border/30 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </article>
      )}

      {/* الشهور الهجرية */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="320px" />
      ) : (
        <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            الشهور بالتقويم الهجري 1447 هـ - التاريخ الهجري والميلادي
          </h2>
          <p className="text-foreground/70 mb-6">
            تعرف على أشهر <strong>التقويم الهجري</strong> مع إمكانية <strong>تحويل التاريخ من هجري إلى ميلادي والعكس</strong> لكل شهر <strong>بسهولة</strong>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {hijriMonths.map((month) => (
              <div
                key={month.num}
                className="p-4 rounded-xl bg-muted/50 border border-border/30 text-center hover:bg-primary/5 transition-colors"
              >
                <span className="block text-sm text-foreground/60 mb-1">
                  الشهر {month.num} هجري
                </span>
                <span className="block font-semibold text-foreground">
                  {month.name}
                </span>
                {month.note && (
                  <span className="block text-xs text-primary mt-1">
                    {month.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </article>
      )}

      {/* معلومات إضافية */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="200px" />
      ) : (
        <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">📚</span>
            معلومات مفيدة عن التقويم الهجري والميلادي
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              <strong>نبذة عن التقويم الهجري:</strong> <strong>التقويم الهجري</strong> (Hijri Calendar) قمري يبدأ من هجرة الرسول ﷺ من مكة للمدينة. 
              يتكون العام <strong>الهجري</strong> من 12 شهراً قمرياً، ويستخدم لتحديد المناسبات الإسلامية مثل رمضان والحج. 
              <strong>تحويل التاريخ من هجري إلى ميلادي والعكس</strong> ضروري لمعرفة المواعيد بدقة في المملكة السعودية.
            </p>
            <p>
              <strong>الشهور الهجرية:</strong> محرم، صفر، ربيع الأول، ربيع الآخر، جمادى الأولى، جمادى الآخرة، 
              رجب، شعبان، رمضان، شوال، ذو القعدة، ذو الحجة. عند <strong>تحويل التاريخ من هجري الى ميلادي 
              والعكس</strong> يجب مراعاة الفرق لضمان دقة النتائج باستخدام <strong>محول التاريخ الهجري</strong>.
            </p>
            <p>
              <strong>استخدامات عملية:</strong> يمكنك استخدام <strong>خدمة تحويل التاريخ والعكس</strong> لتاريخ ميلادك للتسجيل بالمواقع الحكومية، 
              معرفة المواعيد المهمة <strong>بالتقويم الهجري والميلادي</strong>، التخطيط للحج، وحساب العمر <strong>بسهولة</strong>. 
              سواء كنت بالسعودية أو مكة أو مدن أخرى، <strong>أداة تحويل التاريخ</strong> متاحة على الإنترنت مجاناً.
            </p>
          </div>
        </article>
      )}
    </section>
  );
};

export default SEOContent;
