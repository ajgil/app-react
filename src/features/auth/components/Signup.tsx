import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import demoLogo from "../../../assets/demo_logo.png";

export const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup success
    navigate("/auth/otp", { state: { email } });
  };

  const handleGoogleSignIn = () => {
    // Lógica para Google Sign In
  };

  return (
    <div className="flex flex-col w-full max-w-[520px] items-start gap-[52px] relative animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Brand/Logo Section */}
      <div className="flex items-center gap-3 relative h-10">
        <img src={demoLogo} alt="Maria Logo" className="h-full w-auto object-contain" />
        <span className="font-heading-md font-bold text-textdark tracking-tight">
          Maria
        </span>
      </div>

      <div className="flex-col gap-12 flex items-start relative self-stretch w-full flex-[0_0_auto]">
        {/* Title Section */}
        <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
          <h1 className="relative w-fit mt-[-1.00px] font-heading-xxl font-bold text-textdark text-[length:var(--heading-xxl-font-size)] tracking-[var(--heading-xl-letter-spacing)] leading-[var(--heading-xl-line-height)] whitespace-nowrap">
            Create your account
          </h1>
          <p className="relative w-fit font-title-md font-medium text-neutral-400 text-[length:var(--title-md-font-size)] tracking-[var(--title-md-letter-spacing)] leading-[var(--title-md-line-height)] whitespace-nowrap">
            Get started with your email
          </p>
        </div>

        <form
          onSubmit={handleContinue}
          className="flex-col gap-10 flex items-start relative self-stretch w-full flex-[0_0_auto]"
        >
          <div className="flex-col gap-6 flex items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
              <label
                htmlFor="email"
                className="relative w-fit mt-[-1.00px] font-label-lg font-semibold text-textdark"
              >
                Email address
              </label>

              <div className="gap-4 px-4 py-3 rounded-lg border border-solid border-border-100 flex items-center relative self-stretch w-full focus-within:border-primarysource focus-within:ring-2 focus-within:ring-primary-100 transition-all">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="relative w-full font-body-lg text-neutralsource placeholder:text-neutral-300 bg-transparent border-0 outline-none"
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

            <div className="relative w-full h-5">
              <p className="absolute top-0 left-0 font-body-md text-neutral-500">
                <span>Already have an account?</span>
                <Link
                  to="/auth/login"
                  className="ml-1 text-primarysource font-semibold hover:underline"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>

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
