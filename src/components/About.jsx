export default function About() {
  return (
    <section id="about" className="py-20 px-8 max-w-6xl mx-auto">
      
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-mono text-2xl md:text-3xl font-bold text-gray-100 whitespace-nowrap">
          <span className="text-primary-500">#</span>about me
          
        </h2>
        {/* This line now sits after the text and stretches indefinitely */}
        <div className="h-[1px] w-full bg-zinc-800"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side: Standard readable text */}
        <div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Hello! I'm a final year software engineering student. 
            I enjoy building responsive, logic-driven applications from scratch and turning complex problems into clean, modern user interfaces.
          </p>
          <a href={`${import.meta.env.BASE_URL}alex_resume.pdf`} target="_blank" className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-2 font-mono text-sm text-gray-300 hover:text-primary-400 hover:border-primary-500 transition-all">
            [ Download Resume ]
          </a>
        </div>

        {/* Right Side: The Terminal Easter Egg */}
        <div className="font-mono text-sm text-green-400 bg-[#020202] p-6 border border-zinc-800 rounded shadow-2xl overflow-x-auto">
          <p><span className="text-primary-400">const</span> <span className="text-blue-400">developer</span> = {"{"}</p>
          <p className="pl-4">name: <span className="text-amber-300">"Alex"</span>,</p>
          <p className="pl-4">role: <span className="text-amber-300">"Software Engineering Student"</span>,</p>
          <p className="pl-4">skills: [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Flutter"</span>, <span className="text-amber-300">"PHP"</span>],</p>
          <p className="pl-4">status: <span className="text-amber-300">"Continuously Learning"</span>,</p>
          <p>{"}"};</p>
        </div>

      </div>
    </section>
  );
}