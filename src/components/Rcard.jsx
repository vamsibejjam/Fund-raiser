import React from 'react';

const RewardCard = ({ title, description, unlocked }) => {
  return (
    <div
      className={`p-4 border rounded-lg shadow-sm transition-all ${
        unlocked ? 'bg-green-100 border-green-400' : 'bg-gray-100 border-gray-300'
      }`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      {unlocked && (
        <span className="text-sm text-green-600 font-medium mt-2 inline-block">✅ Unlocked</span>
      )}
    </div>
  );
};

export default RewardCard;
