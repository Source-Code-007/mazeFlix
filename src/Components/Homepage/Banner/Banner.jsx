import bannerOne from '../../../assets/img/bannerOne.jpg'
import bannerTwo from '../../../assets/img/bannerTwo.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-screen bg-center bg-cover flex items-center" style={{ backgroundImage: `url(${bannerOne})` }}>
                <div className='text-white px-20 space-y-4 md:h-4/6 xl:w-3/6 flex flex-col justify-center'>
                    <h2 className='font-bold text-7xl'>Welcome to mazeFlix</h2>
                    <p className='font-semibold text-3xl text-gray-300'>Unleash the Magic of Television</p>
                    <button className='my-btn w-fit'>Explore Show</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-screen bg-center bg-cover flex items-center" style={{ backgroundImage: `url(${bannerTwo})` }}>
                <div className='text-white px-20 space-y-4 md:h-4/6 xl:w-3/6 flex flex-col justify-center'>
                    <h2 className='font-bold text-7xl'>Embark on a Journey to Magical Realms</h2>
                    <p className='font-semibold text-3xl text-gray-300'>Your streaming services finally in one places</p>
                    <button className='my-btn w-fit'>Booking Ticket</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;