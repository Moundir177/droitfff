'use client';

import { FaCalendarAlt, FaUser, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface NewsDetailProps {
  id: number;
  title: {
    fr: string;
    ar: string;
  };
  date: {
    fr: string;
    ar: string;
  };
  author: {
    fr: string;
    ar: string;
  };
  content?: string;
  keyPoints?: {
    fr: string;
    ar: string;
  }[];
}

const defaultKeyPoints = [
  { fr: 'Analyse des réformes législatives', ar: 'تحليل الإصلاحات التشريعية' },
  { fr: 'Évaluation de la liberté d\'expression', ar: 'تقييم حرية التعبير' },
  { fr: 'Accès à la justice et procès équitables', ar: 'الوصول إلى العدالة والمحاكمات العادلة' }
];

export default function NewsDetail({ 
  id, 
  title, 
  date, 
  author, 
  content,
  keyPoints = defaultKeyPoints
}: NewsDetailProps) {
  const { language } = useLanguage();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="p-8 md:p-10">
        <motion.div variants={itemVariants} className="flex items-center mb-8">
          <div className="bg-light px-3 py-1 rounded text-sm text-gray-500 flex items-center">
            <FaCalendarAlt className="text-orange mr-2" size={14} />
            <span>{language === 'fr' ? date.fr : date.ar}</span>
          </div>
          <div className="ml-4 px-3 py-1 bg-light rounded text-sm text-gray-500 flex items-center">
            <FaUser className="text-orange mr-2" size={14} />
            <span>{language === 'fr' ? author.fr : author.ar}</span>
          </div>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-6 text-secondary"
        >
          {language === 'fr' ? title.fr : title.ar}
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-gray-700 leading-relaxed mb-8 text-lg"
        >
          {content || (language === 'fr' 
            ? 'Notre rapport annuel sur l\'état des droits en Algérie est maintenant disponible. Ce document de référence présente une analyse détaillée des avancées et des défis en matière de droits humains au cours de l\'année écoulée.'
            : 'تقريرنا السنوي عن حالة الحقوق في الجزائر متاح الآن. تقدم هذه الوثيقة المرجعية تحليلاً مفصلاً للتقدم والتحديات في مجال حقوق الإنسان خلال العام الماضي.')}
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="mb-8 bg-light p-6 rounded-xl"
        >
          <h4 className="font-semibold mb-5 text-secondary flex items-center">
            <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center text-white mr-3">
              <FaCheckCircle size={14} />
            </div>
            {language === 'fr' ? 'Points clés du rapport:' : 'النقاط الرئيسية للتقرير:'}
          </h4>
          
          <ul className="space-y-4">
            {keyPoints.map((point, index) => (
              <motion.li 
                key={index}
                className="flex items-start group" 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
              >
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange/20 flex items-center justify-center text-orange mr-3 mt-0.5">
                  <FaCheckCircle size={12} />
                </div>
                <span className="text-gray-700 group-hover:text-orange transition-colors duration-300">
                  {language === 'fr' ? point.fr : point.ar}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="flex justify-start"
        >
          <Link
            href="/news/rapport-annuel-2023"
            className="bg-orange text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-dark transition-colors duration-300 inline-flex items-center"
          >
            <span>{language === 'fr' ? 'Lire le rapport complet' : 'قراءة التقرير كاملاً'}</span>
            <FaArrowRight className="ml-2" size={14} />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
} 