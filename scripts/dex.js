// DEX — Smart Built-in AI with Section Navigation

const DEX_BRAIN = [
    {
        tags: ['hi', 'hello', 'hey', 'sup', 'yo', 'hola', 'howdy', 'whats up', "what's up", 'good morning', 'good afternoon', 'good evening', 'good night', 'greetings', 'hii', 'heyy', 'helloo', 'hai', 'helo'],
        reply: () => pick([
            "Hey! 👋 I'm Dex, Kathiravan's personal AI. Ask me about his skills, projects, experience, or how to contact him!",
            "Hello there! 😊 I'm Dex. What would you like to know about Kathiravan?",
            "Hey! Great to see you here. I can tell you all about Kathiravan — just ask!",
            "Hi! 🚀 I'm Dex. Ask me anything — skills, projects, certifications, or how to hire Kathiravan!"
        ])
    },
    {
        tags: ['who are you', 'what are you', 'who is dex', 'about you', 'introduce', 'your name', 'are you ai', 'are you a bot', 'are you human', 'what do you do', 'tell me about yourself', 'about dex'],
        reply: () => pick([
            "I'm Dex — a built-in AI assistant crafted by Kathiravan himself. I know everything about him. Ask away! 💡",
            "Dex here! I'm Kathiravan's personal portfolio assistant. No API, no cloud — just pure intelligence 😄 What do you want to know?",
            "I'm Dex, Kathiravan's AI twin. I can answer anything about his skills, projects, journey, and more!"
        ])
    },
    {
        tags: ['who is kathiravan', 'about kathiravan', 'tell me about him', 'who is he', 'about him', 'describe him', 'kathiravan', 'kathir', 'kd', 'developer', 'portfolio owner', 'who made', 'who built', 'tell me about kath'],
        section: 'about',
        reply: () => "Kathiravan Devendiran is a B.E. Computer Science student at DSCE (CGPA: 8.73) and a passionate Full-Stack Developer. 🎯\n\nHe's the Co-founder of Aruvili LMS, Founder of Agrow Agency, a National Hackathon finalist, and a former SDE Intern at Corizo & Oneyes Infotech. Taking you to his About section! 👇"
    },
    {
        tags: ['skill', 'tech', 'stack', 'technolog', 'language', 'framework', 'tool', 'expert', 'what can he do', 'what does he know', 'program', 'coding', 'code', 'develop', 'proficien', 'good at', 'special', 'capabilit', 'what he know', 'what he do', 'know about', 'familiar'],
        section: 'skills',
        reply: () => "Here's Kathiravan's full tech arsenal ⚡\n\n💻 Languages: JavaScript, Python, SQL, Java, C++\n🎨 Frontend: React.js, Next.js, Three.js, Tailwind CSS, Framer Motion\n🔧 Backend: Node.js, Express.js, MySQL, Firebase, API Design\n🛠 Tools: Git, GitHub, Docker, Vercel, Figma, VS Code\n\nTaking you to his Expertise section! 👇"
    },
    {
        tags: ['javascript', ' js ', 'react', 'nextjs', 'next.js', 'reactjs', 'tailwind', 'three.js', 'threejs', 'framer', 'frontend', 'front end', 'front-end', 'ui', 'interface'],
        section: 'skills',
        reply: () => "Kathiravan is highly proficient in JavaScript and its ecosystem — React.js, Next.js, Three.js, Tailwind CSS, and Framer Motion. Frontend is one of his strongest suits! 🎨\n\nLet me show you his full expertise! 👇"
    },
    {
        tags: ['python', 'machine learn', 'ml', 'artificial intel', 'deep learn', 'genai', 'generative ai', 'ai model', 'neural', 'data science', 'intelligent', 'automation'],
        section: 'skills',
        reply: () => "Kathiravan is deeply into AI & Python! 🤖\n\nHe built Agrow Lens AI for agricultural forecasting using ML models, holds an AI certification, and is currently exploring Generative AI integration. Showing you his expertise! 👇"
    },
    {
        tags: ['node', 'nodejs', 'express', 'backend', 'back end', 'back-end', 'server', 'api', 'mysql', 'database', 'firebase', 'sql', 'db'],
        section: 'skills',
        reply: () => "On the backend, Kathiravan works with Node.js, Express.js, MySQL, Firebase, and REST API design. He architects full-stack systems with optimized schemas and advanced caching. 🔧\n\nTaking you to his Expertise section! 👇"
    },
    {
        tags: ['project', 'work', 'built', 'made', 'what has he built', 'show me', 'works', 'creation', 'show project', 'see project', 'what did he build', 'what he built', 'his work', 'his project', 'portfolio', 'product'],
        section: 'projects',
        reply: () => "Kathiravan's featured projects:\n\n🌱 Aruvili LMS — A scalable Learning Management System. Live at aruvili.com\n🤖 Agrow Lens AI — Agricultural AI suite. National Hackathon finalist!\n🏢 Agrow Agency — Freelancing agency at agrow-agency.vercel.app\n\nTaking you to his Works section! 👇"
    },
    {
        tags: ['aruvili', 'lms', 'learning management', 'learning platform', 'education platform', 'e-learning', 'elearning', 'online learning'],
        section: 'projects',
        reply: () => "Aruvili is a high-performance Learning Management System that Kathiravan co-founded! 🚀\n\nBuilt with Next.js and Node.js, designed for thousands of learners with advanced caching and optimized schemas. Taking you there! 👇"
    },
    {
        tags: ['agrow agency', 'agency', 'freelanc', 'client project', 'agrow-agency', 'his agency', 'his company'],
        section: 'projects',
        reply: () => "Agrow Agency is Kathiravan's freelancing agency! 🏢\n\nHe delivers full-stack web apps and AI-powered solutions for real clients. Visit at agrow-agency.vercel.app. Taking you to his Works! 👇"
    },
    {
        tags: ['agrow', 'agrowlens', 'agrow lens', 'agricultur', 'crop', 'farm', 'yield', 'soil', 'plant', 'harvest'],
        section: 'projects',
        reply: () => "Agrow Lens AI is Kathiravan's agricultural intelligence project! 🌾\n\nIt uses ML for predictive crop health analysis and yield forecasting based on real-time soil and weather data. National Hackathon finalist! Taking you to his Works! 👇"
    },
    {
        tags: ['experienc', 'work histor', 'journey', 'milestone', 'career', 'background', 'past', 'timeline', 'chronicle', 'kathir journey', 'his journey', 'show journey', 'what he did', 'what has he done', 'his story', 'story of', 'tell me his', 'life of', 'path', 'road', 'history of kathir', 'about his career'],
        section: 'experience',
        reply: () => "Kathiravan's journey so far 🗺️\n\n🎓 2024–2028 — B.E. CSE at DSCE, CGPA: 8.73\n💼 2024–2025 — SDE Intern at Corizo\n🍽 2024–2026 — Software Dev Intern at Oneyes Infotech (Restaurant POS)\n🚀 2024–Present — Co-founder, Aruvili LMS\n🏢 2025–Present — Founder, Agrow Agency\n🏆 2026 — National Hackathon finalist\n\nTaking you to his Milestones! 👇"
    },
    {
        tags: ['corizo', 'sde', 'software engineer intern', 'industry experienc', 'internship experienc', 'where did he intern', 'his internship', 'past intern'],
        section: 'experience',
        reply: () => "Kathiravan completed an SDE Internship at Corizo (2024–2025)! 💼\n\nHe collaborated on enterprise-level web modules and refined AI integration workflows using React and Node.js. Taking you to his Journey! 👇"
    },
    {
        tags: ['oneyes', 'infotech', 'pos', 'restaurant', 'billing', 'point of sale', 'kitchen', 'table tracking', 'order management'],
        section: 'experience',
        reply: () => "At Oneyes Infotech Solutions (2024–2026), Kathiravan built a full Restaurant POS System! 🍽\n\nCovering order management, billing, table tracking, and real-time kitchen updates for seamless restaurant operations. Taking you to his Journey! 👇"
    },
    {
        tags: ['education', 'college', 'universit', 'dsce', 'degree', 'cgpa', 'gpa', 'stud', 'student', 'academ', 'coimbatore', 'dhanalakshmi', 'where does he study', 'where did he study', 'his college', 'his degree', 'his marks', 'his grade', 'qualification'],
        section: 'experience',
        reply: () => "Kathiravan is pursuing B.E. in Computer Science & Engineering at Dhanalakshmi Srinivasan College of Engineering (DSCE), Coimbatore 🎓\n\nCurrent CGPA: 8.73 / 10.00 (2024–2028). Taking you to his Journey! 👇"
    },
    {
        tags: ['cert', 'honor', 'award', 'achiev', 'hackathon', 'thozhil', 'badge', 'credential', 'qualif', 'accomplish', 'show cert', 'see cert', 'his award', 'his honor', 'recognition', 'prize', 'won', 'winning', 'triumph', 'success', 'what he won', 'competition'],
        section: 'certifications',
        reply: () => "Kathiravan's certifications & honors 🏅\n\n🧠 Artificial Intelligence — Neural Networks & ML\n🛡 Cyber Security — Network Security & Threat Analysis\n📡 IoT Architecture — Smart Home & Industrial IoT\n🌐 Web Development — Full-Stack & React\n🏅 Oneyes Infotech — Excellence in Software Dev\n🏆 Thozhil — National Hackathon Finalist\n\nTaking you to his Honors section! 👇"
    },
    {
        tags: ['contact', 'email', 'reach', 'connect', 'message', 'talk to', 'get in touch', 'dm', 'mail', 'linkedin', 'github', 'social', 'how to contact', 'how can i reach', 'how do i contact', 'where to find', 'his email', 'his linkedin', 'his github', 'instagram', 'insta'],
        section: 'contact',
        reply: () => "You can reach Kathiravan at 📧 kathiravanh1919@gmail.com\n\nOr use the Contact form directly. He's also on:\n🔗 LinkedIn: kathiravan-devendiran\n💻 GitHub: kathiravan-dev\n📸 Instagram: @kathir_31_\n\nHe responds fast to bold ideas! 🤝 Taking you to the Connect section! 👇"
    },
    {
        tags: ['hire', 'availab', 'opportunit', 'recruit', '2026', 'looking for', 'open to', 'job', 'position', 'role', 'vacanc', 'internship', 'can i hire', 'is he available', 'want to hire', 'need a developer', 'looking for developer'],
        section: 'contact',
        reply: () => "Yes! Kathiravan is actively seeking 2026 internship opportunities! 🎯\n\nHe brings:\n✅ Hands-on MERN/PERN stack experience\n✅ Real-world AI project experience\n✅ Strong academic record (CGPA: 8.73)\n✅ Co-founder of Aruvili LMS\n✅ Founder of Agrow Agency\n\nLet me take you to his Contact section! 👇"
    },
    {
        tags: ['thank', 'thanks', 'thx', 'ty', 'appreciate', 'helpful', 'good job', 'well done', 'nice', 'great', 'awesome', 'cool', 'perfect', 'excellent', 'wonderful'],
        reply: () => pick([
            "Glad I could help! 😊 Feel free to ask anything else about Kathiravan.",
            "Anytime! Is there anything else you'd like to know? 🚀",
            "Happy to help! Don't forget to check out his projects and drop him a message! 💡"
        ])
    },
    {
        tags: ['bye', 'goodbye', 'see you', 'later', 'cya', 'take care', 'farewell', 'see ya', 'gotta go', 'leaving'],
        reply: () => pick([
            "Goodbye! 👋 Don't forget to connect with Kathiravan at kathiravanh1919@gmail.com",
            "See you! Come back anytime. 🚀",
            "Take care! Feel free to return if you have more questions. 😊"
        ])
    },
    {
        tags: ['how are you', 'how do you do', "how's it going", 'hows it going', 'you good', 'doing well', 'feeling'],
        reply: () => pick([
            "I'm running at full capacity! 💡 Ready to tell you all about Kathiravan. What do you want to know?",
            "Always online and ready to help! 🚀 Ask me anything about Kathiravan.",
            "Doing great, thanks for asking! 😄 What can I help you with?"
        ])
    },
    {
        tags: ['what can you do', 'help', 'what do you know', 'capabilit', 'feature', 'guide', 'assist', 'menu', 'option', 'how do you work', 'what do you offer', 'show me what'],
        reply: () => "I can answer questions about:\n\n👤 Who Kathiravan is → About\n💻 His tech skills & stack → Expertise\n🚀 His projects (Aruvili, Agrow Lens, Agrow Agency) → Works\n🗺️ His career journey & experience → Milestones\n🏅 His certifications & awards → Honors\n📧 How to contact or hire him → Connect\n\nJust ask naturally and I'll navigate you there! 😊"
    },
    {
        tags: ['funny', 'joke', 'laugh', 'humor', 'lol', 'haha', 'fun'],
        reply: () => pick([
            "Why do programmers prefer dark mode? Because light attracts bugs! 🐛😄 Anyway, ask me about Kathiravan!",
            "I'd tell you a joke about JavaScript, but I'm afraid you wouldn't get the callback 😂",
            "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?' 😄"
        ])
    }
];

const FALLBACK = [
    "I'm not sure about that, but I can tell you about Kathiravan's skills, projects, experience, or certifications. What interests you? 😊",
    "Hmm, I didn't quite get that. Try asking about his projects, tech stack, journey, or how to contact him!",
    "I didn't catch that one! Ask me about Kathiravan's skills, Aruvili, Agrow Lens AI, or his 2026 internship availability. 🚀",
    "Not sure I follow! Try: 'Show me his projects', 'What are his skills?', or 'Show certifications'. 😊"
];

const pick = arr => arr[Math.floor(Math.random() * arr.length)];

const navigateTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 600);
};

const getResponse = (input) => {
    const text = input.toLowerCase().trim();
    let bestMatch = null;
    let bestScore = 0;

    for (const item of DEX_BRAIN) {
        const score = item.tags.filter(tag => text.includes(tag)).length;
        if (score > bestScore) {
            bestScore = score;
            bestMatch = item;
        }
    }

    if (bestMatch && bestScore > 0) {
        if (bestMatch.section) navigateTo(bestMatch.section);
        return typeof bestMatch.reply === 'function' ? bestMatch.reply() : bestMatch.reply;
    }

    if (text.length < 4) return "Could you elaborate a bit? I want to give you the best answer! 😊";
    return pick(FALLBACK);
};

// ── UI ────────────────────────────────────────────────────────────────────────
const toggle  = document.getElementById('dex-toggle');
const win     = document.getElementById('dex-window');
const input   = document.getElementById('dex-input');
const msgs    = document.getElementById('dex-messages');
const sendBtn = document.getElementById('dex-send-btn');

if (toggle && win) {
    const toggleDex = () => {
        win.classList.toggle('hidden');
        if (!win.classList.contains('hidden')) input.focus();
    };

    toggle.addEventListener('click', toggleDex);
    document.getElementById('dex-close')?.addEventListener('click', toggleDex);

    const appendMsg = (html, isUser = false) => {
        const div = document.createElement('div');
        div.className = isUser
            ? 'bg-primary text-slate-950 p-4 rounded-2xl rounded-tr-none ml-auto text-sm font-bold shadow-lg'
            : 'p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed text-slate-200';
        if (!isUser) div.style.cssText = 'background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);';
        div.innerHTML = html.replace(/\n/g, '<br>');
        msgs.appendChild(div);
        msgs.scrollTo({ top: msgs.scrollHeight, behavior: 'smooth' });
    };

    const handleChat = () => {
        const text = input.value.trim();
        if (!text) return;
        appendMsg(text, true);
        input.value = '';
        setTimeout(() => appendMsg(getResponse(text)), 350);
    };

    sendBtn.addEventListener('click', handleChat);
    input.addEventListener('keypress', e => { if (e.key === 'Enter') handleChat(); });
}
