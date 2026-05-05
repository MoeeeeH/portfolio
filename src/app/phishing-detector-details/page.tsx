"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";


export default function PhishingDetectorDetails() {
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
          <title>Email Phishing Detector Project Details | Mohamed Hassen</title>
          <meta name="description" content="Detailed view of Email Phishing Detector project by Mohamed Hassen" />
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
            <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent animate-glow">Email Phishing Detector</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mb-6 animate-fade-in"></div>
            <p className="text-xl text-[#b3e5fc] mb-8 animate-fade-in">Machine Learning-powered email analysis system that detects phishing attempts with confidence scoring and reinforcement learning capabilities</p>
          </div>

          {/* Project Overview */}
          <div className="mb-24 scroll-reveal w-full">
            <div className="inline-block mb-12">
              <h2 className="text-6xl font-bold text-[#81d4fa] bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] bg-clip-text text-transparent animate-glow">Project Overview</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] mt-3"></div>
            </div>

            <div className="mb-8">
              <div className="space-y-6 max-w-none">
                <p className="text-secondary text-xl leading-relaxed">Email phishing remains one of the most prevalent attack vectors used by cybercriminals to steal sensitive information and compromise systems. This project addresses this critical security challenge by developing a sophisticated machine learning model capable of analyzing email content and determining its legitimacy with high accuracy.</p>
                <p className="text-secondary text-xl leading-relaxed">The system allows users to simply copy and paste email content into the interface, which then processes the text through our trained model to produce a trust score indicating the likelihood of the email being a phishing attempt. What sets this solution apart is its reinforcement learning component, which enables the model to continuously improve by learning from user feedback on whether its predictions were correct.</p>
                <p className="text-secondary text-xl leading-relaxed">Trained on a comprehensive dataset of over 500,000 real-world emails, our model has been exposed to a diverse range of legitimate communications and sophisticated phishing campaigns, enabling it to identify subtle patterns and indicators that might escape traditional rule-based detection systems.</p>
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
                  <p className="text-secondary text-lg">Develop a machine learning model to classify emails as legitimate or phishing with high accuracy.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-right">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold animate-scale-in">2</div>
                <div>
                  <p className="text-secondary text-lg">Implement a user-friendly interface for analyzing emails by copy-pasting content.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold animate-scale-in">3</div>
                <div>
                  <p className="text-secondary text-lg">Provide a trust score to indicate confidence level in the classification result.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-right">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold animate-scale-in">4</div>
                <div>
                  <p className="text-secondary text-lg">Incorporate reinforcement learning to improve model accuracy through user feedback.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b0b0b0] flex items-center justify-center text-black font-bold animate-scale-in">5</div>
                <div>
                  <p className="text-secondary text-lg">Train the model on a comprehensive dataset of 500,000+ real-world emails for robust performance.</p>
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
                <p className="text-secondary text-lg">• Natural Language Processing (NLP) for email content analysis and feature extraction.</p>
              </div>

              <div className="pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-right">
                <p className="text-secondary text-lg">• Machine Learning model development using ensemble methods and deep learning architectures.</p>
              </div>

              <div className="pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-left">
                <p className="text-secondary text-lg">• Reinforcement Learning implementation for continuous model improvement through feedback loops.</p>
              </div>

              <div className="pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-right">
                <p className="text-secondary text-lg">• Data preprocessing and feature engineering on large-scale text datasets.</p>
              </div>

              <div className="pb-4 border-b border-[rgba(129, 212, 250, 0.2)] animate-slide-left">
                <p className="text-secondary text-lg">• Model evaluation and performance optimization using cross-validation and metrics analysis.</p>
              </div>

              <div className="animate-slide-right">
                <p className="text-secondary text-lg">• Full-stack web development for creating an intuitive user interface for the detection system.</p>
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
                <h3 className="text-white font-bold text-xl mb-2">Python</h3>
                <p className="text-secondary">Core programming language for model development, data processing, and API implementation</p>
              </div>

              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">TensorFlow & Keras</h3>
                <p className="text-secondary">Deep learning framework for building and training the neural network model</p>
              </div>

              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">Scikit-learn</h3>
                <p className="text-secondary">Machine learning library for data preprocessing, feature extraction, and model evaluation</p>
              </div>

              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">NLTK & spaCy</h3>
                <p className="text-secondary">Natural language processing libraries for text analysis and feature extraction</p>
              </div>

              <div className="pb-6 border-b border-[rgba(129, 212, 250, 0.2)]">
                <h3 className="text-white font-bold text-xl mb-2">React.js</h3>
                <p className="text-secondary">Frontend framework for building the user interface and interaction components</p>
              </div>

              <div>
                <h3 className="text-white font-bold text-xl mb-2">FastAPI</h3>
                <p className="text-secondary">Backend framework for creating the API endpoints and handling model inference</p>
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
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">1. Dataset Preparation</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>Collected and cleaned a dataset of 500,000+ real-world emails (both legitimate and phishing).</li>
                  <li>Applied text preprocessing techniques including tokenization, stop-word removal, and stemming.</li>
                  <li>Extracted relevant features such as sender information, URL patterns, and suspicious keywords.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">2. Model Architecture</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>Designed a hybrid architecture combining CNN and LSTM layers for effective text classification.</li>
                  <li>Implemented word embeddings using pre-trained GloVe vectors for semantic understanding.</li>
                  <li>Incorporated attention mechanisms to focus on the most relevant parts of the email content.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">3. Training & Evaluation</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>Split dataset into training (80%), validation (10%), and testing (10%) sets.</li>
                  <li>Trained the model over 50 epochs with early stopping to prevent overfitting.</li>
                  <li>Achieved 97.3% accuracy on the test set with F1-score of 0.96.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">4. Reinforcement Learning Integration</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>Implemented a feedback mechanism allowing users to confirm or correct predictions.</li>
                  <li>Created a reward system that adjusts model weights based on user feedback.</li>
                  <li>Deployed continuous learning pipeline to periodically retrain with new labeled data.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#b0b0b0] font-bold text-2xl mb-3">5. User Interface</h3>
                <ul className="list-disc pl-6 text-secondary text-lg space-y-3">
                  <li>Built a clean, intuitive interface for email input and result display.</li>
                  <li>Implemented trust score visualization with color-coded confidence indicators.</li>
                  <li>Added feedback buttons for users to report correct or incorrect classifications.</li>
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
              <p className="text-white text-xl">The Email Phishing Detector project successfully demonstrates the application of advanced machine learning techniques to address a critical cybersecurity challenge. By training on a massive dataset of real-world emails, the model has developed the ability to identify sophisticated phishing attempts that often evade traditional detection methods.</p>

              <div className="space-y-4 pl-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#81d4fa] mt-1 mr-3"></div>
                  <p className="text-secondary text-lg">Achieved 97.3% accuracy in classifying emails as legitimate or phishing.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#81d4fa] mt-1 mr-3"></div>
                  <p className="text-secondary text-lg">Successfully identified subtle phishing indicators including social engineering tactics and URL manipulation.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#81d4fa] mt-1 mr-3"></div>
                  <p className="text-secondary text-lg">Demonstrated continuous improvement through reinforcement learning, with accuracy increasing by 2.1% after incorporating user feedback.</p>
                </div>
              </div>

              <p className="text-white text-xl mt-6">This project not only provides a practical tool for identifying phishing emails but also showcases the potential of combining supervised learning with reinforcement techniques to create adaptive security solutions that evolve with emerging threats.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
