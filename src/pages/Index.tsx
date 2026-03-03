import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const roomCards = [
{
  name: 'Suite Provençale',
  price: '€520 / night',
  image: 'https://img.vibestack.site/s/sunlit provence suite bedroom/600/400'
},
{
  name: 'Garden Room',
  price: '€390 / night',
  image: 'https://img.vibestack.site/s/luxury garden room france/600/400'
},
{
  name: 'Rooftop Terrace',
  price: '€610 / night',
  image: 'https://img.vibestack.site/s/rooftop terrace villa lounge/600/400'
}];


const experiences = [
{
  title: 'Vineyard Dining',
  description:
  'Golden hour suppers between the vines, where rosé lingers and the air smells of sun-warmed figs.',
  image: 'https://img.vibestack.site/s/vineyard dinner in provence/900/700'
},
{
  title: 'Spa Treatments',
  description:
  'Lavender-infused rituals and mineral baths, a quiet cadence of light, stone, and silk.',
  image: 'https://img.vibestack.site/s/luxury spa treatment room/900/700'
},
{
  title: 'Coastal Excursions',
  description:
  'Sailing the Côte d’Azur in a private launch, with cliffs like linen and water like glass.',
  image: 'https://img.vibestack.site/s/coastal excursion yacht france/900/700'
}];


const dishes = [
{
  name: 'Bouillabaisse Royale',
  image: 'https://img.vibestack.site/s/bouillabaisse plated fine dining/600/400'
},
{
  name: 'Truffle Tagliatelle',
  image: 'https://img.vibestack.site/s/truffle pasta fine dining/600/400'
},
{
  name: 'Citrus Tart',
  image: 'https://img.vibestack.site/s/citrus tart dessert plate/600/400'
},
{
  name: 'Lavender Crème Brûlée',
  image: 'https://img.vibestack.site/s/creme brulee lavender dessert/600/400'
}];


const testimonials = [
{
  name: 'Camille R.',
  quote:
  'Maison Duvall feels like a sunlit secret. Every detail is gentle, indulgent, and unforgettable.',
  image: 'https://img.vibestack.site/s/french woman headshot studio lighting/200/200'
},
{
  name: 'Julien M.',
  quote:
  'We arrived for a weekend and stayed for a week. The rooms glow, the service is poetry.',
  image: 'https://img.vibestack.site/s/elegant man headshot studio lighting/200/200'
},
{
  name: 'Aria L.',
  quote:
  'From the terrace breakfast to the sunset cruise, it was a serene dream we never wanted to leave.',
  image: 'https://img.vibestack.site/s/woman headshot studio lighting warm/200/200'
}];


const Index = () => {
  return (
    <div data-oid="9Wj0GZU" className="bg-background text-foreground">
      <header data-oid="kywlwG5" className="relative min-h-[100vh] overflow-hidden">
        <img data-oid="77VX_jb"
        src="https://img.vibestack.site/s/sun drenched villa exterior provence/1600/900"
        alt="Maison Duvall villa exterior"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager" />
        
        <div data-oid="ikPgcLO" className="absolute inset-0 bg-[linear-gradient(120deg,rgba(20,15,10,0.55),rgba(20,15,10,0.25))]" />
        <div data-oid="AwzFwpD" className="relative z-10 mx-auto flex min-h-[100vh] max-w-6xl flex-col justify-center px-6 py-20 text-cream-50">
          <p data-oid="iseA6Yz" className="uppercase tracking-[0.4em] text-xs text-white/70">Maison Duvall</p>
          <h1 data-oid="TdzJ890" className="mt-6 text-5xl font-light tracking-[0.12em] text-white sm:text-6xl md:text-7xl">A sun-drenched escape in the heart of Provence

          </h1>
          <p data-oid="ZXwfjNH" className="mt-6 max-w-2xl text-lg text-white/80">
            Twelve rooms, one storied villa, and the Côte d’Azur unfolding just beyond the olive groves.
          </p>
          <div data-oid="7ptZj8n" className="mt-10 flex flex-wrap gap-4">
            <Button data-oid="T7LKFDg" className="bg-primary text-primary-foreground hover:bg-primary/90">Reserve a stay</Button>
            <Button data-oid="RO7GLDS" variant="outline" className="border-white/70 text-white hover:bg-white/10">
              View suites
            </Button>
          </div>
        </div>
      </header>

      <section data-oid="OIym8kX" className="mx-auto max-w-6xl px-6 py-24">
        <div data-oid="fG2A2TO" className="flex items-end justify-between gap-6">
          <div data-oid="dZMH9d8">
            <p data-oid="IBCDrqH" className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Suites & Rooms</p>
            <h2 data-oid="4j3hN_A" className="mt-4 text-3xl font-light tracking-wide">Our rooms are luminous, layered, and intimate.</h2>
          </div>
          <Button data-oid="D2aUNVu" variant="ghost" className="text-primary hover:text-primary">
            Explore all rooms
          </Button>
        </div>
        <div data-oid="QxFj5BI" className="mt-12 grid gap-8 md:grid-cols-3">
          {roomCards.map((room) =>
          <motion.div data-oid="oU_LcKk"
          key={room.name}
          whileHover={{ y: -6 }}
          className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/60 shadow-sm">
            
              <img data-oid="T9zTzhb" src={room.image} alt={room.name} className="h-72 w-full object-cover" loading="lazy" />
              <div data-oid="-fw7LJO" className="p-6">
                <h3 data-oid="5QcdjBN" className="text-xl font-medium tracking-wide">{room.name}</h3>
                <p data-oid="HuFddLj" className="mt-2 text-sm text-muted-foreground">{room.price}</p>
              </div>
              <div data-oid="B2qJJKB" className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Button data-oid="IIiVBME" className="bg-primary text-primary-foreground">Reserve</Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <section data-oid="AxPBXUq" className="bg-secondary/50 py-24">
        <div data-oid="JZ69Xqi" className="mx-auto max-w-6xl px-6">
          <div data-oid="gRz4uwO" className="max-w-2xl">
            <p data-oid="Hl6tj_3" className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Experience</p>
            <h2 data-oid="YxcPton" className="mt-4 text-4xl font-light">Moments curated for the poetic traveler.</h2>
          </div>
          <div data-oid="YCZEZYf" className="mt-12 space-y-16">
            {experiences.map((exp, index) =>
            <div data-oid="8O5yjJb"
            key={exp.title}
            className={`grid items-center gap-10 md:grid-cols-2 ${index % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''}`}>
              
                <img data-oid="5AZQ7yX"
              src={exp.image}
              alt={exp.title}
              className="h-80 w-full rounded-3xl object-cover"
              loading="lazy" />
              
                <div data-oid="Ht5Yeyu">
                  <h3 data-oid="MHnuRvn" className="text-2xl font-light tracking-wide">{exp.title}</h3>
                  <p data-oid="FRNcDWx" className="mt-4 text-lg text-muted-foreground">{exp.description}</p>
                  <Button data-oid="4o2FMyJ" variant="link" className="mt-6 px-0 text-primary">
                    Discover more
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section data-oid="_XZERyP" className="mx-auto max-w-6xl px-6 py-24">
        <div data-oid="B5H1cPN" className="flex flex-wrap items-end justify-between gap-6">
          <div data-oid="qS-1IQP">
            <p data-oid="B243oWk" className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Food & Drink</p>
            <h2 data-oid="QODMtyg" className="mt-4 text-3xl font-light">Seasonal menus inspired by Provence.</h2>
          </div>
          <Button data-oid="-T3Q2hK" variant="ghost" className="text-primary hover:text-primary">
            View menus
          </Button>
        </div>
        <div data-oid="kS_J2FT" className="mt-10 flex gap-6 overflow-x-auto pb-4">
          {dishes.map((dish) =>
          <Card data-oid="e0CTipQ" key={dish.name} className="min-w-[260px] overflow-hidden rounded-3xl border-none shadow-md">
              <img data-oid="0GKwvIv" src={dish.image} alt={dish.name} className="h-40 w-full object-cover" loading="lazy" />
              <CardContent data-oid="tLKCHR0" className="p-5">
                <p data-oid="X0R6trk" className="text-base font-medium tracking-wide">{dish.name}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section data-oid="4mzF5iv" className="bg-secondary/60 py-24">
        <div data-oid="nJsNjrH" className="mx-auto max-w-6xl px-6">
          <div data-oid="Ed-AIE0" className="max-w-xl">
            <p data-oid="bY-bhuK" className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Testimonials</p>
            <h2 data-oid="Pb-qCTD" className="mt-4 text-3xl font-light">Our guests describe Maison Duvall as timeless.</h2>
          </div>
          <div data-oid="ZLKOkdq" className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) =>
            <Card data-oid="T0XxRRl" key={testimonial.name} className="border-none bg-white/80 shadow-sm">
                <CardContent data-oid="tsYYnWT" className="flex flex-col gap-6 p-6">
                  <img data-oid="DgQ9J2G"
                src={testimonial.image}
                alt={testimonial.name}
                className="h-16 w-16 rounded-full object-cover"
                loading="lazy" />
                
                  <p data-oid="YYDDV2U" className="text-base text-muted-foreground">“{testimonial.quote}”</p>
                  <p data-oid="GOJAIbG" className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <section data-oid="LhpFE3l" className="relative h-[60vh]">
        <div data-oid="_oFgGug" className="absolute inset-0 bg-fixed">
          <img data-oid="P7Og5NN"
          src="https://img.vibestack.site/s/drone coastline south of france/1600/900"
          alt="Côte d'Azur coastline"
          className="h-full w-full object-cover"
          loading="lazy" />
          
        </div>
        <div data-oid="Vdh-fy2" className="absolute inset-0 bg-black/30" />
      </section>

      <section data-oid="efqJc2C" className="bg-background py-24">
        <div data-oid="I4EVqW9" className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div data-oid="KK9fATF" className="space-y-8">
            <div data-oid="wcoUh8e">
              <p data-oid="WeRaLvJ" className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Find Us</p>
              <h2 data-oid="7-2JMPH" className="mt-4 text-3xl font-light">A quiet villa above the vineyards of Èze.</h2>
            </div>
            <div data-oid="wDo9pCy" className="rounded-3xl border border-dashed border-primary/40 bg-secondary/60 p-10 text-center text-muted-foreground">
              Map placeholder
            </div>
          </div>
          <div data-oid="E7Wc2jw" className="space-y-8">
            <div data-oid="RFcHTzb" className="rounded-3xl border border-primary/20 bg-white/70 p-8 shadow-sm">
              <h3 data-oid="IJJuJ-Y" className="text-xl font-light tracking-wide">Contact</h3>
              <Separator data-oid="gRgorvQ" className="my-4" />
              <div data-oid="UO7x3X7" className="space-y-3 text-sm text-muted-foreground">
                <p data-oid="NqIDO8q">Maison Duvall, Chemin des Oliviers, 06360 Èze, France</p>
                <p data-oid="VKtHDeB">+33 (0)4 93 00 44 18</p>
                <p data-oid="oWdO9lx">bonjour@maisonduvall.com</p>
              </div>
            </div>
            <div data-oid="wOTl1_H" className="rounded-3xl border border-primary/20 bg-white/70 p-8 shadow-sm">
              <h3 data-oid="ZoJp9pl" className="text-xl font-light tracking-wide">Newsletter</h3>
              <Separator data-oid="_wHqdvd" className="my-4" />
              <p data-oid="VYewHqc" className="text-sm text-muted-foreground">
                Receive seasonal invitations, chef collaborations, and villa stories.
              </p>
              <div data-oid="AoN-sDR" className="mt-6 flex flex-wrap gap-3">
                <Input data-oid="hHEFtX-"
                placeholder="Email address"
                className="min-w-[220px] flex-1 bg-white/80" />
                
                <Button data-oid="KMLWh9_" className="bg-primary text-primary-foreground">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer data-oid="6kDikdR" className="bg-[#1b1610] py-10 text-sm text-white/70">
        <div data-oid="LIZd6Tt" className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <p data-oid="GmgXFFz" className="tracking-[0.3em] text-primary">MAISON DUVALL</p>
          <p data-oid="PaAqDvs">© 2026 Maison Duvall. All rights reserved.</p>
          <p data-oid="d5CD60M" className="text-white/50">Instagram · Facebook · Pinterest</p>
        </div>
      </footer>
    </div>);

};

export default Index;