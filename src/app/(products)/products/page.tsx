import { supabase } from "@/lib/SupabaseClient";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import AISearch from "@/components/Molecules/AISearch";

const Card = ({ item }: any) => {
  return (
    <a
      href={"products/" + item.id}
      className="mx-auto mt-11  transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
    >
      <img
        className="h-48 w-full object-cover object-center"
        src={item.image}
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg line-clamp-1 font-medium dark:text-white text-gray-900">
          {item.product_name}
        </h2>
        <p className="mb-2 line-clamp-1 text-base dark:text-gray-300 text-gray-700">
          {item.description}
        </p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
            &#8377; {item.product_price}
          </p>
        </div>
      </div>
    </a>
  );
};

const Robot = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      data-name="025_SCIENCE"
      id="_025_SCIENCE"
      width={20}
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style></style>
        </defs>
        <path
          className="cls-1"
          d="M9,15a1,1,0,0,1-1-1V12a1,1,0,0,1,2,0v2A1,1,0,0,1,9,15Z"
        ></path>
        <path
          className="cls-1"
          d="M15,15a1,1,0,0,1-1-1V12a1,1,0,0,1,2,0v2A1,1,0,0,1,15,15Z"
        ></path>
        <path
          className="cls-1"
          d="M6,8a1,1,0,0,1-.71-.29l-3-3A1,1,0,0,1,3.71,3.29l3,3a1,1,0,0,1,0,1.42A1,1,0,0,1,6,8Z"
        ></path>
        <path
          className="cls-1"
          d="M18,8a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l3-3a1,1,0,1,1,1.42,1.42l-3,3A1,1,0,0,1,18,8Z"
        ></path>
        <path
          className="cls-1"
          d="M21,20H3a1,1,0,0,1-1-1V14.5a10,10,0,0,1,20,0V19A1,1,0,0,1,21,20ZM4,18H20V14.5a8,8,0,0,0-16,0Z"
        ></path>
      </g>
    </svg>
  );
};

async function getData() {
  const { data, error } = await supabase.from("products").select();

  return data;
}
export const dynamic = "force-dynamic";
const page = async () => {
  const products = await getData();

  return (
    <div className="lg:mx-20 mx-5 py-10">
      <div>
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold tracking-tight text-gray-900">
            Products
          </div>
          <div>
            <AISearch products={products}>
              <span className="flex gap-x-2 items-center w-fit px-4 py-1 border rounded-md">
                <span className="text-sm"> Compare with </span>
                <Robot />
              </span>
            </AISearch>
          </div>
        </div>
      </div>
      <Separator className="my-5 w-[95%] mx-auto" />

      <div className="lg:flex  block justify-start gap-x-10">
        <div className="lg:w-1/3 w-full">
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

        <div className="grid grid-flow-row w-full gap-x-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {products?.map((item: any, index: any) => {
            return <Card item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
