// ==================== Navbar Scroll Effect ====================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==================== Mobile Menu Toggle ====================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ==================== Typewriter Effect ====================
const typedTextSpan = document.querySelector('.typed-text');
const texts = [
    'Cybersecurity Enthusiast',
    'Ethical Hacker',
    'CTF Player',
    'Security Researcher'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }
    
    setTimeout(type, typeSpeed);
}

// Start typewriter effect
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});

// ==================== Smooth Scroll ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Scroll Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .project-card, .skill-category, .article-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ==================== Article Modal Functionality ====================
const articleData = {
    'etl': {
        title: 'The ETL Process: Extract, Transform, and Load Explained',
        content: `
            <p>In today’s data-driven world, organizations depend on accurate, consistent, and well-structured data for making important business decisions. At the core of every successful data warehouse or business intelligence system is the **ETL process**.</p>
            <p>ETL stands for **Extract, Transform, and Load**. It is the process of collecting data from various sources, cleaning and structuring it, and storing it in a data warehouse for analysis. Understanding ETL is vital for anyone involved in data warehousing, analytics, or data engineering, as it lays the groundwork for reliable and insightful data-driven systems.</p>
            
            <h3>1. What is ETL?</h3>
            <p>The ETL process is a data integration workflow that moves data from different sources into a single place, such as a data warehouse.</p>
            <ul>
                <li><strong>Extract:</strong> Gathering data from various sources such as databases, APIs, flat files, or cloud storage.</li>
                <li><strong>Transform:</strong> Cleaning, filtering, and reformatting the extracted data to meet business and analytical needs.</li>
                <li><strong>Load:</strong> Inserting the transformed data into the target data warehouse for querying and analysis.</li>
            </ul>
            <p>Each phase has a unique and important role in ensuring the data is accurate, consistent, and usable.</p>
            
            <h3>2. Step-by-Step Breakdown of the ETL Process</h3>
            <h4>Step 1: Extract</h4>
            <p>Data extraction involves pulling raw data from multiple, often diverse sources. These sources can include: Operational databases (like MySQL, Oracle, or PostgreSQL), ERP or CRM systems, Cloud platforms, and Flat files or spreadsheets. The goal is to collect all relevant data efficiently without making changes yet.</p>
            <blockquote>Example: A retail company extracts daily sales data from its e-commerce website, inventory details from its ERP system, and customer information from its CRM platform.</blockquote>
            <h4>Step 2: Transform</h4>
            <p>Transformation is the core of the ETL process. It involves cleaning and restructuring data. Common tasks include: **Data Cleaning** (removing duplicates), **Data Integration** (merging data), **Data Aggregation** (summarizing data), and **Data Validation**. This phase often uses data transformation tools such as Apache Spark, Talend, or AWS Glue.</p>
            <h4>Step 3: Load</h4>
            <p>The final stage involves loading the transformed data into the destination, usually a data warehouse. Types include **Full Load** and **Incremental Load**. The goal is to keep the warehouse up to date and optimized for analytical queries.</p>

            <h3>3. Why ETL Matters in Modern Data Warehousing</h3>
            <p>ETL is a key driver for business intelligence, providing **Data Consistency**, **Improved Decision-Making**, **Automation**, **Scalability**, and **Compliance**. ETL connects raw operational data with actionable insights.</p>
            
            <h3>4. Real-World Applications of ETL</h3>
            <p>Applications include **Business Intelligence**, **Healthcare Analytics**, **Banking and Finance**, and **E-Commerce**, where clean, reliable data is essential for accurate forecasting and strategy.</p>
            
            <h3>7. Conclusion</h3>
            <p>The ETL process is one of the most essential elements of data warehousing and analytics. A well-designed ETL pipeline not only improves data quality but also leads to faster insights, smarter strategies, and better business performance.</p>
        `
    },
    'digital-forensics': {
        title: 'Digital Forensics Using Kali Linux: A Comprehensive Guide',
        content: `
            <p>In today's connected world, every digital footprint tells a story. A deleted file, a network trace, or a suspicious log entry can become a crucial clue in uncovering cybercrimes. Kali Linux remains one of the most trusted environments for professional digital investigations.</p>
            
            <h3>1. What Is Digital Forensics?</h3>
            <p>Digital forensics is the practice of collecting, preserving, analyzing, and reporting electronic evidence while maintaining legal admissibility. It answers: What happened? How did it happen? What data was impacted? The golden rule: **never modify original evidence**.</p>
            
            <h3>2. Evidence Acquisition (Preservation First)</h3>
            <p>The key step is to **create a bit-for-bit image** of storage media before analysis. Integrity is verified with hashes, and detailed timestamps must be documented to maintain the **chain of custody**. Any break can make evidence inadmissible.</p>
            
            <h3>3. File System Analysis (Finding Signals)</h3>
            <p>Investigators use tools like **Autopsy** and **The Sleuth Kit** to reconstruct user activity, recover deleted items, and extract artifacts like browser history. Hash filtering helps separate known-good files from suspicious ones.</p>
            
            <h3>4. Data Carving & Recovery</h3>
            <p>When metadata is destroyed, files are "carved" by signature using tools like **Foremost** or **Scalpel** to recover critical files (PDFs, images, docs). Recovered fragments can still prove exfiltration intent.</p>
            
            <h3>5. Memory & Network Forensics</h3>
            <p>Disk shows the past; **RAM shows the present**. Tools like **Volatility** analyze memory for processes and credentials. **Wireshark** or **NetworkMiner** reconstruct network sessions to spot C2 traffic or data exfiltration. Combining all three yields a complete narrative.</p>
            
            <h3>6. Reporting (Turning Evidence into Action)</h3>
            <p>A defensible forensic report must be clear and neutral, detailing the **scope, tools, acquisition details with hashes**, and **findings with timelines**. Clarity and a solid chain of custody are paramount.</p>
            
            <h3>9. Conclusion</h3>
            <p>Digital forensics combines rigor, patience, and curiosity. With Kali Linux and sound methodology, every log line, packet, and artifact can bring you closer to the truth. Start small, document everything, and let the evidence tell the story.</p>
        `
    },
    'software-testing': {
        title: 'The Critical Role of Software Testing in the Modern IT Industry',
        content: `
            <p>The true measure of a software product's success isn't how fast it was built, but how **reliably** it serves its users. This places **Software Testing** as a critical, ongoing process that underpins the entire modern IT industry. Testing is the quality gate that ensures the final product is functional, secure, performant, and delightful to use.</p>

            <h3>Understanding the Core Concepts of Testing</h3>
            
            <h4>Levels of Testing: From Unit to Acceptance</h4>
            <ul>
                <li>**Unit Testing:** Granular level, testing individual components in isolation.</li>
                <li>**Integration Testing:** Ensures units work correctly when combined (e.g., checking database communication).</li>
                <li>**System Testing:** Verifies the complete, integrated system meets all specified requirements (end-to-end scenarios).</li>
                <li>**Acceptance Testing (UAT):** Final stage, often by end-users, to ensure the system satisfies business requirements.</li>
            </ul>
            
            <h4>Types of Testing: Structure vs. Function</h4>
            <ul>
                <li>**Black-Box Testing:** Focuses on functionality only (like an end-user).</li>
                <li>**White-Box Testing:** Requires knowledge of the internal code structure and logic (used by developers).</li>
                <li>**Gray-Box Testing:** A combination, using some knowledge of internal structure but testing externally.</li>
            </ul>

            <h3>Real-Life Applications Across the IT Industry</h3>
            <p>Testing is the glue that holds all IT sectors together, mitigating risks from minor inconvenience to catastrophic failure.</p>
            
            <h4>Importance in Financial and Healthcare Sectors</h4>
            <p>**Banking and Finance** require automated regression testing to prevent errors in transaction logic. **Healthcare** demands life-critical system testing for EHRs and medical devices to ensure accurate data exchange and patient safety.</p>
            
            <h4>Role in E-Commerce and Cloud Services</h4>
            <p>**E-Commerce** relies on **Performance Testing** (stress and load testing) to handle peak traffic. **Cloud Services** (SaaS) require rigorous **Security Testing** (penetration testing) to protect user data and ensure service availability.</p>

            <h3>Why Testing is Fundamental to Computer Science and Business</h3>
            <p>Testing drives discipline and reduces overall project costs.</p>
            
            <h4>Impact on Software Engineering Quality</h4>
            <p>The need to write **testable code** encourages better software design, leading to modular, maintainable, and scalable codebases. It is crucial for **Risk Mitigation**, as the cost of fixing a bug increases exponentially the later it is discovered.</p>
            
            <h4>Business and Project Management Value</h4>
            <p>Testing ensures **Customer Satisfaction** and enables **Agile and DevOps**. Rapid deployment is only possible because of **continuous testing** and automation, which prevent instability.</p>

            <p>In conclusion, software testing has evolved into a continuous, integrated discipline—the professional guardian of quality that ensures every line of code performs as promised.</p>
        `
    },
    'finite-automata': {
        title: 'The Foundational Power of Finite Automata: Pattern Recognition in Computing',
        content: `
            <p>The **Finite Automaton (FA)**, a fundamental structure from discrete mathematics, is the simplest model in the Theory of Computation. Built on states and transitions, it’s an abstract machine designed to recognize patterns within strings of symbols. This core concept explains how search engines highlight keywords and how compilers validate code structure.</p>

            <h3>Conceptual Breakdown: States, Transitions, and Memory Limits</h3>
            
            <h4>The Core Mechanics of an FA</h4>
            <p>An FA exists in a **fixed number of states** and reads input symbols sequentially. Based on its current state and the input, it moves to the next state. Crucially, the FA has **no extra memory**; it only remembers its current state. If it finishes reading the input and lands in an **accepting state**, the pattern is recognized.</p>
            
            <h4>DFA vs. NFA</h4>
            <p>The **Deterministic Finite Automaton (DFA)** has exactly one defined transition for every input symbol. The **Non-deterministic Finite Automaton (NFA)** allows for multiple transitions for the same symbol, offering flexibility. NFAs are often converted to equivalent DFAs for **efficient execution**.</p>

            <h3>Real-Life Applications: Text Search and Regular Expressions</h3>
            
            <h4>Blazing-Fast String Searching</h4>
            <p>FA models are used in basic **"Find" functions** in text editors. A dedicated DFA is constructed to recognize the search term, providing **blazing-fast, linear-time performance** because the next action is always known instantly.</p>
            
            <h4>The Engine Behind Regular Expressions (Regex)</h4>
            <p>**Regular Expressions (regex)** are the algebraic notation programmers use to define complex text patterns (like validating emails). Every regex can be formally translated into an equivalent DFA. This conversion replaces inefficient backtracking with a **highly efficient, predictable state machine**. Modern compilers, editors, and command-line tools rely on this mechanism.</p>
            
            <h3>Importance in Computer Science and IT</h3>
            
            <h4>Defining Computational Limits</h4>
            <p>FAs define **regular languages**, the simplest languages a machine can recognize. Understanding what an FA **cannot** do (e.g., it cannot count arbitrary amounts of information) provides insight into the necessary complexity for solving other problems.</p>
            
            <h4>Compiler Design and Security</h4>
            <p>In **compiler design**, the FA is perfectly suited for **lexical analysis**, the initial phase where the compiler identifies **tokens** (keywords, variables). This ensures predictable, reliable speed. In **network security**, high-speed applications like **Intrusion Detection Systems (IDS)** use automata to rapidly check network packets against databases of known attack signatures in real time.</p>
        `
    },
    'ai-cybersecurity': {
        title: 'The Transformative Role of AI in Modern Cybersecurity',
        content: `
            <p>In the relentless, evolving landscape of cyber threats, traditional, signature-based defenses are struggling to keep pace. **Artificial Intelligence (AI)** and **Machine Learning (ML)** are foundational elements driving the next generation of cybersecurity practices by shifting defense from reactive to proactive.</p>

            <h3>Core Applications of AI in Cybersecurity</h3>
            
            <h4>1. Enhanced Threat Detection and Anomaly Hunting</h4>
            <p>AI establishes a **User and Entity Behavior Analytics (UEBA)** baseline of "normal" activity to detect subtle, statistically significant deviations. **Malware Analysis** uses ML models to analyze file properties and determine the probability of a threat, even if the signature is new.</p>
            
            <h4>2. Automated Incident Response (SOAR)</h4>
            <p>AI provides the intelligence layer for **Security Orchestration, Automation, and Response (SOAR)** platforms. It automatically handles **Triage and Prioritization** of alerts and executes **Automated Containment** actions (like isolating an endpoint), cutting the Mean Time to Respond (MTTR).</p>
            
            <h4>3. Intelligent Vulnerability Management</h4>
            <p>AI helps prioritize patching based on the **Risk-Based Prioritization**—analyzing asset nature, threat intelligence, and typical attacker patterns—to focus on the *actual business risk* posed by a vulnerability.</p>

            <h3>Importance and Impact on the IT Industry</h3>
            <p>AI addresses the industry's biggest challenges: data volume and the skills gap.</p>
            
            <h4>Driving Operational Efficiency</h4>
            <p>AI enables **Scalability** to monitor trillions of events, a task impossible for human teams alone. By automating routine work, it allows skilled analysts to focus on complex threat hunting, **Focusing Human Talent** effectively.</p>
            
            <h4>The Future of Defensive Security</h4>
            <p>AI will evolve into a collaborative defense partner, enabling **Predictive Defense** by anticipating attack types before they are launched. It will also be essential for securing emerging technologies like quantum computing and vast IoT systems (**Security for AI**).</p>

            <p>In conclusion, the integration of AI is the only scalable, intelligent solution capable of confronting contemporary digital threats, making it crucial for survival and competitive edge in the modern IT world.</p>
        `
    }
};

// Define keys in the order they appear in the HTML
const articleKeys = ['etl', 'digital-forensics', 'software-testing', 'finite-automata', 'ai-cybersecurity']; 

// Create modal HTML (add this once on page load)
document.addEventListener('DOMContentLoaded', () => {
    const modalHTML = `
        <div id="article-modal" class="modal">
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <h2 id="modal-title"></h2>
                <div id="modal-body"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add modal styles (The CSS block remains the same as provided in previous steps)
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            display: none;
            position: fixed;
            z-index: 10000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(10, 10, 15, 0.95);
            backdrop-filter: blur(10px);
            overflow-y: auto;
        }
        
        .modal-content {
            background: var(--dark-card);
            margin: 5% auto;
            padding: 3rem;
            border: 2px solid var(--cyber-pink);
            border-radius: 20px;
            width: 90%;
            max-width: 800px;
            box-shadow: var(--shadow-glow);
            animation: slideDown 0.3s ease-out;
        }
        
        .modal-close {
            color: var(--gray);
            float: right;
            font-size: 2rem;
            font-weight: bold;
            line-height: 1;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .modal-close:hover {
            color: var(--cyber-pink);
            text-shadow: 0 0 10px var(--cyber-pink);
        }
        
        #modal-title {
            color: var(--white);
            font-family: var(--font-display);
            font-size: 2rem;
            margin-bottom: 2rem;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        #modal-body {
            color: var(--gray);
            line-height: 1.8;
        }
        
        #modal-body h3 {
            color: var(--white);
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }
        
        #modal-body h4 {
            color: var(--cyber-pink);
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
        }
        
        #modal-body p {
            margin-bottom: 1.5rem;
        }
        
        #modal-body ul {
            margin: 1rem 0 1.5rem 2rem;
            color: var(--gray);
        }
        
        #modal-body li {
            margin-bottom: 0.5rem;
        }
        
        #modal-body strong {
            color: var(--cyber-pink);
        }
        
        #modal-body blockquote {
            background: rgba(var(--cyber-pink-rgb), 0.1);
            border-left: 5px solid var(--cyber-pink);
            padding: 1rem 1.5rem;
            margin: 1rem 0;
            color: var(--white);
            font-style: italic;
        }
    `;
    document.head.appendChild(style);
    
    // Handle article link clicks
    document.querySelectorAll('.read-more').forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Use the index of the clicked link to get the correct key
            const articleKey = articleKeys[index];
            const article = articleData[articleKey];
            
            if (article) {
                document.getElementById('modal-title').textContent = article.title;
                document.getElementById('modal-body').innerHTML = article.content;
                document.getElementById('article-modal').style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    const modal = document.getElementById('article-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
    
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
});

// ==================== Form Submission ====================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// ==================== Dynamic Year in Footer ====================
const currentYear = new Date().getFullYear();
const footerParagraph = document.querySelector('.footer-bottom p');
if (footerParagraph) {
    // Assuming the paragraph inside .footer-bottom is the one you want to update
    footerParagraph.textContent = `© ${currentYear} Rajvi. All rights reserved.`;
}
