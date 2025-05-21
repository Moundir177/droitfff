'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaHome, FaNewspaper, FaBook, FaImage, FaSignOutAlt, FaCog, FaFileAlt } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminSidebar() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const { logout } = useAuth();

  const menuItems = [
    {
      href: '/admin/dashboard',
      title: language === 'fr' ? 'Tableau de bord' : 'لوحة التحكم',
      icon: <FaHome className="mr-3" />
    },
    {
      href: '/admin/pages',
      title: language === 'fr' ? 'Pages' : 'الصفحات',
      icon: <FaFileAlt className="mr-3" />
    },
    {
      href: '/admin/news',
      title: language === 'fr' ? 'Actualités' : 'الأخبار',
      icon: <FaNewspaper className="mr-3" />
    },
    {
      href: '/admin/resources',
      title: language === 'fr' ? 'Ressources' : 'الموارد',
      icon: <FaBook className="mr-3" />
    },
    {
      href: '/admin/settings',
      title: language === 'fr' ? 'Paramètres' : 'الإعدادات',
      icon: <FaCog className="mr-3" />
    }
  ];

  return (
    <aside className="w-64 bg-[#2C3E50] text-white min-h-screen">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">
          {language === 'fr' ? 'Administration' : 'الإدارة'}
        </h1>
        <p className="text-sm text-gray-300 mt-1">
          {language === 'fr' ? 'Gestion du contenu' : 'إدارة المحتوى'}
        </p>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <Link 
            key={index}
            href={item.href} 
            className={`flex items-center px-4 py-3 ${
              pathname === item.href 
                ? 'bg-[#3E5871] text-white' 
                : 'text-gray-300 hover:bg-[#3E5871] hover:text-white'
            } transition-colors`}
          >
            {item.icon}
            <span>{item.title}</span>
          </Link>
        ))}
        
        <button 
          onClick={logout}
          className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-[#3E5871] hover:text-white transition-colors"
        >
          <FaSignOutAlt className="mr-3" />
          <span>{language === 'fr' ? 'Déconnexion' : 'تسجيل الخروج'}</span>
        </button>
      </nav>
    </aside>
  );
} 