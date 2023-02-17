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
