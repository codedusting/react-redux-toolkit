import Container from "./components/containers/Wrapper";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import Products from "./components/Products";
import CartItems from "./components/CartItems";

export default function App() {
	return (
		<>
			<Header />
			<main className="flex-1 ">
				<Container className="flex items-start justify-between gap-4 divide-x">
					<aside className="hidden h-full w-3/6 bg-blue-100 py-4 pr-4 md:block">
						<h2 className="font-sans text-2xl font-bold">Cart Items</h2>
						<section className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2">
							<CartItems />
						</section>
					</aside>
					<section className="h-full w-3/6 bg-yellow-100 px-4 py-4">
						<h1 className="font-sans text-2xl font-bold">Product Listing</h1>
						<section className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2">
							<Products />
						</section>
					</section>
				</Container>
			</main>
			<Footer />
		</>
	);
}
