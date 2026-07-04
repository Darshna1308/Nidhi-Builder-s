import "./WhatsappButton.css";
import { MessageCircle } from "lucide-react";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919314714978"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsappButton"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
}

export default WhatsappButton;