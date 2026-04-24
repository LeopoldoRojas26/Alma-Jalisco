import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  Instagram, 
  Facebook, 
  Twitter, 
  Music, 
  UtensilsCrossed,
  GlassWater
} from 'lucide-react';
import ReservationModal from '@/components/ReservationModal';
import ContactForm from '@/components/ContactForm';
import cuceiLogo from '@/assets/images/cucei.svg';

const menuItems = [
  {
    category: "Platos Tradicionales",
    icon: <UtensilsCrossed className="w-6 h-6" />,
    items: [
      { name: "Carne en su jugo", description: "Receta tradicional tapatía, frijoles de la olla, tocino crujiente, cebolla y cilantro fresco.", price: "$240" },
      { name: "Torta Ahogada", description: "Birote salado artesanal, carnitas de cerdo, bañada en salsa de jitomate y chile de árbol.", price: "$160" },
      { name: "Pozole Rojo de Cerdo", description: "Grano de maíz cacahuazintle, carne de cerdo, rábanos, lechuga, orégano y tostadas.", price: "$210" },
      { name: "Birria Tatemada", description: "Exquisita carne de chivo horneada lentamente con adobo de chiles secos y especias.", price: "$260" },
      { name: "Chilaquiles Rojos o Verdes", description: "Totopos crujientes, crema, queso fresco, cebolla y arrachera asada o pollo.", price: "$190" },
    ]
  },
  {
    category: "Bebidas y Licores",
    icon: <GlassWater className="w-6 h-6" />,
    items: [
      { name: "Tequila Flight Artesanal", description: "Degustación de 3 tequilas seleccionados (Blanco, Reposado, Añejo) con sangrita casera.", price: "$350" },
      { name: "Cantarito Tradicional", description: "Tequila blanco, jugos de toronja, naranja, limón, refresco de toronja y pizca de sal.", price: "$180" },
      { name: "Agua de Jamaica con Guayaba", description: "Refrescante agua fresca natural de jamaica con un toque de guayaba.", price: "$65" },
      { name: "Capuchino de Olla", description: "Mezcla de café espresso con especias tradicionales de café de olla y leche espumada.", price: "$85" },
      { name: "Margarita de Agave", description: "Tequila reposado, jugo de limón fresco, miel de agave y escarchado de sal de gusano.", price: "$170" }
    ]
  }
];

const reviews = [
  {
    name: "Mauricio Olmedo",
    text: "Excelente servicio en especial del mesero Edgar, muy amable de lo mejor. Un ambiente muy cómodo para pasar en familia. La comida estuvo excepcional, la carne en su jugo de las mejores que he probado.",
    rating: 5,
    date: "Hace 2 semanas"
  },
  {
    name: "Violeta Martinez Gomez",
    text: "Me gusta mucho este restaurante, la comida es muy rica y el servicio es muy bueno por parte del mesero José. Me gusta la terraza y poder escuchar música de mariachi en vivo mientras ceno.",
    rating: 5,
    date: "Hace 1 mes"
  },
  {
    name: "Guadalupe M",
    text: "Me agradó bastante el lugar, es muy agradable la vista muy bonita el personal muy agradable y eficiente, nos atendió el señor José que es muy amable. La torta ahogada es un viaje directo a la tradición.",
    rating: 5,
    date: "Hace 3 meses"
  },
  {
    name: "Carlos R. V.",
    text: "La vista hacia la Catedral es inigualable. Sentarte al atardecer, pedir un buen tequila y escuchar las trompetas del mariachi no tiene precio. El pozole estuvo espectacular.",
    rating: 5,
    date: "Hace 1 semana"
  }
];

const galleryImages = [
  "/src/assets/images/gallery-1.png",
  "/src/assets/images/dish-carne.png",
  "/src/assets/images/gallery-2.png",
  "/src/assets/images/drink-tequila.png",
  "/src/assets/images/dish-torta.png",
  "/src/assets/images/gallery-3.png",
  "/src/assets/images/about.png",
  "/src/assets/images/gallery-4.png",
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const yAbout = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nosotros', href: '#nosotros' },
    { name: 'Menú', href: '#menu' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Reseñas', href: '#resenas' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden selection:bg-primary selection:text-primary-foreground text-foreground">
      
      {/* Navbar */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-background/95 backdrop-blur-md border-border py-4 shadow-sm' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className={`text-2xl md:text-3xl font-serif font-bold tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Alma Jalisco
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${isScrolled ? 'text-foreground hover:text-accent' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <Button 
            onClick={() => setIsReservationOpen(true)}
            className="bg-secondary hover:bg-secondary/90 text-white rounded-none px-6 py-5 font-serif tracking-widest text-sm"
          >
            RESERVAR MESA
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-primary">
        <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 z-10" />
          <img 
            src="/src/assets/images/hero.png" 
            alt="Guadalajara Cathedral View from Alma Jalisco" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-accent font-sans uppercase tracking-[0.3em] text-sm md:text-base mb-6 block drop-shadow-md">
              MERCADO CORONA • GUADALAJARA
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1] drop-shadow-xl"
          >
            Vive la esencia de <br className="hidden md:block"/> Jalisco en cada detalle.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button 
              onClick={() => setIsReservationOpen(true)}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary-foreground px-10 py-7 text-lg rounded-none font-serif tracking-widest mt-4"
            >
              VIVE LA EXPERIENCIA
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
        >
          <span className="text-white/70 text-xs uppercase tracking-widest mb-2 font-serif">Explorar</span>
          <div className="w-[1px] h-12 bg-white/30 overflow-hidden relative">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-full bg-white absolute top-0 left-0"
            />
          </div>
        </motion.div>
      </section>

      {/* Sobre Nosotros */}
      <section id="nosotros" className="py-24 md:py-32 relative bg-background overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:w-1/2 max-w-xl"
            >
              <motion.div variants={itemReveal} className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-accent" />
                <span className="text-accent uppercase tracking-widest text-sm font-semibold">Nuestra Historia</span>
              </motion.div>
              
              <motion.h2 variants={itemReveal} className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                Donde la tradición se sirve con vista a la ciudad.
              </motion.h2>
              
              <motion.div variants={itemReveal} className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                <p>
                  Ubicado en el quinto piso del histórico Mercado Corona, Alma Jalisco es más que un restaurante: es una celebración de nuestra identidad. Nacimos de la pasión por la gastronomía tapatía, buscando preservar las recetas que han pasado de generación en generación.
                </p>
                <p>
                  Aquí, el sonido de las trompetas y vihuelas del mariachi se mezcla con el aroma de la carne en su jugo y las tortillas recién hechas. Cada platillo es un homenaje a nuestra tierra, servido en un ambiente cálido y festivo, coronado por una vista panorámica inigualable de la majestuosa Catedral de Guadalajara.
                </p>
              </motion.div>
              
              <motion.div variants={itemReveal} className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                      <Star className="w-5 h-5 text-accent" fill="currentColor" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-accent mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4" fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">4.5 • 1,734+ Reseñas</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              style={{ y: yAbout }}
              className="lg:w-1/2 relative h-[600px] w-full"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-t-full" />
              <img 
                src="/src/assets/images/about.png" 
                alt="Mariachi at Alma Jalisco" 
                className="absolute inset-0 w-full h-full object-cover rounded-t-full border-8 border-background shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-background p-6 shadow-xl max-w-xs border border-border">
                <Music className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-serif text-xl text-primary mb-2">Mariachi en Vivo</h3>
                <p className="text-sm text-muted-foreground">Disfrute de la música tradicional que da alma a nuestras veladas tapatías.</p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Menú Section */}
      <section id="menu" className="py-24 md:py-32 bg-primary text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/images/gallery-2.png')] bg-repeat" style={{ backgroundSize: '200px' }} />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Nuestra Cocina</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Sabores que Cuentan Historias</h2>
            <p className="text-white/70 text-lg font-light">
              Ingredientes locales, recetas ancestrales y la pasión de nuestros cocineros, servidos a su mesa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
            {menuItems.map((category, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
              >
                <motion.div variants={itemReveal} className="flex items-center gap-4 mb-10 border-b border-white/20 pb-4">
                  <div className="text-accent">{category.icon}</div>
                  <h3 className="text-3xl font-serif">{category.category}</h3>
                </motion.div>
                
                <div className="space-y-8">
                  {category.items.map((item, itemIdx) => (
                    <motion.div 
                      variants={itemReveal} 
                      key={itemIdx}
                      className="group"
                    >
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-xl font-serif text-white group-hover:text-accent transition-colors">{item.name}</h4>
                        <div className="flex-1 border-b border-dashed border-white/20 mx-4" />
                        <span className="text-accent font-medium text-lg">{item.price}</span>
                      </div>
                      <p className="text-white/60 font-light text-sm leading-relaxed pr-12">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Button 
              onClick={() => setIsReservationOpen(true)}
              className="bg-transparent border border-accent text-accent hover:bg-accent hover:text-primary-foreground rounded-none px-8 py-6 font-serif tracking-widest"
            >
              RESERVAR AHORA
            </Button>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
          <span className="text-secondary uppercase tracking-widest text-sm font-semibold mb-4 block">Nuestra Casa</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Un Vistazo a Alma Jalisco</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-[1600px] mx-auto">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${idx === 0 || idx === 5 ? 'md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]' : 'h-[300px]'}`}
            >
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={src} 
                alt={`Alma Jalisco Gallery ${idx}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reseñas */}
      <section id="resenas" className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Testimonios</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Lo que Dicen Nuestros Invitados</h2>
              <p className="text-muted-foreground text-lg font-light">
                Con más de 1,700 reseñas y una calificación de 4.5 estrellas, nuestro mayor orgullo es la sonrisa de quienes nos visitan.
              </p>
            </div>
            <div className="flex items-center gap-2 text-primary font-serif text-2xl bg-white px-6 py-4 border border-border shadow-sm">
              <span className="text-4xl font-bold">4.5</span>
              <div className="flex flex-col">
                <div className="flex text-accent">
                  {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4" fill="currentColor" />)}
                  <Star className="w-4 h-4 text-accent/50" fill="currentColor" />
                </div>
                <span className="text-xs text-muted-foreground font-sans mt-1 uppercase tracking-wider">1,734 Opiniones</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="h-full rounded-none border-border bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex text-accent mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-muted-foreground font-light italic mb-6 flex-1 text-sm leading-relaxed">
                      "{review.text}"
                    </p>
                    <div className="mt-auto">
                      <h4 className="font-serif text-primary font-semibold text-lg">{review.name}</h4>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{review.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación & Contacto */}
      <section id="ubicacion" className="py-0 relative flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-primary text-white py-24 px-6 md:px-16 lg:px-24 flex flex-col justify-center">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Visítenos</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-12">Le Esperamos en el Centro de Todo</h2>
          
          <div className="space-y-10 max-w-md">
            <div className="flex gap-6">
              <MapPin className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h4 className="text-xl font-serif mb-2">Dirección</h4>
                <p className="text-white/70 font-light leading-relaxed">
                  Av. Miguel Hidalgo y Costilla 469,<br />
                  5to. piso, Zona Centro,<br />
                  44100 Guadalajara, Jal.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <Clock className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h4 className="text-xl font-serif mb-2">Horario</h4>
                <p className="text-white/70 font-light leading-relaxed">
                  Lunes a Domingo<br />
                  Abierto · Cierra a las 12:00 a.m.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <Phone className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h4 className="text-xl font-serif mb-2">Teléfono</h4>
                <p className="text-white/70 font-light leading-relaxed">
                  33 2034 8548
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <Button 
              onClick={() => setIsReservationOpen(true)}
              className="bg-secondary hover:bg-secondary/90 text-white rounded-none px-8 py-6 font-serif tracking-widest w-full max-w-sm"
            >
              RESERVAR MESA
            </Button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 h-[500px] lg:h-auto min-h-[500px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.969854743207!2d-103.34994292398492!3d20.67503708088746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1eb7981b941%3A0xcdaefc1e138a05c3!2sAlma%20Jalisco!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-1000"
          ></iframe>
        </div>
      </section>

      <ContactForm />

      {/* Footer */}
      <footer className="bg-background border-t border-border pt-20 pb-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left mb-16">
            
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-3xl font-serif text-primary mb-6">Alma Jalisco</h3>
              <p className="text-muted-foreground font-light text-sm max-w-xs mb-6">
                Vive la esencia de Jalisco en cada detalle. Tradición, sabor y la mejor vista de Guadalajara.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-serif text-xl text-primary mb-6">Navegación</h4>
              <ul className="space-y-3 text-muted-foreground font-light text-sm">
                <li><a href="#inicio" className="hover:text-accent transition-colors">Inicio</a></li>
                <li><a href="#nosotros" className="hover:text-accent transition-colors">Sobre Nosotros</a></li>
                <li><a href="#menu" className="hover:text-accent transition-colors">Menú</a></li>
                <li><a href="#galeria" className="hover:text-accent transition-colors">Galería</a></li>
                <li><a href="#resenas" className="hover:text-accent transition-colors">Reseñas</a></li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-serif text-xl text-primary mb-6">Legal</h4>
              <ul className="space-y-3 text-muted-foreground font-light text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Aviso de Privacidad</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Política de Reservas</a></li>
              </ul>
            </div>
            
          </div>
          
          {/* Créditos académicos - CUCEI */}
          <div className="border-t border-border pt-10 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center md:text-left">
              <a
                href="https://www.cucei.udg.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 hover:opacity-80 transition-opacity"
                aria-label="CUCEI - Universidad de Guadalajara"
              >
                <img
                  src={cuceiLogo}
                  alt="Escudo CUCEI"
                  className="h-20 w-auto"
                />
              </a>
              <div className="space-y-1">
                <p className="text-sm font-serif text-primary tracking-wide">
                  Leopoldo Alejandro Rojas Vega
                </p>
                <p className="text-xs text-muted-foreground font-light">
                  Código: 218519062 · Ingeniería en Informática
                </p>
                <p className="text-xs text-muted-foreground font-light">
                  Desarrollo de Aplicaciones Web en la Nube y Móviles
                </p>
                <p className="text-xs text-accent font-light tracking-widest uppercase pt-1">
                  CUCEI · Universidad de Guadalajara
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-light">
            <p>&copy; {new Date().getFullYear()} Alma Jalisco. Todos los derechos reservados.</p>
            <p>Hecho con pasión en Guadalajara, Jalisco.</p>
          </div>
        </div>
      </footer>

      <ReservationModal open={isReservationOpen} onOpenChange={setIsReservationOpen} />
    </div>
  );
}