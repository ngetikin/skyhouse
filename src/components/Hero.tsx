import { motion } from "motion/react";
import { COMMUNITY_DATA } from "@/src/constants";
import { Button } from "@/components/ui/button";
import { MessageSquare, Compass } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
              {COMMUNITY_DATA.TAGLINE}
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] mb-8 tracking-tighter">
              The Best <br />
              <span className="text-gradient">Discord</span> <br />
              Community
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Tempat nongkrong virtual buat ngobrol santai, event seru, dan komunitas aktif. 
              Rumah digital untuk berbagi, tertawa, dan terhubung tanpa batas.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 text-lg glow-purple" asChild>
                <a
                  href={COMMUNITY_DATA.SOCIALS.DISCORD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Join Server
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/20 hover:bg-primary/5" asChild>
                <a href="#about" className="inline-flex items-center gap-2">
                  <Compass className="w-5 h-5" />
                  Explore Community
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block pointer-events-none opacity-50">
        <div className="relative w-full h-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-primary/10 rounded-full" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] aspect-square border border-secondary/10 rounded-full" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square border border-accent/10 rounded-full" 
          />
        </div>
      </div>
    </section>
  );
}
