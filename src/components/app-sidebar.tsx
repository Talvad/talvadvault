import { Link } from "@tanstack/react-router";
import * as React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "#/components/ui/sidebar";
import Logo from "./logo";

export const navMenuItems = [
	{ title: "Home", link: "/dashboard" },
	{ title: "Create", link: "/dashboard/create" },
	{ title: "Loans", link: "/dashboard/loans" },
	{ title: "Profiles", link: "/dashboard/profiles" },
];
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarHeader className="grid place-items-center border-b py-4.5">
				<Logo />
			</SidebarHeader>
			<SidebarContent>
				<SidebarMenu className="p-4">
					{navMenuItems.map((nav) => (
						<SidebarMenuItem key={nav.title}>
							<SidebarMenuButton asChild>
								<Link
									to={nav.link}
									className="inline-block px-2 py-1 rounded-lg w-full"
									activeProps={{
										className: "bg-primary-main/50 hover:bg-primary-main/50",
									}}
									inactiveProps={{
										className: "hover:bg-primary-main/50",
									}}
									activeOptions={{ exact: true }}
								>
									{nav.title}
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}
