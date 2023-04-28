import Navbar from "./components/Navbar"
import Accordion from "./components/Accordion"
import img from "../../assets/Frame 106.png";
const index = () => {
  return (
    <div>
    <Navbar />
    <img src={img} alt="page-image" className="h-72 w-full"/>
    <Accordion />
    </div>
  )
}

export default index