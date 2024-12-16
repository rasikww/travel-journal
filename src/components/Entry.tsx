import { FC } from "react";

export interface EntryProps {
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

const Entry: FC<EntryProps> = ({
    img,
    title,
    country,
    googleMapsLink,
    dates,
    text,
}) => {
    return (
        <div className="card">
            <img src={img.src} alt={img.alt} />
            <div className="content">
                <div className="location-bar">
                    <img
                        src="src/assets/img/location-marker.png"
                        alt="location marker"
                    />
                    <h5>{country.toUpperCase()}</h5>
                    <a href={googleMapsLink}>view on google maps</a>
                </div>
                <h2>{title}</h2>
                <h5>{dates}</h5>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Entry;
