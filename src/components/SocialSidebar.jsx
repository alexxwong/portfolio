// We grab specific social icons from the FontAwesome (fa) icon pack
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function SocialSidebar() {
  return (

    <div className="fixed bottom-0 left-8 hidden md:flex flex-col items-center gap-6">
      
     <div className="w-[1px] h-[90vh] bg-zinc-800 mb-2 -z-30"></div>

      
      <a 
        href="https://github.com/alexxwong" 
        target="_blank" 
        rel="noopener noreferrer"
        // hover:-translate-y-1 makes the icon physically jump up slightly when hovered
        className="text-zinc-500 hover:text-primary-400 hover:-translate-y-1 transition-all duration-300 text-xl"
      >
        <FaGithub />
      </a>

      <a 
        href="https://www.linkedin.com/in/alex-wong-0ba8a1276/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-zinc-500 hover:text-primary-400 hover:-translate-y-1 transition-all duration-300 text-xl"
      >
        <FaLinkedin />
      </a>

      <a 
        href="mailto:alexwongwyf@gmail.com" 
        className="text-zinc-500 hover:text-primary-400 hover:-translate-y-1 transition-all duration-300 text-xl"
      >
        <FaEnvelope />
      </a>

   
      <div className="w-[1px] h-24 bg-zinc-800 mt-2"></div>

    </div>
  );
}