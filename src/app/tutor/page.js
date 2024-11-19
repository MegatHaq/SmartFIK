"use client";

import { useState } from "react";
import { DataTable } from "../components/table/dataTable";
import { tableItems } from "../components/table/mockData";
import { columns } from "../components/table/adminColumns";

export default function () {
  const [data, setData] = useState(tableItems);

  return <DataTable data={data} columns={columns} />;
}
