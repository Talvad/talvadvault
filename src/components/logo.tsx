import { Link } from "@tanstack/react-router";

const Logo = () => {
	return (
		<Link
			to="/"
			className="text-xl font-extrabold tracking-tight text-secondary-mainfont-headline"
		>
			TALVAD<span className="text-primary-main font-light">VAULT</span>
		</Link>
	);
};

export default Logo;
