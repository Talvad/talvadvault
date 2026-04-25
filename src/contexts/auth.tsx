import { createContext, useContext, useEffect, useState } from "react";

type User = {
	email: string;
};

type AuthContextType = {
	user: User;
	isAuthenticated: boolean;
	isLoading: boolean;
	refetch: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const refetch = async () => {
		setIsLoading(true);
		try {
			// const response = await fetch("/api/user");
			// const data = await response.json();
			// setUser(data.user);
			setUser({ email: "[EMAIL_ADDRESS]" });
			// setIsAuthenticated(data.isAuthenticated);
			setIsAuthenticated(true);
		} catch (error) {
			console.error("Error fetching user:", error);
		} finally {
			setIsLoading(false);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		refetch();
	}, []);

	return (
		<AuthContext.Provider
			value={{ user: user!, isAuthenticated, isLoading, refetch }}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
