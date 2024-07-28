import { Inter } from "next/font/google";
import "./globals.css";
import LayoutTwo from "../../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shubham Shinde - Portfolio",
  description: "Create By Shubham Shinde",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <LayoutTwo/>
        </div>
        {children}
      </body>
    </html>
  );
}
