function LandingPage() {
    return (
        <>
            <div className="bg-[#1A1A2E] min-h-screen flex items-center justify-center py-16">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4">
                    
                    {/* Coluna da Esquerda: Imagem */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="/ImgFisioterapia.png" 
                            alt="Ilustração de Fisioterapia"
                            className="max-w-full h-auto rounded-lg w-3/4 shadow-lg" 
                        />
                    </div>

                    <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left text-white">
                        <h1 className="text-center text-5xl md:text-3xl font-bold mb-6">
                            Servimos com tecnologia a quem dedica a vida ao bem-estar do outro.
                        </h1>
                        <div className="flex justify-center space-x-4">
                            <button className="w-42 py-3 bg-[#8B5CF6] text-white font-semibold rounded-lg shadow-md hover:bg-[#7C3AED] transition duration-300 cursor-pointer">
                                Login
                            </button>
                            <button className="w-42 py-3 bg-[#34D399] text-white font-semibold rounded-lg shadow-md hover:bg-[#10B981] transition duration-300 cursor-pointer">
                                Cadastro
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
