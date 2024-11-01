import { Component } from "./chart";

export function Details() {
  return (
    <div className="flex gap-4">
      <div className="w-3/6 shadow-md">
        <Component />
      </div>
      <div className="bg-[blue] w-full">This where the table will be.</div>
    </div>
  );
}
