import "./App.css";
import Entry from "./components/Entry";
import Header from "./components/Header";
import { FC } from "react";

interface AppProps {
    img: Image;
    title: string;
    country: string;
    googleMapsLink: string;
    dates: string;
    text: string;
}

interface Image {
    src: string;
    alt: string;
}

const App: FC<AppProps> = ({
    img,
    title,
    country,
    googleMapsLink,
    dates,
    text,
}) => {
    return (
        <>
            <Header />
            <Entry
                img={{
                    src: img.src,
                    alt: img.alt,
                }}
            />
            <Entry />
        </>
    );
};

export default App;
