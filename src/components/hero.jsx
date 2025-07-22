import profile from "../assets/profile.png";
const Hero = () => {
    return (
       <div className="pb-4 lg:mb-36 ">
          <div className="flex flex-wrap lg:flex">
             <div className="w-full lg:w-1/2">
               <div className="flex justify-center lg:p-8">
                 <img src={profile} className="border border-stone-900 rounded-3xl" alt="profile" />
               </div>
             </div>
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col item-center lg:items-start mt-10">
                    <h2 className="pb-2 text-4xl tracking-lighter lg:text-8xl">Mystry</h2>
                    <span className="bg-gradient-lo-r from-stone-300 
                                      to-stone-600 bg-clip-text text-3xl
                     tracking-light text-transparent">Full Stack Developer</span>
                     
                </div>
              </div>
          </div>
       </div>
    );
};
export default Hero;