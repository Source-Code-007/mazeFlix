import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import BookTicketModal from "./BookTicketModal";
import { getFromLS } from "../../Utilities/fakeDB";

const ShowSummary = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(null)
    const { image, name, summary, status } = show?.show || {}
    const updatedSummary = summary?.replace(/<\/?p>|<\/?b>/g, '') // refactor summary string

    // retrieve data from local storage
    const bookedTicketShow = getFromLS()
    const isBooked = bookedTicketShow?.some(bookedTicket => bookedTicket.showName === name);


    // find current show via params id
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
                        <p className="text-red-500">{status}</p>
                        <h2 className="font-bold text-3xl">{name}</h2>
                        <p className="!mb-8">{updatedSummary}</p>
                        {
                            isBooked ? <button className="my-btn !bg-red-300" disabled>Already booked</button> : <label htmlFor="my_modal_6" className={`my-btn  ${status === 'Running' ? '' : '!bg-opacity-10 pointer-events-none'}`}>Booking Ticket</label>
                        }
                       
                    </div>
                </div>
            }
            <BookTicketModal show={show}></BookTicketModal>
        </div>
    );
};

export default ShowSummary;