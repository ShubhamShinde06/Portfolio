export default function Component() {
  return (
    <div className="bg-[white] text-[black] text-foreground font-inter absolute top-0 w-[100%]">
      <header className="bg-[#18181B] text-[white] px-8 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Shubham Jaywant Shinde</h1>
          <p className="text-sm">Web Developer</p>
        </div>
        <div className="space-y-2 text-right">
          <p>officialshubhamorg@gmail.com</p>
          <p>+91 9892436240</p>
          <p>Malad, suburb of Mumbai</p>
        </div>
      </header>
      <main className="px-8 py-12 max-w-3xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Objective</h2>
          <p>
            A highly motivated and enthusiastic fresher in full stack web development with a strong foundation in front-end and back-end technologies. Seeking an entry-level position to leverage my skills and knowledge to contribute to the success of a dynamic organization.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Bachelor of Science in Information Technology</h3>
              <p className="text-muted-foreground">University of Mumbai,</p>
              <p className="text-muted-foreground">Graduated: May 2024</p>
            </div>
            <div className="ml-3"><span>&#x25CF;</span> <span>Relevant Courses: Web Development, Database Systems, Software Project Management, Internet of Things</span></div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">Intern/Junior Web Developer</h3>
              <p className="text-muted-foreground">Tawasul Tech, Mumbai</p>
              <p className="text-muted-foreground">Sep 2024 - Present</p>
              <ul className="list-disc pl-4 mt-2">
                <li><span>&#x25CF;</span> Developed and maintained complex web applications using Next, HTML, jquery, CSS, Javascript, Wordpress.</li>
                <li><span>&#x25CF;</span> Collaborated with cross-functional teams to design and implement new features.</li>
                <li><span>&#x25CF;</span> Optimized application performance and scalability.</li>
                <li><span>&#x25CF;</span> Participated in code reviews and mentored junior developers.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Freelance Web Developer</h3>
              <p className="text-muted-foreground">Mumbai</p>
              <p className="text-muted-foreground">Q3, 2024</p>
              <ul className="list-disc pl-4 mt-2">
                <li><span>&#x25CF;</span> Developed and maintained responsive web applications using React, Mysql, Node js, Express js.</li>
                <li><span>&#x25CF;</span> Collaborated with designers to implement user interface designs.</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold">Scripting Languages</h3>
              <p>JavaScript</p>
            </div>
            <div>
              <h3 className="font-bold">Frameworks and Libraries</h3>
              <p>React, Next, Node.js, Express, MongoDB, SQL</p>
            </div>
            <div>
              <h3 className="font-bold">Tools and Technologies</h3>
              <p>Git, GitHub</p>
            </div>
            <div>
              <h3 className="font-bold">Other Skills</h3>
              <p>Responsive Design, Web page speed test, HTML, jquery, CSS, Bootstrap </p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">References</h2>
          <p>Available upon request.</p>
        </section>
      </main>
    </div>
  )
}