// "use client";
import { supabase } from "@/lib/SupabaseClient";
// import React, { useEffect, useState } from "react";
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

async function getData(){
   const { data, error } = await supabase.from("products").select();
   
   return data
}
const page = async() => {
  // const [products, setProducts] = useState<any>(null);
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const { data, error } = await supabase.from("products").select();
  //     setProducts(data);
  //   };
  //   getProducts();
  // }, []);
  const products = await getData();
 

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

          <Accordion type="single" className="mt-5" collapsible >
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
