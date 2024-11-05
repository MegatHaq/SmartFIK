import { Roboto } from "next/font/google";
import "./globals.css";

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "SmartFIK",
  description: "Testing shadcn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
