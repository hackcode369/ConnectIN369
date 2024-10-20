import React from 'react';
import { User, Image, Box } from 'lucide-react';

const Profile: React.FC = () => {
  // Placeholder data
  const user = {
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Digital artist and metaverse enthusiast',
    nftCount: 12,
    followers: 1024,
    following: 256
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full mr-4" />
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{user.bio}</p>
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <div className="text-center">
            <p className="font-semibold">{user.nftCount}</p>
            <p className="text-gray-600">NFTs</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">{user.followers}</p>
            <p className="text-gray-600">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">{user.following}</p>
            <p className="text-gray-600">Following</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <button className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded">
            <User className="mr-2" size={18} /> Edit Profile
          </button>
          <button className="flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded">
            <Image className="mr-2" size={18} /> Create NFT
          </button>
          <button className="flex items-center justify-center bg-purple-600 text-white px-4 py-2 rounded">
            <Box className="mr-2" size={18} /> My Metaverse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;