import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLanguage } from "react-icons/fa";

const FeaturedShows = () => {
    const [loading, setLoading] = useState(true)
    const [shows, setShows] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => {
                setShows(data)
                setLoading(false)
            })
    }, [])


    return (
        <div className="py-20">
            <div className="w-5/6 md:3/6 xl:w-2/6 mx-auto py-14 text-center">
                <h2 className="font-bold text-xl text-red-500">Featured</h2>
                <p className="font-semibold text-6xl text-slate-300"><span className="text-white font-bold text-7xl">Now</span> Showing</p>
            </div>
            {
                loading ? ' ' : <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {shows.map((show, ind) => {
                        const {name, id, image, language, genres} = show.show
                        return <SwiperSlide key={ind} className="mb-8 text-white">
                            <div className="card card-compact bg-transparent shadow-inner shadow-red-500">
                                <figure><img className="h-[400px] w-full " src={image.original} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{name}</h2>
                                    <p className="text-lg flex gap-2 items-center text-slate-400"> <FaLanguage className="text-slate-50"></FaLanguage>{language}</p>
                                   <p className="flex gap-2"> Genres: {genres.map((genre, ind)=> <span key={ind} className="text-slate-400">{genre}</span>)}</p>
                                    <div className="card-actions justify-end">
                                        <button className="my-btn" onClick={()=> navigate(`show/${id}`)}>Details</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>
            }

        </div>
    );
};

export default FeaturedShows;