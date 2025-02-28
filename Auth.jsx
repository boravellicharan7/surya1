import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import "tailwindcss/tailwind.css";

const firebaseConfig = {
  apiKey: "AIzaSyDgmkb0JcAdUsOX9hT0B-1ivWPRS09uEtQ",
  authDomain: "surya-exports-and-imports.firebaseapp.com",
  projectId: "surya-exports-and-imports",
  storageBucket: "surya-exports-and-imports.firebasestorage.app",
  messagingSenderId: "857608981402",
  appId: "1:857608981402:web:a1b1f78bccb2d43ef98823",
  measurementId: "G-VM4021L0SR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert("Registration Successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert("Login Successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      alert("Logged out successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('../src/assets/login.jpg')" }}></div>
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10 shadow-md">
        <h2 className="text-2xl font-bold mb-5">Welcome to Surya Exports & Imports</h2>
        {!user ? (
          <>
            <input className="w-full p-2 mb-4 border rounded" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input className="w-full p-2 mb-4 border rounded" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button className="w-full p-2 bg-yellow-500 text-white rounded mb-2" onClick={handleLogin}>Login</button>
            <button className="w-full p-2 bg-gray-300 text-black rounded" onClick={handleRegister}>Register</button>
            <a href="#" className="text-blue-500 mt-2">Forgot your password?</a>
          </>
        ) : (
          <button className="w-full p-2 bg-red-500 text-white rounded" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
