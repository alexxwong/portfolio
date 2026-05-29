// We import icons from their specific sub-folders (fa = FontAwesome, si = SimpleIcons)
import { FaReact, FaPhp, FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiFlutter, SiMysql, SiJavascript, SiSpringboot } from 'react-icons/si';

export default function Skills() {

  const skills = [
    { name: "html", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "css", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "javascript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "reactjs", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "flutter", icon: <SiFlutter className="text-[#02569B]" /> },
    { name: "php", icon: <FaPhp className="text-[#777BB4]" /> },
    { name: "springboot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
    { name: "mysql", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "java", icon: <FaJava className="text-[#007396]" /> }
  ];

  return (
    <section id="skills" className="py-20 px-8 max-w-6xl mx-auto">
      

      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-mono text-2xl md:text-3xl font-bold text-gray-100 whitespace-nowrap">
          <span className="text-primary-500">#</span>skills
        </h2>
      
        <div className="h-[1px] w-full max-w-[200px] bg-zinc-800"></div>
      </div>


      <div className="flex flex-wrap justify-center gap-10">
        
        {/* 4. THE LOOP */}
        {skills.map((skill, index) => (
          
          
          <div 
            key={index} 
            className="w-28 h-28 border border-zinc-800 bg-[#0a0a0a] aspect-square flex flex-col items-center justify-center gap-4 group hover:border-primary-500 hover:-translate-y-2 transition-all duration-300"
          >
            
        
            <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            
          
            <span className="font-mono text-sm text-zinc-500 group-hover:text-primary-400 transition-colors">
              {skill.name}
            </span>
            
          </div>
          
        ))}
        

      </div>
    </section>
  );
}