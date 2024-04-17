const FrameComponent2 = () => {
  return (
    <div className="w-[34.813rem] rounded-xl bg-background-2 flex flex-col items-start justify-start py-[1.75rem] px-[3.375rem] box-border gap-[1.019rem] max-w-full text-left text-[0.75rem] text-silver-200 font-manrope mq725:pl-[1.688rem] mq725:pr-[1.688rem] mq725:box-border">
      <div className="w-[34.813rem] h-[21.375rem] relative rounded-xl bg-background-2 hidden max-w-full" />
      <h2 className="m-0 relative text-[1.5rem] leading-[1.875rem] font-semibold font-heading-heading-4 text-gray-300 inline-block min-w-[7.313rem] z-[1] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
        My Profile
      </h2>
      <div className="flex flex-row items-end justify-start gap-[1.5rem] text-[1.25rem] text-gray-400 font-heading-heading-4 mq450:flex-wrap">
        <img
          className="h-[6rem] w-[6rem] relative rounded-101xl object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
          <div className="flex flex-col items-start justify-start gap-[0.938rem]">
            <div className="flex flex-col items-start justify-start gap-[0.375rem]">
              <h3 className="m-0 relative text-inherit leading-[1.5rem] font-semibold font-inherit z-[1] mq450:text-[1rem] mq450:leading-[1.188rem]">
                Roberto Carlos
              </h3>
              <div className="relative text-[0.875rem] text-lightslategray-100 inline-block min-w-[7.375rem] z-[1]">
                @robertocarlos13
              </div>
            </div>
            <div className="relative text-[0.875rem] font-semibold text-royalblue-200 z-[1]">
              https://Robert25.com
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.688rem] pl-[0.063rem] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem]">
            <div className="relative leading-[1rem] uppercase font-medium inline-block min-w-[4rem] z-[1]">
              Location :
            </div>
          </div>
          <div className="relative text-[0.875rem] leading-[1.25rem] font-medium text-lightslategray-100 z-[1]">
            California, United States
          </div>
        </div>
      </div>
      <div className="w-[27.5rem] h-[0.063rem] flex flex-row items-start justify-start max-w-full z-[1]">
        <div className="self-stretch flex-1 relative bg-gray-500 max-w-full" />
      </div>
      <div className="w-[27.188rem] flex flex-row items-start justify-start py-[0rem] px-[0.063rem] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem]">
            <div className="relative leading-[1rem] uppercase font-medium inline-block min-w-[3.063rem] z-[1]">
              Mobile :
            </div>
          </div>
          <div className="relative text-[0.875rem] leading-[1.25rem] font-medium text-lightslategray-100 inline-block min-w-[6.563rem] whitespace-nowrap z-[1]">
            +1-9846499950
          </div>
        </div>
      </div>
      <div className="w-[27.5rem] h-[0.063rem] flex flex-row items-start justify-start max-w-full z-[1]">
        <div className="self-stretch flex-1 relative bg-gray-500 max-w-full" />
      </div>
      <div className="w-[27.438rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem]">
          <div className="relative leading-[1rem] uppercase font-medium inline-block min-w-[3rem] z-[1]">
            E-mail :{" "}
          </div>
        </div>
        <div className="relative text-[0.875rem] leading-[1.25rem] font-medium text-lightslategray-100 whitespace-nowrap z-[1]">
          dashboard@comvi.com
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
