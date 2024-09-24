import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "sonner";

type PageLayoutProps = {
	children: React.ReactNode;
	title: string;
};

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
