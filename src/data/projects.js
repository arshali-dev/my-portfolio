export const projects = [
  {
    number: "01",
    title: "Book Catalog Management System",
    category: "Backend",
    image: "/projects/book-catalog.png",
    description:
      "A secure RESTful backend for managing book records with CRUD operations, search, validation, and structured API responses.",
    technologies: [
      "Java",
      "Spring Boot",
      "JPA",
      "PostgreSQL",
      "REST API",
      "Postman",
    ],
    highlights: [
      "Layered Controller-Service-Repository architecture",
      "CRUD and search APIs",
      "Validation and exception handling",
      "API testing with Postman",
    ],
    github:
      "https://github.com/arshali-dev/Book-Catalog-Management-Service",
    demo: null,
    featured: true,
  },

  {
    number: "02",
    title: "Secure Bank Management System",
    category: "Backend + Security",
    image: "/projects/secure-bank.png",
    description:
      "A banking backend designed around secure account management, transactions, authentication, and role-based access control.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JPA",
      "PostgreSQL",
    ],
    highlights: [
      "Account and transaction management",
      "JWT-based authentication",
      "Role-based authorization",
      "Transaction history and audit logging",
    ],
    github:
      "https://github.com/arshali-dev",
    demo: null,
    featured: true,
  },

  {
    number: "03",
    title: "Multilingual AI Chatbot",
    category: "AI",
    image: "/projects/ai-chatbot.png",
    description:
      "A multilingual conversational application capable of processing user queries and retrieving relevant information through a RAG-based workflow.",
    technologies: [
      "Python",
      "LLM",
      "LangChain",
      "Hugging Face",
      "RAG",
      "Streamlit",
    ],
    highlights: [
      "Multilingual query handling",
      "Retrieval-Augmented Generation pipeline",
      "Vector database integration",
      "Interactive Streamlit interface",
    ],
    github:
      "https://github.com/arshali-dev",
    demo: null,
    featured: false,
  },

  {
    number: "04",
    title: "MYSHOP",
    category: "Frontend",
    image: "/projects/myshop.png",
    description:
      "A modern e-commerce frontend application with reusable React components, responsive layouts, product browsing, and client-side state management.",
    technologies: [
      "React.js",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "Context API",
    ],
    highlights: [
      "Reusable component architecture",
      "Responsive user interface",
      "Product management",
      "Client-side routing and state",
    ],
    github:
      "https://github.com/arshali-dev/myShop",
    demo:
      "https://my-shop-eight-zeta.vercel.app/",
    featured: false,
  },

  {
    number: "05",
    title: "Crypto Price Tracker",
    category: "Frontend + API",
    image: "/projects/crypto-tracker.png",
    description:
      "A responsive cryptocurrency tracking application that retrieves market data from an external API and presents it through a clean dashboard.",
    technologies: [
      "React.js",
      "Vite",
      "JavaScript",
      "REST API",
      "Context API",
    ],
    highlights: [
      "Real-time API data integration",
      "Searchable cryptocurrency data",
      "Reusable React components",
      "Responsive dashboard",
    ],
    github:
      "https://github.com/arshali-dev/CryptoCurrency",
    demo:
      "https://crypto-currency-mu.vercel.app/",
    featured: false,
  },
];