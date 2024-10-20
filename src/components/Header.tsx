import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, ShoppingBag, Box } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">ConnectIN</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="flex items-center"><Home className="mr-1" size={18} /> Home</Link></li>
            <li><Link to="/profile" className="flex items-center"><User className="mr-1" size={18} /> Profile</Link></li>
            <li><Link to="/marketplace" className="flex items-center"><ShoppingBag className="mr-1" size={18} /> Marketplace</Link></li>
            <li><Link to="/metaverse-builder" className="flex items-center"><Box className="mr-1" size={18} /> Metaverse</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;