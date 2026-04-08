import { motion } from "motion/react";
import { COMMUNITY_DATA, ASSETS } from "@/src/constants";
import { Instagram, MessageSquare, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border bg-card/30">
      <div className="container-custom">
        <div className="grid gap-12 mb-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex gap-2 items-center mb-6">
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
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Sky House adalah komunitas digital berbasis Discord yang menjadi
              wadah interaksi, hiburan, dan koneksi sosial.
            </p>
            <div className="flex gap-4">
              <a
                href={COMMUNITY_DATA.SOCIALS.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-10 h-10 rounded-full transition-all bg-muted hover:bg-primary/20 hover:text-primary"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={COMMUNITY_DATA.SOCIALS.DISCORD}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-10 h-10 rounded-full transition-all bg-muted hover:bg-primary/20 hover:text-primary"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Events", "Partnership"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="transition-colors text-muted-foreground hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold tracking-widest uppercase">
              Community
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={COMMUNITY_DATA.SOCIALS.DISCORD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors text-muted-foreground hover:text-primary"
                >
                  Join Server
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors text-muted-foreground hover:text-primary"
                >
                  Open Partnership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors text-muted-foreground hover:text-primary"
                >
                  Recruitment Staff
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold tracking-widest uppercase">
              Contact
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>Instagram: @skyhouse.offcl</li>
              <li>Discord: dsc.gg/skyhouse</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-between items-center pt-8 border-t md:flex-row border-border">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {COMMUNITY_DATA.NAME}. All rights reserved.
          </p>
          <p className="flex gap-1 items-center text-sm text-muted-foreground">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" />{" "}
            for the community.
          </p>
        </div>
      </div>
    </footer>
  );
}
