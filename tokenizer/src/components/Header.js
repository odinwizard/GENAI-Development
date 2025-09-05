import { Moon, RotateCcw, Sun } from 'lucide-react';

export default function Header({ darkMode, setDarkMode, onReset }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Custom GenAI Tokenizer
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Explore how text breaks into tokens with real-time visualization
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
        >
          <RotateCcw size={16} />
          Reset
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? <Sun className="text-yellow-500" size={20} /> : <Moon className="text-gray-700" size={20} />}
        </button>
      </div>
    </div>
  );
}
