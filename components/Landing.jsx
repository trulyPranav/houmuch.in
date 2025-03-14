"use client";

const Landing = () => {
    return (
        <div id="home" className="bg-black/[0.92] relative min-h-screen flex flex-col xl:flex-row justify-center xl:justify-normal">
            <div className="bg-transparent min-w-[50%] min-h-[#100vh/2] flex flex-col items-baseline justify-center pl-[3vw]">
                <p className="text-white text-2xl xl:text-5xl font-[700] font-inter xl:leading-snug">Hotels & House Boats</p>
                <p className="text-[#FF3B30] text-4xl xl:text-6xl font-[400] font-courgette xl:leading-snug">guarenteed</p>
                <p className="text-white text-2xl xl:text-5xl font-[700] font-inter xl:leading-snug">at lowest rates!</p>
                <p className="text-white text-2xl xl:text-5xl font-[700] font-inter xl:leading-snug">Download Now!!</p>
                <div className="flex mt-8 justify-evenly xl:justify-stretch w-full xl:w-3/4">
                    <button className="px-6 xl:px-10 py-3 xl:py-4 bg-[#FF6D2C] text-white text-[9px] xl:text-[14px] font-inter border xl:border-2 border-black border-b-[3px] xl:border-b-[5px] border-r-[3px] xl:border-r-[5px] rounded-lg xl:rounded-[13px]">
                        EXPLORE MORE
                    </button>
                    <div className="pl-12 flex flex-col justify-center items-baseline w-1/2">
                        <img src="/LandingAssets/fiveStars.png" alt="Five Stars!" className="w-[60%] xl:w-[70%] h-auto" />
                        <p className="text-white font-inter font-[500] text-xs xl:text-sm">5.0 Shopify Rating</p>
                    </div>
                </div>
                <div className="flex mt-8 xl:pl-2 justify-around w-full md:w-1/2">
                    <img src="/LandingAssets/Play_Store.png" alt="Get it on PlayStore!" className="w-[45%] h-auto max-w-full" />
                    <img src="/LandingAssets/App_Store.png" alt="Get in on AppStore" className="w-[45%] h-auto max-w-full" />
                </div>
            </div>
            <div className="hidden min-w-[50%] min-h-[70vh] xl:flex flex-col xl:flex-row items-center justify-center bg-transparent">
                <img src="/LandingAssets/leftTiltedPhone.png" alt="Left Tilted Phone" className="xl:top-28 absolute z-10 xl:left-1/2 xl:right-0 right-20" />
                <img src="/LandingAssets/rightTiltedPhone.png" alt="Right Tilted Phone" className="xl:top-28 absolute xl:left-[67%] left-35" />
            </div>
        </div>
    );
};

export default Landing;