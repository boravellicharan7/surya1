import { Component } from "react";
import Nav from "./Nav"
import Body from "./Body"
import Footer from "./Footer";
class Home extends Component {
    render() {
        return (
            <>
                <Nav />
                <Body />
                <Footer />
            </>
        );
    }
};

export default Home;
