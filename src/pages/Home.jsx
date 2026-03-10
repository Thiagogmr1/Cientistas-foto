import { useState, useRef } from 'react'

function Home() {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [showLens, setShowLens] = useState(false)
    const imgRef = useRef(null)
    
    const handleMouseMove = (e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect()
    
        const x = e.clientX - left
        const y = e.clientY - top
    
        setPosition({ x, y })
    }

    return (
        <main>
            <div
                style={{ position: "relative" }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setShowLens(true)}
                onMouseLeave={() => setShowLens(false)}
            >
                <img ref={imgRef} src="/cientistas.jpg" alt="Cientistas" />

                {showLens && (
                    <div
                        style={{
                            position: "absolute",
                            left: position.x - 75,
                            top: position.y - 75,
                            width: "150px",
                            height: "150px",
                            borderRadius: "50%",
                            border: "2px solid black",
                            pointerEvents: "none",
                            backgroundImage: "url(/cientistas-color.jpg)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "1000%",
                            backgroundPosition: imgRef.current
                                ? `${(position.x / imgRef.current.offsetWidth) * 100}% 
                                ${(position.y / imgRef.current.offsetHeight) * 100}%`
                                : "center"
                        }}
                    />
                )}
            </div>
        </main>
    )
}
export default Home