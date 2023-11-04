import { useEffect, useState } from "react";
import { ProductProps } from "../types/products";
import Card from "./ui/Card";
import wretch from "wretch";

export default function Products() {
	const [products, setProducts] = useState<ProductProps[]>([]);
	useEffect(() => {
		wretch(`${import.meta.env.VITE_APP_MOCKAPI}/products`)
			.get()
			.notFound((error) => console.error(error.message))
			.unauthorized((error) => console.error(error.message))
			.error(418, (error) => console.error(error.message))
			.json((json) => {
				setProducts(json);
			})
			.catch((error) => console.error(error.message));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			{products.map((product) => (
				<Card key={product.id} product={product} />
			))}
		</>
	);
}
