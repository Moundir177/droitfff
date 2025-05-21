'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaSignInAlt, FaLock } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AdminLoginPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock authentication - in production use a secure auth service
    // Default credentials: admin/admin123 (to be changed after first login)
    setTimeout(() => {
      if (credentials.username === 'admin' && credentials.password === 'admin123') {
        // Store auth state in localStorage (use a more secure approach in production)
        localStorage.setItem('adminAuth', 'true');
        router.push('/admin/dashboard');
      } else {
        setError(language === 'fr' ? 
          'Nom d\'utilisateur ou mot de passe incorrect' : 
          'اسم المستخدم أو كلمة المرور غير صحيحة');
      }
      setLoading(false);
    }, 800);
  };

  const textAlign = language === 'ar' ? 'text-right' : 'text-left';
  const flexDirection = language === 'ar' ? 'flex-row-reverse' : 'flex-row';

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#8FD694] px-6 py-8 text-white text-center">
          <FaLock className="text-4xl mx-auto mb-3" />
          <h1 className="text-2xl font-bold">
            {language === 'fr' ? 'Administration du Site' : 'إدارة الموقع'}
          </h1>
          <p className="mt-2 text-green-50">
            {language === 'fr' ? 'Connectez-vous pour gérer le contenu du site' : 'تسجيل الدخول لإدارة محتوى الموقع'}
          </p>
        </div>
        
        <div className="px-6 py-8">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className={textAlign}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                {language === 'fr' ? 'Nom d\'utilisateur' : 'اسم المستخدم'}
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8FD694]"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                {language === 'fr' ? 'Mot de passe' : 'كلمة المرور'}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8FD694]"
                required
              />
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#8FD694] text-white px-6 py-2 rounded hover:bg-[#7ac683] transition-colors flex items-center"
              >
                {loading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                ) : (
                  <FaSignInAlt className="mr-2" />
                )}
                {language === 'fr' ? 'Se connecter' : 'تسجيل الدخول'}
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <Link href="/" className="text-[#8FD694] hover:underline">
              {language === 'fr' ? '← Retour au site' : '← العودة إلى الموقع'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 