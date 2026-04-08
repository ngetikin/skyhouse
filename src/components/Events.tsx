import { motion } from "motion/react";
import { COMMUNITY_DATA } from "@/src/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Events() {
  return (
    <section id="events" className="py-24 bg-card/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Event <span className="text-primary">Showcase</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lihat berbagai aktivitas seru yang pernah kami selenggarakan. Dari podcast santai hingga 
              penelusuran misteri yang mendebarkan.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/20 text-primary bg-primary/5">
              15+ Events Success
            </Badge>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {COMMUNITY_DATA.EVENTS.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border overflow-hidden group hover:border-primary/50 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-primary/80 backdrop-blur-sm hover:bg-primary">
                      {event.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed line-clamp-2">
                    {event.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
