import React from "react";

export default function PaymentLock() {
  return (
    <div className="fixed inset-0 bg-[#111827] text-white flex flex-col items-center justify-center p-6 z-[9999]">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-400 mb-6 text-center">
        🚧 Website Temporarily Locked
      </h1>

      {/* Message */}
      <p className="text-lg md:text-xl text-center max-w-xl mb-8 text-gray-300 leading-relaxed">
        Dear Client,  
        This website is currently{" "}
        <span className="text-yellow-400 font-semibold">inactive</span>.  
        <br />  
        To continue using it, kindly complete one of the following:  
        <br />
        🔹 <span className="text-green-400 font-bold">₹500</span> →{" "}
        <span className="font-semibold">Temporary access for 20 days</span>  
        <br />
        🔹 <span className="text-green-400 font-bold">₹5000</span> →{" "}
        <span className="font-semibold">Permanent access (One-time full payment)</span>  
        <br />
        <br />
        We appreciate your support and prompt action. 🙏
      </p>

      {/* QR Code */}
      <img
        src="/qrcode2.jpg" // apna QR code "public" folder me daalna
        alt="UPI QR Code"
        className="w-52 h-52 rounded-xl shadow-lg mb-6 border-2 border-green-400"
      />

      {/* UPI ID */}
      <p className="text-lg md:text-xl">
        <span className="font-semibold">UPI ID:</span>{" "}
        <span className="text-green-400">gangsterp610@okicici</span>
      </p>

      {/* Footer Note */}
      <p className="mt-8 text-sm text-gray-400 italic text-center">
        Once the payment is received, the website will be reactivated.  
        Thank you for your cooperation. 🙌
      </p>
    </div>
  );
}
