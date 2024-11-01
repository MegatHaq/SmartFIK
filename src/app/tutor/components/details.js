import { Component } from "./chart";
import { Tables } from "./table";

export function Details({ tableHeaders, tableItems }) {
  return (
    <div className="flex gap-4">
      <div className="w-3/6">
        <Component />
      </div>
      <div className="w-full rounded-md shadow-md">
        <Tables tableHeaders={tableHeaders} tableItems={tableItems} />
      </div>
    </div>
  );
}
