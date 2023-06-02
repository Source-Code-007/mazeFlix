import { storedInLS } from '../../Utilities/fakeDB';
import bg from '../../assets/img/bannerTwo.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import modalBg from '../../assets/img/blBGTwo.jpg'

const BookTicketModal = ({ show }) => {
    const { name, schedule } = show?.show || {} 

    const handleBookTicketFunc = (e) => {
        const form = e.target
        const showName = form.showName.value
        const showTime = form.showTime.value
        const showDay = form.showDay.value
        const showTicket = form.showTicket.value
        const showGrade = form.showGrade.value
        const bookTicket = { showName, showTime, showDay, showTicket, showGrade }
        storedInLS(bookTicket)
        toast.success('Successfully ticket booked!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    return (<div>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal bg-center bg-cover" style={{ backgroundImage: `url(${bg})` }}>
            <div className="modal-box max-w-5xl max-h-max p-0 !rounded-lg">
                <form onSubmit={handleBookTicketFunc} className="bg-cover bg-center p-16 space-y-10" style={{ backgroundImage: `url(${modalBg})` }}>
                    <div className='flex gap-3'>
                        <div className='form-control text-white flex-1'>
                            <label htmlFor="" className='font-bold'>Name</label>
                            <input type="text" defaultValue={name} name='showName' disabled className="input border-none input-error !bg-slate-500" />
                        </div>
                        <div className='form-control text-white flex-1 '>
                            <label htmlFor="" className='font-bold'>Time</label>
                            <input type="text" defaultValue={schedule?.time} name='showTime' disabled className="input border-none input-error !bg-slate-500" />
                        </div>
                        <div className='form-control text-white flex-1'>
                            <label htmlFor="" className='font-bold'>Day</label>
                            <input type="text" defaultValue={schedule?.days[0]} name='showDay' disabled className="input border-none input-error !bg-slate-500" />
                        </div>
                    </div>

                    <div className='flex gap3'>
                        <div className='form-control flex-1'>
                            <label className='text-white'>Select Ticket</label>
                            <select defaultValue={'demo'} name='showTicket' className="select select-error w-full max-w-xs" required>
                                <option disabled value={'demo'}>How many ticket do you need/</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                                <option value={4}>Four</option>
                            </select>
                        </div>
                        <div className='form-control flex-1'>
                            <label className='text-white'>Select grade</label>
                            <select defaultValue={'demo'} name='showGrade' className="select select-error w-full max-w-xs" required>
                                <option disabled value={'demo'}>Select your desire grade</option>
                                <option value='ac'>AC</option>
                                <option value='dc'>DC</option>
                                <option value='lower'>Lower class</option>
                            </select>
                        </div>
                    </div>

                    <button className='my-btn' type='submit'>Book Now</button>

                    {/* X */}
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="my-btn">Close!</label>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    </div>
    );


};

export default BookTicketModal;

        // <dialog id="my_modal_4" className="modal bg-center bg-cover" style={{ backgroundImage: `url(${bg})` }}>
        //     <form onSubmit={handleBookTicketFunc} method="dialog" className="modal-box w-11/12 max-w-5xl bg-cover bg-center p-16 space-y-10" style={{ backgroundImage: `url(${modalBg})` }}>
        //         <div className='flex gap-3'>
        //             <div className='form-control text-white flex-1'>
        //                 <label htmlFor="" className='font-bold'>Name</label>
        //                 <input type="text" defaultValue={name} name='showName' disabled className="input border-none input-error !bg-slate-500" />
        //             </div>
        //             <div className='form-control text-white flex-1 '>
        //                 <label htmlFor="" className='font-bold'>Time</label>
        //                 <input type="text" defaultValue={schedule?.time} name='showTime' disabled className="input border-none input-error !bg-slate-500" />
        //             </div>
        //             <div className='form-control text-white flex-1'>
        //                 <label htmlFor="" className='font-bold'>Day</label>
        //                 <input type="text" defaultValue={schedule?.days[0]} name='showDay' disabled className="input border-none input-error !bg-slate-500" />
        //             </div>
        //         </div>

        //         <div className='flex gap3'>
        //             <div className='form-control flex-1'>
        //                 <label className='text-white'>Select Ticket</label>
        //                 <select defaultValue={'demo'} name='showTicket' className="select select-error w-full max-w-xs">
        //                     <option disabled value={'demo'}>How many ticket do you need/</option>
        //                     <option value={1}>One</option>
        //                     <option value={2}>Two</option>
        //                     <option value={3}>Three</option>
        //                     <option value={4}>Four</option>
        //                 </select>
        //             </div>
        //             <div className='form-control flex-1'>
        //                 <label className='text-white'>Select grade</label>
        //                 <select defaultValue={'demo'} name='showGrade' className="select select-error w-full max-w-xs">
        //                     <option disabled value={'demo'}>Select your desire grade</option>
        //                     <option value='ac'>AC</option>
        //                     <option value='dc'>DC</option>
        //                     <option value='lower'>Lower class</option>
        //                 </select>
        //             </div>
        //         </div>

        //         <button className='my-btn' type='submit'>Book Now</button>

        //         {/* <div className="modal-action">
        //             <button className="my-btn">Close</button>
        //         </div> */}
        //     </form>
        //     <ToastContainer />
        // </dialog>