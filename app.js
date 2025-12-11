// Code rain background effect
function createCodeRain() {
    const codeBg = document.getElementById('code-bg');
    const codeSnippets = [
        'function()', 'import pandas', 'SELECT * FROM', 'class Component', 'def analyze():',
        'const data = []', 'git commit -m', 'docker build', 'npm install', 'for i in range():',
        'if __name__ ==', 'public class', 'useState()', 'axios.get()', 'try: except:',
        'CREATE TABLE', 'INSERT INTO', 'UPDATE users', 'DELETE FROM', 'JOIN tables',
        'map()', 'filter()', 'reduce()', 'async await', 'Promise.all()',
        'useEffect()', 'componentDidMount', 'render()', 'props.children', 'state = {}',
        'self.driver', 'WebDriverWait', 'find_element', 'click()', 'send_keys()',
        'models.Model', 'def __str__', 'queryset', 'serializer', 'APIView',
        'app.get()', 'req, res', 'middleware', 'router.post()', 'mongoose.connect',
        'useContext', 'useReducer', 'dispatch()', 'action.type', 'reducer function',
        'SELECT COUNT(*)', 'GROUP BY', 'ORDER BY', 'HAVING', 'INNER JOIN',
        'def predict():', 'model.fit()', 'accuracy_score', 'train_test_split', 'StandardScaler',
        'plt.plot()', 'plt.show()', 'seaborn', 'matplotlib', 'numpy array',
        'lambda x:', 'list comprehension', 'dict comprehension', 'generator', 'decorator',
        'class Meta:', 'permissions', 'authentication', 'JWT token', 'csrf_token',
        'docker-compose', 'kubernetes', 'microservices', 'REST API', 'GraphQL',
        'AWS S3', 'EC2 instance', 'RDS database', 'Lambda function', 'API Gateway'
    ];

    function createCodeDrop() {
        const drop = document.createElement('div');
        drop.className = 'code-rain';
        drop.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (Math.random() * 3 + 2) + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';
        drop.style.fontSize = (Math.random() * 10 + 12) + 'px';

        codeBg.appendChild(drop);

        setTimeout(() => {
            drop.remove();
        }, 5000);
    }

    // Create initial drops
    for (let i = 0; i < 15; i++) {
        setTimeout(createCodeDrop, Math.random() * 2000);
    }

    // Continuously create new drops
    setInterval(createCodeDrop, 200);
}

// Initialize code rain when page loads
document.addEventListener('DOMContentLoaded', createCodeRain);

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and skill categories
document.querySelectorAll('.project-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active nav link highlighting on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active styles for nav links
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        border-bottom: 2px solid #00ff41;
        padding-bottom: 0.5rem;
    }
`;
document.head.appendChild(style);

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const subject = document.getElementById('subject').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form
    if (!subject || !email || !message) {
        showNotification('Please fill out all fields.', 'error');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }

    // Create mailto link with form data
    const recipient = 'singhprincepratap5@gmail.com';
    const body = `From: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    showNotification('Email client opened! Please send the message.', 'success');

    // Reset form
    this.reset();
});

// Notification system
function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Style the notification
    notification.style.position = 'fixed';
    notification.style.top = '100px';
    notification.style.right = '20px';
    notification.style.padding = '1rem 1.5rem';
    notification.style.borderRadius = '8px';
    notification.style.fontWeight = 'bold';
    notification.style.zIndex = '1000';
    notification.style.maxWidth = '300px';
    notification.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';

    if (type === 'success') {
        notification.style.background = 'linear-gradient(45deg, #00ff41, #00d4ff)';
        notification.style.color = '#0a0a0a';
    } else {
        notification.style.background = 'linear-gradient(45deg, #ff6b6b, #f5576c)';
        notification.style.color = '#ffffff';
    }

    // Add to page
    document.body.appendChild(notification);

    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        notification.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}
