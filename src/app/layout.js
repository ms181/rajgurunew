import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Rajguru Distributors — Ubiquiti Networking Solutions",
  description:
    "Enterprise-grade Ubiquiti UniFi networking. Designed, deployed, and managed by Rajguru Distributors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
