import React from 'react';

const Header: React.FC = () => {
    return (
        <nav className="bg-azure-500 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="flex">
                    <li>
                        <a href="/" className="px-4 text-whisper font-semibold hover:text-gray-200 shadow-text">
                            Campeoes
                        </a>
                    </li>
                </ul>
                <div className="text-xl font-bold text-whisper shadow-text">
                    LoL Tracker
                </div>
            </div>
        </nav>
    );
};

export default Header;
