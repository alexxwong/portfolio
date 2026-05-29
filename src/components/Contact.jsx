import { FaDiscord, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 max-w-6xl mx-auto">
      
      {/* 1. THE HEADER */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-mono text-2xl md:text-3xl font-bold text-gray-100 whitespace-nowrap">
          <span className="text-primary-500">#</span>contact me
        </h2>
        <div className="h-[1px] w-full bg-zinc-800"></div>
      </div>

      {/* 2. THE GRID (Text left, Box right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side: The pitch */}
        <div>
          <p className="text-gray-400 leading-relaxed">
            I'm currently looking for new opportunities and freelance projects. 
            Whether you have a question, a project proposal, or just want to say hi, 
            my inbox is always open. I'll try my best to get back to you!
          </p>
        </div>

        {/* Right Side: The Contact Box */}
        
        <div>
            {/* The hard-bordered button from your inspiration */}
            <a href="#home" className="inline-block border border-gray-600 px-6 py-3 font-mono text-sm hover:border-primary-500 hover:text-primary-400 transition-colors">
              Back to top ↑
            </a>
          </div>
      </div>
    </section>
  );
}