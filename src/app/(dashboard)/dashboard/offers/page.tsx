import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/lib/SupabaseClient";

const getOffers = async () => {
  const { data, error } = await supabase.from("offers").select();
  return data;
};

const page = async () => {
  const data = await getOffers();
  console.log(data);
  return (
    <div className="py-10  ">
      <div className=" pb-4">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Offers Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information displayed here are made by the buyer and only visible
          to you.
        </p>
        <hr className="mt-3 w-[100%]" />
      </div>
      <div className="w-full ">
        <Table className="w-full ">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Sender Name</TableHead>
              <TableHead>Sender Number</TableHead>
              <TableHead>Offered Price</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item: any, index: any) => {
              return (
                <TableRow key={index}>
                  <TableCell className="font-medium flex items-center gap-x-2">
                    <img
                      className="h-10 w-10"
                      src={item.product_image}
                      alt=""
                    />
                    {item.product_name}
                  </TableCell>
                  <TableCell>{item.sender_name}</TableCell>
                  <TableCell>{item.sender_number}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
