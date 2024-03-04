import React from "react";
import { supabase } from "@/lib/SupabaseClient";

async function getProduct(productid: string) {
  const { data, error } = await supabase
    .from("products")
    .select()
    .eq("id", productid);
  return data;
}

const Display = (item: any) => {
  console.log(item);
  const formattedText = item.response.description
    .split("\n")
    .map((line: any, index: number) => (
      <div key={index}>
        {line}
        <br />
      </div>
    ));

  return (
    <div>
      <div className="lg:mx-20 mx-5   py-10 flex justify-center gap-x-10">
        <img src={item.response.image} alt="image not loading" />

        <div>
          <h1 className="text-2xl font-semibold mb-4">
            {item.response.product_name}
          </h1>
          <h2 className="text-lg font-medium mb-1 ">Description</h2>
          <h2> {formattedText}</h2>
        </div>
      </div>
    </div>
  );
};

const page = async ({ params }: { params: { productid: string } }) => {
  const response = await getProduct(params.productid);

  return <div>{response ? <Display response={response[0]} /> : null}</div>;
};

export default page;
