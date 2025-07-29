'use client';

import { useState } from 'react';
import Link from 'next/link';
import API from '@/utils/api';  // apne project ke hisaab se path adjust karen

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post('/auth/signup', formData);  // yahan axios instance use ho raha hai

      if (res.status === 201 || res.status === 200) {
        setMessage('Account created! Redirecting...');
        setTimeout(() => (window.location.href = '/login'), 2000);
      } else {
        setMessage(res.data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      setMessage(error.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Create An Account</h2>
        <p className='my-3'>Create an account to enjoy all the services without any ads for free!</p>

        {message && <div className="auth-message">{message}</div>}

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="auth-input"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="auth-input"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="auth-input"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className=" mt-3 text-light fw-bold globalBtn auth-button">
          Create Account
        </button>

        <p className="auth-footer mt-5">
          Already Have An Account?  &nbsp;<Link href="/login">Sign In</Link>
        </p>
      </form>
    </div>
  );
}
