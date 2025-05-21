'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaEnvelope, FaArrowRight, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import Image from 'next/image';

export default function Newsletter() {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedOptions, setSelectedOptions] = useState({
    news: true,
    events: false,
    publications: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError(language === 'fr' ? 'Veuillez entrer votre adresse e-mail' : 'الرجاء إدخال عنوان بريدك الإلكتروني');
      return;
    }
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError(language === 'fr' ? 'Veuillez entrer une adresse e-mail valide' : 'الرجاء إدخال عنوان بريد إلكتروني صالح');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      console.log('Subscription data:', { email, preferences: selectedOptions });
    setSubscribed(true);
    setError('');
      setIsSubmitting(false);
    }, 1500);
  };

  const handleOptionChange = (option: keyof typeof selectedOptions) => {
    setSelectedOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section 
      ref={ref} 
      className="py-12 sm:py-16 md:py-24 bg-primary relative overflow-hidden"
      id="newsletter"
    >
      {/* Geometric background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        {/* Animated background gradients */}
        <motion.div 
          className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.15, 0.25, 0.15],
            x: [0, 30, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -bottom-20 left-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.2, 0.3, 0.2],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        
      {/* Decorative elements */}
        <motion.div 
          className="absolute top-40 right-[15%] w-20 h-20 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" />
            <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="2" />
            <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="2" />
          </svg>
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-[10%] w-32 h-32 opacity-10"
          animate={{ 
            rotate: -360,
            y: [0, 20, 0]
          }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg viewBox="0 0 100 100" fill="none">
            <rect x="10" y="10" width="80" height="80" stroke="white" strokeWidth="2" />
            <rect x="25" y="25" width="50" height="50" stroke="white" strokeWidth="2" />
          </svg>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8 md:mb-12">
            <motion.div
              variants={itemVariants}
              className="relative inline-block w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-6 md:mb-8"
            >
              <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <FaEnvelope className="text-white h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
                </motion.div>
              </div>
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(255, 255, 255, 0.7)",
                    "0 0 0 20px rgba(255, 255, 255, 0)",
                    "0 0 0 0 rgba(255, 255, 255, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeOut" 
                }}
              />
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4"
            >
              {language === 'fr' ? 'Restez informé(e)' : 'ابق على اطلاع'}
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
            >
              {language === 'fr' 
                ? 'Inscrivez-vous à notre newsletter pour recevoir les dernières actualités, publications et événements de la Fondation pour la promotion des droits.'
                : 'اشترك في النشرة الإخبارية لتلقي آخر الأخبار والمنشورات والأحداث من مؤسسة تعزيز الحقوق.'}
            </motion.p>
          </div>
          
          {!subscribed ? (
            <motion.form 
              variants={itemVariants}
              onSubmit={handleSubmit} 
              className="bg-white p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-2xl"
            >
              <div className="flex flex-col space-y-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                <input
                  type="email"
                    placeholder={language === 'fr' ? 'Votre adresse e-mail' : 'عنوان بريدك الإلكتروني'}
                  value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-lg pl-10 pr-4 py-3 sm:py-4 text-gray-900 bg-gray-50 border border-gray-200 focus:ring-primary focus:border-primary text-sm sm:text-base"
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-xs sm:text-sm">{error}</div>
                )}
                
                <div className="font-semibold text-gray-700 text-xs sm:text-sm md:text-base">
                  {language === 'fr' ? 'Je souhaite recevoir :' : 'أرغب في تلقي:'}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-sm">
                  <div 
                    onClick={() => handleOptionChange('news')}
                    className={`flex items-center border rounded-lg p-2 md:p-3 cursor-pointer transition-colors ${
                      selectedOptions.news ? 'bg-primary/10 border-primary' : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${
                      selectedOptions.news ? 'bg-primary' : 'border border-gray-300'
                    }`}>
                      {selectedOptions.news && <FaCheckCircle className="text-white text-xs" />}
                    </div>
                    <span className="text-xs sm:text-sm">{language === 'fr' ? 'Actualités' : 'الأخبار'}</span>
                  </div>
                  
                  <div 
                    onClick={() => handleOptionChange('events')}
                    className={`flex items-center border rounded-lg p-2 md:p-3 cursor-pointer transition-colors ${
                      selectedOptions.events ? 'bg-primary/10 border-primary' : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${
                      selectedOptions.events ? 'bg-primary' : 'border border-gray-300'
                    }`}>
                      {selectedOptions.events && <FaCheckCircle className="text-white text-xs" />}
                    </div>
                    <span className="text-xs sm:text-sm">{language === 'fr' ? 'Événements' : 'الفعاليات'}</span>
              </div>
              
                  <div 
                    onClick={() => handleOptionChange('publications')}
                    className={`flex items-center border rounded-lg p-2 md:p-3 cursor-pointer transition-colors ${
                      selectedOptions.publications ? 'bg-primary/10 border-primary' : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${
                      selectedOptions.publications ? 'bg-primary' : 'border border-gray-300'
                    }`}>
                      {selectedOptions.publications && <FaCheckCircle className="text-white text-xs" />}
                    </div>
                    <span className="text-xs sm:text-sm">{language === 'fr' ? 'Publications' : 'المنشورات'}</span>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center rounded-lg py-3 sm:py-4 text-white text-sm sm:text-base font-semibold transition-all ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-r-transparent rounded-full animate-spin mr-2"></div>
                    {language === 'fr' ? 'Inscription en cours...' : 'جاري التسجيل...'}
                  </>
                ) : (
                  <>
                    {language === 'fr' ? 'S\'inscrire à la newsletter' : 'الاشتراك في النشرة الإخبارية'}
                    <FaArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </>
                )}
              </button>
              
              <div className="mt-3 md:mt-4 text-center text-xs text-gray-500">
                {language === 'fr'
                  ? 'En vous inscrivant, vous acceptez notre politique de confidentialité.'
                  : 'بالتسجيل، فإنك توافق على سياسة الخصوصية الخاصة بنا.'}
              </div>
            </motion.form>
          ) : (
            <motion.div 
              variants={itemVariants}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-2xl text-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <FaPaperPlane className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                  {language === 'fr' ? 'Merci de votre inscription !' : 'شكرا لتسجيلك!'}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  {language === 'fr' 
                    ? 'Votre inscription à la newsletter a été confirmée. Vous recevrez prochainement nos dernières actualités.'
                    : 'تم تأكيد اشتراكك في النشرة الإخبارية. ستتلقى قريبًا أحدث أخبارنا.'}
                </p>
              </div>
            </motion.div>
          )}
          
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-6 sm:mt-8 md:mt-10"
          >
            <div className="text-center">
              <p className="text-white/70 text-xs sm:text-sm">
                {language === 'fr' 
                  ? 'Nous respectons votre vie privée. Désabonnez-vous à tout moment.'
                  : 'نحن نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.'}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 