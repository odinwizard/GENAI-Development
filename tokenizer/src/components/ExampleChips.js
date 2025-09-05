const EXAMPLE_TEXTS = [
  "Hello, world! 🌍",
  "The quick brown fox jumps over the lazy dog.",
  "AI is transforming the world in 2025!",
  "Natural Language Processing (NLP) with 42 tokens.",
  "🚀 Building the future, one token at a time..."
];

export default function ExampleChips({ onSelectExample }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quick Examples</h3>
      <div className="flex flex-wrap gap-2">
        {EXAMPLE_TEXTS.map((example, index) => (
          <button
            key={index}
            onClick={() => onSelectExample(example)}
            className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
}
