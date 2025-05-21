'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import AdminSidebar from '@/components/AdminSidebar';
import { getExactPageContent, setPageContent, PageContent } from '@/lib/database';
import PageContentEditor from '@/components/PageContentEditor';

// Custom event name for content updates
const CONTENT_UPDATED_EVENT = 'content_updated';

export default function EditReviewPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pageContent, setPageData] = useState<PageContent | null>(null);

  // Create a memoized loadPageContent function that can be used in event handlers
  const loadPageContent = useCallback(() => {
    // Get the exact page content (from editor or live)
    const content = getExactPageContent('review');
    
    // Initialize with default content if empty
    if (!content.sections || content.sections.length === 0) {
      content.sections = [
        {
          id: 'intro',
          title: {
            fr: 'Revue & Publications',
            ar: 'المراجعة والمنشورات'
          },
          content: {
            fr: 'Explorez nos analyses et publications sur les droits humains et les enjeux juridiques actuels',
            ar: 'استكشف تحليلاتنا ومنشوراتنا حول حقوق الإنسان والقضايا القانونية الحالية'
          }
        },
        {
          id: 'coming_soon',
          title: {
            fr: 'Notre première revue arrive en juillet 2025 !',
            ar: 'تصدر مجلتنا الأولى في يوليو 2025!'
          },
          content: {
            fr: 'Nous avons le plaisir de vous annoncer que la première édition de notre revue sera publiée en juillet 2025. Cette revue trimestrielle abordera les questions juridiques, les droits humains et les enjeux sociaux actuels.',
            ar: 'يسرنا أن نعلن أن العدد الأول من مجلتنا سيصدر في يوليو 2025. ستتناول هذه المجلة الفصلية القضايا القانونية وحقوق الإنسان والقضايا الاجتماعية الحالية.'
          }
        },
        {
          id: 'contribution',
          title: {
            fr: 'Vous souhaitez contribuer ?',
            ar: 'هل ترغب في المساهمة؟'
          },
          content: {
            fr: 'Nous invitons les chercheurs, juristes, académiciens et experts à contribuer à notre revue. Si vous souhaitez soumettre un article ou partager votre expertise, n\'hésitez pas à nous contacter via notre formulaire de contact ou sur nos réseaux sociaux.',
            ar: 'ندعو الباحثين والمحامين والأكاديميين والخبراء للمساهمة في مجلتنا. إذا كنت ترغب في تقديم مقالة أو مشاركة خبرتك، فلا تتردد في الاتصال بنا من خلال نموذج الاتصال الخاص بنا أو على وسائل التواصل الاجتماعي.'
          }
        },
        {
          id: 'recent_publications',
          title: {
            fr: 'Publications récentes',
            ar: 'المنشورات الحديثة'
          },
          content: {
            fr: 'Découvrez l\'ensemble de nos ressources documentaires sur les droits humains et les questions juridiques.',
            ar: 'اكتشف جميع مواردنا الوثائقية حول حقوق الإنسان والقضايا القانونية.'
          }
        },
        {
          id: 'media_library',
          title: {
            fr: 'Médiathèque',
            ar: 'مكتبة الوسائط'
          },
          content: {
            fr: 'Explorez notre collection de ressources audiovisuelles sur les droits humains.',
            ar: 'استكشف مجموعتنا من الموارد السمعية البصرية حول حقوق الإنسان.'
          }
        },
        {
          id: 'featured',
          title: {
            fr: 'Publication à la une',
            ar: 'المنشور المميز'
          },
          content: {
            fr: 'Notre rapport annuel présente un aperçu complet de l\'état des droits humains en Algérie.\n\nRapport annuel 2023\nMai 2023 | 120 pages\nCe rapport présente un aperçu complet de l\'état des droits humains en Algérie en 2023. Il aborde les avancées et défis dans différents domaines, notamment les libertés civiles, les droits économiques et sociaux, et l\'accès à la justice.',
            ar: 'يقدم تقريرنا السنوي نظرة شاملة عن حالة حقوق الإنسان في الجزائر.\n\nالتقرير السنوي 2023\nمايو 2023 | 120 صفحة\nيقدم هذا التقرير نظرة شاملة عن حالة حقوق الإنسان في الجزائر في عام 2023. ويتناول التقدم والتحديات في مختلف المجالات، بما في ذلك الحريات المدنية والحقوق الاقتصادية والاجتماعية والوصول إلى العدالة.'
          }
        }
      ];
      
      // Save the initialized content
      setPageContent(content);
    }
    
    setPageData(content);
    setIsLoading(false);
    
    // Add null check before accessing sections.map
    console.log('Review page editor - Loaded content with sections:', content?.sections?.map(s => s.id) || []);
  }, []);

  useEffect(() => {
    setIsClient(true);
    
    // Initial content load
    loadPageContent();
    
    // Add event listeners for content updates
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'page_review' || event.key === 'editor_review') {
        console.log('Review page editor - Storage change detected');
        loadPageContent();
      }
    };
    
    const handleContentUpdated = () => {
      console.log('Review page editor - Content updated event received');
      loadPageContent();
    };
    
    // Listen for direct localStorage changes
    window.addEventListener('storage', handleStorageChange);
    
    // Listen for our custom content updated event
    window.addEventListener(CONTENT_UPDATED_EVENT, handleContentUpdated);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener(CONTENT_UPDATED_EVENT, handleContentUpdated);
    };
  }, [loadPageContent]);

  const handleSave = async (content: PageContent): Promise<boolean> => {
    try {
      // Save the content to localStorage
      const success = setPageContent(content);
      
      if (success) {
        // Force immediate update of the component state
        setPageData(content);
        
        // Dispatch a custom event to notify all components that content has been updated
        window.dispatchEvent(new Event(CONTENT_UPDATED_EVENT));
        
        // Force re-rendering of other components by triggering localStorage event
        window.dispatchEvent(new StorageEvent('storage', {
          key: `page_review`,
          newValue: JSON.stringify(content)
        }));
        
        setTimeout(() => {
          router.push('/admin/pages');
        }, 1500);
      }
      
      return success;
    } catch (error) {
      console.error('Error saving content', error);
      return false;
    }
  };

  // Only render on client side to avoid hydration issues
  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminSidebar />
      
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Link 
              href="/admin/pages" 
              className="mr-4 p-2 bg-white rounded-md shadow hover:shadow-md"
            >
              <FaArrowLeft className="text-gray-600" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">
              {language === 'fr' ? 'Éditer la page Revue & Publications' : 'تحرير صفحة المراجعة والمنشورات'}
            </h1>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-600 mb-6">
            {language === 'fr' 
              ? 'Modifiez le contenu de la page Revue & Publications ci-dessous. Les modifications seront visibles sur le site après l\'enregistrement.'
              : 'قم بتعديل محتوى صفحة المراجعة والمنشورات أدناه. ستظهر التغييرات على الموقع بعد الحفظ.'}
          </p>
          
          <PageContentEditor
            pageId="review"
            initialContent={pageContent}
            onSave={handleSave}
            isLoading={isLoading}
          />
        </div>
      </main>
    </div>
  );
} 