import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/user/login", form);
    alert("Welcome " + res.data.user.name);
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto p-4 mt-10 border">
      <h2 className="text-xl mb-4">Login</h2>
      <input type="email" placeholder="Email" className="w-full mb-2 border p-2"
        onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" className="w-full mb-2 border p-2"
        onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
    </form>
  );
}
// Login.jsx - Placeholder content
