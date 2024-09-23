import React from "react";
type HeaderProps = {
	title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
	return (
		<header className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
			<h1 className="text-3xl font-bold text-gray-900">{title}</h1>
		</header>
	);
};

export default Header;
