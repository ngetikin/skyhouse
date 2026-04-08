import { motion } from "motion/react";
import { COMMUNITY_DATA, ASSETS } from "@/src/constants";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container-custom h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={ASSETS.LOGO} alt="Sky House Logo" className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
          <span className="font-display font-bold text-xl tracking-tight">{COMMUNITY_DATA.NAME}</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Events", "Partnership"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <Button asChild className="glow-purple">
          <a href={COMMUNITY_DATA.SOCIALS.DISCORD} target="_blank" rel="noopener noreferrer">
            <MessageSquare className="w-4 h-4 mr-2" />
            Join Discord
          </a>
        </Button>
      </div>
    </motion.nav>
  );
}
