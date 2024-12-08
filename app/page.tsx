import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Bot, Brain, CalendarIcon, Code, Cog, LineChart, MessageSquare, Menu, Rocket, Settings, Sparkles, X, ArrowUpRight, Wrench } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${cursorPosition.x}px`;
      cursorRef.current.style.top = `${cursorPosition.y}px`;
    }
  }, [cursorPosition]);

  return (
    <div className="min-h-screen bg-zinc-900 text-white relative">
      <div ref={cursorRef} className="cursor-swirl" />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Cog className="w-8 h-8 text-yellow-400 animate-spin-slow" />
            <span className="text-xl">
              <span className="font-normal">AutomateIt</span>
              <span className="font-bold">Now</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm hover:text-yellow-400 transition-colors">Features</Link>
            <Link href="#pricing" className="text-sm hover:text-yellow-400 transition-colors">Pricing</Link>
            <Link href="#contact-me">
              <Button variant="default" className="bg-yellow-400 text-zinc-900 hover:bg-yellow-500">Get Started</Button>
            </Link>
          </nav>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-900 bg-opacity-90 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link href="#features" className="text-lg hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</Link>
            <Link href="#pricing" className="text-lg hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link href="#contact-me" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="default" className="bg-yellow-400 text-zinc-900 hover:bg-yellow-500">Get Started</Button>
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-br from-white to-yellow-300 text-transparent bg-clip-text font-light">
            Transform Your Business with AI Automation
          </h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Harness the power of artificial intelligence to streamline operations, boost productivity, and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 text-zinc-900 hover:bg-yellow-500">
              Schedule Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
              View Solutions
            </Button>
          </div>
        </div>
      </section>
      <div className="h-px bg-gradient-to-r from-black via-yellow-500 to-black"></div>

      <div className="gradient-divider w-full"></div>

      {/* Features Grid */}
<section id="features" className="py-20 px-4 bg-zinc-800/50">
  <div className="container mx-auto">
    <h2 className="text-3xl text-center mb-12 bg-gradient-to-br from-white to-yellow-300 text-transparent bg-clip-text font-light">Powerful AI Solutions</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <Card key={index} className="bg-zinc-800 border-zinc-700 hover:border-yellow-400 transition-colors">
          <CardContent className="p-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
              <feature.icon className="w-10 h-10 text-yellow-400" />
            </div>
            <h3 className="text-xl mb-2 bg-gradient-to-br from-white to-yellow-300 text-transparent bg-clip-text text-center">{feature.title}</h3>
            <p className="text-zinc-300 text-center">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Service Models Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center mb-12 bg-gradient-to-br from-white to-yellow-300 text-transparent bg-clip-text font-light">Service Models</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-zinc-800 to-zinc-900 border-zinc-700 hover:border-yellow-400 transition-colors">
              <CardContent className="p-8 rounded-lg">
                <h3 className="text-2xl mb-4 bg-gradient-to-br from-white to-yellow-300 text-transparent bg-clip-text">Build & Bounce</h3>
                <p className="text-lg text-zinc-300 mb-4">Delivering Value with Autonomy</p>
                <ul className="space-y-4 text-zinc-300">
                  <li className="flex items-start">
                    <ArrowUpRight className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>One-time project fee to design and implement a customized solution</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowUpRight className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>"Hand over the keys" for full ownership and control</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowUpRight className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>Complete documentation and training included</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowUpRight className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>Independent system operation after completion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-800 to-zinc-900 border-zinc-700 hover:border-yellow-400 transition-colors">
              <CardContent className="p-8 rounded-lg">
                <h3 className="text-2xl mb-4 bg-gradient-to-br from-white to-yellow-300 text-transparent bg-clip-text">Build & Maintain</h3>
                <p className="text-lg text-zinc-300 mb-4">Building Lasting Solutions with Ongoing Support</p>
                <ul className="space-y-4 text-zinc-300">
                  <li className="flex items-start">
                    <Wrench className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>One-time project fee for custom system implementation</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>Ongoing maintenance and support</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>Choose from three maintenance package levels</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>Continuous improvements and optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maintenance Packages Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-zinc-800 to-zinc-900">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center mb-12 bg-gradient-to-br from-white to-yellow-300 text-transparent bg-clip-text font-light">Maintenance Packages</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="bg-gradient-to-r from-zinc-800 to-zinc-900 border-zinc-700 hover:border-yellow-400 transition-colors shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-2 bg-gradient-to-br from-white to-yellow-300 text-transparent bg-clip-text">Basic</h3>
                <div className="text-3xl mb-4 text-zinc-300">$200<span className="text-lg text-zinc-400">/month</span></div>
                <p className="text-zinc-400 mb-6">Maintenance Only</p>
                <ul className="space-y-4 mb-8 text-zinc-300">
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>Basic bug fixes and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>Service costs paid by client</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-zinc-800 to-zinc-900 border-zinc-700 hover:border-yellow-400 transition-colors shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-2 bg-gradient-to-br from-white to-yellow-300 text-transparent bg-clip-text">Standard</h3>
                <div className="text-3xl mb-4 text-zinc-300">$350<span className="text-lg text-zinc-400">/month</span></div>
                <p className="text-zinc-400 mb-6">Maintenance & Improve</p>
                <ul className="space-y-4 mb-8 text-zinc-300">
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>All basic features plus:</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>Regular improvements</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>Additional feature development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-zinc-800 to-zinc-900 border-zinc-700 hover:border-yellow-400 transition-colors shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-2 bg-gradient-to-br from-white to-yellow-300 text-transparent bg-clip-text">Premium</h3>
                <div className="text-3xl mb-4 text-zinc-300">$500<span className="text-lg text-zinc-400">/month</span></div>
                <p className="text-zinc-400 mb-6">Maintain, Improve & Host</p>
                <ul className="space-y-4 mb-8 text-zinc-300">
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>All standard features plus:</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>Hosting included</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>Service costs included</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 mr-2 text-yellow-400 mt-1" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
<section className="py-20 px-4 bg-zinc-900 relative overflow-hidden">
  <div className="container mx-auto">
    <h2 className="text-3xl text-center mb-16 bg-gradient-to-br from-white to-yellow-300 text-transparent bg-clip-text font-light">Our Process</h2>
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-500/20 to-zinc-800 flex items-center justify-center mb-4 border border-yellow-500/20">
              <step.icon className="w-12 h-12 text-yellow-400" />
            </div>
            <h3 className="text-xl mb-2 bg-gradient-to-br from-white to-yellow-300 text-transparent bg-clip-text">{step.title}</h3>
            <p className="text-zinc-400 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-zinc-800/50 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl text-center mb-12 bg-gradient-to-br from-white to-yellow-300 text-transparent bg-clip-text font-light">Transparent Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`bg-gradient-to-r from-zinc-800 to-zinc-900 border-zinc-700 transition-colors ${plan.featured ? 'ring-2 ring-yellow-400 hover:border-yellow-400' : 'hover:border-zinc-600'}`}>
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-2 bg-gradient-to-br from-white to-yellow-300 text-transparent bg-clip-text">{plan.name}</h3>
                  <div className="text-3xl mb-6 text-zinc-300">
                    ${plan.price}<span className="text-lg text-zinc-400"> One Time Fee</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-zinc-300">
                        <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-yellow-700 to-yellow-500 text-white hover:from-yellow-800 hover:to-yellow-600">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl mb-6 bg-gradient-to-br from-white to-yellow-300 text-transparent bg-clip-text font-light">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Join the AI revolution and stay ahead of the competition.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-yellow-700 to-yellow-500 text-white hover:from-yellow-800 hover:to-yellow-600">
            Schedule Consultation
          </Button>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact-me" className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center mb-12 bg-gradient-to-br from-white to-yellow-300 text-transparent bg-clip-text font-light">Contact Me</h2>
          <div className="max-w-md mx-auto">
            <div className="bg-zinc-800 border-2 border-yellow-500 rounded-lg p-8 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md bg-zinc-700 border-transparent focus:border-yellow-500 focus:bg-zinc-900 focus:ring-0 text-zinc-300" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md bg-zinc-700 border-transparent focus:border-yellow-500 focus:bg-zinc-900 focus:ring-0 text-zinc-300" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md bg-zinc-700 border-transparent focus:border-yellow-500 focus:bg-zinc-900 focus:ring-0 text-zinc-300" placeholder="Your message"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-700 to-yellow-500 hover:from-yellow-800 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-zinc-700">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Cog className="w-8 h-8 text-yellow-400 animate-spin-slow" />
                <span className="text-xl">
                  <span className="font-normal">AutomateIt</span>
                  <span className="font-bold">Now</span>
                </span>
              </Link>
              <p className="text-zinc-400">
                Transforming businesses through intelligent automation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-yellow-400">Solutions</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>Process Automation</li>
                <li>AI Integration</li>
                <li>Custom Development</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-yellow-400">Company</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-yellow-400">Legal</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-700 text-center text-zinc-400">
            <p>&copy; {new Date().getFullYear()} AutomateItNow Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Streamline your workflows with intelligent automation that learns and adapts."
  },
  {
    icon: LineChart,
    title: "Performance Analytics",
    description: "Get detailed insights into your automation performance and ROI."
  },
  {
    icon: Code,
    title: "Custom Integration",
    description: "Seamlessly integrate AI solutions with your existing systems."
  },
  {
    icon: MessageSquare,
    title: "24/7 Support",
    description: "Round-the-clock assistance from our expert team."
  },
  {
    icon: Settings,
    title: "Scalable Solutions",
    description: "Solutions that grow with your business needs."
  },
  {
    icon: Rocket,
    title: "Quick Deployment",
    description: "Get up and running with AI automation in days, not months."
  }
]

const steps = [
  {
    icon: CalendarIcon,
    title: "Schedule Consultation",
    description: "Book a call with our experts to discuss your needs."
  },
  {
    icon: Cog,
    title: "Custom Solution Design",
    description: "We create a tailored automation strategy for your business."
  },
  {
    icon: Rocket,
    title: "Implementation",
    description: "Quick deployment with ongoing support and optimization."
  }
]

const pricingPlans = [
  {
    name: "Standard",
    price: "1999",
    features: [
      "Up to 5 automation workflows",
      "Basic analytics",
      "Email support",
      "Monthly updates",
      "API access"
    ],
    featured: false
  },
  {
    name: "Custom",
    price: "3499+",
    features: [
      "Unlimited automation workflows",
      "Advanced analytics & reporting",
      "24/7 priority support",
      "Weekly updates",
      "Custom integrations",
      "Dedicated account manager"
    ],
    featured: true
  }
]

const processSteps = [
  {
    icon: CalendarIcon,
    title: "Consultation",
    description: "Discuss your needs and goals."
  },
  {
    icon: Cog,
    title: "Design",
    description: "We design a custom solution for you."
  },
  {
    icon: Code,
    title: "Development",
    description: "We build your AI-powered solution."
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We deploy and launch your solution."
  }
]

