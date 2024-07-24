import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    username: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State for confirm password visibility
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+?\d{1,4}[\s-]?)?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$/;

    // Password validation rules
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!data.name) newErrors.name = 'Name is required';
    if (!emailRegex.test(data.email)) newErrors.email = 'Invalid email address';
    if (!data.username) newErrors.username = 'Username is required';
    if (!phoneRegex.test(data.phone)) newErrors.phone = 'Invalid phone number';
    if (!passwordRegex.test(data.password)) newErrors.password = 'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one digit, and one special character';
    if (data.password !== data.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    setErrors({ ...errors, [input.name]: '' }); // Clear specific error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/auth/Register', data);
      console.log(response.data.message);
      alert('Successfully registered');
      navigate('/');
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status < 600) {
        setError(error.response.data.message || 'Error while registering');
      } else {
        setError('An unexpected error occurred');
      }
      alert(error.message || 'An unexpected error occurred');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white w-96 shadow-md p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              className={`w-full h-12 px-4 rounded border ${errors.name ? 'border-red-600' : 'border-gray-300'} focus:outline-none focus:border-violet-800`}
              type="text"
              placeholder="Enter your name"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
            />
            {errors.name && <div className="text-red-600 text-sm">{errors.name}</div>}
          </div>
          <div>
            <input
              className={`w-full h-12 px-4 rounded border ${errors.email ? 'border-red-600' : 'border-gray-300'} focus:outline-none focus:border-violet-800`}
              type="email"
              placeholder="Enter your email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="text-red-600 text-sm">{errors.email}</div>}
          </div>
          <div>
            <input
              className={`w-full h-12 px-4 rounded border ${errors.username ? 'border-red-600' : 'border-gray-300'} focus:outline-none focus:border-violet-800`}
              type="text"
              placeholder="Enter your preferred username"
              name="username"
              value={data.username}
              onChange={handleChange}
              required
            />
            {errors.username && <div className="text-red-600 text-sm">{errors.username}</div>}
          </div>
          <div>
            <input
              className={`w-full h-12 px-4 rounded border ${errors.phone ? 'border-red-600' : 'border-gray-300'} focus:outline-none focus:border-violet-800`}
              type="text"
              placeholder="Enter your phone number"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <div className="text-red-600 text-sm">{errors.phone}</div>}
          </div>
          <div className="relative">
            <input
              className={`w-full h-12 px-4 rounded border ${errors.password ? 'border-red-600' : 'border-gray-300'} focus:outline-none focus:border-violet-800`}
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Create your password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && <div className="text-red-600 text-sm">{errors.password}</div>}
          </div>
          <div className="relative">
            <input
              className={`w-full h-12 px-4 rounded border ${errors.confirmPassword ? 'border-red-600' : 'border-gray-300'} focus:outline-none focus:border-violet-800`}
              type={confirmPasswordVisible ? 'text' : 'password'}
              placeholder="Re-enter your password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.confirmPassword && <div className="text-red-600 text-sm">{errors.confirmPassword}</div>}
          </div>
          <div>
            <select
              id="role"
              name="role"
              className={`border-2 text-sm w-full p-2.5 rounded-md ${errors.role ? 'border-red-600' : ''}`}
              value={data.role}
              onChange={handleChange}
              required
            >
              <option value="">Select role</option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
            {errors.role && <div className="text-red-600 text-sm">{errors.role}</div>}
          </div>
          <div>
            {error && <div className="bg-red-600 text-white p-2 rounded">{error}</div>}
            <button
              className="bg-violet-800 text-white h-10 w-full rounded hover:bg-violet-700 focus:outline-none focus:bg-violet-700"
              type="submit"
            >
              Register
            </button>
          </div>
          <div className="text-center">
            <Link to="/" className="text-violet-800">
              Already have an account? Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
