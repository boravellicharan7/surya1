import React, { Component } from "react";
import "./NavStyle.css";

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            displayedValue: ''
        };
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    handleClick = () => {
        this.setState({ displayedValue: this.state.inputValue });
    };

    render() {
        return (
            <>
                <header>
                    <div className="NavContainer1">
                        <div className="navbar ">
                            <div className="flex">
                                <img  src="src\assets\Black_Simple_Travel_Logo__2_-removebg-preview.png" alt="" width={80} />
                            </div>
                            <div className="flex-2">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src="src\assets\profilelogo.avif" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="NavContainerChild2">
                            <p>LEADER IN</p>
                            <span>SHIPPING & LOGISTICS</span>
                        </div>
                    </div>
                    <div className="NavContainer2">
                        <form action="" onSubmit={this.handleClick}>
                            <input type="text" placeholder="Enter the Location!" value={this.state.inputValue} onChange={this.handleChange} />
                            <button type="submit">Search...</button>
                        </form>
                    </div>
                </header>
            </>
        );
    }
}

export default Nav;
