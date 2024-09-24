/* Toaster configuration example:
import { toast } from "sonner";
<button
	onClick={() =>
		toast.success("Article added", {
			closeButton: true,
			duration: 3000,
		})
	}
>
	Render Toast
</button>;
*/
const Products = () => {
	return (
		<>
			<h1 className="text-3xl font-bold text-gray-900">Products</h1>
			<p className="text-lg text-gray-700">
				Welcome to the products page!
			</p>
		</>
	);
};

export default Products;
