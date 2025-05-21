'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaDownload, FaRegCalendarAlt, FaEye, FaRegFileAlt, FaHeadphones, FaPlay } from 'react-icons/fa';
import PageHeader from '@/components/PageHeader';
import { getPageContent, PageContent } from '@/lib/database';

type Language = 'fr' | 'ar';

interface TranslatedText {
  fr: string;
  ar: string;
}

interface PublicationType {
  id: string;
  fr: string;
  ar: string;
}

interface Publication {
  id: number;
  title: TranslatedText;
  date: TranslatedText;
  excerpt: TranslatedText;
  category: PublicationType;
  type: PublicationType;
  pages: number;
  image?: string;
  slug: string;
  pdfUrl: string;
  views?: number;
  listens?: number;
  downloads?: number;
  featured?: boolean;
  duration?: string;
}

const publicationTypes: PublicationType[] = [
  { id: 'all', fr: 'Tout', ar: 'الكل' },
  { id: 'publications', fr: 'Publications', ar: 'منشورات' },
  { id: 'rapports', fr: 'Rapports', ar: 'تقارير' },
  { id: 'guides', fr: 'Guides', ar: 'أدلة' }
];

const publicationCategories: PublicationType[] = [
  { id: 'all', fr: 'Tous', ar: 'الكل' },
  { id: 'juridique', fr: 'Juridique', ar: 'قانوني' },
  { id: 'droits-humains', fr: 'Droits humains', ar: 'حقوق الإنسان' },
  { id: 'social', fr: 'Social', ar: 'اجتماعي' }
];

const mediaTypes: PublicationType[] = [
  { id: 'all', fr: 'Tout', ar: 'الكل' },
  { id: 'videos', fr: 'Vidéos', ar: 'فيديوهات' },
  { id: 'podcasts', fr: 'Podcasts', ar: 'بودكاست' },
  { id: 'infographies', fr: 'Infographies', ar: 'إنفوغرافيك' }
];

// Sample publications data
const publications: Publication[] = [
  {
    id: 1,
    title: {
      fr: 'Rapport annuel 2023',
      ar: 'التقرير السنوي 2023'
    },
    date: {
      fr: 'Mai 2023',
      ar: 'مايو 2023'
    },
    excerpt: {
      fr: 'Ce rapport présente un aperçu complet de l\'état des droits humains en Algérie en 2023. Il aborde les avancées et défis dans différents domaines, notamment les libertés civiles, les droits économiques et sociaux, et l\'accès à la justice.',
      ar: 'يقدم هذا التقرير نظرة شاملة عن حالة حقوق الإنسان في الجزائر في عام 2023. ويتناول التقدم والتحديات في مختلف المجالات، بما في ذلك الحريات المدنية والحقوق الاقتصادية والاجتماعية والوصول إلى العدالة.'
    },
    category: { id: 'droits-humains', fr: 'Rapport annuel', ar: 'التقرير السنوي' },
    type: { id: 'rapports', fr: 'Rapport', ar: 'تقرير' },
    pages: 120,
    slug: '/review/rapport-annuel-2023',
    pdfUrl: '/documents/rapport-annuel-2023.pdf',
    featured: true
  },
  {
    id: 2,
    title: {
      fr: 'État des lieux de l\'égalité des genres',
      ar: 'واقع المساواة بين الجنسين'
    },
    date: {
      fr: 'Mars 2023',
      ar: 'مارس 2023'
    },
    excerpt: {
      fr: 'Analyse des progrès réalisés et des défis persistants en matière d\'égalité hommes-femmes.',
      ar: 'تحليل التقدم المحرز والتحديات المستمرة في مجال المساواة بين الجنسين.'
    },
    category: { id: 'droits-humains', fr: 'Rapport', ar: 'تقرير' },
    type: { id: 'rapports', fr: 'Rapport', ar: 'تقرير' },
    pages: 45,
    slug: '/review/egalite-genres',
    pdfUrl: '/documents/egalite-genres.pdf'
  },
  {
    id: 3,
    title: {
      fr: 'Guide pratique des droits de l\'enfant',
      ar: 'دليل عملي لحقوق الطفل'
    },
    date: {
      fr: 'Février 2023',
      ar: 'فبراير 2023'
    },
    excerpt: {
      fr: 'Ressource complète pour parents, éducateurs et professionnels travaillant avec les enfants.',
      ar: 'مورد شامل للآباء والمعلمين والمختصين العاملين مع الأطفال.'
    },
    category: { id: 'social', fr: 'Guide', ar: 'دليل' },
    type: { id: 'guides', fr: 'Guide', ar: 'دليل' },
    pages: 85,
    slug: '/review/guide-droits-enfant',
    pdfUrl: '/documents/guide-droits-enfant.pdf'
  },
  {
    id: 4,
    title: {
      fr: 'Réformes juridiques et accès à la justice',
      ar: 'الإصلاحات القانونية والوصول إلى العدالة'
    },
    date: {
      fr: 'Janvier 2023',
      ar: 'يناير 2023'
    },
    excerpt: {
      fr: 'Analyse des récentes réformes juridiques et leur impact sur l\'accès des citoyens à la justice.',
      ar: 'تحليل الإصلاحات القانونية الأخيرة وتأثيرها على وصول المواطنين إلى العدالة.'
    },
    category: { id: 'juridique', fr: 'Analyse', ar: 'تحليل' },
    type: { id: 'publications', fr: 'Analyse', ar: 'تحليل' },
    pages: 60,
    slug: '/review/reformes-juridiques',
    pdfUrl: '/documents/reformes-juridiques.pdf'
  }
];

// Sample media content
const mediaContent = [
  {
    id: 1,
    title: {
      fr: 'Les droits humains : Enjeux et perspectives en Algérie',
      ar: 'حقوق الإنسان: التحديات والآفاق في الجزائر'
    },
    date: {
      fr: 'Mai 2023',
      ar: 'مايو 2023'
    },
    excerpt: {
      fr: 'Conférence-débat sur l\'état des droits humains en Algérie, avec la participation d\'experts nationaux et internationaux.',
      ar: 'ندوة-نقاش حول وضع حقوق الإنسان في الجزائر، بمشاركة خبراء وطنيين ودوليين.'
    },
    category: { id: 'droits-humains', fr: 'Vidéo à la une', ar: 'فيديو بارز' },
    type: { id: 'videos', fr: 'Vidéo', ar: 'فيديو' },
    pages: 0,
    slug: '/review/media/droits-humains-enjeux',
    pdfUrl: '#',
    views: 2456,
    duration: '24:15'
  },
  {
    id: 2,
    title: {
      fr: 'L\'engagement des jeunes pour les droits',
      ar: 'التزام الشباب بالحقوق'
    },
    date: {
      fr: 'Mars 2023',
      ar: 'مارس 2023'
    },
    excerpt: {
      fr: 'Comment les jeunes s\'engagent pour la défense et la promotion des droits humains en Algérie.',
      ar: 'كيف يلتزم الشباب بالدفاع عن حقوق الإنسان وتعزيزها في الجزائر.'
    },
    category: { id: 'droits-humains', fr: 'Vidéo', ar: 'فيديو' },
    type: { id: 'videos', fr: 'Vidéo', ar: 'فيديو' },
    pages: 0,
    slug: '/review/media/engagement-jeunes',
    pdfUrl: '#',
    views: 1245,
    duration: '18:32'
  },
  {
    id: 3,
    title: {
      fr: 'Les défis de l\'accès à la justice',
      ar: 'تحديات الوصول إلى العدالة'
    },
    date: {
      fr: 'Février 2023',
      ar: 'فبراير 2023'
    },
    excerpt: {
      fr: 'Entretien avec des experts juridiques sur les obstacles à l\'accès à la justice et les solutions possibles.',
      ar: 'مقابلة مع خبراء قانونيين حول العقبات التي تعترض الوصول إلى العدالة والحلول الممكنة.'
    },
    category: { id: 'juridique', fr: 'Podcast', ar: 'بودكاست' },
    type: { id: 'podcasts', fr: 'Podcast', ar: 'بودكاست' },
    pages: 0,
    slug: '/review/media/defis-acces-justice',
    pdfUrl: '#',
    listens: 856,
    duration: '45:10'
  },
  {
    id: 4,
    title: {
      fr: 'L\'égalité des genres en chiffres',
      ar: 'المساواة بين الجنسين بالأرقام'
    },
    date: {
      fr: 'Janvier 2023',
      ar: 'يناير 2023'
    },
    excerpt: {
      fr: 'Infographie présentant les statistiques clés sur l\'égalité des genres en Algérie et dans le monde.',
      ar: 'إنفوغرافيك يقدم الإحصاءات الرئيسية حول المساواة بين الجنسين في الجزائر وفي العالم.'
    },
    category: { id: 'droits-humains', fr: 'Infographie', ar: 'إنفوغرافيك' },
    type: { id: 'infographies', fr: 'Infographie', ar: 'إنفوغرافيك' },
    pages: 0,
    slug: '/review/media/egalite-genres-chiffres',
    pdfUrl: '/documents/infographie-egalite-genres.pdf',
    downloads: 378
  }
];

// Custom event name for content updates
const CONTENT_UPDATED_EVENT = 'content_updated';

export default function ReviewPage() {
  const { language } = useLanguage();
  const [activePublicationType, setActivePublicationType] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeMediaType, setActiveMediaType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  
  // Function to load page content from localStorage
  const loadContent = () => {
    const content = getPageContent('review');
    if (content) {
      setPageContent(content);
    }
  };
  
  useEffect(() => {
    // Load content on initial render
    loadContent();
    
    // Set up event listeners for content updates
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'page_review' || event.key === 'editor_review') {
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
  const comingSoonSection = pageContent?.sections.find(section => section.id === 'coming_soon');
  const contributionSection = pageContent?.sections.find(section => section.id === 'contribution');
  const recentPublicationsSection = pageContent?.sections.find(section => section.id === 'recent_publications');
  const mediaLibrarySection = pageContent?.sections.find(section => section.id === 'media_library');
  const featuredSection = pageContent?.sections.find(section => section.id === 'featured');
  
  // Default content if not found in database
  const pageTitle = pageContent?.title?.[language] || 
    (language === 'fr' ? 'Revue & Publications' : 'المراجعة والمنشورات');
    
  const pageSubtitle = introSection?.content?.[language] || 
    (language === 'fr' ? 'Explorez nos analyses et publications sur les droits humains et les enjeux juridiques actuels' 
    : 'استكشف تحليلاتنا ومنشوراتنا حول حقوق الإنسان والقضايا القانونية الحالية');
  
  const comingSoonTitle = comingSoonSection?.title?.[language] || 
    (language === 'fr' ? 'Notre première revue arrive en juillet 2025 !' 
    : 'تصدر مجلتنا الأولى في يوليو 2025!');
    
  const comingSoonContent = comingSoonSection?.content?.[language] || 
    (language === 'fr' ? 'Nous avons le plaisir de vous annoncer que la première édition de notre revue sera publiée en juillet 2025. Cette revue trimestrielle abordera les questions juridiques, les droits humains et les enjeux sociaux actuels.' 
    : 'يسرنا أن نعلن أن العدد الأول من مجلتنا سيصدر في يوليو 2025. ستتناول هذه المجلة الفصلية القضايا القانونية وحقوق الإنسان والقضايا الاجتماعية الحالية.');
  
  const contributionTitle = contributionSection?.title?.[language] || 
    (language === 'fr' ? 'Vous souhaitez contribuer ?' 
    : 'هل ترغب في المساهمة؟');
    
  const contributionContent = contributionSection?.content?.[language] || 
    (language === 'fr' ? 'Nous invitons les chercheurs, juristes, académiciens et experts à contribuer à notre revue. Si vous souhaitez soumettre un article ou partager votre expertise, n\'hésitez pas à nous contacter via notre formulaire de contact ou sur nos réseaux sociaux.' 
    : 'ندعو الباحثين والمحامين والأكاديميين والخبراء للمساهمة في مجلتنا. إذا كنت ترغب في تقديم مقالة أو مشاركة خبرتك، فلا تتردد في الاتصال بنا من خلال نموذج الاتصال الخاص بنا أو على وسائل التواصل الاجتماعي.');
  
  const recentPublicationsTitle = recentPublicationsSection?.title?.[language] || 
    (language === 'fr' ? 'Publications récentes' 
    : 'المنشورات الحديثة');
    
  const recentPublicationsContent = recentPublicationsSection?.content?.[language] || 
    (language === 'fr' ? 'Découvrez l\'ensemble de nos ressources documentaires sur les droits humains et les questions juridiques.' 
    : 'اكتشف جميع مواردنا الوثائقية حول حقوق الإنسان والقضايا القانونية.');
  
  const mediaLibraryTitle = mediaLibrarySection?.title?.[language] || 
    (language === 'fr' ? 'Médiathèque' 
    : 'مكتبة الوسائط');
    
  const mediaLibraryContent = mediaLibrarySection?.content?.[language] || 
    (language === 'fr' ? 'Explorez notre collection de ressources audiovisuelles sur les droits humains.' 
    : 'استكشف مجموعتنا من الموارد السمعية البصرية حول حقوق الإنسان.');
  
  const featuredTitle = featuredSection?.title?.[language] || 
    (language === 'fr' ? 'Publication à la une' 
    : 'المنشور المميز');
    
  const featuredContent = featuredSection?.content?.[language] || 
    (language === 'fr' ? 'Notre rapport annuel présente un aperçu complet de l\'état des droits humains en Algérie.' 
    : 'يقدم تقريرنا السنوي نظرة شاملة عن حالة حقوق الإنسان في الجزائر.');

  // Get text aligned correctly based on language
  const textAlign = language === 'ar' ? 'text-right' : 'text-left';
  const rtlClass = language === 'ar' ? 'rtl' : '';

  // Filter publications based on selected type, category and search query
  const filteredPublications = publications.filter(pub => {
    const matchesType = activePublicationType === 'all' || pub.type.id === activePublicationType;
    const matchesSearch = searchTerm === '' || 
      pub.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.excerpt[language].toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  // Filter media content based on selected type and search query
  const filteredMedia = mediaContent.filter(item => {
    const matchesType = activeMediaType === 'all' || item.type.id === activeMediaType;
    const matchesSearch = searchTerm === '' || 
      item.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt[language].toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className={rtlClass}>
      {/* Page Header */}
      <PageHeader
        title={pageTitle}
        subtitle={pageSubtitle}
        language={language}
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
              {language === 'fr' ? 'Revue' : 'المراجعة'}
            </span>
          </div>
        </div>
      </div>

      {/* Announcement for First Issue */}
      <section className="py-10 bg-gradient-to-r from-[#f0f9f1] to-[#e6f7e8]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#8FD694]">
            <h2 className="text-3xl font-bold mb-4 text-[#171717]">
              {comingSoonTitle}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {comingSoonContent}
            </p>
            <h3 className="text-xl font-semibold mb-3 text-[#8FD694]">
              {contributionTitle}
            </h3>
            <p className="text-gray-700 mb-6">
              {contributionContent}
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="/contact" className="bg-[#8FD694] hover:bg-[#7ac683] text-[#171717] px-6 py-3 rounded inline-flex items-center transition-colors font-medium">
                {language === 'fr' ? 'Contactez-nous' : 'اتصل بنا'}
              </a>
              <div className="flex space-x-4 items-center">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#8FD694] hover:text-[#7ac683]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#8FD694] hover:text-[#7ac683]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#8FD694] hover:text-[#7ac683]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Publications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`mb-12 ${textAlign}`}>
            <h2 className="text-4xl font-bold text-[#171717] mb-6">
              {recentPublicationsTitle}
            </h2>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-end">
              <p className="text-lg text-gray-700 max-w-2xl mb-6 md:mb-0">
                {recentPublicationsContent}
              </p>
              
              {/* Search input */}
              <div className="relative w-full md:w-72">
                <input
                  type="text"
                  placeholder={language === 'fr' ? 'Rechercher...' : 'بحث...'}
                  className={`w-full p-3 pl-10 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#8FD694] focus:border-transparent outline-none ${textAlign}`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 absolute top-3.5 ${language === 'ar' ? 'right-3.5' : 'left-3.5'} text-gray-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Category buttons */}
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            {publicationCategories.map((category) => (
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
          
          {/* Publications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPublications.filter(p => !p.featured).map(publication => (
              <div key={publication.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="relative h-52 bg-gradient-to-r from-[#171717] to-[#333333]">
                  {/* Publication type marker */}
                  <div className="absolute top-3 left-3 bg-[#8FD694] text-[#171717] px-4 py-1 rounded text-sm font-medium">
                    {publication.type[language]}
                  </div>
                  
                  {/* FPRA logo overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <div className="text-white text-2xl font-bold">
                      FPRA
                    </div>
                  </div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                    <h3 className="text-lg font-bold leading-snug">
                      {publication.title[language]}
                    </h3>
                    <div className="flex items-center text-sm mt-2">
                      <FaRegCalendarAlt className="mr-2" />
                      <span>{publication.date[language]}</span>
                      <span className="mx-3">|</span>
                      <span>{publication.pages} pages</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <p className={`text-gray-600 mb-4 line-clamp-3 ${textAlign}`}>
                    {publication.excerpt[language]}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <Link 
                      href={publication.slug}
                      className="text-[#8FD694] hover:text-[#7ac683] font-medium flex items-center"
                    >
                      <FaEye className="mr-2" />
                      {language === 'fr' ? 'Lire' : 'قراءة'}
                    </Link>
                    
                    <Link 
                      href={publication.pdfUrl}
                      className="text-gray-500 hover:text-gray-700 flex items-center"
                      download
                    >
                      <FaDownload className="mr-2" />
                      PDF
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-12">
            <Link 
              href="/review/archives"
              className="bg-white border border-[#8FD694] text-[#8FD694] hover:bg-[#f0f9f1] px-8 py-3 rounded-full inline-flex items-center transition-colors"
            >
              {language === 'fr' ? 'VOIR TOUTES LES PUBLICATIONS' : 'عرض جميع المنشورات'}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Media Library Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`mb-12 ${textAlign}`}>
            <h2 className="text-4xl font-bold text-[#171717] mb-6">
              {mediaLibraryTitle}
            </h2>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-end">
              <p className="text-lg text-gray-700 max-w-2xl mb-6 md:mb-0">
                {mediaLibraryContent}
              </p>
            </div>
          </div>
          
          {/* Media type buttons */}
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            {mediaTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveMediaType(type.id)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeMediaType === type.id
                    ? 'bg-[#8FD694] text-[#171717]'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {language === 'fr' ? type.fr : type.ar}
              </button>
            ))}
          </div>
          
          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia.map(media => (
              <div key={media.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                <div className="relative h-52 bg-gradient-to-r from-[#171717] to-[#333333] flex items-center justify-center">
                  {/* Media type icon */}
                  {media.type.id === 'videos' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#8FD694]/80 text-[#171717] rounded-full p-4">
                        <FaPlay size={24} />
                  </div>
                    </div>
                  )}
                  
                  {media.type.id === 'podcasts' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#8FD694]/80 text-[#171717] rounded-full p-4">
                        <FaHeadphones size={24} />
                      </div>
                    </div>
                  )}
                  
                  {media.type.id === 'infographies' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#8FD694]/80 text-[#171717] rounded-full p-4">
                        <FaRegFileAlt size={24} />
                      </div>
                    </div>
                  )}
                  
                  {/* Media type marker */}
                  <div className="absolute top-3 left-3 bg-[#8FD694] text-[#171717] px-4 py-1 rounded text-sm font-medium">
                    {media.type[language]}
                  </div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                    <h3 className="text-lg font-bold leading-snug">
                      {media.title[language]}
                    </h3>
                    <div className="flex items-center text-sm mt-2">
                      <FaRegCalendarAlt className="mr-2" />
                      <span>{media.date[language]}</span>
                      {media.duration && (
                        <>
                      <span className="mx-3">|</span>
                      <span>{media.duration}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <p className={`text-gray-600 mb-4 line-clamp-3 ${textAlign}`}>
                    {media.excerpt[language]}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <Link 
                      href={media.slug}
                      className="text-[#8FD694] hover:text-[#7ac683] font-medium flex items-center"
                    >
                      <FaEye className="mr-2" />
                      {language === 'fr' ? 'Voir' : 'مشاهدة'}
                    </Link>
                    
                    <div className="flex items-center text-gray-500 text-sm">
                      {media.views && (
                        <div className="flex items-center mr-4">
                          <FaEye className="mr-1" />
                          <span>{media.views}</span>
                        </div>
                      )}
                      {media.listens && (
                        <div className="flex items-center mr-4">
                          <FaHeadphones className="mr-1" />
                          <span>{media.listens}</span>
                        </div>
                      )}
                      {media.downloads && (
                        <div className="flex items-center">
                          <FaDownload className="mr-1" />
                          <span>{media.downloads}</span>
                    </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-12">
            <Link 
              href="/review/media"
              className="bg-white border border-[#8FD694] text-[#8FD694] hover:bg-[#f0f9f1] px-8 py-3 rounded-full inline-flex items-center transition-colors"
            >
              {language === 'fr' ? 'VOIR TOUTE LA MÉDIATHÈQUE' : 'عرض كل مكتبة الوسائط'}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Publication */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className={`lg:col-span-2 ${textAlign}`}>
              <h2 className="text-3xl font-bold text-[#171717] mb-4">
                {featuredTitle}
            </h2>
              <p className="text-gray-600 mb-6">
                {featuredContent}
              </p>
              
              {publications.filter(p => p.featured).map(publication => (
                <div key={publication.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <span className="bg-[#8FD694] text-[#171717] px-3 py-1 rounded text-sm font-medium">
                      {publication.category[language]}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {publication.title[language]}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <FaRegCalendarAlt className="mr-2" />
                    <span>{publication.date[language]}</span>
                    <span className="mx-3">|</span>
                    <span>{publication.pages} pages</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {publication.excerpt[language]}
                  </p>
                  <div className="flex gap-4">
                    <Link 
                      href={publication.slug}
                      className="bg-[#8FD694] hover:bg-[#7ac683] text-[#171717] px-6 py-2 rounded inline-flex items-center transition-colors font-medium"
                    >
                      <FaEye className="mr-2" />
                      {language === 'fr' ? 'Lire' : 'قراءة'}
                    </Link>
                    <Link 
                      href={publication.pdfUrl}
                      className="bg-white border border-[#8FD694] text-[#8FD694] hover:bg-[#f0f9f1] px-6 py-2 rounded inline-flex items-center transition-colors"
                      download
                    >
                      <FaDownload className="mr-2" />
                      PDF
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-3 relative">
              <div className="bg-[#171717] h-full rounded-lg overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-10"></div>
                <div className="relative z-10 p-8 text-center">
                  <div className="inline-block bg-[#8FD694] text-[#171717] px-4 py-2 rounded-full text-sm font-bold mb-6">
                    {language === 'fr' ? 'RAPPORT ANNUEL 2023' : 'التقرير السنوي 2023'}
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    {language === 'fr' 
                      ? "L'état des droits humains en Algérie" 
                      : "حالة حقوق الإنسان في الجزائر"}
                  </h2>
                  <p className="text-white/80 mb-8 max-w-lg mx-auto">
                    {language === 'fr' 
                      ? "Une analyse complète des avancées et défis en matière de droits humains en Algérie durant l'année 2023." 
                      : "تحليل شامل للتقدم والتحديات في مجال حقوق الإنسان في الجزائر خلال عام 2023."}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      href="/review/rapport-annuel-2023"
                      className="bg-[#8FD694] hover:bg-[#7ac683] text-[#171717] px-8 py-3 rounded-full inline-flex items-center transition-colors font-medium"
                    >
                      <FaEye className="mr-2" />
                      {language === 'fr' ? 'Lire le rapport' : 'قراءة التقرير'}
                    </Link>
                    <Link 
                      href="/documents/rapport-annuel-2023.pdf"
                      className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full inline-flex items-center transition-colors"
                      download
                    >
                      <FaDownload className="mr-2" />
                      {language === 'fr' ? 'Télécharger (PDF)' : 'تحميل (PDF)'}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 