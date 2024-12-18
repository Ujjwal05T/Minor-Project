import React ,{ useState }from 'react'
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom';

function Auth() {
  const [error, setError] = useState('');

  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        // confirmPassword: '',
        role:''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // if (formData.password !== formData.confirmPassword) {
        //   setError('Passwords do not match');
        //   alert('Passwords do not match');
        //   return;
        // }
        setError('');
        try {
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`, formData);
          console.log(response.data);
          navigate('/login');
        } catch (error) {
          console.error('Error registering user:', error);
        }
      };
  return (
    <div>
  <div className="max-w-md mx-auto mt-10 md:shadow-lg rounded-lg bg-inherit p-3 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mx-3">
        <div>
          <label className="block text-sm font-medium ">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium ">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium ">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="null">--</option>
            <option value="USER">User</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium ">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        {/* <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div> */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </form>
      <div className='flex justify-end space-x-2 mr-4'>
        <h2>Already registered ? </h2>
        <Link to="/login"><button className='text-blue-600 font-semibold hover:text-inherit'>Login</button></Link>
        
      </div>
    </div>
    </div>
  )
}

export default Auth