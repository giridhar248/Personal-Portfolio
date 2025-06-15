"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "work", "skills", "projects", "contact"]
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

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
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
                Giridhar Reddy
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "about", label: "About", icon: User },
                { id: "education", label: "Education", icon: GraduationCap },
                { id: "work", label: "Work", icon: Briefcase },
                { id: "skills", label: "Skills", icon: Code },
                { id: "projects", label: "Projects", icon: FolderOpen },
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
                  I'm a <span className="text-purple-400 font-semibold">Software Engineer</span>
                </p>
                <p className="text-gray-400 text-lg max-w-2xl">
                  Welcome to my portfolio. A highly motivated Software Engineer with expertise in AI, cloud
                  technologies, and full-stack development, passionate about building scalable AI systems and exploring
                  multi-agent LLM platforms.
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
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
                asChild
              >
                <Link href="/resume.pdf" target="_blank">
                  View Resume
                </Link>
              </Button>
            </div>
            <div className="flex space-x-6">
              <Link
                href="mailto:giridharreddy02@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/giridhar-reddy-46759b210"
                target="_blank"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/giridhar248"
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
                alt="Giridhar Reddy Profile Picture"
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
                    A highly motivated Software Engineer with expertise in C/C++, Java, JavaScript, and full-stack
                    development, passionate about AI, cloud technologies, and emerging tech innovations. Enthusiastic
                    about building scalable AI systems and exploring multi-agent LLM platforms with hands-on experience
                    in Python, LangChain, and OpenAI technologies.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-purple-400 font-semibold">Current Focus</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>• AI & Machine Learning</li>
                        <li>• Multi-agent LLM Systems</li>
                        <li>• Cloud Technologies</li>
                        <li>• Full-stack Development</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-purple-400 font-semibold">Interests</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Emerging Tech Innovations</li>
                        <li>• Scalable System Design</li>
                        <li>• Open Source Contribution</li>
                        <li>• Tech Community Building</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">giridharreddy02@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">+1 409 757 0402</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Beaumont, TX</span>
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
                    <p className="text-gray-400">Beaumont, TX</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300 mt-4 lg:mt-0">
                    <Calendar className="w-5 h-5" />
                    <span>08/2023 – 08/2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Bachelor's of Technology (Computer Science)</h3>
                    <p className="text-purple-400 font-semibold text-lg">Lovely Professional University</p>
                    <p className="text-gray-400">Phagwara, India</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300 mt-4 lg:mt-0">
                    <Calendar className="w-5 h-5" />
                    <span>07/2020 – 06/2023</span>
                  </div>
                </div>
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
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">R&D Software Development Engineer Intern</h3>
                    <p className="text-purple-400 font-semibold text-lg mb-1">TejasNetworks</p>
                    <p className="text-gray-400 mb-4">Bangalore, India</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Calendar className="w-5 h-5" />
                    <span>10/2022 – 07/2023</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Implemented OSPF Database Limit and Sham Links in C++, improving routing efficiency and reducing
                      network congestion by 25%.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Developed CLI-based tools for network configuration and troubleshooting, streamlining debugging
                      workflows and enhancing system reliability.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Frontend Developer Intern</h3>
                    <p className="text-purple-400 font-semibold text-lg mb-1">Stalcon Solutions</p>
                    <p className="text-gray-400 mb-4">Hyderabad, India</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Calendar className="w-5 h-5" />
                    <span>06/2022 – 08/2022</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Developed responsive UI pages to enhance the user experience.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Utilized React.js and Tailwind CSS to create dynamic, visually appealing interfaces and integrated
                      RESTful APIs for efficient data fetching.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Conducted usability testing and optimized web performance, reducing load times by 30% and
                      improving overall responsiveness.
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
                  {["JavaScript", "C/C++", "Java", "Python", "Shell Scripting"].map((skill) => (
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
                  {["SQL", "Hive (HDFS)", "MongoDB", "Cassandra"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-purple-400 text-lg">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS", "Node.js", "React.js", "REST APIs"].map((skill) => (
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
                <CardTitle className="text-purple-400 text-lg">Data Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "AWS Cloud", "EC2", "S3", "RDS", "ECR"].map((skill) => (
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
                    AI-Agents-for-Medical-Diagnostics
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
                  <span>01/2025 – 03/2025</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {["Python", "GPT-4o", "Generative AI", "Prompt Engineering"].map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-500/30 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Built multi-agent AI diagnostic system with specialized GPT-4o agents (Cardiologist,
                        Psychologist, Pulmonologist) for comprehensive medical case analysis
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Developed intelligent synthesis module combining multi-specialty AI insights to generate unified
                        diagnostic summaries and identify top 3 potential health issues per patient
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
                    Event Finder App - TicketMasterApp
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
                  <span>09/2024 – 11/2024</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {["Android Studio", "Java/Kotlin", "TicketMaster API", "Google Maps API", "Room Database"].map(
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
                        Developed Android event discovery app using TicketMaster and Google Maps APIs to browse global
                        events with location-based search, favorites, and social sharing features
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Implemented MVVM architecture with Navigation Graph, Room database, and Dagger dependency
                        injection for scalable and maintainable code structure
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
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
                      <p className="text-gray-400">giridharreddy02@gmail.com</p>
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
                      <p className="text-gray-400">+1 409 757 0402</p>
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
                      <p className="text-gray-400">Beaumont, TX</p>
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
                    href="mailto:giridharreddy02@gmail.com"
                    className="w-12 h-12 bg-slate-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/giridhar-reddy-46759b210"
                    target="_blank"
                    className="w-12 h-12 bg-slate-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </Link>
                  <Link
                    href="https://github.com/giridhar248"
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
                    <Link href="mailto:giridharreddy02@gmail.com">Send Message</Link>
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
              © {new Date().getFullYear()} Giridhar Reddy Mekapotula. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {[
                { id: "about", label: "About" },
                { id: "work", label: "Work" },
                { id: "projects", label: "Projects" },
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
