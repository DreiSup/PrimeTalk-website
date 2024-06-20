import React, { FormEvent, useState } /* { useEffect, useState } */ from 'react'
import useSectionObserver from '../Components/Utilities/SectionObserver';
import { ReactSVG } from 'react-svg';

import Accordion from '../Components/Accordion'

import HeroImg from "../assets/HeroImgGrad.jpg"
import BlackImg from "../assets/BlackImg.jpg"
import Phone from "../assets/phoneLogo.png"
import logo from "../assets/logoNavBar.png"
import copyright from "../assets/copyright-symbol-svgrepo-com.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {

    useSectionObserver();

    const [loadingMensaje, setLoadingMensaje] = useState(false);
    const [errorMensaje, setErrorMensaje] = useState(false);
    const [successMensaje, setSuccessMensaje] = useState(false);


/*  ------- FORM submit n shi-------- */
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoadingMensaje(true)

        try{
            const formData = new FormData(event.currentTarget); 
    
            formData.append("access_key", "aa308b95-7fda-486b-9685-0f82c57ab516");
    
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
    
            const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
            }).then((res) => res.json());
    
            if (res.success) {
            console.log("Success", res);
            setSuccessMensaje(true)
            }

        }catch(error){
            console.log('something went wrong')
            setErrorMensaje(true);
        }finally{
            setLoadingMensaje(false)
        }

        
    };
/* --------------------------------- */



    


  return (<>
    <section id='Hero' className='relative z-30'>
        <div className='w-full h-full 2xl:h-screen overflow-hidden rounded-bl-[3rem]'>
            <img className='object-cover w-full h-full transform scale-[1.6] pr-[18vw]'
                 src={HeroImg} alt="/" />
        </div>
            <p className='py-[5vh] 2xl:py-0 2xl:absolute font-splinesans font-bold text-verde2 text-2xl sm:text-5xl z-40 top-[40vh] right-[10vw] text-center'>Impulsando Conexiones <br/> Potenciando Resultados</p>
    </section>

    <section id='Nosotros' className='relative 2xl:-mt-10  w-full h-full bg-gris py-20 px-8  md:p-40 rounded-br-[3rem] z-[29]'>
        <div className='flex flex-col gap-2 items-center pb-6'>
            <h2 className='font-splinesansmono text-center text-3xl sm:text-5xl text-verde1 font-semibold'>Nosotros</h2>
            <span className='w-full sm:w-3/6 h-[1px] bg-verde1'></span>
        </div>
        <div className='flex flex-col gap-12 md:gap-24 text-white text-lg sm:text-2xl m-[4vw] w-full 2xl:w-5/12 mx-auto'>
            <p>En PrimeTalk somos actualmente una de las empresas más presentes en el mercado ofreciendo las compañías con los mejores precios de venta (PVP) como también los mejores sueldos y comisiones en latinoamérica.</p>
            <p>Contamos con un amplio equipo de trabajo donde cubrimos tanto el apartado legal contando con un equipo de abogados y asesores fiscales al igual que un equipo de captación y realización de ventas.</p>
            <p>Ser una empresa transparente es lo que nos ha brindado la comodidad de ser una de las empresas más fiables y rentables en este 2024.</p>
        </div>
    </section>

    <section id='Valores' className='relative -mt-10  w-full h-full bg-white p-8 pb-16 sm:p-30 rounded-bl-[3rem]  z-[28]'>
        <div className='flex flex-col gap-2 items-center m-[6.5vh] md:m-[10vh]'>
            <h2 className='font-splinesansmono text-center text-3xl sm:text-5xl text-verde2 font-semibold  '>Valores</h2>
            <span className='w-full sm:w-3/6 h-[1px] bg-verde2'></span>
        </div>
        
        <div className='flex flex-col md:flex-row w-full gap-10 items-center justify-around p-0'>
            <div className=' max-w-[600px] max-h-[600px] sm:w-3/6 bg-blue-400 overflow-hidden rounded-bl-[3rem]'>
                <img className='object-cover w-full h-full transform md:scale-[1.1] sm:-mt-20 ' 
                src={BlackImg} alt="" />
            </div>
            <div className='flex flex-col gap-10 md:w-3/6'>
                <Accordion type={1} valor='Integridad'
                explicacion='En Prime Talk, la integridad es nuestro pilar. Nos comprometemos a actuar con honestidad y transparencia en todas nuestras relaciones, cumpliendo nuestras promesas y  manteniendo la confianza de nuestros clientes, empleados y socios. La integridad es esencial para construir relaciones  duraderas y un entorno de trabajo positivo.'  
                />
                <Accordion type={2} valor='Calidad'
                explicacion='La calidad es nuestro estándar en Prime Talk. Nos esforzamos por superar las expectativas de nuestros clientes con servicios de excelencia. Cada proceso y detalle refleja nuestro compromiso con la perfección y la mejora continua,  garantizando la satisfacción y lealtad del cliente.' 
                />
                <Accordion type={1} valor='Innovación disruptiva' explicacion='La innovación disruptiva impulsa Prime Talk. Desafiamos el status quo con ideas que transforman la industria de telecomunicaciones móviles. Adoptamos tecnologías avanzadas y creamos soluciones únicas para mantenernos dinámicos y competitivos, siempre un paso adelante en un mundo en constante cambio.'  
                />
            </div>
        </div>
    </section>

    <section id='Sector' className='relative -mt-10  w-full h-full bg-gris py-20 px-8  md:p-40 rounded-br-[3rem] z-[20]'>
        <div className='flex flex-col gap-2 items-center pb-6'>
            <h2 className='font-splinesansmono text-center text-3xl sm:text-5xl text-verde1 font-semibold'>Sector</h2>
            <span className='w-full sm:w-3/6 h-[1px] bg-verde1'></span>
        </div>
        <div className='flex flex-col gap-12 md:gap-24 text-white text-lg sm:text-2xl m-[4vw] w-full 2xl:w-5/12 mx-auto'>
            <p>En Prime Talk, nos especializamos exclusivamente en el sector de la telefonía móvil. </p>
            <img src={Phone} alt="" 
                className='w-4/6 mx-auto'/>
            <p>Esta dedicación nos permite concentrar todos nuestros recursos y conocimientos en ofrecer soluciones de primer nivel. Gracias a nuestro enfoque singular, hemos alcanzado una posición de liderazgo en la industria durante el último año. Nuestra experiencia y compromiso con la excelencia nos distinguen, asegurando que nuestros clientes reciban el mejor servicio y las tarifas más competitivas del mercado.</p>
        </div>
    </section>

    <section id='Contacto' className='relative -mt-10  w-full h-full bg-verde1 py-20 px-8  md:p-40 rounded-br-[3rem] z-[15]'>
        <div className='flex flex-col gap-2 items-center pb-6 mb-20'>
            <h2 className='font-splinesansmono text-center text-3xl sm:text-5xl text-gris font-semibold'>Contacto</h2>
            <span className='w-full sm:w-3/6 h-[1px] bg-gris'></span>
        </div>
        <div className='sm:text-3xl font-splinesans font-semibold flex flex-col gap-8 '>
            <button className='flex  justify-center p-2 px-5 sm:p-5 sm:px-20 bg-gris text-verde1 gap-4 items-center mx-auto rounded-full mb-10 lg:m-0'>
                <FontAwesomeIcon className='text-xl' icon={faPhone} />
                <p className=''><a href='tel:+34640056369'>Llámanos</a></p>
            </button>
            <p className='hidden lg:flex font-normal text-xl mx-auto text-gris'>al +34 640 056 369</p>
        </div>
        <span className='block border-b border-dotted border-gris w-full my-8'></span>
        <div className='flex flex-col gap-8'>
            <p className='font-splinesans text-3xl text-gris mx-auto font-semibold'>Contáctanos por email</p>
            <form onSubmit={onSubmit}
             className='font-splinesans'
             >
                <div className='flex flex-col lg:flex-row gap-8 '>
                    <div className='flex flex-col w-full lg:w-3/6 gap-5 justify-start'>
                        <label htmlFor="nombre">
                            <input type="text" placeholder='Nombre' name="nombre" required
                                className='appearance-none black w-full bg-verde1 rounded-md py-3 px-4 border-b-gris border border-verde1  focus:border-black focus:outline-none placeholder:text-gris' 
                            />
                        </label>
                        <label htmlFor="email">
                            <input type="email" placeholder='Email' name="email" required
                                className='appearance-none black w-full bg-verde1 rounded-md py-3 px-4 border-b-gris border border-verde1  focus:border-black focus:outline-none placeholder:text-gris' 
                            />
                        </label>
                        <label htmlFor="Asunto">
                            <input type="text" placeholder='Asunto' name="asunto" required
                                className='appearance-none black w-full bg-verde1 rounded-md py-3 px-4 border-b-gris border border-verde1  focus:border-black focus:outline-none placeholder:text-gris' 
                            />
                        </label>
                    </div>
                    <div className='lg:w-3/6 flex flex-col'>
                        <label htmlFor="mensaje">
                            <textarea name="mensaje" id="mensaje" placeholder="Mensaje" required
                                className='appearance-none leading-tight w-full bg-verde1 rounded-md py-3 px-4  border-x-gris border-b-gris border border-verde1 focus:border-black focus:outline-none placeholder:text-gris resize-none min-h-48'></textarea>
                        </label>
                        <button type="submit" className='p-2 bg-gris rounded-full px-4 font-semibold text-verde1 lg:mx-auto '>Enviar mensaje</button>
                        {loadingMensaje && 
                            <div className='mx-auto' role="status">
                                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </div>
                        }
                        {errorMensaje && <p className='mx-auto text-red-600 mt-2'>Error, inténtelo de nuevo o contáctenos por correo</p>}
                        {successMensaje && <p className='mx-auto text-verde2 mt-2'>Mensaje enviado</p>}
                        
                        
                        
                    </div>
                </div>
            </form>
        </div>          
    </section>

    <section id='Footer' className='relative -mt-10  w-full h-full bg-gris py-20 px-8  md:p-40 z-[10]'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-20 w-full gap-8 font-splinesans text-white'>
            <div className='flex flex-col gap-8 lg:w-5/12'>
                <img src={logo} alt="logo" className='w-48 md:w-full min-w-48' />
                <div className='hidden lg:flex items-center gap-2 mx-auto'>
                    <ReactSVG
                    src={copyright}
                    beforeInjection={(svg) => {
                        svg.setAttribute('style', 'width: 1em; height: 1em; fill: currentColor');
                    }}
                    className="svg-class"
                    />
                    <p>Prime Talk SL 2024, 46440 Almussafes, Valencia</p>
                </div>
            </div>
            <div className='flex flex-col gap-8 lg:flex-col'>
                <div className='flex flex-col lg:flex-row lg:gap-20 gap-2 whitespace-nowrap'>
                    <a>Política de privacidad</a>
                    <a>Términos y Condiciones</a>
                    <a>Aviso Legal</a>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-verde1 font-semibold'>atención al cliente</p>
                    <a href='tel:+34640056369'>+34 640 056 369</a>
                    <p>primetalksl@gmail.com</p>
                </div>

            </div>
            <div className='flex flex-col md:flex-row md:items-center gap-2 lg:hidden'>
            <ReactSVG
                src={copyright}
                beforeInjection={(svg) => {
                    svg.setAttribute('style', 'width: 1em; height: 1em; fill: currentColor');
                }}
                className="svg-class"
                />
                <p>Prime Talk SL 2024, 46440 Almussafes, Valencia</p>
            </div>
        </div>
    </section>
    
</>)
}

export default Home