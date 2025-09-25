import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "___",
  description: "-_-_-_-",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` bg-black ${spaceGrotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
