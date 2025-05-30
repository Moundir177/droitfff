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

export default function EditTestimonialsPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pageContent, setPageData] = useState<PageContent | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Create a memoized loadPageContent function that can be used in event handlers
  const loadPageContent = useCallback(() => {
    // Get the exact page content (from editor or live)
    const content = getExactPageContent('testimonials');
    
    // Initialize with default content if empty
    if (!content.sections || content.sections.length === 0) {
      content.sections = [
        {
          id: 'intro',
          title: {
            fr: 'Témoignages',
            ar: 'الشهادات'
          },
          content: {
            fr: 'Découvrez ce que nos bénéficiaires, partenaires et volontaires disent de notre travail',
            ar: 'اكتشف ما يقوله المستفيدون وشركاؤنا ومتطوعونا عن عملنا'
          }
        },
        {
          id: 'header',
          title: {
            fr: 'Ce qu\'ils disent de nous',
            ar: 'ما يقولونه عنا'
          },
          content: {
            fr: 'Voici les témoignages de personnes et d\'organisations qui ont bénéficié de nos programmes et collaboré avec nous.',
            ar: 'فيما يلي شهادات من الأشخاص والمنظمات التي استفادت من برامجنا وتعاونت معنا.'
          }
        },
        {
          id: 'categories',
          title: {
            fr: 'Catégories',
            ar: 'الفئات'
          },
          content: {
            fr: 'Tous\nBénéficiaires\nPartenaires\nVolontaires\nExperts',
            ar: 'الكل\nالمستفيدون\nالشركاء\nالمتطوعون\nالخبراء'
          }
        },
        {
          id: 'coming_soon',
          title: {
            fr: 'Témoignages à venir',
            ar: 'شهادات قادمة'
          },
          content: {
            fr: 'Nous sommes en train de recueillir des témoignages de nos bénéficiaires, partenaires et volontaires. Revenez bientôt pour découvrir leurs expériences avec notre fondation.',
            ar: 'نحن نجمع الشهادات من المستفيدين وشركائنا ومتطوعينا. عد قريبًا لاكتشاف تجاربهم مع مؤسستنا.'
          }
        },
        {
          id: 'share',
          title: {
            fr: 'Partagez votre expérience',
            ar: 'شارك تجربتك'
          },
          content: {
            fr: 'Avez-vous participé à l\'un de nos programmes ou collaboré avec nous ? Nous serions ravis d\'entendre votre histoire.',
            ar: 'هل شاركت في أحد برامجنا أو تعاونت معنا؟ يسعدنا سماع قصتك.'
          }
        },
        {
          id: 'form',
          title: {
            fr: 'Formulaire de témoignage',
            ar: 'نموذج الشهادة'
          },
          content: {
            fr: 'Nom complet\nEmail\nOrganisation\nRôle / Fonction\nVotre expérience avec nous\nPartagez votre expérience en détail...\nVotre évaluation\nSoumettre votre témoignage',
            ar: 'الاسم الكامل\nالبريد الإلكتروني\nالمنظمة\nالدور / الوظيفة\nتجربتك معنا\nشارك تجربتك بالتفصيل...\nتقييمك\nإرسال شهادتك'
          }
        }
      ];
      
      // Save the initialized content
      setPageContent(content);
    }
    
    setPageData(content);
    setIsLoading(false);
    
    // Add null check before accessing sections.map
    console.log('Testimonials page editor - Loaded content with sections:', content?.sections?.map(s => s.id) || []);
  }, []);

  useEffect(() => {
    setIsClient(true);
    
    // Initial content load
    loadPageContent();
    
    // Add event listeners for content updates
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'page_testimonials' || event.key === 'editor_testimonials') {
        console.log('Testimonials page editor - Storage change detected');
        loadPageContent();
      }
    };
    
    const handleContentUpdated = () => {
      console.log('Testimonials page editor - Content updated event received');
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
        
        // Set success message
        setSaveSuccess(true);
        
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
              {language === 'fr' ? 'Éditer la page Témoignages' : 'تحرير صفحة الشهادات'}
            </h1>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-600 mb-6">
            {language === 'fr' 
              ? 'Modifiez le contenu de la page Témoignages ci-dessous. Les modifications seront visibles sur le site après l\'enregistrement.'
              : 'قم بتعديل محتوى صفحة الشهادات أدناه. ستظهر التغييرات على الموقع بعد الحفظ.'}
          </p>
          
          {saveSuccess && (
            <div className="bg-green-100 text-green-800 p-4 mb-4 rounded">
              {language === 'fr' 
                ? 'Modifications enregistrées avec succès!' 
                : 'تم حفظ التغييرات بنجاح!'}
            </div>
          )}
          
          <PageContentEditor
            pageId="testimonials"
            initialContent={pageContent}
            onSave={handleSave}
            isLoading={isLoading}
          />
        </div>
      </main>
    </div>
  );
} 