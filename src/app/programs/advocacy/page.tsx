'use client';

import { FaBullhorn, FaUsers, FaNewspaper, FaComments, FaUniversity } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const advocacyInitiatives = [
  {
    titleFr: 'Campagnes de sensibilisation du public',
    titleAr: 'حملات التوعية العامة',
    descriptionFr: 'Campagnes médiatiques, sur les réseaux sociaux et communautaires pour sensibiliser aux questions des droits humains et promouvoir une culture des droits.',
    descriptionAr: 'حملات إعلامية واجتماعية ومجتمعية لزيادة الوعي بقضايا حقوق الإنسان وتعزيز ثقافة الحقوق.',
    icon: <FaUsers className="text-white" />,
    highlightsFr: 'Focus récent: Droit à l\'information et droits numériques',
    highlightsAr: 'التركيز الحديث: الحق في المعلومات والحقوق الرقمية'
  },
  {
    titleFr: 'Plaidoyer pour la réforme des politiques',
    titleAr: 'الدعوة لإصلاح السياسات',
    descriptionFr: 'Plaidoyer fondé sur la recherche pour des réformes politiques et juridiques qui renforcent la protection des droits humains et s\'alignent sur les normes internationales.',
    descriptionAr: 'دعوة قائمة على البحث لإصلاحات سياسية وقانونية تعزز حماية حقوق الإنسان وتتماشى مع المعايير الدولية.',
    icon: <FaUniversity className="text-white" />,
    highlightsFr: 'Focus récent: Loi sur la société civile et liberté d\'association',
    highlightsAr: 'التركيز الحديث: قانون المجتمع المدني وحرية تكوين الجمعيات'
  },
  {
    titleFr: 'Engagement médiatique',
    titleAr: 'المشاركة الإعلامية',
    descriptionFr: 'Travailler avec les journalistes et les médias pour améliorer les reportages sur les droits humains et augmenter la couverture des questions liées aux droits.',
    descriptionAr: 'العمل مع الصحفيين ووسائل الإعلام لتحسين تقارير حقوق الإنسان وزيادة تغطية القضايا المتعلقة بالحقوق.',
    icon: <FaNewspaper className="text-white" />,
    highlightsFr: 'Focus récent: Formation des journalistes et surveillance des médias',
    highlightsAr: 'التركيز الحديث: تدريب الصحفيين ومراقبة وسائل الإعلام'
  },
  {
    titleFr: 'Dialogues communautaires',
    titleAr: 'الحوارات المجتمعية',
    descriptionFr: 'Faciliter les conversations entre les communautés, les autorités et d\'autres parties prenantes pour aborder les préoccupations locales en matière de droits humains.',
    descriptionAr: 'تسهيل المحادثات بين المجتمعات والسلطات وأصحاب المصلحة الآخرين لمعالجة مخاوف حقوق الإنسان المحلية.',
    icon: <FaComments className="text-white" />,
    highlightsFr: 'Focus récent: Droits des femmes et participation des jeunes',
    highlightsAr: 'التركيز الحديث: حقوق المرأة ومشاركة الشباب'
  }
];

const campaigns = [
  {
    titleFr: "Connaissez vos droits",
    titleAr: "اعرف حقوقك",
    year: "2022-Présent",
    descriptionFr: "Une campagne nationale de sensibilisation aux droits fondamentaux protégés par la loi algérienne et les conventions internationales.",
    descriptionAr: "حملة وطنية للتوعية بالحقوق الأساسية المحمية بموجب القانون الجزائري والاتفاقيات الدولية.",
    resultsFr: "A touché plus de 100 000 personnes via les réseaux sociaux, les événements communautaires et les supports éducatifs.",
    resultsAr: "وصلت إلى أكثر من 100,000 شخص من خلال وسائل التواصل الاجتماعي والفعاليات المجتمعية والمواد التعليمية."
  },
  {
    titleFr: "Jeunes pour les droits",
    titleAr: "الشباب من أجل الحقوق",
    year: "2021-2022",
    descriptionFr: "Impliquer les jeunes en tant que défenseurs des droits humains et militants au sein de leurs communautés et écoles.",
    descriptionAr: "إشراك الشباب كمدافعين عن حقوق الإنسان ومناصرين داخل مجتمعاتهم ومدارسهم.",
    resultsFr: "Formation de 150 jeunes leaders qui ont organisé plus de 40 événements de sensibilisation dans les écoles et universités.",
    resultsAr: "تدريب 150 قائدًا شابًا نظموا أكثر من 40 فعالية توعوية في المدارس والجامعات."
  },
  {
    titleFr: "Voix des femmes, droits des femmes",
    titleAr: "صوت المرأة، حقوق المرأة",
    year: "2019-2021",
    descriptionFr: "Plaider pour une protection juridique plus forte pour les femmes et une participation accrue des femmes à la prise de décision.",
    descriptionAr: "الدعوة إلى حماية قانونية أقوى للمرأة وزيادة مشاركة المرأة في صنع القرار.",
    resultsFr: "A contribué aux dialogues politiques aboutissant à une meilleure mise en œuvre des dispositions relatives à l'égalité des genres.",
    resultsAr: "ساهمت في حوارات السياسات مما أدى إلى تحسين تنفيذ أحكام المساواة بين الجنسين."
  }
];

export default function AdvocacyProgram() {
  const { language } = useLanguage();
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'fr' ? 'Plaidoyer & Sensibilisation' : 'المناصرة والتوعية'}
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 mb-8">
            {language === 'fr' 
              ? 'Grâce à des initiatives stratégiques de plaidoyer et de sensibilisation, nous promouvons les principes des droits humains, plaidons pour des réformes juridiques et engageons le public dans la défense des droits.'
              : 'من خلال مبادرات استراتيجية للمناصرة والتوعية، نعمل على تعزيز مبادئ حقوق الإنسان، والدعوة إلى إصلاحات قانونية، وإشراك الجمهور في الدفاع عن الحقوق.'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <FaBullhorn className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {language === 'fr' ? 'Aperçu du programme' : 'نظرة عامة على البرنامج'}
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              {language === 'fr'
                ? 'Notre programme de Plaidoyer & Sensibilisation combine des campagnes stratégiques, l\'engagement des parties prenantes et l\'éducation du public pour promouvoir les principes des droits humains et plaider pour des réformes juridiques et politiques qui renforcent la protection des droits.'
                : 'يجمع برنامج المناصرة والتوعية لدينا بين الحملات الاستراتيجية، ومشاركة أصحاب المصلحة، وتثقيف الجمهور لتعزيز مبادئ حقوق الإنسان والدعوة إلى إصلاحات قانونية وسياسية تعزز حماية الحقوق.'}
            </p>
            <p className="text-gray-700 mb-4">
              {language === 'fr'
                ? 'Nous employons une gamme diversifiée d\'outils et d\'approches de plaidoyer, adaptés à des problématiques et contextes spécifiques, pour maximiser notre impact et atteindre différents publics.'
                : 'نستخدم مجموعة متنوعة من أدوات ومناهج المناصرة، مصممة خصيصًا لقضايا وسياقات محددة، لتعظيم تأثيرنا والوصول إلى جماهير مختلفة.'}
            </p>
            <p className="text-gray-700">
              {language === 'fr'
                ? 'Notre plaidoyer est toujours fondé sur des recherches rigoureuses, des preuves documentées et les expériences vécues par les communautés affectées, garantissant que notre travail est crédible et répond aux besoins réels.'
                : 'تستند مناصرتنا دائمًا إلى بحوث دقيقة وأدلة موثقة وتجارب المجتمعات المتأثرة، مما يضمن أن عملنا موثوق به ويستجيب للاحتياجات الحقيقية.'}
            </p>
          </div>
          
          <div className="bg-green-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">
              {language === 'fr' ? 'Approche de plaidoyer' : 'نهج المناصرة'}
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                {language === 'fr' ? 'Fondée sur des preuves' : 'قائم على الأدلة'}
              </h3>
              <p>
                {language === 'fr'
                  ? 'Notre plaidoyer s\'appuie sur la recherche, la documentation et l\'analyse pour garantir que nos positions sont bien fondées et crédibles.'
                  : 'تستند مناصرتنا إلى البحث والتوثيق والتحليل لضمان أن مواقفنا مؤسسة جيدًا وذات مصداقية.'}
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                {language === 'fr' ? 'Inclusive & Participative' : 'شاملة وتشاركية'}
              </h3>
              <p>
                {language === 'fr'
                  ? 'Nous plaçons les voix et les expériences des communautés affectées au centre de notre plaidoyer, assurant leur participation significative.'
                  : 'نضع أصوات وتجارب المجتمعات المتأثرة في صميم مناصرتنا، مما يضمن مشاركتهم الهادفة.'}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                {language === 'fr' ? 'Stratégique & Ciblée' : 'استراتيجية ومستهدفة'}
              </h3>
              <p>
                {language === 'fr'
                  ? 'Nous développons des objectifs clairs et identifions les principales parties prenantes et décideurs pour maximiser l\'impact de nos efforts de plaidoyer.'
                  : 'نطور أهدافًا واضحة ونحدد أصحاب المصلحة الرئيسيين وصناع القرار لتعظيم تأثير جهود المناصرة لدينا.'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {language === 'fr' ? 'Initiatives de plaidoyer' : 'مبادرات المناصرة'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {advocacyInitiatives.map((initiative, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-green-600 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    {initiative.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {language === 'fr' ? initiative.titleFr : initiative.titleAr}
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  {language === 'fr' ? initiative.descriptionFr : initiative.descriptionAr}
                </p>
                <div className="bg-green-100 text-green-800 p-3 rounded-lg">
                  <span className="font-bold">
                    {language === 'fr' ? 'Focus: ' : 'التركيز: '}
                  </span>
                  {language === 'fr' ? initiative.highlightsFr : initiative.highlightsAr}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {language === 'fr' ? 'Campagnes récentes' : 'الحملات الأخيرة'}
          </h2>
          
          <div className="space-y-8">
            {campaigns.map((campaign, index) => (
              <div key={index} className="border-l-4 border-green-600 pl-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {language === 'fr' ? campaign.titleFr : campaign.titleAr}
                  </h3>
                  <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm">
                    {campaign.year}
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  {language === 'fr' ? campaign.descriptionFr : campaign.descriptionAr}
                </p>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <span className="font-bold">
                    {language === 'fr' ? 'Résultats: ' : 'النتائج: '}
                  </span>
                  {language === 'fr' ? campaign.resultsFr : campaign.resultsAr}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Engagement des parties prenantes' : 'مشاركة أصحاب المصلحة'}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'fr'
                ? 'Notre plaidoyer implique l\'engagement avec une gamme diverse de parties prenantes pour créer un soutien aux réformes des droits humains et créer des opportunités de dialogue et de collaboration.'
                : 'تتضمن مناصرتنا التعامل مع مجموعة متنوعة من أصحاب المصلحة لبناء الدعم لإصلاحات حقوق الإنسان وخلق فرص للحوار والتعاون.'}
            </p>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              {language === 'fr' ? 'Parties prenantes clés:' : 'أصحاب المصلحة الرئيسيون:'}
            </h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">
                  {language === 'fr' ? 'Institutions gouvernementales et décideurs politiques' : 'المؤسسات الحكومية وصناع السياسات'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">
                  {language === 'fr' ? 'Organisations et réseaux de la société civile' : 'منظمات وشبكات المجتمع المدني'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">
                  {language === 'fr' ? 'Médias et journalistes' : 'وسائل الإعلام والصحفيون'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">
                  {language === 'fr' ? 'Mécanismes internationaux des droits humains' : 'آليات حقوق الإنسان الدولية'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">
                  {language === 'fr' ? 'Institutions académiques et chercheurs' : 'المؤسسات الأكاديمية والباحثون'}
                </span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Matériels éducatifs' : 'المواد التعليمية'}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'fr'
                ? 'Nous développons et distribuons une gamme de matériels éducatifs pour soutenir nos efforts de plaidoyer et de sensibilisation, rendant les principes des droits humains accessibles à divers publics.'
                : 'نقوم بتطوير وتوزيع مجموعة من المواد التعليمية لدعم جهودنا في المناصرة والتوعية، مما يجعل مبادئ حقوق الإنسان في متناول مختلف الجماهير.'}
            </p>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              {language === 'fr' ? 'Ressources disponibles:' : 'الموارد المتاحة:'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <FaNewspaper className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {language === 'fr' ? 'Livrets de sensibilisation aux droits' : 'كتيبات التوعية بالحقوق'}
                  </h4>
                  <p className="text-gray-700">
                    {language === 'fr' ? 'Guides simplifiés sur les droits fondamentaux en arabe et français' : 'أدلة مبسطة للحقوق الأساسية باللغتين العربية والفرنسية'}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <FaNewspaper className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {language === 'fr' ? 'Notes d\'orientation politique' : 'موجزات السياسات'}
                  </h4>
                  <p className="text-gray-700">
                    {language === 'fr' ? 'Analyse des questions de droits humains et recommandations politiques' : 'تحليل قضايا حقوق الإنسان وتوصيات السياسات'}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <FaNewspaper className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {language === 'fr' ? 'Ressources multimédias' : 'موارد الوسائط المتعددة'}
                  </h4>
                  <p className="text-gray-700">
                    {language === 'fr' ? 'Vidéos, infographies et contenu pour les réseaux sociaux sur les questions de droits' : 'مقاطع فيديو ورسومات معلوماتية ومحتوى وسائل التواصل الاجتماعي حول قضايا الحقوق'}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {language === 'fr' ? 'Participez' : 'شارك معنا'}
          </h2>
          <p className="text-center text-gray-700 mb-8">
            {language === 'fr'
              ? 'Rejoignez nos efforts de plaidoyer et aidez à promouvoir la sensibilisation aux droits humains dans votre communauté.'
              : 'انضم إلى جهود المناصرة لدينا وساعد في تعزيز الوعي بحقوق الإنسان في مجتمعك.'}
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Partagez' : 'شارك'}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === 'fr' ? 'Suivez et partagez nos campagnes sur les réseaux sociaux' : 'تابع وشارك حملاتنا على وسائل التواصل الاجتماعي'}
              </p>
              <a href="#" className="text-green-600 font-bold hover:underline">
                {language === 'fr' ? 'Suivez-nous' : 'تابعنا'}
              </a>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Bénévolat' : 'تطوع'}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === 'fr' ? 'Rejoignez notre équipe de bénévoles pour les campagnes' : 'انضم إلى فريق المتطوعين لدينا للحملات'}
              </p>
              <a href="#" className="text-green-600 font-bold hover:underline">
                {language === 'fr' ? 'Postulez maintenant' : 'قدم الآن'}
              </a>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Défendez' : 'دافع'}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === 'fr' ? 'Devenez un défenseur des droits humains dans votre communauté' : 'كن مدافعًا عن حقوق الإنسان في مجتمعك'}
              </p>
              <a href="#" className="text-green-600 font-bold hover:underline">
                {language === 'fr' ? 'Apprenez comment' : 'تعلم كيف'}
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/programs" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            {language === 'fr' ? 'Retour aux programmes' : 'العودة إلى البرامج'}
          </Link>
        </div>
      </div>
    </div>
  );
} 