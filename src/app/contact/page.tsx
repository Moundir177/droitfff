'use client';

import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { getPageContent, PageContent } from '@/lib/database';

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const loadContent = () => {
    const content = getPageContent('contact');
    if (content) {
      setPageContent(content);
    }
  };

  useEffect(() => {
    loadContent(); // Initial load

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'page_contact') {
        loadContent(); // Reload content if 'page_contact' changes
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Get page title from content or use default
  const pageTitle = pageContent?.title?.[language as 'fr' | 'ar'] || 
    (language === 'fr' ? 'Contactez-nous' : 'اتصل بنا');
  
  // Get page subtitle or use default
  const pageSubtitle = pageContent?.sections?.find(s => s.id === 'intro')?.content?.[language as 'fr' | 'ar'] || 
    (language === 'fr' 
      ? 'Nous sommes là pour vous aider. N\'hésitez pas à nous contacter pour toute question ou demande.' 
      : 'نحن هنا لمساعدتك. لا تتردد في الاتصال بنا لأي أسئلة أو استفسارات.');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = language === 'fr' ? 'Le nom est requis' : 'الاسم مطلوب';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = language === 'fr' ? 'L\'email est requis' : 'البريد الإلكتروني مطلوب';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'fr' ? 'Veuillez entrer une adresse email valide' : 'يرجى إدخال بريد إلكتروني صحيح';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = language === 'fr' ? 'Le sujet est requis' : 'الموضوع مطلوب';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = language === 'fr' ? 'Le message est requis' : 'الرسالة مطلوبة';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would send this data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  // Classes for RTL/LTR layout
  const textDirection = language === 'ar' ? 'text-right' : 'text-left';
  const flexDirection = language === 'ar' ? 'flex-row-reverse' : 'flex-row';

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
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#8FD694]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-[#8FD694] text-2xl" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{t('contact.office')}</h2>
            <p className="text-gray-700">
              123 Rights Avenue<br />
              Algiers, 16000<br />
              Algeria
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#8FD694]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-[#8FD694] text-2xl" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{t('contact.phone')}</h2>
            <p className="text-gray-700">
              Phone: +213 21 00 00 00<br />
              Fax: +213 21 00 00 01<br />
              Hotline: +213 555 12 34 56
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#8FD694]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-[#8FD694] text-2xl" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{t('contact.email')}</h2>
            <p className="text-gray-700 mb-4">
              info@fpra-droits.org<br />
              support@fpra-droits.org
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#" className="text-[#8FD694] hover:text-[#171717]">
                <FaFacebook size={20} />
              </a>
                <a href="#" className="text-[#8FD694] hover:text-[#171717]">
                <FaTwitter size={20} />
              </a>
                <a href="#" className="text-[#8FD694] hover:text-[#171717]">
                <FaInstagram size={20} />
              </a>
                <a href="#" className="text-[#8FD694] hover:text-[#171717]">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className={`grid md:grid-cols-2 gap-12 mb-16 ${language === 'ar' ? 'md:flex-row-reverse' : ''}`}>
          <div className={`bg-white rounded-lg shadow-lg p-8 order-2 md:order-1 ${textDirection}`}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('send.message')}</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#8FD694] ${textDirection}`}
                    required
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#8FD694] ${textDirection}`}
                    required
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">{t('contact.form.subject')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#8FD694] ${textDirection}`}
                  required
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#8FD694] ${textDirection}`}
                  required
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                  className="bg-[#8FD694] hover:bg-[#6DB772] text-[#171717] font-bold py-3 px-6 rounded-md transition-colors"
              >
                {t('contact.form.submit')}
              </button>
                
                {isSubmitted && (
                  <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-md">
                    {t('contact.form.success')}
                </div>
                )}
              </form>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contact.hours')}</h2>
                <div className="flex items-center mb-4">
                  <FaClock className="text-[#8FD694] mr-3" />
                <div>
                    <h3 className="font-semibold">{t('contact.weekdays')}</h3>
                    <p className="text-gray-700">8:30 AM - 4:30 PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-[#8FD694] mr-3" />
                <div>
                    <h3 className="font-semibold">{t('contact.weekend')}</h3>
                    <p className="text-gray-700">{t('contact.closed')}</p>
                </div>
                </div>
              </div>
              
              <div className="h-64 md:h-96 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102239.58355550555!2d3.0412750871789133!3d36.7735233582687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb26977ea659f%3A0x128fb3d32d4d3c43!2sAlgiers%2C%20Algeria!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 