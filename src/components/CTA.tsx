import { motion } from "motion/react";
import { COMMUNITY_DATA } from "@/src/constants";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card/50 border border-primary/20 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
          
          <h2 className="text-4xl md:text-6xl mb-8 max-w-3xl mx-auto leading-tight">
            Siap Bergabung dengan <span className="text-gradient">Sky House?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Jangan biarkan harimu membosankan. Join ribuan member lainnya dan temukan 
            keseruan baru setiap harinya di rumah digital kami.
          </p>
          
          <Button size="lg" className="h-16 px-12 text-xl glow-purple" asChild>
            <a href={COMMUNITY_DATA.SOCIALS.DISCORD} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="w-6 h-6 mr-3" />
              Join Discord Now
            </a>
          </Button>
          
          <p className="mt-8 text-sm text-muted-foreground font-medium uppercase tracking-widest">
            Let's Join Us! — Since 2021
          </p>
        </motion.div>
      </div>
    </section>
  );
}
