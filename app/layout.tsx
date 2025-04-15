import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Furniro - Modern Furniture Store",
  description: "Discover our collection of modern furniture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <a href="#">logo</a>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>People</li>
            <li>Magnifier</li>
            <li>Heart</li>
            <li>Cart</li>
          </ul>
        </nav>
        {children}
        <footer>
          <div>
            <div>
              <h5>Furino</h5>
              <address>400 University Drive Suite 200 Coral Gables,
                FL 33134 USA</address>
            </div>
            <div>
              <div>Links</div>
              <div>
                <ul>
                  <li>Home</li>
                  <li>Shop</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div>
              <div>Help</div>
              <div>
                <ul>
                  <li>Payment Options</li>
                  <li>Returns</li>
                  <li>Privacy Policies</li>
                </ul>
              </div>
            </div>
            <div>
              <div>Newsletter</div>
              <div>
                Email and Subscribe
              </div>
            </div>
          </div>
          <p>2023 furino. All right reserved</p>
        </footer>
      </body>
    </html>
  );
}
