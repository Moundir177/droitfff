'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaCloudUploadAlt, FaImage, FaTrash } from 'react-icons/fa';

interface ImageUploaderProps {
  initialImage?: string;
  onImageChange: (imageData: string) => void;
  className?: string;
  height?: string;
}

export default function ImageUploader({ 
  initialImage, 
  onImageChange, 
  className = '',
  height = 'h-64'
}: ImageUploaderProps) {
  const { language } = useLanguage();
  const [image, setImage] = useState<string | null>(initialImage || null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      setIsDragging(true);
    }
  }, []);

  const processFile = useCallback((file: File) => {
    if (!file.type.match('image.*')) {
      alert(language === 'fr' 
        ? 'Veuillez sélectionner une image valide' 
        : 'الرجاء تحديد صورة صالحة');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        const imageData = e.target.result as string;
        setImage(imageData);
        onImageChange(imageData);
      }
    };
    reader.readAsDataURL(file);
  }, [language, onImageChange]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      processFile(file);
    }
  }, [processFile]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      processFile(file);
    }
  }, [processFile]);

  const handleRemoveImage = useCallback(() => {
    setImage(null);
    onImageChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [onImageChange]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`relative ${className}`}>
      <div 
        className={`${height} w-full border-2 ${isDragging ? 'border-[#8FD694] bg-[#8FD694]/10' : 'border-dashed border-gray-300'} 
                  rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-200`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {image ? (
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={language === 'fr' ? "Image téléchargée" : "صورة تم تحميلها"}
              fill
              className="object-contain rounded-lg"
            />
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveImage();
              }}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
            >
              <FaTrash size={14} />
            </button>
          </div>
        ) : (
          <>
            <FaCloudUploadAlt className="text-gray-400 mb-2" size={32} />
            <p className="text-gray-500 text-center px-4">
              {language === 'fr' 
                ? 'Glissez et déposez une image ici ou cliquez pour sélectionner' 
                : 'اسحب وأفلت صورة هنا أو انقر للتحديد'}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              {language === 'fr' 
                ? 'Formats acceptés: JPG, PNG, GIF' 
                : 'التنسيقات المقبولة: JPG، PNG، GIF'}
            </p>
          </>
        )}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
    </div>
  );
} 