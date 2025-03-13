"use client";

const Landing = () => {
    return (
        <div id="home" className="bg-[#E0F8F2] relative min-h-screen flex">
            <div className="bg-transparent min-w-[50%] min-h-[#100vh/2] flex flex-col items-baseline justify-center pl-[3vw]">
                <p className="text-black text-5xl font-[700] font-inter leading-snug">Hotels & House Boats</p>
                <p className="text-[#FF3B30] text-6xl font-[400] font-courgette leading-snug">guarenteed</p>
                <p className="text-black text-5xl font-[700] font-inter leading-snug">at lowest rates!</p>
                <p className="text-black text-5xl font-[700] font-inter leading-snug">Download Now!!</p>
                <div className="flex mt-8 justify-stretch w-3/4">
                    <button className="px-[40] py-[15] bg-[#FF6D2C] text-white text-[14px] font-inter border-2 border-black border-b-[5px] border-r-[5px] rounded-[13px]">
                        EXPLORE MORE
                    </button>
                    <div className="pl-[50] flex flex-col justify-center items-baseline">
                        <img src="/LandingAssets/fiveStars.png" alt="Five Stars!" className="w-[70%] h-auto" />
                        <p className="text-black font-inter font-[500] text-sm">5.0 Shopify Rating</p>
                    </div>
                </div>
            </div>
            <div className="bg-transparent min-w-[50%] min-h-[#100vh/2] flex items-center justify-center">
                <img src="/LandingAssets/leftTiltedPhone.png" alt="Left Tilted Phone" className="top-28 absolute z-10 left-1/2"/>
                <img src="/LandingAssets/rightTiltedPhone.png" alt="Right Tilted Phone"  className="top-28 absolute left-[67%]"/>
            </div>
        </div>
    );
};

export default Landing;