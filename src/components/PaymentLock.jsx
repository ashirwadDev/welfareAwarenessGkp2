import React from "react";

export default function PaymentLock() {
  return (
    <div className="fixed inset-0 bg-[#111827] text-white flex flex-col items-center justify-center p-4 md:p-8 z-[9999] overflow-y-auto">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400 mb-4 sm:mb-6 text-center leading-snug">
        🚧 Website Temporarily Locked
      </h1>

      {/* Message */}
      <p className="text-base sm:text-lg md:text-xl text-center max-w-md sm:max-w-xl mb-6 sm:mb-8 text-gray-300 leading-relaxed">
        Dear Client, <br />
        This website is currently{" "}
        <span className="text-yellow-400 font-semibold">inactive</span>.  
        <br className="hidden sm:block" />
        To continue using it, kindly complete one of the following:  
        <br />
        🔹 <span className="text-green-400 font-bold">₹500</span> →{" "}
        <span className="font-semibold">Temporary access (20 days)</span>  
        <br />
        🔹 <span className="text-green-400 font-bold">₹5000</span> →{" "}
        <span className="font-semibold">Permanent access (One-time full payment)</span>  
      </p>

      {/* QR Code */}
      <img
        src="/qrcode2.jpg" // apna QR code "public" folder me daalna
        alt="UPI QR Code"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-xl shadow-lg mb-4 sm:mb-6 border-2 border-green-400 object-contain"
      />

      {/* UPI ID */}
      <p className="text-base sm:text-lg md:text-xl text-center">
        <span className="font-semibold">UPI ID:</span>{" "}
        <span className="text-green-400 break-words">gangsterp610@okicici</span>
      </p>

      {/* Footer Note */}
      <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-400 italic text-center max-w-xs sm:max-w-md">
        Once the payment is received, the website will be reactivated.  
        Thank you for your cooperation. 🙌
      </p>
    </div>
  );
}
