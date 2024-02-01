"use client";

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "@gjworks/components/accordion/Accordion";

const Page = () => {
  return (
    <div className="mx-auto max-w-screen-md px-3 md:px-16">
      <Accordion>
        {[...Array(3)].map((_, i) => (
          <AccordionItem key={i}>
            <AccordionHeader classname="bg-white text-black hover:bg-gray-100 text-sm py-2 px-3 border-b border-gray-200 cursor-pointer">
              Accordion
            </AccordionHeader>
            <AccordionPanel classname="text-gray-600 text-sm py-3 px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod
              explicabo, nam sapiente id nostrum ex, ab numquam, doloremque
              aspernatur quisquam illo! Officiis explicabo laborum incidunt
              corrupti provident esse eligendi.
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Page;
