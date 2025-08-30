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
  Terminal,
  Cpu,
  Server,
  Layers,
  Binary,
  Wifi,
  Activity,
  Keyboard,
  Mouse,
  Lightbulb
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [terminalText, setTerminalText] = useState('');
  const [matrixRain, setMatrixRain] = useState([]);
  const [glitchActive, setGlitchActive] = useState(false);

  const terminalLines = [
    '$ whoami',
    '> Manahil Saeed',
    '$ cat skills.txt',
    '> Computer Engineering Student',
    '> Innovator & Problem Solver',
    '$ ls projects/',
    '> EzFind  Pong  Hart-House-Redesign',
    '$ echo "Ready to build the future"',
    '> Ready to build the future'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Terminal typing animation
    let terminalIndex = 0;
    let charIndex = 0;
    const typeTerminal = () => {
      if (terminalIndex < terminalLines.length) {
        const currentLine = terminalLines[terminalIndex];
        if (charIndex <= currentLine.length) {
          setTerminalText(terminalLines.slice(0, terminalIndex).join('\n') +
            (terminalIndex > 0 ? '\n' : '') +
            currentLine.substring(0, charIndex));
          charIndex++;
        } else {
          terminalIndex++;
          charIndex = 0;
          setTimeout(typeTerminal, 800);
          return;
        }
        setTimeout(typeTerminal, 50);
      }
    };

    // Matrix rain effect
    const createMatrixRain = () => {
      const chars = '01';
      const drops = [];
      for (let i = 0; i < 30; i++) {
        drops.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          speed: Math.random() * 2 + 1,
          char: chars[Math.floor(Math.random() * chars.length)]
        });
      }
      setMatrixRain(drops);
    };

    // Glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 8000);

    setTimeout(typeTerminal, 1000);
    createMatrixRain();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <Terminal size={16} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={16} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={16} /> },
    { id: 'academics', label: 'Academics', icon: <GraduationCap size={16} /> },
    { id: 'skills', label: 'Skills', icon: <Cpu size={16} /> },
    { id: 'contact', label: 'Contact', icon: <Wifi size={16} /> }
  ];

  const skills_languages = [
    { name: 'JavaScript', icon: <Monitor size={24} />, color: '#00d4ff' },
    { name: 'Java', icon: <Keyboard size={24} />, color: '#0088ff' },
    { name: 'HTML/CSS', icon: <Code size={24} />, color: '#0099ff' },
    { name: 'Python', icon: <Database size={24} />, color: '#0066ff' },
    { name: 'C/C++', icon: <Cpu size={24} />, color: '#0080ff' },
    { name: 'Assembly', icon: <Binary size={24} />, color: '#00ccff' },
    { name: 'SQL', icon: <Server size={24} />, color: '#00b3ff' },
    { name: 'MATLAB', icon: <Mouse size={24} />, color: '#00b3ff' },
    { name: 'PHP', icon: <Lightbulb size={24} />, color: '#00b3ff' },
    { name: 'Verilog', icon: <Activity size={24} />, color: '#0088ff' }
  ];

  const skills = [
    { name: 'React', icon: <Monitor size={24} />, color: '#00d4ff' },
    { name: 'D3.js', icon: <Code size={24} />, color: '#0099ff' },
    { name: 'Python Pandas', icon: <Database size={24} />, color: '#0066ff' },
    { name: 'Node.js', icon: <Globe size={24} />, color: '#0080ff' },
    { name: 'FastAPI', icon: <Zap size={24} />, color: '#00ccff' },
    { name: 'Flask', icon: <Star size={24} />, color: '#00b3ff' },
    { name: 'Angular', icon: <Lightbulb size={24} />, color: '#00b3ff' },
    { name: 'TensorFlow', icon: <Activity size={24} />, color: '#0088ff' },
    { name: 'Django', icon: <Mouse size={24} />, color: '#00b3ff' },
    { name: 'NumPy', icon: <Layers size={24} />, color: '#0088ff' }
  ];

  const experiences = [
    {
      title: 'Signals Engineering Assistant',
      company: 'Toronto Transit Commission (TTC)',
      period: 'May 2025 - August 2025',
      description: 'Worked under the Operations & Infrastructure department (Signals, Engineering, Communications)',
      skills: ['React', 'Node.js', 'C/C++', 'Bash', 'HTML/CSS', 'JavaScript', 'Python', 'FastAPI', 'pandas', 'D3.js', 'Linux'],
      logo: '🚆',
      color: '#00d4ff'
    },
    {
      title: 'Engineering Technician',
      company: 'Corporation of the Town of Ajax (ToA)',
      period: 'May 2024 - Aug 2024',
      description: 'Worked under Operations and Environmental Services department',
      skills: ['ArcGIS', 'CityWorks', 'Microsoft Office'],
      logo: '⚙️',
      color: '#0099ff'
    },
    {
      title: 'Team Lead',
      company: 'Toronto & Region Conservation Authority (TRCA)',
      period: 'Jan 2024 - Apr 2024',
      description: 'Led the end-to-end design and prototyping of a pedestrian bridge for a conservation area, overseeing stakeholder communication, environmental considerations, and progress tracking through AutoCAD and Microsoft Office.',
      skills: ['AutoCAD', 'SketchUp', 'Microsoft Office [Excel, Word, Powerpoint]'],
      logo: '💼',
      color: '#0066ff'
    }
  ];

  const projects = [
    {
      title: 'EzFind: GIS Mapping Application',
      description: 'Developed an interactive mapping application tailored for UofT students & faculty, featuring custom layer filtering, optimized route generation using A* and Dijkstra\'s algorithms. Implemented heuristic-based solutions to tackle the Traveling Courier Problem (TCP) for efficient multi-point deliveries.',
      tech: ['C/C++', 'EZGL', 'Git', 'Linux'],
      status: 'Completed',
      color: '#0099ff'
    },
    {
      title: 'Pong: Hardware-Based Game',
      description: 'Developed a real-time Pong game in C and assembly on the RISC-V (Nios V) processor using the DE1-SoC FPGA, integrating VGA graphics, PS/2 keyboard input, LED/seven-segment score display, and audio output to demonstrate hardware-software co-design and system-level optimization.',
      tech: ['C/C++', 'Assembly', 'RISC-V', 'FPGA', 'De1-SoC'],
      status: 'Completed',
      color: '#0066ff'
    },
    {
      title: 'Flappy Bird: Hardware-Based Game',
      description: 'Developed an implementation of the popular Flappy Bird mobile game in Verilog, using FPGA De1-SoC hardware, Quartus and ModelSIM for debugging. Implemented VGA graphics, PS/2 keyboard inputs, audio output. Utilized digital system design principles including FSMs, linear feedback shift registers and memory management to create a responsive gaming experience.',
      tech: ['Verilog', 'Quartus', 'ModelSIM', 'FPGA', 'De1-SoC'],
      status: 'Completed',
      color: '#00d4ff'
    },
    {
      title: 'Hart House Alleyway Redesign',
      description: 'Led the redesign of UofT\'s Hart House alleyway to improve accessibility and usability by applying the engineering design lifecycle and waterfall development methodology, coordinating stakeholder input, managing milestones, and creating digital prototypes using AutoCAD and Microsoft Office.',
      tech: ['AutoCAD', 'Microsoft Office'],
      status: 'Completed',
      color: '#00d4ff'
    }
  ];

  // Base styles with cyberpunk theme
  const baseStyles = {
    container: {
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#000814',
      color: '#ffffff',
      position: 'relative',
      overflowX: 'hidden',
      margin: 0,
      padding: 0,
      fontFamily: "'Courier New', monospace"
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
      background: 'linear-gradient(135deg, #00d4ff, #0099ff, #0066ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    card: {
      backgroundColor: 'rgba(0, 20, 40, 0.8)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '24px',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(0, 212, 255, 0.3)',
      boxShadow: '0 0 20px rgba(0, 100, 200, 0.1)'
    },
    button: {
      backgroundColor: 'rgba(0, 212, 255, 0.2)',
      color: '#00d4ff',
      border: '1px solid #00d4ff',
      borderRadius: '8px',
      padding: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Courier New', monospace"
    },
    flexCenter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    grid: {
      display: 'grid',
      gap: '24px'
    },
    terminal: {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      border: '1px solid #00d4ff',
      borderRadius: '8px',
      padding: '20px',
      fontFamily: "'Courier New', monospace",
      fontSize: '14px',
      color: '#00ff88',
      whiteSpace: 'pre-wrap',
      minHeight: '200px'
    }
  };

  const navStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50,
    transition: 'all 0.3s ease',
    backgroundColor: isScrolled ? 'rgba(0, 8, 20, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    borderBottom: isScrolled ? '1px solid rgba(0, 212, 255, 0.3)' : 'none'
  };

  const backgroundElements = [
    {
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
      borderRadius: '50%',
      position: 'absolute',
      left: '10%',
      top: '20%',
      transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
      transition: 'transform 1s ease-out',
      filter: 'blur(40px)'
    },
    {
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(0, 153, 255, 0.08) 0%, transparent 70%)',
      borderRadius: '50%',
      position: 'absolute',
      right: '10%',
      bottom: '20%',
      transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
      transition: 'transform 1s ease-out',
      filter: 'blur(40px)'
    },
    {
      width: '250px',
      height: '250px',
      background: 'radial-gradient(circle, rgba(0, 102, 255, 0.06) 0%, transparent 70%)',
      borderRadius: '50%',
      position: 'absolute',
      left: '60%',
      top: '60%',
      transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
      transition: 'transform 1s ease-out',
      filter: 'blur(40px)'
    }
  ];

  return (
    <div style={baseStyles.container}>
      {/* Matrix Rain Background */}
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
        {matrixRain.map((drop) => (
          <div
            key={drop.id}
            style={{
              position: 'absolute',
              left: `${drop.x}%`,
              top: `${drop.y}%`,
              color: 'rgba(0, 212, 255, 0.3)',
              fontSize: '12px',
              fontFamily: "'Courier New', monospace",
              animation: `matrixFall ${drop.speed}s linear infinite`
            }}
          >
            {drop.char}
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
        {backgroundElements.map((element, index) => (
          <div key={index} style={element} />
        ))}
      </div>

      {/* Navigation */}
      <nav style={navStyle}>
        <div style={{ ...baseStyles.maxWidth, padding: '16px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{
              fontSize: '24px',
              fontWeight: 'bold',
              ...baseStyles.gradientText,
              fontFamily: "'Courier New', monospace"
            }}>
              &gt; Manahil.exe
            </div>
            <div style={{ display: 'flex', gap: '24px' }}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: 'none',
                    border: activeSection === item.id ? '1px solid #00d4ff' : 'none',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    color: activeSection === item.id ? '#00d4ff' : '#ffffff',
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Courier New', monospace",
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#00d4ff';
                    e.target.style.border = '1px solid #00d4ff';
                    e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.color = '#ffffff';
                      e.target.style.border = 'none';
                      e.target.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {item.icon}
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
          {/* Terminal Window */}
          <div style={{
            maxWidth: '600px',
            margin: '0 auto 40px',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #00d4ff',
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)'
          }}>
            {/* Terminal Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              backgroundColor: 'rgba(0, 212, 255, 0.1)',
              borderBottom: '1px solid #00d4ff'
            }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27ca3f' }}></div>
              </div>
              <div style={{
                marginLeft: '16px',
                color: '#00d4ff',
                fontSize: '14px',
                fontFamily: "'Courier New', monospace"
              }}>
                terminal@manahil-portfolio
              </div>
            </div>
            {/* Terminal Content */}
            <div style={baseStyles.terminal}>
              {terminalText}
              <span style={{ animation: 'blink 1s infinite' }}>█</span>
            </div>
          </div>

          <h1 style={{
            fontSize: '5rem',
            fontWeight: 'bold',
            marginBottom: '24px',
            ...baseStyles.gradientText,
            fontFamily: "'Courier New', monospace",
            textShadow: glitchActive ? '2px 0 #ff00ff, -2px 0 #00ffff' : 'none',
            animation: glitchActive ? 'glitch 0.3s' : 'none'
          }}>
            Manahil_Saeed.init()
          </h1>

          <p style={{
            fontSize: '24px',
            color: '#00d4ff',
            marginBottom: '32px',
            fontFamily: "'Courier New', monospace"
          }}>
            &gt; Third-year Computer Engineering student
          </p>

          <p style={{
            fontSize: '18px',
            color: '#66b3ff',
            marginBottom: '48px',
            maxWidth: '600px',
            margin: '0 auto 48px',
            fontFamily: "'Courier New', monospace"
          }}>
            // Building the future through innovative engineering solutions
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '48px' }}>
            {[
              { Icon: Github, url: "https://github.com/ManahilSaeed" },
              { Icon: Linkedin, url: "https://www.linkedin.com/in/manahil-saeed-/" },
              { Icon: Mail, url: "mailto:manahilsaeed26@gmail.com" }
            ].map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                style={{
                  ...baseStyles.button,
                  padding: '16px'
                }}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.3)';
                  e.target.style.transform = 'scale(1.1)';
                  e.target.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.2)';
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('experience')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              animation: 'bounceGlow 2s infinite',
              color: '#00d4ff'
            }}
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={baseStyles.section}>
        <div style={baseStyles.maxWidth}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '16px',
              ...baseStyles.gradientText,
              fontFamily: "'Courier New', monospace"
            }}>
              &gt; Experience.log
            </h2>
            <p style={{ color: '#66b3ff', fontSize: '18px', fontFamily: "'Courier New', monospace" }}>
              // Professional journey and career milestones
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {experiences.map((exp, index) => (
              <div key={index} style={{
                ...baseStyles.card,
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 30, 60, 0.9)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 10px 30px rgba(${exp.color === '#00d4ff' ? '0, 212, 255' : exp.color === '#0099ff' ? '0, 153, 255' : '0, 102, 255'}, 0.3)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 20, 40, 0.8)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 100, 200, 0.1)';
                }}>
                {/* Circuit pattern overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  opacity: 0.1,
                  background: `radial-gradient(circle, ${exp.color} 1px, transparent 1px)`,
                  backgroundSize: '10px 10px'
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '8px',
                      backgroundColor: exp.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      marginRight: '20px',
                      boxShadow: `0 0 15px ${exp.color}50`
                    }}>
                      {exp.logo}
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: exp.color,
                        marginBottom: '8px',
                        fontFamily: "'Courier New', monospace"
                      }}>
                        {exp.title}
                      </h3>
                      <p style={{
                        fontSize: '18px',
                        color: '#ffffff',
                        margin: 0,
                        fontFamily: "'Courier New', monospace"
                      }}>
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#66b3ff',
                    fontFamily: "'Courier New', monospace"
                  }}>
                    <Calendar size={16} style={{ marginRight: '8px' }} />
                    {exp.period}
                  </div>
                </div>
                <p style={{
                  color: '#cccccc',
                  marginBottom: '16px',
                  fontFamily: "'Courier New', monospace",
                  fontSize: '14px'
                }}>
                  {exp.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} style={{
                      padding: '6px 12px',
                      backgroundColor: `${exp.color}20`,
                      color: exp.color,
                      borderRadius: '4px',
                      fontSize: '12px',
                      border: `1px solid ${exp.color}40`,
                      fontFamily: "'Courier New', monospace"
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ ...baseStyles.section, backgroundColor: 'rgba(0, 30, 60, 0.2)' }}>
        <div style={baseStyles.maxWidth}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '16px',
              ...baseStyles.gradientText,
              fontFamily: "'Courier New', monospace"
            }}>
              &gt; Projects.exe
            </h2>
            <p style={{ color: '#66b3ff', fontSize: '18px', fontFamily: "'Courier New', monospace" }}>
              // Recent builds and innovative solutions
            </p>
          </div>

          <div style={{
            ...baseStyles.grid,
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
          }}>
            {projects.map((project, index) => (
              <div key={index} style={{
                ...baseStyles.card,
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 30, 60, 0.9)';
                  e.currentTarget.style.transform = 'scale(1.03) rotateX(5deg)';
                  e.currentTarget.style.boxShadow = `0 15px 35px rgba(${project.color === '#00d4ff' ? '0, 212, 255' : project.color === '#0099ff' ? '0, 153, 255' : '0, 102, 255'}, 0.4)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 20, 40, 0.8)';
                  e.currentTarget.style.transform = 'scale(1) rotateX(0deg)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 100, 200, 0.1)';
                }}>
                {/* Hexagonal pattern overlay */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '100px',
                  height: '100px',
                  opacity: 0.1,
                  transform: 'rotate(45deg)',
                  border: `2px solid ${project.color}`
                }} />

                <div style={{ marginBottom: '16px' }}>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    color: project.color,
                    margin: '0 0 12px 0',
                    fontFamily: "'Courier New', monospace"
                  }}>
                    &gt; {project.title}
                  </h3>
                </div>
                <p style={{
                  color: '#cccccc',
                  marginBottom: '16px',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  fontFamily: "'Courier New', monospace"
                }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} style={{
                      padding: '4px 8px',
                      backgroundColor: `${project.color}15`,
                      color: project.color,
                      borderRadius: '3px',
                      fontSize: '11px',
                      border: `1px solid ${project.color}30`,
                      fontFamily: "'Courier New', monospace"
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    padding: '6px 12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    backgroundColor: 'rgba(0, 255, 136, 0.2)',
                    color: '#00ff88',
                    border: '1px solid rgba(0, 255, 136, 0.4)',
                    fontFamily: "'Courier New', monospace"
                  }}>
                    ✓ {project.status}
                  </span>
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
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '16px',
              ...baseStyles.gradientText,
              fontFamily: "'Courier New', monospace"
            }}>
              &gt; Education.db
            </h2>
            <p style={{ color: '#66b3ff', fontSize: '18px', fontFamily: "'Courier New', monospace" }}>
              // Academic achievements and learning path
            </p>
          </div>

          <div style={{ ...baseStyles.grid, gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))' }}>
            <div style={{
              ...baseStyles.card,
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Animated circuit lines */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
                animation: 'slideRight 3s linear infinite'
              }} />

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#00d4ff',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '16px',
                  boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)'
                }}>
                  <GraduationCap size={32} style={{ color: '#000814' }} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#00d4ff',
                    margin: '0 0 4px 0',
                    fontFamily: "'Courier New', monospace"
                  }}>
                    Bachelor of Applied Sciences
                  </h3>
                  <p style={{
                    color: '#ffffff',
                    margin: 0,
                    fontFamily: "'Courier New', monospace"
                  }}>
                    University of Toronto
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p style={{
                  color: '#66b3ff',
                  margin: 0,
                  fontFamily: "'Courier New', monospace"
                }}>
                  &gt; 2023 - 2027 + PEY
                </p>
                <p style={{
                  color: '#00d4ff',
                  margin: 0,
                  fontWeight: 'bold',
                  fontFamily: "'Courier New', monospace"
                }}>
                  Computer Engineering
                </p>
                <p style={{
                  color: '#cccccc',
                  margin: 0,
                  fontSize: '14px',
                  fontFamily: "'Courier New', monospace"
                }}>
                  // Pursuing double-minor in Engineering Business and Artificial Intelligence
                </p>
              </div>
            </div>

            <div style={{
              ...baseStyles.card,
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Animated circuit lines */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, transparent, #0099ff, transparent)',
                animation: 'slideLeft 3s linear infinite'
              }} />

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#0099ff',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '16px',
                  boxShadow: '0 0 20px rgba(0, 153, 255, 0.5)'
                }}>
                  <Activity size={32} style={{ color: '#000814' }} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#0099ff',
                    margin: '0 0 4px 0',
                    fontFamily: "'Courier New', monospace"
                  }}>
                    Extracurriculars
                  </h3>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'IEEE Logistics Associate', year: '2024-2026', status: 'active' },
                  { name: 'IEEE Marketing Associate', year: '2023-2024', status: 'completed' },
                  { name: 'UofT Robotics Association (UTRA)', year: '2023-2024', status: 'completed' }
                ].map((activity, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px',
                    backgroundColor: 'rgba(0, 153, 255, 0.1)',
                    borderRadius: '4px',
                    border: '1px solid rgba(0, 153, 255, 0.3)'
                  }}>
                    <span style={{
                      color: '#ffffff',
                      fontFamily: "'Courier New', monospace",
                      fontSize: '14px'
                    }}>
                      &gt; {activity.name}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        fontSize: '12px',
                        color: '#66b3ff',
                        fontFamily: "'Courier New', monospace"
                      }}>
                        {activity.year}
                      </span>
                      <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: activity.status === 'active' ? '#00ff88' : '#66b3ff'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ ...baseStyles.section, backgroundColor: 'rgba(0, 30, 60, 0.2)' }}>
        <div style={baseStyles.maxWidth}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '16px',
              ...baseStyles.gradientText,
              fontFamily: "'Courier New', monospace"
            }}>
              &gt; Skills.json
            </h2>
            <p style={{ color: '#66b3ff', fontSize: '18px', fontFamily: "'Courier New', monospace" }}>
              // Technical arsenal and programming languages
            </p>
          </div>

          <div style={{ marginBottom: '48px' }}>
            <h3 style={{
              color: '#00d4ff',
              fontSize: '24px',
              marginBottom: '24px',
              fontFamily: "'Courier New', monospace"
            }}>
              &gt; Programming Languages:
            </h3>
            <div style={{
              ...baseStyles.grid,
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              {skills_languages.map((skill, index) => (
                <div key={skill.name} style={{
                  ...baseStyles.card,
                  textAlign: 'center',
                  cursor: 'pointer',
                  padding: '24px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 30, 60, 0.9)';
                    e.currentTarget.style.transform = 'translateY(-8px) rotateY(10deg)';
                    e.currentTarget.style.boxShadow = `0 15px 30px ${skill.color}40`;
                    e.currentTarget.style.borderColor = skill.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 20, 40, 0.8)';
                    e.currentTarget.style.transform = 'translateY(0) rotateY(0deg)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 100, 200, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                  }}>
                  {/* Animated background pattern */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `repeating-linear-gradient(45deg, transparent, transparent 2px, ${skill.color}05 2px, ${skill.color}05 4px)`,
                    opacity: 0.5
                  }} />

                  <div style={{
                    color: skill.color,
                    marginBottom: '16px',
                    ...baseStyles.flexCenter,
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {skill.icon}
                  </div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#ffffff',
                    margin: 0,
                    fontFamily: "'Courier New', monospace",
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{
              color: '#0099ff',
              fontSize: '24px',
              marginBottom: '24px',
              fontFamily: "'Courier New', monospace"
            }}>
              &gt; Frameworks & Tools:
            </h3>
            <div style={{
              ...baseStyles.grid,
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              {skills.map((skill, index) => (
                <div key={skill.name} style={{
                  ...baseStyles.card,
                  textAlign: 'center',
                  cursor: 'pointer',
                  padding: '24px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 30, 60, 0.9)';
                    e.currentTarget.style.transform = 'translateY(-8px) rotateY(-10deg)';
                    e.currentTarget.style.boxShadow = `0 15px 30px ${skill.color}40`;
                    e.currentTarget.style.borderColor = skill.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 20, 40, 0.8)';
                    e.currentTarget.style.transform = 'translateY(0) rotateY(0deg)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 100, 200, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                  }}>
                  {/* Hexagonal pattern */}
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '40px',
                    height: '40px',
                    border: `2px solid ${skill.color}30`,
                    transform: 'rotate(45deg)',
                    borderRadius: '4px'
                  }} />

                  <div style={{
                    color: skill.color,
                    marginBottom: '16px',
                    ...baseStyles.flexCenter,
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {skill.icon}
                  </div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#ffffff',
                    margin: 0,
                    fontFamily: "'Courier New', monospace",
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={baseStyles.section}>
        <div style={{ ...baseStyles.maxWidth, textAlign: 'center' }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '16px',
            ...baseStyles.gradientText,
            fontFamily: "'Courier New', monospace"
          }}>
            &gt; Contact.init()
          </h2>
          <p style={{
            color: '#66b3ff',
            fontSize: '20px',
            marginBottom: '48px',
            fontFamily: "'Courier New', monospace"
          }}>
            // Ready to connect and collaborate
          </p>

          {/* Terminal-style contact info */}
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            ...baseStyles.terminal,
            textAlign: 'left',
            fontSize: '16px'
          }}>
            <div style={{ color: '#00ff88', marginBottom: '8px' }}>
              $ connect --user manahil
            </div>
            <div style={{ color: '#66b3ff', marginBottom: '8px' }}>
              &gt; Establishing connection...
            </div>
            <div style={{ color: '#00d4ff', marginBottom: '8px' }}>
              &gt; Email: manahilsaeed26@gmail.com
            </div>
            <div style={{ color: '#00d4ff', marginBottom: '8px' }}>
              &gt; GitHub: github.com/ManahilSaeed
            </div>
            <div style={{ color: '#00d4ff', marginBottom: '8px' }}>
              &gt; LinkedIn: linkedin.com/in/manahil-saeed-/
            </div>
            <div style={{ color: '#00d4ff', marginBottom: '16px' }}>
              &gt; Location: Toronto, ON
            </div>
            <div style={{ color: '#00ff88' }}>
              &gt; Connection established successfully ✓
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '48px'
          }}>
            {[
              { Icon: Github, url: "https://github.com/ManahilSaeed", label: 'GitHub' },
              { Icon: Linkedin, url: "https://www.linkedin.com/in/manahil-saeed-/", label: 'LinkedIn' },
              { Icon: Mail, url: "mailto:manahilsaeed26@gmail.com", label: 'Email' }
            ].map(({ Icon, url, label }, index) => (
              <a
                key={index}
                href={url}
                style={{
                  ...baseStyles.button,
                  padding: '16px 24px',
                  gap: '8px',
                  borderRadius: '8px',
                  textDecoration: 'none'
                }}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.3)';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(0, 212, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.2)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <Icon size={20} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '32px 24px',
        borderTop: '1px solid rgba(0, 212, 255, 0.3)',
        backgroundColor: 'rgba(0, 8, 20, 0.8)'
      }}>
        <div style={{ ...baseStyles.maxWidth, textAlign: 'center' }}>
          <p style={{
            color: '#66b3ff',
            margin: 0,
            fontFamily: "'Courier New', monospace",
            fontSize: '14px'
          }}>
            &gt; Manahil Saeed
          </p>
        </div>
      </footer>

      {/* Custom CSS Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes bounceGlow {
          0%, 20%, 53%, 80%, 100% { 
            transform: translateY(0); 
            filter: drop-shadow(0 0 5px #00d4ff);
          }
          40%, 43% { 
            transform: translateY(-15px); 
            filter: drop-shadow(0 5px 15px #00d4ff);
          }
          70% { 
            transform: translateY(-8px); 
            filter: drop-shadow(0 3px 10px #00d4ff);
          }
          90% { 
            transform: translateY(-3px); 
            filter: drop-shadow(0 2px 8px #00d4ff);
          }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        @keyframes matrixFall {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
        @keyframes slideLeft {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100vw); }
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000814;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #00d4ff, #0099ff);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #0099ff, #0066ff);
        }

        /* Selection styling */
        ::selection {
          background: rgba(0, 212, 255, 0.3);
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
