// Everything on the site comes from this file.
// To add a project: copy one object in `projects`, edit it, and push.

export type Link = { label: string; href: string };

export type Visual = "forecast" | "benchmark" | "models" | "signs";

export type Entry = {
  title: string;
  dates: string;
  context: string; // where or what it was for
  stack?: string[];
  summary: string;
  points: string[];
  links?: Link[];
  visual?: Visual; // small chart drawn in the project's frame
};

export const person = {
  name: { first: "Jana", last: "Robert-Oragbon" },
  shortName: "Jana Robert-Oragbon",
  roles: ["Quantitative Research", "Software Engineering", "Economics"],
  lede:
    "Sophomore at Rice University studying Computer Science and Mathematical Economic Analysis. I build probabilistic models and the software around them, and I'm working toward quantitative trading and research.",
  facts: [
    { label: "GPA", value: "3.88 / 4.00" },
    { label: "Graduating", value: "Spring 2029" },
    { label: "Honors", value: "National Finalist, International Economics Olympiad 2025" },
  ],
  email: "janarobert.o.21@gmail.com",
  links: {
    github: "https://github.com/jana18ro",
    linkedin: "https://www.linkedin.com/in/jana-robert-oragbon",
    // Built from resume/resume.tex by `make -C resume` (public copy, no phone number)
    resume: "resume.pdf",
  },
};

// The About page. Rewrite these in your own voice.
// Put your photo at public/headshot.jpg; until then a monogram shows in the frame.
export const about = {
  headline: "Who I am",
  paragraphs: [
    "I'm a sophomore at Rice studying Computer Science and Mathematical Economic Analysis. I like problems where the answer is a probability, not a certainty, and where the quality of a decision can be measured.",
    "That's what draws me to quantitative finance: markets are the cleanest place I know to test whether a model is actually right. I'm building toward a quant trading or research internship, one project at a time, starting with probabilistic forecasting models.",
    "Longer term, I want to build and lead ventures at the intersection of technology, business and economic decision-making.",
  ],
  now: [
    { label: "Studying", value: "Computer Science and Mathematical Economic Analysis" },
    { label: "Building", value: "FIFA World Cup ’26 Predictor" },
    { label: "Leading", value: "Fundraising Chair, Rice University African Student Association" },
  ],
};

// Everything below mirrors the quant resume (resume/resume.tex). Keep the two in sync.

export const projects: Entry[] = [
  {
    title: "FIFA World Cup ’26 Predictor",
    dates: "May 2026 – present",
    context: "Personal project",
    stack: ["Python", "scikit-learn", "pandas", "NumPy", "Flask", "JavaScript"],
    summary: "A probabilistic forecasting model producing win/loss probabilities across tournament scenarios.",
    points: [
      "Built on 500+ international matches, engineering team-strength features and correcting for class imbalance; 55% accuracy across tournament scenarios.",
      "Served forecasts through a full-stack Flask and JavaScript web app with real-time match-statistics visualizations.",
    ],
    links: [{ label: "Code", href: "https://github.com/jana18ro/FIFA-WC26-Predictor" }],
    visual: "forecast",
  },
  {
    title: "Machine Learning Package",
    dates: "Apr – May 2026",
    context: "Rice University",
    stack: ["Python", "NumPy", "pandas", "scikit-learn", "PyTorch", "pytest"],
    summary: "Core machine learning models built as reusable object-oriented components.",
    points: [
      "Implemented regression, decision tree, clustering, SVM and neural network models, comparing predictive performance with feature engineering and cross-validation.",
      "Wrote a pytest suite to keep results reproducible as the package grows.",
    ],
    links: [
      {
        label: "Code",
        href: "https://github.com/jana18ro/CMOR-438-Data-Science-and-Machine-Learning",
      },
    ],
    visual: "models",
  },
  {
    title: "AURA: Accessible Understanding & Remediation Assistant",
    dates: "Mar – Aug 2026",
    context: "Rice University",
    stack: ["Azure", "GPT-4o", "FastAPI"],
    summary: "Splitting multi-document government PDF productions into searchable, accessible records.",
    points: [
      "Built an Azure custom classifier for page-stream segmentation and benchmarked it head-to-head against a GPT-4o rulebook baseline on accuracy and F1 score.",
      "Contributed to an end-to-end pipeline (NiceGUI, FastAPI, Elasticsearch; OCR via Azure Layout and Mathpix) producing searchable PDF/UA- and WCAG-compliant records for a campus-wide pilot at Rice.",
    ],
    visual: "benchmark",
  },
  {
    title: "Signly",
    dates: "Sep 2026",
    context: "HackRice ’26",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "MediaPipe", "Gemini API"],
    summary: "A webcam ASL-learning app. I built the gameplay layer.",
    points: [
      "A 5-level Practice course scaling from 5 to 36 signs, with per-sign confidence gating to keep every sign completable.",
      "A 3-tier timed Speed mode (15s/30s/60s) drawing from a no-repeat shuffled deck (sampling without replacement).",
      "A 9-game Math Lab answered in ASL digits across 3 difficulty tiers (arithmetic to calculus) with combo/XP scoring, validated against 18,000+ generated test problems.",
    ],
    visual: "signs",
  },
];

export const experience: Entry[] = [
  {
    title: "Software Engineering & Data Science Research Intern",
    dates: "Apr – Aug 2026",
    context: "Baker Institute for Public Policy, Rice University · Houston, TX",
    summary:
      "Databases, document pipelines and analytical frameworks for a 15-person research team.",
    points: [
      "Co-designed and deployed a scalable relational database in Python, Django and FastAPI structuring 10,000+ policy documents (~200,000 pages), and built automated Azure AI OCR, NLP and NER pipelines, cutting manual processing time by ~50% and improving data retrieval efficiency by ~30%.",
      "Contributed to Azure AI–driven analytical frameworks quantifying expert influence on federal policymaking, using high-accuracy text extraction to improve accessibility of archive records and link key actors, institutions and outcomes.",
    ],
  },
  {
    title: "AI Training Engineer",
    dates: "Feb – May 2026",
    context: "Handshake AI · Houston, TX",
    summary: "Evaluating frontier LLM output for technical accuracy and logical reasoning.",
    points: [
      "Annotated 100+ datasets of frontier LLM outputs and engineered domain-specific prompts, flagging edge cases, debugging hallucinations in generated code, and providing structured RLHF feedback that improved model reliability by ~10%.",
    ],
  },
];

export const leadership: Entry[] = [
  {
    title: "Fundraising Chair",
    dates: "Mar 2026 – present",
    context: "Rice University African Student Association",
    summary: "Budgets for 5 events per semester.",
    points: [
      "Uses cost and feasibility models in Excel to set prices, forecast revenue and allocate funds.",
      "Designed a tiered paid-voting and bidding auction targeting $1,000+ in profit.",
    ],
  },
  {
    title: "New Student Representative",
    dates: "Aug 2025 – Mar 2026",
    context: "Rice University Student Senate",
    summary:
      "Ran cost-benefit and feasibility analyses estimating the fiscal impact of proposed campus programs.",
    points: [
      "Advocated data-driven policy changes to 50+ senators and college presidents based on feedback from 1,000+ new students.",
    ],
  },
];

export const honors = [
  "National Finalist, 2025 International Economics Olympiad",
  "Overall Best Graduating Student and Highest Honors in Economics, Mathematics & Computer Science, Loyola Jesuit College",
  "Bloomberg Market Concepts",
  "AWS AI & ML Scholars",
];

export const toolkit = [
  {
    label: "Quantitative methods",
    items:
      "Probability & Statistics, Regression, Probabilistic Forecasting, Cross-Validation, Classification Metrics (Accuracy, F1), Economic & Financial Modeling, Cost-Benefit Analysis",
  },
  { label: "Languages", items: "Python, C/C++, SQL, JavaScript, TypeScript, HTML/CSS" },
  {
    label: "Libraries and tools",
    items:
      "NumPy, Pandas, Scikit-learn, PyTorch, Matplotlib, MATLAB, Excel, FastAPI, Flask, Django, React, Microsoft Azure, Elasticsearch, OpenAI API (GPT-4o), Git",
  },
  {
    label: "Coursework",
    items:
      "Probability & Statistics, Multivariable Calculus, Data Science & Machine Learning, Algorithmic Thinking, Applied Econometrics, Computer Organization (C++), Program Design (Java), Microeconomics, Macroeconomics, Computational Thinking",
  },
];
