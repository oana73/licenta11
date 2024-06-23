import { Inter } from "next/font/google";
import "@uploadthing/react/styles.css";
import "../styles/main.scss";
import Providers from "@/context/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark"> 
      <body className={inter.className}>
        <Providers>
           {children}
        </Providers>   
      </body>
    </html>
  );
}
