import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to ConnectIN</h1>
      <p className="text-xl mb-8">The next-gen social media platform where creativity meets the metaverse.</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Create and Trade NFTs</h2>
          <p className="mb-4">Turn your digital creations into valuable assets and trade them in our marketplace.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
            Explore Marketplace <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Build Your Metaverse</h2>
          <p className="mb-4">Design and customize your own virtual space to showcase your NFTs and interact with others.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center">
            Start Building <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;