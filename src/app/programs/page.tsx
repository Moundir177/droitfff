'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaUsers, FaBullhorn, FaBook, FaChalkboardTeacher, FaHandsHelping, FaUniversity } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { getPageContent, PageContent } from '@/lib/database';

const programs = [
  {
    id: 'training',
    titleKey: 'programs.training',
    descriptionFr: 'Programmes de formation complets pour renforcer les organisations de la société civile et les militants dans les principes des droits humains, le plaidoyer et la documentation.',
    descriptionAr: 'برامج تدريبية شاملة لتعزيز منظمات المجتمع المدني والناشطين في مبادئ حقوق الإنسان والمناصرة والتوثيق.',
    icon: <FaChalkboardTeacher className="text-white" />,
    color: 'bg-[#8FD694]',
    featuresFr: [
      'Ateliers de documentation des droits humains',
      'Développement de stratégies de plaidoyer',
      'Sécurité numérique pour les militants',
      'Formation sur le cadre juridique',
      'Gestion de projets pour les ONG'
    ],
    featuresAr: [
      'ورش عمل توثيق حقوق الإنسان',
      'تطوير استراتيجية المناصرة',
      'الأمن الرقمي للناشطين',
      'التدريب على الإطار القانوني',
      'إدارة المشاريع للمنظمات غير الحكومية'
    ]
  },
  {
    id: 'advocacy',
    titleKey: 'programs.advocacy',
    descriptionFr: 'Campagnes et initiatives pour promouvoir la sensibilisation aux droits humains, plaider en faveur de réformes juridiques et impliquer le public dans la défense des droits.',
    descriptionAr: 'حملات ومبادرات لتعزيز الوعي بحقوق الإنسان، والدعوة إلى إصلاحات قانونية، وإشراك الجمهور في الدفاع عن الحقوق.',
    icon: <FaBullhorn className="text-white" />,
    color: 'bg-[#171717]',
    featuresFr: [
      'Campagnes de sensibilisation du public',
      'Initiatives de réforme des politiques',
      'Stratégies d\'engagement médiatique',
      'Dialogues communautaires',
      'Publications de sensibilisation aux droits'
    ],
    featuresAr: [
      'حملات التوعية العامة',
      'مبادرات إصلاح السياسات',
      'استراتيجيات المشاركة الإعلامية',
      'حوارات مجتمعية',
      'منشورات التوعية بالحقوق'
    ]
  },
  {
    id: 'research',
    titleKey: 'programs.research',
    descriptionFr: 'Documentation systématique des situations des droits humains et recherche sur les questions liées aux droits pour informer le plaidoyer et le développement des politiques.',
    descriptionAr: 'التوثيق المنهجي لأوضاع حقوق الإنسان والبحث في القضايا المتعلقة بالحقوق لإثراء المناصرة وتطوير السياسات.',
    icon: <FaBook className="text-white" />,
    color: 'bg-[#8FD694]',
    featuresFr: [
      'Surveillance des droits humains',
      'Études de recherche thématiques',
      'Documentation des meilleures pratiques',
      'Évaluation d\'impact',
      'Analyse des politiques'
    ],
    featuresAr: [
      'رصد حقوق الإنسان',
      'دراسات بحثية موضوعية',
      'توثيق أفضل الممارسات',
      'تقييم الأثر',
      'تحليل السياسات'
    ]
  }
];

const partners = [
  {
    nameFr: 'Droits de l\'Homme des Nations Unies',
    nameAr: 'حقوق الإنسان بالأمم المتحدة',
    typeFr: 'Organisation Internationale',
    typeAr: 'منظمة دولية'
  },
  {
    nameFr: 'Commission Nationale des Droits de l\'Homme',
    nameAr: 'اللجنة الوطنية لحقوق الإنسان',
    typeFr: 'Institution Gouvernementale',
    typeAr: 'مؤسسة حكومية'
  },
  {
    nameFr: 'Réseau de la Société Civile Algérienne',
    nameAr: 'شبكة المجتمع المدني الجزائري',
    typeFr: 'Réseau Local',
    typeAr: 'شبكة محلية'
  },
  {
    nameFr: 'Groupe des Droits MENA',
    nameAr: 'مجموعة حقوق الشرق الأوسط وشمال أفريقيا',
    typeFr: 'ONG Régionale',
    typeAr: 'منظمة غير حكومية إقليمية'
  },
  {
    nameFr: 'Faculté de Droit de l\'Université d\'Alger',
    nameAr: 'كلية الحقوق بجامعة الجزائر',
    typeFr: 'Institution Académique',
    typeAr: 'مؤسسة أكاديمية'
  },
  {
    nameFr: 'Fondation des Droits Numériques',
    nameAr: 'مؤسسة الحقوق الرقمية',
    typeFr: 'ONG Internationale',
    typeAr: 'منظمة غير حكومية دولية'
  }
];

export default function Programs() {
  const { language, t } = useLanguage();
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  
  const loadContent = () => {
    const content = getPageContent('programs');
    if (content) {
      setPageContent(content);
    }
  };

  useEffect(() => {
    loadContent(); // Initial load

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'page_programs') {
        loadContent(); // Reload content if 'page_programs' changes
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Get page title from content or use default
  const pageTitle = pageContent?.title?.[language as 'fr' | 'ar'] || 
    (language === 'fr' ? 'Nos Programmes' : 'برامجنا');
  
  // Get page subtitle or use default
  const pageSubtitle = pageContent?.sections?.find(s => s.id === 'intro')?.content?.[language as 'fr' | 'ar'] || 
    (language === 'fr' 
      ? 'À travers nos divers programmes, nous travaillons à promouvoir et à protéger les droits humains, à renforcer les capacités de la société civile et à créer une culture de sensibilisation et de défense des droits.' 
      : 'من خلال برامجنا المتنوعة، نعمل على تعزيز وحماية حقوق الإنسان، وبناء قدرات المجتمع المدني، وخلق ثقافة الوعي والدفاع عن الحقوق.');
  
  return (
    <div>
      {/* Page Header */}
      <PageHeader 
        title={pageTitle}
        subtitle={pageSubtitle}
        language={language as 'fr' | 'ar'}
      />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`${program.color} p-6 flex items-center`}>
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    {program.icon}
                  </div>
                  <h2 className="text-xl font-bold text-white">{t(program.titleKey)}</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    {language === 'fr' ? program.descriptionFr : program.descriptionAr}
                  </p>
                  <h3 className="font-bold text-gray-900 mb-3">{t('key.components')}</h3>
                  <ul className="space-y-2 mb-6">
                    {(language === 'fr' ? program.featuresFr : program.featuresAr).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`text-[#8FD694] mr-2`}>•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/programs/${program.id}`} 
                    className={`inline-block ${program.color} hover:opacity-90 text-white font-bold py-2 px-4 rounded-lg transition duration-300`}
                  >
                    {t('learn.more')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('program.impact')}</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-[#8FD694] flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">760+</h3>
                <p className="text-gray-700">{t('individuals.trained')}</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-[#171717] flex items-center justify-center mx-auto mb-4">
                  <FaHandsHelping className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">25+</h3>
                <p className="text-gray-700">{t('partner.organizations')}</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-[#8FD694] flex items-center justify-center mx-auto mb-4">
                  <FaUniversity className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">38+</h3>
                <p className="text-gray-700">{t('training.workshops')}</p>
              </div>
            </div>
            
            <p className="text-center text-gray-700">
              {t('programs.reached')}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('our.implementation')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('participatory.methodology')}</h3>
                <p className="text-gray-700 mb-6">
                  {t('participatory.description')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#8FD694] mr-2">•</span>
                    <span className="text-gray-700">{t('needs.assessments')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8FD694] mr-2">•</span>
                    <span className="text-gray-700">{t('collaborative.design')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8FD694] mr-2">•</span>
                    <span className="text-gray-700">{t('feedback.mechanisms')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8FD694] mr-2">•</span>
                    <span className="text-gray-700">{t('adaptive.strategies')}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('results.based')}</h3>
                <p className="text-gray-700 mb-6">
                  {t('results.description')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#171717] mr-2">•</span>
                    <span className="text-gray-700">{t('clear.objectives')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#171717] mr-2">•</span>
                    <span className="text-gray-700">{t('monitoring.evaluation')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#171717] mr-2">•</span>
                    <span className="text-gray-700">{t('lessons.learned')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#171717] mr-2">•</span>
                    <span className="text-gray-700">{t('improvement.processes')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('our.partners')}</h2>
            <p className="text-center text-gray-700 mb-8">
              {t('partners.collaborate')}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 text-center hover:border-[#8FD694] transition-colors">
                  <h3 className="font-bold text-gray-900 mb-1">{language === 'fr' ? partner.nameFr : partner.nameAr}</h3>
                  <p className="text-sm text-gray-600">{language === 'fr' ? partner.typeFr : partner.typeAr}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 