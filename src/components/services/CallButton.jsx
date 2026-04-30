import { Phone } from "lucide-react";

export default function CallButton() {
  const phoneNumber = "+919289925657"; // 👈 apna number (+91 ke sath)

  return (
    <div className="fixed bottom-24 right-5 z-50">
      <a
        href={`tel:${phoneNumber}`}
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}