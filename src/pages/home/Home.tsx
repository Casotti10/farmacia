function Home() {
    return (
        <>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <div style={{
                        width: "80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <h2>Seja Bem Vindo!</h2>
                        <p>Fique a vontade na Farmacia UAI! </p>
                    </div>

                    <div style={{
                        width: "80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/8072/8072883.png"
                            alt="Imagem da Página Home"
                            width="400px"
                            style={{ marginLeft: "100px" }} // Ajuste o valor conforme necessário
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home