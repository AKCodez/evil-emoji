import type { EmojiPreset } from '@/types';

// Zero-width Unicode characters used for steganography
export const ZERO_WIDTH = {
  SPACE: '\u200B',      // Binary 1 - Zero Width Space
  NON_JOINER: '\u200C', // Binary 0 - Zero Width Non-Joiner
  JOINER: '\u200D',     // Delimiter - Zero Width Joiner
  WORD_JOINER: '\u2060', // Boundary marker
  BOM: '\uFEFF',        // Version marker (Byte Order Mark)
} as const;

// Regex pattern for detecting zero-width characters
export const ZERO_WIDTH_REGEX = /[\u200B\u200C\u200D\u2060\uFEFF]/g;

// Regex pattern for detecting emojis (simplified but effective)
export const EMOJI_REGEX = /^(?:\p{Emoji_Presentation}|\p{Extended_Pictographic})+$/u;

// Default emoji used when none is selected
export const DEFAULT_EMOJI = '👁️';

// Maximum recommended payload size in bytes
export const MAX_PAYLOAD_SIZE = 10 * 1024; // 10KB

// Character limits
export const MAX_MESSAGE_LENGTH = 2048;

// Preset emojis for quick selection
export const EMOJI_PRESETS: EmojiPreset[] = [
  { emoji: '😀', name: 'Grinning Face' },
  { emoji: '😎', name: 'Cool' },
  { emoji: '🔥', name: 'Fire' },
  { emoji: '💀', name: 'Skull' },
  { emoji: '👁️', name: 'Eye' },
  { emoji: '🎭', name: 'Theater' },
  { emoji: '🐍', name: 'Snake' },
  { emoji: '💎', name: 'Diamond' },
  { emoji: '🌙', name: 'Moon' },
  { emoji: '⚡', name: 'Lightning' },
  { emoji: '😈', name: 'Devil' },
  { emoji: '🤖', name: 'Robot' },
  { emoji: '👻', name: 'Ghost' },
  { emoji: '🦊', name: 'Fox' },
  { emoji: '🔮', name: 'Crystal Ball' },
];

// Version for the encoding protocol (for future compatibility)
export const PROTOCOL_VERSION = 1;

