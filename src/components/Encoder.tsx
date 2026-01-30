'use client';

import { useState, useCallback } from 'react';
import { Lock, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import { Button, Textarea, Card } from './ui';
import { EmojiPicker } from './EmojiPicker';
import { StatsDisplay, type Stats } from './StatsDisplay';
import { encode, type EncodeResult } from '@/lib/stego';
import { MAX_MESSAGE_LENGTH, DEFAULT_EMOJI } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Encoder() {
  const [secretMessage, setSecretMessage] = useState('');
  const [coverEmoji, setCoverEmoji] = useState(DEFAULT_EMOJI);
  const [result, setResult] = useState<EncodeResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleEncode = useCallback(() => {
    if (!secretMessage.trim()) {
      toast.error('Please enter a secret message', { icon: '⚠️' });
      return;
    }

    setIsLoading(true);

    // Simulate slight delay for UX
    setTimeout(() => {
      const encodeResult = encode({
        coverEmoji,
        secretMessage: secretMessage.trim(),
        includeChecksum: true,
      });

      setResult(encodeResult);
      setIsLoading(false);

      if (encodeResult.success) {
        toast.success('Message encoded successfully!', { icon: '🔒' });
      } else {
        toast.error(encodeResult.error || 'Encoding failed', { icon: '⚠️' });
      }
    }, 150);
  }, [secretMessage, coverEmoji]);

  const handleCopy = useCallback(async () => {
    if (!result?.payload) return;

    try {
      await navigator.clipboard.writeText(result.payload);
      setCopied(true);
      toast.success('Payload copied to clipboard!', { icon: '📋' });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy to clipboard', { icon: '⚠️' });
    }
  }, [result?.payload]);

  const stats: Stats | null = result?.success
    ? {
        visibleLength: result.stats.visibleLength,
        actualByteLength: result.stats.actualByteLength,
        binaryLength: result.stats.binaryLength,
        compressionRatio: result.stats.compressionRatio,
      }
    : null;

  return (
    <div className="space-y-6">
      {/* Secret Message Input */}
      <div>
        <label className="block text-sm font-medium text-zinc-400 uppercase tracking-wider mb-2">
          Secret Data
        </label>
        <Textarea
          value={secretMessage}
          onChange={(e) => setSecretMessage(e.target.value)}
          placeholder="Enter your secret message here... coordinates, passwords, love letters, whatever you want to hide 🕵️"
          maxLength={MAX_MESSAGE_LENGTH}
          showCount
          className="min-h-[140px]"
        />
      </div>

      {/* Emoji Picker */}
      <EmojiPicker value={coverEmoji} onChange={setCoverEmoji} />

      {/* Encode Button */}
      <Button
        onClick={handleEncode}
        isLoading={isLoading}
        leftIcon={<Lock className="w-4 h-4" />}
        className="w-full h-12 text-base glow-emerald"
        disabled={!secretMessage.trim()}
      >
        {isLoading ? 'ENCRYPTING...' : '🔐 ENCRYPT & BIND'}
      </Button>

      {/* Divider */}
      {result && <hr className="border-zinc-800" />}

      {/* Output Section */}
      {result?.success && (
        <div className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-300">
          <label className="block text-sm font-medium text-zinc-400 uppercase tracking-wider">
            Output
          </label>

          <Card
            variant="bordered"
            className={cn(
              'flex flex-col items-center justify-center py-8 cursor-pointer',
              'hover:border-emerald-500/50 transition-colors',
              'group'
            )}
            onClick={handleCopy}
          >
            <span className="text-6xl mb-3 group-hover:scale-110 transition-transform">
              {result.payload}
            </span>
            <p className="text-xs text-zinc-500">(click to copy)</p>
          </Card>

          {stats && <StatsDisplay stats={stats} />}

          <Button
            variant="secondary"
            onClick={handleCopy}
            leftIcon={copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            className="w-full"
          >
            {copied ? 'Copied!' : '📋 Copy to Clipboard'}
          </Button>
        </div>
      )}
    </div>
  );
}

