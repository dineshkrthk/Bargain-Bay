"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Cross, Person, Phone, Rupee } from "@/components/SVG";
import { supabase } from "@/lib/SupabaseClient";

interface OfferMakerProps {
  product_name: string;
  id: string;
  item: any;
}

const OfferMaker: React.FC<OfferMakerProps> = ({ product_name, id, item }) => {
  const [sender_name, setSender_Name] = useState<string>();
  const [sender_number, setSender_Number] = useState<string>();
  const [price, setPrice] = useState<string>();
  const [open, setOpen] = useState(false);
  const handleSubmit = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase.from("offers").insert({
      sender_id: user?.id,
      receiver_id: item?.response.user_id,
      sender_name: sender_name,
      sender_number: sender_number,
      price: price,
      product_name: item?.response.product_name,
      product_id: id,
      product_image: item?.response.image,
    });
    console.log(error);
  };

  return (
    <div>
      {" "}
      <Dialog >
        <DialogTrigger
          className="w-full bg-yellow-200 mt-4 py-2  font-medium text-xl"
        >
          Make Offer{" "}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="leading-relaxed">
              Want to make offer for <br /> {product_name}?
            </DialogTitle>

            <DialogDescription className="mt-10 w-[600px]">
              <div className="text-xs my-2 text-gray-700">
                Tell the price you want to offer the seller <br />
                The price will only be visible to the seller only
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="price"
                  className="mt-4 mb-1 uppercase  text-xs "
                >
                  Name
                </label>
                <div className="flex flex-row border-grey-lighter border">
                  <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3  ">
                    <Person />
                  </span>
                  <input
                    onChange={(e: any) => {
                      setSender_Name(e.target.value);
                    }}
                    type="text"
                    name="name"
                    className="bg-grey-lighter  py-2  rounded   focus:outline-none rounded-l-none "
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="price"
                  className="mt-4 mb-1 uppercase  text-xs "
                >
                  Contact
                </label>
                <div className="flex flex-row border-grey-lighter border">
                  <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3  ">
                    <Phone />
                  </span>
                  <input
                    onChange={(e: any) => {
                      setSender_Number(e.target.value);
                    }}
                    type="number"
                    name="price"
                    className="bg-grey-lighter  py-2  rounded   focus:outline-none rounded-l-none "
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="price"
                  className="mt-4 mb-1 uppercase  text-xs "
                >
                  Price
                </label>
                <div className="flex flex-row border-grey-lighter border">
                  <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3  ">
                    <Rupee />
                  </span>
                  <input
                    onChange={(e: any) => {
                      setPrice(e.target.value);
                    }}
                    type="number"
                    name="price"
                    className="bg-grey-lighter  py-2  rounded   focus:outline-none rounded-l-none "
                  />
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-yellow-200 mt-4 py-2  font-medium text-lg"
              >
                Submit Offer
              </button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OfferMaker;
