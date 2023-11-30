import React from "react";

export default function Navbar(props: any) {
    return (
        <>
            <nav className="text-lg font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-emerald-800 text-stone-100 shadow sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0">
                        Sistema de Adoção de Animais
                </div>
                <div>
                <a href="/" className="text-lg no-underline hover:text-teal-300 ml-2 mr-2">
                        Home</a>
                    <a href="/animais" className="text-lg no-underline hover:text-teal-300 ml-2">
                        Animais</a>
                </div>
            </nav>
        </>
    );
}