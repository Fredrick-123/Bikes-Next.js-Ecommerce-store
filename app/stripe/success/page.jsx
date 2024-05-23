import Link from 'next/link';

const SuccessPage = () => {
  return (
     <section className='py-72'>
      <div className=' container mx-auto'>
        <h3 className='text-center mb-4'>Your payment was successful! Thank you!</h3>
        <Link href='/'>
          <button className='btn btn-accent mx-auto'>Back to home</button>
        </Link>
      </div>

     </section>
  )
}

export default SuccessPage