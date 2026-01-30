'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface Tab {
  id: string;
  label: string;
  icon?: ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onTabChange, className }: TabsProps) {
  return (
    <div
      className={cn(
        'flex rounded-lg bg-zinc-900 border border-zinc-800 p-1',
        className
      )}
      role="tablist"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            'flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md',
            'font-medium text-sm transition-all duration-200',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
            activeTab === tab.id
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20'
              : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
          )}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

export interface TabPanelProps {
  children: ReactNode;
  isActive: boolean;
  className?: string;
}

export function TabPanel({ children, isActive, className }: TabPanelProps) {
  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      className={cn('animate-in fade-in-0 duration-200', className)}
    >
      {children}
    </div>
  );
}

