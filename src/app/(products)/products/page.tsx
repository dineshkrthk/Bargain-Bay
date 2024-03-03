"use client";
import { supabase } from "@/lib/SupabaseClient";
import React, { useEffect, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const Card = ({ item }: any) => {
  return (
    <div className="group my-10 flex w-full max-w-sm flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href={"products/" + item.id}
      >
        <img
          className="peer absolute top-0 right-0 h-full w-full object-cover"
          src={item.image}
          alt="product image"
        />
        {/* <img
          className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product image"
        /> */}
        {/* <div className="absolute  bottom-0 mb-4 flex space-x-4 w-full justify-center">
          <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
          <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
          <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
        </div> */}
        {/* <svg
          className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
          />
        </svg> */}
        {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span> */}
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">
            {item.product_name}
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl flex items-center font-bold text-slate-900">
              &#8377; {item.product_price}
            </span>
          </p>
        </div>
        <a
          href="#"
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          See Product
        </a>
      </div>
    </div>
  );
};

const page = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [products, setProducts] = useState<any>(null);
  useEffect(() => {
    const getProducts = async () => {
      const { data, error } = await supabase.from("products").select();
      console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <div className="lg:mx-20 mx-5    py-10  ">
      <div>
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold tracking-tight text-gray-900">
            Products
          </div>
        </div>
      </div>
      <Separator className="my-5 w-[95%] mx-auto" />

      <div className="flex  justify-start gap-x-10">
        <div className="w-1/3">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="">Sort</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-5">
                <div className="flex items-center gap-x-4">
                  <Checkbox />
                  Most Recent
                </div>
                <div className="flex items-center gap-x-4">
                  <Checkbox />
                  Least Recent
                </div>
                <div className="flex items-center gap-x-4">
                  <Checkbox />
                  Low to High
                </div>
                <div className="flex items-center gap-x-4">
                  <Checkbox />
                  High to Low
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" className="mt-5" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="">Category</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-5">
                <div className="flex items-center gap-x-4">
                  <Checkbox />
                  Electronics
                </div>
                <div className="flex items-center gap-x-4">
                  <Checkbox />
                  Automobile
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="grid grid-flow-row w-full  lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {products?.map((item: any, index: any) => {
            return <Card item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
