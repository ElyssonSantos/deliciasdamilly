import { ChefHat, Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ChefHat className="h-6 w-6" aria-hidden="true" />
              <span className="text-lg font-bold">Delicias da Milly</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Feitos com amor e ingredientes premium para tornar seus
              momentos especiais ainda melhores.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+5519998108667"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                aria-label="Ligar para (79) 9946-3701"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>(79) 9946-3701</span>
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Aracaju, SE</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Siga-nos</h3>
            <a
              href="https://instagram.com/__deliciasdamilly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
              aria-label="Visitar perfil do Instagram"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              <span>@__deliciasdamilly</span>
            </a>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-medium text-primary-foreground">Horário de atendimento</p>
                  <p>Segunda a Sábado:</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>© 2025 Delicias da Milly. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
