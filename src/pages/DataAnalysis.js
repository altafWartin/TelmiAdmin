import React, { useEffect, useState } from "react";
import FrameComponent from "../components/Navbar";
import GroupComponent4 from "../components/GroupComponent4";
import Followers from "../components/Followers";
import { useLocation } from "react-router-dom";
// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";


const DataAnalysis = () => {
  const location = useLocation();
  const profileData = location.state.profile;

  console.log(profileData.profile.friends.length,"profileeee");
  const [mediaData, setMediaData] = useState(null);

  return (

        <section className="flex-1 flex flex-col items-start justify-start pt-[2.375rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_326px)] text-left text-[1.5rem] text-gray-400 font-heading-heading-4 mq900:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.375rem] max-w-full mq700:gap-[1.188rem]">
            <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-[1.188rem]">
            User Profile
            </h1>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[0.75rem] max-w-full text-[1.25rem]">
              <div className="flex-1 rounded-mini bg-background-2 box-border flex flex-row items-end justify-start py-[0.875rem] px-[1rem] gap-[1.5rem] min-w-[14.125rem] max-w-full border-[1px] border-solid border-aliceblue-100 mq450:flex-wrap">
                <img
                  className="h-[6rem] w-[6rem] relative rounded-101xl object-contain"
                  loading="lazy"
                  alt=""
                  src={profileData.profile.profilePhoto}
                />
                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.938rem]">
                    <div className="flex flex-col items-start justify-start gap-[0.375rem]">
                      <h2 className="m-0 relative text-inherit leading-[1.5rem] font-semibold font-inherit mq450:text-[1rem] mq450:leading-[1.188rem]">
                      {profileData.profile.fullName}
                      </h2>
                      <div className="relative text-[0.875rem] text-lightslategray-100 inline-block min-w-[7.375rem]">
                      {profileData.profile.email}
                      </div>
                    </div>
                    <div className="relative text-[0.875rem] font-semibold text-royalblue-200">
                    {profileData.profile.email}
                    </div>
                  </div>
                </div>
              </div>
              <Followers
                group514939="/group-514939.svg"
                followers="Followers"
                prop={profileData.profile.friends.length}
                icon="/icon.svg"
                prop1="10,2% "
              />
              <div className="w-[13.75rem] flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem] box-border text-[1rem] text-lightslategray-100">
                <div className="self-stretch rounded-mini bg-background-2 flex flex-col items-start justify-start py-[0.875rem] px-[1rem] gap-[0.75rem] border-[1px] border-solid border-aliceblue-100">
                  <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                    <div className="h-[1.5rem] w-[1.5rem] relative bg-background-2">
                      <div className="absolute top-[0rem] left-[0rem] bg-background-2 w-full h-full hidden" />
                      <img
                        className="absolute h-[70%] w-[79.58%] top-[15%] right-[10.42%] bottom-[15%] left-[10%] max-w-full overflow-hidden max-h-full z-[1]"
                        loading="lazy"
                        alt=""
                        src="/vector-6.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem]">
                      <div className="relative font-medium inline-block min-w-[2.5rem]">
                        Likes
                      </div>
                    </div>
                  </div>
                  <div className="relative text-[1.5rem] font-semibold text-gray-400 inline-block min-w-[5.25rem] mq450:text-[1.188rem]">
                    20.432
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.875rem] text-royalblue-200">
                    <img
                      className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="relative">
                      <span className="font-semibold">{`12,6% `}</span>
                      <span className="text-lightslategray-100">
                        than last month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[13.75rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
                <Followers
                  group514939="/group-34575.svg"
                  followers="Page Views"
                  prop="420.098"
                  icon="/icon-2.svg"
                  prop1="10,8% "
                  propWidth="unset"
                  propAlignSelf="stretch"
                  propMinWidth="5.625rem"
                  propMinWidth1="6.25rem"
                  propColor="#fc831a"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[1.688rem] max-w-full text-[1.113rem] text-light-primary mq900:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.613rem] min-w-[22.375rem] max-w-full mq700:min-w-full">
                <div className="self-stretch rounded-[8.89px] bg-background-2 shadow-[0px_2.7px_3.55px_rgba(227,_227,_227,_0.29)] flex flex-col items-start justify-start pt-[2.219rem] px-[2.219rem] pb-[2.213rem] gap-[1.656rem] shrink-0 [debug_commit:1de1738]">
                  <div className="w-[34.438rem] h-[18.888rem] relative rounded-[8.89px] bg-background-2 hidden max-w-full" />
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                    <b className="relative tracking-[0.02em] leading-[1.125rem] inline-block min-w-[5.438rem] z-[1]">
                      Audience
                    </b>
                    <div className="w-[6.556rem] flex flex-row items-start justify-start gap-[0.444rem] text-right text-[0.888rem] text-light-secondary font-manrope">
                      <div className="flex-1 relative tracking-[0.02em] leading-[1.125rem] font-semibold inline-block min-w-[5rem] z-[1]">
                        Last 6 Days
                      </div>
                      <img
                        className="h-[1.113rem] w-[1.113rem] relative min-h-[1.125rem] z-[1]"
                        loading="lazy"
                        alt=""
                        src="/sort-small.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start gap-[1.438rem] max-w-full text-right text-[0.775rem] text-light-secondary font-manrope">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[1.694rem] max-w-full mq700:flex-wrap">
                      <div className="w-[2rem] flex flex-col items-start justify-start gap-[1.538rem]">
                        <div className="self-stretch relative tracking-[0.02em] leading-[1.125rem] font-semibold z-[1]">
                          600
                        </div>
                        <div className="self-stretch relative tracking-[0.02em] leading-[1.125rem] font-semibold z-[1]">
                          400
                        </div>
                        <div className="self-stretch relative tracking-[0.02em] leading-[1.125rem] font-semibold z-[1]">
                          200
                        </div>
                        <div className="self-stretch relative tracking-[0.02em] leading-[1.125rem] font-semibold z-[1]">
                          0
                        </div>
                      </div>
                      <div className="h-[8.888rem] flex-1 relative min-w-[17.063rem] max-w-full text-center text-background-2">
                        <img
                          className="absolute top-[0rem] left-[0.031rem] w-full h-full z-[1]"
                          alt=""
                          src="/divs.svg"
                        />
                        <div className="absolute top-[2.581rem] left-[0rem] w-[26.275rem] h-[6.306rem]">
                          <img
                            className="absolute top-[1.919rem] left-[19.138rem] w-[2.388rem] h-[4.388rem] z-[2]"
                            loading="lazy"
                            alt=""
                            src="/bar.svg"
                          />
                          <div className="absolute top-[0rem] left-[0rem] w-[26.275rem] h-[5.5rem]">
                            <img
                              className="absolute top-[0rem] left-[0rem] rounded-[26.66px] w-full h-full z-[3]"
                              alt=""
                              src="/graph.svg"
                            />
                            <div className="absolute top-[1.475rem] left-[19.863rem] w-[0.888rem] h-[0.888rem]">
                              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-background-2 w-full h-full z-[4]" />
                              <div className="absolute top-[0.219rem] left-[0.219rem] rounded-[50%] bg-highlights-highlight-1 w-[0.444rem] h-[0.444rem] z-[5]" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-[2.388rem] left-[18.863rem] rounded-[5.33px] bg-royalblue-200 flex flex-row items-start justify-start py-[0.056rem] px-[0.719rem] opacity-[0.9] z-[4]">
                          <b className="w-[1.438rem] relative leading-[1.313rem] flex items-center justify-center min-w-[1.438rem]">
                            263
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="w-[26.544rem] flex flex-row items-start justify-end py-[0rem] pr-[0.719rem] pl-[0.688rem] box-border max-w-full text-left">
                      <div className="flex-1 flex flex-row items-start justify-between py-[0rem] pr-[0.188rem] pl-[0rem] box-border max-w-full gap-[1.25rem] mq450:flex-wrap">
                        <div className="relative tracking-[0.02em] leading-[1.125rem] font-semibold inline-block min-w-[1.5rem] z-[1]">
                          Sun
                        </div>
                        <div className="relative tracking-[0.02em] leading-[1.125rem] font-semibold inline-block min-w-[1.688rem] z-[1]">
                          Mon
                        </div>
                        <div className="relative tracking-[0.02em] leading-[1.125rem] font-semibold inline-block min-w-[1.438rem] z-[1]">
                          Tue
                        </div>
                        <div className="relative tracking-[0.02em] leading-[1.125rem] font-semibold inline-block min-w-[1.688rem] z-[1]">
                          Wed
                        </div>
                        <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.344rem] pl-[0rem]">
                          <div className="relative tracking-[0.02em] leading-[1.125rem] font-semibold inline-block min-w-[1.5rem] z-[1]">
                            Thu
                          </div>
                        </div>
                        <div className="relative tracking-[0.02em] leading-[1.125rem] font-semibold inline-block min-w-[1rem] z-[1] mq450:w-full mq450:h-[1rem]">
                          Fri
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-mini bg-background-2 flex flex-col items-start justify-start py-[1.375rem] px-[1.5rem] relative gap-[3rem] shrink-0 [debug_commit:1de1738] text-[0.625rem] text-gray-400 border-[1px] border-solid border-aliceblue-100 mq700:gap-[1.5rem]">
                  <div className="w-[30.625rem] flex flex-row items-start justify-start gap-[1.5rem] max-w-full mq700:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[0.313rem] px-[0rem] pb-[0rem] box-border min-w-[9.563rem] text-[1.125rem]">
                      <h3 className="m-0 self-stretch relative text-inherit leading-[1.375rem] font-semibold font-inherit">
                        Activity Pages
                      </h3>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
                      <div className="flex flex-row items-start justify-start gap-[1rem]">
                        <div className="flex flex-row items-start justify-start gap-[0.375rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                            <div className="w-[0.5rem] h-[0.5rem] relative rounded-21xl bg-royalblue-200 overflow-hidden shrink-0" />
                          </div>
                          <div className="relative leading-[0.75rem] inline-block min-w-[2.375rem]">
                            Viewers
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[0.375rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                            <div className="w-[0.5rem] h-[0.5rem] relative rounded-21xl bg-aliceblue-300 overflow-hidden shrink-0" />
                          </div>
                          <div className="relative leading-[0.75rem] inline-block min-w-[2.813rem]">
                            Followers
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[4.938rem] rounded-3xs box-border flex flex-row items-start justify-start py-[0.5rem] px-[0.688rem] gap-[0.5rem] text-lightslategray-100 border-[1px] border-solid border-aliceblue-100">
                      <div className="relative leading-[0.75rem] inline-block min-w-[2.188rem]">
                        Weekly
                      </div>
                      <img
                        className="h-[0.75rem] w-[0.75rem] relative min-h-[0.75rem]"
                        alt=""
                        src="/icon-3.svg"
                      />
                    </div>
                  </div>
                  <img
                    className="w-[38.5rem] h-[0.063rem] absolute !m-[0] top-[5rem] right-[-4.062rem]"
                    loading="lazy"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <div className="flex flex-row items-start justify-start max-w-full text-[0.75rem] text-lightslategray-100">
                    <div className="w-[30.625rem] flex flex-col items-start justify-start py-[0rem] px-[0rem] box-border gap-[2.5rem] max-w-full mq700:gap-[1.25rem]">
                      <div className="w-[35.5rem] flex flex-row items-start justify-start gap-[1rem] max-w-[116%] shrink-0 mq700:flex-wrap">
                        <div className="w-[2rem] relative leading-[0.875rem] inline-block shrink-0">
                          200
                        </div>
                        <div className="h-[0.875rem] flex-1 flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border min-w-[21.125rem] max-w-full mq700:min-w-full">
                          <img
                            className="self-stretch relative max-w-full overflow-hidden max-h-full"
                            loading="lazy"
                            alt=""
                            src="/vector-21.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[35.5rem] flex flex-row items-start justify-start gap-[1rem] max-w-[116%] shrink-0 mq700:flex-wrap">
                        <div className="w-[2rem] relative leading-[0.875rem] inline-block shrink-0">
                          100
                        </div>
                        <div className="h-[0.875rem] flex-1 flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border min-w-[21.125rem] max-w-full mq700:min-w-full">
                          <img
                            className="self-stretch relative max-w-full overflow-hidden max-h-full"
                            loading="lazy"
                            alt=""
                            src="/vector-21.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[35.5rem] flex flex-row items-start justify-start gap-[1rem] max-w-[116%] shrink-0 mq700:flex-wrap">
                        <div className="w-[2rem] relative leading-[0.875rem] inline-block shrink-0">
                          0
                        </div>
                        <div className="h-[0.875rem] flex-1 flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border min-w-[21.125rem] max-w-full mq700:min-w-full">
                          <img
                            className="self-stretch relative max-w-full overflow-hidden max-h-full"
                            loading="lazy"
                            alt=""
                            src="/vector-21.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[27.625rem] flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border max-w-full ml-[-27.625rem]">
                      <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem] z-[1] mq700:flex-wrap">
                        <div className="h-[8.75rem] w-[3.25rem] flex flex-col items-start justify-start gap-[1rem]">
                          <div className="self-stretch flex-1 flex flex-row items-end justify-start">
                            <div className="self-stretch w-[1.625rem] relative rounded-t-3xl rounded-b-none bg-royalblue-200 overflow-hidden shrink-0" />
                            <div className="h-[2.25rem] w-[1.625rem] relative rounded-t-3xl rounded-b-none bg-aliceblue-300 overflow-hidden shrink-0" />
                          </div>
                          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.813rem] pl-[0.844rem]">
                            <div className="relative leading-[0.875rem] inline-block min-w-[1.563rem]">
                              Mon
                            </div>
                          </div>
                        </div>
                        <div className="h-[7.375rem] w-[3.25rem] flex flex-col items-start justify-start gap-[1rem]">
                          <div className="self-stretch flex-1 flex flex-row items-end justify-start">
                            <div className="self-stretch w-[1.625rem] relative rounded-t-3xl rounded-b-none bg-tomato overflow-hidden shrink-0" />
                            <div className="h-[1.625rem] w-[1.625rem] relative rounded-t-3xl rounded-b-none bg-aliceblue-300 overflow-hidden shrink-0" />
                          </div>
                          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.938rem] pl-[0.969rem]">
                            <div className="relative leading-[0.875rem] inline-block min-w-[1.313rem]">
                              Tue
                            </div>
                          </div>
                        </div>
                        <div className="h-[8.75rem] w-[3.25rem] flex flex-col items-start justify-start gap-[1rem]">
                          <div className="self-stretch flex-1 flex flex-row items-end justify-start">
                            <div className="self-stretch w-[1.625rem] relative rounded-t-3xl rounded-b-none bg-royalblue-200 overflow-hidden shrink-0" />
                            <div className="h-[3.25rem] w-[1.625rem] relative rounded-t-3xl rounded-b-none bg-aliceblue-300 overflow-hidden shrink-0" />
                          </div>
                          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.813rem]">
                            <div className="relative leading-[0.875rem] inline-block min-w-[1.625rem]">
                              Wed
                            </div>
                          </div>
                        </div>
                        <div className="h-[8.75rem] w-[3.25rem] flex flex-col items-start justify-start gap-[1rem]">
                          <div className="self-stretch flex-1 flex flex-row items-end justify-start">
                            <div className="self-stretch w-[1.625rem] relative rounded-t-3xl rounded-b-none bg-springgreen overflow-hidden shrink-0" />
                            <div className="h-[2.25rem] w-[1.625rem] relative rounded-t-3xl rounded-b-none bg-aliceblue-300 overflow-hidden shrink-0" />
                          </div>
                          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.938rem]">
                            <div className="relative leading-[0.875rem] inline-block min-w-[1.375rem]">
                              Thu
                            </div>
                          </div>
                        </div>
                        <div className="h-[7.375rem] w-[3.25rem] flex flex-col items-start justify-start gap-[1rem]">
                          <div className="self-stretch flex-1 flex flex-row items-end justify-start">
                            <div className="self-stretch w-[1.625rem] relative rounded-t-3xl rounded-b-none bg-royalblue-200 overflow-hidden shrink-0" />
                            <div className="h-[1.625rem] w-[1.625rem] relative rounded-t-3xl rounded-b-none bg-aliceblue-300 overflow-hidden shrink-0" />
                          </div>
                          <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.125rem] pl-[1.156rem]">
                            <div className="relative leading-[0.875rem] inline-block min-w-[0.938rem]">
                              Fri
                            </div>
                          </div>
                        </div>
                        <div className="h-[8.75rem] w-[3.25rem] flex flex-col items-start justify-start gap-[1rem]">
                          <div className="self-stretch flex-1 flex flex-row items-end justify-start">
                            <div className="self-stretch w-[1.625rem] relative rounded-t-3xl rounded-b-none bg-darkorange-200 overflow-hidden shrink-0" />
                            <div className="h-[2.25rem] w-[1.625rem] relative rounded-t-3xl rounded-b-none bg-aliceblue-300 overflow-hidden shrink-0" />
                          </div>
                          <div className="flex flex-row items-start justify-start py-[0rem] pr-[1rem] pl-[1.031rem]">
                            <div className="relative leading-[0.875rem] inline-block min-w-[1.188rem]">
                              Sat
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[29rem] rounded-mini bg-background-2 box-border flex flex-col items-start justify-start pt-[1.375rem] px-[0rem] pb-[1.938rem] gap-[1.488rem] min-w-[29rem] max-w-full text-[1rem] text-gray-400 border-[1px] border-solid border-aliceblue-100 mq700:pt-[1.25rem] mq700:pb-[1.25rem] mq700:box-border mq700:min-w-full mq900:flex-1">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.5rem] box-border max-w-full text-[1.125rem]">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[0.625rem] max-w-full">
                    <h3 className="m-0 flex-1 relative text-inherit leading-[1.375rem] font-semibold font-inherit inline-block max-w-[calc(100%_-_34px)]">
                      Latest Post
                    </h3>
                    <img
                      className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/icon-4.svg"
                    />
                  </div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-1-1.svg"
                />
                <div className="flex flex-row items-start justify-start py-[0rem] px-[1.5rem] box-border max-w-full">
                  <div className="flex flex-row items-center justify-start py-[0rem] pr-[12.875rem] pl-[0rem] box-border gap-[1rem] max-w-full mq700:flex-wrap mq450:pr-[1.25rem] mq450:box-border">
                    <img
                      className="h-[3rem] w-[3rem] relative rounded-[48px] overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/image-1.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[0.313rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                        <div className="relative font-semibold inline-block min-w-[7.625rem]">
                          Azzahri Alpiana
                        </div>
                        <img
                          className="h-[1rem] w-[1rem] relative rounded-21xl"
                          loading="lazy"
                          alt=""
                          src="/frame-20.svg"
                        />
                      </div>
                      <div className="relative text-[0.875rem] text-lightslategray-100">
                        Sukabumi,Indonesia
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.5rem] box-border max-w-full">
                  <div className="flex-1 rounded-mini bg-silver-100 flex flex-row items-start justify-start max-w-full">
                    <div className="h-[16.5rem] flex-1 relative rounded-mini bg-gainsboro max-w-full">
                      <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-gainsboro w-full h-full hidden" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] px-[1.5rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative font-semibold">
                      Abstract Backgorund - No Sense
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.875rem] text-lightslategray-100">
                      <div className="relative inline-block min-w-[7.375rem]">
                        October 04, 2022
                      </div>
                      <div className="relative inline-block min-w-[3.625rem] whitespace-nowrap">
                        11:15 AM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.5rem] box-border max-w-full text-royalblue-200">
                  <div className="flex-1 rounded-3xs box-border flex flex-row items-start justify-center py-[0.938rem] px-[1.25rem] whitespace-nowrap max-w-full border-[1px] border-solid border-royalblue-200">
                    <div className="relative font-semibold inline-block min-w-[4.875rem]">
                      View Post
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
  );
};

export default DataAnalysis;
