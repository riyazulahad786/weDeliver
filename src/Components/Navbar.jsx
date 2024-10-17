import {useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className={`container navbar py-3 d-flex justify-content-between ${open ? "show":""}`}>
      <a className='fs-5 fw-bolder'>WeDeliver.com</a>
      
      <ul className={`menu_list d-lg-flex ${open ? 'open' : ''} justify-content-evenly`}>
      {/* close btn */}
       <a className='d-lg-none close_btn' onClick={handleOpen}><IoMdClose/></a>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Products</li>
      </ul>
      {/* menu btn */}
     <a className='d-lg-none' onClick={handleOpen}><IoIosMenu/></a>
    </div>
  )
}

export default Navbar