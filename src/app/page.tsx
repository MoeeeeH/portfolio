"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: "Adversary Emulation Lab ",
      description: "Emulated APT29 attack chain in Active Directory lab using Sliver C2 framework. Mapped 15+ MITRE ATT&CK techniques and produced comprehensive red team report.",
      technologies: ["Sliver", "MITRE ATT&CK", "Active Directory", "C2 Framework"],
      status: "Completed",
    },
    {
      id: 2,
      title: "SOAR + EDR Automation",
      description: "Integrated LimaCharlie EDR with Tines SOAR to automate incident response. Built detection workflows for malicious processes and reduced manual effort by 70%.",
      technologies: ["LimaCharlie", "Tines", "Slack", "EDR", "SOAR"],
      status: "Completed",
    },
    {
      id: 3,
      title: "Honeypot Deployment",
      description: "Deployed Cowrie, Dionaea, and Canarytokens honeypots as deception traps. Captured attacker interactions and improved early detection of lateral movement.",
      technologies: ["Cowrie", "Dionaea", "Canarytokens", "SOAR", "Deception Technology"],
      status: "Completed",
    },
    {
      id: 4,
      title: "Email Phishing Detector",
      description: "Developing a machine learning-based system to identify phishing emails by analyzing content, headers, and URLs. Training model on real-world phishing datasets to achieve high detection accuracy.",
      technologies: ["Python", "Machine Learning", "NLP", "TensorFlow", "Email Security"],
      status: "In Progress",
    },
  ];

  // Mock data for skills
  const skills = [
    { 
      category: "Penetration Testing", 
      items: ["Network Pentesting", "Web Application Pentesting", "Social Engineering", "Red Team Operations", "Exploit Development", "Vulnerability Assessment"],
      description: "Advanced penetration testing methodologies and vulnerability assessment techniques across multiple platforms and environments"
    },
    { 
      category: "Security Tools", 
      items: ["Metasploit", "Burp Suite", "Nessus", "Wireshark", "Splunk", "Sliver C2", "Cobalt Strike", "Nmap", "John the Ripper", "Hashcat"],
      description: "Proficient in industry-standard security tools for vulnerability scanning, network analysis, and exploitation frameworks"
    },
    { 
      category: "Programming", 
      items: ["Python", "Bash", "PowerShell", "JavaScript", "C/C++", "SQL", "HTML", "CSS"],
      description: "Strong programming foundation with focus on security-oriented languages and scripting for automation"
    },
    { 
      category: "Networking", 
      items: ["TCP/IP", "Routing & Switching", "Firewalls", "VPN", "DNS", "SD-WAN", "Load Balancing", "Intrusion Detection"],
      description: "Deep understanding of network protocols, security architectures, and defensive network design principles"
    },
  ];

  // Mock data for certifications
  const certifications = [
    {
      id: 1,
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      description: "Comprehensive cybersecurity fundamentals and threat detection skills with practical security operations experience",
      icon: "/google.png",
      link: "https://coursera.org/verify/professional-cert/EVET7RJCLY4N"
    },
    {
      id: 2,
      title: "Cisco Ethical Hacker Certificate",
      issuer: "Cisco",
      description: "Advanced ethical hacking techniques and penetration testing methodologies with hands-on experience in security assessment",
      icon: "/cisco.png",
      link: "https://www.credly.com/badges/88e48f85-9a56-4a57-a782-6eac7ecbec8b/public_url"
    },

    {
      id: 4,
      title: "Microsoft Cybersecurity Analyst Professional Certificate",
      issuer: "Microsoft",
      description: "Comprehensive cybersecurity skills covering threat detection, incident response, security operations, and vulnerability management using Microsoft security tools and technologies",
      icon: "/microsooft.png",
      link: "https://coursera.org/verify/VVRPB5340RO8"
    }
  ];

  // Scroll reveal effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-reveal");
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    setIsVisible(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[rgba(0, 0, 0, 0.95)] text-[#e0f7fa] font-sans overflow-x-hidden relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-[rgba(129, 212, 250, 0.1)] animate-float"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-move"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[rgba(129, 212, 250, 0.05)] filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[rgba(0, 129, 212, 0.05)] filter blur-3xl animate-pulse-slow" style={{animationDelay: "2s"}}></div>
      </div>
      <Head>
        <title>Cybersecurity Portfolio | Mohamed Hassen</title>
        <meta name="description" content="Professional portfolio of Mohamed Hassen - Cybersecurity Specialist at Landshut Technical University" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header className="professional-border bg-[rgba(0, 0, 0, 0.8)] p-4 md:p-6 sticky top-0 z-50 backdrop-blur-xl bg-opacity-90 animate-fadeIn">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0 animate-slideIn">
            <div>
              <div className="text-2xl md:text-3xl font-bold professional-text tracking-wider">My<span className="text-[#81d4fa]">Portfolio</span></div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-1 md:space-x-6 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <Link href="#projects" className={`px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden ${activeTab === "projects" ? "professional-gradient text-white" : "hover:text-[#81d4fa]"}`}>
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-0 bg-[rgba(129, 212, 250, 0.1)] transform scale-x-0 transition-transform duration-300 origin-left"></div>
            </Link>
            <Link href="#skills" className={`px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden ${activeTab === "skills" ? "professional-gradient text-white" : "hover:text-[#81d4fa]"}`}>
              <span className="relative z-10">Skills</span>
              <div className="absolute inset-0 bg-[rgba(129, 212, 250, 0.1)] transform scale-x-0 transition-transform duration-300 origin-left"></div>
            </Link>
            <Link href="#certifications" className={`px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden ${activeTab === "certifications" ? "professional-gradient text-white" : "hover:text-[#81d4fa]"}`}>
              <span className="relative z-10">Certifications</span>
              <div className="absolute inset-0 bg-[rgba(129, 212, 250, 0.1)] transform scale-x-0 transition-transform duration-300 origin-left"></div>
            </Link>
            <Link href="#contact" className={`px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden ${activeTab === "contact" ? "professional-gradient text-white" : "hover:text-[#81d4fa]"}`}>
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-[rgba(129, 212, 250, 0.1)] transform scale-x-0 transition-transform duration-300 origin-left"></div>
            </Link>
          </nav>
          <button className="md:hidden text-[#81d4fa] hover:text-[#b3e5fc] transition-colors animate-fadeIn mt-4 px-4 py-2 rounded-lg border border-[#81d4fa] flex items-center">
            <span className="mr-2">☰</span> Menu
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-24 scroll-reveal professional-grid">
          <div className="max-w-5xl mx-auto text-center px-4 py-20 animate-fadeIn">
            <div className="mb-8 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
             <h1 className=" professional-text mb-6 text-8xl">CYBERSECURITY <span className="text-[#81d4fa]">SPECIALIST</span></h1>
              <p className="text-3xl text-secondary max-w-4xl mx-auto">
                Specializing in offensive security, automation, and deception technologies to defend against sophisticated cyber threats
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="https://drive.google.com/uc?export=download&id=1PXDAgDulEnWk5WXWNSiROvxMHb4YTDXb" download className="btn-secondary">Download CV</a>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="mb-24 scroll-reveal" id="about">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="inline-block bg-gradient-to-r from-[rgba(0, 60, 120, 0.2)] to-[rgba(0, 120, 180, 0.2)] rounded-full px-8 py-3 border border-[#81d4fa] animate-pulse-glow">
                <h2 className="text-3xl md:text-5xl font-bold professional-text tracking-wider uppercase">ABOUT ME</h2>
              </div>
              <div className="divider-centered mb-12"></div>
            </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-[#81d4fa] mb-8 flex items-center justify-center">
                  <img
                    src="/myphoto.png"
                    alt="Mohamed Hassen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold professional-text mb-2">Mohamed Hassen</h3>
                <p className="text-[#81d4fa] mb-6">Cybersecurity Specialist</p>
              </div>

              <div>
                <div className="relative overflow-hidden rounded-2xl border border-[rgba(0, 255, 255, 0.3)] bg-[rgba(0, 20, 40, 0.6)] backdrop-blur-lg transform transition-all duration-500 hover:shadow-2xl hover:shadow-[rgba(0, 255, 255, 0.2)]" style={{ boxShadow: "0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05)" }}>
                  {/* Animated grid background */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-grid-move"></div>

                  <div className="relative z-10 p-8 md:p-12">
                    <div className="flex items-center mb-6">
                      <span className="w-1 h-4 bg-[#00ffff] mr-2"></span>
                      <h3 className="text-xl md:text-2xl font-bold professional-text tracking-wider uppercase">Professional Background</h3>
                    </div>
                    <p className="text-secondary text-base md:text-lg leading-relaxed mb-6">
                      I'm a 23-year-old Computer Science student from Tunisia with a passion for cybersecurity. Currently studying at Landshut Technical University of Applied Sciences, I specialize in offensive security, automation, and deception technologies to protect digital assets.
                    </p>
                    <p className="text-secondary text-base md:text-lg leading-relaxed mb-6">
                      My expertise focuses on developing innovative security solutions, implementing automation frameworks, and creating deception technologies to detect and prevent sophisticated cyber attacks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

        </section>

        {/* Beautiful Section Separator */}
        <div className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#81d4fa] to-transparent"></div>
          </div>
        </div>

        {/* Projects Section */}
        <section className="mb-24 scroll-reveal" id="projects">
          <div className="max-w-7xl mx-auto mt-30">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="inline-block bg-gradient-to-r from-[rgba(0, 60, 120, 0.2)] to-[rgba(0, 120, 180, 0.2)] rounded-full px-8 py-3 border border-[#81d4fa] animate-pulse-glow">
                <h2 className="text-3xl md:text-5xl font-bold professional-text tracking-wider uppercase">SECURITY PROJECTS</h2>
              </div>
              <div className="divider-centered mb-12"></div>
              <p className="text-secondary max-w-3xl mx-auto mt-8 text-lg">Hands-on cybersecurity projects demonstrating practical skills and innovative solutions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`relative group overflow-hidden rounded-2xl border border-[rgba(0, 255, 255, 0.3)] bg-[rgba(0, 20, 40, 0.6)] backdrop-blur-lg animate-fadeInUp transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[rgba(0, 255, 255, 0.2)] ${project.title === "Email Phishing Detector" ? "lg:col-start-2 mx-auto" : ""}`}
                  style={{
                    animationDelay: `${0.2 * (index + 1)}s`,
                    boxShadow: "0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05)"
                  }}
                >
                  {/* Animated grid background */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-grid-move"></div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0, 255, 255, 0)] via-[rgba(0, 255, 255, 0)] to-[rgba(0, 255, 255, 0)] group-hover:from-[rgba(0, 255, 255, 0.1)] group-hover:via-[rgba(0, 255, 255, 0.1)] group-hover:to-[rgba(0, 255, 255, 0.1)] transition-all duration-700"></div>

                  <div className="relative p-6 md:p-8 z-10">
                    <div className="mb-6 flex justify-between items-start">
                      <div>
                        <div className="flex items-center mb-3">
                          <span className="inline-block w-3 h-3 rounded-full bg-[#00ffff] mr-2 animate-pulse"></span>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${project.status === "Completed" ? "border-green-500 text-green-500" : "border-yellow-500 text-yellow-500"}`}>
                            {project.status}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold professional-text mb-2">{project.title}</h3>
                      </div>
                    </div>
                    <p className="text-secondary text-base md:text-lg leading-relaxed mb-6">{project.description}</p>
                    <div className="flex justify-between items-center">
                      {project.title === "SOAR + EDR Automation" ? (
                        <Link href="/soar-edr-details" className="text-[#81d4fa] hover:text-[#b3e5fc] transition-colors flex items-center text-sm font-medium">
                          View Details
                          <span className="ml-2">→</span>
                        </Link>
                      ) : project.title === "Honeypot Deployment" ? (
                        <Link href="/honeypot-details" className="text-[#81d4fa] hover:text-[#b3e5fc] transition-colors flex items-center text-sm font-medium">
                          View Details
                          <span className="ml-2">→</span>
                        </Link>
                      ) : project.title === "Adversary Emulation Lab " ? (
                        <Link href="/adversary-emulation" className="text-[#81d4fa] hover:text-[#b3e5fc] transition-colors flex items-center text-sm font-medium">
                          View Details
                          <span className="ml-2">→</span>
                        </Link>
                      ) : project.title === "Email Phishing Detector" ? (
                        <Link href="/email-phishing-detector" className="text-[#81d4fa] hover:text-[#b3e5fc] transition-colors flex items-center text-sm font-medium">
                          View Details
                          <span className="ml-2">→</span>
                        </Link>
                      ) : (
                        <button className="text-[#81d4fa] hover:text-[#b3e5fc] transition-colors flex items-center text-sm font-medium">
                          View Details
                          <span className="ml-2">→</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beautiful Section Separator */}
        <div className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#81d4fa] to-transparent"></div>
          </div>
        </div>

        {/* Certifications Section */}
        <section className="mb-24 scroll-reveal" id="certifications">
          <div className="max-w-7xl mx-auto mt-30">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="inline-block bg-gradient-to-r from-[rgba(0, 60, 120, 0.2)] to-[rgba(0, 120, 180, 0.2)] rounded-full px-8 py-3 border border-[#81d4fa] animate-pulse-glow">
                <h2 className="text-3xl md:text-5xl font-bold professional-text tracking-wider uppercase">SECURITY CERTIFICATIONS</h2>
              </div>
              <div className="divider-centered mb-8"></div>
              <p className="text-secondary max-w-3xl mx-auto mt-8 text-lg">Industry-recognized certifications validating advanced cybersecurity expertise</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              {certifications.map((cert, index) => (
                <div key={cert.id} className="relative group overflow-hidden rounded-2xl border border-[rgba(0, 255, 255, 0.3)] bg-[rgba(0, 20, 40, 0.6)] backdrop-blur-lg animate-fadeInUp transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[rgba(0, 255, 255, 0.2)]" style={{
                  animationDelay: `${0.2 * (index + 1)}s`,
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05)"
                }}>
                  {/* Animated grid background */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-grid-move"></div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0, 255, 255, 0)] via-[rgba(0, 255, 255, 0)] to-[rgba(0, 255, 255, 0)] group-hover:from-[rgba(0, 255, 255, 0.1)] group-hover:via-[rgba(0, 255, 255, 0.1)] group-hover:to-[rgba(0, 255, 255, 0.1)] transition-all duration-700"></div>
                  <div className="relative p-8 md:p-10">
                    <div className="flex items-start mb-8">
                      <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center rounded-xl mr-6 transform transition-transform duration-300 group-hover:rotate-6">
                        <img src={cert.icon} alt={cert.issuer} className="max-h-16 max-w-16 md:max-h-20 md:max-w-20" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold professional-text mb-2">{cert.title}</h3>
                        <div className="text-[#81d4fa] text-sm">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>
                    <p className="text-secondary text-base md:text-lg leading-relaxed mb-6">{cert.description}</p>
                    <div className="mt-auto">
                      <a href={cert.link || "#"} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-gradient-to-r from-[rgba(0, 60, 120, 0.7)] to-[rgba(0, 120, 180, 0.7)] border border-[#81d4fa] rounded-lg text-[#81d4fa] font-medium hover:from-[rgba(0, 129, 212, 0.8)] hover:to-[rgba(0, 180, 240, 0.8)] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[rgba(0, 129, 212, 0.3)]">
                        View Certification
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beautiful Section Separator */}
        <div className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#81d4fa] to-transparent"></div>
          </div>
        </div>

                {/* Skills Section */}
        <section className="mb-24 scroll-reveal" id="skills">
          <div className="max-w-7xl mx-auto mt-30">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="inline-block bg-gradient-to-r from-[rgba(0, 60, 120, 0.2)] to-[rgba(0, 120, 180, 0.2)] rounded-full px-8 py-3 border border-[#81d4fa] animate-pulse-glow">
                <h2 className="text-3xl md:text-5xl font-bold professional-text tracking-wider uppercase">SKILLS & EXPERTISE</h2>
              </div>
              <div className="divider-centered mb-8"></div>
              <p className="text-secondary max-w-3xl mx-auto mt-8 text-lg">Technical capabilities and specialized knowledge in cybersecurity domains</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              {skills.map((skillCategory, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-2xl border border-[rgba(0, 255, 255, 0.3)] bg-[rgba(0, 20, 40, 0.6)] backdrop-blur-lg animate-fadeInUp transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[rgba(0, 255, 255, 0.2)]"
                  style={{
                    animationDelay: `${0.2 * (index + 1)}s`,
                    boxShadow: "0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05)"
                  }}
                >
                  {/* Animated grid background */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-grid-move"></div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0, 255, 255, 0)] via-[rgba(0, 255, 255, 0)] to-[rgba(0, 255, 255, 0)] group-hover:from-[rgba(0, 255, 255, 0.1)] group-hover:via-[rgba(0, 255, 255, 0.1)] group-hover:to-[rgba(0, 255, 255, 0.1)] transition-all duration-700"></div>
                  <div className="relative p-8 md:p-10">
                    <div className="mb-8">
                      <h3 className="text-xl md:text-2xl font-bold professional-text">{skillCategory.category}</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center text-secondary text-sm md:text-base">
                          <span className="inline-block w-2 h-2 rounded-full bg-[#81d4fa] mr-2"></span>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              {/* Soft Skills Card */}
              <div
                className="relative group overflow-hidden rounded-2xl border border-[rgba(0, 255, 255, 0.3)] bg-[rgba(0, 20, 40, 0.6)] backdrop-blur-lg animate-fadeInUp transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[rgba(0, 255, 255, 0.2)]"
                style={{
                  animationDelay: `${0.2 * (skills.length + 1)}s`,
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05)"
                }}
              >
                {/* Animated grid background */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-grid-move"></div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0, 255, 255, 0)] via-[rgba(0, 255, 255, 0)] to-[rgba(0, 255, 255, 0)] group-hover:from-[rgba(0, 255, 255, 0.1)] group-hover:via-[rgba(0, 255, 255, 0.1)] group-hover:to-[rgba(0, 255, 255, 0.1)] transition-all duration-700"></div>
                <div className="relative p-8 md:p-10">
                  <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-bold professional-text">Soft Skills</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Problem Solving", "Communication", "Teamwork", "Adaptability", "Critical Thinking", "Time Management"].map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center text-secondary text-sm md:text-base">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#81d4fa] mr-2"></span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beautiful Section Separator */}
        <div className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#81d4fa] to-transparent"></div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="mb-24 scroll-reveal" id="contact">
          <div className="max-w-6xl mx-auto px-4 mt-20">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="inline-block bg-gradient-to-r from-[rgba(0, 60, 120, 0.2)] to-[rgba(0, 120, 180, 0.2)] rounded-full px-8 py-3 border border-[#81d4fa] animate-pulse-glow">
                <h2 className="text-3xl md:text-5xl font-bold professional-text tracking-wider uppercase">CONTACT</h2>
              </div>
              <div className="divider-centered mb-8"></div>
              <p className="text-secondary max-w-3xl mx-auto mt-8 text-lg">Let's connect and discuss cybersecurity opportunities</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Email Card */}
                <div className="relative group overflow-hidden rounded-2xl border border-[rgba(0, 255, 255, 0.3)] bg-[rgba(0, 20, 40, 0.6)] backdrop-blur-lg animate-fadeInUp p-6 md:p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[rgba(0, 255, 255, 0.2)]" style={{
                  animationDelay: "0.2s",
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05)"
                }}>
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-grid-move"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0, 255, 255, 0)] via-[rgba(0, 255, 255, 0)] to-[rgba(0, 255, 255, 0)] group-hover:from-[rgba(0, 255, 255, 0.1)] group-hover:via-[rgba(0, 255, 255, 0.1)] group-hover:to-[rgba(0, 255, 255, 0.1)] transition-all duration-700"></div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold professional-text mb-2">Email</h3>
                    <p className="text-secondary">s-mhass2@haw-landshut.de</p>
                  </div>
                </div>
                
                {/* Phone Card */}
                <div className="relative group overflow-hidden rounded-2xl border border-[rgba(0, 255, 255, 0.3)] bg-[rgba(0, 20, 40, 0.6)] backdrop-blur-lg animate-fadeInUp p-6 md:p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[rgba(0, 255, 255, 0.2)]" style={{
                  animationDelay: "0.3s",
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05)"
                }}>
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-grid-move"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0, 255, 255, 0)] via-[rgba(0, 255, 255, 0)] to-[rgba(0, 255, 255, 0)] group-hover:from-[rgba(0, 255, 255, 0.1)] group-hover:via-[rgba(0, 255, 255, 0.1)] group-hover:to-[rgba(0, 255, 255, 0.1)] transition-all duration-700"></div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold professional-text mb-2">Phone</h3>
                    <p className="text-secondary">+49 176 848 67257</p>
                  </div>
                </div>
                
                {/* Location Card */}
                <div className="relative group overflow-hidden rounded-2xl border border-[rgba(0, 255, 255, 0.3)] bg-[rgba(0, 20, 40, 0.6)] backdrop-blur-lg animate-fadeInUp p-6 md:p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[rgba(0, 255, 255, 0.2)]" style={{
                  animationDelay: "0.4s",
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05)"
                }}>
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-grid-move"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0, 255, 255, 0)] via-[rgba(0, 255, 255, 0)] to-[rgba(0, 255, 255, 0)] group-hover:from-[rgba(0, 255, 255, 0.1)] group-hover:via-[rgba(0, 255, 255, 0.1)] group-hover:to-[rgba(0, 255, 255, 0.1)] transition-all duration-700"></div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold professional-text mb-2">Location</h3>
                    <p className="text-secondary">Bayern, Germany</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-12 text-center animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
                <h3 className="text-xl font-bold professional-text mb-6">Connect With Me</h3>
                <div className="flex justify-center space-x-6">

                  <a href="https://github.com/MoeeeeH" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[rgba(0, 60, 120, 0.3)] flex items-center justify-center hover:bg-[rgba(0, 129, 212, 0.5)] transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[rgba(0, 129, 212, 0.3)]">
                    <svg className="w-8 h-8 text-[#81d4fa]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="mailto:s-mhass2@haw-landshut.de" className="w-14 h-14 rounded-full bg-[rgba(0, 60, 120, 0.3)] flex items-center justify-center hover:bg-[rgba(0, 129, 212, 0.5)] transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[rgba(0, 129, 212, 0.3)]">
                    <svg className="w-8 h-8 text-[#81d4fa]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="professional-border-t py-8 px-4 bg-[rgba(0, 0, 0, 0.8)]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-4 md:mb-0">
              <div className="text-lg font-bold professional-text">My<span className="text-[#81d4fa]">Portfolio</span></div>
              <p className="text-xs text-secondary mt-1">© {new Date().getFullYear()} Mohamed Hassen. All rights reserved.</p>
            </div>            
          </div>
        </div>
      </footer>
    </div>
  );
}
