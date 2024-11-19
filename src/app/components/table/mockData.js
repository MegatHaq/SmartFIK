export const tableItems = [
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: 250 },
  { invoice: "INV002", status: "Paid", method: "PayPal", amount: 150 },
  {
    invoice: "INV003",
    status: "Pending",
    method: "Bank Transfer",
    amount: 450,
  },
  { invoice: "INV004", status: "Unpaid", method: "PayPal", amount: 225 },
  { invoice: "INV005", status: "Paid", method: "Credit Card", amount: 175 },
  { invoice: "INV006", status: "Paid", method: "Bank Transfer", amount: 110 },
  {
    invoice: "INV007",
    status: "Pending",
    method: "Bank Transfer",
    amount: 900,
  },
  {
    invoice: "INV008",
    status: "Pending",
    method: "Bank Transfer",
    amount: 120,
  },
  {
    invoice: "INV009",
    status: "Paid",
    method: "Credit Card",
    amount: 240,
  },
  {
    invoice: "INV010",
    status: "Unpaid",
    method: "Bank Transfer",
    amount: 330,
  },

  //TBA paginations
];

export const pieData = [
  { background: "bg-gray-900", data: "425", title: "Number of students" },
  { background: "bg-gray-900", data: "245", title: "Number of employee" },
  { background: "bg-gray-900", data: "508", title: "Number of tutors" },
  { background: "bg-gray-900", data: "232,468", title: "Total revenue" },
];

export const chartData = [
  { student: "malays", students: 275, fill: "var(--color-malays)" },
  { student: "chinese", students: 200, fill: "var(--color-chinese)" },
  { student: "indians", students: 287, fill: "var(--color-indians)" },
  { student: "ibans", students: 173, fill: "var(--color-ibans)" },
  { student: "others", students: 190, fill: "var(--color-others)" },
];

export const chartConfig = {
  students: {
    label: "Students",
  },
  malays: {
    label: "Malays",
    color: "hsl(var(--chart-1))",
  },
  chinese: {
    label: "Chinese",
    color: "hsl(var(--chart-2))",
  },
  indians: {
    label: "Indians",
    color: "hsl(var(--chart-3))",
  },
  ibans: {
    label: "Ibans",
    color: "hsl(var(--chart-4))",
  },
  others: {
    label: "Others",
    color: "hsl(var(--chart-5))",
  },
};

export const chartDataBar = [
  { month: "January", students: 186, tutors: 80 },
  { month: "February", students: 305, tutors: 200 },
  { month: "March", students: 237, tutors: 120 },
  { month: "April", students: 73, tutors: 190 },
  { month: "May", students: 209, tutors: 130 },
  { month: "June", students: 214, tutors: 140 },
];

export const charBartConfig = {
  student: {
    label: "Students",
    color: "#2563eb",
  },
  tutor: {
    label: "Tutors",
    color: "#60a5fa",
  },
};
