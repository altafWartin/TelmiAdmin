import { useMemo } from "react";

const Followers = ({
  group514939,
  followers,
  prop,
  icon,
  prop1,
  propWidth,
  propAlignSelf,
  propMinWidth,
  propMinWidth1,
  propColor,
}) => {
  const followersStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const followers1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const spanStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="w-[13.75rem] rounded-mini bg-background-2 box-border flex flex-col items-start justify-start py-[0.875rem] px-[1rem] gap-[0.75rem] text-left text-[1rem] text-lightslategray-100 font-heading-heading-4 border-[1px] border-solid border-aliceblue-100"
      style={followersStyle}
    >
      <div className="flex flex-row items-start justify-start gap-[0.75rem]">
        <img
          className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
          loading="lazy"
          alt=""
          src={group514939}
        />
        <div className="flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem]">
          <div
            className="relative font-medium inline-block min-w-[4.563rem]"
            style={followers1Style}
          >
            {followers}
          </div>
        </div>
      </div>
      <div
        className="relative text-[1.5rem] font-semibold text-gray-400 inline-block min-w-[6.063rem] mq450:text-[1.188rem]"
        style={divStyle}
      >
        {prop}
      </div>
      <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.875rem] text-royalblue-200">
        <img
          className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={icon}
        />
        <div className="relative">
          <span className="font-semibold" style={spanStyle}>
            {prop1}
          </span>
          <span className="text-lightslategray-100">than last month</span>
        </div>
      </div>
    </div>
  );
};

export default Followers;
