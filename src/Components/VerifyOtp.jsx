
import img from "../Images/mobile-verification.jpg";

const OTPVerify = () => {
  

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-rose-50">
        <div className="w-2/4 bg-white h-1/2">
          <img src={img} alt="login" className="w-auto min-h-[150px]" />
          <div className="mx-auto  w-[339px] my-9">
            <h1 className="mt-6 text-4xl font-extrabold text-gray-700">
              Verify with OTP
            </h1>
            
            <div className="flex flex-row w-56 mx-6 my-20">
              <input
                type="text"
                className="w-10 h-12 m-auto text-2xl text-center border-2 border-black rounded-xl "
              />
              <input
                type="text"
                className="w-12 h-12 m-auto text-2xl text-center border-2 border-black rounded-xl "
              />
              <input
                type="text"
                className="w-12 h-12 m-auto text-2xl text-center border-2 border-black rounded-xl "
              />
              <input
                type="text"
                className="w-12 h-12 m-auto text-2xl text-center border-2 border-black rounded-xl "
              />
            </div>

            <div className="font-medium ">
              <h1 className="text-xl scroll-mb-96">
                Didn't get OTP?{" "}
                <span className="text-[#ee5f73]">RESEND OTP</span>
              </h1>
            </div>

            <div className="font-medium mt-7">
              <h1 className="text-xl font1 scroll-mb-96">
                Have trouble logging in?{" "}
                <span className="text-[#ee5f73]">Get help</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPVerify;