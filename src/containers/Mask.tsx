import { CSSProperties, useMemo } from "react"

type Props = {
	mousePos: {x: number, y: number}
}

export function Mask({
	mousePos
}: Props) {
	
	
	const maskStyle: CSSProperties = useMemo(() => ({
		maskImage: `radial-gradient(200px at ${mousePos.x}px ${mousePos.y}px, black 0px, transparent 100%)`
	}), [mousePos])

	return (
		<>
			<div className='app-initial-container'></div>
			<div className="app-initial-mask" style={{...maskStyle}}></div>
		</>
	)
}
