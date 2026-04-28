import { Link } from "@tanstack/react-router";
import { LogOutIcon, User } from "lucide-react";
import Logo from "./logo";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Header({ loggedIn = false }: { loggedIn: boolean }) {
	return (
		<nav className="fixed top-0 w-full z-50 bg-secondary-variant/80 backdrop-blur-xl border-b border-outline/50">
			<div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
				<Logo />
				<div className="flex items-center gap-6">
					{loggedIn ? (
						<LoggedIn />
					) : (
						<Link
							to="/login"
							className="bg-secondary-main text-secondary-variant px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-secondary-main/90 transition-all active:scale-95"
						>
							Secure Login
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
}
const LoggedIn = () => {
	const handleLogout = () => {
		console.log("Logout");
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarFallback>
						<User />
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem className="p-0">
					<Link to="/dashboard" className="w-full p-2">
						Dashboard
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={handleLogout}>
					<LogOutIcon />
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
