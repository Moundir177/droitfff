'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import AdminSidebar from '@/components/AdminSidebar';
import { getExactPageContent, setPageContent, PageContent, updateHomePageWithAllSections } from '@/lib/database';
import PageContentEditor from '@/components/PageContentEditor';

// Custom event name for content updates
const CONTENT_UPDATED_EVENT = 'content_updated';

export default function EditHomePage() {
  const router = useRouter();
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pageContent, setPageData] = useState<PageContent | null>(null);

  // Create a memoized loadPageContent function that can be used in event handlers
  const loadPageContent = useCallback(() => {
    // First make sure all sections are available
    updateHomePageWithAllSections();
    
    // In a real application, this would be an API call
    let content = getExactPageContent('home');
    
    if (content) {
      // Ensure sections are in the correct order
      const desiredOrder = [
        'hero',
        'slogan',
        'mission',
        'impact',
        'objectives',
        'droits_egaux',
        'objectifs_details',
        'mission_details',
        'programmes',
        'actualites',
        'identite_visuelle',
        'newsletter'
      ];
      
      // Create a new array with sections in the desired order
      const orderedSections = [];
      
      // First add sections in the desired order if they exist
      for (const sectionId of desiredOrder) {
        const section = content.sections.find(s => s.id === sectionId);
        if (section) {
          orderedSections.push(section);
        }
      }
      
      // Then add any remaining sections that weren't in the desired order
      content.sections.forEach(section => {
        if (!desiredOrder.includes(section.id)) {
          orderedSections.push(section);
        }
      });
      
      // Update the content with the ordered sections
      content.sections = orderedSections;
      
      // Save the ordered sections
      setPageData(content);
    }
    
    if (!content) {
      // Create default content if none exists
      content = {
        id: 'home',
        title: {
          fr: 'Accueil',
          ar: 'الرئيسية'
        },
        sections: [
          {
            id: 'hero',
            title: {
              fr: 'Bannière principale',
              ar: 'البانر الرئيسي'
            },
            content: {
              fr: 'Fondation pour la Promotion des Droits',
              ar: 'مؤسسة تعزيز الحقوق'
            },
            image: '/images/hero-banner.jpg'
          },
          {
            id: 'slogan',
            title: {
              fr: 'Notre slogan',
              ar: 'شعارنا'
            },
            content: {
              fr: 'Ensemble, pour des droits connus, reconnus et défendus.',
              ar: 'معاً، من أجل حقوق معروفة ومعترف بها ومحمية.'
            }
          },
          {
            id: 'mission',
            title: {
              fr: 'Notre mission',
              ar: 'مهمتنا'
            },
            content: {
              fr: 'Notre mission est de promouvoir et défendre les droits par la sensibilisation, la formation, la documentation des violations et le soutien aux acteurs de la société civile.',
              ar: 'مهمتنا هي تعزيز والدفاع عن الحقوق من خلال التوعية والتدريب وتوثيق الانتهاكات ودعم الفاعلين في المجتمع المدني.'
            }
          },
          {
            id: 'impact',
            title: {
              fr: 'Notre Impact',
              ar: 'تأثيرنا'
            },
            content: {
              fr: '38+ Formations\n760+ Bénéficiaires\n25+ Partenaires\n\nLes chiffres qui reflètent notre engagement et notre impact dans la promotion et la défense des droits.',
              ar: '+38 تدريب\n+760 مستفيد\n+25 شريك\n\nالأرقام التي تعكس التزامنا وتأثيرنا في تعزيز والدفاع عن الحقوق.'
            }
          },
          {
            id: 'objectives',
            title: {
              fr: 'Nos objectifs',
              ar: 'أهدافنا'
            },
            content: {
              fr: 'La Fondation pour la promotion des droits poursuit les objectifs suivants pour concrétiser sa vision d\'une société juste et respectueuse des droits fondamentaux.',
              ar: 'تسعى مؤسسة تعزيز الحقوق لتحقيق الأهداف التالية لتجسيد رؤيتها لمجتمع عادل يحترم الحقوق الأساسية.'
            }
          }
        ]
      };
    }
    
    setPageData(content);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsClient(true);
    
    // Initial content load
    loadPageContent();
    
    // Add event listeners for content updates
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'page_home' || event.key === 'editor_home') {
        loadPageContent();
      }
    };
    
    const handleContentUpdated = () => {
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
          key: `page_${content.id}`,
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
              {language === 'fr' ? 'Éditer la page d\'accueil' : 'تحرير الصفحة الرئيسية'}
            </h1>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-600 mb-6">
            {language === 'fr' 
              ? 'Modifiez le contenu de la page d\'accueil ci-dessous. Les modifications seront visibles sur le site après l\'enregistrement.'
              : 'قم بتعديل محتوى الصفحة الرئيسية أدناه. ستظهر التغييرات على الموقع بعد الحفظ.'}
          </p>
          
          <PageContentEditor
            pageId="home"
            initialContent={pageContent}
            onSave={handleSave}
            isLoading={isLoading}
          />
        </div>
      </main>
    </div>
  );
} 