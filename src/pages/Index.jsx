import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wind, Zap, MapPin, Thermometer } from "lucide-react";

const JupiterFacts = [
  { icon: <MapPin className="h-4 w-4" />, fact: "Average distance from Sun: 484 million miles" },
  { icon: <Thermometer className="h-4 w-4" />, fact: "Surface temperature: -145°C at cloud tops" },
  { icon: <Wind className="h-4 w-4" />, fact: "Diameter: 88,846 miles (11x Earth's)" },
  { icon: <Zap className="h-4 w-4" />, fact: "Powerful magnetic field, 20,000x Earth's" },
];

const Index = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Discover Jupiter: The Gas Giant</h1>
      
      <div className="mb-8">
        <img src="/placeholder.svg" alt="Jupiter" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
      </div>

      <p className="text-lg mb-6 text-center">
        Jupiter, the largest planet in our solar system, is a fascinating gas giant known for its 
        massive size, powerful storms, and numerous moons.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {JupiterFacts.map((fact, index) => (
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
              <CardTitle>Composition of Jupiter</CardTitle>
              <CardDescription>What makes up this massive planet?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Jupiter is primarily composed of hydrogen and helium, similar to the Sun. It may have a rocky core, but lacks a solid surface like terrestrial planets.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="exploration">
          <Card>
            <CardHeader>
              <CardTitle>Exploration of Jupiter</CardTitle>
              <CardDescription>Missions to the gas giant</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Several spacecraft have visited Jupiter, including Pioneer 10 and 11, Voyager 1 and 2, Galileo, and Juno. These missions have provided invaluable data about the planet's atmosphere, magnetosphere, and moons.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="moons">
          <Card>
            <CardHeader>
              <CardTitle>Jupiter's Moons</CardTitle>
              <CardDescription>The diverse satellites orbiting Jupiter</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Jupiter has 79 known moons, with the four largest called the Galilean moons: Io, Europa, Ganymede, and Callisto. These moons are fascinating worlds in their own right, with features like volcanic activity on Io and a subsurface ocean on Europa.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="text-center mb-8">
        <Button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Learn More About Jupiter"}
        </Button>
      </div>

      {showMore && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>More About Jupiter</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Jupiter has been known since ancient times and is visible to the naked eye in the night sky. It's named after the king of the Roman gods and is the third brightest object in the Earth's sky after the Moon and Venus.
            </p>
            <p className="mt-4">
              One of Jupiter's most famous features is the Great Red Spot, a giant storm that has been raging for at least 400 years. This massive storm is so large that it could fit two to three Earths inside it.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Index;
