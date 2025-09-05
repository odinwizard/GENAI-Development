import { Zap } from 'lucide-react';
import { TOKEN_TYPES } from '../lib/tokenizer';

const TOKEN_COLORS = {
  [TOKEN_TYPES.WORD]: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  [TOKEN_TYPES.NUMBER]: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  [TOKEN_TYPES.PUNCTUATION]: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  [TOKEN_TYPES.WHITESPACE]: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  [TOKEN_TYPES.SPECIAL]: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
};

export default function StatisticsSidebar({ stats }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <Zap className="text-blue-500" size={20} />
        Statistics
      </h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Total Tokens:</span>
          <span className="font-semibold text-gray-900 dark:text-white">{stats.totalTokens}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Words:</span>
          <span className="font-semibold text-blue-600 dark:text-blue-400">{stats.words}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Numbers:</span>
          <span className="font-semibold text-green-600 dark:text-green-400">{stats.numbers}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Punctuation:</span>
          <span className="font-semibold text-purple-600 dark:text-purple-400">{stats.punctuation}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Whitespace:</span>
          <span className="font-semibold text-gray-600 dark:text-gray-400">{stats.whitespace}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Special:</span>
          <span className="font-semibold text-red-600 dark:text-red-400">{stats.special}</span>
        </div>
        <hr className="border-gray-200 dark:border-gray-600" />
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Characters:</span>
          <span className="font-semibold text-gray-900 dark:text-white">{stats.characters}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Without Spaces:</span>
          <span className="font-semibold text-gray-900 dark:text-white">{stats.charactersWithoutSpaces}</span>
        </div>
        <hr className="border-gray-200 dark:border-gray-600" />
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Unique in Input:</span>
          <span className="font-semibold text-gray-900 dark:text-white">{stats.vocabularySize}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Total Vocabulary:</span>
          <span className="font-semibold text-gray-900 dark:text-white">{stats.totalVocabularySize}</span>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Token Types</h4>
        <div className="space-y-2">
          {Object.entries(TOKEN_TYPES).map(([key, type]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded ${TOKEN_COLORS[type]}`}></div>
              <span className="text-xs text-gray-600 dark:text-gray-400 capitalize">{type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
