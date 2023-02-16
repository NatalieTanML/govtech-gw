import { customAlphabet } from 'nanoid';
const alphabet = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

export const generateShortUrl = (): string => {
  const nanoid = customAlphabet(alphabet, 8);
  return nanoid();
};
