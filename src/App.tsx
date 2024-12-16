import "./App.css";
import Entry from "./components/Entry";
import Header from "./components/Header";
import { FC } from "react";
import imgFuji from "../src/assets/img/mount-fuji.jpg";
import imgOperaHouse from "../src/assets/img/opera-house.jpg";
import imgNineArchBridge from "../src/assets/img/nine-arch-bridge.jpg";

const App: FC = () => {
    return (
        <div className="App">
            <Header />
            <Entry
                img={{ src: imgFuji, alt: "mount-fuji" }}
                title="Mount Fuji"
                country="Japan"
                googleMapsLink="https://maps.app.goo.gl/gBfkfUHFu2DQPnL3A"
                dates="10th Dec. 2023 - 20th Dec. 2023"
                text="Mount Fuji is Japan's tallest mountain, 
                standing at 3,776 meters, and is an iconic symbol of the country. 
                Known for its symmetrical cone shape, it is both a cultural landmark and 
                a popular destination for climbers and tourists. Mount Fuji is also
                 a UNESCO World Heritage Site due to its cultural significance and 
                 inspiration in art and literature."
            />
            <Entry
                img={{
                    src: imgOperaHouse,
                    alt: "opera house",
                }}
                title="Sydney Opera House"
                country="Australia"
                googleMapsLink="https://maps.app.goo.gl/tmyMnC6yDLN1yd1w6"
                dates="10th Dec. 2022 - 20th Dec. 2022"
                text="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, 
                it is often regarded as one of the world's most famous and distinctive buildings."
            />
            <Entry
                img={{ src: imgNineArchBridge, alt: "nine arch bridge" }}
                title="Nine Arch Bridge"
                country="Sri Lanka"
                googleMapsLink="https://maps.app.goo.gl/5WC3qduYTyBd2GGN9"
                dates="10th Dec. 2021 - 20th Dec. 2021"
                text="The Nine Arch Bridge, also known as the 'Bridge in the Sky,' 
                is a remarkable feat of engineering in Sri Lanka. 
                Built during the British colonial period, it is renowned for its 
                architectural beauty and is surrounded by lush green tea plantations. 
                This bridge is entirely made of stone and brick, without the use of steel, 
                showcasing the ingenuity of its builders. It is a popular tourist attraction, 
                offering breathtaking views and a glimpse into Sri Lanka's rich history."
            />
        </div>
    );
};

export default App;
