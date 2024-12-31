import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "sonner";
import type { PageLayoutProps } from "../types";

export const PageLayout = ({ children, title }: PageLayoutProps) => {
	return (
		<>
			<div className="min-h-screen flex flex-col">
				<Header title={title} />
				<main className="flex-grow">{children}</main>
				<Footer />
			</div>
			<Toaster theme="system" richColors />
		</>
	);
};
