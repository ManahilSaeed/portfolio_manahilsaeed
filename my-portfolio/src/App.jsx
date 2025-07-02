import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Award,
  ExternalLink,
  Star,
  Calendar,
  Users,
  Zap,
  Heart,
  Coffee,
  Monitor,
  Smartphone,
  Database,
  Globe,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'academics', label: 'Academics' },
    // { id: 'achievements', label: 'Achievements' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills_languages = [
    { name: 'JavaScript', icon: <Monitor size={24} /> },
    { name: 'HTML/CSS', icon: <Code size={24} /> },
    { name: 'Python', icon: <Database size={24} /> },
    { name: 'C/C++', icon: <Globe size={24} /> },
    { name: 'Assembly', icon: <Zap size={24} /> },
    { name: 'SQL', icon: <Star size={24} /> },
    { name: 'Verilog', icon: <Smartphone size={24} /> }
  ];

   const skills = [
    { name: 'React', icon: <Monitor size={24} /> },
    { name: 'D3.js', icon: <Code size={24} /> },
    { name: 'Pandas', icon: <Database size={24} /> },
    { name: 'Node.js', icon: <Globe size={24} /> },
    { name: 'FastAPI', icon: <Zap size={24} /> },
    { name: 'Flask', icon: <Star size={24} /> },
    { name: 'NumPy', icon: <Smartphone size={24} /> }
  ];

  const experiences = [
    {
      title: 'Signals Engineering Assistant',
      company: 'Toronto Transit Commission (TTC)',
      period: 'May 2025 - August 2025',
      description: 'Working under the Operations & Infrastructure department (Signals, Engineering, Communications)',
      // description: 'Working under the Operations & Infrastructure department (Signals, Engineering, Communications), I developed bash scripts to automate deployment of analysis tools and created a data-visaulize dashboard to summarize and identify trends in transit activities',
      skills: ['React', 'Node.js', 'C/C++', 'Bash', 'HTML/CSS','JavaScript', 'Python', 'FastAPI', 'pandas', 'D3.js', 'Linux'],
      logo: '🚆' // replace l8er with actual logo URLs
    },
    {
      title: 'Engineering Technician',
      company: 'Corporation of the Town of Ajax (ToA)',
      period: 'May 2024 - Aug 2024',
      description: 'Worked under Operations and Environmental Services department',
      skills: ['ArcGIS', 'CityWorks', 'Microsoft Office'],
      logo: '⚙️'
    },
    {
      title: 'Team Lead',
      company: 'Toronto & Region Conservation Authority (TRCA)',
      period: 'Jan 2024 - Apr 2024',
      description: 'Led the end-to-end design and prototyping of a pedestrian bridge for a conservation area, overseeing stakeholder communication, environmental considerations, and progress tracking through AutoCAD and Microsoft Office.',
      skills: ['AutoCAD', 'SketchUp', 'Microsoft Office [Excel, Word, Powerpoint]'],
      logo: '💼'
    }
    // },
    // {
    //   title: 'Project Liason',
    //   company: 'University of Toronto',
    //   period: 'Sep 2024 - Dec 2024',
    //   description: 'Led the redesign of UofT’s Hart House alleyway to improve accessibility and usability by applying the engineering design lifecycle and waterfall development methodology, coordinating stakeholder input, managing milestones, and creating digital prototypes using AutoCAD and Microsoft Office',
    //   skills: ['AutoCAD', 'Microsoft Office [Excel, Word, Powerpoint]'],
    //   logo: '⭐'
    // }
  ];

  const projects = [
    {
      title: 'Hart House Alleyway Redesign',
      description: 'Led the redesign of UofT’s Hart House alleyway to improve accessibility and usability by applying the engineering design lifecycle and waterfall development methodology, coordinating stakeholder input, managing milestones, and creating digital prototypes using AutoCAD and Microsoft Office.',
      tech: ['AutoCAD', 'Microsoft Office'],
      status: 'Completed',
    },
    {
      title: 'EzFind: GIS Mapping Application',
      description: 'Developed an interactive mapping application tailored for UofT students & faculty, featuring custom layer filtering, optimized route generation using A* and Dijkstra’s algorithms. Implemented heuristic-based solutions to tackle the Traveling Courier Problem (TCP) for efficient multi-point deliveries.',
      tech: ['C/C++', 'EZGL', 'Git', 'Linux'],
      status: 'Completed',
    },
    {
      title: 'Pong: Hardware-Based Game',
      description: 'Developed a real-time Pong game in C and assembly on the RISC-V (Nios V) processor using the DE1-SoC FPGA, integrating VGA graphics, PS/2 keyboard input, LED/seven-segment score display, and audio output to demonstrate hardware-software co-design and system-level optimization.',
      tech: ['C/C++', 'Assembly', 'RISC-V', 'FPGA'],
      status: 'Completed',
    }
  ];

  const achievements = [
    {
      title: 'President\'s Scholar of Excellence',
      organization: 'University of Toronto',
      description: 'Recognized for to 150 applicants admitted into ECE UofT upon admission.'
    },
    {
      title: 'Dean\s Scholar of Excellence',
      organization: 'University of Toronto',
      description: 'Dean\'s List recipient'
    },
    {
      title: 'Lieutenant Governer General Community Volunteer Award',
      organization: 'Government of Ontario',
      description: 'Awarded for over 1,100 hours of community services'
    }
  ];

  // Academic images - add urls
  const academicImages = [
    {
      url: 'https://',
      title: '',
      description: ''
    },
    {
      url: 'https://',
      title: '',
      description: ''
    },
    {
      url: 'https://',
      title: 'ECE Lab Practicals',
      description: ''
    },
    {
      url: 'https://',
      title: '',
      description: ''
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % academicImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + academicImages.length) % academicImages.length);
  };

  // Base styles
  const baseStyles = {
    container: {
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#111827',
      color: '#ffffff',
      position: 'relative',
      overflowX: 'hidden',
      margin: 0,
      padding: 0
    },
    section: {
      width: '100%',
      padding: '80px 24px',
      position: 'relative'
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%'
    },
    gradientText: {
      background: 'linear-gradient(135deg, #60a5fa, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    card: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '24px',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(75, 85, 99, 0.3)'
    },
    button: {
      backgroundColor: '#2563eb',
      color: '#ffffff',
      border: 'none',
      borderRadius: '50%',
      padding: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    flexCenter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    grid: {
      display: 'grid',
      gap: '24px'
    }
  };

  const navStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50,
    transition: 'all 0.3s ease',
    backgroundColor: isScrolled ? 'rgba(17, 24, 39, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    borderBottom: isScrolled ? '1px solid rgba(75, 85, 99, 0.5)' : 'none'
  };

  const backgroundElements = [
    {
      width: '384px',
      height: '384px',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderRadius: '50%',
      filter: 'blur(80px)',
      position: 'absolute',
      left: '10%',
      top: '20%',
      transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
      transition: 'transform 1s ease-out'
    },
    {
      width: '320px',
      height: '320px',
      backgroundColor: 'rgba(168, 85, 247, 0.1)',
      borderRadius: '50%',
      filter: 'blur(80px)',
      position: 'absolute',
      right: '10%',
      bottom: '20%',
      transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
      transition: 'transform 1s ease-out'
    },
    {
      width: '256px',
      height: '256px',
      backgroundColor: 'rgba(236, 72, 153, 0.1)',
      borderRadius: '50%',
      filter: 'blur(80px)',
      position: 'absolute',
      left: '60%',
      top: '60%',
      transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
      transition: 'transform 1s ease-out'
    }
  ];

  return (
    <div style={baseStyles.container}>
      {/* Animated Background Elements */}
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {backgroundElements.map((element, index) => (
          <div key={index} style={element} />
        ))}
      </div>

      {/* Navigation */}
      <nav style={navStyle}>
        <div style={{ ...baseStyles.maxWidth, padding: '16px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', ...baseStyles.gradientText }}>
              Manahil Saeed
            </div>
            <div style={{ display: 'flex', gap: '32px' }}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeSection === item.id ? '#60a5fa' : '#d1d5db',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                  onMouseLeave={(e) => e.target.style.color = activeSection === item.id ? '#60a5fa' : '#d1d5db'}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" style={{ ...baseStyles.section, minHeight: '100vh', ...baseStyles.flexCenter }}>
        <div style={{ textAlign: 'center', zIndex: 10, ...baseStyles.maxWidth }}>
          <div style={{ marginBottom: '32px' }}>
            <div style={{
              width: '128px',
              height: '128px',
              margin: '0 auto 32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6, #a855f7)',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: '#111827',
                ...baseStyles.flexCenter
              }}>
                <Users size={48} style={{ color: '#60a5fa' }} />
              </div>
            </div>
          </div>
          
          <h1 style={{
            fontSize: '6rem',
            fontWeight: 'bold',
            marginBottom: '24px',
            ...baseStyles.gradientText,
            animation: 'pulse 2s infinite'
          }}>
            Manahil Saeed
          </h1>
          
          <p style={{ fontSize: '24px', color: '#d1d5db', marginBottom: '32px' }}>
            Third-year Computer Engineering student at the University of Toronto
          </p>
          
          <p style={{ fontSize: '18px', color: '#9ca3af', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
            An application made to track my progress and achievements.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '48px' }}>
          {[Github, Linkedin, Mail].map((Icon, index) => (
            <a 
              key={index} 
              href={
                index === 0 ? "https://github.com/ManahilSaeed" : 
                index === 1 ? "https://www.linkedin.com/in/manahil-saeed-/" : 
                "mailto:manahilsaeed26@gmail.com"
              } 
              style={baseStyles.button}
              target="_blank"  // Opens link in new tab (for GitHub and LinkedIn)
              rel="noopener noreferrer"  // Security best practice for target="_blank"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
          
          <button 
            onClick={() => scrollToSection('experience')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', animation: 'bounce 2s infinite' }}
          >
            <ChevronDown size={32} style={{ color: '#60a5fa' }} />
          </button>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={baseStyles.section}>
        <div style={baseStyles.maxWidth}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '16px', ...baseStyles.gradientText }}>
              Experience
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '18px' }}>My professional journey and career path</p>
          </div>

          {/* Experience Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ whiteSpace: 'pre-wrap' }}>


            {experiences.map((exp, index) => (
              <div key={index} style={{
                ...baseStyles.card,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.5)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Company Logo */}
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #3b82f6, #a855f7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      marginRight: '20px'
                    }}>
                      {exp.logo}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#60a5fa', marginBottom: '8px' }}>{exp.title}</h3>
                      <p style={{ fontSize: '18px', color: '#d1d5db', margin: 0 }}>{exp.company}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', color: '#9ca3af' }}>
                    <Calendar size={16} style={{ marginRight: '8px' }} />
                    {exp.period}
                  </div>
                </div>
                <p style={{ color: '#d1d5db', marginBottom: '16px' }}>{exp.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} style={{
                      padding: '4px 12px',
                      backgroundColor: 'rgba(37, 99, 235, 0.2)',
                      color: '#60a5fa',
                      borderRadius: '9999px',
                      fontSize: '14px'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ ...baseStyles.section, backgroundColor: 'rgba(31, 41, 55, 0.2)' }}>
        <div style={baseStyles.maxWidth}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '16px', ...baseStyles.gradientText }}>
              Projects
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '18px' }}>Some of my recent work and creations</p>
          </div>

          <div style={{ 
            ...baseStyles.grid,
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
          }}>
            {projects.map((project, index) => (
              <div key={index} style={{
                ...baseStyles.card,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.5)';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#60a5fa', margin: 0 }}>{project.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', color: '#fbbf24' }}>
                    <Star size={16} style={{ marginRight: '4px' }} />
                    <span style={{ fontSize: '14px' }}>{project.stars}</span>
                  </div>
                </div>
                <p style={{ color: '#d1d5db', marginBottom: '16px' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} style={{
                      padding: '2px 8px',
                      backgroundColor: 'rgba(147, 51, 234, 0.2)',
                      color: '#a855f7',
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    backgroundColor: project.status === 'Live' ? 'rgba(34, 197, 94, 0.2)' :
                                   project.status === 'In Development' ? 'rgba(234, 179, 8, 0.2)' :
                                   'rgba(37, 99, 235, 0.2)',
                    color: project.status === 'Live' ? '#22c55e' :
                           project.status === 'In Development' ? '#eab308' :
                           '#3b82f6'
                  }}>
                    {project.status}
                  </span>
                  <button style={{
                    background: 'none',
                    border: 'none',
                    color: '#9ca3af',
                    cursor: 'pointer',
                    padding: '8px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                  onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
                    {/* <ExternalLink size={16} /> */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" style={baseStyles.section}>
        <div style={baseStyles.maxWidth}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '16px', ...baseStyles.gradientText }}>
              Academics
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '18px' }}>Educational background and university memories</p>
          </div>


          {/* Image Carousel */}
          {/* <div style={{ marginBottom: '64px' }}>
            <div style={{
              position: 'relative',
              maxWidth: '800px',
              margin: '0 auto',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                position: 'relative',
                height: '400px',
                overflow: 'hidden'
              }}>
                <img
                  src={academicImages[currentImageIndex].url}
                  alt={academicImages[currentImageIndex].title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                /> */}
                
                {/* Navigation Arrows */}
                {/* <button
                  onClick={prevImage}
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={nextImage}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
               */}
              {/* Image Info Overlay */}
              {/* <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
                padding: '24px',
                color: '#ffffff'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
                  {academicImages[currentImageIndex].title}
                </h3>
                <p style={{ margin: 0, color: '#d1d5db' }}>
                  {academicImages[currentImageIndex].description}
                </p>
              </div>
               */}
              {/* Dots Indicator */}
              {/* <div style={{
                position: 'absolute',
                bottom: '16px',
                right: '24px',
                display: 'flex',
                gap: '8px'
              }}>
                {academicImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: index === currentImageIndex ? '#60a5fa' : 'rgba(255, 255, 255, 0.5)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>
          </div> */}

          <div style={{ ...baseStyles.grid, gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
            <div style={baseStyles.card}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <GraduationCap size={32} style={{ color: '#60a5fa', marginRight: '16px' }} />
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#60a5fa', margin: '0 0 4px 0' }}>Bachelor of Applied Sciences</h3>
                  <p style={{ color: '#d1d5db', margin: 0 }}>University of Technology</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p style={{ color: '#9ca3af', margin: 0 }}>2023 - 2027 + PEY</p>
                <p style={{ color: '#d1d5db', margin: 0, fontWeight:'bold' }}>Computer Engineering</p>
                <p style={{ color: '#d1d5db', margin: 0 }}>
                  Pursuing a double-minor in Engineering Business and Artificial Intelligence 
                </p>
              </div>
            </div>

            <div style={baseStyles.card}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <Award size={32} style={{ color: '#a855f7', marginRight: '16px' }} />
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#a855f7', margin: '0 0 4px 0' }}>Extracurriculars</h3>
                  {/* <p style={{ color: '#d1d5db', margin: 0 }}>Professional Development</p> */}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'IEEE Logistics Associate', year: '2024-2026' },
                  { name: 'IEEE Marketing Associate', year: '2023-2024' },
                  { name: 'UofT Robotic\'s Association (UTRA)', year: '2023-2024' }
                ].map((cert, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#d1d5db' }}>{cert.name}</span>
                    <span style={{ fontSize: '14px', color: '#9ca3af' }}>{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      {/* <section id="achievements" style={{ ...baseStyles.section, backgroundColor: 'rgba(31, 41, 55, 0.2)' }}>
        <div style={baseStyles.maxWidth}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '16px', ...baseStyles.gradientText }}>
              Achievements
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '18px' }}>Recognition and milestones in my career</p>
          </div>

          <div style={{ 
            ...baseStyles.grid,
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
          }}>
            {achievements.map((achievement, index) => (
              <div key={index} style={{
                ...baseStyles.card,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.5)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <Award size={24} style={{ color: '#fbbf24', marginRight: '12px' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fbbf24', margin: 0 }}>{achievement.title}</h3>
                </div>
                <p style={{ color: '#60a5fa', fontWeight: '500', marginBottom: '12px' }}>{achievement.organization}</p>
                <p style={{ color: '#d1d5db', margin: 0 }}>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Skills Section */}
      <section id="skills" style={baseStyles.section}>
        <div style={baseStyles.maxWidth}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '16px', ...baseStyles.gradientText }}>
              Skills
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '18px' }}>Skills I have developed through professional and personal projects and experiences.</p>
          </div>

          <p style={{ color: '#9ca3af', fontSize: '18px' }}>Programming Languages:</p>
          <div style={{ 
            ...baseStyles.grid,
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '10px'
          }}>
            {skills_languages.map((skill, index) => (
              <div key={skill.name} style={{
                ...baseStyles.card,
                textAlign: 'center',
                cursor: 'pointer',
                padding: '32px 24px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.5)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                <div style={{ color: '#60a5fa', marginBottom: '16px', ...baseStyles.flexCenter }}>
                  {skill.icon}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#d1d5db', margin: 0 }}>{skill.name}</h3>
              </div>
            ))}
          </div>

          <p style={{ color: '#9ca3af', fontSize: '18px' }}>Frameworks, Libraries, Tools:</p>
          <div style={{ 
            ...baseStyles.grid,
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '10px'
          }}>
            {skills.map((skill, index) => (
              <div key={skill.name} style={{
                ...baseStyles.card,
                textAlign: 'center',
                cursor: 'pointer',
                padding: '32px 24px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.5)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                <div style={{ color: '#60a5fa', marginBottom: '16px', ...baseStyles.flexCenter }}>
                  {skill.icon}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#d1d5db', margin: 0 }}>{skill.name}</h3>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ ...baseStyles.section, backgroundColor: 'rgba(31, 41, 55, 0.2)' }}>
        <div style={{ ...baseStyles.maxWidth, textAlign: 'center' }}>
          <h2 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '16px', ...baseStyles.gradientText }}>
            Let's Connect!
          </h2>
          {/* <p style={{ color: '#9ca3af', fontSize: '18px', marginBottom: '48px' }}>
            Ready to collaborate or just want to say hello? Let's talk!
          </p> */}

          {/* <div style={{ 
            ...baseStyles.grid,
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            marginBottom: '48px'
          }}>
            <div style={baseStyles.card}>
              <Mail size={32} style={{ color: '#60a5fa', margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#ffffff' }}>Email</h3>
              <p style={{ color: '#9ca3af', margin: 0 }}>manahilsaeed26@gmail.com</p>
            </div>
            <div style={baseStyles.card}>
              <MapPin size={32} style={{ color: '#a855f7', margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#ffffff' }}>Location</h3>
              <p style={{ color: '#9ca3af', margin: 0 }}>Toronto, ON</p>
            </div>
            <div style={baseStyles.card}>
              <Coffee size={32} style={{ color: '#ec4899', margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#ffffff' }}>Feel free to reach out</h3>
              <p style={{ color: '#9ca3af', margin: 0 }}>Always open to meetups!</p>
            </div>
          </div> */}

          {/* <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <a key={index} href="#" style={{
                ...baseStyles.button,
                padding: '16px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1d4ed8';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#2563eb';
                e.target.style.transform = 'scale(1)';
              }}>
                <Icon size={24} />
              </a>
            ))}
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '32px 24px', borderTop: '1px solid rgba(75, 85, 99, 0.5)' }}>
        <div style={{ ...baseStyles.maxWidth, textAlign: 'center' }}>
          {/* <p style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>
            Made using jsx, html, css !!!!!!
          </p> */}
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-30px); }
          70% { transform: translateY(-15px); }
          90% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;