'use client';

import * as React from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from "@/lib/utils";

export function LanguageSelector() {
  const { currentLanguage, setLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button 
          className={cn(
            "w-full flex items-center gap-2 px-4 py-2.5",
            "text-sm font-medium transition-all duration-200",
            "text-gray-600 hover:text-green-700",
            "border rounded-lg",
            "hover:bg-gray-50 active:bg-gray-100",
            "focus:outline-none focus:ring-2 focus:ring-green-500/20",
            isOpen && "bg-gray-50"
          )}
        >
          <Globe className="w-4 h-4 shrink-0" />
          <span className="flex-1 text-left">{currentLanguage.name}</span>
          <ChevronDown 
            className={cn(
              "w-4 h-4 transition-transform duration-200",
              isOpen && "transform rotate-180"
            )} 
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className={cn(
          "w-[200px] p-1",
          "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
        )}
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              setLanguage(lang);
              setIsOpen(false);
            }}
            className={cn(
              "flex items-center gap-2 cursor-pointer py-2.5 px-3",
              "text-sm font-medium rounded-md",
              "hover:bg-gray-50 focus:bg-gray-50",
              "outline-none transition-colors duration-200",
              "data-[highlighted]:bg-gray-50",
              currentLanguage.code === lang.code && "bg-gray-50"
            )}
          >
            <div className="flex items-center gap-3 flex-1">
              <span className="text-base">{lang.flag}</span>
              <span>{lang.name}</span>
            </div>
            {currentLanguage.code === lang.code && (
              <Check className="w-4 h-4 text-green-600 shrink-0" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}