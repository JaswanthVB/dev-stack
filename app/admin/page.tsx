'use client';

import { useState } from 'react';
import { FaShieldAlt, FaUser, FaLock, FaCircleNotch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('adminToken', data.token); // Store the JWT
        router.push('/management'); // Direct to management hub
      } else {
        setError(data.message || 'Login Failed');
      }
    } catch (err) {
      setError('Backend server is offline');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-10 rounded-[2.5rem] shadow-2xl">
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
            <FaShieldAlt size={28} />
          </div>
          <h1 className="text-2xl font-black uppercase tracking-tighter">Vault Auth</h1>
          <p className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase mt-2 text-emerald-500">Secure Protocol</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative group">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" />
            <input 
              required
              type="text" 
              placeholder="System Username"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-emerald-500/50 transition-all text-sm"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="relative group">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" />
            <input 
              required
              type="password" 
              placeholder="Security Key"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-emerald-500/50 transition-all text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-rose-500 text-xs font-bold text-center animate-pulse">{error}</p>}

          <button 
            disabled={loading}
            className="w-full bg-white text-black py-4 rounded-xl font-black uppercase text-xs hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            {loading ? <FaCircleNotch className="animate-spin" /> : 'Initialize Session'}
          </button>
        </form>
      </div>
    </main>
  );
}