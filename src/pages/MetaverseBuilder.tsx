import React, { useState } from 'react';
import { Box, Plus, Save } from 'lucide-react';

const MetaverseBuilder: React.FC = () => {
  const [objects, setObjects] = useState<string[]>([]);

  const addObject = (type: string) => {
    setObjects([...objects, type]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Metaverse Builder</h1>
      <div className="flex mb-6">
        <button
          onClick={() => addObject('cube')}
          className="bg-blue-600 text-white px-4 py-2 rounded mr-2 flex items-center"
        >
          <Box className="mr-2" size={18} /> Add Cube
        </button>
        <button
          onClick={() => addObject('sphere')}
          className="bg-green-600 text-white px-4 py-2 rounded mr-2 flex items-center"
        >
          <Plus className="mr-2" size={18} /> Add Sphere
        </button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded flex items-center">
          <Save className="mr-2" size={18} /> Save Metaverse
        </button>
      </div>
      <div className="bg-gray-200 p-4 rounded-lg min-h-[400px]">
        <h2 className="text-xl font-semibold mb-4">Your Metaverse Space</h2>
        {objects.length === 0 ? (
          <p className="text-gray-600">Start adding objects to build your metaverse!</p>
        ) : (
          <ul>
            {objects.map((object, index) => (
              <li key={index} className="mb-2">
                {object === 'cube' ? <Box className="inline-block mr-2" size={18} /> : <Plus className="inline-block mr-2" size={18} />}
                {object.charAt(0).toUpperCase() + object.slice(1)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MetaverseBuilder;