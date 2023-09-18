import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import "bootstrap/dist/css/bootstrap.css";

const ForgotPassword = () => {
  return (
    <div className=" bg-neutral-200">
      <Header />
      <div className="flex w-[90vw] mx-[5vw] md:mx-[30vw] md:w-[40vw] rounded-lg mb-6 flex-col my-5 bg-white">
        <div className="flex bg-blue-600 w-full p-12 gap-12 rounded-t-lg">
          <img
            width="200"
            height="200"
            alt="Image"
            src="src/assets/images/auth/img-1.png"
            className="w-[100px] md:w-[150px] lg:w-[200px]"
          />
          <h1 className="text-white text-xl md:text-3xl">Forgot Password?</h1>
        </div>
        <div className="flex-col p-5 items-center justify-center">
          <h5 className="text-neutral-400 text-[14px] font-semibold">
            Reset password with Toner.
          </h5>
          <div className="p-2 items-center flex justify-center w-[95%] mx-4 alert alert-borderless alert-warning text-center mt-4">
            <span className="text-yellow-600 text-[14px]">
              Enter your email and instructions will be sent to you!
            </span>
          </div>
          <h4 className="mx-4 mb-3 text-[14px] font-semibold mt-6">Email</h4>
          <input
            type="email"
            className="mx-4 p-2 px-5 w-[95%] outline-none focus:border-blue-500 border rounded-md"
            placeholder="Enter your email or username "
          />

          <button className="mx-4 my-4 w-[95%] bg-blue-600 hover:bg-blue-500 transition delay-75 text-white p-2 rounded-md text-[14px]">
            Send Reset Link
          </button>
          <div className="flex items-center justify-center flex-col gap-4 mt-5">
            <h4 className="text-[14px] font-medium mb-4">
              Wait, I remember my password...
              <span className="text-blue-600 underline cursor-pointer font-semibold text-[14px]">
                Click here
              </span>
            </h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
