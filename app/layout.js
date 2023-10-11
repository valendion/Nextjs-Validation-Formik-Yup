import { Inter } from "next/font/google";
import Providers from "./providers";
import Navbar from "./components/Navbar";
import { Flex } from "@chakra-ui/react";
import { SWRProvider } from "./swr/swr-provider";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Selamat Datang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SWRProvider>
          <Providers>
            <Flex h={"100vh"} direction={"column"}>
              <Navbar />
              {children}
              <Footer />
            </Flex>
          </Providers>
        </SWRProvider>
      </body>
    </html>
  );
}
