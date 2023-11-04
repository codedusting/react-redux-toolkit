import Container from "../containers/Wrapper";

export default function Footer() {
	return (
		<footer className="mt-auto bg-cyan-100 py-4">
			<Container>
				<a href="/" className="font-sans text-lg font-bold">
					Crash Redux Toolkit
				</a>
			</Container>
		</footer>
	);
}
