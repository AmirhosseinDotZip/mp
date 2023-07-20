import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <span className='mb-10 text-8xl'>⛔</span>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <button className='btn btn-outline mt-10'>
                <Link href="/">Go Home</Link>
            </button>
        </div>
    )
}