import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="min-w-fit">
        <Header />
        <Component {...pageProps} />
        <Footer />
       </div>
    </ThemeProvider>
  );
}
