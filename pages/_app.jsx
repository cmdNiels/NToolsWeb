import "../styles/globals.css";
import Navbar from "../components/sections/Navbar";

export default function App({ Component, pageProps })
{
    return (
        <>
            <Navbar pages={[
                "youtube"
            ]} />
            <main className="px-4 text-main-100">
                <Component {...pageProps} />
            </main>
        </>
    )
}