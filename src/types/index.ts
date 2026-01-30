// Encoding mode types
export type EncodingMode = 'ascii' | 'utf8' | 'utf16';

// Confidence levels for decoded messages
export type ConfidenceLevel = 'high' | 'medium' | 'low' | 'none';

// Encode options interface
export interface EncodeOptions {
  coverEmoji: string;
  secretMessage: string;
  encoding?: EncodingMode;
  includeChecksum?: boolean;
}

// Encode result interface
export interface EncodeResult {
  success: boolean;
  payload: string;
  stats: {
    visibleLength: number;
    actualByteLength: number;
    binaryLength: number;
    compressionRatio: number;
  };
  error?: string;
}

// Decode options interface
export interface DecodeOptions {
  input: string;
  strict?: boolean;
}

// Decode result interface
export interface DecodeResult {
  success: boolean;
  message: string | null;
  confidence: ConfidenceLevel;
  hexView: string;
  binaryView: string;
  metadata: {
    hiddenCharsFound: number;
    estimatedEncoding: EncodingMode | null;
  };
  error?: string;
}

// Encoded payload structure (for future versioning)
export interface EncodedPayload {
  version: number;
  encoding: EncodingMode;
  checksum: number;
  length: number;
  data: string;
}

// Tab types for the UI
export type TabType = 'encoder' | 'decoder';

// Emoji preset type
export interface EmojiPreset {
  emoji: string;
  name: string;
}

