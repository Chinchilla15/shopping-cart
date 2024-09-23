import { PageLayout } from "./layouts/PageLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";

function App() {
	return (
		<Router>
			<PageLayout title="Shopping Cart">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</PageLayout>
		</Router>
	);
}

export default App;
