import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import TakePicture from '@/components/TakePicture'

const title = 'Scan Waste';

export default function Scan() {
	return (
		<>
			<Head>
				<title>WasteWise • {title}</title>
				<meta name="description" content="Take a picture of what you want to dispose of." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<NavBar />
			<Header title={title} />
			<TakePicture />
		</>
    )
}