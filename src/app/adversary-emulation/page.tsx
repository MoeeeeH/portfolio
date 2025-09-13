"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";


export default function AdversaryEmulationDetails() {
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
          <title>Adversary Emulation Lab Project Details | Mohamed Hassen</title>
          <meta name="description" content="Detailed view of Adversary Emulation Lab project by Mohamed Hassen" />
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
            <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent animate-glow">Adversary Emulation Lab</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mb-6 animate-fade-in"></div>
            <p className="text-xl text-[#b3e5fc] mb-8 animate-fade-in">Simulating advanced persistent threats to test and improve defensive capabilities</p>
          </div>

          {/* Project Overview */}
          <div className="mb-32 scroll-reveal w-full">
            <div className="inline-block mb-16">
              <h2 className="text-6xl font-bold text-[#81d4fa] bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent animate-glow">Project Overview</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mt-3"></div>
            </div>

            <div className="mb-8">
              <div className="space-y-8 max-w-none">
                <p className="text-secondary text-xl leading-relaxed">Adversary emulation is a critical component of modern cybersecurity defense strategies. This project focuses on creating a controlled laboratory environment to simulate advanced persistent threats (APTs) and sophisticated attack campaigns. By emulating real-world adversary tactics, techniques, and procedures (TTPs), we can evaluate the effectiveness of our defensive controls and identify potential vulnerabilities before malicious actors can exploit them.</p>
                <p className="text-secondary text-xl leading-relaxed">The lab environment includes a complete network infrastructure with segmented zones, decoy assets, and monitoring systems. We leverage the MITRE ATT&CK framework as a reference to guide our emulation scenarios, ensuring comprehensive coverage of adversary behaviors across the entire attack lifecycle, from initial access to exfiltration.</p>
                <p className="text-secondary text-xl leading-relaxed">Through this project, we aim to enhance our organization's security posture by proactively testing defenses, improving incident response capabilities, and developing a deeper understanding of adversary methodologies. The insights gained from these emulation exercises inform our security strategy and help prioritize defensive investments.</p>
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
                  <p className="text-secondary text-lg">Design and implement a secure lab environment for adversary emulation activities.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-right">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold animate-scale-in">2</div>
                <div>
                  <p className="text-secondary text-lg">Develop emulation scenarios based on the MITRE ATT&CK framework and real-world threat intelligence.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold animate-scale-in">3</div>
                <div>
                  <p className="text-secondary text-lg">Execute controlled emulation exercises to test detection and response capabilities.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-right">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold animate-scale-in">4</div>
                <div>
                  <p className="text-secondary text-lg">Analyze results and identify gaps in defensive controls and incident response procedures.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold animate-scale-in">5</div>
                <div>
                  <p className="text-secondary text-lg">Develop recommendations for improving security posture based on emulation findings.</p>
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
                <p className="text-secondary text-lg">• Adversary tactics, techniques, and procedures (TTPs) based on MITRE ATT&CK framework.</p>
              </div>

              <div className="pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-right">
                <p className="text-secondary text-lg">• Design and implementation of secure lab environments for security testing.</p>
              </div>

              <div className="pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-left">
                <p className="text-secondary text-lg">• Threat intelligence analysis and integration into security operations.</p>
              </div>

              <div className="pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-right">
                <p className="text-secondary text-lg">• Detection engineering and security control validation.</p>
              </div>

              <div className="pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-left">
                <p className="text-secondary text-lg">• Incident response procedures and playbook development.</p>
              </div>

              <div className="animate-slide-right">
                <p className="text-secondary text-lg">• Security assessment reporting and remediation planning.</p>
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
                <h3 className="text-white font-bold text-xl mb-2">CALDERA</h3>
                <p className="text-secondary">MITRE's automated adversary emulation platform that allows security teams to test their defenses by running attack sequences based on ATT&CK techniques</p>
              </div>

              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">Atomic Red Team</h3>
                <p className="text-secondary">Library of simple tests mapped to MITRE ATT&CK techniques for security testing and validation</p>
              </div>

              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">Splunk</h3>
                <p className="text-secondary">SIEM platform for collecting, analyzing, and visualizing security data from across the emulation environment</p>
              </div>

              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">Velociraptor</h3>
                <p className="text-secondary">Endpoint monitoring and forensics tool for detecting and analyzing adversary activities</p>
              </div>

              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">MITRE ATT&CK Navigator</h3>
                <p className="text-secondary">Web-based tool for annotating and exploring ATT&CK matrices to plan emulation scenarios</p>
              </div>

              <div>
                <h3 className="text-white font-bold text-xl mb-2">Kali Linux</h3>
                <p className="text-secondary">Penetration testing platform with tools for emulating adversary tactics and techniques</p>
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
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">1. Lab Environment Setup</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>Created isolated network segments using VLANs to contain emulation activities.</li>
                  <li>Deployed virtualized infrastructure with Windows and Linux systems representing enterprise assets.</li>
                  <li>Configured network monitoring and logging infrastructure to capture all activities.</li>
                  <li>Implemented security controls mirroring production environment for realistic testing.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">2. Adversary Emulation Planning</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>Researched current threat actors and their TTPs using threat intelligence feeds.</li>
                  <li>Mapped adversary behaviors to MITRE ATT&CK framework using ATT&CK Navigator.</li>
                  <li>Developed emulation plans covering initial access to exfiltration techniques.</li>
                  <li>Created detection rules and analytics for expected adversary behaviors.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">3. Emulation Execution</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>Configured CALDERA with custom agents deployed across target systems.</li>
                  <li>Executed automated attack sequences based on selected adversary profiles.</li>
                  <li>Supplemented automated tests with manual techniques using Kali Linux tools.</li>
                  <li>Monitored security controls' effectiveness throughout the emulation process.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">4. Data Collection & Analysis</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>Collected logs from endpoints, network devices, and security tools.</li>
                  <li>Analyzed detection capabilities and identified gaps in visibility.</li>
                  <li>Documented time-to-detect and time-to-respond metrics for each technique.</li>
                  <li>Evaluated security control effectiveness against emulated adversary behaviors.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">5. Reporting & Remediation</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>Created detailed reports documenting emulation activities and findings.</li>
                  <li>Developed prioritized recommendations for improving security posture.</li>
                  <li>Updated detection rules and security controls based on lessons learned.</li>
                  <li>Refined incident response procedures with new insights from emulation data.</li>
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
              <p className="text-white text-xl">The Adversary Emulation Lab project provided valuable insights into our organization's security posture and defensive capabilities. By simulating advanced persistent threats in a controlled environment, we identified critical gaps in our defenses and developed actionable strategies to address them.</p>

              <div className="space-y-4 pl-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#81d4fa] mt-1 mr-3"></div>
                  <p className="text-secondary text-lg">Improved detection capabilities for 85% of emulated attack techniques.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#81d4fa] mt-1 mr-3"></div>
                  <p className="text-secondary text-lg">Reduced mean time to detect (MTTD) by 60% through enhanced monitoring and analytics.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#81d4fa] mt-1 mr-3"></div>
                  <p className="text-secondary text-lg">Developed 30+ new detection rules based on adversary TTPs observed during emulation.</p>
                </div>
              </div>

              <p className="text-white text-xl mt-6">This project not only improved our technical defenses but also enhanced our team's understanding of adversary methodologies. The insights gained from these emulation exercises have been instrumental in shaping our security strategy and prioritizing defensive investments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
