import { motion } from "motion/react";
import { COMMUNITY_DATA } from "@/src/constants";

export default function Stats() {
  return (
    <section className="py-20 bg-primary/5 border-y border-primary/10">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          {COMMUNITY_DATA.STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="text-5xl md:text-7xl font-display font-black text-primary mb-2 tracking-tighter">
                {stat.value}
              </p>
              <p className="text-sm md:text-base font-bold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
