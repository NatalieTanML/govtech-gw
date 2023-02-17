import { customAlphabet } from 'nanoid';
const alphabet = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

/**
 * Generates a random alphanumeric string using nanoid (https://github.com/ai/nanoid).
 *
 * @returns An 8-character alphanumeric string.
 */
export const generateShortUrl = (): string => {
  const nanoid = customAlphabet(alphabet, 8);
  return nanoid();
};

// export const validateUrl = (url: string): boolean => {
//   var
// }

/**
 * Extracts the identifer from the short url.
 *
 * @returns An 8-character alphanumeric string.
 */
export const extractShortUrl = (url: string): string => {
  const urlObj = new URL(url);
  return urlObj.pathname.slice(1);
};
