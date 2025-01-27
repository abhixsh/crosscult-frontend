import { useRef } from "react";

function ChatForm({ generateBotResponse }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = inputRef.current.value.trim();
    if (!message) return;
    generateBotResponse(message);
    inputRef.current.value = "";
  };

  return (
    <div className="absolute bottom-0 w-full bg-white p-3 sm:p-4 border-t border-gray-200">
      <form 
        onSubmit={handleSubmit} 
        className="flex items-center gap-2 p-1.5 bg-white rounded-full border border-gray-200 focus-within:border-orange-400 shadow-sm"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Message..."
          className="flex-1 h-10 sm:h-12 px-3 sm:px-4 bg-transparent border-none outline-none text-sm"
          required
        />
        <button 
          type="submit"
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-orange-400 text-white rounded-full hover:bg-orange-500 transition-colors"
          aria-label="Send message"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 sm:h-5 sm:w-5" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default ChatForm;