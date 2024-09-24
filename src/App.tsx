import { PageLayout } from "./layouts/PageLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

function App() {
	return (
		<Router>
			<PageLayout title="AVD Records">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/products" element={<Products />} />
				</Routes>
			</PageLayout>
		</Router>
	);
}

export default App;
