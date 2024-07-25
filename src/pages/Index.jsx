import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Info, MapPin, Thermometer } from "lucide-react";

const PlutoFacts = [
  { icon: <MapPin className="h-4 w-4" />, fact: "Average distance from Sun: 3.7 billion miles" },
  { icon: <Thermometer className="h-4 w-4" />, fact: "Surface temperature: -387°F to -369°F" },
  { icon: <Info className="h-4 w-4" />, fact: "Diameter: 1,477 miles (18.5% of Earth's)" },
  { icon: <Camera className="h-4 w-4" />, fact: "Discovered in 1930 by Clyde Tombaugh" },
];

const Index = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Discover Pluto: The Dwarf Planet</h1>
      
      <div className="mb-8">
        <img src="/placeholder.svg" alt="Pluto" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
      </div>

      <p className="text-lg mb-6 text-center">
        Pluto, once considered the ninth planet, is now classified as a dwarf planet. 
        Despite its small size, it continues to captivate scientists and space enthusiasts alike.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {PlutoFacts.map((fact, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-2">
              {fact.icon}
              <CardTitle>Fact {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{fact.fact}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="composition" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="composition">Composition</TabsTrigger>
          <TabsTrigger value="exploration">Exploration</TabsTrigger>
          <TabsTrigger value="moons">Moons</TabsTrigger>
        </TabsList>
        <TabsContent value="composition">
          <Card>
            <CardHeader>
              <CardTitle>Composition of Pluto</CardTitle>
              <CardDescription>What makes up this distant world?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Pluto is primarily composed of rock and ice. Its surface is covered with frozen nitrogen, methane, and carbon monoxide ices.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="exploration">
          <Card>
            <CardHeader>
              <CardTitle>Exploration of Pluto</CardTitle>
              <CardDescription>Missions to the edge of our solar system</CardDescription>
            </CardHeader>
            <CardContent>
              <p>The New Horizons spacecraft, launched in 2006, made a historic flyby of Pluto in July 2015, providing unprecedented close-up images and data about the dwarf planet.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="moons">
          <Card>
            <CardHeader>
              <CardTitle>Pluto's Moons</CardTitle>
              <CardDescription>The satellites orbiting Pluto</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Pluto has five known moons: Charon (the largest), Nix, Hydra, Kerberos, and Styx. Charon is so large relative to Pluto that the two are sometimes referred to as a double dwarf planet system.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="text-center mb-8">
        <Button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Learn More About Pluto"}
        </Button>
      </div>

      {showMore && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>More About Pluto</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Pluto was discovered in 1930 and was long considered the ninth planet in our solar system. However, in 2006, the International Astronomical Union (IAU) reclassified Pluto as a dwarf planet due to the discovery of similar-sized objects in its vicinity.
            </p>
            <p className="mt-4">
              Despite its demotion, Pluto remains an object of fascination for astronomers and the public alike. Its complex surface features, thin atmosphere, and intriguing moon system continue to surprise scientists with each new discovery.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Index;
