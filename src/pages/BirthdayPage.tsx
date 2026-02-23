import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Star, Gift } from "lucide-react";
import HeartParticles from "@/components/HeartParticles";
import heroImage from "@/assets/hero-romantic.jpg";
import rosesImage from "@/assets/roses-bg.jpg";
import starryImage from "@/assets/starry-romantic.jpg";
import photo1 from "../assets/WhatsApp Image 2026-02-23 at 19.54.26.jpeg";
import photo2 from "../assets/WhatsApp Image 2026-02-23 at 19.57.13.jpeg";
import photo3 from "../assets/WhatsApp Image 2026-02-23 at 19.57.44.jpeg";
import video1 from "../assets/WhatsApp Video 2026-02-23 at 19.56.31.mp4";
import carrelesWhisper from "../assets/carreles-whisper.mp3";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" as const },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

const sections = [
  {
    title: "Feliz Aniversário",
    subtitle: "Alanis ❤",
    text: "Hoje é o dia mais especial do ano, porque é o dia em que você nasceu. O mundo ficou mais bonito quando você chegou nele.",
    icon: Heart,
    bg: heroImage,
  },
  {
    title: "Alanis, você é minha estrela",
    subtitle: "",
    text: "Em cada momento ao seu lado, eu descubro um novo motivo para te amar. Seu sorriso ilumina os meus dias mais escuros e seu abraço é o meu lugar favorito no mundo.",
    icon: Star,
    bg: starryImage,
  },
  {
    title: "Nosso Amor, Alanis",
    subtitle: "",
    text: "Cada segundo com você é uma eternidade de felicidade. Você transformou minha vida em algo mágico, cheio de cores e sentimentos que eu nem sabia que existiam.",
    icon: Sparkles,
    bg: rosesImage,
  },
  {
    title: "Para Sempre, Alanis",
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

const loveMessages = [
  "Alanis, você é o amor da minha vida! 💖",
  "Cada dia com você é um sonho! ✨",
  "Meu coração é todo seu, Alanis! 💝",
  "Você me faz a pessoa mais feliz do mundo! 🥰",
  "Alanis, eu te amo infinitamente! 💕",
  "Você é minha pessoa favorita! 🌹",
  "Obrigado por existir, Alanis! 💗",
];

const BirthdayPage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3]);
  const [showLove, setShowLove] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleLoveClick = () => {
    setShowLove(true);
    setMessageIndex((prev) => (prev + 1) % loveMessages.length);
    const newHearts = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 300 - 150,
      y: -(Math.random() * 200 + 100),
    }));
    setHearts(newHearts);
    setTimeout(() => setHearts([]), 2000);
  };

  return (
    <div className="relative bg-background">
      <audio src={carrelesWhisper} autoPlay loop hidden />
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
            className="relative z-10 text-center px-4"
          >
            <Heart className="w-20 h-20 mx-auto text-primary fill-primary mb-6" />
          </motion.div>
          <h1 className="text-7xl md:text-9xl font-romantic text-glow text-foreground mb-4">
            Feliz Aniversário
          </h1>
          <p className="text-4xl md:text-5xl font-romantic text-foreground mb-4">
            Alanis
          </p>
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

            {/* Foto ou vídeo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 photo-frame rounded-2xl overflow-hidden mx-auto max-w-sm aspect-square bg-muted/20 flex items-center justify-center"
            >
              {index === 0 && (
                <img src={photo1} alt="Foto 1" className="object-cover w-full h-full" />
              )}
              {index === 1 && (
                <img src={photo2} alt="Foto 2" className="object-cover w-full h-full" />
              )}
              {index === 2 && (
                <img src={photo3} alt="Foto 3" className="object-cover w-full h-full" />
              )}
              {index === 3 && (
                <video src={video1} controls className="object-cover w-full h-full">
                  Seu navegador não suporta vídeo.
                </video>
              )}
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

          <h2 className="text-6xl md:text-8xl font-romantic text-glow text-foreground mb-2">
            Te Amo
          </h2>
          <p className="text-4xl md:text-5xl font-romantic text-foreground/90 mb-6">
            Alanis ❤
          </p>
          <p className="text-2xl md:text-3xl font-elegant italic text-foreground/80 mb-4">
            Hoje, amanhã e para sempre.
          </p>
          <p className="text-lg font-elegant text-muted-foreground mb-10">
            Com todo o meu amor ❤
          </p>

          {/* Interactive Love Button */}
          <div className="relative inline-block">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLoveClick}
              className="relative px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-lg font-medium romantic-border animate-pulse-glow cursor-pointer"
            >
              💖 Clique aqui, meu amor 💖
            </motion.button>

            {/* Exploding hearts */}
            <AnimatePresence>
              {hearts.map((heart) => (
                <motion.span
                  key={heart.id}
                  initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  animate={{ opacity: 0, scale: 0.5, x: heart.x, y: heart.y }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute left-1/2 top-1/2 text-2xl pointer-events-none"
                >
                  {["❤️", "💕", "💖", "💗", "🌹", "✨"][Math.floor(Math.random() * 6)]}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>

          {/* Love message */}
          <AnimatePresence mode="wait">
            {showLove && (
              <motion.div
                key={messageIndex}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="mt-8 p-6 rounded-2xl romantic-border bg-card/60 backdrop-blur-sm max-w-md mx-auto"
              >
                <p className="text-2xl md:text-3xl font-romantic text-glow text-foreground">
                  {loveMessages[messageIndex]}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default BirthdayPage;
