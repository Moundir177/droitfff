'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import NewsDetail from '@/components/NewsDetail';
import Link from 'next/link';

const exampleNewsItem = {
  id: 1,
  title: {
    fr: 'Publication du Rapport Annuel 2023',
    ar: 'نشر التقرير السنوي 2023'
  },
  date: {
    fr: '18 août 2023',
    ar: '18 أغسطس 2023'
  },
  author: {
    fr: 'Équipe de Recherche',
    ar: 'فريق البحث'
  },
  keyPoints: [
    { fr: 'Analyse des réformes législatives', ar: 'تحليل الإصلاحات التشريعية' },
    { fr: 'Évaluation de la liberté d\'expression', ar: 'تقييم حرية التعبير' },
    { fr: 'Accès à la justice et procès équitables', ar: 'الوصول إلى العدالة والمحاكمات العادلة' }
  ]
};

export default function ExampleNewsPage() {
  const { language } = useLanguage();
  
  return (
    <div className="bg-light min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className={`flex items-center text-gray-500 text-sm ${language === 'ar' ? 'justify-end' : ''}`}>
            <Link href="/" className="hover:text-orange">
              {language === 'fr' ? 'Accueil' : 'الرئيسية'}
            </Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:text-orange">
              {language === 'fr' ? 'Actualités' : 'الأخبار'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-orange">
              {language === 'fr' ? exampleNewsItem.title.fr : exampleNewsItem.title.ar}
            </span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <NewsDetail {...exampleNewsItem} />
          </div>
          
          <div className="space-y-6">
            {/* Categories */}
            <div className="bg-white p-7 rounded-2xl shadow-lg">
              <h3 className="font-bold text-xl mb-5 text-secondary flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange to-orange-light flex items-center justify-center text-white shadow-orange mr-3">
                  <span className="text-xs font-bold">+</span>
                </div>
                {language === 'fr' ? 'Catégories' : 'الفئات'}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {['Tous', 'Formation', 'Rapports', 'Partenariats', 'Événements'].map((category, idx) => (
                  <Link 
                    key={category}
                    href="/news"
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      category === 'Rapports'
                        ? 'bg-gradient-to-r from-orange to-orange-light text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="bg-gradient-to-br from-secondary to-secondary/90 p-7 rounded-2xl text-white shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-orange/20 blur-xl"></div>
              <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-orange/10 blur-xl"></div>
              
              <h3 className="font-bold text-xl mb-2 text-white relative z-10">
                {language === 'fr' ? 'Abonnez-vous à notre newsletter' : 'اشترك في نشرتنا الإخبارية'}
              </h3>
              
              <p className="text-white/90 mb-5 relative z-10">
                {language === 'fr' ? 'Restez informé de nos dernières actualités et événements' : 'ابق على اطلاع بأحدث أخبارنا وفعالياتنا'}
              </p>
              
              <div className="relative z-10">
                <div className="flex">
                  <input
                    type="email"
                    placeholder={language === 'fr' ? "Votre email" : "بريدك الإلكتروني"}
                    className="flex-grow px-4 py-2 rounded-l-lg border-0 focus:ring-2 focus:ring-orange"
                  />
                  <button className="bg-orange text-white px-4 py-2 rounded-r-lg hover:bg-orange-dark transition-colors">
                    {language === 'fr' ? "S'abonner" : "اشترك"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 