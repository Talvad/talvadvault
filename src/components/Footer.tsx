export default function Footer() {
	return (
		<footer className="bg-black w-full py-16">
			<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
				<div className="text-xl font-black font-headline text-white tracking-tighter uppercase">
					TALVAD<span className="text-primary-main font-light">VAULT</span>
				</div>
				<div className="flex flex-wrap justify-center gap-10 font-bold text-[10px] uppercase tracking-[0.2em] text-white/40">
					<a
						className="hover:text-primary-light transition-colors"
						href="/privacy"
					>
						Privacy
					</a>
					<a
						className="hover:text-primary-light transition-colors"
						href="/terms"
					>
						Terms
					</a>
					<a
						className="hover:text-primary-light transition-colors"
						href="/security"
					>
						Security
					</a>
					<a
						className="hover:text-primary-light transition-colors"
						href="/concierge"
					>
						Concierge
					</a>
				</div>
				<div className="flex items-center gap-3">
					<div className="px-4 py-1.5 border border-white/5 rounded-lg text-[9px] text-white/40 font-black uppercase tracking-widest">
						FDIC MEMBER
					</div>
					<div className="px-4 py-1.5 border border-white/5 rounded-lg text-[9px] text-white/40 font-black uppercase tracking-widest">
						ISO 27001
					</div>
				</div>
			</div>
			<div className="max-w-7xl mx-auto px-6 mt-16 pt-10 border-t border-white/5 text-center md:text-left">
				<p className="text-white/20 text-[9px] font-medium uppercase tracking-[0.3em] leading-loose">
					© 2024 Sovereign Vault Finance. Member FDIC. ISO 27001 Certified. All
					rights reserved. <br />
					Physical assets are insured under specialized bullion insurance
					policies by Tier 1 underwriters.
				</p>
			</div>
		</footer>
	);
}
