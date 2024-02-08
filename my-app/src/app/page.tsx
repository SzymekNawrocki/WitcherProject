import Image from 'next/image'

export default function Home() {
	return (
		<div className='min-h-screen relative'>
			<Image
				src='/geralt.jpg'
				alt='Wiedźmin background'
				layout='fill'
				objectFit='cover'
				objectPosition='center' // Add this line
				className='absolute z-0 shadow-xl'
			/>
			<div className='bg-black bg-opacity-50 absolute z-10 top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center'>
				<div className='w-full max-w-2xl mx-auto'>
					<h1 className='text-5xl font-bold text-white mb-6'>Witaj wiedźminie!</h1>
					<p className='text-white mb-8'>
						Zatrzymaj się na chwilę i zanim zaczniesz swoją podróż, przygotuj się na nadchodzące wyzwania.
					</p>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
						Wejdź do środka
					</button>
				</div>
			</div>
		</div>
	)
}
