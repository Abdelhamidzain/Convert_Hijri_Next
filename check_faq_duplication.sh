#!/bin/bash

echo "🔍 فحص تكرار FAQPage في المشروع..."
echo ""

# البحث عن FAQPage في جميع الملفات
echo "📁 الملفات التي تحتوي على FAQPage:"
find . -name "*.tsx" -o -name "*.ts" | grep -v node_modules | grep -v .next | xargs grep -l "FAQPage" 2>/dev/null
echo ""

# عد مرات ظهور FAQPage في كل ملف
echo "📊 عدد مرات ظهور '@type.*FAQPage' في كل ملف:"
find . -name "*.tsx" -o -name "*.ts" | grep -v node_modules | grep -v .next | while read file; do
  count=$(grep -c '"@type".*"FAQPage"' "$file" 2>/dev/null)
  if [ "$count" -gt 0 ]; then
    echo "  $file: $count مرة"
  fi
done
echo ""

# فحص app/page.tsx خصيصاً
echo "🎯 في app/page.tsx:"
if [ -f "app/page.tsx" ]; then
  count=$(grep -c '"@type".*"FAQPage"' app/page.tsx)
  echo "  عدد FAQPage Schema: $count"
  
  if [ "$count" -eq 1 ]; then
    echo "  ✅ صحيح - FAQPage واحد فقط"
  elif [ "$count" -gt 1 ]; then
    echo "  ❌ خطأ - FAQPage مكرر!"
  else
    echo "  ⚠️  تحذير - لا يوجد FAQPage!"
  fi
else
  echo "  ❌ app/page.tsx غير موجود!"
fi
echo ""

# فحص SEOContent.tsx
echo "🔍 في components/SEOContent.tsx:"
if [ -f "components/SEOContent.tsx" ]; then
  count=$(grep -c '"@type".*"FAQPage"' components/SEOContent.tsx)
  echo "  عدد FAQPage Schema: $count"
  
  if [ "$count" -eq 0 ]; then
    echo "  ✅ صحيح - لا يوجد FAQPage (تم الحذف)"
  else
    echo "  ❌ خطأ - يوجد FAQPage يجب حذفه!"
  fi
else
  echo "  ❌ SEOContent.tsx غير موجود!"
fi
echo ""

# فحص layout.tsx
echo "🔍 في app/layout.tsx:"
if [ -f "app/layout.tsx" ]; then
  count=$(grep -c '"@type".*"FAQPage"' app/layout.tsx)
  echo "  عدد FAQPage Schema: $count"
  
  if [ "$count" -eq 0 ]; then
    echo "  ✅ صحيح - لا يوجد FAQPage في Layout"
  else
    echo "  ⚠️  تحذير - يوجد FAQPage في Layout (قد يسبب تكرار)"
  fi
fi
echo ""

# الخلاصة
echo "📋 الخلاصة:"
total_count=$(find . -name "*.tsx" -o -name "*.ts" | grep -v node_modules | grep -v .next | xargs grep -c '"@type".*"FAQPage"' 2>/dev/null | awk '{sum+=$1} END {print sum}')
echo "  إجمالي FAQPage في المشروع: $total_count"

if [ "$total_count" -eq 1 ]; then
  echo "  ✅ ممتاز! لا يوجد تكرار"
elif [ "$total_count" -gt 1 ]; then
  echo "  ❌ تحذير! يوجد تكرار - يجب الإصلاح"
else
  echo "  ⚠️  لا يوجد FAQPage Schema!"
fi
