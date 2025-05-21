'use client';

import { FaBook, FaSearch, FaFileAlt, FaChartBar, FaClipboardCheck, FaUsers } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const researchAreas = [
  {
    titleFr: 'Surveillance des droits humains',
    titleAr: 'رصد حقوق الإنسان',
    descriptionFr: 'Surveillance et documentation systématiques des situations des droits humains pour identifier les tendances, les modèles et les préoccupations émergentes.',
    descriptionAr: 'الرصد والتوثيق المنهجي لحالات حقوق الإنسان لتحديد الأنماط والاتجاهات والمخاوف الناشئة.',
    icon: <FaSearch className="text-white" />,
    focusFr: 'Liberté d\'expression, d\'association et de réunion',
    focusAr: 'حرية التعبير والتجمع وتكوين الجمعيات'
  },
  {
    titleFr: 'Études de recherche thématiques',
    titleAr: 'دراسات بحثية موضوعية',
    descriptionFr: 'Recherche approfondie sur des questions spécifiques liées aux droits, examinant les causes profondes, les impacts et les solutions potentielles.',
    descriptionAr: 'بحث متعمق في قضايا محددة متعلقة بالحقوق، ودراسة الأسباب الجذرية والتأثيرات والحلول المحتملة.',
    icon: <FaFileAlt className="text-white" />,
    focusFr: 'Droits des femmes, droits numériques, droits économiques et sociaux',
    focusAr: 'حقوق المرأة، الحقوق الرقمية، الحقوق الاقتصادية والاجتماعية'
  },
  {
    titleFr: 'Documentation des meilleures pratiques',
    titleAr: 'توثيق أفضل الممارسات',
    descriptionFr: 'Identifier et documenter les approches réussies pour la promotion et la protection des droits humains.',
    descriptionAr: 'تحديد وتوثيق النهج الناجحة لتعزيز وحماية حقوق الإنسان.',
    icon: <FaClipboardCheck className="text-white" />,
    focusFr: 'Stratégies de la société civile, engagement communautaire, plaidoyer juridique',
    focusAr: 'استراتيجيات المجتمع المدني، المشاركة المجتمعية، المناصرة القانونية'
  },
  {
    titleFr: 'Évaluation d\'impact',
    titleAr: 'تقييم الأثر',
    descriptionFr: 'Évaluer l\'impact des programmes basés sur les droits, des initiatives de plaidoyer et des réformes juridiques.',
    descriptionAr: 'تقييم تأثير البرامج القائمة على الحقوق ومبادرات المناصرة والإصلاحات القانونية.',
    icon: <FaChartBar className="text-white" />,
    focusFr: 'Efficacité des programmes, mise en œuvre des politiques, engagement des parties prenantes',
    focusAr: 'فعالية البرامج، تنفيذ السياسات، إشراك أصحاب المصلحة'
  }
];

const publications = [
  {
    titleFr: "État de la société civile en Algérie",
    titleAr: "حالة المجتمع المدني في الجزائر",
    year: "2023",
    typeFr: "Rapport annuel",
    typeAr: "تقرير سنوي",
    descriptionFr: "Analyse complète de l'environnement opérationnel des organisations de la société civile en Algérie, y compris les cadres juridiques, les défis et les opportunités."
  },
  {
    titleFr: "Participation politique des femmes: obstacles et facteurs favorables",
    titleAr: "المشاركة السياسية للمرأة: العوائق والعوامل المساعدة",
    year: "2022",
    typeFr: "Étude de recherche",
    typeAr: "دراسة بحثية",
    descriptionFr: "Analyse des facteurs affectant la participation des femmes aux processus politiques et à la prise de décision, avec des recommandations pour les réformes politiques."
  },
  {
    titleFr: "Droits numériques et liberté d'expression en ligne",
    titleAr: "الحقوق الرقمية وحرية التعبير عبر الإنترنت",
    year: "2021",
    typeFr: "Note d'orientation",
    typeAr: "موجز سياسات",
    descriptionFr: "Examen des questions de droits numériques en Algérie, en se concentrant sur l'accès à Internet, la censure en ligne et les préoccupations relatives à la vie privée."
  },
  {
    titleFr: "Initiatives de droits humains menées par des jeunes: études de cas",
    titleAr: "مبادرات حقوق الإنسان التي يقودها الشباب: دراسات حالة",
    year: "2020",
    typeFr: "Guide des meilleures pratiques",
    typeAr: "دليل أفضل الممارسات",
    descriptionFr: "Documentation des initiatives réussies menées par des jeunes pour promouvoir les droits humains, avec des leçons apprises et des stratégies de réplication."
  }
];

export default function ResearchProgram() {
  const { language } = useLanguage();
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'fr' ? 'Recherche & Documentation' : 'البحث والتوثيق'}
          </h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 mb-8">
            {language === 'fr' 
              ? 'Notre programme de recherche documente systématiquement les situations des droits humains et mène des études sur les questions liées aux droits pour informer le plaidoyer et le développement des politiques.'
              : 'يوثق برنامج البحث لدينا بشكل منهجي حالات حقوق الإنسان ويجري دراسات حول القضايا المتعلقة بالحقوق لإثراء المناصرة وتطوير السياسات.'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                <FaBook className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {language === 'fr' ? 'Aperçu du programme' : 'نظرة عامة على البرنامج'}
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              {language === 'fr'
                ? 'Notre programme de Recherche & Documentation produit des connaissances fondées sur des preuves pour informer nos initiatives de plaidoyer, de formation et de sensibilisation. Grâce à des méthodologies de recherche rigoureuses, nous documentons les situations des droits humains, analysons les questions liées aux droits et développons des recommandations pratiques.'
                : 'ينتج برنامج البحث والتوثيق لدينا معرفة قائمة على الأدلة لإثراء مبادراتنا في المناصرة والتدريب والتوعية. من خلال منهجيات بحثية صارمة، نقوم بتوثيق حالات حقوق الإنسان، وتحليل القضايا المتعلقة بالحقوق، وتطوير توصيات قابلة للتنفيذ.'}
            </p>
            <p className="text-gray-700 mb-4">
              {language === 'fr'
                ? 'Notre recherche est menée en partenariat avec les communautés affectées, les institutions académiques et d\'autres organisations de la société civile, garantissant des perspectives et une expertise diverses.'
                : 'يتم إجراء بحثنا بالشراكة مع المجتمعات المتأثرة، والمؤسسات الأكاديمية، ومنظمات المجتمع المدني الأخرى، مما يضمن وجهات نظر وخبرات متنوعة.'}
            </p>
            <p className="text-gray-700">
              {language === 'fr'
                ? 'Toutes nos recherches adhèrent à des normes éthiques et donnent la priorité à la sécurité et à la dignité des individus et des communautés impliqués dans ou affectés par notre travail.'
                : 'تلتزم جميع أبحاثنا بالمعايير الأخلاقية وتعطي الأولوية لسلامة وكرامة الأفراد والمجتمعات المشاركة في عملنا أو المتأثرة به.'}
            </p>
          </div>
          
          <div className="bg-orange-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">
              {language === 'fr' ? 'Principes de recherche' : 'مبادئ البحث'}
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-orange-300 mr-2 text-xl">•</span>
                <div>
                  <h3 className="font-bold">
                    {language === 'fr' ? 'Rigueur méthodologique' : 'الدقة المنهجية'}
                  </h3>
                  <p>
                    {language === 'fr'
                      ? 'Nous employons des méthodologies de recherche solides et triangulons les informations provenant de sources multiples'
                      : 'نستخدم منهجيات بحثية سليمة ونثلث المعلومات من مصادر متعددة'}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-300 mr-2 text-xl">•</span>
                <div>
                  <h3 className="font-bold">
                    {language === 'fr' ? 'Approche participative' : 'نهج تشاركي'}
                  </h3>
                  <p>
                    {language === 'fr'
                      ? 'Nous impliquons les communautés affectées dans la conception de la recherche, la collecte de données et l\'analyse'
                      : 'نشرك المجتمعات المتأثرة في تصميم البحث وجمع البيانات وتحليلها'}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-300 mr-2 text-xl">•</span>
                <div>
                  <h3 className="font-bold">
                    {language === 'fr' ? 'Orienté vers l\'action' : 'موجه نحو العمل'}
                  </h3>
                  <p>
                    {language === 'fr'
                      ? 'Notre recherche vise à informer des actions et des solutions concrètes, pas seulement la production de connaissances'
                      : 'يهدف بحثنا إلى إثراء الإجراءات والحلول الملموسة، وليس مجرد إنتاج المعرفة'}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-300 mr-2 text-xl">•</span>
                <div>
                  <h3 className="font-bold">
                    {language === 'fr' ? 'Considérations éthiques' : 'اعتبارات أخلاقية'}
                  </h3>
                  <p>
                    {language === 'fr'
                      ? 'Nous donnons la priorité au consentement éclairé, à la confidentialité et aux principes de non-nuisance'
                      : 'نعطي الأولوية للموافقة المستنيرة والسرية ومبادئ عدم الإضرار'}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {language === 'fr' ? 'Domaines de recherche' : 'مجالات البحث'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {language === 'fr' ? area.titleFr : area.titleAr}
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  {language === 'fr' ? area.descriptionFr : area.descriptionAr}
                </p>
                <div className="bg-orange-100 text-orange-800 p-3 rounded-lg">
                  <span className="font-bold">
                    {language === 'fr' ? 'Focus actuel: ' : 'التركيز الحالي: '}
                  </span>
                  {language === 'fr' ? area.focusFr : area.focusAr}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {language === 'fr' ? 'Publications récentes' : 'المنشورات الأخيرة'}
          </h2>
          
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {language === 'fr' ? publication.titleFr : publication.titleAr}
                  </h3>
                  <div className="flex space-x-2">
                    <span className="bg-orange-100 text-orange-800 py-1 px-3 rounded-full text-sm">
                      {publication.year}
                    </span>
                    <span className="bg-gray-100 text-gray-800 py-1 px-3 rounded-full text-sm">
                      {language === 'fr' ? publication.typeFr : publication.typeAr}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  {language === 'fr' ? publication.descriptionFr : ''}
                </p>
                <div className="flex justify-end">
                  <a 
                    href="#" 
                    className="text-orange-600 hover:text-orange-800 font-bold flex items-center"
                  >
                    <FaFileAlt className="mr-1" /> 
                    {language === 'fr' ? 'Télécharger PDF' : 'تحميل PDF'}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="#" 
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              {language === 'fr' ? 'Voir toutes les publications' : 'عرض جميع المنشورات'}
            </a>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Méthodologie de recherche' : 'منهجية البحث'}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'fr'
                ? 'Notre recherche emploie des approches à méthodes mixtes, combinant des techniques qualitatives et quantitatives pour recueillir des données et des informations complètes sur les questions de droits humains.'
                : 'يستخدم بحثنا مناهج مختلطة، تجمع بين التقنيات النوعية والكمية لجمع بيانات ورؤى شاملة حول قضايا حقوق الإنسان.'}
            </p>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              {language === 'fr' ? 'Nos méthodes incluent:' : 'تشمل أساليبنا:'}
            </h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span className="text-gray-700">
                  {language === 'fr' ? 'Entretiens avec des informateurs clés et des détenteurs de droits' : 'مقابلات مع مصادر رئيسية وأصحاب حقوق'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span className="text-gray-700">
                  {language === 'fr' ? 'Discussions de groupe avec diverses parties prenantes' : 'مناقشات جماعية مع مختلف أصحاب المصلحة'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span className="text-gray-700">
                  {language === 'fr' ? 'Enquêtes et questionnaires sur la sensibilisation aux droits et les expériences' : 'استطلاعات واستبيانات حول الوعي بالحقوق والتجارب'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span className="text-gray-700">
                  {language === 'fr' ? 'Analyse juridique et politique' : 'تحليل قانوني وسياسي'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span className="text-gray-700">
                  {language === 'fr' ? 'Revues de littérature et analyse de données secondaires' : 'مراجعات الأدبيات وتحليل البيانات الثانوية'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span className="text-gray-700">
                  {language === 'fr' ? 'Études de cas et documentation des violations individuelles des droits' : 'دراسات حالة وتوثيق انتهاكات الحقوق الفردية'}
                </span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Partenariats de recherche' : 'شراكات البحث'}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'fr'
                ? 'Nous collaborons avec une gamme de partenaires pour améliorer la qualité, la pertinence et l\'impact de notre recherche, réunissant diverses expertises et perspectives.'
                : 'نتعاون مع مجموعة من الشركاء لتعزيز جودة وملاءمة وتأثير بحثنا، مما يجمع بين خبرات ووجهات نظر متنوعة.'}
            </p>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              {language === 'fr' ? 'Nos partenaires incluent:' : 'يشمل شركاؤنا:'}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <h4 className="font-bold text-gray-900 mb-1">
                  {language === 'fr' ? 'Institutions académiques' : 'المؤسسات الأكاديمية'}
                </h4>
                <p className="text-sm text-gray-700">
                  {language === 'fr' ? 'Universités et centres de recherche' : 'الجامعات ومراكز البحوث'}
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <h4 className="font-bold text-gray-900 mb-1">
                  {language === 'fr' ? 'Réseaux de la société civile' : 'شبكات المجتمع المدني'}
                </h4>
                <p className="text-sm text-gray-700">
                  {language === 'fr' ? 'Coalitions d\'ONG locales et régionales' : 'تحالفات المنظمات غير الحكومية المحلية والإقليمية'}
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <h4 className="font-bold text-gray-900 mb-1">
                  {language === 'fr' ? 'Organisations internationales' : 'المنظمات الدولية'}
                </h4>
                <p className="text-sm text-gray-700">
                  {language === 'fr' ? 'Agences de l\'ONU et ONG internationales' : 'وكالات الأمم المتحدة والمنظمات غير الحكومية الدولية'}
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <h4 className="font-bold text-gray-900 mb-1">
                  {language === 'fr' ? 'Chercheurs communautaires' : 'الباحثون المجتمعيون'}
                </h4>
                <p className="text-sm text-gray-700">
                  {language === 'fr' ? 'Membres de la communauté formés' : 'أفراد المجتمع المدربون'}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {language === 'fr' ? 'Utilisation de la recherche' : 'استخدام البحث'}
          </h2>
          <p className="text-center text-gray-700 mb-8">
            {language === 'fr'
              ? 'Nos résultats de recherche informent divers aspects de notre travail et sont partagés avec les principales parties prenantes pour maximiser leur impact sur la promotion et la protection des droits humains.'
              : 'تثري نتائج أبحاثنا جوانب مختلفة من عملنا ويتم مشاركتها مع أصحاب المصلحة الرئيسيين لتعظيم تأثيرها على تعزيز وحماية حقوق الإنسان.'}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-5 border-b-4 border-orange-600 rounded-lg bg-gray-50">
              <FaFileAlt className="text-orange-600 text-3xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Plaidoyer' : 'المناصرة'}
              </h3>
              <p className="text-gray-700">
                {language === 'fr' ? 'Informe nos campagnes de plaidoyer et nos recommandations politiques' : 'تثري حملات المناصرة وتوصيات السياسات لدينا'}
              </p>
            </div>
            <div className="text-center p-5 border-b-4 border-orange-600 rounded-lg bg-gray-50">
              <FaClipboardCheck className="text-orange-600 text-3xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Formation' : 'التدريب'}
              </h3>
              <p className="text-gray-700">
                {language === 'fr' ? 'Façonne le contenu de nos programmes de renforcement des capacités' : 'تشكل محتوى برامج بناء القدرات لدينا'}
              </p>
            </div>
            <div className="text-center p-5 border-b-4 border-orange-600 rounded-lg bg-gray-50">
              <FaUsers className="text-orange-600 text-3xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Sensibilisation du public' : 'التوعية العامة'}
              </h3>
              <p className="text-gray-700">
                {language === 'fr' ? 'Traduite en matériels accessibles pour l\'éducation du public' : 'تترجم إلى مواد ميسرة للتثقيف العام'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/programs" 
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            {language === 'fr' ? 'Retour aux programmes' : 'العودة إلى البرامج'}
          </Link>
        </div>
      </div>
    </div>
  );
} 