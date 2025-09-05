'use client';

import { useState } from 'react';
import DecodeTab from '../components/DecodeTab';
import ExampleChips from '../components/ExampleChips';
import Header from '../components/Header';
import NavigationTabs from '../components/NavigationTabs';
import StatisticsSidebar from '../components/StatisticsSidebar';
import TokenizeTab from '../components/TokenizeTab';
import { useDarkMode } from '../hooks/useDarkMode';
import { useTokenizer } from '../hooks/useTokenizer';

export default function Tokenizer() {
  const [darkMode, setDarkMode, mounted] = useDarkMode();
  const [inputText, setInputText] = useState('');
  const [decodeInput, setDecodeInput] = useState('');
  const [activeTab, setActiveTab] = useState('tokenize');
  const [tokens, setTokens] = useState([]);
  const [encodedIds, setEncodedIds] = useState([]);
  const [decodedTokens, setDecodedTokens] = useState([]);
  const [stats, setStats] = useState({
    totalTokens: 0,
    words: 0,
    numbers: 0,
    punctuation: 0,
    whitespace: 0,
    special: 0,
    characters: 0,
    charactersWithoutSpaces: 0,
    vocabularySize: 0,
    totalVocabularySize: 0
  });

  const { tokenize, encode, decode, getStats, reset } = useTokenizer();

  const handleTokenize = () => {
    if (inputText.trim()) {
      const newTokens = tokenize(inputText);
      const newEncodedIds = encode(newTokens);
      const newStats = getStats(newTokens);
      
      setTokens(newTokens);
      setEncodedIds(newEncodedIds);
      setStats(newStats);
      
      // Scroll to tokens section
      const element = document.getElementById('tokens-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleDetokenize = () => {
    if (decodeInput.trim()) {
      const newDecodedTokens = decode(decodeInput);
      setDecodedTokens(newDecodedTokens);
      
      // Scroll to decoded section
      const element = document.getElementById('decoded-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleReset = () => {
    reset();
    setInputText('');
    setDecodeInput('');
    setTokens([]);
    setEncodedIds([]);
    setDecodedTokens([]);
    setStats({
      totalTokens: 0,
      words: 0,
      numbers: 0,
      punctuation: 0,
      whitespace: 0,
      special: 0,
      characters: 0,
      charactersWithoutSpaces: 0,
      vocabularySize: 0,
      totalVocabularySize: 0
    });
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="min-h-screen bg-gray-50"></div>;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          onReset={handleReset} 
        />
        
        <ExampleChips onSelectExample={setInputText} />
        
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'tokenize' ? (
              <TokenizeTab
                inputText={inputText}
                setInputText={setInputText}
                tokens={tokens}
                encodedIds={encodedIds}
                onTokenize={handleTokenize}
                copyToClipboard={copyToClipboard}
              />
            ) : (
              <DecodeTab
                decodeInput={decodeInput}
                setDecodeInput={setDecodeInput}
                decodedTokens={decodedTokens}
                onDetokenize={handleDetokenize}
                copyToClipboard={copyToClipboard}
              />
            )}
          </div>

          {/* Statistics Sidebar */}
          <div className="lg:col-span-1">
            <StatisticsSidebar stats={stats} />
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
}
