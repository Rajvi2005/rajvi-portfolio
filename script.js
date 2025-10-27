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
    // ONLY ONE ARTICLE IS KEPT AND UPDATED: 'etl'
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
            <p>Data extraction involves pulling raw data from multiple, often diverse sources. These sources can include:</p>
            <ul>
                <li>Operational databases (like MySQL, Oracle, or PostgreSQL)</li>
                <li>ERP or CRM systems (such as SAP or Salesforce)</li>
                <li>Cloud platforms (like AWS S3, Google Cloud Storage, or Azure Data Lake)</li>
                <li>Flat files or spreadsheets (CSV, Excel)</li>
            </ul>
            <p>At this stage, data quality issues such as duplicates or missing values may be present. The goal is to collect all relevant data efficiently without making changes yet.</p>
            
            <blockquote>Example: A retail company extracts daily sales data from its e-commerce website, inventory details from its ERP system, and customer information from its CRM platform.</blockquote>
            
            <h4>Step 2: Transform</h4>
            <p>Transformation is the core of the ETL process. It involves cleaning and restructuring data to ensure it meets the requirements of the target data warehouse.</p>
            <p>Common transformation tasks include:</p>
            <ul>
                <li><strong>Data Cleaning:</strong> Removing duplicates, fixing typos, and handling missing values.</li>
                <li><strong>Data Integration:</strong> Merging data from different sources into a single view.</li>
                <li><strong>Data Aggregation:</strong> Summarizing data for easier analysis (for example, converting daily sales to monthly totals).</li>
                <li><strong>Data Formatting:</strong> Changing data types, units, or naming conventions for consistency.</li>
                <li><strong>Data Validation:</strong> Ensuring the data meets quality standards and business logic.</li>
            </ul>
            
            <blockquote>Example: The retail company converts all timestamps to a standard format (UTC), combines regional sales tables, and calculates profit margins before the data is loaded.</blockquote>
            
            <p>This phase often uses data transformation tools such as Apache Spark, Talend, Pentaho, or Informatica. Many cloud-based data pipelines, such as AWS Glue or Google Dataflow, also provide built-in ETL features.</p>
            
            <h4>Step 3: Load</h4>
            <p>The final stage involves loading the transformed data into the destination, usually a data warehouse such as Snowflake, Amazon Redshift, Google BigQuery, or Microsoft Azure Synapse.</p>
            <p>Depending on the needs of the organization, there are two main types of loading:</p>
            <ul>
                <li><strong>Full Load:</strong> Loading all data from scratch (commonly used during initial setups).</li>
                <li><strong>Incremental Load:</strong> Loading only new or changed data since the last update (typically used in production systems).</li>
            </ul>
            <p>The goal is to keep the warehouse up to date and optimized for analytical queries, dashboards, and reports.</p>

            <h3>3. Why ETL Matters in Modern Data Warehousing</h3>
            <p>The ETL process is not just a technical routine. It is a key driver for business intelligence. Without ETL, organizations would struggle to manage data that is spread across different platforms and formats.</p>
            <p>Here’s why ETL is essential:</p>
            <ul>
                <li><strong>Data Consistency:</strong> Ensures uniformity across departments and systems.</li>
                <li><strong>Improved Decision-Making:</strong> Clean, reliable data allows for accurate reporting and forecasting.</li>
                <li><strong>Automation and Efficiency:</strong> Reduces the need for manual work in data preparation.</li>
                <li><strong>Scalability:</strong> Modern ETL tools can handle large datasets from IoT, web analytics, and enterprise systems.</li>
                <li><strong>Compliance and Governance:</strong> Helps enforce data policies, privacy rules, and audit trails.</li>
            </ul>
            <p>In short, ETL connects raw operational data with actionable insights.</p>
            
            <h3>4. Real-World Applications of ETL</h3>
            <ul>
                <li><strong>Business Intelligence (BI):</strong> Organizations use ETL to supply dashboards and reports created with tools like Power BI, Tableau, or Looker.</li>
                <li><strong>Healthcare Analytics:</strong> Hospitals combine data from electronic health records (EHRs) and other sources to monitor patient outcomes.</li>
                <li><strong>Banking and Finance:</strong> Banks perform ETL to consolidate customer transactions, detect fraud patterns, and comply with regulatory requirements.</li>
                <li><strong>E-Commerce:</strong> Retailers integrate sales, inventory, and customer data to forecast demand and design marketing campaigns.</li>
            </ul>

            <h3>5. Tools Commonly Used in ETL</h3>
            <p>Some popular choices include:</p>
            <ul>
                <li><strong>Apache NiFi:</strong> Open-source tool for automating data flows.</li>
                <li><strong>Talend:</strong> Enterprise data integration and transformation platform.</li>
                <li><strong>Pentaho Data Integration (PDI):</strong> Known for its visual data flow designer.</li>
                <li><strong>AWS Glue, Airbyte, and Fivetran:</strong> Modern cloud and automated data ingestion tools.</li>
            </ul>
            <p>Choosing the right tool depends on the data volume, complexity, and real-time needs of the organization.</p>
            
            <h3>6. The Evolution of ETL: From Batch to Real-Time</h3>
            <p>Traditionally, ETL involved batch processing. Today, it has evolved into **ELT** (Extract, Load, Transform), where data is loaded first and then transformed using the data warehouse's processing power. Modern pipelines also support streaming data with tools like Kafka or Spark Streaming.</p>
            
            <h3>7. Conclusion</h3>
            <p>The ETL process is one of the most essential elements of data warehousing and analytics. A well-designed ETL pipeline not only improves data quality but also leads to faster insights, smarter strategies, and better business performance.</p>
        `
    }
};

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
    
    // Add modal styles
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
    // Only target the first .read-more link to open the single 'etl' article
    const firstReadMoreLink = document.querySelector('.read-more');

    if (firstReadMoreLink) {
        firstReadMoreLink.addEventListener('click', (e) => {
            e.preventDefault();
            const article = articleData['etl']; // Always use the 'etl' key
            
            if (article) {
                document.getElementById('modal-title').textContent = article.title;
                document.getElementById('modal-body').innerHTML = article.content;
                document.getElementById('article-modal').style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // You may need to update your HTML to only have one article card,
    // or update this logic to associate each link with the 'etl' key.
    // The current implementation is set up to only use the FIRST .read-more link.

    
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