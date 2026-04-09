import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, setIsOpen, currentPath }) {
    const navItems = [
        { label: 'Dashboard', path: '/', icon: '📊' },
        { label: 'Transactions', path: '/transactions', icon: '💳' },
        { label: 'Invoices', path: '/invoices', icon: '📄' },
        { label: 'Expenses', path: '/expenses', icon: '💰' },
        { label: 'Forecasts', path: '/forecasts', icon: '📈' },
        { label: 'Reports', path: '/reports', icon: '📋' },
    ];

    const isActive = (path) => currentPath === path;

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } fixed lg:relative lg:translate-x-0 w-64 h-screen bg-gray-900 text-white flex flex-col transition-transform duration-300 z-40`}
            >
                {/* Header */}
                <div className="p-6 border-b border-gray-700">
                    <h2 className="text-lg font-bold">Menu</h2>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-4 py-6 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)} // Close on mobile
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive(item.path)
                                    ? 'bg-purple-600 text-white font-semibold'
                                    : 'text-gray-300 hover:bg-gray-800'
                                }`}
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-gray-700">
                    <p className="text-xs text-gray-400">CashFlow Tracker v1.0</p>
                </div>
            </aside>
        </>
    );
}