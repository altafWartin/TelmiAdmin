const Input = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.125rem] box-border gap-[1.375rem] min-w-[19.563rem] max-w-full z-[1] text-left text-[0.875rem] text-darkslategray-200 font-manrope">
      <div className="relative leading-[1.125rem] uppercase font-semibold inline-block min-w-[6.813rem]">
        Product Name
      </div>
      <div className="flex flex-row items-start justify-start py-[0rem] px-[0.5rem] text-silver-200">
        <div className="flex flex-row items-start justify-start relative">
          <div className="h-[3.125rem] w-[30.063rem] absolute !m-[0] top-[calc(50%_-_25px)] right-[-20rem] rounded-3xs bg-royalblue-500 box-border border-[1px] border-solid border-royalblue-500" />
          <div className="relative leading-[1.25rem] z-[1]">
            comvi-dashboard.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
