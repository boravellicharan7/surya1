import { Component } from "react";
// import { Carousel } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";
import agriculture from "../../src/assets/Agriculture.png";
import fruits from "../assets/Fruits.png";
import pharma from "../assets/pharma.png";
import carParts from "../assets/car parts.png";
import granite from "../assets/Granite stones.png";
import plastics from "../assets/plastics and rubber.png";
import food from "../assets/tablefood.png";
import wood from "../assets/stackedwood.png";
import furniture from "../assets/tables and chairs.png";
import "./BodyStyle.css"

const cardData = [
    {
        id: 1,
        date: "19/02/2025",
        title: "EU Price Announcement - Trade from India & Pakistan to Europe",
        description: "EU Price Announcements, India, Pakistan, Europe",
    },
    {
        id: 2,
        date: "17/02/2025",
        title: "Price Announcement - Trade from Asia to Mediterranean (inc. West Med, East Med, Adriatic and...)",
        description: "Asia, East West Network",
    },
    {
        id: 3,
        date: "13/02/2025",
        title: "EU Price Announcement - Trade from India & Pakistan to Europe",
        description: "India, Pakistan, Europe",
    },
    {
        id: 4,
        date: "10/02/2025",
        title: "Trade Tariff Adjustment for South America Region",
        description: "South America, Brazil, Argentina",
    },
    {
        id: 5,
        date: "05/02/2025",
        title: "New Freight Rates for Middle East & Africa Routes",
        description: "Middle East, Africa, Global Trade",
    },
    {
        id: 6,
        date: "01/02/2025",
        title: "Cargo Price Update for North America",
        description: "North America, Canada, USA, Mexico",
    },
    {
        id: 7,
        date: "28/01/2025",
        title: "Shipping Rate Increase on Australia Routes",
        description: "Australia, Oceania, Global Markets",
    },
    {
        id: 8,
        date: "25/01/2025",
        title: "New Fuel Surcharge for Asia-Pacific Shipments",
        description: "Asia-Pacific, Logistics, Fuel",
    },
    {
        id: 9,
        date: "22/01/2025",
        title: "Rate Adjustment for European Shipping Lanes",
        description: "Europe, Shipping, Freight",
    },
    {
        id: 10,
        date: "20/01/2025",
        title: "Important Update: Trade Policy Changes for African Routes",
        description: "Africa, Trade Regulations, Import & Export",
    }
];

const itemsPerPage = 3;

class Body extends Component {
    constructor() {
        super();
        this.state = {
            backgroundImage: "../../src/assets/ship.jpg",
            currentPage: 1,
            slides: [
                [
                    { img: agriculture, title: "Agriculture", description: "Premium quality organic crops and produce." },
                    { img: fruits, title: "Fruits", description: "Fresh fruits sourced from the best farms." },
                    { img: pharma, title: "Pharmaceuticals", description: "Medicines and healthcare products." },
                ],
                [
                    { img: carParts, title: "Car Parts", description: "High-quality automotive parts and accessories." },
                    { img: granite, title: "Granite Stones", description: "Durable and elegant granite for construction." },
                    { img: plastics, title: "Plastics & Rubber", description: "Industrial-grade plastic and rubber products." },
                ],
                [
                    { img: food, title: "Food", description: "Delicious, fresh, and organic food items." },
                    { img: wood, title: "Wood Logs", description: "High-quality timber and wooden products." },
                    { img: furniture, title: "Furniture", description: "Modern and stylish furniture collections." },
                ],
            ],
        };
    }

    handleMouseEnter = (image) => {
        this.setState({ backgroundImage: image });
    };

    handleMouseLeave = () => {
        this.setState({ backgroundImage: "../../src/assets/ship.jpg" });
    };

    getTotalPages = () => {
        return Math.ceil(cardData.length / itemsPerPage);
    };

    getCurrentCards = () => {
        const { currentPage } = this.state;
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return cardData.slice(indexOfFirstItem, indexOfLastItem);
    };

    nextPage = () => {
        if (this.state.currentPage < this.getTotalPages()) {
            this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));
        }
    };

    prevPage = () => {
        if (this.state.currentPage > 1) {
            this.setState((prevState) => ({ currentPage: prevState.currentPage - 1 }));
        }
    };

    componentDidMount() {
        // Bootstrap Carousel Initialization
        const carousel = document.querySelector("#carouselExample");
        new window.bootstrap.Carousel(carousel, { interval: 3000, ride: "carousel" });
    }

    render() {
        const { currentPage } = this.state;
        const totalPages = this.getTotalPages();
        const currentCards = this.getCurrentCards();
        return (
            <>
                <main>
                    <div className="BodyContainer1">
                        <h1>Our Solutions</h1>
                        <div className="BodyContainer1Child1"></div>
                        <div className="BodyContainer1Child2">
                            <p>As well as being a global leader in container shipping, our worldwide teams of industry specific experts mean we can offer our customers round-the-clock personalised service. This ensures we deliver fast and reliable transit times, and that we provide the best solutions for your needs.</p>
                        </div>
                    </div>
                    <div className="BodyContainer2" style={{ backgroundImage: `url(${this.state.backgroundImage})` }}>
                        <div className="BodyContainer2Child" onMouseEnter={() => this.handleMouseEnter("../../src/assets/ship.jpg")} onMouseLeave={this.handleMouseLeave}>
                            <img src="src\assets\Ship_logo-removebg-preview.png" width={200} alt="" />
                            <h2>Shipping Solution</h2>
                        </div>
                        <div className="BodyContainer2Child" onMouseEnter={() => this.handleMouseEnter("../../src/assets/Track.webp")} onMouseLeave={this.handleMouseLeave}>
                            <img src="src\assets\Inland_logo-removebg-preview.png" width={200} alt="" />
                            <h2>Inland Transportation & Logistics Solutions</h2>
                        </div>
                        <div className="BodyContainer2Child" onMouseEnter={() => this.handleMouseEnter("../../src/assets/Air.webp")} onMouseLeave={this.handleMouseLeave}>
                            <img src="src\assets\Air_logo-removebg-preview.png" width={200} alt="" />
                            <h2>Air Cargo Solution</h2>
                        </div>
                        <div className="BodyContainer2Child" onMouseEnter={() => this.handleMouseEnter("../../src/assets/digital.jpg")} onMouseLeave={this.handleMouseLeave}>
                            <img src="src\assets\Digital_logo-removebg-preview.png" width={200} alt="" />
                            <h2>Digital Business Solutions</h2>
                        </div>
                        <div className="BodyContainer2Child" onMouseEnter={() => this.handleMouseEnter("../../src/assets/cargo.jpg")} onMouseLeave={this.handleMouseLeave}>
                            <img src="src\assets\cargo_logo-removebg-preview.png" width={200} alt="" />
                            <h2>Cargo Cover Solutions</h2>
                        </div>
                    </div>
                    <div className="BodyContainer3">
                        <button>See all solutions</button>
                    </div>
                    <div className="BodyContainer4">
                        <div id="carouselExampleDark" className="carousel carousel" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
                                </button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2">
                                </button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <div className="card lg:card-side bg-base-100 shadow-xl">
                                        <figure>
                                            <img
                                                src="src\assets\ShipContainer.jpg"
                                                alt="Album" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">Independence Day</h2>
                                            <p>Ship with MSC Standalone Network and enjoy extensive network coverage, customized solutions and reliable transit times.</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Learn More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="10000">
                                    <div className="card lg:card-side bg-base-100 shadow-xl">
                                        <figure>
                                            <img
                                                src="src\assets\ShipContainer.jpg"
                                                alt="Album" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">Independence Day</h2>
                                            <p>Ship with MSC Standalone Network and enjoy extensive network coverage, customized solutions and reliable transit times.</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Learn More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="visually-hidden">Next</span>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                    <div className="BodyContainer5">
                        <h1>Your Shipping Needs Met</h1>
                        <div className="BodyContainer5Child1"></div>
                        <div className="BodyContainer5Child2">
                            <p>At MSC we pride ourselves on being a global container shipping company that delivers tailored solutions designed to meet the specific needs of each of our customers. Regardless of your cargo type, or final destination, we offer versatile solutions that cover air, land, and sea.</p>
                        </div>
                        <div className="BodyContainer5Child3">
                            <p>Thanks to the extensive capacity of our container fleet, MSC is the trusted transportation partner and shipping company for numerous companies the world over. Combining this with our global port coverage and extensive equipment availability means, we are able to deliver a professional, efficient shipping service, tailored to the specific needs of your business.</p>
                        </div>
                    </div>
                    <div className="BodyContainer6">
                        <div className="container my-5 text-center">
                            <div className="position-relative">
                                <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        {this.state.slides.map((group, index) => (
                                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                                <div className="container">
                                                    <div className="row justify-content-center g-4">
                                                        {group.map((item, idx) => (
                                                            <div key={idx} className="col-md-4">
                                                                <div className="card shadow-lg border-0 rounded-lg">
                                                                    <figure className="p-4">
                                                                        <img src={item.img} alt={item.title} width={300} className="rounded img-fluid" />
                                                                    </figure>
                                                                    <div className="card-body text-center">
                                                                        <h5 className="card-title fw-bold">{item.title}</h5>
                                                                        <p className="text-muted">{item.description}</p>
                                                                        <button className="btn btn-primary">Explore</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center gap-3 mt-3">
                                    <button className="btn px-4" data-bs-target="#carouselExample" data-bs-slide="prev">
                                         Previous
                                    </button>
                                    <button className="btn px-4" data-bs-target="#carouselExample" data-bs-slide="next">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="BodyContainer7">
                        <h1>Moving the World, Together.</h1>
                        <div className="BodyContainer7Child1"></div>
                        <div className="BodyContainer7Child2">
                            <p>Our global shipping network is developed for our customers. By focusing on delivering best-in-class service to our customers, we are always available to help you with your particular needs and offer you a one-stop-shop solution for your next shipping request.</p>
                            <button><link rel="stylesheet" to="" />Read more about Oceans</button>
                        </div>
                        <div className="BodyContainer7Child3">
                            {/* <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-figure text-base">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="inline-block h-8 w-8 stroke-current">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="stat-title">Total Likes</div>
                                    <div className="stat-value text-base">25.6K</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="inline-block h-8 w-8 stroke-current">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                    </div>
                                    <div className="stat-title">Page Views</div>
                                    <div className="stat-value text-secondary">2.6M</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <div className="avatar">
                                        </div>
                                    </div>
                                    <div className="stat-value">86%</div>
                                    <div className="stat-title">Tasks done</div>
                                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="BodyContainer8">
                        <h1>Customer Advisories</h1>
                        <div className="BodyContainer8Child1"></div>
                        <div className="BodyContainer8Child2">
                            <div className="flex flex-col items-center">
                                {/* Card Display */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {currentCards.map((card) => (
                                        <div key={card.id} className="card bg-base-100 w-70 shadow-xl">
                                            <div className="card-body">
                                                <h3 className="card-title">{card.date}</h3>
                                                <h5>{card.title}</h5>
                                                <p>{card.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Pagination Controls */}
                                <div className="join mt-4">
                                    <button onClick={this.prevPage} disabled={currentPage === 1} className="join-item btn">
                                        «
                                    </button>
                                    <button className="join-item btn">Page {currentPage}</button>
                                    <button onClick={this.nextPage} disabled={currentPage === totalPages} className="join-item btn">
                                        »
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default Body