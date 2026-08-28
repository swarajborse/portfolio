const projects = [
  {
    id: 1,
    title: "Agentic AI-Based Surveillance System",
    description:
      "Intelligent surveillance system using face recognition, object tracking, visit memory, and LLM-generated event descriptions with a real-time dashboard.",
    techStack: [
      "Python",
      "YOLOv8",
      "ByteTrack",
      "InsightFace",
      "Ollama",
      "Gemma 3 4B",
      "MongoDB Atlas",
      "OpenCV",
    ],
    github: null,
    live: null,
    image: null,
    featured: true,
  },
  {
    id: 2,
    title: "Offline Bill Scanner",
    description:
      "OCR-based invoice and bill auto-renamer. Extracts Invoice Number, Date, and Company Name from scanned invoices using PaddleOCR, then renames files accordingly.",
    techStack: ["Python", "PaddleOCR"],
    github: "https://github.com/aummchy/bill-renamer",
    live: null,
    image: null,
    featured: false,
  },
  {
    id: 3,
    title: "WiFi Data Monitor with Alerts",
    description:
      "Collects network metrics like ping, latency, and throughput, then displays them on a Grafana dashboard with alerting support.",
    techStack: ["FastAPI", "Grafana", "Python"],
    github: "https://github.com/aummchy/network-collector-grafana",
    live: null,
    image: null,
    featured: false,
  },
];

export default projects;
