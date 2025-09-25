"use client"
import React from 'react';

const ContrailsLanding = () => {
  return (
    <>
      {/* Injecting the Google Font import directly into the component.
        In a real-world project, this would typically be in your main index.html or global CSS file.
      */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap');
        body {
          font-family: 'Space Grotesk', sans-serif;
        }
      `}</style>

      <div className="w-full min-h-screen bg-[#050505] relative font-['Space_Grotesk'] text-white overflow-x-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-screen bg-[#050505] -z-50"></div>
        <div className="absolute top-[1969px] left-0 w-screen h-[292px] bg-[#050710] -z-40"></div>
        <div className="absolute top-[2261px] left-[-10%] w-[120vw] h-[1024px] bg-gradient-to-b from-[#050710] to-[#254715] -z-30"></div>
        <div className="absolute top-[4081px] left-[-10%] w-[120vw] h-[1024px] bg-gradient-to-l from-[#050710] to-[#121A0E] -z-20"></div>
        <div 
          className="absolute top-0 left-0 w-full h-[1969px] bg-cover bg-center -z-10"
          style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/ea73d83ba7f336ac88ce57f40b838ee7efc61f95?width=3914')" }}
        ></div>

        {/* Header */}
        <header className=" bg-amber-200 absolute left-0 right-0 z-[100] px-5 md:px-[45px]">
          <div className="max-w-[1511px] mx-auto flex justify-between items-center h-[75px] p-5 md:flex-row flex-col gap-5 md:h-auto">
            <div className="flex items-center gap-[9px] w-[200px] h-[34px]">
              <div className="w-[31px] h-[31px] flex-shrink-0">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none">
                  <path d="M15.5 0L31 15.5L15.5 31L0 15.5L15.5 0Z" fill="#FFF"/>
                </svg>
              </div>
              <div className="text-white text-[27px] font-bold flex">Contrails AI</div>
            </div>
            
            <nav className="flex items-center gap-5 md:gap-10">
              <a href="#use-cases" className="text-white text-base font-normal no-underline transition-opacity hover:opacity-80">Use cases</a>
              <a href="#blog" className="text-white text-base font-normal no-underline transition-opacity hover:opacity-80">Blog</a>
              <a href="#about" className="text-white text-base font-normal no-underline transition-opacity hover:opacity-80">About</a>
            </nav>
            
            <button className="flex py-2 px-[17px] items-center rounded-md bg-white text-black text-[15px] font-normal cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(255,255,255,0.2)]">
              Get a demo
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative md:top-[160px] lg:top-[190px] mx-auto px-5 w-full max-w-[1390px] h-auto md:h-[586px] flex items-start z-10 lg:flex-row flex-col">
          <div className=" flex flex-col items-start gap-5 w-full lg:w-[607px]">
            <h1 className="w-full lg:w-[627px] text-white text-5xl md:text-6xl lg:text-[80px] font-normal leading-tight md:leading-[68px] xl:leading-[90px] tracking-wide m-0">
              GenAI Content Governance and Intelligence Across{' '}
              <span className="text-[#5E9136]">VIDEO</span>
            </h1>
            <p className="w-full max-w-[414px] text-white text-base font-normal leading-[27px] m-0">
              Detect deepfakes, misinformation, fraud, and harmful content at an enterprise scale.
            </p>
            <button className="flex py-2.5 px-5 items-center rounded-lg bg-white text-black text-lg font-normal cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,255,255,0.3)]">
              Get a demo
            </button>
          </div>
          <div className="relative w-full border ">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/5bd0a44bb590b4adee1e422f06710a878ac88caf?width=1594" 
              alt="AI Technology Visualization" 
              className="w-[100vw] h-[100vh] object-contain relative -top-20"
            />
          </div>
        </section>

        {/* Spacer Div to push content down */}
        <div className="h-[800px] md:h-[600px]"></div>

        {/* Features Grid */}
        <section className="relative px-5 mx-auto w-full max-w-[1471px] min-h-[849px] z-5 mt-40">
            <div className="flex w-full items-start gap-5 flex-wrap justify-center lg:justify-between">
                <div className="flex w-full max-w-[367px] p-10 md:p-[60px_40px] flex-col justify-between items-start flex-shrink-0 rounded-[30px] bg-white min-h-[280px] text-black">
                    <h3 className="w-full max-w-[281px] text-4xl font-normal leading-[38px] mb-4">AI Safety at Enterprise Scale</h3>
                    <p className="w-full max-w-[262px] text-2xl font-normal leading-[29px]">
                        Designed for platforms that need accuracy, speed, and trust.
                    </p>
                </div>
                {/* Feature Cards Data */}
                {[
                    { title: "AI Content Detection", desc: "Spot fakes in any format instantly" },
                    { title: "Brand Protection", desc: "Keep customer trust intact" },
                    { title: "Harmful Content Labeling", desc: "Classify risks for fast response" },
                    { title: "Automated Policy Review", desc: "Match detections with your content rules" },
                    { title: "Human-Assist Labels", desc: "Give moderators clarity and context" },
                    { title: "Faster, Cheaper Actions", desc: "Scale decisions without scaling costs" },
                ].map((feature, index) => (
                    <div key={index} className="flex w-full max-w-[367px] p-10 md:p-[60px_40px] flex-col justify-between items-start flex-shrink-0 rounded-[30px] bg-white/90 min-h-[280px] text-black">
                        <div className="flex items-center gap-[14px] mb-5">
                            <div className="w-[13px] h-[13px] rounded-full bg-[#FF7300] flex-shrink-0"></div>
                            <h4 className="text-xl font-bold leading-[21px] tracking-wide">{feature.title}</h4>
                        </div>
                        <p className="text-2xl font-normal leading-[29px] max-w-[250px]">{feature.desc}</p>
                    </div>
                ))}
            </div>

            {/* Floating Feature Pills - Hidden on smaller screens for simplicity */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden xl:block">
                <div className="flex items-center justify-center gap-3 p-3 rounded-[66px] bg-black/5 shadow-[0_35px_67px_rgba(0,0,0,0.22)] backdrop-blur-[42px] absolute whitespace-nowrap pointer-events-auto w-[367px] h-[110px] top-[55px] right-[350px]">
                    <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 33 32" fill="none"><path d="M18.229 2.66699L4.89563 18.667H16.8956L15.5623 29.3337L28.8956 13.3337H16.8956L18.229 2.66699Z" fill="white" stroke="white" strokeWidth="2"/></svg>
                    <span className="text-white text-2xl font-normal leading-[53px]">Lightning-Fast Results</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-3 rounded-[66px] bg-black/5 shadow-[0_35px_67px_rgba(0,0,0,0.22)] backdrop-blur-[42px] absolute whitespace-nowrap pointer-events-auto w-[367px] h-[110px] top-[-150px] right-[33px]">
                    <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 33 32" fill="none"><path d="M11.0623 4V8C11.0623 8.70724 10.7813 9.38552 10.2812 9.88562C9.78115 10.3857 9.10287 10.6667 8.39563 10.6667H4.39563M28.3956 10.6667H24.3956C23.6884 10.6667 23.0101 10.3857 22.51 9.88562C22.0099 9.38552 21.729 8.70724 21.729 8V4M21.729 28V24C21.729 23.2928 22.0099 22.6145 22.51 22.1144C23.0101 21.6143 23.6884 21.3333 24.3956 21.3333H28.3956M4.39563 21.3333H8.39563C9.10287 21.3333 9.78115 21.6143 10.2812 22.1144C10.7813 22.6145 11.0623 23.2928 11.0623 24V28" stroke="white" strokeWidth="2"/></svg>
                    <span className="text-white text-2xl font-normal leading-[53px]">Scalable Performance</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-3 rounded-[66px] bg-black/5 shadow-[0_35px_67px_rgba(0,0,0,0.22)] backdrop-blur-[42px] absolute whitespace-nowrap pointer-events-auto w-[367px] h-[110px] top-[-226px] right-[350px]">
                    <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 33 32" fill="none"><path d="M24.3943 26.667H8.39433C6.92157 26.667 5.72766 25.4731 5.72766 24.0003V8.00032C5.72766 6.52757 6.92157 5.33366 8.39433 5.33366H24.3943C25.8671 5.33366 27.061 6.52757 27.061 8.00032V24.0003C27.061 25.4731 25.8671 26.667 24.3943 26.667Z" stroke="white" strokeWidth="2"/><path d="M20.3956 20H12.3956V12H20.3956V20Z" stroke="white" strokeWidth="2"/></svg>
                    <span className="text-white text-2xl font-normal leading-[53px]">Multi Modal Detection</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-3 rounded-[66px] bg-black/5 shadow-[0_35px_67px_rgba(0,0,0,0.22)] backdrop-blur-[42px] absolute whitespace-nowrap pointer-events-auto w-[367px] h-[110px] top-[255px] right-[17px]">
                    <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none"><path d="M28.2911 21.1868C27.4694 23.1927 26.1841 24.9604 24.5477 26.3352C22.9113 27.71 20.9735 28.65 18.9038 29.0731C16.8342 29.4963 14.6956 29.3896 12.675 28.7625C10.6545 28.1354 8.81357 27.0069 7.31317 25.4756C5.81276 23.9444 4.69857 22.0571 4.068 19.9787C3.43744 17.9003 3.3097 15.6941 3.69595 13.5529C4.08221 11.4118 4.9707 9.40094 6.28374 7.69614C7.59679 5.99135 9.29441 4.64453 11.2282 3.77344" stroke="white" strokeWidth="2"/><path d="M29.3123 16.0003C29.3123 14.2494 28.9782 12.5156 28.3291 10.8979C27.68 9.2802 26.7285 7.81035 25.5291 6.57223C24.3297 5.33412 22.9057 4.35199 21.3386 3.68193C19.7715 3.01187 18.0919 2.66699 16.3956 2.66699V16.0003H29.3123Z" fill="white" stroke="white" strokeWidth="2"/></svg>
                    <span className="text-white text-2xl font-normal leading-[53px]">Verified Reports</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-3 rounded-[66px] bg-black/5 shadow-[0_35px_67px_rgba(0,0,0,0.22)] backdrop-blur-[42px] absolute whitespace-nowrap pointer-events-auto w-[367px] h-[110px] top-[365px] right-[350px]">
                    <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 33 32" fill="none"><path d="M28.8956 13.333H4.89563M28.8956 8H4.89563M28.8956 18.667H4.89563M28.8956 24H4.89563" stroke="white" strokeWidth="2"/></svg>
                    <span className="text-white text-2xl font-normal leading-[53px]">Deep Explainability</span>
                </div>
            </div>

            {/* AI Visualization Image */}
            <div className="absolute top-[-650px] right-[-100px] w-[357px] h-[340px] z-1 hidden lg:block">
                <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/bea320c8aab400779b2142becaeb19f2caf396ad?width=714" 
                    alt="AI Metaverse Visualization" 
                    className="w-full h-full object-contain mix-blend-overlay"
                />
            </div>
        </section>

        {/* Trust Section */}
        <section className="relative px-5 mx-auto w-full max-w-[1231px] z-10 mt-20">
            <div className="flex w-full justify-center md:justify-between items-center h-full flex-col md:flex-row gap-10 md:gap-0">
                <div className="flex w-full max-w-[460px] flex-col justify-center items-center gap-5 flex-shrink-0">
                    <div className="w-20 h-20 flex-shrink-0 mb-1.5"><svg width="81" height="80" viewBox="0 0 81 80" fill="none"><path d="M38.9127 6.6665C56.446 6.6665 70.6587 20.8792 70.6587 38.4125C70.6587 39.0686 70.6391 39.7199 70.6 40.3665C69.259 40.2104 67.9407 39.8993 66.6714 39.4395C66.6841 39.0998 66.6905 38.7575 66.6905 38.4125C66.6905 35.3633 66.1984 32.4284 65.2905 29.6824H54.1794C54.4905 31.8681 54.6873 34.1506 54.7571 36.5014C53.5184 37.3895 52.1988 38.1591 50.8159 38.7998L50.8174 38.4125C50.8241 35.4901 50.6065 32.5715 50.1667 29.6824H27.6587C27.2189 32.5715 27.0013 35.4901 27.0079 38.4125C27.0079 41.7776 27.2857 44.9792 27.7857 47.9363H38.9127V51.9046H28.627C29.3206 54.6062 30.2095 57.0284 31.2381 59.0855C33.9 64.4094 36.8413 66.1903 38.9127 66.1903C39.773 66.1903 40.7857 65.8824 41.8651 65.1395C42.5815 66.3247 43.4185 67.4411 44.3762 68.4887C44.6936 68.8348 45.0217 69.1734 45.3603 69.5046C43.2778 69.9332 41.1222 70.1586 38.9127 70.1586C21.3794 70.1586 7.16666 55.9459 7.16666 38.4125C7.16666 20.8792 21.3794 6.6665 38.9127 6.6665Z" fill="white"/><path d="M50.6936 42.2919C52.0577 41.7744 53.4122 41.1088 54.7571 40.2951C55.5859 39.7939 56.39 39.253 57.1667 38.6744C57.3963 38.5043 57.6745 38.4125 57.9603 38.4125C58.2461 38.4125 58.5243 38.5043 58.754 38.6744C59.9518 39.5633 61.1571 40.3332 62.3698 40.984C63.8291 41.767 65.2989 42.3771 66.7794 42.8141C68.6704 43.3729 70.5804 43.6517 72.5095 43.6506C73.2397 43.6506 73.8333 44.2379 73.8333 44.9602V54.1268C73.8333 62.8586 68.6174 69.2744 58.4444 73.2427C58.1331 73.364 57.7875 73.364 57.4762 73.2427C52.8635 71.4443 49.2698 69.1411 46.7206 66.349C45.5232 65.0502 44.528 63.5788 43.7682 61.984C42.6497 59.6178 42.0894 56.9988 42.0873 54.1268V44.9602C42.0894 44.6113 42.2298 44.2775 42.4776 44.032C42.7255 43.7865 43.0606 43.6494 43.4095 43.6506C45.8688 43.6506 48.2963 43.1972 50.6921 42.2903" fill="white"/></svg></div>
                    <h3 className="text-white text-4xl font-bold text-center max-w-[380px]">Trusted Worldwide</h3>
                    <p className="text-white text-center text-base font-normal leading-5 max-w-[484px]">From marketplaces to media, AI moderation you can rely on.</p>
                </div>
                <div className="flex w-full max-w-[489px] flex-col justify-center items-center gap-5 flex-shrink-0">
                    <div className="w-20 h-20 flex-shrink-0 mb-1.5"><svg width="81" height="80" viewBox="0 0 81 80" fill="none"><path d="M40.5826 0C18.5082 0.024 0.625 17.9248 0.625 40C0.625 62.0912 18.5338 80 40.625 80C62.7162 80 80.625 62.0912 80.625 40C80.6096 36.8417 80.2203 33.6963 79.465 30.6296L76.113 33.9832C76.3338 35.3 76.493 36.6376 76.5674 38H42.625V4.5456C43.6378 4.7176 44.6402 5.0536 45.6218 5.5376C45.6405 5.51627 45.6597 5.49547 45.6794 5.4752L49.9954 1.1592C46.9287 0.404222 43.7833 0.0151117 40.625 0L40.5826 0Z" fill="white"/><path d="M59.925 0C59.6863 0 59.4574 0.0948212 59.2886 0.263604C59.1198 0.432387 59.025 0.661305 59.025 0.9V5.932C58.1922 6.1824 57.3938 6.516 56.6418 6.9256L53.0794 3.3632C52.9944 3.27834 52.8932 3.21129 52.782 3.16596C52.6707 3.12063 52.5515 3.09794 52.4314 3.0992C52.1965 3.10256 51.9721 3.19725 51.8058 3.3632L47.9882 7.1808C47.9045 7.26439 47.8381 7.36365 47.7928 7.47292C47.7475 7.58219 47.7242 7.69931 47.7242 7.8176C47.7242 7.93589 47.7475 8.05301 47.7928 8.16228C47.8381 8.27155 47.9045 8.37081 47.9882 8.4544L51.5506 12.0168C51.141 12.7688 50.8074 13.5672 50.5562 14.4H45.525C45.2863 14.4 45.0574 14.4948 44.8886 14.6636C44.7198 14.8324 44.625 15.0613 44.625 15.3V20.7C44.625 20.9387 44.7198 21.1676 44.8886 21.3364C45.0574 21.5052 45.2863 21.6 45.525 21.6H50.557C50.8074 22.4328 51.141 23.2312 51.5506 23.9832L47.9882 27.5456C47.9045 27.6292 47.8381 27.7285 47.7928 27.8377C47.7475 27.947 47.7242 28.0641 47.7242 28.1824C47.7242 28.3007 47.7475 28.4178 47.7928 28.5271C47.8381 28.6363 47.9045 28.7356 47.9882 28.8192L51.8058 32.6368C51.8894 32.7205 51.9887 32.7869 52.0979 32.8322C52.2072 32.8775 52.3243 32.9008 52.4426 32.9008C52.5609 32.9008 52.678 32.8775 52.7873 32.8322C52.8965 32.7869 52.9958 32.7205 53.0794 32.6368L56.6418 29.0744C57.3938 29.484 58.1922 29.8176 59.025 30.0688V35.1C59.025 35.3387 59.1198 35.5676 59.2886 35.7364C59.4574 35.9052 59.6863 36 59.925 36H65.325C65.5637 36 65.7926 35.9052 65.9614 35.7364C66.1302 35.5676 66.225 35.3387 66.225 35.1V30.068C67.0514 29.8196 67.85 29.4866 68.6082 29.0744L72.1706 32.6368C72.2542 32.7205 72.3535 32.7869 72.4627 32.8322C72.572 32.8775 72.6891 32.9008 72.8074 32.9008C72.9257 32.9008 73.0428 32.8775 73.1521 32.8322C73.2613 32.7869 73.3606 32.7205 73.4442 32.6368L77.2618 28.8192C77.3455 28.7356 77.4119 28.6363 77.4572 28.5271C77.5025 28.4178 77.5258 28.3007 77.5258 28.1824C77.5258 28.0641 77.5025 27.947 77.4572 27.8377C77.4119 27.7285 77.3455 27.6292 77.2618 27.5456L73.6994 23.9832C74.109 23.2312 74.4426 22.4328 74.6938 21.6H79.725C79.8432 21.6 79.9602 21.5767 80.0694 21.5315C80.1786 21.4863 80.2778 21.42 80.3614 21.3364C80.445 21.2528 80.5113 21.1536 80.5565 21.0444C80.6017 20.9352 80.625 20.8182 80.625 20.7V15.3C80.625 15.0613 80.5302 14.8324 80.3614 14.6636C80.1926 14.4948 79.9637 14.4 79.725 14.4H74.693C74.4446 13.5736 74.1116 12.775 73.6994 12.0168L77.2618 8.4544C77.3455 8.37081 77.4119 8.27155 77.4572 8.16228C77.5025 8.05301 77.5258 7.93589 77.5258 7.8176C77.5258 7.69931 77.5025 7.58219 77.4572 7.47292C77.4119 7.36365 77.3455 7.26439 77.2618 7.1808L73.4442 3.3632C73.3592 3.27834 73.258 3.21129 73.1468 3.16596C73.0355 3.12063 72.9163 3.09794 72.7962 3.0992C72.5613 3.10256 72.3369 3.19725 72.1706 3.3632L68.6082 6.9256C67.8501 6.51313 67.0515 6.1799 66.225 5.9312V0.9C66.225 0.661305 66.1302 0.432387 65.9614 0.263604C65.7926 0.0948212 65.5637 0 65.325 0L59.925 0ZM62.625 11.7C66.1418 11.7 68.925 14.484 68.925 18C68.925 21.5168 66.141 24.3 62.625 24.3C59.1082 24.3 56.325 21.516 56.325 18C56.325 14.4832 59.109 11.7 62.625 11.7Z" fill="white"/></svg></div>
                    <h3 className="text-white text-4xl font-bold text-center max-w-[380px]">Trusted Across Industries Worldwide</h3>
                    <p className="text-white text-center text-base font-normal leading-5 max-w-[484px]">From e-commerce to entertainment, AI moderation done right.</p>
                </div>
            </div>
        </section>

        {/* Features That Power Trust Section */}
        <section className="relative px-5 mx-auto w-full max-w-screen-xl z-10 mt-64">
          <div className="flex flex-col items-start gap-5 max-w-[677px]">
            <h2 className="w-full text-5xl md:text-7xl font-normal leading-tight md:leading-[80px]">Features That Power Trust</h2>
            <p className="w-full max-w-[591px] text-base font-normal leading-[27px]">
              From monitoring to compliance, our platform provides everything you need to deploy AI safely and confidently at enterprise scale.
            </p>
          </div>
        </section>
        
        {/* Recognition Section */}
        <section className="relative px-5 mx-auto w-full max-w-[1275px] z-10 mt-96">
            <h3 className="text-white text-left md:text-center text-2xl font-normal leading-[53px] mb-9">Recognized on the World Stage</h3>
            <h2 className="w-full text-4xl md:text-5xl font-normal leading-tight md:leading-[73px] mb-36">
                From global AI forums to trust & safety summits, Contrails AI is shaping the conversation where it matters most.
            </h2>
            <div className="flex w-full items-start content-start gap-x-14 gap-y-16 flex-wrap justify-center mb-24">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/6c2dc078c47e77394472f49c39c9de0a4ef26e6d?width=402" alt="Partner 1" className="w-[150px] md:w-[201px] h-auto object-contain" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/6599f1741cbb22a9b2048eb449cf773049603133?width=402" alt="Partner 2" className="w-[150px] md:w-[201px] h-auto object-contain" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/62e5daaeb2deda8bc72eb737e5605e444a4e0f48?width=401" alt="Partner 3" className="w-[150px] md:w-[201px] h-auto object-contain" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/35c2e2a120e6fd553db5d9b3fd15996ac776c741?width=402" alt="Partner 4" className="w-[150px] md:w-[201px] h-auto object-contain" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/d44a61ea58ed493a33261e3c5a79f877f3548ded?width=404" alt="Partner 5" className="w-[150px] md:w-[201px] h-auto object-contain" />
            </div>
        </section>

        {/* Enterprise CTA Section */}
        <section className="relative px-5 mx-auto w-full max-w-[1430px] z-10 mt-64 flex lg:flex-row flex-col gap-10 items-start">
            <div className="flex w-full lg:w-[552px] flex-col items-start gap-5">
                <h2 className="w-full text-5xl md:text-7xl font-normal leading-tight md:leading-[80px]">
                    Safeguard Your Digital Content with Enterprise-Grade AI Safety
                </h2>
                <p className="w-full max-w-[414px] text-base font-normal leading-[27px]">
                    Talk to us and discover the fastest path to trusted content moderation.
                </p>
            </div>
            
            <div className="flex w-full lg:w-auto items-center gap-5 flex-col lg:flex-row">
                <div className="relative flex w-full max-w-[367px] p-10 md:p-[60px_40px] flex-col justify-between items-start rounded-[30px] bg-white text-black h-auto lg:h-[606px]">
                    <h3 className="text-3xl font-normal leading-[34px] flex-1">Deploy in 30 minutes</h3>
                    <p className="text-2xl font-normal leading-[29px] max-w-[262px] mt-4">Simple SDK integration with existing systems</p>
                    <div className="w-16 h-16 absolute bottom-10 right-10 md:bottom-[60px] md:right-[40px]">
                      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M12.0013 43.9999C8.0013 47.3599 6.66797 57.3332 6.66797 57.3332C6.66797 57.3332 16.6413 55.9999 20.0013 51.9999C21.8946 49.7599 21.868 46.3199 19.7613 44.2399C18.7248 43.2506 17.3594 42.6789 15.9272 42.6346C14.4951 42.5903 13.097 43.0765 12.0013 43.9999Z" stroke="black" strokeWidth="2"/><path d="M32 40.0003L24 32.0003C25.4191 28.3188 27.2059 24.7898 29.3333 21.467C32.4405 16.499 36.767 12.4085 41.9013 9.58458C47.0357 6.76069 52.8071 5.29732 58.6667 5.33367C58.6667 12.587 56.5867 25.3337 42.6667 34.667C39.2984 36.7969 35.7249 38.5837 32 40.0003Z" stroke="black" strokeWidth="2"/><path d="M24.0013 32.0004H10.668C10.668 32.0004 12.1346 23.9204 16.0013 21.3337C20.3213 18.4537 29.3346 21.3337 29.3346 21.3337" stroke="black" strokeWidth="2"/><path d="M32 40.0003V53.3337C32 53.3337 40.08 51.867 42.6667 48.0003C45.5467 43.6803 42.6667 34.667 42.6667 34.667" stroke="black" strokeWidth="2"/></svg>
                    </div>
                </div>
                
                <div className="flex flex-col w-full lg:w-auto gap-5">
                    <div className="flex w-full max-w-[367px] p-10 md:p-[60px_40px] flex-col justify-between items-start rounded-[30px] bg-white text-black min-h-[300px]">
                        <h3 className="text-3xl font-normal leading-[34px] flex-1">Enterprise security</h3>
                        <p className="text-2xl font-normal leading-[29px] max-w-[262px] mt-4">SOC 2 certified with bank grade encryption</p>
                    </div>
                    <div className="flex w-full max-w-[367px] p-10 md:p-[60px_40px] flex-col justify-between items-start rounded-[30px] bg-white text-black min-h-[300px]">
                        <h3 className="text-3xl font-normal leading-[34px] flex-1">24/7 expert support</h3>
                        <p className="text-2xl font-normal leading-[29px] max-w-[262px] mt-4">Dedicated team for enterprise customers</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative px-5 mx-auto w-full max-w-[1326px] z-10 mt-96 md:mt-48">
            <h2 className="w-full text-5xl md:text-7xl font-normal leading-tight md:leading-[80px] mb-16">
                Talk to us and discover the fastest path to trusted content moderation.
            </h2>
            <button className="flex w-[213px] h-[56px] p-5 justify-between items-center rounded-lg bg-[#457C2E] text-white text-2xl font-normal leading-[29px] cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(69,124,46,0.4)] hover:bg-[#5a9e3a]">
                Book a Demo
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M10 7L15 12L10 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
        </section>

        {/* Footer */}
        <footer className="relative px-5 mx-auto w-full max-w-[1544px] z-10 mt-96 pb-10">
            <div className="flex w-full h-[85px] p-3 flex-col justify-center items-center gap-3 rounded-[66px] bg-black/5 shadow-[0_35px_67px_rgba(0,0,0,0.22)] mb-14">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/a1dc7680546b0ab08b9df370a4077ad3ba0c9c48?width=2953" alt="Contrails AI" className="w-full max-w-[1476px] h-[200px] object-contain" />
            </div>
            
            <div className="flex p-5 justify-between items-center w-full mb-5 flex-col md:flex-row gap-5">
                <div className="w-[31px] h-[31px]"><svg width="31" height="31" viewBox="0 0 31 31" fill="none"><path d="M15.5 0L31 15.5L15.5 31L0 15.5L15.5 0Z" fill="#FFF"/></svg></div>
                <nav className="flex items-center gap-5 md:gap-10 flex-wrap justify-center">
                    <a href="#use-cases" className="text-white text-base font-normal no-underline transition-opacity hover:opacity-80">Use cases</a>
                    <a href="#blog" className="text-white text-base font-normal no-underline transition-opacity hover:opacity-80">Blog</a>
                    <a href="#about" className="text-white text-base font-normal no-underline transition-opacity hover:opacity-80">About</a>
                    <a href="#privacy" className="text-white text-base font-normal no-underline transition-opacity hover:opacity-80">Privacy Policy</a>
                    <a href="#terms" className="text-white text-base font-normal no-underline transition-opacity hover:opacity-80">Terms & Conditions</a>
                </nav>
            </div>
            
            <div className="flex p-5 justify-between items-center w-full flex-col md:flex-row gap-5">
                <div className="text-white text-base font-normal">
                    © 2025 Contrails AI. All rights reserved.
                </div>
                <div className="flex items-center gap-5">
                    <a href="#" className="w-6 h-6 transition-opacity hover:opacity-80">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M14.1596 0.839844H16.9196L10.8596 8.05387L17.9396 17.8398H12.3836L8.03359 11.893L3.05359 17.8398H0.293594L6.71359 10.124L-0.0664062 0.839844H5.62759L9.55759 6.27232L14.1596 0.839844ZM13.1936 16.1461H14.7236L4.82359 2.47084H3.17959L13.1936 16.1461Z" fill="white"/></svg>
                    </a>
                    <a href="#" className="w-6 h-6 transition-opacity hover:opacity-80">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M21 21.3398H17.3016V15.0406C17.3016 13.3135 16.6453 12.3483 15.2783 12.3483C13.7912 12.3483 13.0143 13.3527 13.0143 15.0406V21.3398H9.45V9.33984H13.0143V10.9562C13.0143 10.9562 14.0859 8.97323 16.6324 8.97323C19.1777 8.97323 21 10.5275 21 13.7422V21.3398ZM5.19785 7.76854C3.98379 7.76854 3 6.77703 3 5.55419C3 4.33135 3.98379 3.33984 5.19785 3.33984C6.41191 3.33984 7.39512 4.33135 7.39512 5.55419C7.39512 6.77703 6.41191 7.76854 5.19785 7.76854ZM3.35742 21.3398H7.07402V9.33984H3.35742V21.3398Z" fill="white"/></svg>
                    </a>
                </div>
            </div>
        </footer>
      </div>
    </>
  );
};

export default ContrailsLanding;
