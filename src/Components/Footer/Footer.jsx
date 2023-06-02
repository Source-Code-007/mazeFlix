import bgOne from '../../assets/img/blBGOne.jpg'
import bgTwo from '../../assets/img/blBGTwo.jpg'
import bgThree from '../../assets/img/blBGThree.jpg'
import logo from '../../assets/img/logoOne.png'

const Footer = () => {
    return (
        <footer className='bg-cover bg-center' style={{backgroundImage: `url(${bgTwo})`}}>
            <div className="footer p-10 py-20 text-white">
                <div className='flex flex-col justify-center items-center text-center w-full'>
                    <img src={logo} className='h-14 w-14' />
                    <p>Maze Flix.<br />Providing entertainment since 1992</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center w-full'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='flex flex-col justify-center items-center text-center w-full'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='flex flex-col justify-center items-center text-center w-full'>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <p></p>
        </footer>
    );
};

export default Footer;