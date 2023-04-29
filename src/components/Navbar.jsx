import logo from "../assets/Logo.png";
import icon from "../assets/Icon.png";

export default function Navbar() {
  return (
    <div className="bg-white shadow-md p-7 w-full flex justify-between h-16">
    <div className="flex items-center pl-12">
      <img src={logo} alt="logo" className="h-7"/>
    </div>
    <ul className="flex items-center gap-8 text-xs ">
      <li>
        <a href="/" className="hover:text-orange-600">
          HOME
        </a>
      </li>
      <li>
        <a href="/projects" className="hover:text-orange-600">
          PROJECTS
        </a>
      </li>
      <li>
        <a href="/faqs" className="hover:text-orange-600">
          FAQ
        </a>
      </li>
     
    </ul>

    <div className="flex items-center pr-12">
      <h1 className="pr-2 text-sm">Start your journey</h1>
      <img src={icon} alt='icon' className="h-8" />
    </div>
  </div>
  )
}
