"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Calendar,
  GraduationCap,
  Code,
  User,
  Briefcase,
  FolderOpen,
  MessageCircle,
  FileText,
  Clock,
  ArrowRight,
  Lock,
  Heart,
  Eye,
  EyeOff,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [showPasswordDialog, setShowPasswordDialog] = useState(false)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState<string | null>(null)

  // Password for the protected blog (you can change this)
  const BLOG_PASSWORD = "annanniyavani"

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "work", "skills", "projects", "blogs", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleBlogClick = (blogId: string, isProtected = false) => {
    if (isProtected) {
      setSelectedBlog(blogId)
      setShowPasswordDialog(true)
    } else {
      // Handle regular blog click (you can add navigation logic here)
      console.log(`Clicked on blog: ${blogId}`)
    }
  }

  const handlePasswordSubmit = () => {
    if (password === BLOG_PASSWORD) {
      setIsPasswordCorrect(true)
      setShowPasswordDialog(false)
      // Redirect to the Medium blog
      window.open("https://medium.com/@giridharreddy2212/love-at-first-sight-fairy-tails-e7c2c971f28f", "_blank")
      // Reset states
      setPassword("")
      setSelectedBlog(null)
    } else {
      // Show error (you can add error state here)
      alert("Incorrect password. Please try again.")
      setPassword("")
    }
  }

  const handleDialogClose = () => {
    setShowPasswordDialog(false)
    setPassword("")
    setSelectedBlog(null)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Password Protection Dialog */}
      <Dialog open={showPasswordDialog} onOpenChange={handleDialogClose}>
        <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2 text-purple-400">
              <Lock className="w-5 h-5" />
              <span>Protected Content</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-300 text-sm">
              This blog post contains personal content and requires a password to access.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white pr-10"
                  onKeyPress={(e) => e.key === "Enter" && handlePasswordSubmit()}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <div className="flex space-x-3">
                <Button
                  onClick={handlePasswordSubmit}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                >
                  Access Blog
                </Button>
                <Button
                  variant="outline"
                  onClick={handleDialogClose}
                  className="border-slate-600 text-gray-300 hover:bg-slate-700 bg-transparent"
                >
                  Cancel
                </Button>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center">Hint: can be her Name😉</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <path
              d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z"
              fill="url(#gradient1)"
              className="animate-pulse"
            />
            <path
              d="M0,500 Q400,300 800,500 T1200,500 L1200,800 L0,800 Z"
              fill="url(#gradient2)"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Giridhar M
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "about", label: "About", icon: User },
                { id: "education", label: "Education", icon: GraduationCap },
                { id: "work", label: "Work", icon: Briefcase },
                { id: "skills", label: "Skills", icon: Code },
                { id: "projects", label: "Projects", icon: FolderOpen },
                { id: "blogs", label: "Blogs", icon: FileText },
                { id: "contact", label: "Contact", icon: MessageCircle },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === id
                      ? "text-purple-400 bg-purple-500/20"
                      : "text-gray-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-purple-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">AVAILABLE FOR OPPORTUNITIES</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Giridhar
                </span>{" "}
                👋
              </h1>
              <div className="text-xl lg:text-2xl text-gray-300 space-y-2">
                <p>
                  I'm a <span className="text-purple-400 font-semibold">Backend Software Engineer</span>
                </p>
                <p className="text-gray-400 text-lg max-w-2xl">
                  Backend Software Engineer with 3+ years building scalable microservices and RESTful APIs for
                  enterprise fintech at PayPal and J.P. Morgan. I ship reliable 0-to-1 backend systems and AI/LLM-powered
                  automation that reduce manual effort and improve performance. AWS Certified Solutions Architect.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="/resume.pdf" target="_blank">
                  View Resume
                </Link>
              </Button>
            </div>
            <div className="flex space-x-6">
              <Link
                href="mailto:giridharswe12@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/giridharswe"
                target="_blank"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/giridharswe"
                target="_blank"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/2.jpg"
                alt="Giridhar M Profile Picture"
                width={400}
                height={500}
                className="rounded-2xl shadow-2xl object-cover w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-20 pb-20">
        {/* About Section */}
        <section id="about" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              About <span className="text-purple-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Backend Software Engineer with 3+ years building scalable microservices and RESTful APIs for
                    enterprise fintech at PayPal and J.P. Morgan. Focused on shipping reliable 0-to-1 backend systems and
                    AI/LLM-powered automation that reduce manual effort and improve performance.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    AWS Certified Solutions Architect skilled in Java, Spring Boot, Python, distributed systems, and
                    system design. Experienced building secure, high-throughput services, integrating LLM APIs, and
                    delivering production-ready solutions across cloud-native environments in Agile teams.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-purple-400 font-semibold">Backend Expertise</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Java, Spring Boot & Python</li>
                        <li>• RESTful Microservices</li>
                        <li>• Distributed Systems & System Design</li>
                        <li>• AI/LLM Automation</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-purple-400 font-semibold">Cloud & DevOps</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>• AWS (Certified Solutions Architect)</li>
                        <li>• Docker & Kubernetes</li>
                        <li>• Kafka & Event-Driven Architecture</li>
                        <li>• CI/CD & Agile Development</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">giridharswe12@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">(409) 219-4463</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Austin, TX</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-purple-400">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">M.S. Computer Science</h3>
                    <p className="text-purple-400 font-semibold text-lg">Lamar University</p>
                    <p className="text-gray-400">Beaumont, TX · GPA: 4.0</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300 mt-4 lg:mt-0">
                    <Calendar className="w-5 h-5" />
                    <span>July 2023 - May 2025</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Relevant Coursework: Data Structures & Algorithms, Operating Systems, Distributed Systems, Database
                  Systems, Computer Networks
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">Awards & Certifications</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <span className="text-white font-semibold">Outstanding Graduate Student Award</span> — Lamar
                      University (May 2025). Awarded for academic excellence (4.0 GPA) and graduate teaching
                      assistantship contributions.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <span className="text-white font-semibold">AWS Certified Solutions Architect – Associate</span>{" "}
                      (Jul 2023).
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Work <span className="text-purple-400">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-8">
            {/* Software Engineer - Current Role */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Software Engineer</h3>
                    <p className="text-purple-400 font-semibold text-lg mb-1">PayPal</p>
                    <p className="text-gray-400 mb-4">Python, AWS, MCP, Agentic AI, Microservices</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Calendar className="w-5 h-5" />
                    <span>Jan 2025 – Present</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Engineered scalable backend services using Python and AWS for regulatory compliance systems, reducing maintenance effort by 40% and improving service reliability.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Led design and delivery of reusable Python and AWS backend service libraries for PayPal/Venmo, adopted across 5 product teams and validated through comprehensive unit and integration testing.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Built and deployed Model Context Protocol (MCP) servers powering end-to-end agentic AI workflows, automating manual engineering tasks and eliminating approximately 10 hours/week of repetitive work.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Developed a self-service merchant auto-withdrawal configuration tool for Account Managers and Sales, slashing request turnaround from approximately 6 hours to under 1 minute.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Delivered a self-service utility for the CSM team on PayPal Automatic Transfers, reducing inbound queries to the Product Development team by 80%.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* J.P. Morgan */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Software Engineer</h3>
                    <p className="text-purple-400 font-semibold text-lg mb-1">J.P. Morgan</p>
                    <p className="text-gray-400 mb-4">Java, Spring Boot, Kafka, LLM APIs, Cloud Migration</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Calendar className="w-5 h-5" />
                    <span>Sep 2021 – Jun 2023</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Architected middleware for the Asset Management Sales Experience Platform, creating a single authoritative database for 1M+ annual sales, lead, and client records across integrated enterprise applications.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Integrated LLM APIs to automate client-conversation transcription and activity logging, saving advisors 300+ hours annually and improving post-interaction efficiency.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Engineered secure Spring Boot microservices processing 2M+ Kafka events/day with end-to-end cryptography, and led on-premises to cloud data migration (authored a published white paper).
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Won 2nd place among 100+ teams at the 2022 JPMC Global Hackathon and 2nd among 90+ teams in 2021 for engineering innovation.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Technical <span className="text-purple-400">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-purple-400 text-lg">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Java", "C/C++", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-purple-400 text-lg">Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Redis"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-purple-400 text-lg">Frameworks & Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Spring Boot", "React.js", "Angular", "Node.js", "Express.js", "Next.js", "FastAPI", "Kafka", "JUnit", "Mockito"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-green-500/20 text-green-300 border-green-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-purple-400 text-lg">Cloud & DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Git"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-orange-500/20 text-orange-300 border-orange-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="text-purple-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                    AuraNow – AI-Powered Social Media Analytics
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-400">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-400">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>02/2025</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {["Python", "FastAPI", "Redis", "MongoDB", "Docker", "NLP/ML", "UMAP", "HDBSCAN"].map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-500/30 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Architected a microservices-based analytics platform with decoupled FastAPI REST services and
                        background workers, using Redis queues for asynchronous job processing and MongoDB for
                        persistent analytics, enabling horizontal scalability and fault isolation.
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Containerized the full stack (API, worker, Redis, MongoDB) with Docker and Docker Compose, adding
                        service health checks for reproducible, one-command deployments.
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Engineered an end-to-end NLP/ML pipeline ingesting YouTube comments with embeddings, UMAP
                        dimensionality reduction, HDBSCAN clustering, and RAPTOR-style hierarchical summarization for
                        fast, context-aware insight retrieval.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                    Multi-Agent NL2SQL System (RAG)
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-400">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-400">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>12/2024</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {["Advanced RAG", "PostgreSQL Vector", "Chain-of-Thought", "Azure OpenAI", "BERT", "Semantic Search"].map(
                      (tech) => (
                        <Badge key={tech} variant="outline" className="border-blue-500/30 text-blue-300">
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Architected a multi-agent NL-to-SQL system (RAG + LLMs) converting natural language into
                        executable SQL via a query-enhancement, schema-retrieval, table-selection, column-pruning, and
                        generation pipeline.
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Fine-tuned a BERT classifier (90% recall) over a vector-retrieval layer for table selection,
                        reducing latency from 18s (GPU) to 0.28s (CPU) while improving accuracy.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Blogs Section */}
        <section id="blogs" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              My <span className="text-purple-400">Blogs</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Sharing insights, experiences, and knowledge about technology, AI, and life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 - AI Agents (Featured) */}
            <Card
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer"
              onClick={() => handleBlogClick("ai-agents")}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <Code className="w-12 h-12 text-purple-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>January 15, 2025</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>5 min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      Building Multi-Agent AI Systems: Lessons Learned
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Exploring the challenges and breakthroughs in building a RAG-powered multi-agent NL2SQL pipeline
                      that turns natural language into executable SQL.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-purple-500/30 text-purple-300 text-xs">
                        AI
                      </Badge>
                      <Badge variant="outline" className="border-blue-500/30 text-blue-300 text-xs">
                        Python
                      </Badge>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blog Post 2 */}
            <Card
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer"
              onClick={() => handleBlogClick("journey")}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-12 h-12 text-green-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>December 28, 2024</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>7 min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      My Journey from India to US: A Software Engineer's Perspective
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Sharing my experience of transitioning from working in India to pursuing a Master's degree in the
                      US and the lessons learned along the way.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-green-500/30 text-green-300 text-xs">
                        Career
                      </Badge>
                      <Badge variant="outline" className="border-orange-500/30 text-orange-300 text-xs">
                        Personal
                      </Badge>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blog Post 3 */}
            <Card
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer"
              onClick={() => handleBlogClick("networking")}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <Code className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>November 22, 2024</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>6 min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      Processing 2M+ Kafka Events a Day: Scaling Event-Driven Microservices
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      How I engineered secure, high-throughput Spring Boot microservices at J.P. Morgan and the
                      trade-offs of event-driven architecture at scale.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-blue-500/30 text-blue-300 text-xs">
                        Kafka
                      </Badge>
                      <Badge variant="outline" className="border-purple-500/30 text-purple-300 text-xs">
                        Microservices
                      </Badge>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blog Post 5 */}
            <Card
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer"
              onClick={() => handleBlogClick("grad-school")}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-12 h-12 text-pink-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>October 15, 2024</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>8 min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      Graduate School in the US: Tips for International Students
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Essential advice for international students pursuing Computer Science graduate programs in the US,
                      from applications to campus life.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-pink-500/30 text-pink-300 text-xs">
                        Education
                      </Badge>
                      <Badge variant="outline" className="border-green-500/30 text-green-300 text-xs">
                        Tips
                      </Badge>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blog Post 6 */}
            <Card
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer"
              onClick={() => handleBlogClick("ai-healthcare")}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                    <User className="w-12 h-12 text-yellow-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>September 30, 2024</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>5 min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      Automating Engineering Workflows with MCP Servers and Agentic AI
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      How I built Model Context Protocol servers powering end-to-end agentic AI workflows that eliminated
                      ~10 hours/week of repetitive engineering work.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-yellow-500/30 text-yellow-300 text-xs">
                        Agentic AI
                      </Badge>
                      <Badge variant="outline" className="border-purple-500/30 text-purple-300 text-xs">
                        MCP
                      </Badge>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                </div>
              </CardContent>
            </Card>

            </div>

          {/* View All Blogs Button */}
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              View All Blogs
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Get In <span className="text-purple-400">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. Let's connect and discuss how we can work
              together!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-gray-400">giridharswe12@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <p className="text-gray-400">(409) 219-4463</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Location</h4>
                      <p className="text-gray-400">Austin, TX</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <div className="flex justify-center space-x-6">
                  <Link
                    href="mailto:giridharswe12@gmail.com"
                    className="w-12 h-12 bg-slate-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/giridharswe"
                    target="_blank"
                    className="w-12 h-12 bg-slate-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </Link>
                  <Link
                    href="https://github.com/giridharswe"
                    target="_blank"
                    className="w-12 h-12 bg-slate-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </Link>
                </div>
              </div>
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <h4 className="text-white font-semibold mb-4">Ready to collaborate?</h4>
                  <p className="text-gray-400 mb-6">
                    I'm currently open to new opportunities and exciting projects. Let's discuss how we can work
                    together to create something amazing!
                  </p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    <Link href="mailto:giridharswe12@gmail.com">Send Message</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900/80 border-t border-slate-700/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Giridhar M. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {[
                { id: "about", label: "About" },
                { id: "work", label: "Work" },
                { id: "projects", label: "Projects" },
                { id: "blogs", label: "Blogs" },
                { id: "contact", label: "Contact" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
