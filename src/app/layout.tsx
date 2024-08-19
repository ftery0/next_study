import type { Metadata } from "next";
import Navgiton from "../Components/nav/index"
import "src/styles/global.css"
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <Navgiton />
  );
}
