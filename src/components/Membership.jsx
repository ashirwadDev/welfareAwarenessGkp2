import React from "react";

export default function Membership() {
  return (
    <section
      id="membership"
      className="py-16 px-6 bg-gray-900 text-white text-center"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">
        Become a Member
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-300 mb-8">
        Join <span className="font-semibold">Welfare Awareness Gorakhpur</span>{" "}
        and support our mission to create awareness, education, and welfare
        programs. A minimum monthly contribution of{" "}
        <span className="text-green-400 font-semibold">₹100</span> is required
        to maintain active membership.
      </p>

      {/* Google Form Button */}
      <button
        onClick={() =>
          window.open("https://docs.google.com/forms/d/e/1FAIpQLSdzqq6ILkwH0RUuirFUix0uYOHzBsvdGheRWEvCj7_1z2jn3Q/viewform", "_blank")
        }
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-lg font-medium shadow-lg"
      >
        Fill Membership Form
      </button>

      {/* Divider */}
      <div className="my-12 border-t border-gray-700 max-w-xl mx-auto"></div>

      {/* UPI Payment Section */}
      <h3 className="text-2xl font-semibold mb-4">Complete Your Payment</h3>
      <p className="text-gray-400 mb-6">
        Scan the QR code below or pay directly via UPI ID.
      </p>

      {/* QR Code */}
      <div className="flex justify-center mb-4">
        <img
          src="/qrcode.jpg" // apna QR code image "public" folder me daalna
          alt="UPI QR Code"
          className="w-48 h-48 rounded-lg shadow-lg"
        />
      </div>

      {/* UPI ID */}
      <p className="text-lg">
        <span className="font-semibold">UPI ID:</span>{" "}
        <span className="text-green-400">7880789120@fam</span>
      </p>

      {/* Note */}
      <p className="mt-4 text-sm text-gray-400 max-w-md mx-auto">
        After making the payment, please ensure you entered the same UPI ID in
        the membership form for verification.
      </p>
    </section>
  );
}
