export default function Header() {
	return (
		<nav className="fixed top-0 w-full z-50 bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/5">
			<div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
				<div className="text-xl font-extrabold tracking-tight text-white font-headline uppercase">
					TALVAD<span className="text-primary font-light">VAULT</span>
				</div>
				<div className="flex items-center gap-6">
					<button
						type="button"
						className="bg-white text-[#0F172A] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-all active:scale-95"
					>
						Secure Login
					</button>
				</div>
			</div>
		</nav>
	);
}
