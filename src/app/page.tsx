'use client';

import { useState } from 'react';
import { Lock, Unlock } from 'lucide-react';
import { Header, Encoder, Decoder, Card, Tabs, TabPanel } from '@/components';
import { useKeyboardShortcuts } from '@/hooks';
import type { TabType } from '@/types';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('encoder');

  const tabs = [
    { id: 'encoder', label: 'ENCODER', icon: <Lock className="w-4 h-4" /> },
    { id: 'decoder', label: 'DECODER', icon: <Unlock className="w-4 h-4" /> },
  ];

  // Keyboard shortcuts
  useKeyboardShortcuts([
    {
      key: 'e',
      ctrlKey: true,
      action: () => setActiveTab('encoder'),
    },
    {
      key: 'd',
      ctrlKey: true,
      action: () => setActiveTab('decoder'),
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        {/* Tab Navigation */}
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={(id) => setActiveTab(id as TabType)}
          className="mb-8"
        />

        {/* Tab Panels */}
        <Card variant="glass" padding="lg">
          <TabPanel isActive={activeTab === 'encoder'}>
            <Encoder />
          </TabPanel>

          <TabPanel isActive={activeTab === 'decoder'}>
            <Decoder />
          </TabPanel>
        </Card>

        {/* Keyboard Shortcuts Help */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-zinc-600 font-mono">
          <span>
            <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded border border-zinc-700">Ctrl</kbd>
            {' + '}
            <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded border border-zinc-700">E</kbd>
            {' Encoder'}
          </span>
          <span>
            <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded border border-zinc-700">Ctrl</kbd>
            {' + '}
            <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded border border-zinc-700">D</kbd>
            {' Decoder'}
          </span>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-xs text-zinc-600">
          <p className="font-mono">
            Built with 🖤 for hiding secrets in plain sight
          </p>
          <p className="mt-1 text-zinc-700">
            Zero-width characters are invisible but present — use responsibly
          </p>
        </div>
      </footer>
    </div>
  );
}
