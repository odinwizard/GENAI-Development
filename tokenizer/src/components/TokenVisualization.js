import { Copy } from 'lucide-react';
import { TOKEN_TYPES } from '../lib/tokenizer';

const TOKEN_COLORS = {
  [TOKEN_TYPES.WORD]: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  [TOKEN_TYPES.NUMBER]: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  [TOKEN_TYPES.PUNCTUATION]: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  [TOKEN_TYPES.WHITESPACE]: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  [TOKEN_TYPES.SPECIAL]: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
};

export default function TokenVisualization({ tokens, encodedIds, copyToClipboard }) {
  return (
    <div id="tokens-section" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Tokens ({tokens.length})
        </h3>
        <button
          onClick={() => copyToClipboard(tokens.map(t => t.text).join(''))}
          className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-sm transition-colors"
        >
          <Copy size={14} />
          Copy Text
        </button>
      </div>
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 min-h-[100px] border-2 border-dashed border-gray-200 dark:border-gray-600">
        <div className="flex flex-wrap gap-1">
          {tokens.map((token, index) => (
            <button
              key={index}
              onClick={() => copyToClipboard(token.text)}
              className={`px-2 py-1 rounded text-xs font-medium hover:opacity-80 transition-opacity ${TOKEN_COLORS[token.type]}`}
              title={`Type: ${token.type} | Click to copy: "${token.text}"`}
            >
              {token.text === ' ' ? '␣' : token.text === '\n' ? '↵' : token.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
