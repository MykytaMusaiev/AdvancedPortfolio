import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            if (userPref) {
                let check = userPref === "dark" ? "dark" : "light";

                console.log(`check1: ${check}`);
                setMode(check);
                if (check === "dark") {
                    document.documentElement.classList.add("dark");
                    console.log(`added dark`);
                } else {
                    document.documentElement.classList.remove("dark");
                    console.log(`removed dark`);
                }
            } else {
                let check = mediaQuery.matches ? "dark" : "light";
                console.log(`check2: ${check}`);
                setMode(check);
                window.localStorage.setItem(
                    "theme",
                    check
                );

                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            }
        }

        handleChange();

        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    useEffect(() => {
        console.log(`mode: ${mode}`)
        if (mode === "dark") {
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark")
        }

        if (mode === "light") {
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark")
        }
    }, [mode])

    return [mode, setMode]
}

export default useThemeSwitcher