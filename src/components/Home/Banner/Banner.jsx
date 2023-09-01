import "./Banner.scss";
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>Sales</h1>
                <p>Super value deals on all products</p>
            </div>
            <div className="ctas">
                <div className="banner-cta">Read More</div>
                <div className="banner-cta">Shop Now</div>
            </div>
        </div>
    </div>;
};

export default Banner;
