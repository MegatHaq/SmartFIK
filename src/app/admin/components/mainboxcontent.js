import { CardDetails } from "./carddetails";

import { Details } from "./details";
import User from "./user";

export function MainBoxContent({
  title,
  position,
  name,
  data,
  icons,
  tableHeaders,
  tableItems,
}) {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col-2 w-full px-4 py-4 mt-0 justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <User position={position} name={name} />
      </div>
      <div className="px-4 w-full grid grid-cols-4 gap-4 mt-4">
        {data.map((data, key) => {
          const Icon = icons[key];
          return (
            <CardDetails
              Icon={Icon}
              background={data.background}
              data={data.data}
              title={data.title}
            />
          );
        })}
      </div>
      <div className="w-full px-4 mt-2">
        <Details tableHeaders={tableHeaders} tableItems={tableItems} />
      </div>
    </div>
  );
}
