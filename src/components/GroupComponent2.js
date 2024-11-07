import ReusableInput from "./ReusableInput"; // Import the ReusableInput component

const GroupComponent2 = () => {
  const handleUpdateProfile = () => {
    // Function to handle the update profile action
    console.log("Profile updated!");
  };

  return (
    <div className="self-stretch rounded-xl bg-background-2 flex flex-col items-start justify-start pt-[2.438rem] pb-[2.75rem] pr-[2.625rem] pl-[2.688rem] box-border gap-[1.206rem] max-w-full text-left text-[0.875rem] text-darkslategray-200 font-manrope mq1050:pl-[1.313rem] mq1050:pr-[1.313rem] mq1050:box-border mq725:pt-[1.563rem] mq725:pb-[1.813rem] mq725:box-border">
      <div className="w-[66.563rem] h-[32.375rem] relative rounded-xl bg-background-2 hidden max-w-full" />
      <h2 className="m-0 relative text-[1.5rem] leading-[1.875rem] font-semibold font-inherit z-[1] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
        Edit Profile
      </h2>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.056rem] max-w-full">
        <ReusableInput title="First Name" placeholder="Your First Name" />
        <ReusableInput title="Last Name" placeholder="Your Last Name" />
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.056rem] max-w-full">
        <ReusableInput title="Phone Number" placeholder="Your Phone Number" />
        <ReusableInput title="Email Address" placeholder="Your Email Address" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.188rem] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.056rem] max-w-full">
          <ReusableInput title="Country" placeholder="Select Your Country" />
          <ReusableInput title="City" placeholder="Select Your City" />
        </div>

        <div className="w-full flex flex-col items-center justify-center pt-[0rem] px-[0rem] pb-[0.188rem] box-border min-w-[19.563rem] max-w-full mq1000:flex-1">
          <div className="w-[20rem] h-[3.125rem] flex flex-row items-start justify-start max-w-full">
            <button
              onClick={handleUpdateProfile}
              className="self-stretch flex-1 rounded-3xs [background:linear-gradient(90deg,#3D8DE3_0%,rgba(61,141,227,0.43)_100%)] text-white font-semibold py-2 px-4 transition-all duration-200 hover:bg-coral-dark focus:outline-none focus:ring-2 focus:ring-coral-light focus:ring-opacity-50"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;
