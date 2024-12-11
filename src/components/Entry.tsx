export default function Entry() {
    return (
        <div className="card">
            <img src="src/assets/img/mount-fiji.jpg" alt="mount fuji" />
            <div className="content">
                <div className="location-bar">
                    <img
                        src="src/assets/img/location-marker.png"
                        alt="location marker"
                    />
                    <h5>Japan</h5>
                    <a href="https://maps.app.goo.gl/gBfkfUHFu2DQPnL3A">
                        view on google maps
                    </a>
                </div>
                <h2>Mount Fuji</h2>
                <h6>10th Dec. 2023 - 20th Dec. 2023</h6>
                <p>
                    Mount Fuji is Japan's tallest mountain, standing at 3,776
                    meters, and is an iconic symbol of the country. Known for
                    its symmetrical cone shape, it is both a cultural landmark
                    and a popular destination for climbers and tourists. Mount
                    Fuji is also a UNESCO World Heritage Site due to its
                    cultural significance and inspiration in art and literature.
                </p>
            </div>
        </div>
    );
}
