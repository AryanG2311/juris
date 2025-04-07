import React, { useState } from 'react';

interface ContractChatbotProps {
  extractedText: string;
}

interface ChatMessage {
  user: string;
  bot: string;
}

const ContractChatbot: React.FC<ContractChatbotProps> = ({ extractedText }) => {
  const [prompt, setPrompt] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    const userMessage = prompt;
    setPrompt('');

    try {
      // Add the user message to chat history immediately for better UX
      setChatHistory(prev => [...prev, { user: userMessage, bot: '...' }]);
      
      // Make API call to backend with context and history
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: userMessage,
          context: extractedText,
          history: chatHistory.map(chat => ({
            user: chat.user,
            bot: chat.bot
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      // Update the last message with the real bot response
      setChatHistory(prev => [
        ...prev.slice(0, -1),
        { user: userMessage, bot: data.reply }
      ]);
    } catch (err) {
      // Update the last message with an error
      setChatHistory(prev => [
        ...prev.slice(0, -1),
        { user: userMessage, bot: 'Sorry, something went wrong.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="mt-8 p-4 border rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Ask About Your Contract</h3>
      <div className="space-y-3 max-h-80 overflow-y-auto mb-4">
        {chatHistory.map((chat, index) => (
          <div key={index} className="mb-3">
            <p className="font-medium">You: {chat.user}</p>
            <p className="pl-2 mt-1"><strong>Bot:</strong> {chat.bot}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask a question about the contract..."
          className="flex-grow px-4 py-2 border rounded-l"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 disabled:bg-blue-400"
        >
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default ContractChatbot;