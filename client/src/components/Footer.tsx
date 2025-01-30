import euLogo from "../assets/EN-Funded by the EU-WHITE.png"

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-gradient-to-t from-darkTeal to-darkGreen flex items-center py-6 mt-6">
            <div className="ml-11">
                <img className="max-w-52 h-auto mb-4" src={euLogo} alt="funded by EU"></img>

                <p className="text-white text-sm/4">European Commission for the Control of Foot-and-Mouth Disease</p>

                <a href="https://www.fao.org/eufmd/en/" className="text-white text-sm/4">fao.org/eufmd/</a>

                <p className="text-white text-xs mt-4">© 2025 | EuFMD</p>
            </div>
        </footer>
    );
}

export default Footer;