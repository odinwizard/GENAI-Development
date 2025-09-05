import { TOKEN_TYPES } from '../lib/tokenizer';

const TOKEN_COLORS = {
  [TOKEN_TYPES.WORD]: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  [TOKEN_TYPES.NUMBER]: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  [TOKEN_TYPES.PUNCTUATION]: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  [TOKEN_TYPES.WHITESPACE]: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  [TOKEN_TYPES.SPECIAL]: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
};

export default function TokenMapping({ tokens, encodedIds }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Token → ID Mapping
      </h3>
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {tokens.map((token, index) => (
          <div key={index} className="flex items-center justify-between py-2 px-3 bg-gray-50 dark:bg-gray-700 rounded">
            <span className={`px-2 py-1 rounded text-xs font-medium ${TOKEN_COLORS[token.type]}`}>
              {token.text === ' ' ? '␣' : token.text === '\n' ? '↵' : token.text}
            </span>
            <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
              → {encodedIds[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
