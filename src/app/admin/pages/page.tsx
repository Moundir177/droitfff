'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaEdit, FaHome, FaInfoCircle, FaNewspaper, FaBook, FaPhone, FaQuoteRight, FaFileAlt } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import AdminSidebar from '@/components/AdminSidebar';

interface PageInfo {
  id: string;
  title: string;
  path: string;
  icon: React.ReactNode;
  description: string;
}

export default function AdminPagesPage() {
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // List of editable pages
  const pages: PageInfo[] = [
    {
      id: 'home',
      title: language === 'fr' ? 'Page d\'accueil' : 'الصفحة الرئيسية',
      path: '/admin/pages/edit/home',
      icon: <FaHome className="text-blue-500" />,
      description: language === 'fr' 
        ? 'Page d\'accueil du site avec sections principales' 
        : 'الصفحة الرئيسية للموقع مع الأقسام الرئيسية'
    },
    {
      id: 'about',
      title: language === 'fr' ? 'À propos' : 'حول',
      path: '/admin/pages/edit/about',
      icon: <FaInfoCircle className="text-orange-500" />,
      description: language === 'fr' 
        ? 'Informations sur la fondation, la mission et l\'équipe' 
        : 'معلومات عن المؤسسة والمهمة والفريق'
    },
    {
      id: 'programs',
      title: language === 'fr' ? 'Programmes' : 'البرامج',
      path: '/admin/pages/edit/programs',
      icon: <FaBook className="text-yellow-500" />,
      description: language === 'fr' 
        ? 'Page des programmes et initiatives' 
        : 'صفحة البرامج والمبادرات'
    },
    {
      id: 'news',
      title: language === 'fr' ? 'Actualités' : 'الأخبار',
      path: '/admin/pages/edit/news',
      icon: <FaNewspaper className="text-green-500" />,
      description: language === 'fr' 
        ? 'Gérer les articles d\'actualités' 
        : 'إدارة مقالات الأخبار'
    },
    {
      id: 'review',
      title: language === 'fr' ? 'Revue & Publications' : 'المراجعة والمنشورات',
      path: '/admin/pages/edit/review',
      icon: <FaFileAlt className="text-indigo-500" />,
      description: language === 'fr' 
        ? 'Gérer la page Revue et Publications' 
        : 'إدارة صفحة المراجعة والمنشورات'
    },
    {
      id: 'resources',
      title: language === 'fr' ? 'Ressources' : 'الموارد',
      path: '/admin/pages/edit/resources',
      icon: <FaBook className="text-red-500" />,
      description: language === 'fr' 
        ? 'Gérer les ressources et publications' 
        : 'إدارة الموارد والمنشورات'
    },
    {
      id: 'testimonials',
      title: language === 'fr' ? 'Témoignages' : 'الشهادات',
      path: '/admin/pages/edit/testimonials',
      icon: <FaQuoteRight className="text-purple-500" />,
      description: language === 'fr' 
        ? 'Gérer les témoignages' 
        : 'إدارة الشهادات'
    },
    {
      id: 'contact',
      title: language === 'fr' ? 'Contact' : 'اتصل بنا',
      path: '/admin/pages/edit/contact',
      icon: <FaPhone className="text-orange-500" />,
      description: language === 'fr' 
        ? 'Informations de contact et formulaire' 
        : 'معلومات الاتصال ونموذج الاتصال'
    }
  ];

  // Only render on client side to avoid hydration issues
  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminSidebar />
      
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            {language === 'fr' ? 'Gestion des Pages' : 'إدارة الصفحات'}
          </h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-6">
            {language === 'fr' 
              ? 'Sélectionnez une page ci-dessous pour modifier son contenu. Les modifications seront reflétées sur le site web après enregistrement.'
              : 'حدد صفحة أدناه لتعديل محتواها. ستظهر التغييرات على الموقع بعد الحفظ.'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page) => (
              <Link 
                key={page.id} 
                href={page.path}
                className="block bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="mr-3">
                      {page.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{page.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{page.description}</p>
                  <div className="flex justify-end">
                    <span className="text-blue-600 flex items-center text-sm font-medium">
                      <FaEdit className="mr-1" /> 
                      {language === 'fr' ? 'Modifier' : 'تعديل'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 