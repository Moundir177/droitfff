'use client';

import { FaCalendarAlt, FaUsers, FaGlobe, FaBullhorn, FaBook } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const timelineEvents = {
  fr: [
    {
      year: 2010,
      title: 'Fondation Établie',
      description:
        'La Fondation pour la Promotion des Droits a été établie par un groupe d\'avocats et d\'activistes des droits humains dédiés à la promotion et à la protection des droits humains.',
      icon: <FaCalendarAlt className="text-white" />,
    },
    {
      year: 2012,
      title: 'Premier Programme de Formation Majeur',
      description:
        'Lancement de notre premier programme de formation complet pour les organisations de la société civile, axé sur la documentation des droits humains et les stratégies de plaidoyer.',
      icon: <FaUsers className="text-white" />,
    },
    {
      year: 2014,
      title: 'Expansion du Focus des Programmes',
      description:
        'Élargissement de notre focus pour inclure les droits des femmes et la participation des jeunes, développant des modules de formation spécialisés et des campagnes de plaidoyer.',
      icon: <FaBullhorn className="text-white" />,
    },
    {
      year: 2016,
      title: 'Partenariats Internationaux',
      description:
        'Établissement de partenariats formels avec des organisations internationales de droits humains, renforçant notre capacité et notre portée grâce à des projets collaboratifs.',
      icon: <FaGlobe className="text-white" />,
    },
    {
      year: 2018,
      title: 'Initiative sur les Droits Numériques',
      description:
        'Lancement d\'un programme dédié aux droits numériques et aux libertés en ligne, répondant à l\'importance croissante des espaces numériques pour l\'engagement civique.',
      icon: <FaBook className="text-white" />,
    },
    {
      year: 2020,
      title: 'Centre de Renforcement des Capacités',
      description:
        'Établissement de notre Centre de Renforcement des Capacités, fournissant un soutien continu, des ressources et du mentorat à un réseau d\'organisations de la société civile.',
      icon: <FaUsers className="text-white" />,
    },
    {
      year: 2022,
      title: 'Expansion Stratégique',
      description:
        'Mise en œuvre de notre nouveau plan stratégique quinquennal, axé sur le renforcement des cadres juridiques, la mobilisation populaire et la durabilité institutionnelle.',
      icon: <FaGlobe className="text-white" />,
    },
    {
      year: 2023,
      title: 'Focus Actuel',
      description:
        'Actuellement concentré sur l\'avancement de la participation démocratique, le soutien aux réformes juridiques et la promotion d\'espaces civiques inclusifs pour tous les secteurs de la société.',
      icon: <FaBullhorn className="text-white" />,
    },
  ],
  ar: [
  {
    year: 2010,
      title: 'تأسيس المؤسسة',
    description:
        'تأسست مؤسسة تعزيز الحقوق من قبل مجموعة من المحامين والنشطاء في مجال حقوق الإنسان المكرسين لتعزيز وحماية حقوق الإنسان.',
    icon: <FaCalendarAlt className="text-white" />,
  },
  {
    year: 2012,
      title: 'أول برنامج تدريبي رئيسي',
    description:
        'إطلاق أول برنامج تدريبي شامل لمنظمات المجتمع المدني، مع التركيز على توثيق حقوق الإنسان واستراتيجيات المناصرة.',
    icon: <FaUsers className="text-white" />,
  },
  {
    year: 2014,
      title: 'توسيع تركيز البرامج',
    description:
        'توسيع تركيزنا ليشمل حقوق المرأة ومشاركة الشباب، وتطوير وحدات تدريبية متخصصة وحملات مناصرة.',
    icon: <FaBullhorn className="text-white" />,
  },
  {
    year: 2016,
      title: 'شراكات دولية',
    description:
        'إقامة شراكات رسمية مع منظمات دولية لحقوق الإنسان، مما يعزز قدرتنا ونطاقنا من خلال المشاريع التعاونية.',
    icon: <FaGlobe className="text-white" />,
  },
  {
    year: 2018,
      title: 'مبادرة الحقوق الرقمية',
    description:
        'إطلاق برنامج مخصص للحقوق الرقمية والحريات عبر الإنترنت، استجابة للأهمية المتزايدة للفضاءات الرقمية للمشاركة المدنية.',
    icon: <FaBook className="text-white" />,
  },
  {
    year: 2020,
      title: 'مركز بناء القدرات',
    description:
        'إنشاء مركز بناء القدرات، الذي يوفر الدعم المستمر والموارد والتوجيه لشبكة من منظمات المجتمع المدني.',
    icon: <FaUsers className="text-white" />,
  },
  {
    year: 2022,
      title: 'التوسع الاستراتيجي',
    description:
        'تنفيذ خطتنا الاستراتيجية الخمسية الجديدة، مع التركيز على تعزيز الأطر القانونية، والتعبئة الشعبية، والاستدامة المؤسسية.',
    icon: <FaGlobe className="text-white" />,
  },
  {
    year: 2023,
      title: 'التركيز الحالي',
    description:
        'نركز حاليًا على تعزيز المشاركة الديمقراطية، ودعم الإصلاحات القانونية، وتعزيز الفضاءات المدنية الشاملة لجميع قطاعات المجتمع.',
    icon: <FaBullhorn className="text-white" />,
  },
  ]
};

export default function History() {
  const { language } = useLanguage();
  const events = language === 'fr' ? timelineEvents.fr : timelineEvents.ar;

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'fr' ? 'Notre Histoire' : 'تاريخنا'}
          </h1>
          <div className="w-24 h-1 bg-[#8FD694] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 mb-8">
            {language === 'fr' 
              ? 'Depuis notre fondation en 2010, la Fondation pour la Promotion des Droits s\'est consacrée à la promotion des droits humains et au renforcement de la société civile. Découvrez notre parcours et nos étapes clés au fil des ans.'
              : 'منذ تأسيسنا في عام 2010، كرست مؤسسة تعزيز الحقوق جهودها لتعزيز حقوق الإنسان وتقوية المجتمع المدني. اكتشف رحلتنا والمراحل الرئيسية على مر السنين.'}
          </p>
        </div>
        
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#8FD694]"></div>
          
          <div className="relative z-10">
            {events.map((event, index) => (
              <div key={index} className={`mb-12 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className={`bg-white rounded-lg shadow-lg p-6 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`} style={{ maxWidth: '90%' }}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{event.year}</h3>
                    <h4 className="text-xl font-bold text-[#8FD694] mb-3">{event.title}</h4>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-10 h-10 bg-[#8FD694] rounded-full flex items-center justify-center z-20">
                    {event.icon}
                  </div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {language === 'fr' ? 'Notre Engagement Continu' : 'التزامنا المستمر'}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {language === 'fr'
              ? 'Tout au long de notre histoire, nous sommes restés fidèles à nos valeurs fondatrices d\'égalité, de justice et de dignité pour tous. En regardant vers l\'avenir, nous continuons à adapter nos approches pour répondre aux défis émergents en matière de droits humains tout en nous appuyant sur notre base établie d\'expertise et de confiance communautaire.'
              : 'على مدار تاريخنا، ظللنا ملتزمين بقيمنا التأسيسية المتمثلة في المساواة والعدالة والكرامة للجميع. وبينما نتطلع إلى المستقبل، نواصل تكييف نهجنا لمواجهة التحديات الناشئة في مجال حقوق الإنسان مع البناء على أساسنا الراسخ من الخبرة والثقة المجتمعية.'}
          </p>
          <p className="text-lg text-gray-700">
            {language === 'fr'
              ? 'Notre histoire témoigne de la puissance de l\'action collective et de l\'importance d\'un engagement soutenu envers les principes des droits humains. Nous honorons ceux qui ont contribué à notre parcours et nous nous réjouissons de travailler avec de nouveaux partenaires et soutiens alors que nous poursuivons notre mission.'
              : 'يشهد تاريخنا على قوة العمل الجماعي وأهمية الالتزام المستمر بمبادئ حقوق الإنسان. نحن نكرم أولئك الذين ساهموا في رحلتنا ونتطلع إلى العمل مع شركاء وداعمين جدد بينما نواصل مهمتنا.'}
          </p>
        </div>
        
        <div className="text-center">
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