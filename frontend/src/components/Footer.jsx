export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-gray-400 text-sm py-4 px-6 border-t border-gray-700">
            <div className="flex justify-between items-center">
                <p>&copy; {currentYear} CashFlow Tracker. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#privacy" className="hover:text-white">Privacy Policy</a>
                    <a href="#terms" className="hover:text-white">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
  }