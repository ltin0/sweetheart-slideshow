import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Sparkles, Star, Gift } from "lucide-react";
import HeartParticles from "@/components/HeartParticles";
import heroImage from "@/assets/hero-romantic.jpg";
import rosesImage from "@/assets/roses-bg.jpg";
import starryImage from "@/assets/starry-romantic.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" as const },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

const sections = [
  {
    title: "Feliz Aniversário",
    subtitle: "Meu Amor",
    text: "Hoje é o dia mais especial do ano, porque é o dia em que você nasceu. O mundo ficou mais bonito quando você chegou nele.",
    icon: Heart,
    bg: heroImage,
  },
  {
    title: "Você é minha estrela",
    subtitle: "",
    text: "Em cada momento ao seu lado, eu descubro um novo motivo para te amar. Seu sorriso ilumina os meus dias mais escuros e seu abraço é o meu lugar favorito no mundo.",
    icon: Star,
    bg: starryImage,
  },
  {
    title: "Nosso Amor",
    subtitle: "",
    text: "Cada segundo com você é uma eternidade de felicidade. Você transformou minha vida em algo mágico, cheio de cores e sentimentos que eu nem sabia que existiam.",
    icon: Sparkles,
    bg: rosesImage,
  },
  {
    title: "Para Sempre",
    subtitle: "",
    text: "Eu prometo estar ao seu lado em todos os momentos, nos sorrisos e nas lágrimas, nas aventuras e no silêncio. Porque com você, até o silêncio é perfeito.",
    icon: Gift,
    bg: heroImage,
  },
];

const phrases = [
  "Você é o melhor presente que a vida me deu 🎁",
  "Meu coração bate mais forte por você 💓",
  "Contigo, cada dia é uma nova aventura ✨",
  "Seu sorriso é a minha canção favorita 🎵",
  "Te amo mais do que as palavras podem dizer 💕",
];

const BirthdayPage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3]);

  return (
    <div className="relative bg-background">
      <HeartParticles />

      {/* Hero Section */}
      <motion.section
        style={{ opacity }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-background/60" />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-20 h-20 mx-auto text-primary fill-primary mb-6" />
          </motion.div>
          <h1 className="text-7xl md:text-9xl font-romantic text-glow text-foreground mb-4">
            Feliz Aniversário
          </h1>
          <p className="text-2xl md:text-3xl font-elegant italic text-foreground/80">
            Meu amor, este dia é todo seu ❤
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-12 text-muted-foreground font-body text-sm"
          >
            ↓ Role para baixo ↓
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${section.bg})` }}
          />
          <div className="absolute inset-0 bg-background/75" />

          <motion.div
            {...fadeInUp}
            className="relative z-10 max-w-2xl mx-auto px-6 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <section.icon className="w-14 h-14 mx-auto text-primary fill-primary/30 mb-6" />
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-romantic text-glow text-foreground mb-2">
              {section.title}
            </h2>
            {section.subtitle && (
              <p className="text-3xl font-romantic text-romantic-glow mb-6">
                {section.subtitle}
              </p>
            )}
            <p className="text-xl md:text-2xl font-elegant leading-relaxed text-foreground/90 italic">
              "{section.text}"
            </p>

            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 photo-frame rounded-2xl overflow-hidden mx-auto max-w-sm aspect-square bg-muted/20 flex items-center justify-center"
            >
              <div className="text-center p-8">
                <Heart className="w-10 h-10 mx-auto text-primary/40 mb-3" />
                <p className="font-body text-sm text-muted-foreground">
                  Coloque sua foto aqui
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>
      ))}

      {/* Phrases Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden romantic-gradient">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-5xl md:text-7xl font-romantic text-glow text-foreground text-center mb-16"
          >
            Motivos para te amar
          </motion.h2>

          <div className="space-y-8">
            {phrases.map((phrase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="romantic-border rounded-xl p-6 bg-card/50 backdrop-blur-sm"
              >
                <p className="text-xl md:text-2xl font-elegant italic text-foreground/90 text-center">
                  {phrase}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${rosesImage})` }}
        />
        <div className="absolute inset-0 bg-background/70" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Heart className="w-24 h-24 mx-auto text-primary fill-primary mb-8" />
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-romantic text-glow text-foreground mb-6">
            Te Amo
          </h2>
          <p className="text-2xl md:text-3xl font-elegant italic text-foreground/80 mb-4">
            Hoje, amanhã e para sempre.
          </p>
          <p className="text-lg font-elegant text-muted-foreground">
            Com todo o meu amor ❤
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default BirthdayPage;
