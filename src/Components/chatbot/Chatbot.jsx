import React, { useState, useEffect, useRef } from "react";

// ChatMessage Component
function ChatMessage({ chat }) {
  return (
    <div
      className={`flex items-start space-x-2 ${
        chat.role === "assistant" ? "self-start" : "self-end flex-row-reverse"
      } animate-fade-in`}
    >
      {chat.role === "assistant" && (
        <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0">
          <svg 
            viewBox="0 0 24 24"
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </div>
      )}
      <div
        className={`p-3 rounded-2xl shadow-sm max-w-xs lg:max-w-sm break-words ${
          chat.role === "assistant" 
            ? "bg-gray-100 rounded-tl-none" 
            : "bg-orange-400 text-white rounded-tr-none"
        }`}
      >
        <p className="text-sm leading-relaxed">{chat.text}</p>
      </div>
    </div>
  );
}

// ChatForm Component
function ChatForm({ generateBotResponse }) {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() !== "") {
      generateBotResponse(input.trim());
      setInput("");
      setIsTyping(false);
    }
  };

  return (
    <div className="border-t border-gray-100 bg-white p-4">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-orange-400 transition-colors"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setIsTyping(e.target.value.length > 0);
          }}
        />
        <button
          type="submit"
          disabled={!isTyping}
          className={`p-2 rounded-full transition-all duration-200 ${
            isTyping
              ? "bg-orange-400 hover:bg-orange-500 text-white shadow-md"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
          aria-label="Send message"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14m-4-4l4 4-4 4"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

// Chatbot Component
function Chatbot() {
  const [chatHistory, setChatHistory] = useState([
    { role: "assistant", text: "👋 Hey there! How can I help you today?" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const generateBotResponse = async (userInput) => {
    try {
      setIsLoading(true);
      setChatHistory((prev) => [...prev, { role: "user", text: userInput }]);

      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();
      setChatHistory((prev) => [
        ...prev,
        { role: "assistant", text: data.response },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "😕 Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
      {isVisible && (
        <div
          className={`w-full transition-all duration-300 transform ${
            isMinimized ? "scale-95 opacity-90" : "scale-100 opacity-100"
          } ${
            isMinimized ? "max-w-[300px]" : "max-w-[400px]"
          } bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black ring-opacity-5`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-400 to-orange-500">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium">Support Chat</h3>
                {!isMinimized && (
                  <p className="text-white/80 text-xs">We typically reply in a few minutes</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label={isMinimized ? "Expand" : "Minimize"}
              >
                <svg
                  className={`w-5 h-5 text-white transform transition-transform ${
                    isMinimized ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Body */}
          {!isMinimized && (
            <>
              <div
                ref={chatBodyRef}
                className="h-[400px] overflow-y-auto p-4 space-y-4 scroll-smooth"
              >
                {chatHistory.map((chat, index) => (
                  <ChatMessage key={index} chat={chat} />
                ))}
                {isLoading && (
                  <div className="flex items-center space-x-2 animate-pulse">
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                    <div className="h-10 w-20 bg-gray-200 rounded-full" />
                  </div>
                )}
              </div>
              <ChatForm generateBotResponse={generateBotResponse} />
            </>
          )}
        </div>
      )}
      {!isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          className="p-4 bg-orange-400 hover:bg-orange-500 rounded-full shadow-lg transition-colors"
          aria-label="Open chat"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Chatbot;