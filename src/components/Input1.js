import { useMemo } from "react";

const Input1 = ({
  title,
  placeholder,
  propFlex,
  propMinWidth,
  propRight,
  propMinWidth1,
}) => {
  const input1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const title1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const input2Style = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  const placeholder1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.063rem] box-border gap-[1.438rem] min-w-[19.563rem] max-w-full z-[1] text-left text-[0.875rem] text-darkslategray-200 font-manrope"
      style={input1Style}
    >
      <div
        className="relative leading-[1.125rem] uppercase font-semibold inline-block min-w-[4.188rem]"
        style={title1Style}
      >
        {title}
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.5rem] box-border max-w-full text-silver-200">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem]">
          <div className="flex flex-row items-start justify-start relative">
            <div
              className="h-[3.125rem] w-[30.063rem] absolute !m-[0] top-[-1rem] right-[-21rem] rounded-3xs bg-royalblue-500 box-border border-[1px] border-solid border-royalblue-500"
              style={input2Style}
            />
            <div
              className="relative leading-[1.25rem] inline-block min-w-[8.063rem] z-[1]"
              style={placeholder1Style}
            >
              {placeholder}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] text-[1.125rem] font-font-awesome-6-pro">
            <div className="flex flex-row items-start justify-start z-[1]">
              <div className="relative leading-[0.625rem] inline-block min-w-[1rem]">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input1;
