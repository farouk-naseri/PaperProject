import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutCreator() {
  return (
    <div className="space-y-8">
      {/* About the Creator Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About the Creator</h1>
        <p className="text-xl text-gray-500">John Doe - Visionary Founder and CEO</p>
      </section>

      {/* The Visionary and The Journey Sections */}
      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>The Visionary</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/vision.jpg" // Fixed: Image in the public directory
                alt="John Doe"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <p>
                John Doe has been passionate about paper-making since childhood. Growing up near a traditional paper
                mill, he was fascinated by the art and science of transforming raw materials into versatile sheets of
                paper. This early exposure sparked a lifelong journey in the world of paper production.
              </p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>The Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                With over 20 years of experience in the industry, John has worked his way up from an apprentice to a
                master paper-maker. He has collaborated with artisans, engineers, and environmentalists, constantly
                seeking ways to innovate and improve the paper-making process.
              </p>
              <Image
                src="/journey.jpg" // Fixed: Image in the public directory
                alt="John Doe's journey"
                width={400}
                height={200}
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Partnership Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>The Partnership</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="mb-4">
                  In 2010, John partnered with sustainable forestry expert Jane Smith and tech innovator Mike Johnson to
                  found the Paper Factory. This partnership brought together three essential elements:
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>{`John's expertise in traditional and modern paper-making techniques`}</li>
                  <li>{`Jane's commitment to sustainable resource management`}</li>
                  <li>{`Mike's innovative approach to production technology`}</li>
                </ul>
                <p>
                  Together, they have created a factory that not only produces high-quality paper but also sets new
                  standards for sustainability in the industry.
                </p>
              </div>
              <Image
                src="/partners.jpg" // Fixed: Image in the public directory
                alt="Factory partnership"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Innovation and Sustainability & Community Impact Sections */}
      <section className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Innovation and Sustainability</CardTitle> {/* Fixed typo */}
          </CardHeader>
          <CardContent>
            <Image
              src="/inovation.jpg" // Fixed: Image in the public directory
              alt="Innovative paper-making"
              width={400}
              height={200}
              className="rounded-lg mb-4"
            />
            <p>Under samir s leadership, the Paper Factory has introduced several groundbreaking innovations:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Water recycling systems that reduce water usage by 80%</li>
              <li>Integration of renewable energy sources, including solar and wind power</li>
              <li>Development of new paper blends using sustainable, fast-growing fibers</li>
              <li>Implementation of zero-waste policies across all production processes</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Community Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              John believes that a successful business should benefit its community. The Paper Factory has:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Created over 500 local jobs</li>
              <li>Established educational programs in schools to promote environmental awareness</li>
              <li>Funded reforestation projects in the surrounding areas</li>
              <li>Supported local artisans by providing high-quality paper for traditional crafts</li>
            </ul>
            <Image
              src="/impact.jpg" // Fixed: Image in the public directory
              alt="Community impact"
              width={400}
              height={200}
              className="rounded-lg"
            />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}