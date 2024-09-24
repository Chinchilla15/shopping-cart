import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCartShopping,
	faRecordVinyl,
	faSun,
} from "@fortawesome/free-solid-svg-icons";

type HeaderProps = {
	title: string;
};

const Header = ({ title }: HeaderProps) => {
	return (
		<header className="max-w-full py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center bg-blueSecondary">
			<h1 className="text-3xl font-bold font-custom2 text-gray-900">
				<Link to="/" className="hover:text-gray-900 pr-1">
					{title}
				</Link>
				<FontAwesomeIcon icon={faRecordVinyl} size="lg" />
			</h1>
			<nav>
				<ul className="flex space-x-4">
					<li>
						<Link
							to="/"
							className="text-gray-700 hover:text-gray-900"
							title="Home"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/products"
							className="text-gray-700 hover:text-gray-900"
							title="Products"
						>
							Products
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className="text-gray-700 hover:text-gray-900"
							title="About"
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
					<li>
						<button className="bg-transparent text-gray-700 hover:text-gray-900">
							<FontAwesomeIcon
								icon={faSun}
								size="xl"
								title="Toggle Theme"
							/>
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
