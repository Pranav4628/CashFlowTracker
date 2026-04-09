import { useState, useEffect } from 'react';

export default function Header({ onMenuClick }) {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
            {/* Left: Menu Toggle (mobile) + Logo */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 hover:bg-gray-100 rounded"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <h1 className="text-xl font-bold text-purple-600">CashFlow Tracker</h1>
            </div>

            {/* Center: Date & Time */}
            <div className="hidden md:block text-sm text-gray-600">
                {currentTime}
            </div>

            {/* Right: User Menu */}
            <div className="relative">
                <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                    <div className="w-8 h-8 bg-purple-500 rounded-full text-white flex items-center justify-center text-sm font-bold">
                        U
                    </div>
                    <span className="hidden sm:inline text-sm">User</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </button>

                {/* Dropdown Menu */}
                {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                        <a href="#settings" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                            ⚙️ Settings
                        </a>
                        <a href="#profile" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                            👤 Profile
                        </a>
                        <hr className="my-1" />
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600">
                            🚪 Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}