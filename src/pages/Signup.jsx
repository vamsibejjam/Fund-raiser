import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Dummy signup action — no auth
    if (email.trim()) {
      navigate('/dashboard');
    } else {
      alert('Please enter your email');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-50">
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-md p-6 rounded-lg w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Signup</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border px-3 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Signup
        </button>

        <p className="text-sm text-center">
          Already have an account?{' '}
          <span
            className="text-green-600 hover:underline cursor-pointer"
            onClick={() => navigate('/')}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
