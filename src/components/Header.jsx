import React from 'react';

const Header = ({ name, referralCode }) => {
  return (
    <div className="bg-blue-600 text-white p-4 rounded-md shadow-md mb-4">
      <h1 className="text-2xl font-bold">Welcome, {name} 👋</h1>
      <p className="mt-1">Your Referral Code: <span className="font-semibold">{referralCode}</span></p>
    </div>
  );
};

export default Header;
