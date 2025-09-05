import { Copy, Zap } from 'lucide-react';

export default function DecodeTab({ 
  decodeInput, 
  setDecodeInput, 
  decodedTokens, 
  onDetokenize 
}) {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Enter Token IDs (comma-separated)
        </label>
        <textarea
          value={decodeInput}
          onChange={(e) => setDecodeInput(e.target.value)}
          placeholder="1, 2, 3, 4, 5..."
          className="w-full h-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white resize-none"
        />
        <div className="mt-4 flex justify-end">
          <button
            onClick={onDetokenize}
            disabled={!decodeInput.trim()}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
          >
            <Zap size={16} />
            Detokenize
          </button>
        </div>
      </div>

      {/* Decoded Text Area */}
      <div id="decoded-section" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Decoded Text
          </h3>
          {decodedTokens.length > 0 && (
            <button
              onClick={() => copyToClipboard(decodedTokens.join(''))}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-sm transition-colors"
            >
              <Copy size={14} />
              Copy Text
            </button>
          )}
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 min-h-[150px] border-2 border-dashed border-gray-200 dark:border-gray-600">
          {decodedTokens.length > 0 ? (
            <div>
              {/* Token visualization */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Token Breakdown:</h4>
                <div className="flex flex-wrap gap-1">
                  {decodedTokens.map((token, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        token === '[UNK]' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}
                      title={token === '[UNK]' ? 'Unknown token ID' : `Token: ${token}`}
                    >
                      {token === ' ' ? '␣' : token === '\n' ? '↵' : token}
                    </span>
                  ))}
                </div>
              </div>
              {/* Plain text output */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Plain Text Output:</h4>
                <div className="bg-white dark:bg-gray-800 rounded p-3 border border-gray-200 dark:border-gray-600 font-mono text-sm text-gray-900 dark:text-white min-h-[60px] whitespace-pre-wrap">
                  {decodedTokens.join('') || 'No valid tokens to decode'}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
              <div className="text-center">
                <p className="text-sm mb-2">{`Enter token IDs above and click Detokenize to see the decoded text`}</p>
                <p className="text-xs">Example: 1, 2, 3, 4</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decode Statistics */}
      {decodedTokens.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Decode Statistics
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {decodedTokens.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Tokens</div>
            </div>
            <div className="text-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {decodedTokens.filter(token => token !== '[UNK]').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Valid Tokens</div>
            </div>
            <div className="text-center p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                {decodedTokens.filter(token => token === '[UNK]').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Unknown Tokens</div>
            </div>
            <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {decodedTokens.join('').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Characters</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

