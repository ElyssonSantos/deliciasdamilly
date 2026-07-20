import { Star, Instagram, Quote } from "lucide-react";
import { Button } from "./ui/button";

const reviews = [
  {
    id: 1,
    name: "@myrellansilva",
    content: "Os doces são maravilhosos! Muito capricho e o sabor é inesquecível. Super recomendo para qualquer ocasião.",
    rating: 5,
  },
  {
    id: 2,
    name: "@julialeite__",
    content: "Ótima qualidade em todos os requisitos. Atendimento impecável e produtos perfeitos. Uma delícia!",
    rating: 5,
  },
  {
    id: 3,
    name: "claudiana.goes42",
    content: "Trabalho excelente, profissional exemplar. Os brigadeiros derretem na boca. Voltarei a comprar com certeza!",
    rating: 5,
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        
        {/* Header da Seção de Avaliações */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-foreground uppercase">
            Excelente
          </h2>
          <div className="flex justify-center items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground">
            Com base em <span className="font-semibold text-foreground">+500 avaliações</span>
          </p>
          <div className="flex justify-center pt-2">
            <Instagram className="w-8 h-8 text-primary opacity-80" />
          </div>
        </div>

        {/* Cards de Avaliações */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-card text-card-foreground p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-primary/10" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg uppercase">
                  {review.name.replace('@', '').substring(0, 2)}
                </div>
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{review.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Botão de Avaliar */}
        <div className="flex justify-center">
          <a 
            href="https://www.instagram.com/stories/highlights/18122581057498843/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="rounded-full px-8 gap-2 font-semibold shadow-lg hover:shadow-xl transition-all">
              <Instagram className="w-5 h-5" />
              VER MAIS AVALIAÇÕES NO INSTAGRAM
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
