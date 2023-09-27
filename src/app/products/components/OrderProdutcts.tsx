import React from "react";

const OrderProducts = () => {
  const orderTypes = [
    {
      name: "Popularity",
      value: "Popularity",
    },
    {
      name: "Rating",
      value: "Rating",
    },
    {
      name: "Latest",
      value: "Latest",
    },
    {
      name: "Low Price",
      value: "LowPrice",
    },
    {
      name: "High Price",
      value: "HighPrice",
    },
    {
      name: "New",
      value: "New",
    },
  ];
  return (
    <select className="w-full rounded-lg border bg-white px-4 py-5 lg:w-auto">
      <option disabled>Sorted by</option>
      {orderTypes?.map((orderType) => (
        <option key={orderType.value} value={orderType.value}>
          Sorted by {orderType.name}
        </option>
      ))}
    </select>
  );
};

export default OrderProducts;
