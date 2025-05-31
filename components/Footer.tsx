export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-6 space-y-2">
              <p className="text-xl">contact@ctrlx.com</p>
              <p className="text-xl">+91 9652804722</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">All Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6">Contact Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <span className="mr-2">Instagram</span>
                <span>CtrlX</span>
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <span className="mr-2">Twitter</span>
                <span>CtrlX</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">CtrlXStudios@2025. All rights reserved.</p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Eleven</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twelve</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Thirteen</a>
          </div>
        </div>
      </div>
    </footer>
  );
}