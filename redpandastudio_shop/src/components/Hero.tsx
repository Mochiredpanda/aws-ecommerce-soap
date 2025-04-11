// Hero page

import React from 'react';

export default function Hero() {
  return (
    <section className="w-full min-h-[80vh] flex justify-center items-center bg-white">
      {/* Container for background + overlay */}
      <div className="relative w-full max-w-5xl h-full">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        >
          {/* Shading overlay only over the image */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content goes here */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-30 py-80 gap-4">
          <p className="mt-4 font-mono text-lg text-gray-100 drop-shadow-sm">
            Bloom into Spring with Joy
          </p>

          <h1 className="text-5xl font-semibold text-white drop-shadow-md">
            BATH & SPA COLLECTION
          </h1>
          <button className="mt-6 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
