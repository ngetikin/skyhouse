import { motion } from "motion/react";
import { COMMUNITY_DATA, ASSETS } from "@/src/constants";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 right-0 left-0 z-50 border-b bg-background/80 backdrop-blur-md border-border"
    >
      <div className="flex justify-between items-center h-16 container-custom">
        <div className="flex gap-2 items-center">
          <img
            src={ASSETS.LOGO}
            alt="Sky House Logo"
            className="w-8 h-8"
            referrerPolicy="no-referrer"
          />
          <span className="text-xl font-bold tracking-tight font-display">
            {COMMUNITY_DATA.NAME}
          </span>
        </div>

        <div className="hidden gap-8 items-center md:flex">
          {["Home", "About", "Events", "Partnership"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
            >
              {item}
            </a>
          ))}
        </div>

        <Button asChild className="glow-purple">
          <a
            href={COMMUNITY_DATA.SOCIALS.DISCORD}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Join Discord
          </a>
        </Button>
      </div>
    </motion.nav>
  );
}
