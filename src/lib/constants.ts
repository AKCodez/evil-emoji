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

// Default emoji used when none is selected (Devil emoji)
export const DEFAULT_EMOJI = '\u{1F608}';

// Maximum recommended payload size in bytes
export const MAX_PAYLOAD_SIZE = 10 * 1024; // 10KB

// Character limits
export const MAX_MESSAGE_LENGTH = 2048;

// Preset emojis for quick selection (using Unicode escapes for reliability)
export const EMOJI_PRESETS: EmojiPreset[] = [
  { emoji: '\u{1F608}', name: 'Devil' },
  { emoji: '\u{1F441}\uFE0F', name: 'Eye' },
  { emoji: '\u{1F480}', name: 'Skull' },
  { emoji: '\u{1F47B}', name: 'Ghost' },
  { emoji: '\u{1F525}', name: 'Fire' },
  { emoji: '\u26A1', name: 'Lightning' },
  { emoji: '\u{1F40D}', name: 'Snake' },
  { emoji: '\u{1F987}', name: 'Bat' },
  { emoji: '\u{1F577}\uFE0F', name: 'Spider' },
  { emoji: '\u{1F3AD}', name: 'Theater' },
  { emoji: '\u{1F52E}', name: 'Crystal Ball' },
  { emoji: '\u{1F319}', name: 'Moon' },
  { emoji: '\u{1F48E}', name: 'Diamond' },
  { emoji: '\u{1F916}', name: 'Robot' },
  { emoji: '\u{1F47D}', name: 'Alien' },
  { emoji: '\u{1F98A}', name: 'Fox' },
  { emoji: '\u{1F43A}', name: 'Wolf' },
  { emoji: '\u{1F985}', name: 'Eagle' },
  { emoji: '\u{1F409}', name: 'Dragon' },
  { emoji: '\u{1F984}', name: 'Unicorn' },
  { emoji: '\u{1F383}', name: 'Pumpkin' },
  { emoji: '\u{1F4A3}', name: 'Bomb' },
  { emoji: '\u{1F5DD}\uFE0F', name: 'Key' },
  { emoji: '\u{1F512}', name: 'Lock' },
  { emoji: '\u{1F48C}', name: 'Love Letter' },
  { emoji: '\u{1F4E1}', name: 'Satellite' },
  { emoji: '\u{1F6F8}', name: 'UFO' },
  { emoji: '\u2694\uFE0F', name: 'Swords' },
  { emoji: '\u{1F3F4}\u200D\u2620\uFE0F', name: 'Pirate Flag' },
  { emoji: '\u{1F3AF}', name: 'Target' },
  { emoji: '\u{1F0CF}', name: 'Joker' },
  { emoji: '\u2660\uFE0F', name: 'Spade' },
  { emoji: '\u{1F5A4}', name: 'Black Heart' },
  { emoji: '\u{1F49C}', name: 'Purple Heart' },
  { emoji: '\u{1F9FF}', name: 'Evil Eye' },
];

// Version for the encoding protocol (for future compatibility)
export const PROTOCOL_VERSION = 1;