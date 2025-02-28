    import React, { Component } from "react";
    import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

    class Footer extends Component {
    render() {
        return (
        <footer className="bg-gray-100 py-8 px-4 text-gray-700">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Section */}
            <div>
                <h3 className="font-bold uppercase mb-3">Country-Location / Local Office</h3>
                <p>IN - MSC Mumbai</p>
                <p className="flex items-center mt-2">📞 +91 2266378000</p>
                <p className="flex items-center">✉️ ind-info@msc.com</p>
                <p className="mt-2">🏢 Office details</p>
            </div>
            
            {/* Business Section */}
            <div>
                <h3 className="font-bold uppercase mb-3">Doing Business Together</h3>
                <p>Solutions / Local Information / E-Business</p>
                <p>Sustainability / myMSC</p>
            </div>
            
            {/* About Section */}
            <div>
                <h3 className="font-bold uppercase mb-3">Get to Know Us</h3>
                <p>MSC Group / Newsroom / Events / Blog / Careers</p>
                <p>Contact us / Preference Center</p>
                <div className="flex space-x-4 mt-4 text-xl">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
                <FaYoutube />
                </div>
            </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="text-center mt-6 text-sm text-gray-500">
            <p>Headquarters: +41 227038888 - info@msc.com</p>
            <p>Chemin Rieu 12, 1208 Geneva - Switzerland</p>
            </div>
            
            {/* Legal Links */}
            <div className="text-center mt-4 text-xs text-gray-400">
            <p>Cookie Settings - Data Privacy - Personal Data Request - Terms of Use - Carrier's Terms & Conditions - EU Commitments - Code of Conduct - Certifications - Speak Up Line</p>
            </div>
        </footer>
        );
    }
    }

    export default Footer;
