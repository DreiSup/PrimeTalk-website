/* import React, { useState } from 'react' */
import { useSection } from './Utilities/SectionContext';

import logo from "../assets/logoNavBar.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
/* import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; */

const NavBar = () => {
   /*  const nav = useNavigate(); */

    /* const [isOpen, setIsOpen] = useState(false); */

    /* const toggleNavbar = () => {
        console.log("navbar toggle");
        setIsOpen(!isOpen);
    } */
/* --- asctive section n shi --- */
    const { activeSection } = useSection();
/* ----------------------------- */
const scrollToNosotros = () => {
    window.scrollTo({top: 1050, left:0, behavior: 'smooth'})
    console.log('lmao')
}

const scrollToValores = () => {
    window.scrollTo({top: 2050, left:0, behavior: 'smooth'})
    console.log('scrolled to valores')
}

const scrollToSector = () => {
    window.scrollTo({top: 3000, left:0, behavior: 'smooth'})
    console.log('scrolled to valores')
}

const scrollToContacto = () => {
    // Define the scroll position for desktop and mobile
    const desktopScrollPosition = 4300;
    const mobileScrollPosition = 3100; // Adjust this value as needed for mobile

    // Determine if the user is on a mobile device based on window width
    const isMobile = window.innerWidth <= 768; // Adjust the width threshold as needed

    // Set the scroll position based on the device type
    const scrollPosition = isMobile ? mobileScrollPosition : desktopScrollPosition;

    // Scroll to the desired position
    window.scrollTo({ top: scrollPosition, left: 0, behavior: 'smooth' });
    console.log('scrolled to valores');
};

  return (<>
    
    <section className='sticky top-0 z-[999] w-full p-6 bg-gris  flex mx-auto overflow-hidden'>
        <div className='flex w-full md:w-[1240px] justify-between items-center gap-5 mx-auto'>
            <div>
                <img className='min-w-32 w-40 md:w-52 cursor-pointer' src={logo} alt=""/>
            </div>
            <div className='flex items-center gap-12 font-splinesans font-semibold'>
                <ul className='hidden lg:flex gap-8 text-white'>
                    <li className={`cursor-pointer ${activeSection === 'Nosotros' ? 'underline underline-offset-4 underline-verde1 text-verde1' : ''}`} onClick={scrollToNosotros} >
                        Nosotros
                    </li>
                    <li className={`cursor-pointer ${activeSection === 'Valores' ? 'underline underline-offset-4 underline-verde1 text-verde1' : ''}`} onClick={scrollToValores}>
                        Valores
                    </li>
                    <li className={`cursor-pointer ${activeSection === 'Sector' ? 'underline underline-offset-4 underline-verde1 text-verde1' : ''}`} onClick={scrollToSector} >
                        Sector
                    </li>
                </ul>
                    <button className='flex items-center justify-center bg-verde1 p-2 gap-2 rounded-full px-4 '
                        onClick={scrollToContacto}>
                        <FontAwesomeIcon className='text-sm pt-1' icon={faPhone} />
                        <p className='pt-1'>Contacto</p>
                    </button>
                    {/* <FontAwesomeIcon className='text-verde1 text-2xl' icon={faBars} /> */}
            </div>
        </div>

    </section>
    
    
</>)
}

export default NavBar