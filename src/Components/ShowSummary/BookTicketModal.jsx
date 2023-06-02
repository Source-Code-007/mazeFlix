import bg from '../../assets/img/bannerTwo.jpg'
import modalBg from '../../assets/img/blBGTwo.jpg'
const BookTicketModal = () => {
    return (
        <dialog id="my_modal_4" className="modal bg-center bg-cover" style={{backgroundImage: `url(${bg})`}}>
            <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-cover bg-center" style={{backgroundImage: `url(${modalBg})`}}>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Click the button below to close</p>
                <div className="modal-action">
                    {/* if there is a button, it will close the modal */}
                    <button className="my-btn">Close</button>
                </div>
            </form>
        </dialog>);
};

export default BookTicketModal;