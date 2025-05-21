'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Footer() {
  const { t, language } = useLanguage();

  // Classes for RTL/LTR layout
  const textAlign = language === 'ar' ? 'text-right' : 'text-left';
  const flexDirection = language === 'ar' ? 'flex-row-reverse' : 'flex-row';
  
  return (
    <footer className="bg-secondary text-white pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute top-1/4 left-1/3 w-40 h-40 rounded-full bg-primary/5 blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Logo and description */}
          <motion.div 
            className={`space-y-4 sm:space-y-5 ${textAlign}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse justify-end' : 'flex-row'} space-x-2`}>
              <div className="relative h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center bg-white rounded-full p-1">
                <Image 
                  src="/images/logo.png" 
                  alt="Foundation Logo" 
                  width={80} 
                  height={80} 
                  className="object-contain absolute"
                />
              </div>
              <div className={language === 'ar' ? 'mr-2' : 'ml-2'}>
                <div className="font-bold text-base sm:text-lg leading-tight text-primary">
                  {language === 'fr' ? 'Fondation' : 'مؤسسة'}
                </div>
                <div className="text-xs sm:text-sm leading-tight">
                  {language === 'fr' ? 'Pour la Promotion des Droits' : 'لتعزيز الحقوق'}
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm">
              {language === 'fr' 
                ? 'Ensemble, pour des droits connus, reconnus et défendus.' 
                : 'معاً، من أجل حقوق معروفة، معترف بها ومدافع عنها.'}
            </p>
            <div className="pt-1 sm:pt-2 space-y-2">
              <div className="flex items-center text-gray-300 text-xs sm:text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{language === 'fr' ? 'Alger, Algérie' : 'الجزائر العاصمة، الجزائر'}</span>
              </div>
              <div className="flex items-center text-gray-300 text-xs sm:text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@fpra-droits.org</span>
              </div>
              <div className="flex items-center text-gray-300 text-xs sm:text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+213 21 00 00 00</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className={textAlign}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white relative inline-block">
              {language === 'fr' ? 'Liens Rapides' : 'روابط سريعة'}
              <span className="absolute bottom-0 left-0 w-8 sm:w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary text-sm transition-colors flex items-center gap-2">
                  <svg className="w-1.5 h-1.5 text-primary" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary text-sm transition-colors flex items-center gap-2">
                  <svg className="w-1.5 h-1.5 text-primary" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-primary text-sm transition-colors flex items-center gap-2">
                  <svg className="w-1.5 h-1.5 text-primary" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  {t('programs')}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-primary text-sm transition-colors flex items-center gap-2">
                  <svg className="w-1.5 h-1.5 text-primary" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  {t('news')}
                </Link>
              </li>
              <li>
                <Link href="/review" className="text-gray-300 hover:text-primary text-sm transition-colors flex items-center gap-2">
                  <svg className="w-1.5 h-1.5 text-primary" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  {t('review')}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Information */}
          <motion.div 
            className={textAlign}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white relative inline-block">
              {language === 'fr' ? 'Informations' : 'معلومات'}
              <span className="absolute bottom-0 left-0 w-8 sm:w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-primary text-sm transition-colors flex items-center gap-2">
                  <svg className="w-1.5 h-1.5 text-primary" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  {t('resources')}
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-primary text-sm transition-colors flex items-center gap-2">
                  <svg className="w-1.5 h-1.5 text-primary" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  {t('testimonials')}
                </Link>
              </li>
              <li>
                <Link href="/civil-society" className="text-gray-300 hover:text-primary text-sm transition-colors flex items-center gap-2">
                  <svg className="w-1.5 h-1.5 text-primary" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  {t('civil-society')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary text-sm transition-colors flex items-center gap-2">
                  <svg className="w-1.5 h-1.5 text-primary" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className={textAlign}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white relative inline-block">
              {language === 'fr' 
                ? 'Abonnez-vous à notre newsletter' 
                : 'اشترك في نشرتنا الإخبارية'}
              <span className="absolute bottom-0 left-0 w-8 sm:w-12 h-0.5 bg-primary"></span>
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-5">
              {language === 'fr'
                ? 'Recevez les dernières actualités, publications et événements directement dans votre boîte mail.'
                : 'احصل على آخر الأخبار والمنشورات والفعاليات مباشرة في بريدك الإلكتروني.'}
            </p>
            <form className="space-y-3">
              <div className={`flex ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} rounded-lg overflow-hidden shadow-lg`}>
                <input 
                  type="email" 
                  placeholder={language === 'fr' ? 'Votre email' : 'بريدك الإلكتروني'} 
                  className="flex-grow px-3 py-2 sm:py-3 text-gray-800 bg-white text-xs sm:text-sm focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 text-white px-3 sm:px-4 text-xs sm:text-sm font-medium transition-colors"
                >
                  {language === 'fr' ? 'Envoyer' : 'إرسال'}
                </button>
              </div>
            </form>
            
            <div className="mt-5 sm:mt-6">
              <p className="text-white font-medium text-sm mb-2">
                {language === 'fr' ? 'Suivez-nous' : 'تابعنا'}
              </p>
              <div className="flex space-x-3">
                <Link href="#" className="bg-white/10 hover:bg-primary text-white p-2 rounded-full transition-colors">
                  <FaFacebook className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link href="#" className="bg-white/10 hover:bg-primary text-white p-2 rounded-full transition-colors">
                  <FaTwitter className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link href="#" className="bg-white/10 hover:bg-primary text-white p-2 rounded-full transition-colors">
                  <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link href="#" className="bg-white/10 hover:bg-primary text-white p-2 rounded-full transition-colors">
                  <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link href="#" className="bg-white/10 hover:bg-primary text-white p-2 rounded-full transition-colors">
                  <FaYoutube className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 sm:mt-10 pt-6 sm:pt-8">
          <div className={`flex flex-col sm:flex-row ${language === 'ar' ? 'sm:flex-row-reverse' : ''} justify-between items-center text-gray-400 text-xs sm:text-sm`}>
            <div className="mb-4 sm:mb-0">
              © {new Date().getFullYear()} {language === 'fr' ? 'Fondation pour la Promotion des Droits' : 'مؤسسة تعزيز الحقوق'}. {language === 'fr' ? 'Tous droits réservés.' : 'كل الحقوق محفوظة.'}
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                {language === 'fr' ? 'Politique de confidentialité' : 'سياسة الخصوصية'}
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                {language === 'fr' ? 'Conditions d\'utilisation' : 'شروط الاستخدام'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 