// Language Management
let currentLanguage = 'en';

const translations = {
    en: {
        // Navigation
        'Home': 'Home',
        'About': 'About',
        'Skills': 'Skills',
        'Projects': 'Projects',
        'Experience': 'Experience',
        'Contact': 'Contact',
        
        // Hero Section
        'Hossein Jafari Sharmi': 'Hossein Jafari Sharmi',
        'UI/UX Designer & Full-Stack Developer': 'UI/UX Designer & Full-Stack Developer',
        'Creating beautiful and functional digital experiences with a passion for innovation and user-centered design.': 'Creating beautiful and functional digital experiences with a passion for innovation and user-centered design.',
        'View My Work': 'View My Work',
        'Get In Touch': 'Get In Touch',
        'Available for Projects': 'Available for Projects',
        'Let\'s create something amazing together': 'Let\'s create something amazing together',
        
        // About Section
        'About Me': 'About Me',
        'Get to know me better': 'Get to know me better',
        'My Story': 'My Story',
        'I\'m a passionate UI/UX designer and developer with expertise in creating user-centered digital experiences. My journey spans across network design, software development, web design, and innovative AI-integrated hardware projects.': 'I\'m a passionate UI/UX designer and developer with expertise in creating user-centered digital experiences. My journey spans across network design, software development, web design, and innovative AI-integrated hardware projects.',
        'Years Experience': 'Years Experience',
        'Projects Completed': 'Projects Completed',
        'Happy Clients': 'Happy Clients',
        'Awards Won': 'Awards Won',
        
        // Skills Section
        'My Skills': 'My Skills',
        'Technologies and tools I work with': 'Technologies and tools I work with',
        'UI/UX Design': 'UI/UX Design',
        'Frontend Development': 'Frontend Development',
        'Backend Development': 'Backend Development',
        'Network Design': 'Network Design',
        'AI & Hardware': 'AI & Hardware',
        'Tools & Others': 'Tools & Others',
        
        // Projects Section
        'Featured Projects': 'Featured Projects',
        'Some of my recent work': 'Some of my recent work',
        'E-Commerce Mobile App': 'E-Commerce Mobile App',
        'A complete mobile shopping experience with intuitive UI/UX design and seamless payment integration.': 'A complete mobile shopping experience with intuitive UI/UX design and seamless payment integration.',
        'Enterprise Network Solution': 'Enterprise Network Solution',
        'Comprehensive network infrastructure design for a large corporation with advanced security features.': 'Comprehensive network infrastructure design for a large corporation with advanced security features.',
        'AI-Powered IoT System': 'AI-Powered IoT System',
        'Smart home automation system with machine learning capabilities for energy optimization.': 'Smart home automation system with machine learning capabilities for energy optimization.',
        
        // Experience Section
        'Work Experience': 'Work Experience',
        'My professional journey': 'My professional journey',
        'Senior UI/UX Designer': 'Senior UI/UX Designer',
        'Tech Innovations Inc.': 'Tech Innovations Inc.',
        'Leading design teams and creating user-centered digital experiences for enterprise clients. Specialized in mobile app design and web interfaces.': 'Leading design teams and creating user-centered digital experiences for enterprise clients. Specialized in mobile app design and web interfaces.',
        'Full-Stack Developer': 'Full-Stack Developer',
        'Digital Solutions Co.': 'Digital Solutions Co.',
        'Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.': 'Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
        'Network Engineer': 'Network Engineer',
        'Infrastructure Systems Ltd.': 'Infrastructure Systems Ltd.',
        'Designed and implemented network infrastructure solutions for various clients. Focused on security, scalability, and performance optimization.': 'Designed and implemented network infrastructure solutions for various clients. Focused on security, scalability, and performance optimization.',
        
        // Contact Section
        'Get In Touch': 'Get In Touch',
        'Let\'s work together on your next project': 'Let\'s work together on your next project',
        'Email': 'Email',
        'Phone': 'Phone',
        'Location': 'Location',
        'Tehran, Iran': 'Tehran, Iran',
        'Your Name': 'Your Name',
        'Your Email': 'Your Email',
        'Subject': 'Subject',
        'Your Message': 'Your Message',
        'Send Message': 'Send Message'
    },
    fa: {
        // Navigation
        'Home': 'خانه',
        'About': 'درباره من',
        'Skills': 'مهارت‌ها',
        'Projects': 'پروژه‌ها',
        'Experience': 'تجربه',
        'Contact': 'تماس',
        
        // Hero Section
        'Hossein Jafari Sharmi': 'حسین جعفری شارمی',
        'UI/UX Designer & Full-Stack Developer': 'طراح UI/UX و توسعه‌دهنده فول‌استک',
        'Creating beautiful and functional digital experiences with a passion for innovation and user-centered design.': 'ایجاد تجربیات دیجیتال زیبا و کاربردی با اشتیاق برای نوآوری و طراحی متمرکز بر کاربر.',
        'View My Work': 'مشاهده کارهایم',
        'Get In Touch': 'تماس با من',
        'Available for Projects': 'آماده برای پروژه‌ها',
        'Let\'s create something amazing together': 'بیایید چیزی شگفت‌انگیز خلق کنیم',
        
        // About Section
        'About Me': 'درباره من',
        'Get to know me better': 'بیشتر با من آشنا شوید',
        'My Story': 'داستان من',
        'I\'m a passionate UI/UX designer and developer with expertise in creating user-centered digital experiences. My journey spans across network design, software development, web design, and innovative AI-integrated hardware projects.': 'من یک طراح و توسعه‌دهنده UI/UX پرشور هستم که در ایجاد تجربیات دیجیتال متمرکز بر کاربر تخصص دارم. سفر من شامل طراحی شبکه، توسعه نرم‌افزار، طراحی وب و پروژه‌های سخت‌افزاری نوآورانه با هوش مصنوعی می‌شود.',
        'Years Experience': 'سال تجربه',
        'Projects Completed': 'پروژه تکمیل شده',
        'Happy Clients': 'مشتری راضی',
        'Awards Won': 'جایزه دریافت شده',
        
        // Skills Section
        'My Skills': 'مهارت‌های من',
        'Technologies and tools I work with': 'فناوری‌ها و ابزارهایی که با آن‌ها کار می‌کنم',
        'UI/UX Design': 'طراحی UI/UX',
        'Frontend Development': 'توسعه فرانت‌اند',
        'Backend Development': 'توسعه بک‌اند',
        'Network Design': 'طراحی شبکه',
        'AI & Hardware': 'هوش مصنوعی و سخت‌افزار',
        'Tools & Others': 'ابزارها و سایر',
        
        // Projects Section
        'Featured Projects': 'پروژه‌های برجسته',
        'Some of my recent work': 'برخی از کارهای اخیر من',
        'E-Commerce Mobile App': 'اپلیکیشن موبایل تجارت الکترونیک',
        'A complete mobile shopping experience with intuitive UI/UX design and seamless payment integration.': 'تجربه خرید موبایل کامل با طراحی UI/UX بصری و ادغام پرداخت بی‌نقص',
        'Enterprise Network Solution': 'راه‌حل شبکه سازمانی',
        'Comprehensive network infrastructure design for a large corporation with advanced security features.': 'طراحی زیرساخت شبکه جامع برای یک شرکت بزرگ با ویژگی‌های امنیتی پیشرفته',
        'AI-Powered IoT System': 'سیستم IoT با هوش مصنوعی',
        'Smart home automation system with machine learning capabilities for energy optimization.': 'سیستم اتوماسیون خانه هوشمند با قابلیت‌های یادگیری ماشین برای بهینه‌سازی انرژی',
        
        // Experience Section
        'Work Experience': 'تجربه کاری',
        'My professional journey': 'سفر حرفه‌ای من',
        'Senior UI/UX Designer': 'طراح ارشد UI/UX',
        'Tech Innovations Inc.': 'شرکت نوآوری‌های فناوری',
        'Leading design teams and creating user-centered digital experiences for enterprise clients. Specialized in mobile app design and web interfaces.': 'رهبری تیم‌های طراحی و ایجاد تجربیات دیجیتال متمرکز بر کاربر برای مشتریان سازمانی. تخصص در طراحی اپلیکیشن موبایل و رابط‌های وب',
        'Full-Stack Developer': 'توسعه‌دهنده فول‌استک',
        'Digital Solutions Co.': 'شرکت راه‌حل‌های دیجیتال',
        'Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.': 'توسعه و نگهداری اپلیکیشن‌های وب با استفاده از فناوری‌های مدرن. همکاری با تیم‌های چندمنظوره برای ارائه راه‌حل‌های نرم‌افزاری با کیفیت بالا',
        'Network Engineer': 'مهندس شبکه',
        'Infrastructure Systems Ltd.': 'شرکت سیستم‌های زیرساخت',
        'Designed and implemented network infrastructure solutions for various clients. Focused on security, scalability, and performance optimization.': 'طراحی و پیاده‌سازی راه‌حل‌های زیرساخت شبکه برای مشتریان مختلف. تمرکز بر امنیت، مقیاس‌پذیری و بهینه‌سازی عملکرد',
        
        // Contact Section
        'Get In Touch': 'تماس با من',
        'Let\'s work together on your next project': 'بیایید روی پروژه بعدی شما با هم کار کنیم',
        'Email': 'ایمیل',
        'Phone': 'تلفن',
        'Location': 'موقعیت',
        'Tehran, Iran': 'تهران، ایران',
        'Your Name': 'نام شما',
        'Your Email': 'ایمیل شما',
        'Subject': 'موضوع',
        'Your Message': 'پیام شما',
        'Send Message': 'ارسال پیام'
    }
};

// DOM Elements
const langBtn = document.getElementById('langBtn');
const langText = document.querySelector('.lang-text');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupLanguageToggle();
    setupSmoothScrolling();
    setupFormHandling();
});

// Language Toggle Functionality
function setupLanguageToggle() {
    langBtn.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'en' ? 'fa' : 'en';
        updateLanguage();
        updateLanguageButton();
    });
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-en');
        if (translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
    
    // Update document direction for RTL
    document.documentElement.dir = currentLanguage === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
}

function updateLanguageButton() {
    langText.textContent = currentLanguage === 'en' ? 'فارسی' : 'ENG';
}

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
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
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
