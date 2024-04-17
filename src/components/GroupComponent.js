import { useMemo } from "react";

const GroupComponent = ({
  ellipse6,
  group4,
  propPadding,
  propPadding1,
  propWidth,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="w-full rounded-sm bg-royalblue-500 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-between py-[0.875rem] pr-[1.875rem] pl-[1.819rem] box-border gap-[1.25rem] text-left text-[1.125rem] text-darkslategray-200 font-heading-heading-4"
      style={groupDivStyle}
    >
      <div
        className="flex flex-row items-start justify-start py-[0rem] pr-[2.831rem] pl-[0rem] gap-[1.75rem]"
        style={frameDivStyle}
      >
        <img
          className="h-[3.25rem] w-[3.144rem] relative rounded-[50%] object-cover z-[1]"
          loading="lazy"
          alt=""
          src={ellipse6}
        />
        <div className="flex flex-col items-start justify-start pt-[1.063rem] px-[0rem] pb-[0rem]">
          <div className="relative leading-[1.125rem] capitalize font-semibold inline-block min-w-[6.5rem] z-[1]">
            henry peter
          </div>
        </div>
      </div>
      <div
        className="w-[15.313rem] flex flex-col items-start justify-start pt-[1.063rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border"
        style={frameDiv1Style}
      >
        <div className="relative leading-[1.125rem] capitalize whitespace-nowrap z-[1]">
          henry221@gmail.com
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[1.063rem] px-[0rem] pb-[0rem]">
        <div className="relative leading-[1.125rem] capitalize z-[1]">
          013 568 425 85
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.813rem] px-[0rem] pb-[0rem]">
        <img
          className="w-[0.375rem] h-[1.625rem] relative object-contain z-[1]"
          loading="lazy"
          alt=""
          src={group4}
        />
      </div>
    </div>
  );
};

export default GroupComponent;
