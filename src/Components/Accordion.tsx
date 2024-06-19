import React, { useEffect, useRef, useState } from "react";

interface AccordionProps {
  valor: string; // or any other type you want to use
  explicacion: string; // or any other type you want to use
  type: 1 | 2;
}

const Accordion: React.FC<AccordionProps> = ({ valor, explicacion, type }) => {
  const [valores, setValores] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleValores = () => {
    console.log("wassup gang");
    setValores(!valores);
  };

 //--- para click fuera de dropDown n shi -------------------------------------------------
        const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setValores(false);
        }
        };

        useEffect(() => {
        if (valores) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        }, [valores]);
//---------------------------------------------------------------------------------------

  return (
    <>
      {type === 1 && (
        <div
          onClick={toggleValores} ref={dropdownRef}
          className="bg-verde1 w-full font-splinesans font-semibold rounded-bl-[1rem] md:rounded-bl-[1.5rem] border-2 border-gris text-gris px-2 py-1 lg:px-10 lg:py-3 "
        >
          <div className="py-2">
            <div className="flex w-full h-full justify-between items-center">
              <p className="">{valor}</p>
              {!valores ? (
                <span className=" text-3xl transition duration-700 ease-in-out">
                  <p>+</p>
                </span>
              ) : (
                <span className=" text-3xl transition duration-500 ease-in-out">
                  <p>-</p>
                </span>
              )}
            </div>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                valores
                  ? "grid-rows-[1fr] opacity-100 pt-6"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden mr-10 font-splinesans font-normal text-[18px]">
                {explicacion}
              </div>
            </div>
          </div>
        </div>
      )}

      {type === 2 && (
        <div
          onClick={toggleValores} ref={dropdownRef}
          className="bg-gris w-full font-splinesans font-semibold rounded-br-[1rem] md:rounded-br-[1.5rem] border-2 border-verde1 text-verde1 px-2 py-1 lg:px-10 lg:py-3 "
        >
          <div className="py-2">
            <div className="flex w-full h-full justify-between items-center">
              <p className="">{valor}</p>
              {!valores ? (
                <span className=" text-3xl transition duration-700 ease-in-out">
                  <p>+</p>
                </span>
              ) : (
                <span className=" text-3xl transition duration-500 ease-in-out">
                  <p>-</p>
                </span>
              )}
            </div>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                valores
                  ? "grid-rows-[1fr] opacity-100 pt-6"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden mr-10 font-splinesans font-normal text-[18px]">
                {explicacion}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Accordion;
