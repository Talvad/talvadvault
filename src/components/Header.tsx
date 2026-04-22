import { Link } from "@tanstack/react-router";
import Logo from "./logo";

export default function Header() {
	return (
		<nav className="fixed top-0 w-full z-50 bg-secondary-variant/80 backdrop-blur-xl border-b border-outline/50">
			<div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
				<Logo />
				<div className="flex items-center gap-6">
					<Link
						to="/login"
						className="bg-secondary-main text-secondary-variant px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-secondary-main/90 transition-all active:scale-95"
					>
						Secure Login
					</Link>
				</div>
			</div>
		</nav>
	);
}
