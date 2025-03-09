import { FaBookOpen } from "react-icons/fa6";
import TimelineItem from "./Timeline.jsx";


const Education = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 mt-12">
      {/* Education Section */}
      <div className="w-full max-w-[500px]">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <FaBookOpen className="text-[#FDC763]" /> Education
        </h1>
        <div className="mt-6 border-l-2 border-[#383838] pl-6 space-y-6">
          <TimelineItem
            title="Jashbhai Maganbhai Patel College Of Commerce (JMPC)"
            institution="2022 — 2024"
            description="Completed studies in commerce with a focus on financial analysis and business strategies."
          />
          <TimelineItem
            title="Sanskar Dham Vidyalaya (SKM)"
            institution="2020 — 2022"
            description="Studied fundamental subjects including mathematics, economics, and business management."
          />
          <TimelineItem
            title="Jijamata Vidya Mandir"
            institution="2020"
            description="Completed secondary education with strong academic performance."
          />
        </div>
      </div>

      {/* Experience Section */}
      <div className="w-full max-w-[500px]">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <FaBookOpen className="text-[#FDC763]" /> Experience
        </h1>
        <div className="mt-6 border-l-2 border-[#383838] pl-6 space-y-6">
          <TimelineItem
            title="Intern/Junior Web Developer"
            institution="2024"
            description="Developed and maintained complex web applications using Next.js, HTML, jQuery, CSS, JavaScript, and WordPress."
          />
          <TimelineItem
            title="Freelance Web Developer"
            institution="2024"
            description="Built and optimized scalable web applications using React, MySQL, Node.js, and Express.js."
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
