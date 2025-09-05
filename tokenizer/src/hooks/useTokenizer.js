import { useMemo } from 'react';
import { CustomTokenizer } from '../lib/tokenizer';

export function useTokenizer() {
  const tokenizer = useMemo(() => new CustomTokenizer(), []);

  const tokenize = (text) => {
    return tokenizer.tokenize(text);
  };

  const encode = (tokens) => {
    return tokenizer.encode(tokens);
  };

  const decode = (ids) => {
    try {
      const idArray = ids.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));
      return tokenizer.decode(idArray);
    } catch {
      return [];
    }
  };

  const getStats = (tokens) => {
    return tokenizer.getStats(tokens);
  };

  const reset = () => {
    tokenizer.reset();
  };

  return {
    tokenize,
    encode,
    decode,
    getStats,
    reset
  };
}
