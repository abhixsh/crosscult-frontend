import image_1 from '../../../assets/Login_Page/HalfCurve.png';
import image_2 from '../../../assets/Login_Page/HalfCurve2.png';
import Logo from '../../../assets/logo 1.png';

function Login() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-50">
      {/* Decorative Half Moons */}
      <img
        src={image_1}
        alt="Decorative Half Moon"
        className="absolute top-0 right-0 h-64 w-48 transform -translate-x-5 -translate-y-5 md:h-80 md:w-64 lg:h-96 lg:w-72"
      />
      <img
        src={image_2}
        alt="Decorative Half Moon"
        className="absolute bottom-0 left-0 h-64 w-48 transform translate-x-5 translate-y-5 md:h-80 md:w-64 lg:h-96 lg:w-72"
      />

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md shadow hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 md:top-6 md:left-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {/* Login Form */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg mx-4 sm:mx-auto">
        <div className="flex justify-center">
          <img src={Logo} alt="Logo" className="h-10 md:h-12" />
        </div>
        <h2 className="mt-4 text-center text-xl font-bold text-gray-900 md:text-2xl">
          Login To Your Account
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Not a Member?{' '}
            <a
              href="/signup"
              className="font-medium text-blue-600 hover:text-blue-500"
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
