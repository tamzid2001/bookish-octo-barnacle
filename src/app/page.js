import React from 'react';
import { SignInButton } from "@clerk/nextjs";
import { ChevronRight, Video, Zap, Globe, Code, Send } from 'lucide-react';

// Placeholder components (you'd typically import these from your UI library)
const Button = ({ children, ...props }) => <button {...props}>{children}</button>;
const Input = (props) => <input {...props} />;

const Header = () => (
  <header className="bg-indigo-600 text-white py-4">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">ClipCraft AI</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#features" className="hover:text-indigo-200">Features</a></li>
          <li><a href="#demo" className="hover:text-indigo-200">Demo</a></li>
          <li><a href="#pricing" className="hover:text-indigo-200">Pricing</a></li>
          <li><SignInButton mode="modal">
            <Button className="bg-white text-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-100">
              Sign In
            </Button>
          </SignInButton></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-5xl font-bold mb-4">Craft Stunning Video Clips with AI</h2>
      <p className="text-xl mb-8">Transform your ideas into engaging social media content in seconds</p>
      <Button className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-100 inline-flex items-center">
        Start Crafting <ChevronRight className="ml-2" />
      </Button>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="text-indigo-600 w-12 h-12 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => (
  <section id="features" className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose ClipCraft AI?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={Video}
          title="AI-Powered Editing"
          description="Our advanced AI understands context and creates perfectly timed cuts and transitions."
        />
        <FeatureCard
          icon={Zap}
          title="Lightning Fast"
          description="Generate social media-ready clips in seconds, not hours."
        />
        <FeatureCard
          icon={Globe}
          title="Multi-Platform Support"
          description="Optimize your content for TikTok, Instagram, YouTube, and more with a single click."
        />
        <FeatureCard
          icon={Code}
          title="Developer Friendly"
          description="Robust API for seamless integration into your existing workflow."
        />
        <FeatureCard
          icon={Send}
          title="Direct Posting"
          description="Publish your clips directly to your social media accounts from within ClipCraft AI."
        />
      </div>
    </div>
  </section>
);

const Demo = () => {
  const [prompt, setPrompt] = React.useState('');
  const [videoUrl, setVideoUrl] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating video generation
    setVideoUrl('https://example.com/generated-video.mp4');
  };

  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">See ClipCraft AI in Action</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="mb-8">
            <Input
              type="text"
              placeholder="Enter your video idea..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full px-4 py-2 rounded-l-full border-2 border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <Button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-r-full hover:bg-indigo-700">
              Craft Clip
            </Button>
          </form>
          {videoUrl && (
            <div className="aspect-w-16 aspect-h-9">
              <video src={videoUrl} controls className="rounded-lg shadow-lg">
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, features }) => (
  <div className="bg-white p-8 rounded-lg shadow-md border-2 border-indigo-600">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-4xl font-bold mb-6">${price}<span className="text-xl font-normal">/mo</span></p>
    <ul className="mb-8">
      {features.map((feature, index) => (
        <li key={index} className="mb-2 flex items-center">
          <ChevronRight className="text-indigo-600 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <Button className="w-full bg-indigo-600 text-white py-2 rounded-full hover:bg-indigo-700">
      Choose Plan
    </Button>
  </div>
);

const Pricing = () => (
  <section id="pricing" className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          title="Starter"
          price={29}
          features={[
            "50 AI-generated clips per month",
            "720p video quality",
            "Basic editing tools",
            "Email support"
          ]}
        />
        <PricingCard
          title="Pro"
          price={99}
          features={[
            "250 AI-generated clips per month",
            "1080p video quality",
            "Advanced editing tools",
            "Priority support",
            "API access"
          ]}
        />
        <PricingCard
          title="Enterprise"
          price="Custom"
          features={[
            "Unlimited AI-generated clips",
            "4K video quality",
            "Custom AI model training",
            "Dedicated account manager",
            "24/7 phone support"
          ]}
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-indigo-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">ClipCraft AI</h3>
          <p>AI-powered video clips for all your social media needs.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-300">Features</a></li>
            <li><a href="#" className="hover:text-indigo-300">Pricing</a></li>
            <li><a href="#" className="hover:text-indigo-300">API</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-300">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-300">Careers</a></li>
            <li><a href="#" className="hover:text-indigo-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-300">Twitter</a></li>
            <li><a href="#" className="hover:text-indigo-300">LinkedIn</a></li>
            <li><a href="#" className="hover:text-indigo-300">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-indigo-800 text-center">
        <p>&copy; 2024 ClipCraft AI. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Demo />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}