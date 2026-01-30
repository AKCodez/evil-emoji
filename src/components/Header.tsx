'use client';

import { useState, useEffect } from 'react';
import { Github, Moon, Sun } from 'lucide-react';
import { Button } from './ui';

export function Header() {
  const [isBlinking, setIsBlinking] = useState(false);

  // Periodic eye blink animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="text-3xl transition-transform duration-150"
            style={{ transform: isBlinking ? 'scaleY(0.1)' : 'scaleY(1)' }}
            aria-hidden="true"
          >
            👁️
          </span>
          <div>
            <h1 className="text-xl font-bold text-zinc-50 tracking-tight">
              EvilEmoji
            </h1>
            <p className="text-xs text-zinc-500 font-mono">
              Zero-Width Steganography Terminal
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open('https://github.com', '_blank')}
            aria-label="View on GitHub"
          >
            <Github className="w-4 h-4" />
          </Button>
          <span className="text-xs text-zinc-600 font-mono hidden sm:block">
            v1.0.0
          </span>
        </div>
      </div>
    </header>
  );
}

