import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import HeartParticles from "@/components/HeartParticles";
import heroImage from "@/assets/hero-romantic.jpg";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password - user can change this
    if (password.toLowerCase() === "teamo") {
      navigate("/birthday");
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      <HeartParticles />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-full max-w-md mx-4"
      >
        <div className="romantic-border rounded-2xl bg-card/90 backdrop-blur-md p-8 text-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mb-6"
          >
            <Heart className="w-16 h-16 mx-auto text-primary fill-primary" />
          </motion.div>

          <h1 className="text-5xl font-romantic text-glow mb-2 text-foreground">
            Um lugar especial
          </h1>
          <p className="font-elegant text-lg text-muted-foreground mb-8 italic">
            Digite a senha secreta para entrar...
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha do amor..."
              className="w-full px-6 py-3 rounded-xl bg-muted/50 border border-primary/30 text-foreground text-center font-elegant text-lg placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-body font-medium text-lg animate-pulse-glow transition-all hover:brightness-110"
            >
              Entrar com amor ❤
            </motion.button>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-accent font-elegant text-sm"
              >
                Senha incorreta... Tente "teamo" 💕
              </motion.p>
            )}
          </form>

          <p className="mt-6 text-muted-foreground font-elegant text-sm">
            Dica: o que eu sempre digo pra você? 💕
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
