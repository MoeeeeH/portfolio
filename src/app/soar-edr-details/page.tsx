"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function SOAREDRDetails() {
  const [isVisible, setIsVisible] = useState(false);
  const [showFullOverview, setShowFullOverview] = useState(false);

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
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <Head>
          <title>SOAR + EDR Automation Project Details | Mohamed Hassen</title>
          <meta name="description" content="Detailed view of SOAR + EDR Automation project by Mohamed Hassen" />
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
          <div className="mb-20 scroll-reveal">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent">SOAR + EDR Automation</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mb-6"></div>
            <p className="text-xl text-[#b3e5fc] mb-8">Integrated LimaCharlie EDR with Tines SOAR to automate incident response</p>
          </div>

          {/* Project Overview */}
          <div className="mb-24 scroll-reveal w-full">
            <div className="inline-block mb-8 mt-15">
              <h2 className="text-6xl font-bold text-[#81d4fa] bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent">Project Overview</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mt-3"></div>
            </div>
            
            {/* Text with blur effect */}
            <div className="relative mb-8">
              <div className="space-y-6 max-w-none">
                <p className="text-secondary text-xl leading-relaxed">In modern cybersecurity practices, the integration of SOAR (Security Orchestration, Automation, and Response) platforms with EDR (Endpoint Detection and Response) tools is essential for efficient threat management and incident response. Many security operations centers are starting to implement some kind of SOAR, and the objectives remain the same, reduction of repetitive task with automation while following a structured process, and these processes are also known as PlayBooks.</p>
                <p className="text-secondary text-xl leading-relaxed">This project leverages LimaCharlie as the EDR solution and Tines as the SOAR platform to create an automated response workflow for handling malware infections. Specifically, it addresses the scenario where a user executes a hack tool that infects their computer with LaZagne, an open-source credential retrieval tool.</p>
                <p className="text-secondary text-xl leading-relaxed">This playbook demonstrates how to automate detection, notification, and remediation steps to enhance security operations. One of the goals of this project is to get some hands-on experience with an EDR and SOAR by using Lima Charlie and Tines.</p>
              </div>
              

            </div>
            

 






          </div>

          {/* Playbook Diagram */}
          <div className="mb-24 scroll-reveal w-full">
            <div className="inline-block mb-12">
              <h2 className="text-6xl font-bold text-[#81d4fa] bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent">Playbook Diagram</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mt-3"></div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="w-full max-w-3xl border-2 border-[rgba(129, 212, 250, 0.3)] rounded-xl overflow-hidden shadow-xl shadow-[rgba(0, 129, 212, 0.2)]">
                <img 
                  src="/SOAR_EDR_playbook.png" 
                  alt="SOAR EDR Playbook Diagram" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="mb-24 scroll-reveal w-full">
            <div className="inline-block mb-12">
              <h2 className="text-6xl font-bold text-[#81d4fa] bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent">Objectives</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mt-3"></div>
            </div>
            <div className="space-y-6 w-full">
              <div className="flex items-start space-x-4 pb-4 border-b border-[rgba(129, 212, 250, 0.2)]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold">1</div>
                <div>
                  <h3 className="text-[#b0b0b0] font-bold text-lg mb-1">Set Up the Environment</h3>
                  <p className="text-secondary">Install and configure Windows Server 2022 as the client machine</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 pb-4 border-b border-[rgba(129, 212, 250, 0.2)]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold">2</div>
                <div>
                  <h3 className="text-[#b0b0b0] font-bold text-lg mb-1">Facilitate Infection</h3>
                  <p className="text-secondary">Disable the Windows Server firewall to allow LaZagne malware installation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 pb-4 border-b border-[rgba(129, 212, 250, 0.2)]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold">3</div>
                <div>
                  <h3 className="text-[#b0b0b0] font-bold text-lg mb-1">Detect Malware Execution</h3>
                  <p className="text-secondary">Identify when a user executes a hack tool that leads to a LaZagne infection</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 pb-4 border-b border-[rgba(129, 212, 250, 0.2)]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold">4</div>
                <div>
                  <h3 className="text-[#b0b0b0] font-bold text-lg mb-1">Automate Threat Notifications</h3>
                  <p className="text-secondary">Send detailed alerts to the security team via Slack and email upon detection</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 pb-4 border-b border-[rgba(129, 212, 250, 0.2)]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold">5</div>
                <div>
                  <h3 className="text-[#b0b0b0] font-bold text-lg mb-1">Prompt for User Action</h3>
                  <p className="text-secondary">Request user input on whether to isolate the compromised machine</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 pb-4 border-b border-[rgba(129, 212, 250, 0.2)]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold">6</div>
                <div>
                  <h3 className="text-[#b0b0b0] font-bold text-lg mb-1">Automate Machine Isolation</h3>
                  <p className="text-secondary">Automatically isolate the infected machine if the user approves</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold">7</div>
                <div>
                  <h3 className="text-[#b0b0b0] font-bold text-lg mb-1">Update on Action Taken</h3>
                  <p className="text-secondary">Inform the security team about the isolation status and the next steps</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Learned */}
          <div className="mb-24 scroll-reveal w-full">
            <div className="inline-block mb-12">
              <h2 className="text-6xl font-bold text-[#81d4fa] bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent">Skills Learnt</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mt-3"></div>
            </div>
            <div className="space-y-12 w-full">
              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">Installing and configuring Windows Server 2022</h3>
              </div>
              
              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">Configuring and using EDR tools for malware detection</h3>
              </div>
              
              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">Setting up and managing SOAR platforms for automated incident response</h3>
              </div>
              
              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">Integrating different security tools to create cohesive workflows</h3>
              </div>
              
              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">Automating notifications and user prompts through communication platforms</h3>
              </div>
              
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Implementing decision-based automation for incident remediation</h3>
              </div>
            </div>
          </div>

          {/* Tools Used */}
          <div className="mb-24 scroll-reveal w-full">
            <div className="inline-block mb-12">
              <h2 className="text-6xl font-bold text-[#81d4fa] bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent">Tools Used</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mt-3"></div>
            </div>
            <div className="space-y-12 w-full">
              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">Windows Server 2022</h3>
                <p className="text-secondary">Operating system serving as the client machine for infection</p>
              </div>
              
              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">LaZagne</h3>
                <p className="text-secondary">Malware used for retrieving passwords stored on the infected computer</p>
              </div>
              
              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">LimaCharlie</h3>
                <p className="text-secondary">EDR platform used for detecting and responding to the malware infection</p>
              </div>
              
              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">Tines</h3>
                <p className="text-secondary">SOAR platform used for orchestrating the automated incident response workflow</p>
              </div>
              
              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">Slack</h3>
                <p className="text-secondary">Messaging platform for real-time notifications to the security team</p>
              </div>
              
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Email</h3>
                <p className="text-secondary">Communication medium for sending detailed alerts and user prompts</p>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="mb-24 scroll-reveal w-full">
            <div className="inline-block mb-12">
              <h2 className="text-6xl font-bold text-[#81d4fa] bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent">Technical Implementation</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mt-3"></div>
            </div>
            <div className="space-y-12 w-full">
              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">1. Environment Setup:</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>Install and configure Windows Server 2022.</li>
                  <li>Disable the Windows Server firewall to facilitate the installation of LaZagne malware.</li>
                  <li>To set up Slack for the project, register an account and then create a workspace, configure channels for security alerts, and generate an incoming webhook URL for Tines to send notifications.</li>
                  <li>For Tines, register an account, create a new automation story, and integrate it with LimaCharlie and Slack by configuring the appropriate connectors and actions for the incident response workflow.</li>
                  <li>To set up LimaCharlie for the project, register an account, deploy the LimaCharlie agent on the Windows Server 2022 machine, and configure detection rules to identify and respond to LaZagne malware infections.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">2. Execution of Hack Tool:</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>A user inadvertently executes a hack tool, resulting in the computer being infected with LaZagne malware.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">3. Detection by LimaCharlie:</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>LimaCharlie detects the presence of LaZagne and logs the incident as a security threat.</li>
                  <li>The detection event is sent to Tines for further processing.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">4. Processing by Tines:</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>Upon receiving the detection data from LimaCharlie, Tines initiates an automated workflow.</li>
                  <li>Tines sends a detailed alert message to a predefined Slack channel, notifying the security team of the malware detection.</li>
                  <li>Simultaneously, Tines sends an email with the detection details to a designated email address, prompting the recipient (SOC analyst) to decide whether to isolate the infected machine or not.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">5. User Prompt for Action:</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>The email from Tines includes options for the user to select "YES" or "NO" regarding isolating the compromised machine.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">6. User Response Handling:</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>If the user selects "YES":</li>
                  <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                    <li>Tines triggers LimaCharlie to automatically isolate the infected machine from the network.</li>
                    <li>A follow-up message is sent to Slack, informing the team that "The computer has been isolated" along with the isolation status.</li>
                  </ul>
                  <li>If the user selects "NO":</li>
                  <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                    <li>A message is sent to Slack stating, "The computer was not isolated, please investigate," prompting further manual investigation by the security team.</li>
                  </ul>
                  <li>By implementing this automated incident response playbook, organizations can significantly reduce the time to detect and respond to security threats, ensuring swift action to mitigate potential damage and enhance overall security posture.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Results & Impact */}
          <div className="mb-24 scroll-reveal w-full">
            <div className="inline-block mb-12">
              <h2 className="text-6xl font-bold text-[#81d4fa] bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent">Results & Impact</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mt-3"></div>
            </div>
            <div className="space-y-8 w-full">
              <p className="text-white text-xl">The integration of SOAR and EDR platforms is a critical advancement in modern cybersecurity practices, enabling organizations to respond to threats with greater speed and efficiency. This project demonstrates the power of combining LimaCharlie's robust detection and response capabilities with Tines' sophisticated orchestration and automation features. By implementing this automated incident response workflow, we achieved the following:</p>
              
              <div className="space-y-4 pl-8">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1 w-3 h-3 rounded-full bg-[#81d4fa]"></div>
                  <p className="text-secondary text-xl"><span className="text-white font-semibold">Rapid Detection:</span> Immediate identification of malicious activity through LimaCharlie, reducing the window of exposure.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1 w-3 h-3 rounded-full bg-[#81d4fa]"></div>
                  <p className="text-secondary text-xl"><span className="text-white font-semibold">Automated Notification:</span> Swift and detailed alerts delivered via Slack and email, ensuring the security team is promptly informed.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1 w-3 h-3 rounded-full bg-[#81d4fa]"></div>
                  <p className="text-secondary text-xl"><span className="text-white font-semibold">User-Driven Response:</span> Empowering users to make critical decisions regarding machine isolation, enhancing the responsiveness of the security operations center (SOC).</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1 w-3 h-3 rounded-full bg-[#81d4fa]"></div>
                  <p className="text-secondary text-xl"><span className="text-white font-semibold">Efficient Isolation:</span> Automatic isolation of infected machines when approved, minimizing potential damage and preventing further spread of malware.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1 w-3 h-3 rounded-full bg-[#81d4fa]"></div>
                  <p className="text-secondary text-xl"><span className="text-white font-semibold">Clear Communication:</span> Transparent status updates on actions taken, ensuring the security team remains informed and can act accordingly.</p>
                </div>
              </div>
              
              <p className="text-white text-xl">This project showcases the benefits of automating incident response processes, leading to a more resilient security posture. By leveraging tools like LimaCharlie and Tines, organizations can streamline their workflows, reduce manual intervention, and effectively mitigate risks. The successful implementation of this playbook not only demonstrates the technical capabilities of these tools but also highlights the importance of integrating SOAR and EDR solutions to safeguard against evolving cyber threats.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}