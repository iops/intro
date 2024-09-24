import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Slideshow component (previously created)
const slides = [
  {
    title: "Andres Catalan: AWS Architect & DevOps Expert",
    content: [
      "Over 12 years of experience in AWS and DevOps",
      "Specializing in Cloud Operations, Security, and Infrastructure Automation",
      "AWS Certified Security Engineer & DevOps Professional"
    ]
  },
  // ... (other slides remain the same)
  {
    title: "Core Competencies",
    content: [
      "AWS Cloud Operations",
      "DevOps Engineering",
      "Cloud Security",
      "Infrastructure as Code",
      "Containerization",
      "Monitoring and Alerting",
      "Automation"
    ]
  },
  {
    title: "Key AWS Skills",
    content: [
      "AWS Control Tower & Account Factory for Terraform (AFT)",
      "Serverless (Lambda, API Gateway, Step Functions)",
      "Containerization (ECS, EKS, Fargate)",
      "Security Services (IAM, GuardDuty, Security Hub)",
      "Networking (VPC, Transit Gateway)",
      "Infrastructure as Code (CloudFormation, Terraform)"
    ]
  },
  {
    title: "Notable Projects",
    content: [
      "IBM: Automated secure foundational infrastructure deployment",
      "Matson Inc: Implemented advanced AWS security measures",
      "Infor: Developed monitoring solution for 27,000+ AWS instances",
      "Apple: Containerized and deployed Apple Store app",
      "Sony Pictures: Post-hack rebuild with enhanced security"
    ]
  },
  {
    title: "Value Proposition",
    content: [
      "End-to-end AWS architecture and implementation",
      "Security-first approach to cloud infrastructure",
      "Scalable and cost-effective solutions",
      "Automation to improve efficiency and reduce human error"
    ]
  },
  {
    title: "Services Offered",
    content: [
      "AWS architecture design and implementation",
      "Cloud migration strategies",
      "Security assessment and enhancement",
      "DevOps pipeline optimization",
      "Monitoring and alerting solutions",
      "Training and knowledge transfer"
    ]
  },
  {
    title: "Let's Connect",
    content: [
      "Ready to optimize your AWS infrastructure?",
      "Contact: christian.rubio@example.com",
      "Phone: (555) 123-4567",
      "Schedule a free consultation today!"
    ]
  }
];

const Slide = ({ title, content }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
    <h2 className="text-2xl font-bold mb-4 text-blue-600">{title}</h2>
    <ul className="list-disc pl-6">
      {content.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>
  </div>
);

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Slide {...slides[currentSlide]} />
      <div className="flex justify-between w-full max-w-2xl mt-4">
        <button onClick={prevSlide} className="bg-blue-500 text-white p-2 rounded-full">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="bg-blue-500 text-white p-2 rounded-full">
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="mt-4 text-gray-600">
        Slide {currentSlide + 1} of {slides.length}
      </div>
    </div>
  );
};

// Header component
const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <h1 className="text-2xl font-bold">Andres Catalan Consulting</h1>
    <p>AWS Architecture & DevOps Solutions</p>
  </header>
);

// Footer component
const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 text-center">
    <p>&copy; 2024 Andres Catalan Consulting. All rights reserved.</p>
    <p>Contact: andres@onemanops.com | +56 9 34123565</p>
  </footer>
);

// Main App component
const App = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <Slideshow />
    </main>
    <Footer />
  </div>
);

export default App;
