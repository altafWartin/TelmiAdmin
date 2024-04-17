import FrameComponent from "../components/Navbar";
import Sidbar from "../components/Sidbar";
import GroupComponent from "../components/GroupComponent";
import Navbar from "../components/Navbar";

const UserList = () => {
  return (

        <section className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_326px)] text-left text-[1.5rem] text-gray-400 font-heading-heading-4 mq900:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.438rem] max-w-full">

            <div className="self-stretch rounded-xl bg-background-2 flex flex-col items-start justify-start pt-[2.375rem] pb-[2.438rem] pr-[2.044rem] pl-[2.056rem] box-border gap-[1.563rem] max-w-full text-[2.375rem] text-darkslategray-200 font-gilroy mq900:pt-[1.563rem] mq900:pb-[1.563rem] mq900:box-border mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
              <div className="w-[65.25rem] h-[52.5rem] relative rounded-xl bg-background-2 hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[0.438rem] px-[0rem] pb-[0rem]">
                  <h1 className="m-0 h-[2rem] relative text-inherit leading-[2.375rem] capitalize font-semibold font-inherit inline-block shrink-0 min-w-[5.938rem] z-[2] mq900:text-[1.875rem] mq900:leading-[1.875rem] mq450:text-[1.438rem] mq450:leading-[1.438rem]">
                    users
                  </h1>
                </div>
                <div className="rounded-3xs overflow-x-auto flex flex-row items-start justify-start py-[1rem] px-[1.025rem] gap-[0.813rem] z-[1] text-[1.125rem] border-[0.6px] border-solid border-background-2">
                  <div className="h-[2.875rem] w-[12.025rem] relative rounded-3xs box-border shrink-0 hidden border-[0.6px] border-solid border-background-2" />
                  <div className="relative leading-[0.75rem] capitalize inline-block min-w-[4.106rem] z-[1]">
                    sort by :
                  </div>
                  <div className="relative leading-[0.75rem] capitalize inline-block min-w-[3.625rem] z-[1]">
                    recent
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[0.481rem] h-[0.25rem] relative z-[1]"
                      alt=""
                      src="/vector-11.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[61.15rem] overflow-x-auto flex flex-col items-start justify-start gap-[1.375rem] max-w-full z-[2]">
                <GroupComponent
                  ellipse6="/ellipse-6@2x.png"
                  group4="/group-4@2x.png"
                />
                <GroupComponent
                  ellipse6="/ellipse-7@2x.png"
                  group4="/group-4-1@2x.png"
                  propPadding="0.875rem 1.938rem 0.875rem 1.756rem"
                  propPadding1="0rem 3.331rem 0rem 0rem"
                  propWidth="14.813rem"
                />
                <GroupComponent
                  ellipse6="/ellipse-8@2x.png"
                  group4="/group-4-1@2x.png"
                  propPadding="0.875rem 1.938rem 0.875rem 1.756rem"
                  propPadding1="0rem 2.831rem 0rem 0rem"
                  propWidth="15.313rem"
                />
                <GroupComponent
                  ellipse6="/ellipse-8@2x.png"
                  group4="/group-4-1@2x.png"
                  propPadding="0.875rem 1.938rem 0.875rem 1.756rem"
                  propPadding1="0rem 2.831rem 0rem 0rem"
                  propWidth="15.313rem"
                />
                <GroupComponent
                  ellipse6="/ellipse-7@2x.png"
                  group4="/group-4-1@2x.png"
                  propPadding="0.875rem 1.938rem 0.875rem 1.756rem"
                  propPadding1="0rem 3.331rem 0rem 0rem"
                  propWidth="14.813rem"
                />
                <GroupComponent
                  ellipse6="/ellipse-6@2x.png"
                  group4="/group-4@2x.png"
                  propPadding="0.875rem 1.875rem 0.875rem 1.819rem"
                  propPadding1="0rem 2.831rem 0rem 0rem"
                  propWidth="15.313rem"
                />
                <GroupComponent
                  ellipse6="/ellipse-7@2x.png"
                  group4="/group-4-1@2x.png"
                  propPadding="0.875rem 1.938rem 0.875rem 1.756rem"
                  propPadding1="0rem 3.331rem 0rem 0rem"
                  propWidth="14.813rem"
                />
              </div>
            </div>
          </div>
        </section>
   
  );
};

export default UserList;
