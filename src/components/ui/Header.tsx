import Container from "../containers/Wrapper";
import CardCount from "./CardCount";

export default function Header() {
	return (
		<header className="bg-red-100 py-4 shadow-sm">
			<Container className="flex items-center justify-between">
				<a href="/" className="font-sans text-xl font-bold">
					Crash Redux Toolkit
				</a>
				<CardCount />
			</Container>
		</header>
	);
}
