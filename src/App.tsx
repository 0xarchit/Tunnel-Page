import { Github, Twitter, Code2, Linkedin, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white relative">
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8" />
              <span className="text-xl font-bold">0xArchit</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/0xArchit" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/0xArchit" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/0xArchit" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text leading-tight px-4">
            Hosted by<br />0xArchit
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Personal tunneling domain for development purposes
          </p>
          
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="bg-gray-800 p-8 rounded-xl w-full max-w-2xl">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Secured by Cloudflare</h3>
              <p className="text-gray-400">
                This domain is protected and accelerated by Cloudflare's global network
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 py-2 sm:py-4">
          <div className="text-center text-gray-400 text-xs sm:text-sm">
            <p>© {new Date().getFullYear()} 0xArchit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;