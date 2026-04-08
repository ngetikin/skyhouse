import { motion } from "motion/react";
import { COMMUNITY_DATA } from "@/src/constants";

export default function About() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-8">
              Apa itu <span className="text-primary">Sky House?</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sky House adalah komunitas digital berbasis Discord yang menjadi wadah interaksi, hiburan, dan koneksi sosial bagi berbagai kalangan. Berdiri sejak 18 Desember 2021, Sky House hadir sebagai “rumah virtual” bagi para pengguna internet.
              </p>
              <p>
                Khususnya bagi kaum rebahan dan nolepers yang ingin mencari hiburan, teman, dan pengalaman komunitas yang seru. Dengan konsep santai namun aktif, Sky House terus berkembang menjadi komunitas yang hidup, kreatif, dan terbuka untuk siapa saja.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-muted relative group">
              <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent z-10" />
              <img 
                src="/screenshot-discord-skyhouse.png" 
                alt="Sky House Discord Preview" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Established</p>
                <p className="text-2xl font-display font-bold">{COMMUNITY_DATA.FOUNDED}</p>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-primary/5 blur-2xl -z-10 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
