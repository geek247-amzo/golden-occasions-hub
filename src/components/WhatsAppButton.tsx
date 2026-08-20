import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Azikel's Tasty Food on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex h-14 items-center gap-3 rounded-full bg-[#25D366] px-4 pr-5 text-sm font-medium text-white shadow-[0_18px_40px_-14px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:scale-[1.02] sm:bottom-7 sm:right-7 sm:h-16"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="hidden whitespace-nowrap sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
