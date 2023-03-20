import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import IFrame from '@/components/IFrame'

const title = 'Analytics';

export default function Analytics() {
	return (
		<>
			<Head>
				<title>WasteWise • {title}</title>
				<meta name="description" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<NavBar />
			<Header title={title} />
			<IFrame />
		</>
    )
}