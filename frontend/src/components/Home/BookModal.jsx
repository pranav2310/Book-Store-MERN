import { AiOutlineClose } from "react-icons/ai"
import { PiBookOpenTextLight } from "react-icons/pi"
import { BiUserCircle } from "react-icons/bi"

const BookModal = ({ book, onClose }) => {
    return (
        <div className="fixed bg-black bg-opacity-60 left-0 right-0 bottom-0 top-0 z-50 flex justify-center items-center" onClick={onClose}>
            <div
                onClick={(event) => event.stopPropagation()}
                className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
            >
                <AiOutlineClose
                    className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                    onClick={onClose}
                />
                <h2 className='absolute px-4 py-1 bg-red-300 rounded-lg'>
                    {book.publishYear}
                </h2>
                <h4 className='my-2 text-gray-500'>{book._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.author}</h2>
                </div>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio commodi enim magni veritatis, cupiditate iure laborum. Dolore explicabo inventore maiores ex ab, quae, fuga mollitia perferendis officia ad consequuntur quaerat, exercitationem in alias nostrum tempora iure sequi voluptatibus architecto. Amet recusandae tempora nostrum voluptates quo, dolores hic commodi qui pariatur?</p>
            </div>
        </div>
    )
}

export default BookModal