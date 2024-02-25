import Image from 'next/image';

export const Loading =  () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <Image 
                src="/logo.svg"
                alt='logo'
                width={120}
                height={120}
                // animate-pulse used for loading 
                className='animate-pulse duration-700'
            />
        </div>
    )
}