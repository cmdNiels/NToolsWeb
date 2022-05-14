import React from "react";
import Link from "next/link";

export default function NavbarButton({ text, href })
{
    return (
        <>
            <Link key={href} href={href}>
                <div className="hover:bg-main-700 px-3 py-2 rounded-md cursor-pointer">
                    {text}
                </div>
            </Link>
        </>
    );
}