'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaDownload, FaRegCalendarAlt, FaSearch, FaExternalLinkAlt, FaBook, FaFileAlt, FaVideo, FaTools, FaGavel } from 'react-icons/fa';
import PageHeader from '@/components/PageHeader';
import { getPageContent, PageContent } from '@/lib/database';

type Language = 'fr' | 'ar';

interface TranslatedText {
  fr: string;
  ar: string;
}

interface ResourceType {
  id: string;
  fr: string;
  ar: string;
  icon: React.ReactNode;
}

interface Resource {
  id: number;
  title: TranslatedText;
  description: TranslatedText;
  type: string;
  format: string;
  thumbnail?: string;
  downloadUrl: string;
  date: TranslatedText;
  fileSize?: string;
  featured?: boolean;
}

export default function ResourcesPage() {
  const { language } = useLanguage();
  const [activeType, setActiveType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  
  const loadContent = () => {
    const content = getPageContent('resources');
    if (content) {
      setPageContent(content);
    }
  };

  useEffect(() => {
    loadContent(); // Initial load

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'page_resources') {
        loadContent(); // Reload content if 'page_resources' changes
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Get page title from content or use default
  const pageTitle = pageContent?.title?.[language as 'fr' | 'ar'] || 
    (language === 'fr' ? 'Ressources' : 'الموارد');
  
  // Get page subtitle or use default
  const pageSubtitle = pageContent?.sections?.find(s => s.id === 'intro')?.content?.[language as 'fr' | 'ar'] || 
    (language === 'fr' 
      ? 'Accédez à notre bibliothèque de ressources pour promouvoir et défendre les droits fondamentaux' 
      : 'الوصول إلى مكتبة مواردنا لتعزيز والدفاع عن الحقوق الأساسية');
  
  // Get text aligned correctly based on language
  const textAlign = language === 'ar' ? 'text-right' : 'text-left';
  const rtlClass = language === 'ar' ? 'rtl' : '';

  // Resource types with icons
  const resourceTypes: ResourceType[] = [
    { id: 'all', fr: 'Toutes les ressources', ar: 'جميع الموارد', icon: <FaSearch className="mr-2" /> },
    { id: 'guides', fr: 'Guides pratiques', ar: 'أدلة عملية', icon: <FaBook className="mr-2" /> },
    { id: 'toolkits', fr: 'Boîtes à outils', ar: 'مجموعات أدوات', icon: <FaTools className="mr-2" /> },
    { id: 'legal', fr: 'Textes juridiques', ar: 'نصوص قانونية', icon: <FaGavel className="mr-2" /> },
    { id: 'training', fr: 'Matériel de formation', ar: 'مواد تدريبية', icon: <FaFileAlt className="mr-2" /> },
    { id: 'multimedia', fr: 'Ressources multimédias', ar: 'موارد متعددة الوسائط', icon: <FaVideo className="mr-2" /> },
  ];

  // Sample resources data
  const resources: Resource[] = [
    {
      id: 1,
      title: {
        fr: "Guide des droits fondamentaux en Algérie",
        ar: "دليل الحقوق الأساسية في الجزائر"
      },
      description: {
        fr: "Un guide complet sur les droits fondamentaux garantis par la Constitution algérienne et les conventions internationales ratifiées par l'Algérie. Ce document présente les mécanismes de protection et les recours disponibles pour les citoyens.",
        ar: "دليل شامل عن الحقوق الأساسية التي يضمنها الدستور الجزائري والاتفاقيات الدولية التي صادقت عليها الجزائر. تقدم هذه الوثيقة آليات الحماية وسبل الانتصاف المتاحة للمواطنين."
      },
      type: "guides",
      format: "PDF",
      thumbnail: "/images/resources/fundamental-rights.jpg",
      downloadUrl: "/documents/guide-droits-fondamentaux.pdf",
      date: {
        fr: "Janvier 2024",
        ar: "يناير 2024"
      },
      fileSize: "4.2 MB",
      featured: true
    },
    {
      id: 2,
      title: {
        fr: "Boîte à outils pour défenseurs des droits humains",
        ar: "مجموعة أدوات للمدافعين عن حقوق الإنسان"
      },
      description: {
        fr: "Ressources pratiques pour les défenseurs des droits humains, incluant des stratégies de plaidoyer, des modèles de documentation des violations, et des conseils de sécurité numérique.",
        ar: "موارد عملية للمدافعين عن حقوق الإنسان، بما في ذلك استراتيجيات المناصرة، ونماذج لتوثيق الانتهاكات، ونصائح حول الأمن الرقمي."
      },
      type: "toolkits",
      format: "ZIP",
      thumbnail: "/images/resources/hr-defenders.jpg",
      downloadUrl: "/documents/toolkit-defenseurs-droits.zip",
      date: {
        fr: "Novembre 2023",
        ar: "نوفمبر 2023"
      },
      fileSize: "12.8 MB"
    },
    {
      id: 3,
      title: {
        fr: "Recueil des textes juridiques sur la liberté d'association",
        ar: "مجموعة النصوص القانونية حول حرية تكوين الجمعيات"
      },
      description: {
        fr: "Compilation des lois, décrets et règlements relatifs à la liberté d'association en Algérie, avec annotations et commentaires juridiques.",
        ar: "تجميع للقوانين والمراسيم واللوائح المتعلقة بحرية تكوين الجمعيات في الجزائر، مع تعليقات وشروحات قانونية."
      },
      type: "legal",
      format: "PDF",
      thumbnail: "/images/resources/legal-texts.jpg",
      downloadUrl: "/documents/recueil-juridique-associations.pdf",
      date: {
        fr: "Septembre 2023",
        ar: "سبتمبر 2023"
      },
      fileSize: "3.5 MB"
    },
    {
      id: 4,
      title: {
        fr: "Manuel de formation sur les droits des femmes",
        ar: "دليل تدريبي حول حقوق المرأة"
      },
      description: {
        fr: "Manuel destiné aux formateurs et éducateurs pour animer des sessions de sensibilisation sur les droits des femmes, incluant des activités interactives et études de cas.",
        ar: "دليل موجه للمدربين والمعلمين لتنظيم جلسات توعية حول حقوق المرأة، بما في ذلك أنشطة تفاعلية ودراسات حالة."
      },
      type: "training",
      format: "PDF",
      thumbnail: "/images/resources/women-rights.jpg",
      downloadUrl: "/documents/manuel-formation-droits-femmes.pdf",
      date: {
        fr: "Août 2023",
        ar: "أغسطس 2023"
      },
      fileSize: "8.7 MB"
    },
    {
      id: 5,
      title: {
        fr: "Série de webinaires sur l'accès à la justice",
        ar: "سلسلة ندوات عبر الإنترنت حول الوصول إلى العدالة"
      },
      description: {
        fr: "Enregistrements de webinaires animés par des experts juridiques sur les différentes voies d'accès à la justice pour les populations vulnérables.",
        ar: "تسجيلات لندوات عبر الإنترنت يقدمها خبراء قانونيون حول مختلف سبل الوصول إلى العدالة للفئات الضعيفة."
      },
      type: "multimedia",
      format: "MP4",
      thumbnail: "/images/resources/webinars.jpg",
      downloadUrl: "/documents/webinaires-acces-justice.zip",
      date: {
        fr: "Juillet 2023",
        ar: "يوليو 2023"
      },
      fileSize: "450 MB"
    },
    {
      id: 6,
      title: {
        fr: "Guide de plaidoyer pour la société civile",
        ar: "دليل المناصرة لمنظمات المجتمع المدني"
      },
      description: {
        fr: "Méthodologies et stratégies de plaidoyer adaptées au contexte algérien pour les organisations de la société civile travaillant sur les questions de droits.",
        ar: "منهجيات واستراتيجيات المناصرة المكيفة مع السياق الجزائري لمنظمات المجتمع المدني العاملة في قضايا الحقوق."
      },
      type: "guides",
      format: "PDF",
      thumbnail: "/images/resources/advocacy.jpg",
      downloadUrl: "/documents/guide-plaidoyer.pdf",
      date: {
        fr: "Juin 2023",
        ar: "يونيو 2023"
      },
      fileSize: "5.1 MB"
    }
  ];

  // Filter resources based on type and search query
  const filteredResources = resources.filter(resource => {
    const matchesType = activeType === 'all' || resource.type === activeType;
    const matchesSearch = searchQuery === '' || 
      resource.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description[language].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

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
              {language === 'fr' ? 'Ressources' : 'الموارد'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`mb-12 ${textAlign}`}>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {language === 'fr' ? 'Bibliothèque de ressources' : 'مكتبة الموارد'}
            </h2>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-end">
              <p className="text-lg text-gray-700 max-w-2xl mb-6 md:mb-0">
                {language === 'fr' 
                  ? "Explorez notre collection de guides pratiques, boîtes à outils, textes juridiques et matériels de formation pour soutenir votre travail sur les droits humains." 
                  : "استكشف مجموعتنا من الأدلة العملية ومجموعات الأدوات والنصوص القانونية ومواد التدريب لدعم عملك في مجال حقوق الإنسان."}
              </p>
              
              {/* Search input */}
              <div className="relative w-full md:w-72">
                <input
                  type="text"
                  placeholder={language === 'fr' ? 'Rechercher...' : 'بحث...'}
                  className={`w-full p-3 pl-10 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#8FD694] focus:border-transparent outline-none ${textAlign}`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                />
                <div className="absolute left-3 top-3 text-gray-400">
                  <FaSearch />
                </div>
              </div>
            </div>
          </div>
          
          {/* Resource Types */}
          <div className="bg-white rounded-lg shadow-sm mb-12">
            <div className="flex flex-wrap">
            {resourceTypes.map((type) => (
              <button
                key={type.id}
                  className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 ${
                  activeType === type.id
                    ? 'border-[#8FD694] text-[#171717]' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                  onClick={() => setActiveType(type.id)}
              >
                {type.icon}
                  <span className="ml-2">{language === 'fr' ? type.fr : type.ar}</span>
              </button>
            ))}
            </div>
          </div>
          
          {/* Featured Resources */}
          {activeType === 'all' && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {language === 'fr' ? 'Ressources en vedette' : 'موارد مميزة'}
              </h3>
              <div className="bg-gradient-to-r from-[#171717] to-[#8FD694] p-1 rounded-lg">
                <div className="bg-white p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#8FD694]/5 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <FaBook className="text-[#8FD694] text-xl" />
                        <h4 className="text-xl font-bold ml-2">
                          {language === 'fr' 
                            ? "Guide des droits fondamentaux en Algérie" 
                            : "دليل الحقوق الأساسية في الجزائر"}
                        </h4>
                      </div>
                      <p className="text-gray-700 mb-4">
                        {language === 'fr'
                          ? "Un guide complet sur les droits fondamentaux garantis par la Constitution algérienne et les conventions internationales ratifiées par l'Algérie."
                          : "دليل شامل عن الحقوق الأساسية التي يضمنها الدستور الجزائري والاتفاقيات الدولية التي صادقت عليها الجزائر."}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 flex items-center">
                          <FaRegCalendarAlt className="mr-1" />
                          {language === 'fr' ? "Janvier 2024" : "يناير 2024"}
                        </span>
                        <a 
                          href="/documents/guide-droits-fondamentaux.pdf" 
                          className="inline-flex items-center text-[#171717] font-medium hover:underline"
                        >
                          <FaDownload className="mr-1" />
                          {language === 'fr' ? "Télécharger" : "تحميل"}
                        </a>
                      </div>
                    </div>
                    
                    <div className="bg-[#171717]/5 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <FaTools className="text-[#171717] text-xl" />
                        <h4 className="text-xl font-bold ml-2">
                          {language === 'fr' 
                            ? "Boîte à outils pour défenseurs des droits humains" 
                            : "مجموعة أدوات للمدافعين عن حقوق الإنسان"}
                        </h4>
                      </div>
                      <p className="text-gray-700 mb-4">
                        {language === 'fr'
                          ? "Ressources pratiques pour les défenseurs des droits humains, incluant des stratégies de plaidoyer et des modèles de documentation."
                          : "موارد عملية للمدافعين عن حقوق الإنسان، بما في ذلك استراتيجيات المناصرة ونماذج التوثيق."}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 flex items-center">
                          <FaRegCalendarAlt className="mr-1" />
                          {language === 'fr' ? "Novembre 2023" : "نوفمبر 2023"}
                        </span>
                        <a 
                          href="/documents/toolkit-defenseurs-droits.zip" 
                          className="inline-flex items-center text-[#171717] font-medium hover:underline"
                        >
                          <FaDownload className="mr-1" />
                          {language === 'fr' ? "Télécharger" : "تحميل"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* All Resources */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map(resource => (
              <div key={resource.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-[#171717]/80 to-[#8FD694]/60 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {resource.type === 'guides' && <FaBook className="text-white text-4xl" />}
                    {resource.type === 'toolkits' && <FaTools className="text-white text-4xl" />}
                    {resource.type === 'legal' && <FaGavel className="text-white text-4xl" />}
                    {resource.type === 'training' && <FaFileAlt className="text-white text-4xl" />}
                    {resource.type === 'multimedia' && <FaVideo className="text-white text-4xl" />}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-[#8FD694]/10 text-[#171717] px-3 py-1 text-xs font-semibold rounded-full">
                      {resource.format}
                    </span>
                    <span className="text-xs text-gray-500">
                      {resource.fileSize}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{resource.title[language]}</h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {resource.description[language]}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-gray-500 flex items-center">
                      <FaRegCalendarAlt className="mr-1" />
                      {resource.date[language]}
                    </span>
                    <a 
                      href={resource.downloadUrl}
                      className="inline-flex items-center text-[#8FD694] font-medium hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDownload className="mr-1" />
                      {language === 'fr' ? "Télécharger" : "تحميل"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <p className="text-gray-500">
                {language === 'fr' 
                  ? 'Aucune ressource ne correspond à vos critères de recherche.' 
                  : 'لا توجد موارد تطابق معايير البحث الخاصة بك.'}
              </p>
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
              <button className={`px-3 py-2 ${language === 'ar' ? 'rounded-l-md' : 'rounded-r-md'} border border-gray-300 bg-white text-gray-700 hover:bg-gray-50`}>
                {language === 'fr' ? 'Suivant' : 'التالي'}
              </button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
} 