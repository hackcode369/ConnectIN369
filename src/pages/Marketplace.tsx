import React from 'react';
import { Search, Filter } from 'lucide-react';

const Marketplace: React.FC = () => {
  // Placeholder NFT data
  const nfts = [
    { id: 1, title: 'Digital Dreamscape', creator: 'Alice', price: 0.5, image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80' },
    { id: 2, title: 'Neon Nights', creator: 'Bob', price: 0.8, image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80' },
    { id: 3, title: 'Crypto Punk', creator: 'Charlie', price: 1.2, image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">NFT Marketplace</h1>
      <div className="flex mb-6">
        <div className="relative flex-grow mr-4">
          <input
            type="text"
            placeholder="Search NFTs..."
            className="w-full px-4 py-2 border rounded-lg"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          <Filter className="mr-2" size={20} /> Filter
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {nfts.map((nft) => (
          <div key={nft.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={nft.image} alt={nft.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{nft.title}</h2>
              <p className="text-gray-600 mb-2">Created by {nft.creator}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold">{nft.price} ETH</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;