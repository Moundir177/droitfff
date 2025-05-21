'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaQuoteLeft, FaRegCalendarAlt, FaStar } from 'react-icons/fa';
import PageHeader from '@/components/PageHeader';
import { getPageContent, PageContent } from '@/lib/database';

type Language = 'fr' | 'ar';

interface TranslatedText {
  fr: string;
  ar: string;
}

interface Category {
  id: string;
  fr: string;
  ar: string;
}

// Custom event name for content updates
const CONTENT_UPDATED_EVENT = 'content_updated';

export default function TestimonialsPage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  
  // Function to load page content from localStorage
  const loadContent = () => {
    const content = getPageContent('testimonials');
    if (content) {
      setPageContent(content);
    }
  };
  
  useEffect(() => {
    // Load content on initial render
    loadContent();
    
    // Set up event listeners for content updates
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'page_testimonials' || event.key === 'editor_testimonials') {
        loadContent();
      }
    };
    
    const handleContentUpdated = () => {
      loadContent();
    };
    
    // Listen for direct localStorage changes
    window.addEventListener('storage', handleStorageChange);
    
    // Listen for custom content updated event
    window.addEventListener(CONTENT_UPDATED_EVENT, handleContentUpdated);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener(CONTENT_UPDATED_EVENT, handleContentUpdated);
    };
  }, []);
  
  // Get the specific sections from the content
  const introSection = pageContent?.sections.find(section => section.id === 'intro');
  const headerSection = pageContent?.sections.find(section => section.id === 'header');
  const categoriesSection = pageContent?.sections.find(section => section.id === 'categories');
  const comingSoonSection = pageContent?.sections.find(section => section.id === 'coming_soon');
  const shareSection = pageContent?.sections.find(section => section.id === 'share');
  const formSection = pageContent?.sections.find(section => section.id === 'form');
  
  // Default content if not found in database
  const pageTitle = pageContent?.title?.[language] || 
    (language === 'fr' ? 'Témoignages' : 'الشهادات');
    
  const pageSubtitle = introSection?.content?.[language] || 
    (language === 'fr' ? 'Découvrez ce que nos bénéficiaires, partenaires et volontaires disent de notre travail' 
    : 'اكتشف ما يقوله المستفيدون وشركاؤنا ومتطوعونا عن عملنا');
  
  const headerTitle = headerSection?.title?.[language] || 
    (language === 'fr' ? 'Ce qu\'ils disent de nous' : 'ما يقولونه عنا');
    
  const headerContent = headerSection?.content?.[language] || 
    (language === 'fr' ? 'Voici les témoignages de personnes et d\'organisations qui ont bénéficié de nos programmes et collaboré avec nous.' 
    : 'فيما يلي شهادات من الأشخاص والمنظمات التي استفادت من برامجنا وتعاونت معنا.');
  
  const comingSoonTitle = comingSoonSection?.title?.[language] || 
    (language === 'fr' ? 'Témoignages à venir' : 'شهادات قادمة');
    
  const comingSoonContent = comingSoonSection?.content?.[language] || 
    (language === 'fr' ? 'Nous sommes en train de recueillir des témoignages de nos bénéficiaires, partenaires et volontaires. Revenez bientôt pour découvrir leurs expériences avec notre fondation.' 
    : 'نحن نجمع الشهادات من المستفيدين وشركائنا ومتطوعينا. عد قريبًا لاكتشاف تجاربهم مع مؤسستنا.');
  
  const shareTitle = shareSection?.title?.[language] || 
    (language === 'fr' ? 'Partagez votre expérience' : 'شارك تجربتك');
    
  const shareContent = shareSection?.content?.[language] || 
    (language === 'fr' ? 'Avez-vous participé à l\'un de nos programmes ou collaboré avec nous ? Nous serions ravis d\'entendre votre histoire.' 
    : 'هل شاركت في أحد برامجنا أو تعاونت معنا؟ يسعدنا سماع قصتك.');
  
  // Get text aligned correctly based on language
  const textAlign = language === 'ar' ? 'text-right' : 'text-left';
  const rtlClass = language === 'ar' ? 'rtl' : '';

  // Categories
  const categories: Category[] = [
    { id: 'all', fr: 'Tous', ar: 'الكل' },
    { id: 'beneficiaries', fr: 'Bénéficiaires', ar: 'المستفيدون' },
    { id: 'partners', fr: 'Partenaires', ar: 'الشركاء' },
    { id: 'volunteers', fr: 'Volontaires', ar: 'المتطوعون' },
    { id: 'experts', fr: 'Experts', ar: 'الخبراء' }
  ];

  return (
    <div className={rtlClass}>
      {/* Page Header */}
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
              {pageTitle}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`mb-12 ${textAlign}`}>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {headerTitle}
            </h2>
            
            <p className="text-lg text-gray-700 max-w-3xl">
              {headerContent}
            </p>
          </div>
          
          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#8FD694] text-[#171717]'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {language === 'fr' ? category.fr : category.ar}
              </button>
            ))}
          </div>
          
          {/* Coming Soon Message */}
          <div className="bg-white rounded-lg shadow-md p-12 text-center mb-12">
            <div className="w-20 h-20 mx-auto bg-[#8FD694]/10 rounded-full flex items-center justify-center mb-6">
              <FaQuoteLeft className="text-[#8FD694] text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {comingSoonTitle}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              {comingSoonContent}
            </p>
            <div className="flex justify-center">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className="text-[#8FD694] text-xl"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Share Your Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-10 ${textAlign}`}>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {shareTitle}
              </h2>
              <p className="text-lg text-gray-600">
                {shareContent}
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-gray-700 font-medium mb-2 ${textAlign}`}>
                      {language === 'fr' ? 'Nom complet' : 'الاسم الكامل'}
                    </label>
                    <input 
                      type="text" 
                      className={`w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#8FD694] focus:border-transparent outline-none ${textAlign}`}
                    />
                  </div>
                  <div>
                    <label className={`block text-gray-700 font-medium mb-2 ${textAlign}`}>
                      {language === 'fr' ? 'Email' : 'البريد الإلكتروني'}
                    </label>
                    <input 
                      type="email" 
                      className={`w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#8FD694] focus:border-transparent outline-none ${textAlign}`}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-gray-700 font-medium mb-2 ${textAlign}`}>
                      {language === 'fr' ? 'Organisation' : 'المنظمة'}
                    </label>
                    <input 
                      type="text" 
                      className={`w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#8FD694] focus:border-transparent outline-none ${textAlign}`}
                    />
                  </div>
                  <div>
                    <label className={`block text-gray-700 font-medium mb-2 ${textAlign}`}>
                      {language === 'fr' ? 'Rôle / Fonction' : 'الدور / الوظيفة'}
                    </label>
                    <input 
                      type="text" 
                      className={`w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#8FD694] focus:border-transparent outline-none ${textAlign}`}
                    />
                  </div>
                </div>
                
                <div>
                  <label className={`block text-gray-700 font-medium mb-2 ${textAlign}`}>
                    {language === 'fr' ? 'Votre expérience avec nous' : 'تجربتك معنا'}
                  </label>
                  <textarea 
                    rows={5} 
                    className={`w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#8FD694] focus:border-transparent outline-none ${textAlign}`}
                    placeholder={language === 'fr' ? 'Partagez votre expérience en détail...' : 'شارك تجربتك بالتفصيل...'}
                  ></textarea>
                </div>
                
                <div>
                  <label className={`block text-gray-700 font-medium mb-2 ${textAlign}`}>
                    {language === 'fr' ? 'Votre évaluation' : 'تقييمك'}
                  </label>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <button 
                        key={i}
                        type="button" 
                        className="text-2xl text-gray-300 hover:text-yellow-400 focus:outline-none"
                      >
                        <FaStar />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="bg-[#8FD694] hover:bg-[#8FD694]/90 text-[#171717] px-8 py-3 rounded-full transition-colors"
                  >
                    {language === 'fr' ? 'Soumettre votre témoignage' : 'إرسال شهادتك'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 