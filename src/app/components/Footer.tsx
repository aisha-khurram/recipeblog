// src/components/Footer.tsx
export default  function Footer ()  {
    return (
        <footer className="bg-purple-950 text-white py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Recipe Blog. All rights reserved.
                </p>
                <div className="mt-2">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-2">
                        Twitter
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-2">
                        Facebook
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-2">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};

