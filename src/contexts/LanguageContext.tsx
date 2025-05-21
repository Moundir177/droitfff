'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Default context value
const defaultContext: LanguageContextType = {
  language: 'fr',
  setLanguage: () => {},
  t: (key: string) => key,
};

// Create context
export const LanguageContext = createContext<LanguageContextType>(defaultContext);

// Translations
const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'home': 'Accueil',
    'about': 'À Propos',
    'programs': 'Programmes',
    'news': 'Actualités',
    'review': 'Revue',
    'resources': 'Ressources',
    'testimonials': 'Témoignages',
    'gallery': 'Galerie',
    'contact': 'Contact',
    
    // Common Sections
    'learn.more': 'En Savoir Plus',
    'read.more': 'Lire Plus',
    'view.all': 'Voir Tout',
    'back.to': 'Retour à',
    'send.message': 'Envoyer Message',
    
    // Home page
    'hero.title': 'Fondation pour la Promotion des Droits',
    'hero.subtitle': 'Défendre les droits et renforcer les capacités de la société civile',
    'hero.cta': 'Découvrir Nos Programmes',
    
    'stats.trainings': 'Formations',
    'stats.beneficiaries': 'Bénéficiaires',
    'stats.partners': 'Partenaires',
    'our.impact': 'Notre Impact',
    
    'mission.title': 'Notre Mission',
    'mission.description': 'Promouvoir et défendre des droits égaux et renforcer les capacités des acteurs de la société civile.',
    
    'programs.title': 'Nos Programmes',
    'programs.subtitle': 'À travers nos différents programmes, nous travaillons à promouvoir et protéger les droits humains.',
    
    'news.title': 'Dernières Actualités',
    'news.subtitle': 'Découvrez nos dernières activités et actualités',
    
    // About page
    'about.title': 'À Propos de Nous',
    'about.subtitle': 'La Fondation pour la Promotion des Droits en Algérie est dédiée au renforcement des droits égaux et au développement des capacités des acteurs de la société civile.',
    
    'about.mission': 'Notre Mission',
    'about.vision': 'Notre Vision',
    'about.team': 'Notre Équipe',
    'about.history': 'Notre Histoire',
    
    // Contact page
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Nous accueillons vos questions et commentaires. N\'hésitez pas à nous contacter.',
    
    'contact.office': 'Notre Bureau',
    'contact.phone': 'Téléphone & Fax',
    'contact.email': 'Email & Réseaux',
    
    'contact.form.name': 'Votre Nom *',
    'contact.form.email': 'Votre Email *',
    'contact.form.subject': 'Sujet *',
    'contact.form.message': 'Votre Message *',
    'contact.form.submit': 'Envoyer Message',
    
    'contact.hours': 'Heures d\'Ouverture',
    'contact.faq': 'Questions Fréquentes',
    
    // Programs pages
    'programs.training': 'Formation & Renforcement',
    'programs.advocacy': 'Plaidoyer & Sensibilisation',
    'programs.research': 'Recherche & Documentation',
    'program.impact': 'Impact du Programme',
    'our.implementation': 'Notre Approche de Mise en Œuvre',
    'our.partners': 'Nos Partenaires',
    'participatory.methodology': 'Méthodologie Participative',
    'results.based': 'Gestion Axée sur les Résultats',
    'partners.collaborate': 'Nous collaborons avec divers partenaires pour améliorer l\'impact et la portée de nos programmes.',
    'individuals.trained': 'Personnes formées par nos programmes de renforcement des capacités',
    'partner.organizations': 'Organisations partenaires collaborant à la mise en œuvre du programme',
    'training.workshops': 'Ateliers de formation organisés dans différentes régions',
    'programs.reached': 'Nos programmes ont atteint diverses régions d\'Algérie, permettant aux individus et aux organisations de devenir des défenseurs efficaces des droits humains et des valeurs démocratiques.',
    'participatory.description': 'Nous utilisons des approches participatives qui impliquent les bénéficiaires dans la conception et la mise en œuvre des programmes, assurant la pertinence, l\'appropriation et la durabilité. Nos méthodes comprennent:',
    'needs.assessments': 'Évaluations des besoins avec les groupes cibles',
    'collaborative.design': 'Conception collaborative des programmes',
    'feedback.mechanisms': 'Mécanismes de retour d\'information réguliers',
    'adaptive.strategies': 'Stratégies de mise en œuvre adaptatives',
    'results.description': 'Nous mettons en œuvre un cadre de gestion axée sur les résultats pour assurer l\'efficacité et l\'impact des programmes. Notre approche comprend:',
    'clear.objectives': 'Objectifs clairs et indicateurs mesurables',
    'monitoring.evaluation': 'Suivi et évaluation systématiques',
    'lessons.learned': 'Documentation des leçons apprises',
    'improvement.processes': 'Processus d\'amélioration continue',
    'key.components': 'Composantes Clés:',
  },
  ar: {
    // Navigation
    'home': 'الرئيسية',
    'about': 'من نحن',
    'programs': 'البرامج',
    'news': 'الأخبار',
    'review': 'مراجعة',
    'resources': 'الموارد',
    'testimonials': 'الشهادات',
    'gallery': 'معرض الصور',
    'contact': 'اتصل بنا',
    
    // Common Sections
    'learn.more': 'معرفة المزيد',
    'read.more': 'قراءة المزيد',
    'view.all': 'عرض الكل',
    'back.to': 'العودة إلى',
    'send.message': 'إرسال رسالة',
    
    // Home page
    'hero.title': 'مؤسسة تعزيز الحقوق',
    'hero.subtitle': 'الدفاع عن الحقوق وتعزيز قدرات المجتمع المدني',
    'hero.cta': 'اكتشف برامجنا',
    
    'stats.trainings': 'التدريبات',
    'stats.beneficiaries': 'المستفيدين',
    'stats.partners': 'الشركاء',
    'our.impact': 'تأثيرنا',
    
    'mission.title': 'مهمتنا',
    'mission.description': 'تعزيز والدفاع عن الحقوق المتساوية وبناء قدرات الفاعلين في المجتمع المدني.',
    
    'programs.title': 'برامجنا',
    'programs.subtitle': 'من خلال برامجنا المتنوعة، نعمل على تعزيز وحماية حقوق الإنسان.',
    
    'news.title': 'آخر الأخبار',
    'news.subtitle': 'اكتشف آخر أنشطتنا وأخبارنا',
    
    // About page
    'about.title': 'من نحن',
    'about.subtitle': 'مؤسسة تعزيز الحقوق في الجزائر مكرسة لتعزيز الحقوق المتساوية وبناء قدرات الفاعلين في المجتمع المدني.',
    
    'about.mission': 'مهمتنا',
    'about.vision': 'رؤيتنا',
    'about.team': 'فريقنا',
    'about.history': 'تاريخنا',
    
    // Contact page
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'نرحب باستفساراتكم وملاحظاتكم. لا تترددوا في الاتصال بنا.',
    
    'contact.office': 'مكتبنا',
    'contact.phone': 'الهاتف والفاكس',
    'contact.email': 'البريد الإلكتروني والشبكات',
    
    'contact.form.name': 'اسمك *',
    'contact.form.email': 'بريدك الإلكتروني *',
    'contact.form.subject': 'الموضوع *',
    'contact.form.message': 'رسالتك *',
    'contact.form.submit': 'إرسال الرسالة',
    
    'contact.hours': 'ساعات العمل',
    'contact.faq': 'الأسئلة الشائعة',
    
    // Programs pages
    'programs.training': 'التدريب وبناء القدرات',
    'programs.advocacy': 'المناصرة والتوعية',
    'programs.research': 'البحث والتوثيق',
    'program.impact': 'تأثير البرنامج',
    'our.implementation': 'نهج التنفيذ لدينا',
    'our.partners': 'شركاؤنا',
    'participatory.methodology': 'منهجية تشاركية',
    'results.based': 'الإدارة القائمة على النتائج',
    'partners.collaborate': 'نتعاون مع مجموعة متنوعة من الشركاء لتعزيز تأثير ومدى برامجنا.',
    'individuals.trained': 'الأفراد المدربين من خلال برامج بناء القدرات لدينا',
    'partner.organizations': 'المنظمات الشريكة المتعاونة في تنفيذ البرنامج',
    'training.workshops': 'ورش عمل تدريبية أجريت في مختلف المناطق',
    'programs.reached': 'وصلت برامجنا إلى مناطق مختلفة في الجزائر، مما مكّن الأفراد والمنظمات من أن يصبحوا مدافعين فعالين عن حقوق الإنسان والقيم الديمقراطية.',
    'participatory.description': 'نستخدم نهجًا تشاركية تشرك المستفيدين في تصميم وتنفيذ البرامج، مما يضمن الملاءمة والملكية والاستدامة. تشمل أساليبنا:',
    'needs.assessments': 'تقييمات الاحتياجات مع الفئات المستهدفة',
    'collaborative.design': 'تصميم تعاوني للبرامج',
    'feedback.mechanisms': 'آليات التغذية الراجعة المنتظمة',
    'adaptive.strategies': 'استراتيجيات تنفيذ متكيفة',
    'results.description': 'نطبق إطار إدارة قائم على النتائج لضمان فعالية وتأثير البرامج. يشمل نهجنا:',
    'clear.objectives': 'أهداف واضحة ومؤشرات قابلة للقياس',
    'monitoring.evaluation': 'رصد وتقييم منهجي',
    'lessons.learned': 'توثيق الدروس المستفادة',
    'improvement.processes': 'عمليات التحسين المستمر',
    'key.components': 'المكونات الرئيسية:',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('fr');
  
  // Function to translate text
  const translate = (key: string): string => {
    // Return translated text or the key itself if translation not found
    return translations[language][key] || key;
  };
  
  // Set language and store in localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };
  
  // Initialize language from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language') as Language;
      if (storedLanguage && (storedLanguage === 'fr' || storedLanguage === 'ar')) {
        setLanguageState(storedLanguage);
      }
    }
  }, []);
  
  // Set RTL direction for Arabic
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language]);
  
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translate,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  return useContext(LanguageContext);
} 