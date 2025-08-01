import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technology";
import Hero from "./components/hero";
const App = () => {
    return (
<div className='overflow-x-hidden text-white antialiased'>
<div className="fixed inset-0 -z-10">
              <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
            </div>
             <div className="container mx-auto px-8">
              <Navbar/>
              <Hero/>
             <Technologies />
             <Projects />
             <Experience />
             <Contact />
             </div>
            
     </div>   
    )
}
export default App
