'use client';

import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Mission() {
  const { language } = useLanguage();
  
  // Define objectives in both languages
  const objectives = {
    fr: [
      "Renforcer les capacités des acteurs de la société civile",
      "Promouvoir la participation inclusive aux processus démocratiques",
      "Plaider pour des réformes juridiques qui protègent les droits humains",
      "Sensibiliser les populations vulnérables à leurs droits",
      "Établir des partenariats avec des organisations locales et internationales",
      "Documenter et traiter les violations des droits humains"
    ],
    ar: [
      "تعزيز قدرات الفاعلين في المجتمع المدني",
      "تعزيز المشاركة الشاملة في العمليات الديمقراطية",
      "الدعوة إلى إصلاحات قانونية تحمي حقوق الإنسان",
      "زيادة الوعي بالحقوق بين الفئات الضعيفة",
      "بناء شراكات مع المنظمات المحلية والدولية",
      "توثيق ومعالجة انتهاكات حقوق الإنسان"
    ]
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'fr' ? 'Notre Mission' : 'مهمتنا'}
          </h1>
          <div className="w-24 h-1 bg-[#8FD694] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 mb-8">
            {language === 'fr' 
              ? 'La Fondation pour la Promotion des Droits est engagée à renforcer l\'égalité des droits et à développer les capacités des acteurs de la société civile pour promouvoir et protéger les droits humains.'
              : 'تلتزم مؤسسة تعزيز الحقوق بتعزيز المساواة في الحقوق وبناء قدرات الفاعلين في المجتمع المدني لتعزيز وحماية حقوق الإنسان.'}
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {language === 'fr' ? 'Notre Déclaration de Mission' : 'بيان مهمتنا'}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {language === 'fr'
              ? 'Nous visons à promouvoir et à protéger les droits humains par l\'éducation, le plaidoyer et l\'engagement communautaire. Notre travail se concentre sur l\'autonomisation des individus et des organisations pour comprendre, revendiquer et défendre leurs droits.'
              : 'نهدف إلى تعزيز وحماية حقوق الإنسان من خلال التعليم والمناصرة والمشاركة المجتمعية. يركز عملنا على تمكين الأفراد والمنظمات من فهم حقوقهم والمطالبة بها والدفاع عنها.'}
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {language === 'fr' ? 'Objectifs Clés:' : 'الأهداف الرئيسية:'}
          </h3>
          <ul className="space-y-3 mb-8">
            {objectives[language === 'fr' ? 'fr' : 'ar'].map((item, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-[#8FD694] mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {language === 'fr' ? 'Notre Approche' : 'نهجنا'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {language === 'fr' ? 'Éducation & Formation' : 'التعليم والتدريب'}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === 'fr'
                  ? 'Nous fournissons des programmes de formation complets pour les organisations de la société civile, les militants et les leaders communautaires sur les principes des droits humains, la documentation et les stratégies de plaidoyer.'
                  : 'نقدم برامج تدريبية شاملة لمنظمات المجتمع المدني والناشطين وقادة المجتمع حول مبادئ حقوق الإنسان والتوثيق واستراتيجيات المناصرة.'}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {language === 'fr' ? 'Plaidoyer & Politique' : 'المناصرة والسياسة'}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === 'fr'
                  ? 'Nous collaborons avec les décideurs politiques et les institutions gouvernementales pour promouvoir des cadres juridiques qui protègent et font progresser les droits humains pour tous les citoyens.'
                  : 'نتعاون مع صانعي السياسات والمؤسسات الحكومية لتعزيز الأطر القانونية التي تحمي وتعزز حقوق الإنسان لجميع المواطنين.'}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {language === 'fr' ? 'Engagement Communautaire' : 'المشاركة المجتمعية'}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === 'fr'
                  ? 'Nous organisons des campagnes de sensibilisation du public, des dialogues communautaires et des initiatives de base pour construire une culture de sensibilisation aux droits et d\'activisme.'
                  : 'ننظم حملات توعية عامة وحوارات مجتمعية ومبادرات شعبية لبناء ثقافة الوعي بالحقوق والنشاط.'}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {language === 'fr' ? 'Partenariats' : 'الشراكات'}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === 'fr'
                  ? 'Nous collaborons avec des organisations locales et internationales pour renforcer notre impact et construire un mouvement unifié pour la protection des droits humains.'
                  : 'نتعاون مع المنظمات المحلية والدولية لتعزيز تأثيرنا وبناء حركة موحدة لحماية حقوق الإنسان.'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/about" 
            className="inline-block bg-[#8FD694] hover:bg-[#7ac683] text-[#171717] font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            {language === 'fr' ? 'Retour à À Propos' : 'العودة إلى من نحن'}
          </Link>
        </div>
      </div>
    </div>
  );
} 