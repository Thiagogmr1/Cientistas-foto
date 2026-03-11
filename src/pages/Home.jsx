import Navbar from "../NavBar/navbar"
import Lens from "../components/Lens"

function Home() {
    return (
        <div>
            <Navbar />
            <main style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Lens
                    bwImage="/cientistas-bw.jpg"
                    colorImage="/cientistas-color.jpg"
                    size={150}
                    zoom={3}
                />
            </main>
        </div>
    )
}

export default Home