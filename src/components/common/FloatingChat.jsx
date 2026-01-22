import { useState } from "react";
import "./FloatingChat.css";

const FloatingChat = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="floating-chat">
            {open && (
                <div className="chat-menu">
                    <a
                        href="https://wa.me/27834749155"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="chat-item whatsapp"
                    >
                        💬 WhatsApp Chat
                    </a>

                    <a href="/contact" className="chat-item support">
                        📩 Live Support
                    </a>

                    <button className="chat-item ai">
                        🤖 AI Chat (Coming Soon)
                    </button>
                </div>
            )}

            <button
                className="chat-toggle"
                onClick={() => setOpen(!open)}
                aria-label="Open chat"
            >
                {open ? "×" : "💬"}
            </button>
        </div>
    );
};

export default FloatingChat;
