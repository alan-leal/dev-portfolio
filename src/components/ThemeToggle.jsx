import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    // Empty dependency array to run only once on component mount
    }, []);

    // Function to toggle theme
    const toggleTheme = () => {
        // Check if dark mode is enabled
        if (isDarkMode) {
            // If dark mode is enabled, switch to light mode
            document.documentElement.classList.remove("dark");
            // Save theme preference when user reloads the page
            localStorage.setItem("theme", "light");
            // Update state to light mode (Sun icon)
            setIsDarkMode(false);
        // ELSE, if dark mode is not enabled
        } else {
            // Switch to dark mode
            document.documentElement.classList.add("dark");
            // Save theme preference when user reloads the page
            localStorage.setItem("theme", "dark");
            // Update state to dark mode (Moon icon)
            setIsDarkMode(true);
        }
    }


    return (
        <button 
            onClick={toggleTheme} 
            className = {cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
}