'use client';

import { useState } from 'react';
import Link from 'next/link';
import API from '@/utils/api'; // apne project ke hisaab se path adjust karen

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post('/auth/login', formData);

      if (res.status === 200) {
        setMessage('✅ Login successful! Redirecting...');
        setTimeout(() => (window.location.href = '/'), 2000); // zarurat ho to path change karein
      } else {
        setMessage(res.data.error || '❌ Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      setMessage(error.response?.data?.error || '❌ Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <p>Login to access your account and continue using our services.</p>

        {message && <div className="auth-message">{message}</div>}

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

        <button type="submit" className="my-3 auth-button globalBtn fw-bold text-light">
          Login
        </button>

        <p className="auth-footer">
          Don’t have an account? <Link href="/signup">Create One</Link>
        </p>
      </form>
    </div>
  );
}
