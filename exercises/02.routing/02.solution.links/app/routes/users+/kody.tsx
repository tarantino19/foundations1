import { Link } from '@remix-run/react'

export default function KodyProfileRoute() {
	return (
		<div className="container mb-48 mt-36 border-4 border-green-500">
			<h1 className="text-h1">Kody</h1>
			<Link to="notes" className="underline">
				Notes
			</Link>
		</div>
	)
}
