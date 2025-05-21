'use client';

import { FaChalkboardTeacher, FaUsers, FaCertificate, FaHandsHelping, FaGraduationCap } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const trainingModules = [
  {
    title: 'Human Rights Documentation',
    description: 'Learn methodologies for documenting human rights violations, including interviewing victims, gathering evidence, and reporting mechanisms.',
    icon: <FaUsers className="text-white" />,
    duration: '3 days',
    image: '/images/training/workshop.jpg'
  },
  {
    title: 'Advocacy Strategies',
    description: 'Develop effective advocacy campaigns for human rights issues, including stakeholder mapping, messaging, and mobilization techniques.',
    icon: <FaHandsHelping className="text-white" />,
    duration: '2 days',
    image: '/images/training/discussion.jpg'
  },
  {
    title: 'Digital Security',
    description: 'Protect sensitive information and communications with digital security tools and protocols essential for human rights defenders.',
    icon: <FaGraduationCap className="text-white" />,
    duration: '2 days',
    image: '/images/training/digital-security.jpg'
  },
  {
    title: 'Legal Frameworks',
    description: 'Understand international human rights frameworks, domestic laws, and how to leverage legal mechanisms for rights protection.',
    icon: <FaCertificate className="text-white" />,
    duration: '3 days',
    image: '/images/training/classroom.jpg'
  }
];

const testimonials = [
  {
    quote: "The training transformed our organization's approach to human rights documentation. We now have systematic methods that make our advocacy more effective.",
    author: "Fatima K.",
    organization: "Women's Rights Association, Algiers"
  },
  {
    quote: "The skills I gained in digital security have been invaluable for our work in sensitive areas. Our communications and data are now much better protected.",
    author: "Ahmed M.",
    organization: "Youth Activists Network, Oran"
  },
  {
    quote: "The legal frameworks module helped us identify the most effective legal pathways for our advocacy. We've seen tangible results in our recent campaigns.",
    author: "Nadia B.",
    organization: "Civil Society Coalition, Constantine"
  }
];

export default function TrainingProgram() {
  const { language } = useLanguage();
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'fr' ? 'Renforcement des capacités & Formation' : 'بناء القدرات والتدريب'}
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 mb-8">
            {language === 'fr'
              ? 'Nos programmes de formation complets renforcent la capacité des organisations de la société civile et des militants à promouvoir et protéger efficacement les droits humains.'
              : 'تعزز برامج التدريب الشاملة لدينا قدرة منظمات المجتمع المدني والناشطين على تعزيز وحماية حقوق الإنسان بشكل فعال.'}
          </p>
        </div>
        
        {/* Foundation Image Banner */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/programs/foundation-image.jpg" 
              alt={language === 'fr' ? "Image de formation" : "صورة التدريب"} 
              fill
              style={{objectFit: "cover"}}
              priority
              className="transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 to-transparent flex items-center">
              <div className="px-8 md:px-16 max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {language === 'fr' ? 'Renforcer les compétences' : 'تعزيز المهارات'}
                </h2>
                <p className="text-white text-lg">
                  {language === 'fr' 
                    ? 'Former la prochaine génération de défenseurs des droits humains'
                    : 'تدريب الجيل القادم من المدافعين عن حقوق الإنسان'}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-[200px]">
              <Image
                src="/images/training/classroom.jpg"
                alt={language === 'fr' ? "Formation en salle de classe" : "التدريب في الفصل الدراسي"}
                fill
                style={{objectFit: "cover"}}
              />
            </div>
            <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <FaChalkboardTeacher className="text-white text-xl" />
              </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'fr' ? 'Aperçu du programme' : 'نظرة عامة على البرنامج'}
                </h2>
            </div>
            <p className="text-gray-700 mb-4">
                {language === 'fr'
                  ? 'Notre programme de renforcement des capacités propose des modules de formation spécialisés conçus pour doter les organisations de la société civile, les militants et les dirigeants communautaires des connaissances, des compétences et des outils dont ils ont besoin pour défendre efficacement les droits humains.'
                  : 'يقدم برنامج بناء القدرات لدينا وحدات تدريبية متخصصة مصممة لتزويد منظمات المجتمع المدني والناشطين وقادة المجتمع بالمعرفة والمهارات والأدوات التي يحتاجون إليها للدفاع بفعالية عن حقوق الإنسان.'}
            </p>
            <p className="text-gray-700 mb-4">
                {language === 'fr'
                  ? 'Chaque module de formation combine apprentissage théorique et exercices pratiques, garantissant que les participants peuvent immédiatement appliquer ce qu\'ils ont appris dans leur travail.'
                  : 'يجمع كل وحدة تدريبية بين التعلم النظري والتمارين العملية، مما يضمن أن المشاركين يمكنهم تطبيق ما تعلموه على الفور في عملهم.'}
            </p>
            </div>
          </div>
          
          <div className="bg-blue-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">
              {language === 'fr' ? 'Points forts du programme' : 'أبرز نقاط البرنامج'}
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-300 mr-2 text-xl">•</span>
                <span><strong>38+</strong> {language === 'fr' ? 'sessions de formation spécialisées menées depuis 2010' : 'دورة تدريبية متخصصة أجريت منذ عام 2010'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2 text-xl">•</span>
                <span><strong>760+</strong> {language === 'fr' ? 'personnes formées dans différentes régions' : 'فرد تم تدريبهم في مناطق مختلفة'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2 text-xl">•</span>
                <span><strong>25+</strong> {language === 'fr' ? 'organisations partenaires ont collaboré à la prestation de formations' : 'منظمة شريكة تعاونت في تقديم التدريب'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2 text-xl">•</span>
                <span><strong>90%</strong> {language === 'fr' ? 'des participants ont signalé une amélioration des capacités après la formation' : 'من المشاركين أفادوا بتحسن القدرات بعد التدريب'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2 text-xl">•</span>
                <span><strong>4</strong> {language === 'fr' ? 'manuels de formation complets développés en arabe et en français' : 'أدلة تدريبية شاملة تم تطويرها باللغتين العربية والفرنسية'}</span>
              </li>
            </ul>
            
            <div className="mt-8 relative h-[150px] rounded-lg overflow-hidden">
              <Image
                src="/images/training/discussion.jpg"
                alt={language === 'fr' ? "Discussion de groupe" : "مناقشة جماعية"}
                fill
                style={{objectFit: "cover"}}
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {language === 'fr' ? 'Modules de formation' : 'وحدات التدريب'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {trainingModules.map((module, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-600 transition-colors">
                <div className="relative h-[160px]">
                  <Image
                    src={module.image}
                    alt={module.title}
                    fill
                    style={{objectFit: "cover"}}
                  />
                </div>
                <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    {module.icon}
                  </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {language === 'fr' 
                        ? module.title 
                        : index === 0 ? 'توثيق حقوق الإنسان'
                        : index === 1 ? 'استراتيجيات المناصرة'
                        : index === 2 ? 'الأمن الرقمي' 
                        : 'الأطر القانونية'}
                    </h3>
                </div>
                  <p className="text-gray-700 mb-4">
                    {language === 'fr'
                      ? module.description
                      : index === 0 ? 'تعلم منهجيات توثيق انتهاكات حقوق الإنسان، بما في ذلك مقابلة الضحايا، وجمع الأدلة، وآليات الإبلاغ.'
                      : index === 1 ? 'تطوير حملات مناصرة فعالة لقضايا حقوق الإنسان، بما في ذلك تحديد أصحاب المصلحة، والرسائل، وتقنيات التعبئة.'
                      : index === 2 ? 'حماية المعلومات والاتصالات الحساسة باستخدام أدوات وبروتوكولات الأمن الرقمي الأساسية للمدافعين عن حقوق الإنسان.'
                      : 'فهم أطر حقوق الإنسان الدولية، والقوانين المحلية، وكيفية الاستفادة من الآليات القانونية لحماية الحقوق.'}
                  </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm bg-blue-100 text-blue-800 py-1 px-3 rounded-full">
                      {language === 'fr' ? `Durée: ${module.duration}` : `المدة: ${module.duration === '3 days' ? '3 أيام' : '2 أيام'}`}
                  </span>
                  <a href="#" className="text-blue-600 hover:underline text-sm font-bold">
                      {language === 'fr' ? 'Télécharger le syllabus' : 'تحميل المنهج'}
                  </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {language === 'fr' ? 'Notre approche de formation' : 'نهجنا في التدريب'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Évaluation des besoins' : 'تقييم الاحتياجات'}
              </h3>
              <p className="text-gray-700">
                {language === 'fr'
                  ? 'Nous commençons par évaluer les besoins et contextes spécifiques des organisations participantes pour adapter nos programmes de formation en conséquence.'
                  : 'نبدأ بتقييم الاحتياجات والسياقات المحددة للمنظمات المشاركة لتكييف برامجنا التدريبية وفقًا لذلك.'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Apprentissage interactif' : 'التعلم التفاعلي'}
              </h3>
              <p className="text-gray-700">
                {language === 'fr'
                  ? 'Nos formations emploient des méthodologies interactives comprenant des simulations, des études de cas et un apprentissage par les pairs pour maximiser l\'engagement et la rétention.'
                  : 'تستخدم تدريباتنا منهجيات تفاعلية تشمل المحاكاة ودراسات الحالة والتعلم من الأقران لتعظيم المشاركة والاحتفاظ.'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Soutien de suivi' : 'دعم المتابعة'}
              </h3>
              <p className="text-gray-700">
                {language === 'fr'
                  ? 'Nous fournissons un mentorat continu et une assistance technique aux participants après la formation pour soutenir la mise en œuvre des nouvelles connaissances et compétences.'
                  : 'نقدم التوجيه المستمر والمساعدة الفنية للمشاركين بعد التدريب لدعم تنفيذ المعرفة والمهارات الجديدة.'}
              </p>
            </div>
          </div>
          
          <div className="mt-8 relative h-[250px] rounded-lg overflow-hidden">
            <Image
              src="/images/training/workshop.jpg"
              alt={language === 'fr' ? "Atelier de formation" : "ورشة عمل تدريبية"}
              fill
              style={{objectFit: "cover"}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <p className="p-6 text-white text-center w-full">
                {language === 'fr'
                  ? 'Nos formations sont conçues pour être pratiques, pertinentes et transformatrices.'
                  : 'تم تصميم تدريباتنا لتكون عملية وذات صلة وتحويلية.'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 mb-16 text-white">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {language === 'fr' ? 'Ce que disent les participants' : 'ما يقوله المشاركون'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg relative">
                <div className="absolute -top-4 -left-4 text-4xl text-blue-600">"</div>
                <p className="mb-4 italic">
                  {language === 'fr'
                    ? testimonial.quote
                    : index === 0 ? 'لقد حوّل التدريب نهج منظمتنا في توثيق حقوق الإنسان. لدينا الآن طرق منهجية تجعل مناصرتنا أكثر فعالية.'
                    : index === 1 ? 'المهارات التي اكتسبتها في مجال الأمن الرقمي كانت لا تقدر بثمن لعملنا في المناطق الحساسة. أصبحت اتصالاتنا وبياناتنا محمية بشكل أفضل الآن.'
                    : 'ساعدتنا وحدة الأطر القانونية على تحديد المسارات القانونية الأكثر فعالية لمناصرتنا. لقد رأينا نتائج ملموسة في حملاتنا الأخيرة.'}
                </p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">
                    {language === 'fr'
                      ? testimonial.organization
                      : index === 0 ? 'جمعية حقوق المرأة، الجزائر العاصمة'
                      : index === 1 ? 'شبكة الناشطين الشباب، وهران'
                      : 'تحالف المجتمع المدني، قسنطينة'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {language === 'fr' ? 'Demander une formation' : 'طلب تدريب'}
          </h2>
          <p className="text-center text-gray-700 mb-8">
            {language === 'fr'
              ? 'Intéressé par nos programmes de formation pour votre organisation ou communauté ? Contactez-nous pour discuter de la façon dont nous pouvons répondre à vos besoins de renforcement des capacités.'
              : 'مهتم ببرامج التدريب الخاصة بنا لمنظمتك أو مجتمعك؟ اتصل بنا لمناقشة كيف يمكننا دعم احتياجات بناء القدرات الخاصة بك.'}
          </p>
          <div className="text-center">
            <a 
              href="#" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mr-4"
            >
              {language === 'fr' ? 'Contactez-nous' : 'اتصل بنا'}
            </a>
            <a 
              href="#" 
              className="inline-block bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              {language === 'fr' ? 'Télécharger la brochure' : 'تحميل الكتيب'}
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/programs" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            {language === 'fr' ? 'Retour aux programmes' : 'العودة إلى البرامج'}
          </Link>
        </div>
      </div>
    </div>
  );
} 