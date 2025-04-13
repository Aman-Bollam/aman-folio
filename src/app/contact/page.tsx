export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 bg-[#E6E6E6]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-light mb-4">Contact</h1>
        <div className="border-t border-black my-8"></div>
        
        <div className="max-w-4xl mx-auto mt-11 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex items-center">
            <div className="flex justify-center transform -translate-x-[35%]">
              <img 
                src="/aman-profile.jpg" 
                alt="Aman Bollam" 
                className="w-full max-w-[280px] rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <p className="text-xl mb-12">
              I created this portfolio to share more than what a resume ever could. My passion, my projects, and my personality all live here. If something catches your eye or you just want to talk tech, feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light mb-2">Email</h2>
                <a
                  href="mailto:amanb@terpmail.umd.edu"
                  className="text-blue-600 hover:text-blue-800"
                >
                  amanb@terpmail.umd.edu
                </a>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-2">LinkedIn</h2>
                <a
                  href="https://www.linkedin.com/in/aman-bollam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  @aman-bollam
                </a>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-2">GitHub</h2>
                <a
                  href="https://github.com/Aman-Bollam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  @Aman-Bollam
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 