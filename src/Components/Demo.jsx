import { useState } from "react";
import img from "./login.webp";
import ReCAPTCHA from "react-google-recaptcha";

const Demo = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(false);
  const handleContinueClick = () => {
    setShowCaptcha(true);
  };
  
  const handleMobileNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setMobileNumber(input.slice(0, 10)); // Limit to 10 digits
  };
  const onChange = ()=> {
    
  } 
    
  return (
    <div>
      <div className={`w-[100%] h-screen bg-[#fcecf4] py-10`}>
        <div className="h-[500px] bg-white mx-auto w-[100vw] sm:w-[430px] md:w-[430px] lg:w-[430px] xl:w-[430px] 2xl:w-[430px]">
          <img src={img} alt="login" className="w-auto min-h-[150px]" />
          <div className="mx-auto w-[330px] my-8">
            <h1 className="mb-5 text-2xl font-medium font1">
              Login <span className="text-lg">or</span> Signup
            </h1>
            <div className="relative">
              <span className="absolute text-gray-500 left-3 top-2">+91 </span>
              <input 
                type="tel"
                id="mobileNumber"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                maxLength="10" // Maximum length excluding the +91 code
                placeholder="   Mobile Number*"
                required
                className="pl-10 w-full h-10 border-[1px] focus:border-[#353535] focus:border-[1px] focus:outline-none border-[#6a696993] p-2 web appearance-none"
              />
            </div>
            <h1 className="mt-5 text-sm font1">
              By Continuing, I agree to the{" "}
              <span className="text-[#ee5f73]">Terms of Use</span> &{" "}
              <span className="text-[#ee5f73]"> Privacy Policy</span>
            </h1>
            {/* {<ReCAPTCHA
    sitekey="6LcoUp4pAAAAAOBKRHEvQEYOSo21EUtIuLgVGhYR"
    onChange={onChange}
  />} */}
  
            <button
             onClick = {handleContinueClick}
              type="submit"
              className="bg-[#ee5f73] text-white w-full font-semibold text-lg py-[6px] my-5"
            >
              CONTINUE 
              {showCaptcha && (
        <ReCAPTCHA
          sitekey="6LcoUp4pAAAAAOBKRHEvQEYOSo21EUtIuLgVGhYR"
          onChange={onChange}
        />
      )}
            </button>
            <h1 className="text-sm font1">
              Have trouble logging in?{" "}
              <span className="text-[#ee5f73]">Get help</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;