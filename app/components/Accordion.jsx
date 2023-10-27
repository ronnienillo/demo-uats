"use client"

import React, { useState } from 'react';
import Image from "next/image";
import { BsChevronDown } from 'react-icons/bs';

const Accordion = ({id, title, summary}) => {

    const [openAccordionId, setOpenAccordionId] = useState(1);

    const toggleAccordion = (id) => {
        if (openAccordionId === id) {
            setOpenAccordionId(null);
        } else {
            setOpenAccordionId(id);
        }
    };
    return (

        <>
            <li key={id} className="p-[12px] sm:p-[20px] flex items-start border-b border-neutral-500 sm:border-neutral-300">
                <Image src="chat_alt.svg" width="36" height="36" alt="icon" className="hidden sm:block shrink-0" />
                <div className="sm:px-[10px] w-full">
                    <div className="flex align-items-center justify-between cursor-pointer sm:cursor-default" onClick={() => toggleAccordion(id)}>
                        <h3 className="text-[#181D2F] text-base font-semibold sm:mb-[10px] truncate mt-[3px]">{title}</h3>
                        <button className="pl-3 shrink-0 sm:hidden"><BsChevronDown size={20} className={`transition-all ease-in-out origin-center ${openAccordionId === id ? '-rotate-180' : ''}`} /></button>
                    </div>
                    <div className={`relative overflow-hidden transition-all ease-in-out delay-150 duration-500 ${openAccordionId === id ? 'max-h-[800px] sm:max-h-none' : 'max-h-0 sm:max-h-none'}`}>
                        <div className={`transition-all ease-in-out delay-200 duration-500 ${openAccordionId === id ? 'opacity-100 translate-y-0 py-2 sm:py-0' : 'opacity-0 translate-y-8 sm:translate-y-0 sm:opacity-100'}`}>
                            <p className="text-[#626262] text-base font-normal">{summary}</p>
                        </div>
                    </div>
                </div>
            </li>
        </>
        
    );
}
 
export default Accordion;