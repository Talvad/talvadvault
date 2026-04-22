import { createFileRoute } from "@tanstack/react-router";
import {
	BadgeCheck,
	ChartNoAxesCombined,
	Landmark,
	MoveRight,
	Play,
	ShieldUser,
	TrendingUp,
	Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main>
			{/* <!-- Redesigned Hero Section (Single Column, Centered) --> */}
			<section className="relative pt-40 pb-20 min-h-screen flex items-center overflow-hidden">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<div className="space-y-10 relative z-10">
						<div className="inline-flex items-center gap-3 bg-surface-variant border border-outline/30 px-4 py-1.5 rounded-full mx-auto">
							<span className="w-1.5 h-1.5 rounded-full bg-primary-main shadow-[0_0_8px_rgba(184,134,11,1)]"></span>
							<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-main/60">
								Institutional Grade Security
							</span>
						</div>
						<h1 className="text-6xl md:text-8xl font-black font-headline leading-[0.9] tracking-tight text-secondary-main">
							Secure your <br />
							<span className="liquid-gold">Legacy.</span>
						</h1>
						<p className="text-xl text-secondary-main/60 leading-relaxed max-w-xl mx-auto font-medium">
							Liquidity meets heritage. Access immediate capital backed by your
							physical bullion assets.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
							<button
								type="button"
								className="btn-gold text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider text-xs w-full sm:w-auto"
							>
								Start Application
							</button>
							<button
								type="button"
								className="flex items-center gap-3 text-secondary-main font-bold text-xs uppercase tracking-widest group"
							>
								<span className="w-10 h-10 rounded-full border border-outline flex items-center justify-center group-hover:bg-surface-variant transition-colors">
									<Play className="size-5" />
								</span>
								Process Overview
							</button>
						</div>
					</div>
					<div className="relative mt-24 max-w-2xl mx-auto">
						<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-primary-main/ 5 rounded-full blur-[100px]"></div>
						<div className="relative group">
							<div className="absolute inset-0 bg-primary-main/ 20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all opacity-30"></div>
							<img
								alt="Luxury gold bars"
								className="relative rounded-[2.5rem] w-full aspect-[16/10] object-cover gold-glow border-8 border-white"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuB80QOInr4HFnDTL_OWE_DtdmbIrhHwf9iXL-yjDzHf-0O68A6kr7iQxSrPXqeb765wn0iVK2TY3zj11IIduNnwpAa5SzWp0NdmdKFPKRzKZasLPNEB0t9zvcZ5V78Sqv0-Ae48dmo4KLPwfRME1Tod7jHcGCdjkSCT3lUav_7Lw3F98xV9YXSY23j768p4iLEZnES6oejX0HmowCQ6z2B7EtNFhFZLkiwX6-h1lirFBs1khqhZvrMGMgJnH4FutZ3brmKY9-93lBg"
							/>
							<div className="glass-card absolute -bottom-6 left-1/2 -translate-x-1/2 p-6 rounded-3xl shadow-2xl border border-white/50 w-[80%] max-w-xs">
								<div className="flex items-center justify-center gap-5 mb-4">
									<div className="w-10 h-10 rounded-xl bg-primary-main/ 10 flex items-center justify-center text-primary-main shrink-0">
										<BadgeCheck className="size-5 font-bold" />
									</div>
									<div className="text-left">
										<p className="text-[9px] font-black text-secondary-main/40 uppercase tracking-widest">
											Available LTV
										</p>
										<p className="text-xl font-black text-secondary-main tracking-tight">
											Up to 75%
										</p>
									</div>
								</div>
								<div className="h-1.5 w-full bg-secondary-main/5 rounded-full overflow-hidden">
									<div className="h-full btn-gold w-3/4"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Markets & Widget Section --> */}
			<section className="py-24 bg-surface-variant/50">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
						<div>
							<p className="text-primary-main font-black tracking-[0.3em] uppercase text-[10px] mb-4">
								Global Markets
							</p>
							<h2 className="text-4xl font-extrabold font-headline text-secondary-main tracking-tight">
								Real-Time Evaluation
							</h2>
						</div>
						<div className="glass-card px-5 py-2.5 rounded-full flex items-center gap-4 text-xs font-bold border border-outline/50">
							<span className="text-secondary-main/40 uppercase tracking-widest">
								Market Status
							</span>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
								<span className="uppercase tracking-widest">Live Trading</span>
							</div>
						</div>
					</div>
					<div className="grid lg:grid-cols-3 gap-6">
						{/* <!-- Modern Rate Card --> */}
						<div className="bg-secondary-main p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
							<div className="absolute top-0 right-0 w-64 h-64 bg-primary-main/ 10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
							<div className="relative z-10 h-full flex flex-col justify-between">
								<div className="flex justify-between items-start">
									<ChartNoAxesCombined className="size-9 text-primary-light" />
									<span className="text-[10px] font-black px-4 py-1.5 border border-white/20 rounded-full uppercase tracking-widest">
										XAU/USD
									</span>
								</div>
								<div className="mt-12">
									<p className="text-white/40 text-[10px] mb-2 uppercase font-black tracking-[0.2em]">
										Current Spot / Gram
									</p>
									<h3 className="text-6xl font-black font-headline mb-4 tracking-tighter">
										$78.42
									</h3>
									<div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-bold">
										<TrendingUp className="size-3.5" />
										<span>+1.24% Today</span>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Calculator Widget --> */}
						<div className="lg:col-span-2 glass-card p-1 rounded-[2.5rem] shadow-xl">
							<div className="bg-white/80 rounded-[2.4rem] p-10 flex flex-col md:flex-row gap-12">
								<div className="flex-1 space-y-10">
									<div className="space-y-6">
										<div className="flex justify-between items-end">
											<div className="text-[10px] font-black uppercase text-secondary-main/40 tracking-[0.2em]">
												Bullion Weight
											</div>
											<span className="text-xl font-bold text-secondary-main">
												250g
											</span>
										</div>
										<div className="relative pt-2">
											<input
												className="w-full h-1 bg-secondary-main/10 rounded-full appearance-none cursor-pointer accent-primary"
												max="1000"
												min="10"
												type="range"
												value="250"
											/>
											<div className="flex justify-between mt-3 text-[9px] font-black text-secondary-main/30 uppercase tracking-widest">
												<span>10g</span>
												<span>500g</span>
												<span>1kg</span>
											</div>
										</div>
									</div>
									<div className="space-y-6">
										<div className="block text-[10px] font-black uppercase text-secondary-main/40 tracking-[0.2em]">
											Tenure Horizon
										</div>
										<div className="grid grid-cols-4 gap-4">
											<button
												type="button"
												className="py-4 rounded-2xl bg-secondary-main text-white font-bold text-xs uppercase tracking-widest"
											>
												06m
											</button>
											<button
												type="button"
												className="py-4 rounded-2xl border border-outline hover:border-secondary-main transition-colors font-bold text-xs uppercase tracking-widest"
											>
												12m
											</button>
											<button
												type="button"
												className="py-4 rounded-2xl border border-outline hover:border-secondary-main transition-colors font-bold text-xs uppercase tracking-widest"
											>
												24m
											</button>
											<button
												type="button"
												className="py-4 rounded-2xl border border-outline hover:border-secondary-main transition-colors font-bold text-xs uppercase tracking-widest"
											>
												36m
											</button>
										</div>
									</div>
								</div>
								<div className="w-px bg-outline hidden md:block"></div>
								<div className="flex-1 flex flex-col justify-center">
									<p className="text-[10px] font-black text-secondary-main/40 uppercase tracking-[0.2em] mb-3">
										Est. Liquidity Amount
									</p>
									<h4 className="text-5xl font-black text-secondary-main tracking-tighter mb-8">
										$14,703.75
									</h4>
									<div className="space-y-4 mb-10 border-t border-outline pt-8">
										<div className="flex justify-between text-xs font-bold">
											<span className="text-secondary-main/60">
												Annual Interest Rate
											</span>
											<span className="text-primary">8.9% Fixed</span>
										</div>
										<div className="flex justify-between text-xs font-bold">
											<span className="text-secondary-main/60">
												Monthly Commitment
											</span>
											<span className="text-secondary-main">$612.65</span>
										</div>
									</div>
									<button
										type="button"
										className="w-full py-5 rounded-2xl bg-secondary-main text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-secondary-main/90 transition-colors"
									>
										Initiate Disbursement
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Value Pillars - Bento Grid --> */}
			<section className="py-32 bg-surface">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center max-w-2xl mx-auto mb-20">
						<p className="text-primary-main font-black tracking-[0.4em] uppercase text-[10px] mb-4">
							The Sovereign Standard
						</p>
						<h2 className="text-5xl font-extrabold font-headline text-secondary-main tracking-tight">
							Premium asset management
						</h2>
					</div>
					<div className="grid md:grid-cols-12 gap-6">
						<div className="md:col-span-8 bg-surface-variant rounded-[3rem] p-12 flex flex-col justify-between group overflow-hidden relative border border-outline/50">
							<div className="absolute top-0 right-0 w-full h-full bg-linear-to-br from-primary-main/ 5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
							<div className="relative z-10">
								<div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-primary-main mb-10 border border-outline/30">
									<ShieldUser className="size-7.5" />
								</div>
								<h3 className="text-3xl font-black text-secondary-main mb-6 tracking-tight">
									Category-5 Vault Storage
								</h3>
								<p className="text-secondary-main/60 text-lg leading-relaxed max-w-lg font-medium">
									Assets are housed in high-security environments, fully
									underwritten by Lloyds of London with 24/7 tactical
									monitoring.
								</p>
							</div>
							<div className="relative z-10 flex flex-wrap gap-3 mt-12">
								<span className="px-4 py-1.5 rounded-full bg-white border border-outline text-[9px] font-black uppercase tracking-widest">
									ISO 27001
								</span>
								<span className="px-4 py-1.5 rounded-full bg-white border border-outline text-[9px] font-black uppercase tracking-widest">
									Biometric Access
								</span>
								<span className="px-4 py-1.5 rounded-full bg-white border border-outline text-[9px] font-black uppercase tracking-widest">
									Full Lloyd's Cover
								</span>
							</div>
						</div>
						<div className="md:col-span-4 btn-gold text-white rounded-[3rem] p-12 flex flex-col justify-between shadow-2xl">
							<div>
								<Zap className="text-4xl mb-10 opacity-80" />

								<h3 className="text-3xl font-black mb-6 tracking-tight">
									45-Minute Approval
								</h3>
								<p className="text-white/80 leading-relaxed font-medium">
									Efficient, streamlined processing for immediate liquidity
									requirements.
								</p>
							</div>
							<a
								className="flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.2em] group border-b border-white/20 pb-2 w-fit"
								href="/logisticsapi"
							>
								Logistics API
								<MoveRight className="group-hover:translate-x-1 transition-transform" />
							</a>
						</div>
						<div className="md:col-span-4 bg-white border border-outline rounded-[3rem] p-12 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow duration-500">
							<div>
								<Landmark className="text-4xl text-primary-main mb-10" />

								<h3 className="text-2xl font-black text-secondary-main mb-4 tracking-tight">
									Market Low Rates
								</h3>
								<p className="text-secondary-main/50 leading-relaxed font-medium">
									Custom lending suites starting from 0.74% per month, the elite
									benchmark.
								</p>
							</div>
						</div>
						<div className="md:col-span-8 bg-secondary-main text-white rounded-[3rem] p-12 flex items-center justify-between group overflow-hidden relative">
							<div className="relative z-10 max-w-md">
								<h3 className="text-2xl font-black mb-4 tracking-tight">
									Absolute Confidentiality
								</h3>
								<p className="text-white/50 font-medium">
									Zero credit bureau reporting. Private, discrete, and
									professional asset management with no intrusive history
									checks.
								</p>
							</div>
							<div className="hidden sm:flex items-center gap-3 relative z-10 opacity-50 group-hover:opacity-100 transition-opacity">
								<div className="w-10 h-10 rounded-full border border-white/20"></div>
								<div className="w-10 h-10 rounded-full border border-white/20"></div>
								<div className="w-10 h-10 rounded-full border border-white/20"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Partners --> */}
			<section className="py-20 bg-white border-y border-outline/30">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
					<div className="text-xs font-black font-headline tracking-[0.4em] uppercase">
						BULLION RESERVE
					</div>
					<div className="text-xs font-black font-headline tracking-[0.4em] uppercase">
						GLOBAL CUSTODY
					</div>
					<div className="text-xs font-black font-headline tracking-[0.4em] uppercase">
						ELITE SECURE
					</div>
					<div className="text-xs font-black font-headline tracking-[0.4em] uppercase">
						VAULT TRUST
					</div>
					<div className="text-xs font-black font-headline tracking-[0.4em] uppercase">
						LEGACY FIN
					</div>
				</div>
			</section>
		</main>
	);
}
