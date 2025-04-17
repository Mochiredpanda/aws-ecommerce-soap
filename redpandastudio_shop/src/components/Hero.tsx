// Hero page

import React from 'react';

export default function Hero() {
  return (
    <section className="w-full min-h-[85vh] relative flex justify-center overflow-hidden items-center bg-white">
      {/* Container for background + overlay */}
      <div className="relative w-full min-h-[85vh] flex justify-center items-center">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center min-h-[85vh]"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        >
          {/* Shading overlay only over the image */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content goes here */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 py-24 flex flex-col items-center gap-4">
          <p className="font-mono text-lg text-gray-100 drop-shadow-sm">
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
