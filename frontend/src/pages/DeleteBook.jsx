import React,{useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'


const DeleteBook = () => {
  const [loading, setLoading] = useState('false');
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar()
  const handleDeleteBook = ()=>{
    setLoading(true);
    axios
      .delete(`http://book-store-mern-api-kappa.vercel.app/books/${id}`)
      .then(()=>{
        enqueueSnackbar('Book Deleted', {variant: 'success'});
        setLoading(false);
        navigate('/');
      })
      .catch((error)=>{
        setLoading(true);
        // alert('An Error Occured. Please check the console')
        enqueueSnackbar('Error', {variant:'error'})
        console.log(error);
      })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'> Are You Sure you want to delete this Book?</h3>

        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>Delete</button>
      </div>
    </div>
  )
}

export default DeleteBook
