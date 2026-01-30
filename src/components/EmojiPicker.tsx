'use client';

import { cn } from '@/lib/utils';
import { EMOJI_PRESETS, DEFAULT_EMOJI } from '@/lib/constants';

export interface EmojiPickerProps {
  value: string;
  onChange: (emoji: string) => void;
  className?: string;
}

export function EmojiPicker({ value, onChange, className }: EmojiPickerProps) {
  const selectedEmoji = value || DEFAULT_EMOJI;

  return (
    <div className={cn('space-y-3', className)}>
      <label className="block text-sm font-medium text-zinc-400 uppercase tracking-wider">
        Cover Emoji
      </label>
      
      <div className="flex items-start gap-4">
        {/* Selected Emoji Display */}
        <div className="flex-shrink-0">
          <div
            className={cn(
              'w-16 h-16 rounded-lg flex items-center justify-center',
              'bg-zinc-800 border-2 border-zinc-700',
              'text-4xl select-none',
              'transition-all duration-200',
              'hover:border-emerald-500/50'
            )}
          >
            {selectedEmoji}
          </div>
        </div>

        {/* Quick Select Grid */}
        <div className="flex-1">
          <p className="text-xs text-zinc-500 mb-2 font-mono">Quick Select:</p>
          <div className="flex flex-wrap gap-1">
            {EMOJI_PRESETS.map(({ emoji, name }) => (
              <button
                key={emoji}
                type="button"
                onClick={() => onChange(emoji)}
                title={name}
                className={cn(
                  'w-9 h-9 rounded-md flex items-center justify-center',
                  'text-xl transition-all duration-150',
                  'hover:bg-zinc-700 hover:scale-110',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500',
                  selectedEmoji === emoji
                    ? 'bg-emerald-500/20 ring-2 ring-emerald-500'
                    : 'bg-zinc-800/50'
                )}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

