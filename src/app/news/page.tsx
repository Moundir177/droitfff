'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { getPageContent, PageContent } from '@/lib/database';

type Language = 'fr' | 'ar';

interface TranslatedText {
  fr: string;
  ar: string;
}

interface NewsItem {
  id: number;
  title: TranslatedText;
  date: TranslatedText;
  author: TranslatedText;
  category: TranslatedText;
  excerpt: TranslatedText;
  image: string;
  slug: string;
  content: string;
}

interface Category {
  id: string;
  fr: string;
  ar: string;
}

const newsItems: NewsItem[] = [
  {
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
      fr: 'Équipe de recherche',
      ar: 'فريق البحث'
    },
    category: {
      fr: 'Rapports',
      ar: 'تقارير'
    },
    excerpt: {
      fr: 'Notre rapport annuel sur l\'état des droits est désormais disponible. Ce document de référence présente une analyse détaillée des avancées et des défis en matière de droits humains au cours de l\'année écoulée.',
      ar: 'تقريرنا السنوي عن حالة الحقوق متاح الآن. تقدم هذه الوثيقة المرجعية تحليلاً مفصلاً للتقدم والتحديات في مجال حقوق الإنسان خلال العام الماضي.'
    },
    image: '/images/report.jpg',
    slug: '/news/rapport-annuel-2023',
    content: 'Texte de contenu à remplir pour cet article.'
  },
  {
    id: 2,
    title: {
      fr: 'Formation sur les Droits Fondamentaux',
      ar: 'تدريب على الحقوق الأساسية'
    },
    date: {
      fr: '25 août 2023',
      ar: '25 أغسطس 2023'
    },
    author: {
      fr: 'Équipe de formation',
      ar: 'فريق التدريب'
    },
    category: {
      fr: 'Formation',
      ar: 'تدريب'
    },
    excerpt: {
      fr: 'Nouvelle session de formation prévue dans la ville pour les défenseurs des droits, axée sur les mécanismes de protection internationaux.',
      ar: 'دورة تدريبية جديدة مخططة في المدينة للمدافعين عن الحقوق، تركز على آليات الحماية الدولية.'
    },
    image: '/images/training.jpg',
    slug: '/news/formation-droits-fondamentaux',
    content: 'Texte de contenu à remplir pour cet article.'
  },
  {
    id: 3,
    title: {
      fr: 'Collaboration avec des ONG Internationales',
      ar: 'التعاون مع المنظمات غير الحكومية الدولية'
    },
    date: {
      fr: '10 août 2023',
      ar: '10 أغسطس 2023'
    },
    author: {
      fr: 'Équipe des partenariats',
      ar: 'فريق الشراكات'
    },
    category: {
      fr: 'Partenariats',
      ar: 'شراكات'
    },
    excerpt: {
      fr: 'Un nouveau partenariat stratégique avec des organisations internationales pour renforcer la promotion des droits.',
      ar: 'شراكة استراتيجية جديدة مع منظمات دولية لتعزيز الحقوق.'
    },
    image: '/images/partnership.jpg',
    slug: '/news/collaboration-ong-internationales',
    content: 'Texte de contenu à remplir pour cet article.'
  },
  {
    id: 4,
    title: {
      fr: 'Table Ronde sur les Réformes Juridiques',
      ar: 'طاولة مستديرة حول الإصلاحات القانونية'
    },
    date: {
      fr: '5 août 2023',
      ar: '5 أغسطس 2023'
    },
    author: {
      fr: 'Équipe des événements',
      ar: 'فريق الفعاليات'
    },
    category: {
      fr: 'Événements',
      ar: 'فعاليات'
    },
    excerpt: {
      fr: 'Une journée d\'étude dédiée aux récentes réformes juridiques et à leur impact sur les droits des citoyens.',
      ar: 'يوم دراسي مخصص للإصلاحات القانونية الأخيرة وتأثيرها على حقوق المواطنين.'
    },
    image: '/images/event.jpg',
    slug: '/news/table-ronde-reformes-juridiques',
    content: 'Texte de contenu à remplir pour cet article.'
  },
  {
    id: 5,
    title: {
      fr: 'Lancement de l\'Initiative Droits des Jeunes',
      ar: 'إطلاق مبادرة حقوق الشباب'
    },
    date: {
      fr: '28 juillet 2023',
      ar: '28 يوليو 2023'
    },
    author: {
      fr: 'Équipe des programmes',
      ar: 'فريق البرامج'
    },
    category: {
      fr: 'Programmes',
      ar: 'برامج'
    },
    excerpt: {
      fr: 'Une nouvelle initiative visant à éduquer les jeunes sur leurs droits et à encourager leur engagement civique.',
      ar: 'مبادرة جديدة تهدف إلى تثقيف الشباب حول حقوقهم وتشجيع مشاركتهم المدنية.'
    },
    image: '/images/youth.jpg',
    slug: '/news/initiative-droits-jeunes',
    content: 'Texte de contenu à remplir pour cet article.'
  },
  {
    id: 6,
    title: {
      fr: 'Conférence sur les Droits Numériques',
      ar: 'مؤتمر حول الحقوق الرقمية'
    },
    date: {
      fr: '15 juillet 2023',
      ar: '15 يوليو 2023'
    },
    author: {
      fr: 'Équipe des événements',
      ar: 'فريق الفعاليات'
    },
    category: {
      fr: 'Événements',
      ar: 'فعاليات'
    },
    excerpt: {
      fr: 'Une conférence abordant les défis et les opportunités de la protection des droits à l\'ère numérique.',
      ar: 'مؤتمر يتناول تحديات وفرص حماية الحقوق في العصر الرقمي.'
    },
    image: '/images/digital.jpg',
    slug: '/news/conference-droits-numeriques',
    content: 'Texte de contenu à remplir pour cet article.'
  },
  {
    id: 7,
    title: {
      fr: 'Guide sur l\'Accès à la Justice',
      ar: 'دليل حول الوصول إلى العدالة'
    },
    date: {
      fr: '5 juillet 2023',
      ar: '5 يوليو 2023'
    },
    author: {
      fr: 'Équipe des publications',
      ar: 'فريق المنشورات'
    },
    category: {
      fr: 'Publications',
      ar: 'منشورات'
    },
    excerpt: {
      fr: 'Publication d\'un guide pratique pour aider les citoyens à comprendre et à naviguer dans le système judiciaire.',
      ar: 'نشر دليل عملي لمساعدة المواطنين على فهم نظام العدالة والتنقل فيه.'
    },
    image: '/images/justice.jpg',
    slug: '/news/guide-acces-justice',
    content: 'Texte de contenu à remplir pour cet article. Ce guide pratique offre des informations essentielles sur le système judiciaire et les procédures à suivre pour accéder à la justice.'
  },
  {
    id: 8,
    title: {
      fr: 'Atelier sur les Droits des Femmes',
      ar: 'ورشة عمل حول حقوق المرأة'
    },
    date: {
      fr: '28 juin 2023',
      ar: '28 يونيو 2023'
    },
    author: {
      fr: 'Équipe de formation',
      ar: 'فريق التدريب'
    },
    category: {
      fr: 'Formation',
      ar: 'تدريب'
    },
    excerpt: {
      fr: 'Un atelier axé sur les droits des femmes et les stratégies de lutte contre la discrimination fondée sur le genre.',
      ar: 'ورشة عمل تركز على حقوق المرأة واستراتيجيات مكافحة التمييز القائم على النوع الاجتماعي.'
    },
    image: '/images/women.jpg',
    slug: '/news/atelier-droits-femmes',
    content: 'Texte de contenu à remplir pour cet article. Cet atelier a réuni des experts et des participants pour discuter des stratégies efficaces de lutte contre la discrimination fondée sur le genre.'
  }
];

export default function NewsPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  
  const loadContent = () => {
    const content = getPageContent('news');
    if (content) {
      setPageContent(content);
    }
  };

  useEffect(() => {
    loadContent(); // Initial load

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'page_news') {
        loadContent(); // Reload content if 'page_news' changes
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const categories: Category[] = [
    { id: 'all', fr: 'Tous', ar: 'الكل' },
    { id: 'formation', fr: 'Formation', ar: 'تدريب' },
    { id: 'rapports', fr: 'Rapports', ar: 'تقارير' },
    { id: 'partenariats', fr: 'Partenariats', ar: 'شراكات' },
    { id: 'evenements', fr: 'Événements', ar: 'فعاليات' },
    { id: 'programmes', fr: 'Programmes', ar: 'برامج' }
  ];

  const getCategoryName = (category: Category): string => {
    return language === 'fr' ? category.fr : category.ar;
  };
  
  const filteredNews = newsItems.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.title[language].toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.excerpt[language].toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || 
      item.category[language].toLowerCase() === getCategoryName(categories.find(cat => cat.id === activeCategory) || categories[0]).toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  // Classes for RTL/LTR layout
  const textAlign = language === 'ar' ? 'text-right' : 'text-left';
  const flexDirection = language === 'ar' ? 'flex-row-reverse' : 'flex-row';

  // Get page title from content or use default
  const pageTitle = pageContent?.title?.[language as 'fr' | 'ar'] || 
    (language === 'fr' ? 'Actualités' : 'الأخبار');
  
  // Get page subtitle or use default
  const pageSubtitle = pageContent?.sections?.find(s => s.id === 'intro')?.content?.[language as 'fr' | 'ar'] || 
    (language === 'fr' 
      ? 'Restez informé des dernières initiatives, événements et développements concernant notre travail sur les droits humains.' 
      : 'ابق على اطلاع بآخر المبادرات والأحداث والتطورات المتعلقة بعملنا في مجال حقوق الإنسان.');

  return (
    <div>
      <PageHeader 
        title={pageTitle}
        subtitle={pageSubtitle}
        language={language as 'fr' | 'ar'}
      />

      {/* Breadcrumbs */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className={`flex items-center text-gray-500 text-sm ${language === 'ar' ? 'justify-end' : ''}`}>
            <Link href="/" className="hover:text-[#8FD694]">
              {language === 'fr' ? 'Accueil' : 'الرئيسية'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">
              {language === 'fr' ? 'Actualités' : 'الأخبار'}
            </span>
          </div>
        </div>
      </div>
        
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className={`flex flex-col md:flex-row ${language === 'ar' ? 'md:flex-row-reverse' : ''} justify-between items-center gap-4`}>
              {/* Categories */}
              <div className={`flex flex-wrap gap-2 ${language === 'ar' ? 'justify-end' : ''}`}>
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeCategory === category.id
                        ? 'bg-[#8FD694] text-[#171717]'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {language === 'fr' ? category.fr : category.ar}
                  </button>
                ))}
              </div>
              
              {/* Search */}
              <div className="w-full md:w-64">
                <div className={`relative flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <input
                    type="text"
                    placeholder={language === 'fr' ? "Rechercher..." : "بحث..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#8FD694] ${language === 'ar' ? 'text-right pr-4 pl-10' : 'pl-4 pr-10'}`}
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  />
                  <div className={`absolute ${language === 'ar' ? 'left-3' : 'right-3'} top-1/2 transform -translate-y-1/2 text-gray-400`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {filteredNews.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <p className="text-gray-500">
                {language === 'fr' 
                  ? 'Aucune actualité ne correspond à vos critères de recherche.' 
                  : 'لا توجد أخبار تطابق معايير البحث الخاصة بك.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map(item => (
                <div key={item.id} className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${textAlign}`}>
                  <div className="h-48 bg-gradient-to-r from-[#171717]/80 to-[#8FD694]/60 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white text-lg font-bold">FPRA</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''} mb-3`}>
                      <span className="inline-block bg-[#8FD694]/10 text-[#171717] px-3 py-1 text-xs font-semibold rounded-full">
                        {item.category[language]}
                      </span>
                      <span className={`text-xs text-gray-500 ${language === 'ar' ? 'ml-auto' : 'ml-2'}`}>
                        {item.date[language]}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title[language]}</h3>
                    <p className="text-gray-700 mb-4">{item.excerpt[language]}</p>
                    <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''} justify-between mt-4`}>
                      <Link href={item.slug} className="text-[#8FD694] font-medium hover:underline">
                        {language === 'fr' ? 'Lire plus →' : '← قراءة المزيد'}
                      </Link>
                      <span className="text-sm text-gray-500">{item.author[language]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow-sm">
              <button className={`px-3 py-2 ${language === 'ar' ? 'rounded-r-md' : 'rounded-l-md'} border border-gray-300 bg-white text-gray-500 hover:bg-gray-50`}>
                {language === 'fr' ? 'Précédent' : 'السابق'}
              </button>
              <button className="px-3 py-2 border-t border-b border-gray-300 bg-[#8FD694] text-[#171717]">
                1
              </button>
              <button className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className={`px-3 py-2 ${language === 'ar' ? 'rounded-l-md' : 'rounded-r-md'} border border-gray-300 bg-white text-gray-700 hover:bg-gray-50`}>
                {language === 'fr' ? 'Suivant' : 'التالي'}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
} 