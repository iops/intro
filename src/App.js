import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import {
  ChevronLeft,
  ChevronRight,
  Cloud,
  Server,
  Shield,
  Network,
  Building2,
  ShieldAlert,
  BarChart3,
  AppleIcon,
  Film,
  Zap,
  Lock,
  Gauge,
  DollarSign,
  Layout,
  Settings,
  BarChart,
  Database,
  BookOpen,
  Rocket,
  Phone,
  Mail,
  Linkedin
} from 'lucide-react';

// Slideshow component (previously created)
const slides = [
  {
  title: "Revolutionize Your Cloud Infrastructure",
    content: [
      <div key="name" className="text-3xl font-bold mb-4">Andres Catalan</div>,
      <div key="title" className="text-xl mb-6">AWS Architect & DevOps Engineer</div>,
      <div key="experience" className="mb-4">Transforming businesses with over 12 years of AWS expertise</div>,
      <div key="specialties" className="text-sm">
        Specializing in:
        <ul className="list-disc list-inside mt-2">
          <li>Cloud Operations</li>
          <li>Security Fortification</li>
          <li>Infrastructure Automation</li>
        </ul>
      </div>,
      <div key="certifications" className="mt-4 text-blue-600 font-semibold">
        AWS Certified Security Engineer & DevOps Professional
      </div>
    ]
  },
  // ... (other slides remain the same)
  {
    title: "Technical Expertise",
    content: [
      <div key="intro" className="mb-4">Leveraging cutting-edge technologies to drive cloud innovation:</div>,
      <div key="competencies" className="grid grid-cols-2 gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <h3 className="font-bold mb-2">AWS Cloud Operations</h3>
          <p className="text-sm">Optimizing performance, scalability, and cost-efficiency</p>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <h3 className="font-bold mb-2">DevOps Engineering</h3>
          <p className="text-sm">Streamlining development and operations for faster delivery</p>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Cloud Security</h3>
          <p className="text-sm">Implementing robust security measures to protect your assets</p>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Infrastructure as Code</h3>
          <p className="text-sm">Automating infrastructure deployment for consistency and efficiency</p>
        </div>
      </div>,
      <div key="additional" className="mt-4 text-center">
        <p>Additional expertise in:</p>
        <p className="font-semibold">Containerization • Monitoring and Alerting • Process Automation</p>
      </div>
    ]
  },
  {
    title: "AWS Expertise",
    content: [
      <div key="intro" className="mb-6 text-center">Comprehensive mastery across the AWS ecosystem:</div>,
      <div key="skills" className="grid grid-cols-2 gap-6">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg flex items-start">
          <Cloud className="mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-bold mb-2">Cloud Management</h3>
            <ul className="text-sm list-disc list-inside">
              <li>AWS Control Tower</li>
              <li>Account Factory for Terraform (AFT)</li>
              <li>AWS Organizations</li>
            </ul>
          </div>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg flex items-start">
          <Server className="mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-bold mb-2">Compute & Serverless</h3>
            <ul className="text-sm list-disc list-inside">
              <li>EC2, Lambda, Fargate</li>
              <li>ECS, EKS</li>
              <li>Step Functions, API Gateway</li>
            </ul>
          </div>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg flex items-start">
          <Shield className="mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-bold mb-2">Security & Compliance</h3>
            <ul className="text-sm list-disc list-inside">
              <li>IAM, GuardDuty, Security Hub</li>
              <li>AWS Config, CloudTrail</li>
              <li>KMS, Secrets Manager</li>
            </ul>
          </div>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg flex items-start">
          <Network className="mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-bold mb-2">Networking & IaC</h3>
            <ul className="text-sm list-disc list-inside">
              <li>VPC, Transit Gateway, Direct Connect</li>
              <li>CloudFormation, Terraform</li>
              <li>AWS CDK</li>
            </ul>
          </div>
        </div>
      </div>,
      <div key="note" className="mt-6 text-center text-sm italic">
        Expertise in these areas enables end-to-end AWS solutions, from architecture to implementation and optimization.
      </div>
    ]
  },
  {
    title: "Impactful Projects",
    content: [
      <div key="intro" className="mb-6 text-center">Driving transformation and innovation across industries:</div>,
      <div key="projects" className="space-y-4">
        {[
          {
            icon: <Building2 className="w-8 h-8" />,
            company: "IBM",
            description: "Automated secure foundational infrastructure deployment",
            impact: "Reduced deployment time by 70% and improved security compliance by 95%"
          },
          {
            icon: <ShieldAlert className="w-8 h-8" />,
            company: "Matson Inc",
            description: "Emergency response to critical ransomware attack",
            impact: "Recovered systems within 48 hours, implemented robust security measures preventing future attacks, saving millions in potential losses"
          },
          {
            icon: <BarChart3 className="w-8 h-8" />,
            company: "Infor",
            description: "Developed monitoring solution for 27,000+ AWS instances",
            impact: "Improved system performance by 40% and reduced operational costs by 25%"
          },
          {
            icon: <AppleIcon className="w-8 h-8" />,
            company: "Apple",
            description: "Containerized and deployed Apple Store app",
            impact: "Accelerated deployment cycles by 60% and enhanced app scalability"
          },
          {
            icon: <Film className="w-8 h-8" />,
            company: "Sony Pictures",
            description: "Post-hack rebuild with enhanced security",
            impact: "Restored operations in record time and strengthened overall security posture"
          }
        ].map((project, index) => (
          <div key={index} className="bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="mr-4 bg-blue-500 rounded-full p-2">{project.icon}</div>
              <h3 className="font-bold text-lg">{project.company}</h3>
            </div>
            <p className="text-sm mb-2">{project.description}</p>
            <p className="text-xs italic">Impact: {project.impact}</p>
          </div>
        ))}
      </div>
    ]
  },
  {
    title: "Why Choose Andres Catalan Consulting?",
    content: [
      <div key="intro" className="mb-6 text-center text-lg font-semibold">
        Elevate your AWS infrastructure with expertise that delivers results
      </div>,
      <div key="valueProps" className="grid grid-cols-2 gap-6">
        {[
          {
            icon: <Zap className="w-8 h-8" />,
            title: "End-to-End Solutions",
            description: "From architecture design to implementation and optimization, we provide comprehensive AWS solutions tailored to your unique needs."
          },
          {
            icon: <Lock className="w-8 h-8" />,
            title: "Security-First Approach",
            description: "With a track record of handling critical security situations, we ensure your cloud infrastructure is fortified against threats."
          },
          {
            icon: <Gauge className="w-8 h-8" />,
            title: "Performance Optimization",
            description: "Leverage our expertise to fine-tune your AWS environment for maximum efficiency, scalability, and reliability."
          },
          {
            icon: <DollarSign className="w-8 h-8" />,
            title: "Cost Optimization",
            description: "Benefit from our strategies to optimize your AWS spend without compromising on performance or security."
          }
        ].map((prop, index) => (
          <div key={index} className="bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="mr-4 bg-blue-500 rounded-full p-2">{prop.icon}</div>
              <h3 className="font-bold text-lg">{prop.title}</h3>
            </div>
            <p className="text-sm">{prop.description}</p>
          </div>
        ))}
      </div>,
      <div key="cta" className="mt-6 text-center text-lg font-bold">
        Partner with us to transform your AWS infrastructure into a competitive advantage.
      </div>
    ]
  },
  {
    title: "Comprehensive AWS Services",
    content: [
      <div key="intro" className="mb-6 text-center text-lg font-semibold">
        Tailored solutions to meet your unique cloud challenges
      </div>,
      <div key="services" className="grid grid-cols-3 gap-4">
        {[
          {
            icon: <Layout className="w-6 h-6" />,
            title: "Architecture Design",
            description: "Custom AWS architectures optimized for performance, security, and cost-efficiency"
          },
          {
            icon: <Cloud className="w-6 h-6" />,
            title: "Cloud Migration",
            description: "Seamless transition of your applications and data to AWS with minimal disruption"
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Security Enhancement",
            description: "Robust security measures to protect your AWS environment from threats"
          },
          {
            icon: <Settings className="w-6 h-6" />,
            title: "DevOps Implementation",
            description: "Streamline your development and operations with cutting-edge DevOps practices"
          },
          {
            icon: <BarChart className="w-6 h-6" />,
            title: "Performance Optimization",
            description: "Fine-tune your AWS resources for maximum efficiency and scalability"
          },
          {
            icon: <DollarSign className="w-6 h-6" />,
            title: "Cost Optimization",
            description: "Strategies to optimize your AWS spend without compromising performance"
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Serverless Solutions",
            description: "Leverage AWS Lambda and other serverless technologies for scalable, efficient applications"
          },
          {
            icon: <Database className="w-6 h-6" />,
            title: "Database Management",
            description: "Expert handling of AWS database services including RDS, DynamoDB, and Redshift"
          },
          {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Training & Knowledge Transfer",
            description: "Empower your team with AWS best practices and expert knowledge"
          }
        ].map((service, index) => (
          <div key={index} className="bg-white bg-opacity-20 p-4 rounded-lg flex flex-col items-center text-center">
            <div className="flex items-center mb-2">
              <div className="mr-2 bg-blue-500 rounded-full p-2">{service.icon}</div>
              <h3 className="font-bold text-md">{service.title}</h3>
            </div>
            <p className="text-xs">{service.description}</p>
          </div>
        ))}
      </div>,
      <div key="cta" className="mt-6 text-center text-lg font-bold">
        Let's discuss how these services can be customized to meet your specific needs.
      </div>
    ]
  },
  {
    title: "Elevate Your AWS Infrastructure Today",
    content: [
      <div key="cta" className="flex flex-col items-center justify-center h-full">
        <div className="flex items-center mb-6">
          <Rocket className="w-24 h-24 text-yellow-300 mr-4" />
          <h2 className="text-3xl font-bold text-center">Ready to Transform Your Cloud Experience?</h2>
        </div>
        <p className="text-xl mb-8 text-center">Let's discuss how we can optimize your AWS infrastructure, enhance security, and drive your business forward.</p>
        <div className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-bold py-3 px-6 rounded-full text-lg cursor-pointer">
          Schedule a Free Consultation
        </div>
        <div className="mt-8 flex space-x-6">
          <div className="flex items-center">
            <Phone className="w-6 h-6 mr-2" />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-6 h-6 mr-2" />
            <span>andres@onemanops.com</span>
          </div>
          <div className="flex items-center">
            <Linkedin className="w-6 h-6 mr-2" />
            <span>linkedin.com/in/christianrubio</span>
          </div>
        </div>
      </div>
      // <div key="cta" className="flex flex-col items-center justify-center h-full">
      //   <Rocket className="w-24 h-24 text-yellow-300 mb-6" />
      //   <h2 className="text-3xl font-bold mb-4 text-center">Ready to Transform Your Cloud Experience?</h2>
      //   <p className="text-xl mb-8 text-center">Let's discuss how we can optimize your AWS infrastructure, enhance security, and drive your business forward.</p>
      //   <div className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-bold py-3 px-6 rounded-full text-lg cursor-pointer">
      //     Schedule a Free Consultation
      //   </div>
      //   <div className="mt-8 flex space-x-6">
      //     <div className="flex items-center">
      //       <Phone className="w-6 h-6 mr-2" />
      //       <span>(555) 123-4567</span>
      //     </div>
      //     <div className="flex items-center">
      //       <Mail className="w-6 h-6 mr-2" />
      //       <span>andres@onemanops.com</span>
      //     </div>
      //     <div className="flex items-center">
      //       <Linkedin className="w-6 h-6 mr-2" />
      //       <span>linkedin.com/in/christianrubio</span>
      //     </div>
      //   </div>
      // </div>
    ]
  }
];

const Slide = ({ title, content }) => (
  <div className="section fade-in">
    <h2 className="text-2xl font-bold mb-4 important">{title}</h2>
    <ul className="list-disc pl-6">
      {content.map((item, index) => (
        <li key={index} className="mb-2 secondary-text">{item}</li>
      ))}
    </ul>
  </div>
);

// const Slide = ({ title, content }) => (
//   <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
//     <h2 className="text-2xl font-bold mb-4 text-blue-600">{title}</h2>
//     <ul className="list-disc pl-6">
//       {content.map((item, index) => (
//         <li key={index} className="mb-2">{item}</li>
//       ))}
//     </ul>
//   </div>
// );

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <TransitionGroup>
        <CSSTransition key={currentSlide} timeout={300} classNames="slide">
          <div className="slide-content">
            <Slide {...slides[currentSlide]} />
          </div>
        </CSSTransition>
      </TransitionGroup>
      <div className="flex justify-between w-full max-w-2xl mt-4">
        <button onClick={prevSlide} className="interactive bg-blue-500 text-white p-2 rounded-full">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="interactive bg-blue-500 text-white p-2 rounded-full">
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="mt-4 tertiary-text">
        Slide {currentSlide + 1} of {slides.length}
      </div>
    </div>
  );
};

// const Slideshow = () => {
//   const [currentSlide, setCurrentSlide] = React.useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <Slide {...slides[currentSlide]} />
//       <div className="flex justify-between w-full max-w-2xl mt-4">
//         <button onClick={prevSlide} className="bg-blue-500 text-white p-2 rounded-full">
//           <ChevronLeft size={24} />
//         </button>
//         <button onClick={nextSlide} className="bg-blue-500 text-white p-2 rounded-full">
//           <ChevronRight size={24} />
//         </button>
//       </div>
//       <div className="mt-4 text-gray-600">
//         Slide {currentSlide + 1} of {slides.length}
//       </div>
//     </div>
//   );
// };

const Header = () => (
  <header className="section bg-blue-600 text-white p-4">
    <h1 className="text-2xl font-bold important">Andres Catalan Consulting</h1>
    <p className="secondary-text">AWS Architecture & DevOps Solutions</p>
  </header>
);

const Footer = () => (
  <footer className="section bg-gray-800 text-white p-4 text-center">
    <p className="secondary-text">&copy; 2024 Andres Catalan Consulting. All rights reserved.</p>
    <p className="tertiary-text">Contact: andres@onemanops.com | +56 9 34123565</p>
  </footer>
);

// // Header component
// const Header = () => (
//   <header className="bg-blue-600 text-white p-4">
//     <h1 className="text-2xl font-bold">Andres Catalan Consulting</h1>
//     <p>AWS Architecture & DevOps Solutions</p>
//   </header>
// );

// // Footer component
// const Footer = () => (
//   <footer className="bg-gray-800 text-white p-4 text-center">
//     <p>&copy; 2024 Andres Catalan Consulting. All rights reserved.</p>
//     <p>Contact: andres@onemanops.com | +56 9 34123565</p>
//   </footer>
// );

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
//export default Slideshow;
