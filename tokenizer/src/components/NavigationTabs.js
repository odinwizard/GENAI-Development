export default function NavigationTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
      <button
        onClick={() => setActiveTab('tokenize')}
        className={`px-4 py-2 border-b-2 font-medium transition-colors ${
          activeTab === 'tokenize'
            ? 'border-blue-500 text-blue-600 dark:text-blue-400'
            : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
        }`}
      >
        Tokenize
      </button>
      <button
        onClick={() => setActiveTab('decode')}
        className={`px-4 py-2 border-b-2 font-medium transition-colors ${
          activeTab === 'decode'
            ? 'border-blue-500 text-blue-600 dark:text-blue-400'
            : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
        }`}
      >
        Decode
      </button>
    </div>
  );
}
