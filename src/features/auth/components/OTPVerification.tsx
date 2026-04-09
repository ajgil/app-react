import React, { type ClipboardEvent, type KeyboardEvent, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import demoLogo from "../../../assets/demo_logo.png";

export const OTPVerification: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "user@example.com";

  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!pasted) return;
    const newOtp = [...otp];
    for (let i = 0; i < pasted.length; i++) {
      newOtp[i] = pasted[i];
    }
    setOtp(newOtp);
    const nextIndex = Math.min(pasted.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleVerifyClick = () => {
    const code = otp.join("");
    if (code.length === 6) {
      console.log("Verificando:", code);
      navigate("/auth/role-selection");
    }
  };

  const handleResendClick = () => {
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
    console.log("Reenviando...");
  };

  const isComplete = otp.every((d) => d !== "");

  return (
    <div className="flex flex-col w-full max-w-[520px] items-start gap-[52px] relative animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Brand/Logo Section */}
      <div className="flex items-center gap-3 relative h-10">
        <img src={demoLogo} alt="Maria Logo" className="h-full w-auto object-contain" />
        <span className="font-heading-md font-bold text-textdark tracking-tight">
          Maria
        </span>
      </div>

      <div className="flex flex-col items-start gap-12 w-full relative self-stretch">
        <div className="inline-flex flex-col items-start gap-3 relative">
          <h1 className="relative w-fit mt-[-1.00px] font-heading-xxl font-bold text-textdark text-[length:var(--heading-xxl-font-size)] tracking-[var(--heading-xxl-letter-spacing)] leading-[var(--heading-xxl-line-height)] whitespace-nowrap">
            Email Verification
          </h1>

          <p className="relative w-full font-title-md font-medium text-neutral-500 text-[length:var(--title-md-font-size)] tracking-[var(--title-md-letter-spacing)] leading-[var(--title-md-line-height)]">
            <span>We&apos;ve sent a verification code to </span>
            <span className="text-textdark font-semibold">{email}</span>
            <span> to verify your email address and activate your account.</span>
          </p>
        </div>

        <div className="flex flex-col items-start gap-10 w-full relative self-stretch">
          <div className="flex flex-col items-center gap-6 w-full relative self-stretch">
            <div className="flex flex-col items-start gap-6 w-full relative self-stretch">
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                <label
                  htmlFor="otp-input-0"
                  className="relative w-fit mt-[-1.00px] font-label-lg font-semibold text-textdark"
                >
                  Enter 6-digit verification code
                </label>

                <div
                  className="flex h-14 items-start gap-4 w-full relative self-stretch"
                  role="group"
                  aria-label="One-time password input"
                >
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-input-${index}`}
                      ref={(el) => { inputRefs.current[index] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      aria-label={`Digit ${index + 1} of 6`}
                      className="flex-1 text-center text-textdark text-xl font-semibold rounded-lg border border-solid border-border-100 bg-transparent focus:outline-none focus:border-primarysource focus:ring-2 focus:ring-primary-100 transition-all h-full"
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleVerifyClick}
                disabled={!isComplete}
                className={`flex items-center justify-center gap-4 py-3 relative self-stretch w-full rounded-lg shadow-sm transition-all font-bold ${isComplete
                  ? "bg-primarysource hover:bg-primary-600 text-white cursor-pointer"
                  : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                  }`}
              >
                <span className="relative w-fit text-[16px]">
                  Verify &amp; Continue
                </span>
              </button>
            </div>

            <div className="relative w-full text-center">
              <p className="font-body-md text-neutral-500">
                <span>Didn&apos;t receive any code?</span>
                <button
                  type="button"
                  onClick={handleResendClick}
                  className="ml-2 text-primarysource font-semibold hover:underline cursor-pointer bg-transparent border-0 p-0"
                >
                  Resend code
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
