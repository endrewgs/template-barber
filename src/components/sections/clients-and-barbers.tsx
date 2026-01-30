import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "“Avi’s the best. I’ve gone to him twice now and love his clean cuts. He listened to what I ask for and now I feel very comfortable letting him do his thing, which is not common for me.”",
    author: "MAX"
  },
  {
    quote: "“Avi is an absolute legend and professional. I’m very particular about my haircuts so when I moved from Chicago, 6 months ago, I was a little concerned. I tried over 5 salons/barbershops and paid in the range of $30-$150 and I have to say none were as impressive as Avi. Been going back to him every 3 weeks and will continue to do so no matter where I live in Manhattan.”",
    author: "RONAK"
  },
  {
    quote: "“I’ve had two cuts and full shaves here with Avi. He’s a great barber, pays attention to detail and is a funny guy. I’ve been really happy with both cuts and the shave is a super relaxing and thorough experience.”",
    author: "TOM"
  }
];

const ClientsAndBarbers = () => {
  return (
    <section className="bg-[#5a6368] text-white py-[80px] md:py-[120px]">
      <div className="container mx-auto max-w-[1200px] px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          
          {/* Left Column: Our Clients */}
          <div>
            <div className="mb-8">
              <h2 className="text-[32px] italic font-serif leading-tight">Our Clients</h2>
              <div className="w-full h-px bg-[#777777] mt-6"></div>
            </div>
            
            <div className="space-y-16">
              {testimonials.map((t, index) => (
                <div key={index} className="flex flex-col">
                  <p className="text-[20px] font-serif leading-[1.6] text-white/90 mb-4 opacity-75">
                    {t.quote}
                  </p>
                  <span className="text-[11px] font-bold font-sans tracking-[0.2em] text-[#aba492] uppercase">
                    — {t.author}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Our Barbers */}
          <div>
            <div className="mb-8">
              <h2 className="text-[32px] italic font-serif leading-tight">Our Barbers</h2>
              <div className="w-full h-px bg-[#777777] mt-6"></div>
            </div>

            <div className="mt-12">
              <div className="relative w-full aspect-[16/9] mb-6 grayscale">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0f5cfe8d-df6e-4539-8eac-d761efd92321-bonefadebarbers-com/assets/images/image-asset-5.jpeg"
                  alt="Avi - Professional Barber"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-[12px] font-bold font-sans tracking-[0.2em] text-[#aba492] uppercase mb-4">
                  AVI
                </h3>
                <p className="text-[16px] font-serif leading-[1.7] text-white/80 max-w-md">
                  Well known in the East Village area for his modern cuts, Avi prides himself on the smallest details—the ones that make or break a great cut.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientsAndBarbers;