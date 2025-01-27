import ChatbotIcon from "./ChatbotIcon";

function ChatMessage({ chat }) {
  return (
    <div className={`flex gap-2 sm:gap-3 items-center ${
      chat.role === "assistant" ? "" : "flex-col items-end"
    }`}>
      {chat.role === "assistant" && <ChatbotIcon />}
      <p className={`px-3 sm:px-4 py-2 sm:py-3 max-w-[75%] break-words whitespace-pre-line text-sm
        rounded-2xl ${
          chat.role === "assistant"
            ? "bg-purple-50 rounded-bl-sm"
            : "bg-orange-400 text-white rounded-bl-sm"
        }`}
      >
        {chat.text}
      </p>
    </div>
  );
}

export default ChatMessage;