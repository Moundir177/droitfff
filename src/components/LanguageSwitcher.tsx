import { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';

type Language = 'fr' | 'ar';

interface LanguageSwitcherProps {
  onChange: (lang: Language) => void;
  currentLanguage: Language;
  className?: string;
}

export default function LanguageSwitcher({ onChange, currentLanguage, className = '' }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية' }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: Language) => {
    onChange(lang);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#3cb496] focus:outline-none"
        onClick={toggleDropdown}
      >
        <FaGlobe className="h-4 w-4" />
        <span>{currentLanguage === 'fr' ? 'FR' : 'عر'}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg z-50 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code as Language)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  currentLanguage === language.code 
                    ? 'bg-gray-100 text-[#3cb496] font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                role="menuitem"
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 