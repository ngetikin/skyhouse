import { motion } from "motion/react";
import { COMMUNITY_DATA, ASSETS } from "@/src/constants";
import { Instagram, MessageSquare, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 border-t border-border bg-card/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={ASSETS.LOGO} alt="Sky House Logo" className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
              <span className="font-display font-bold text-xl tracking-tight">{COMMUNITY_DATA.NAME}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sky House adalah komunitas digital berbasis Discord yang menjadi wadah interaksi, hiburan, dan koneksi sosial.
            </p>
            <div className="flex gap-4">
              <a href={COMMUNITY_DATA.SOCIALS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={COMMUNITY_DATA.SOCIALS.DISCORD} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Events", "Partnership"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Community</h4>
            <ul className="space-y-4">
              <li><a href={COMMUNITY_DATA.SOCIALS.DISCORD} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Join Server</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Open Partnership</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Recruitment Staff</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>Instagram: @skyhouse.offcl</li>
              <li>Discord: dsc.gg/skyhouse</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {COMMUNITY_DATA.NAME}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> for the community.
          </p>
        </div>
      </div>
    </footer>
  );
}
