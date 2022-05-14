import { useRef, useState } from "react";
import Title from "../components/text/Title";
import SubTitle from "../components/text/SubTitle";
import download from 'downloadjs';

export default function Index()
{
    const URL = useRef(null);
    const [info, setInfo] = useState("Please enter URL");

    const DownloadVideo = async () =>
    {
        const id = URL.current.value.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/);
        if (!id) { return setInfo("Invalid URL") }

        setInfo("Fetching...")
        fetch(`/api/youtube/${id[1]}`, { method: "GET" }).then(res => res.blob()).then(blob =>
        {
            setInfo("Downloading...");
            download(blob, `ntools-video-${id[1]}.mp4`, "video/mp4");
            setInfo("Please enter URL");
        });
    }

    return (
        <>
            <section className="flex flex-col w-fit">
                <Title text="Youtube Video Downloader" />
                <SubTitle text={info} />
                <br />
                <div className="flex flex-col">
                    <input
                        ref={URL}
                        className="bg-main-500 text-main-100 placeholder-main-400 text-lg rounded-lg pr-1 pl-2 focus:outline-none border border-main-800"
                        type="text"
                        placeholder="YouTube URL"
                    />
                    <button
                        className="bg-main-500 text-main-100 rounded-lg px-2 mt-1 w-fit text-lg focus:outline-none border border-main-800"
                        onClick={DownloadVideo}
                    >
                        Download
                    </button>
                </div>
            </section>
        </>
    )
}