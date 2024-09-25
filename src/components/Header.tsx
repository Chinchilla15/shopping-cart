import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCartShopping,
	faRecordVinyl,
	faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

type HeaderProps = {
	title: string;
};

const Header = ({ title }: HeaderProps) => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`sticky top-0 z-30 max-w-full py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center transition-colors duration-300 ${
				isScrolled
					? "bg-white text-bluePrimary"
					: "bg-bluePrimary text-bgWhite"
			}`}
		>
			<h1
				className={`text-3xl font-bold font-custom2 ${
					isScrolled
						? "text-bluePrimary hover:text-redSecondary"
						: "text-bgWhite hover:text-redSecondary"
				}`}
			>
				<Link to="/" className="hover:text-redSecondary">
					{title}
					<FontAwesomeIcon
						icon={faRecordVinyl}
						size="lg"
						className="pl-1"
					/>
				</Link>
			</h1>
			<nav>
				<ul className="flex space-x-4">
					{["Home", "Products", "About"].map((item) => (
						<li key={item}>
							<Link
								to={
									item === "Home"
										? "/"
										: `/${item.toLowerCase()}`
								}
								className={`${
									isScrolled
										? "text-bluePrimary"
										: "text-bgWhite"
								} hover:text-redSecondary`}
								title={item}
							>
								{item}
							</Link>
						</li>
					))}
					<li>
						<Link
							to="/cart"
							className={`${
								isScrolled ? "text-bluePrimary" : "text-bgWhite"
							} hover:text-redSecondary`}
						>
							<FontAwesomeIcon
								icon={faCartShopping}
								size="xl"
								title="Shopping Cart"
							/>
						</Link>
					</li>
					<li>
						<button
							className={`bg-transparent ${
								isScrolled ? "text-bluePrimary" : "text-bgWhite"
							} hover:text-redSecondary`}
						>
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
