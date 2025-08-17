import { DocumentPlusIcon, ArrowDownTrayIcon, ArrowUpOnSquareIcon } from '@heroicons/react/24/solid'

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <h1 className="text-2xl font-bold text-gray-900">
            AI Resume Builder
          </h1>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">
              <DocumentPlusIcon className="h-5 w-5" />
              New Resume
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">
              <ArrowUpOnSquareIcon className="h-5 w-5" />
              Save
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors">
              <ArrowDownTrayIcon className="h-5 w-5" />
              Export PDF
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
