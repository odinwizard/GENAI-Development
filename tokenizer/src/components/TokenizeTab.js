import { Zap } from 'lucide-react';
import TokenMapping from './TokenMapping';
import TokenVisualization from './TokenVisualization';

export default function TokenizeTab({ 
  inputText, 
  setInputText, 
  tokens, 
  encodedIds, 
  onTokenize 
}) {
  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Input Text
        </label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full h-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white resize-none"
        />
        <div className="mt-4 flex justify-end">
          <button
            onClick={onTokenize}
            disabled={!inputText.trim()}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
          >
            <Zap size={16} />
            Tokenize
          </button>
        </div>
      </div>

      {/* Token Visualization */}
      {tokens.length > 0 && (
        <TokenVisualization tokens={tokens} encodedIds={encodedIds} />
      )}

      {/* Token Mapping */}
      {tokens.length > 0 && (
        <TokenMapping tokens={tokens} encodedIds={encodedIds} />
      )}
    </div>
  );
}
