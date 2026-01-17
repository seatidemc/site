export default function Footer() {
	return (
		<div className="bg-neutral-800 text-white py-5 px-10 text-center flex items-center gap-2">
			<p>
				<span className="text-neutral-400">&copy; 2018-2026</span> SEATiDE
			</p>
			<div className="flex-1" />
			<div className="flex items-center gap-2">
				<a href="https://github.com/seatidemc" className="underline text-neutral-400">
					GitHub
				</a>
			</div>
		</div>
	);
}
