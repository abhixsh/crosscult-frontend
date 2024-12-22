import image_1 from '../../../assets/Login_Page/HalfCurve.png';
import image_2 from '../../../assets/Login_Page/HalfCurve2.png';

function Login() {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen  overflow-hidden">
      {/* Decorative Half Moons */}
      <img
        src={image_1}
        alt="Top Right Half Moon"
        className="absolute top-0 right-0 w-1/3 max-w-[500px] min-w-[300px] transform -translate-y-1/4"
      />
      <img
        src={image_2}
        alt="Bottom Left Half Moon"
        className="absolute bottom-0 left-0 w-1/3 max-w-[500px] min-w-[300px] transform translate-y-1/4"
      />

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md p-10 space-y-8 bg-white shadow-2xl rounded-2xl mx-4">
        
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Login To Your Account
        </h2>
        
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-md font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:border-[#ff6a00]"
              required
            />
          </div>
          
          <div>
            <label
              htmlFor="password"
              className="block text-md font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:border-[#ff6a00]"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#ff6a00] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#ff6a00]/90 focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:ring-offset-2 transition duration-300"
          >
            Login
          </button>
        </form>
        
        <div className="text-center">
          <p className="text-md text-gray-600">
            Not a Member?{' '}
            <a
              href="/signup"
              className="font-semibold text-[#ff6a00] hover:text-[#ff6a00]/80 transition duration-300"
            >
              Create an Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;