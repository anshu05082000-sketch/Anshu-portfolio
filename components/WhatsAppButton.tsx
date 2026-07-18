"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "918882015472"; // अपना नंबर Country Code के साथ

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hi%20Anshu,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition duration-300 hover:scale-110 animate-bounce"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}