
import { SignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-brand-red/10 to-brand-darkRed/10">
      <div className="p-8 rounded-2xl shadow-lg bg-white w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-red to-brand-darkRed flex items-center justify-center">
              <span className="text-white font-bold text-xl">RB</span>
            </div>
            <span className="font-bold text-2xl text-brand-red">
              RideBus
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Sign in to continue your journey</p>
        </div>
        
        <SignIn redirectUrl="/dashboard" />
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <button 
              onClick={() => navigate("/sign-up")}
              className="text-brand-red font-medium hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
