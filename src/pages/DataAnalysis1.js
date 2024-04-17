import FrameComponent from "../components/Navbar";

const DataAnalysis1 = () => {
  return (
 
  
        <section className=" w-full flex-1 flex flex-col items-start justify-start pt-[1.563rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_326px)] text-left text-[1.5rem] text-gray-400 font-heading-heading-4 mq900:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.313rem] max-w-full">
            <div className="relative font-semibold mq450:text-[1.188rem]">
              Dashboard Overview
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.288rem] max-w-full text-[1.219rem] text-darkslategray-100 mq700:gap-[1.125rem]">
              <div className="self-stretch rounded-[8.89px] bg-gray-100 shadow-[0px_16.2px_40.59px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start pt-[1.319rem] pb-[1.975rem] pr-[1.619rem] pl-[1.625rem] box-border gap-[1.775rem] max-w-full mq450:pt-[1.25rem] mq450:pb-[1.313rem] mq450:box-border">
                <div className="w-[65.25rem] h-[24.713rem] relative rounded-[8.89px] bg-gray-100 shadow-[0px_16.2px_40.59px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />
                <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq700:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[0.306rem] px-[0rem] pb-[0rem]">
                    <b className="relative z-[1]">Users registered</b>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[2.838rem] max-w-full text-[0.713rem] mq450:flex-wrap mq450:gap-[1.438rem]">
                    <div className="h-[2.031rem] flex flex-row items-start justify-start gap-[1.194rem] shrink-0 [debug_commit:1de1738]">
                      <img
                        className="h-[2.031rem] w-[2.031rem] relative object-contain min-h-[2.063rem] z-[1]"
                        alt=""
                        src="/group-3@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[0.606rem] px-[0rem] pb-[0rem]">
                        <div className="relative leading-[0.879rem] inline-block min-w-[5.375rem] z-[1]">
                          December 2021
                        </div>
                      </div>
                      <div className="h-[2.031rem] w-[2.031rem] relative rounded-[8.12px] bg-gray-100 shadow-[0px_16.2px_40.59px_rgba(0,_0,_0,_0.1)] z-[1]">
                        <div className="absolute top-[0rem] left-[0rem] rounded-[8.12px] bg-gray-100 shadow-[0px_16.2px_40.59px_rgba(0,_0,_0,_0.1)] w-full h-full hidden" />
                        <img
                          className="absolute top-[0.406rem] left-[0.406rem] w-[1.219rem] h-[1.219rem] overflow-hidden object-contain z-[1]"
                          alt=""
                          src="/dropdown@2x.png"
                        />
                      </div>
                    </div>
                    <div className="rounded-[8.12px] bg-royalblue-300 shadow-[0px_16.2px_40.59px_rgba(191,_21,_108,_0.05)] flex flex-row items-start justify-start py-[0.406rem] pr-[0.9rem] pl-[0.906rem] gap-[0.813rem] shrink-0 [debug_commit:1de1738] z-[1] text-royalblue-100">
                      <div className="flex flex-col items-start justify-start pt-[0.169rem] px-[0rem] pb-[0rem]">
                        <div className="relative font-semibold inline-block min-w-[2.25rem]">
                          Month
                        </div>
                      </div>
                      <img
                        className="h-[1.219rem] w-[1.219rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                        alt=""
                        src="/dropdown-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-end justify-start gap-[0.513rem] max-w-full text-[0.913rem] text-lightslategray-100">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.206rem] max-w-full">
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[3.688rem] pl-[0rem] gap-[1.219rem] text-[0.713rem]">
                      <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.213rem] gap-[0.756rem] text-[0.913rem]">
                        <div className="flex flex-col items-start justify-start gap-[0.194rem]">
                          <div className="relative inline-block min-w-[4.75rem] z-[1]">
                            Total users
                          </div>
                          <b className="relative text-[1.825rem] text-darkslategray-100 z-[1] mq450:text-[1.438rem]">
                            12,345,678
                          </b>
                        </div>
                        <div className="relative z-[1] text-royalblue-100">
                          <span className="font-semibold">+23%</span>
                          <span className="text-lightslategray-100">
                            <span className="font-semibold font-poppins">{` `}</span>
                            <span>than last week</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[0.406rem]">
                        <div className="flex flex-row items-start justify-start gap-[0.456rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.2rem] px-[0rem] pb-[0rem]">
                            <div className="w-[0.606rem] h-[0.606rem] relative rounded-[50%] box-border shrink-0 [debug_commit:1de1738] z-[1] border-[0px] border-solid border-darkorange-100" />
                          </div>
                          <div className="relative inline-block min-w-[3.438rem] shrink-0 [debug_commit:1de1738] z-[1]">
                            Last week
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.563rem] pl-[1.063rem] text-darkslategray-100">
                          <div className="relative font-semibold inline-block min-w-[2.875rem] z-[1]">
                            123,456
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[0.4rem]">
                        <div className="flex flex-row items-start justify-start gap-[0.45rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.225rem] px-[0rem] pb-[0rem]">
                            <div className="w-[0.606rem] h-[0.606rem] relative rounded-[50%] box-border shrink-0 [debug_commit:1de1738] z-[1] border-[0px] border-solid border-royalblue-100" />
                          </div>
                          <div className="relative inline-block min-w-[4.938rem] shrink-0 [debug_commit:1de1738] z-[1]">
                            Current Month
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.063rem] pl-[1.056rem] text-darkslategray-100">
                          <div className="relative font-semibold inline-block min-w-[2.875rem] z-[1]">
                            123,456
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[2.588rem]">
                      <div className="relative font-semibold inline-block min-w-[1.688rem] z-[1]">
                        100
                      </div>
                      <div className="relative font-semibold inline-block min-w-[1.125rem] z-[1]">
                        75
                      </div>
                      <div className="relative font-semibold inline-block min-w-[1.188rem] z-[1]">
                        50
                      </div>
                      <div className="relative font-semibold inline-block min-w-[1.188rem] z-[1]">
                        25
                      </div>
                      <div className="relative font-semibold inline-block min-w-[0.625rem] z-[1]">
                        0
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[0.556rem] px-[0rem] pb-[0rem] box-border min-w-[28.625rem] max-w-full text-royalblue-100 mq700:min-w-full">
                      <div className="self-stretch h-[14.713rem] flex flex-row items-start justify-start pt-[1.256rem] pb-[0rem] pr-[0.813rem] pl-[0.831rem] box-border relative max-w-full z-[1]">
                        <img
                          className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/line.svg"
                        />
                        <div className="self-stretch flex-1 flex flex-row items-start justify-start py-[1.688rem] px-[5.613rem] box-border relative max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                          <img
                            className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-contain z-[1]"
                            alt=""
                            src="/chart@2x.png"
                          />
                          <div className="w-[8.525rem] flex flex-col items-start justify-start pt-[0.663rem] px-[2.081rem] pb-[1.306rem] box-border relative gap-[0.294rem]">
                            <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full max-h-full z-[2] flex items-center justify-center">
                              <img
                                className="w-full h-full overflow-hidden z-[2] object-contain absolute left-[0rem] top-[0.75rem] [transform:scale(1.501)]"
                                loading="lazy"
                                alt=""
                                src="/background.svg"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.188rem]">
                              <div className="relative font-semibold inline-block min-w-[3.063rem] z-[3]">
                                12,456
                              </div>
                            </div>
                            <div className="relative text-[0.713rem] text-lightslategray-100 inline-block min-w-[3.438rem] z-[3]">
                              Total User
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[44.125rem] flex flex-row items-start justify-end py-[0rem] pr-[0.838rem] pl-[0.813rem] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq700:flex-wrap">
                      <div className="relative font-semibold inline-block min-w-[1.625rem] z-[1]">
                        Jan
                      </div>
                      <div className="relative font-semibold inline-block min-w-[1.625rem] z-[1]">
                        Feb
                      </div>
                      <div className="relative font-semibold inline-block min-w-[1.75rem] z-[1]">
                        Mar
                      </div>
                      <div className="relative font-semibold inline-block min-w-[1.625rem] z-[1]">
                        Apr
                      </div>
                      <div className="relative font-semibold inline-block min-w-[1.875rem] z-[1]">
                        May
                      </div>
                      <div className="relative font-semibold inline-block min-w-[1.625rem] z-[1]">
                        Jun
                      </div>
                      <div className="relative font-semibold inline-block min-w-[1.313rem] z-[1]">
                        Jul
                      </div>
                      <div className="relative font-semibold inline-block min-w-[1.813rem] z-[1]">
                        Aug
                      </div>
                      <div className="relative font-semibold inline-block min-w-[1.75rem] z-[1]">
                        Sep
                      </div>
                      <div className="relative font-semibold inline-block min-w-[1.625rem] z-[1]">
                        Oct
                      </div>
                      <div className="relative font-semibold inline-block min-w-[1.75rem] z-[1]">
                        Nov
                      </div>
                      <div className="relative font-semibold inline-block min-w-[1.75rem] z-[1]">
                        Dec
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[1.938rem] max-w-full text-[1.381rem] text-light-primary mq700:gap-[0.938rem] mq900:flex-wrap">
                <div className="flex-1 rounded-[8.89px] bg-background-2 shadow-[0px_3.3px_4.41px_rgba(227,_227,_227,_0.29)] flex flex-col items-start justify-start pt-[2.756rem] px-[2.756rem] pb-[2.7rem] box-border gap-[2.013rem] max-w-full mq700:gap-[1rem] mq700:pl-[1.375rem] mq700:pr-[1.375rem] mq700:box-border mq700:min-w-full mq450:pt-[1.813rem] mq450:pb-[1.75rem] mq450:box-border">
                  <div className="w-[42.75rem] h-[23.444rem] relative rounded-[8.89px] bg-background-2 hidden max-w-full" />
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                    <b className="relative tracking-[0.02em] leading-[1.438rem] z-[1] mq450:text-[1.125rem] mq450:leading-[1.125rem]">
                      Go live this week
                    </b>
                    <div className="w-[8.137rem] flex flex-row items-start justify-start gap-[0.506rem] text-right text-[1.106rem] text-lightslategray-100 font-manrope">
                      <div className="flex-1 relative tracking-[0.02em] leading-[1.379rem] font-semibold inline-block min-w-[6.25rem] z-[1]">
                        Last 6 Days
                      </div>
                      <img
                        className="h-[1.381rem] w-[1.381rem] relative z-[1]"
                        loading="lazy"
                        alt=""
                        src="/sort-small1.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start gap-[1.619rem] max-w-full text-right text-[0.963rem] text-lightslategray-100 font-manrope">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[2.106rem] max-w-full mq700:flex-wrap mq700:gap-[1.063rem]">
                      <div className="w-[2.481rem] flex flex-col items-start justify-start gap-[1.913rem]">
                        <div className="self-stretch relative tracking-[0.02em] leading-[1.438rem] font-semibold z-[1]">
                          600
                        </div>
                        <div className="self-stretch relative tracking-[0.02em] leading-[1.438rem] font-semibold z-[1]">
                          400
                        </div>
                        <div className="self-stretch relative tracking-[0.02em] leading-[1.438rem] font-semibold z-[1]">
                          200
                        </div>
                        <div className="self-stretch relative tracking-[0.02em] leading-[1.438rem] font-semibold z-[1]">
                          0
                        </div>
                      </div>
                      <div className="h-[11.038rem] flex-1 relative min-w-[21.188rem] max-w-full text-center text-background-2 mq700:min-w-full">
                        <img
                          className="absolute top-[0rem] left-[0.031rem] w-full h-full z-[1]"
                          alt=""
                          src="/divs1.svg"
                        />
                        <div className="absolute top-[3.206rem] left-[0rem] w-[32.612rem] h-[7.831rem]">
                          <img
                            className="absolute top-[2.381rem] left-[23.756rem] w-[2.963rem] h-[5.45rem] z-[2]"
                            loading="lazy"
                            alt=""
                            src="/bar1.svg"
                          />
                          <div className="absolute top-[0rem] left-[0rem] w-[32.612rem] h-[6.825rem]">
                            <img
                              className="absolute top-[0rem] left-[0rem] rounded-[33.1px] w-full h-full z-[3]"
                              alt=""
                              src="/graph1.svg"
                            />
                            <div className="absolute top-[1.825rem] left-[24.65rem] w-[1.106rem] h-[1.106rem]">
                              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-background-2 w-full h-full z-[4]" />
                              <div className="absolute top-[0.275rem] left-[0.275rem] rounded-[50%] bg-highlights-highlight-1 w-[0.55rem] h-[0.55rem] z-[5]" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-[2.963rem] left-[23.406rem] rounded-[6.62px] bg-royalblue-200 flex flex-row items-start justify-start py-[0.069rem] pr-[0.894rem] pl-[0.9rem] opacity-[0.9] z-[4]">
                          <b className="w-[1.75rem] relative leading-[1.625rem] flex items-center justify-center min-w-[1.75rem]">
                            263
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="w-[32.994rem] flex flex-row items-start justify-end py-[0rem] pr-[0.925rem] pl-[0.938rem] box-border max-w-full text-left">
                      <div className="flex-1 flex flex-row items-start justify-between py-[0rem] pr-[0.25rem] pl-[0rem] box-border max-w-full gap-[1.25rem] mq450:flex-wrap">
                        <div className="relative tracking-[0.02em] leading-[1.438rem] font-semibold inline-block min-w-[1.875rem] z-[1]">
                          Sun
                        </div>
                        <div className="relative tracking-[0.02em] leading-[1.438rem] font-semibold inline-block min-w-[2.063rem] z-[1]">
                          Mon
                        </div>
                        <div className="relative tracking-[0.02em] leading-[1.438rem] font-semibold inline-block min-w-[1.813rem] z-[1]">
                          Tue
                        </div>
                        <div className="relative tracking-[0.02em] leading-[1.438rem] font-semibold inline-block min-w-[2.125rem] z-[1]">
                          Wed
                        </div>
                        <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem]">
                          <div className="relative tracking-[0.02em] leading-[1.438rem] font-semibold inline-block min-w-[1.875rem] z-[1]">
                            Thu
                          </div>
                        </div>
                        <div className="relative tracking-[0.02em] leading-[1.438rem] font-semibold inline-block min-w-[1.188rem] z-[1]">
                          Fri
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[20.625rem] rounded-[8.89px] bg-gray-100 shadow-[0px_20px_50px_rgba(0,_0,_0,_0.1)] flex flex-col items-end justify-start pt-[2rem] px-[2.125rem] pb-[4.875rem] box-border gap-[4.313rem] min-w-[20.625rem] max-w-full text-[1.5rem] text-darkslategray-100 mq900:flex-1 mq450:gap-[2.125rem] mq450:pt-[1.313rem] mq450:pb-[3.188rem] mq450:box-border">
                  <div className="w-[20.625rem] h-[23.438rem] relative rounded-[8.89px] bg-gray-100 shadow-[0px_20px_50px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex flex-col items-start justify-start gap-[1.438rem]">
                      <b className="relative inline-block min-w-[7.313rem] z-[1] mq450:text-[1.188rem]">
                        Total user
                      </b>
                      <div className="rounded-3xs bg-gray-100 shadow-[0px_20px_50px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start pt-[1.063rem] pb-[1.313rem] pr-[0.75rem] pl-[0.938rem] z-[2] text-[1.125rem] text-royalblue-100">
                        <div className="w-[4.5rem] h-[4.5rem] relative rounded-3xs bg-gray-100 shadow-[0px_20px_50px_rgba(0,_0,_0,_0.1)] hidden" />
                        <b className="relative inline-block min-w-[2.438rem] z-[3]">
                          55%
                        </b>
                        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.75rem] pl-[0.125rem] text-[0.638rem] text-darkslategray-100">
                          <div className="relative inline-block min-w-[1.938rem] z-[3]">
                            Active
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start relative text-[1.125rem] text-darkorange-100">
                    <div className="w-[12.5rem] !m-[0] absolute top-[-8.25rem] left-[-9.625rem] flex flex-row items-start justify-start">
                      <div className="h-[12.5rem] flex-1 relative">
                        <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-royalblue-100 w-full h-full z-[1]" />
                        <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-darkorange-100 w-full h-full z-[2]" />
                      </div>
                    </div>
                    <div className="rounded-3xs bg-gray-100 shadow-[0px_20px_50px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start py-[1.125rem] px-[0.563rem] gap-[0.125rem] z-[3]">
                      <div className="w-[4.5rem] h-[4.5rem] relative rounded-3xs bg-gray-100 shadow-[0px_20px_50px_rgba(0,_0,_0,_0.1)] hidden" />
                      <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.5rem] pl-[0.375rem]">
                        <b className="relative inline-block min-w-[2.5rem] z-[4]">
                          45%
                        </b>
                      </div>
                      <div className="relative text-[0.638rem] text-darkslategray-100 inline-block min-w-[3.313rem] z-[4]">
                        Non Active
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
   
  );
};

export default DataAnalysis1;
