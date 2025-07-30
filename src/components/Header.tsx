import logoIntegra from "@/assets/logo-integra.png";

const Header = () => {
  return (
    <header className="bg-primary w-full py-6 sticky top-0 z-30 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <img 
            src={logoIntegra} 
            alt="Integra Bar & Restaurante" 
            className="h-12 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;