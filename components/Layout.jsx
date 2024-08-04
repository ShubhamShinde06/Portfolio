import About from "./About";
import SideBar from "./SideBar";

const LayoutTwo = () => {
 return(
    <>
        <div className="w-[100%] h-[100vh] block md:flex overflow-scroll">
            <div className="lg:w-[30%] lg:h-auto md:w-[100%] lg:flex lg:items-center justify-center  layout-border"><SideBar/></div>
        </div>
    </>
 )
}

export default LayoutTwo;