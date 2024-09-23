import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type PageLayoutProps = {
	children: React.ReactNode;
	title: string;
};

export const PageLayout = ({ children, title }: PageLayoutProps) => {
	return (
		<>
			<div className="min-h-screen flex flex-col">
				<Header title={title} />
				<main className="flex-grow">
					<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
						<div className="px-4 py-6 sm:px-0">{children}</div>
					</div>
				</main>
				<Footer />
			</div>
		</>
	);
};
