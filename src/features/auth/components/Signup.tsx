import React, { useState } from "react";

// Nota: Asegúrate de que estos assets existan en la carpeta o actualiza las rutas
// import googleIcon from "./google-icon.svg";
// import line1 from "./line-1.svg";
// import line2 from "./line-2.svg";
// import line3 from "./line-3.svg";
// import vector from "./vector.svg";

interface SignupProps {
  onLoginClick: () => void;
  onSignupSuccess: () => void;
}

export const Signup: React.FC<SignupProps> = ({ onLoginClick, onSignupSuccess }) => {
  const [email, setEmail] = useState("");

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de signup real
    onSignupSuccess();
  };

  const handleGoogleSignIn = () => {
    // Lógica para Google Sign In
  };

  return (
    <div className="flex flex-col w-full max-w-[520px] items-start gap-[52px] relative animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Brand/Logo Section */}
      <div className="relative w-[197px] h-10">
        <div className="absolute w-[10.52%] h-[100.00%] top-0 left-[7.11%] bg-[url('/ellipse-9.svg')] bg-[100%_100%]" />
        <div className="absolute w-[34.01%] h-[60.00%] top-[20.00%] left-[25.75%] font-bold text-[#062046] text-2xl tracking-[0] leading-6 whitespace-nowrap">
          Maria
        </div>
        <div className="absolute w-[7.11%] h-full top-0 left-0 bg-primary-600 rounded-sm" />
      </div>

      <div className="flex-col gap-12 flex items-start relative self-stretch w-full flex-[0_0_auto]">
        {/* Title Section */}
        <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
          <h1 className="relative w-fit mt-[-1.00px] font-heading-xxl font-bold text-textdark text-[length:var(--heading-xxl-font-size)] tracking-[var(--heading-xxl-letter-spacing)] leading-[var(--heading-xxl-line-height)] whitespace-nowrap">
            Create your account
          </h1>
          <p className="relative w-fit font-title-md font-medium text-neutral-500 text-[length:var(--title-md-font-size)] tracking-[var(--title-md-letter-spacing)] leading-[var(--title-md-line-height)] whitespace-nowrap">
            Get started with your email
          </p>
        </div>

        <form
          onSubmit={handleContinue}
          className="flex-col gap-10 flex items-start relative self-stretch w-full flex-[0_0_auto]"
        >
          <div className="flex-col gap-6 flex items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex-col gap-6 flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <label
                  htmlFor="email"
                  className="relative w-fit mt-[-1.00px] font-label-lg font-semibold text-textdark text-[length:var(--label-lg-font-size)] tracking-[var(--label-lg-letter-spacing)] leading-[var(--label-lg-line-height)] whitespace-nowrap"
                >
                  Email address
                </label>

                <div className="gap-4 px-4 py-3 rounded-lg border border-solid border-border-100 flex items-center relative self-stretch w-full focus-within:border-primarysource focus-within:ring-2 focus-within:ring-primary-100 transition-all">
                  <div className="relative w-6 h-6 flex-shrink-0 bg-neutral-100 rounded-full flex items-center justify-center">
                    {/* <img
                      className="absolute w-[93.75%] h-[84.38%] top-[15.62%] left-[6.25%]"
                      alt="Vector"
                      src={vector}
                    /> */}
                    <div className="w-3 h-3 border-2 border-neutral-300 rounded-full" />
                  </div>

                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="relative w-full font-body-lg text-neutralsource placeholder:text-neutral-300 bg-transparent border-0 outline-none"
                    aria-label="Email address"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-4 py-3 relative self-stretch w-full bg-primarysource hover:bg-primary-600 text-white font-bold rounded-lg shadow-sm transition-all cursor-pointer"
              >
                <span className="relative w-fit text-[16px]">
                  Continue
                </span>
              </button>
            </div>

            <div className="relative w-full h-5">
              <p className="absolute top-0 left-0 font-body-md text-neutral-500">
                <span>Already have an account?</span>
                <button
                  type="button"
                  onClick={onLoginClick}
                  className="ml-1 text-primarysource font-semibold hover:underline"
                >
                  Log in
                </button>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-[18px] relative self-stretch w-full">
            <div className="flex-1 h-px bg-border-100" />
            <div className="text-neutral-400 font-bold text-[14px]">Or</div>
            <div className="flex-1 h-px bg-border-100" />
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-4 py-3 relative self-stretch w-full rounded-lg border border-solid border-border-100 hover:bg-neutral-50 transition-colors bg-transparent"
          >
            {/* <img
              className="w-[20px] h-[20px]"
              alt="Google icon"
              src={googleIcon}
            /> */}
            <div className="w-5 h-5 bg-neutral-200 rounded-sm" />
            <span className="font-medium text-neutralsource">
              Continue with Google
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};
