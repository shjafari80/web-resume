// Initialize core interactions
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupSmoothScrolling();
    setupActiveSectionTracking();
    setupFormHandling();
    setupMobileNav();
    setDynamicVhUnit();
});

// Animation System
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate');
                    }, index * 200);
                });
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up');
    animatedElements.forEach(el => observer.observe(el));
}

// Smooth Scrolling
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                // close mobile menu after click
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu && navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                    const toggle = document.querySelector('.nav-toggle');
                    if (toggle) toggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
}

// Active link tracking
function setupActiveSectionTracking() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    if (!sections.length || !navLinks.length) return;

    const linkMap = navLinks.reduce((acc, link) => {
        const href = link.getAttribute('href') || '';
        if (href.startsWith('#')) {
            acc[href.substring(1)] = link;
        }
        return acc;
    }, {});

    let activeId = null;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                if (activeId === id) return;
                activeId = id;
                navLinks.forEach(link => link.classList.remove('is-active'));
                if (linkMap[id]) {
                    linkMap[id].classList.add('is-active');
                }
            }
        });
    }, {
        threshold: 0.45,
        rootMargin: '-10% 0px -10% 0px'
    });

    sections.forEach(section => observer.observe(section));
}

// Mobile nav toggle
function setupMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
}

// Form Handling
function setupFormHandling() {
    const form = document.querySelector('.form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Message sent successfully!', 'success');
            form.reset();
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(248, 249, 250, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(248, 249, 250, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-content');
    
    if (heroSection) {
        const rate = scrolled * -0.5;
        heroSection.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate hero elements on load
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-content .slide-in-left, .hero-content .slide-in-right');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate');
            }, index * 300);
        });
    }, 500);
});

// Handle 100vh on mobile safely
function setDynamicVhUnit() {
    const setVh = () => {
        const vh = window.innerHeight * 0.01; // 1% of viewport height in px
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
}
// config: skill definitions
const SKILLS = [
  {
    id: "html",
    title: "HTML5",
    icon: "fa-brands fa-html5",
    color: "linear-gradient(135deg, #ff9966, #ff5e62)",
    details: "<ul><li>Semantic markup</li><li>Accessibility patterns</li></ul>"
  },
  {
    id: "css",
    title: "CSS3",
    icon: "fa-brands fa-css3-alt",
    color: "linear-gradient(135deg, #56ccf2, #2f80ed)",
    details: "<ul><li>Responsive design</li><li>Advanced layouts</li></ul>"
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: "fa-brands fa-js",
    color: "linear-gradient(135deg, #fddb92, #d1fdff)",
    details: "<ul><li>ES6+</li><li>Vanilla & frameworks</li></ul>"
  },
  {
    id: "php",
    title: "PHP",
    icon: "fa-brands fa-php",
    color: "linear-gradient(135deg, #8e9eab, #eef2f3)",
    details: "<ul><li>Back-end scripts</li><li>CMS work</li></ul>"
  },
  {
    id: "wordpress",
    title: "WordPress",
    icon: "fa-brands fa-wordpress",
    color: "linear-gradient(135deg, #0087be, #00c0ff)",
    details: "<ul><li>Headless & classic builds</li><li>Custom themes & blocks</li></ul>"
  },
  {
    id: "github",
    title: "GitHub",
    icon: "fa-brands fa-github",
    color: "linear-gradient(135deg, #7f7fd5, #86a8e7)",
    details: "<ul><li>Repos & CI</li><li>Code reviews</li></ul>"
  }
];

const container = document.querySelector('.floating-icons-container');
const panel = document.querySelector('.skill-panel');
const panelTitle = panel ? panel.querySelector('.skill-title') : null;
const panelBody = panel ? panel.querySelector('.skill-body') : null;
const closeBtn = panel ? panel.querySelector('.panel-close') : null;
const skillsInner = document.querySelector('.skills-inner');

// helper to get container rect
function rect(el){ return el.getBoundingClientRect(); }

// create icons
function initIcons() {
  if (!container) return;
  container.innerHTML = '';
  SKILLS.forEach((s, i) => {
    const node = document.createElement('div');
    node.className = 'floating-icon anim';
    node.dataset.skill = s.id;
    node.style.setProperty('--delay', (i % 3) * 0.2);
    node.style.setProperty('--icon-bg', s.color || 'rgba(255,255,255,0.08)');
    node.setAttribute('aria-label', s.title);

    const icon = document.createElement('i');
    icon.className = s.icon;
    node.appendChild(icon);

    node.addEventListener('click', () => openPanelFor(s, node));
    container.appendChild(node);
  });
}

// compute available zone and reposition icons to avoid panel area
function layoutIconsAvoidingPanel(panelOpen = false) {
  if (!container) return;
  const icons = Array.from(container.querySelectorAll('.floating-icon'));
  if (!icons.length) return;
  const cRect = rect(container);
  const rootStyles = getComputedStyle(document.documentElement);
  const panelPercent = parseFloat(rootStyles.getPropertyValue('--panel-width')) || 0;
  const iconSize = parseFloat(rootStyles.getPropertyValue('--icon-size')) || 68;
  const padding = 40;
  const isNarrowPanel = window.matchMedia('(max-width: 720px)').matches;
  const horizontalOffset = panelOpen && !isNarrowPanel ? (panelPercent / 100) * cRect.width : 0;
  const verticalReduction = panelOpen && isNarrowPanel ? (panelPercent / 100) * cRect.height : 0;
  const panelOffset = panelOpen && !isNarrowPanel ? horizontalOffset + 24 : padding;
  const availableWidth = Math.max(iconSize, cRect.width - panelOffset - padding);
  const columns = Math.max(1, Math.min(icons.length, Math.floor(availableWidth / (iconSize + padding)) || 1));
  const rows = Math.max(1, Math.ceil(icons.length / columns));
  const heightSpan = Math.max(iconSize, cRect.height - verticalReduction - padding * 2);
  const layoutWidth = Math.min(availableWidth, columns * iconSize + Math.max(0, columns - 1) * padding);
  const layoutHeight = Math.min(heightSpan, rows * iconSize + Math.max(0, rows - 1) * padding);
  const horizontalStart = panelOffset + Math.max(0, (availableWidth - layoutWidth) / 2);
  const verticalStart = padding + Math.max(0, (heightSpan - layoutHeight) / 2);
  const colSpacing = columns > 1 ? (layoutWidth - iconSize) / (columns - 1) : 0;
  const rowSpacing = rows > 1 ? (layoutHeight - iconSize) / (rows - 1) : 0;

  icons.forEach((ic, idx) => {
    const col = idx % columns;
    const row = Math.floor(idx / columns);
    const left = horizontalStart + col * colSpacing;
    ic.style.left = `${Math.min(left, cRect.width - iconSize - padding)}px`;

    const topBase = verticalStart + row * rowSpacing;
    const maxTop = cRect.height - iconSize - padding - verticalReduction;
    ic.style.top = `${Math.min(topBase, Math.max(padding, maxTop))}px`;
  });
}

// open panel for skill
function openPanelFor(skill, iconNode) {
  if (!panel || !panelTitle || !panelBody || !skillsInner) return;
  panelTitle.textContent = skill.title;
  panelBody.innerHTML = skill.details;
  panel.setAttribute('aria-hidden', 'false');
  skillsInner.classList.add('panel-open');
  // set document var so CSS transforms and responsive logic can read it
  document.documentElement.style.setProperty('--panel-open', 1);
  // reposition icons to avoid panel area
  layoutIconsAvoidingPanel(true);
  // optionally animate the clicked icon into a pinned spot in the panel (visual cue)
  if (iconNode) {
    const iconRect = iconNode.getBoundingClientRect();
    // we can scale up an image briefly; keep simple for now
    iconNode.style.transform = 'scale(1.06)';
    setTimeout(()=> iconNode.style.transform = '', 420);
  }
  panel.setAttribute('aria-hidden', 'false');
}

// close panel
function closePanel() {
  if (!panel || !skillsInner) return;
  panel.setAttribute('aria-hidden', 'true');
  skillsInner.classList.remove('panel-open');
  document.documentElement.style.setProperty('--panel-open', 0);
  // re-layout icons across full width
  layoutIconsAvoidingPanel(false);
}

if (closeBtn) {
  closeBtn.addEventListener('click', closePanel);
}

// init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  if (!container) return;
  initIcons();
  // small delay to allow initial positions, then layout to safe positions
  setTimeout(()=> layoutIconsAvoidingPanel(false), 350);

  // optional: recompute layout on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const isOpen = panel ? panel.getAttribute('aria-hidden') === 'false' : false;
      layoutIconsAvoidingPanel(isOpen);
    }, 180);
  });
});

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded) .main-content {
        opacity: 0;
    }
    
    .loaded .main-content {
        opacity: 1;
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(style);
