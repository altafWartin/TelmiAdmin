import Input2 from "./Input2";
import Input1 from "./Input1";
import Input from "./Input";

const GroupComponent2 = () => {
  return (
    <div className="self-stretch rounded-xl bg-background-2 flex flex-col items-start justify-start pt-[2.438rem] pb-[2.75rem] pr-[2.625rem] pl-[2.688rem] box-border gap-[1.206rem] max-w-full text-left text-[0.875rem] text-darkslategray-200 font-manrope mq1050:pl-[1.313rem] mq1050:pr-[1.313rem] mq1050:box-border mq725:pt-[1.563rem] mq725:pb-[1.813rem] mq725:box-border">
      <div className="w-[66.563rem] h-[32.375rem] relative rounded-xl bg-background-2 hidden max-w-full" />
      <h2 className="m-0 relative text-[1.5rem] leading-[1.875rem] font-semibold font-inherit z-[1] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
        Edit Profile
      </h2>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.056rem] max-w-full">
        <Input2 title="First Name" placeholder="Your First Name" />
        <Input2
          title="Last Name"
          placeholder="Your Last Name"
          placeholderMinWidth="4.75rem"
          propBackgroundColor="rgba(34, 125, 255, 0.05)"
          propRight="-22.812rem"
          propMinWidth="6.25rem"
        />
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.056rem] max-w-full">
        <Input2
          title="Phone Number"
          placeholder="Yout Phone Number"
          placeholderMinWidth="6.75rem"
          propBackgroundColor="rgba(34, 125, 255, 0.1)"
          propRight="-21.062rem"
          propMinWidth="8rem"
        />
        <Input2
          title="Email Address"
          placeholder="Your Email Address"
          placeholderMinWidth="6.688rem"
          propBackgroundColor="rgba(34, 125, 255, 0.05)"
          propRight="-21.437rem"
          propMinWidth="7.625rem"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.188rem] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.056rem] max-w-full">
          <Input1 title="Country" placeholder="Select Your Country" />
          <Input />
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-[1.025rem] max-w-full text-[0.938rem] text-background-2 mq1000:flex-wrap">
          <Input1
            title="City"
            placeholder="Select Your City"
            propFlex="0.9667"
            propMinWidth="2rem"
            propRight="-22.687rem"
            propMinWidth1="6.375rem"
          />
          <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.188rem] box-border min-w-[19.563rem] max-w-full mq1000:flex-1">
            <div className="self-stretch h-[3.125rem] flex flex-row items-start justify-start max-w-full">
              <div className="self-stretch w-[30.125rem] flex flex-row items-start justify-start max-w-full z-[1]">
                <div className="self-stretch flex-1 relative rounded-3xs bg-coral max-w-full" />
                <div className="w-[6.438rem] relative leading-[1.25rem] font-semibold hidden">
                  Update Profile
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.938rem] px-[0rem] pb-[0rem] ml-[-18.287rem]">
                <div className="relative leading-[1.25rem] font-semibold inline-block min-w-[6.438rem] z-[2]">
                  Update Profile
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;
