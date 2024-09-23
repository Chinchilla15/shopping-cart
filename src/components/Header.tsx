import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
type HeaderProps = {
	title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
	return (
		<header className="max-w-full py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
			<h1 className="text-3xl font-bold text-gray-900">
				<Link to="/" className=" hover:text-gray-900">
					{title}
				</Link>
			</h1>
			<nav>
				<ul className="flex space-x-4">
					<li>
						<Link
							to="/"
							className="text-gray-700 hover:text-gray-900"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/products"
							className="text-gray-700 hover:text-gray-900"
						>
							Products
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className="text-gray-700 hover:text-gray-900"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to="/cart"
							className="text-gray-700 hover:text-gray-900"
						>
							<FontAwesomeIcon
								icon={faCartShopping}
								size="xl"
								title="Shopping Cart"
							/>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
