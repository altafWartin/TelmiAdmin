import React from "react";

const Login = () => {
  return (
    <div className="w-full h-[70 rem] relative [background:linear-gradient(180deg,_#3d8de3,_rgba(61,_141,_227,_0.43))] overflow-hidden flex flex-row items-start justify-center pt-[9.5rem] px-[1.25rem] pb-[9.438rem] box-border leading-[normal] tracking-[normal]">

      <form className="m-0 w-[37.813rem] rounded-13xl bg-gray-600 flex flex-col items-start justify-start pt-[3.75rem] pb-[3.813rem] pr-[3.625rem] pl-[3.688rem] box-border gap-[0.875rem] max-w-full z-[1] mq650:pl-[1.813rem] mq650:pr-[1.813rem] mq650:box-border mq725:pt-[2.438rem] mq725:pb-[2.5rem] mq725:box-border">
      <img
        className="w-[37.813rem] h-[45.063rem] relative rounded-13xl hidden max-w-full"
        alt=""
        src="/card.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[0rem] pb-[0.188rem]">
        <img
          className="h-[6.188rem] w-[13.75rem] relative object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/image-2023-06-10t12-20-26-626z-11@2x.png"
        />
      </div>
      <div className="relative text-[1.25rem] font-heading-heading-4 text-background-2 text-left inline-block min-w-[3.188rem] z-[2] mq450:text-[1rem]">
        Email
      </div>
      <div className="self-stretch rounded-3xs bg-background-2 flex flex-row items-start justify-start pt-[1.25rem] px-[1.25rem] pb-[1.313rem] box-border max-w-full z-[2]">
        <div className="h-[3.75rem] w-[30.5rem] relative rounded-3xs bg-background-2 hidden max-w-full" />
        <div className="w-[2.563rem] relative text-[1rem] font-heading-heading-4 text-silver-300 text-center inline-block min-w-[2.563rem] z-[3]">
          Email
        </div>
      </div>
      <div className="relative text-[1.25rem] font-heading-heading-4 text-background-2 text-left inline-block min-w-[5.813rem] z-[2] mq450:text-[1rem]">
        Password
      </div>
      <div className="self-stretch rounded-3xs bg-background-2 flex flex-row items-start justify-between pt-[1.25rem] pb-[1.313rem] pr-[1.5rem] pl-[1.25rem] box-border max-w-full gap-[1.25rem] z-[2]">
        <div className="h-[3.75rem] w-[30.5rem] relative rounded-3xs bg-background-2 hidden max-w-full" />
        <div className="relative text-[1rem] font-heading-heading-4 text-silver-300 text-left inline-block min-w-[4.625rem] z-[3]">
          Password
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[1.625rem] h-[0.938rem] relative z-[3]"
            alt=""
            src="/vector1.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.5rem]">
        <div className="w-[10.313rem] relative text-[1.25rem] tracking-[0.01em] leading-[120%] font-heading-heading-4 text-background-2 text-right inline-block z-[2] mq450:text-[1rem] mq450:leading-[1.188rem]">
          Forgot passwod?
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.438rem] box-border max-w-full">
        <div className="flex-1 rounded-3xs bg-royalblue-200 shadow-[0px_4px_5px_rgba(0,_0,_0,_0.15)] box-border flex flex-row items-start justify-center py-[1.063rem] px-[1.25rem] max-w-full z-[2] border-[1.5px] border-solid border-dodgerblue">
          <div className="h-[3.75rem] w-[30.5rem] relative rounded-3xs bg-royalblue-200 shadow-[0px_4px_5px_rgba(0,_0,_0,_0.15)] box-border hidden max-w-full border-[1.5px] border-solid border-dodgerblue" />
          <div className="relative text-[1.125rem] font-heading-heading-4 text-background-2 text-left inline-block min-w-[2.938rem] z-[1]">
            Login
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.438rem] box-border max-w-full">
        <div className="flex-1 rounded-3xs bg-darkslategray-200 overflow-hidden flex flex-row items-start justify-center py-[1.188rem] px-[1.25rem] box-border gap-[0.625rem] max-w-full z-[2]">
          <div className="h-[3.75rem] w-[30.5rem] relative rounded-3xs bg-darkslategray-200 hidden max-w-full" />
          <img
            className="h-[1.375rem] w-[1.375rem] relative object-contain min-h-[1.375rem] z-[1]"
            alt=""
            src="/icongoogle@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem]">
            <div className="relative text-[0.938rem] leading-[1.25rem] font-semibold font-manrope text-gray-200 text-left z-[1]">
              Sing In with Google
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-3xs bg-darkslategray-200 overflow-hidden flex flex-row items-start justify-center p-[1.25rem] box-border gap-[0.625rem] max-w-full z-[2]">
        <div className="h-[3.75rem] w-[30.5rem] relative rounded-3xs bg-darkslategray-200 hidden max-w-full" />
        <div className="flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[1.375rem] h-[1.125rem] relative z-[1]"
            alt=""
            src="/icontwitter.svg"
          />
        </div>
        <div className="relative text-[0.938rem] leading-[1.25rem] font-manrope text-gray-200 text-left z-[1]">
          Sing In with Twitter
        </div>
      </div>
    </form>
    </div>
  );
};

export default Login;
