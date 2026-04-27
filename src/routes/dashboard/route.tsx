import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { AppSidebar } from "@/components/app-sidebar";
import {
	Breadcrumb,
	BreadcrumbItem,
	// BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	// BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";

export const Route = createFileRoute("/dashboard")({
	beforeLoad: ({ context }) => {
		if (!context.user?.name) {
			throw redirect({ to: "/login" });
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { user } = Route.useRouteContext();
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger className="-ml-1" />
					<Separator
						orientation="vertical"
						className="mr-2 data-[orientation=vertical]:h-full"
					/>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem className="hidden md:block">
								{/* <BreadcrumbLink href="#">Build Your Application</BreadcrumbLink> */}
								<BreadcrumbPage>{user?.email}</BreadcrumbPage>
							</BreadcrumbItem>
							{/* <BreadcrumbSeparator className="hidden md:block" />
							<BreadcrumbItem>
								<BreadcrumbPage>Data Fetching</BreadcrumbPage>
							</BreadcrumbItem> */}
						</BreadcrumbList>
					</Breadcrumb>
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4">
					<Outlet />
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
