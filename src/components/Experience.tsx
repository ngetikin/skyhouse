import { motion } from "motion/react";
import { COMMUNITY_DATA, ASSETS } from "@/src/constants";
import { MessageSquare, Users, Mic, Sparkles } from "lucide-react";

const features = [
  { icon: MessageSquare, label: "Chat Interaktif", desc: "Ngobrol santai di berbagai channel teks." },
  { icon: Users, label: "800+ Members", desc: "Komunitas besar yang selalu menyambut member baru." },
  { icon: Mic, label: "Voice Hangout", desc: "Ruang ngobrol suara untuk karaoke atau diskusi." },
  { icon: Sparkles, label: "Event Kreatif", desc: "Aktivitas unik yang bikin betah nongkrong." },
];

export default function Experience() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl relative z-10">
                <img 
                  src={ASSETS.DISCORD_PREVIEW} 
                  alt="Discord Experience" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative glows */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl mb-8">
              Rasakan <span className="text-primary">Vibe</span> Komunitas Kami
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Sky House dirancang untuk memberikan pengalaman nongkrong digital yang paling nyaman. 
              Dari channel yang tertata rapi hingga sistem bot yang interaktif.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={f.label} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{f.label}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
