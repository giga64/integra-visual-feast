import logoIntegra from "@/assets/logo-integra.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <img 
              src={logoIntegra} 
              alt="Integra Bar & Restaurante" 
              className="h-12 w-auto mx-auto md:mx-0 mb-4 filter brightness-0 invert"
            />
            <p className="text-muted text-sm leading-relaxed">
              Gastropub contemporâneo com alma de comida afetiva brasileira. 
              Sabores únicos que despertam memórias.
            </p>
          </div>

          {/* Contato */}
          <div className="text-center">
            <h3 className="font-playfair text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-sm">
              <p>📞 (11) 9999-9999</p>
              <p>📧 contato@integrabar.com.br</p>
              <p>📲 WhatsApp: (11) 9999-9999</p>
            </div>
          </div>

          {/* Endereço e Horários */}
          <div className="text-center md:text-right">
            <h3 className="font-playfair text-lg font-semibold mb-4">Localização</h3>
            <div className="space-y-2 text-sm">
              <p>📍 Rua dos Sabores, 123</p>
              <p>Vila Gastronômica - São Paulo/SP</p>
              <p className="mt-4 font-medium">🕒 Horários</p>
              <p>Ter-Dom: 18h às 01h</p>
              <p>Segunda: Fechado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-8 pt-6 text-center">
          <p className="text-muted text-sm">
            © 2024 Integra Bar & Restaurante. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;