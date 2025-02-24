import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/heroSlider"; // Adjust path based on your structure

export default function Home() {
  // Array of hero images
  const heroImages = [
    { src: "/paperProcess.jpg", alt: "Hero Image 1" },
    { src: "/paperProcess2.jpg", alt: "Hero Image 2" },
    { src: "/papersize.jpg", alt: "Hero Image 3" },
  ];

  return (
    <div className="space-y-6 min-h-[calc(100vh-4rem-1px)]">
      {/* Hero Image Carousel */}
      <HeroSlider images={heroImages} />

      {/* Welcome Section */}
      <section id="welcome" className="flex items-center gap-6 pt-16">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Paper Factory</h2>
          <p className="text-lg">
            We specialize in providing high-quality paper services using sustainable methods and materials.
          </p>
        </div>
        <Image
          src="/paperProcess.jpg"
          alt="Paper factory overview"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </section>

      {/* Process Section */}
      <section id="process" className="pt-16">
        <Card>
          <CardHeader>
            <CardTitle>Our Process</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <p>
                Our paper-making process combines traditional techniques with modern technology to ensure the highest
                quality and efficiency. We carefully select raw materials, process them using state-of-the-art
                equipment, and finish each sheet with meticulous attention to detail.
              </p>
            </div>
            <Image
              src="/paperProcess2.jpg"
              alt="Paper-making process"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </CardContent>
        </Card>
      </section>

      {/* Services Section */}
      <section id="services" className="pt-16">
        <Card>
          <CardHeader>
            <CardTitle>Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Our Paper Services</h3>
                <p className="mb-4">We offer a wide range of paper-related services, including:</p>
                <ul className="list-disc list-inside">
                  <li>Custom paper manufacturing</li>
                  <li>Paper recycling and upcycling</li>
                  <li>Specialty paper design</li>
                  <li>Paper quality testing and certification</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/papersize.jpg"
                  alt="Paper services"
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="pt-16">
        <Card>
          <CardHeader>
            <CardTitle>Sustainability</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <p>
                We are committed to sustainable practices, using recycled materials and eco-friendly production methods.
                Our factory implements water recycling systems, uses renewable energy sources, and follows zero-waste
                policies to minimize our environmental impact.
              </p>
            </div>
            <Image
              src="/recycle.jpg"
              alt="Sustainable practices"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </CardContent>
        </Card>
      </section>

      {/* Innovation Section */}
      <section id="innovation" className="pt-16">
        <Card>
          <CardHeader>
            <CardTitle>Innovation</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <p>
                Our research team constantly explores new ways to improve paper quality and production efficiency. We
                invest in cutting-edge technology and collaborate with industry experts to develop innovative solutions
                for the paper industry.
              </p>
            </div>
            <Image
              src="/quality.jpg"
              alt="Innovation in paper-making"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </CardContent>
        </Card>
      </section>
      <section id="testimonials" className="pt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <p className="italic mb-4">
              &quot;The Paper Factory s custom manufacturing service allowed us to create the perfect paper for our  high-end stationery line. Their attention to detail and commitment to quality is unmatched.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Sarah Johnson"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">CEO, Elegant Stationery Co.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="italic mb-4">
                &quot; We ve been impressed by the Paper Factory s innovative approach to sustainability  Their recycled paper products have helped us significantly reduce our environmental footprint &quot;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Michael Chen"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Sustainability Director, EcoPublish</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* About the Creator Section */}
      <section id="creator" className="pt-16 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>About the Creator</CardTitle>
            <CardDescription>John Doe - Founder and CEO</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <p className="mb-4">
                John Doe has been passionate about paper-making since childhood. With over 20 years of experience in the
                industry, he founded this factory with a vision to create sustainable, high-quality paper products that
                meet the needs of modern consumers while respecting the environment.
              </p>
              <Link href="/about-creator">
                <Button>Learn More About John Doe</Button>
              </Link>
            </div>
            <Image
              src="/me.jpg"
              alt="John Doe"
              width={150}
              height={150}
              className="rounded-full"
            />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}