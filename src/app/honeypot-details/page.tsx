"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";


export default function HoneypotDetails() {
  const [isVisible, setIsVisible] = useState(false);

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

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-5 animate-grid-move"></div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[rgba(0, 129, 212, 0.05)] filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[rgba(0, 129, 212, 0.05)] filter blur-3xl animate-pulse-slow" style={{animationDelay: "2s"}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <Head>
          <title>Honeypot Deployment Project Details | Mohamed Hassen</title>
          <meta name="description" content="Detailed view of Honeypot Deployment project by Mohamed Hassen" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <div className="mb-12 scroll-reveal">
            <Link href="/" className="inline-flex items-center text-[#81d4fa] hover:text-[#b3e5fc] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Portfolio
            </Link>
          </div>

          {/* Project header */}
          <div className="mb-20 scroll-reveal animate-scale-in">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent animate-glow">Honeypot Deployment</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mb-6 animate-fade-in"></div>
            <p className="text-xl text-[#b3e5fc] mb-8 animate-fade-in">Designing and implementing a honeypot network to detect and analyze malicious activities</p>
          </div>

          {/* Project Overview */}
          <div className="mb-24 scroll-reveal w-full">
            <div className="inline-block mb-12">
              <h2 className="text-6xl font-bold text-[#81d4fa] bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent animate-glow">Project Overview</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mt-3"></div>
            </div>

            <div className="mb-8">
              <div className="space-y-6 max-w-none">
                <p className="text-secondary text-xl leading-relaxed">In the ever-evolving landscape of cybersecurity, honeypots serve as valuable tools for detecting, deflecting, and studying attempts at unauthorized use of information systems. This project focuses on designing and deploying a comprehensive honeypot network to gather intelligence on attack patterns, tactics, and techniques used by malicious actors.</p>
                <p className="text-secondary text-xl leading-relaxed">The honeypot deployment includes various types of honeypots, including low-interaction honeypots for early warning systems and high-interaction honeypots for in-depth analysis of attacker behavior. The project also incorporates automated alerting mechanisms and data analysis pipelines to process and visualize the collected data.</p>
                <p className="text-secondary text-xl leading-relaxed">By implementing this honeypot infrastructure, we aim to enhance threat intelligence capabilities, improve incident response times, and gain valuable insights into emerging threats targeting our organization and similar entities in the industry.</p>
              </div>
            </div>
          </div>



          {/* Objectives */}
          <div className="mb-32 scroll-reveal w-full">
            <div className="inline-block mb-16">
              <h2 className="text-6xl font-bold text-[#81d4fa] bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent animate-glow">Objectives</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mt-3"></div>
            </div>
            <div className="space-y-8 w-full">
              <div className="flex items-start space-x-4 pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold animate-scale-in">1</div>
                <div>
                  <p className="text-secondary text-lg">Deploy a fully functional honeypot environment using T-Pot in a virtual machine.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-right">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold animate-scale-in">2</div>
                <div>
                  <p className="text-secondary text-lg">Capture and analyze real-world attack traffic against exposed services.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold animate-scale-in">3</div>
                <div>
                  <p className="text-secondary text-lg">Visualize data using Kibana dashboards to identify attack trends.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-right">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold animate-scale-in">4</div>
                <div>
                  <p className="text-secondary text-lg">Strengthen practical knowledge of threat intelligence, intrusion detection, and data analysis.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold animate-scale-in">5</div>
                <div>
                  <p className="text-secondary text-lg">Document findings and highlight defensive measures against observed attack vectors.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Learnt */}
          <div className="mb-32 scroll-reveal w-full">
            <div className="inline-block mb-16">
              <h2 className="text-6xl font-bold text-[#81d4fa] bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent animate-glow">Skills Learnt</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mt-3"></div>
            </div>
            <div className="space-y-8 w-full">
              <div className="pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-left">
                <p className="text-secondary text-lg">• Virtualization and network configuration (bridged networking for external attack visibility).</p>
              </div>

              <div className="pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-right">
                <p className="text-secondary text-lg">• Installation and configuration of T-Pot honeypot platform.</p>
              </div>

              <div className="pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-left">
                <p className="text-secondary text-lg">• Usage of multiple honeypots (Cowrie, Dionaea, ElasticPot, etc.) simultaneously.</p>
              </div>

              <div className="pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-right">
                <p className="text-secondary text-lg">• Hands-on experience with ELK Stack for log collection, filtering, and visualization.</p>
              </div>

              <div className="pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-left">
                <p className="text-secondary text-lg">• Threat intelligence basics: attacker IP geolocation, brute-force attack patterns, and malware collection.</p>
              </div>

              <div className="animate-slide-right">
                <p className="text-secondary text-lg">• Best practices in securing monitoring infrastructure while running honeypots.</p>
              </div>
            </div>
          </div>

          {/* Tools Used */}
          <div className="mb-32 scroll-reveal w-full">
            <div className="inline-block mb-16">
              <h2 className="text-6xl font-bold text-[#81d4fa] bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent animate-glow">Tools Used</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mt-3"></div>
            </div>
            <div className="space-y-16 w-full">
              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">Cowrie</h3>
                <p className="text-secondary">Medium-interaction SSH and Telnet honeypot designed to log brute force attacks and shell interactions</p>
              </div>

              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">Dionaea</h3>
                <p className="text-secondary">Low-interaction honeypot that captures malware and exploits for various services</p>
              </div>

              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">Elastic Stack (ELK)</h3>
                <p className="text-secondary">Elasticsearch, Logstash, and Kibana for log aggregation, processing, and visualization</p>
              </div>

              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">T-Pot ISO</h3>
                <p className="text-secondary">All-in-one honeypot platform that includes multiple honeypot types and visualization tools</p>
              </div>

              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">Snort</h3>
                <p className="text-secondary">Intrusion detection system for monitoring network traffic and detecting suspicious activities</p>
              </div>

              <div>
                <h3 className="text-white font-bold text-xl mb-2">MISP</h3>
                <p className="text-secondary">Threat intelligence platform for sharing and analyzing security indicators</p>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="mb-32 scroll-reveal w-full">
            <div className="inline-block mb-16">
              <h2 className="text-6xl font-bold text-[#81d4fa] bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent animate-glow">Technical Implementation</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mt-3"></div>
            </div>
            <div className="space-y-16 w-full">
              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">1. Environment Setup</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>Created a new VM in UTM with 8 GB RAM, 2 CPUs, and 40 GB storage.</li>
                  <li>Enabled bridged networking to allow the VM to be accessible from the LAN and the internet.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">2. T-Pot Installation</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>Downloaded the official T-Pot ISO from GitHub.</li>
                  <li>Booted VM and followed guided installer.</li>
                  <li>Selected "Standard Installation Profile" to enable multiple honeypots and dashboards.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">3. Service Deployment</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>T-Pot automatically started honeypot containers (Cowrie, Dionaea, ElasticPot, ConPot, etc.).</li>
                  <li>The ELK stack was deployed for centralized log management.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">4. Monitoring & Data Collection</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>Accessed Kibana dashboards at: https://myip:64297</li>
                  <li>Captured data on:</li>
                  <li>Number of attack attempts.</li>
                  <li>Common credentials used in brute-force attempts.</li>
                  <li>Attack geolocation (mapped via Kibana).</li>
                  <li>Malware samples collected via Dionaea.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">5. Data Analysis</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>Created visualizations to show top attacking IPs, most common usernames/passwords, and peak attack times.</li>
                  <li>Identified patterns in SSH brute-force attempts and IoT-related malware campaigns.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Results & Impact */}
          <div className="mb-24 scroll-reveal w-full">
            <div className="inline-block mb-16">
              <h2 className="text-6xl font-bold text-[#81d4fa] bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent animate-glow">Results & Impact</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mt-3"></div>
            </div>
            <div className="space-y-12 w-full">
              <p className="text-white text-xl">This project provided hands-on experience in deploying and managing honeypots in a virtualized lab environment. Using T-Pot allowed for the observation of thousands of real-world attack attempts within days, giving practical insights into attacker behavior and techniques.</p>

              <div className="space-y-4 pl-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#81d4fa] mt-1 mr-3"></div>
                  <p className="text-secondary text-lg">The prevalence of SSH brute-force attacks.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#81d4fa] mt-1 mr-3"></div>
                  <p className="text-secondary text-lg">Heavy targeting of weak/default credentials.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#81d4fa] mt-1 mr-3"></div>
                  <p className="text-secondary text-lg">The use of global botnets for automated scanning and exploitation.</p>
                </div>
              </div>

              <p className="text-white text-xl mt-6">By integrating honeypot data into visualization tools, this project not only enhanced practical cybersecurity skills but also highlighted the importance of monitoring, logging, and intelligence-driven defense in real-world environments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
