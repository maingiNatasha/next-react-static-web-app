import { Nunito } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/navigation/Navbar";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
	title: "Next App Practice",
	description: "Blog App for the purpose of learning Next",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={nunito.className}>
				<div className="flex flex-col justify-between w-[80%] m-auto h-screen">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
