import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import SplashScreen from '@/components/SplashScreen'
import PreTakePicture from '@/components/PreTakePicture'

const title = 'WasteWise';

export default function Home() {
    return (
		<>
			<Head>
				<title>WasteWise</title>
				<meta name="description" content="WasteWise – Sort smarter, not harder." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<SplashScreen animationDelay={2500} />
			<NavBar />
			<Header title={title} />
			<PreTakePicture />
		</>
    )
}
