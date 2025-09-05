// Token types
export const TOKEN_TYPES = {
  WORD: 'word',
  NUMBER: 'number',
  PUNCTUATION: 'punctuation',
  WHITESPACE: 'whitespace',
  SPECIAL: 'special'
};

// Custom Tokenizer class
export class CustomTokenizer {
  constructor() {
    this.vocabulary = new Map();
    this.nextId = 0;
    // Load vocabulary from localStorage when available (client-side only)
    if (typeof window !== 'undefined') {
      this.loadFromStorage();
    }
  }

  tokenize(text) {
    if (!text) return [];
    
    const tokens = [];
    let i = 0;
    
    while (i < text.length) {
      const char = text[i];
      
      if (/\s/.test(char)) {
        // Whitespace
        let whitespace = '';
        while (i < text.length && /\s/.test(text[i])) {
          whitespace += text[i];
          i++;
        }
        tokens.push({
          text: whitespace,
          type: TOKEN_TYPES.WHITESPACE
        });
      } else if (/[a-zA-Z]/.test(char)) {
        // Word
        let word = '';
        while (i < text.length && /[a-zA-Z]/.test(text[i])) {
          word += text[i];
          i++;
        }
        tokens.push({
          text: word,
          type: TOKEN_TYPES.WORD
        });
      } else if (/[0-9]/.test(char)) {
        // Number
        let number = '';
        while (i < text.length && /[0-9.]/.test(text[i])) {
          number += text[i];
          i++;
        }
        tokens.push({
          text: number,
          type: TOKEN_TYPES.NUMBER
        });
      } else if (/[.,!?;:()[\]{}'""]/.test(char)) {
        // Punctuation
        tokens.push({
          text: char,
          type: TOKEN_TYPES.PUNCTUATION
        });
        i++;
      } else {
        // Special characters
        tokens.push({
          text: char,
          type: TOKEN_TYPES.SPECIAL
        });
        i++;
      }
    }
    
    return tokens;
  }

  encode(tokens) {
    const encodedIds = [];
    
    tokens.forEach(token => {
      if (!this.vocabulary.has(token.text)) {
        this.vocabulary.set(token.text, this.nextId++);
        this.saveToStorage();
      }
      encodedIds.push(this.vocabulary.get(token.text));
    });
    
    return encodedIds;
  }

  decode(ids) {
    const vocabArray = Array.from(this.vocabulary.entries());
    const idToToken = new Map(vocabArray.map(([text, id]) => [id, text]));
    
    return ids.map(id => idToToken.get(id) || '[UNK]');
  }

  getStats(tokens) {
    const stats = {
      totalTokens: tokens.length,
      words: 0,
      numbers: 0,
      punctuation: 0,
      whitespace: 0,
      special: 0,
      characters: tokens.reduce((acc, token) => acc + token.text.length, 0),
      charactersWithoutSpaces: 0,
      vocabularySize: new Set(tokens.map(t => t.text)).size,
      totalVocabularySize: this.vocabulary.size
    };

    tokens.forEach(token => {
      stats[token.type]++;
      if (token.type !== TOKEN_TYPES.WHITESPACE) {
        stats.charactersWithoutSpaces += token.text.length;
      }
    });

    return stats;
  }

  reset() {
    this.vocabulary.clear();
    this.nextId = 0;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('tokenizer-vocabulary');
    }
  }

  saveToStorage() {
    if (typeof window !== 'undefined') {
      const vocabArray = Array.from(this.vocabulary.entries());
      localStorage.setItem('tokenizer-vocabulary', JSON.stringify({
        vocabulary: vocabArray,
        nextId: this.nextId
      }));
    }
  }

  loadFromStorage() {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('tokenizer-vocabulary');
        if (stored) {
          const { vocabulary, nextId } = JSON.parse(stored);
          this.vocabulary = new Map(vocabulary);
          this.nextId = nextId;
        }
      } catch (error) {
        console.error('Failed to load vocabulary from storage:', error);
      }
    }
  }
}
