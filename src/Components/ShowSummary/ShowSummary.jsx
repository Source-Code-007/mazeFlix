import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import BookTicketModal from "./BookTicketModal";

const ShowSummary = () => {
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(null)
    const { image, name, summary } = show?.show || {}
    const updatedSummary = summary?.replace(/<\/?p>/g, '');
    const { id } = useParams()
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => {
                const currShow = data.find(show => show.show.id == id)
                setShow(currShow)
                setLoading(false)
            })
    }, [id])


    return (
        <div className="min-h-screen flex items-center justify-center">
            {
                loading ? <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                /> : <div className="w-3/6 shadow-inner shadow-red-500 text-white my-24 rounded-lg">
                    <img className="h-[400px] w-full rounded-t-lg" src={image.original} alt="" />
                    <div className="space-y-4 p-5">
                        <h2 className="font-bold text-3xl">{name}</h2>
                        <p>{updatedSummary}</p>
                        < button className="my-btn" onClick={() => window.my_modal_4.showModal()}>Booking Ticket</ button>
                    </div>
                </div>
            }
            <BookTicketModal></BookTicketModal>
        </div>
    );
};

export default ShowSummary;