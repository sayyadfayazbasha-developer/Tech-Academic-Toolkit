export interface CodingPlatform {
  name: string;
  description: string;
  users?: string;
  link: string;
}

export interface YouTubeChannel {
  name: string;
  description: string;
  subscribers: string;
  link: string;
}

export interface LinkResource {
  title: string;
  link: string;
  buttonText: string;
}

export const codingPlatforms: CodingPlatform[] = [
  { name: "LeetCode", description: "Practice coding problems", users: "50M+", link: "https://leetcode.com/" },
  { name: "HackerRank", description: "Programming challenges", users: "20M+", link: "https://www.hackerrank.com/" },
  { name: "CodeChef", description: "Competitive programming", users: "3M+", link: "https://www.codechef.com/" },
  { name: "Codeforces", description: "Competitive programming contests", users: "2M+", link: "https://codeforces.com/" },
  { name: "TopCoder", description: "Algorithm and design challenges", users: "1.5M+", link: "https://www.topcoder.com/" },
  { name: "AtCoder", description: "Japanese competitive programming", users: "0.5M+", link: "https://atcoder.jp/" },
  { name: "Coderbyte", description: "Practice algorithms, data structures, and prepare for coding interviews.", link: "https://coderbyte.com" },
  { name: "Edabit", description: "Easy-to-medium coding challenges, great for beginners.", link: "https://edabit.com" },
  { name: "Exercism", description: "Practice exercises across 50+ languages with mentorship.", link: "https://exercism.org" },
  { name: "Project Euler", description: "Solve complex math-based coding problems.", link: "https://projecteuler.net" },
  { name: "SPOJ", description: "Huge collection of algorithmic problems.", link: "https://www.spoj.com" },
  { name: "CodeSignal", description: "Coding assessments used by companies for hiring.", link: "https://codesignal.com" },
  { name: "InterviewBit", description: "Structured courses for technical interviews.", link: "https://www.interviewbit.com" },
  { name: "GeeksforGeeks", description: "Large DSA collection with company-specific prep.", link: "https://practice.geeksforgeeks.org" },
  { name: "CodinGame", description: "Solve problems in a game-like environment.", link: "https://www.codingame.com" },
];

export const youtubeChannels: YouTubeChannel[] = [
  { name: "FreeCodeCamp.org", description: "Coding tutorials and full courses", subscribers: "8.5M+", link: "https://www.youtube.com/results?search_query=freecodecamp.org" },
  { name: "Traversy Media", description: "Web development tutorials", subscribers: "2M+", link: "https://www.youtube.com/results?search_query=Traversy+Media" },
  { name: "Net Ninja", description: "Modern JavaScript, Node.js, Vue.js, React & more", subscribers: "1M+", link: "https://www.youtube.com/results?search_query=Net+Ninja" },
  { name: "Fireship", description: "High-intensity code tutorials", subscribers: "2.5M+", link: "https://www.youtube.com/results?search_query=Fireship" },
  { name: "Programming with Mosh", description: "Clean code, JavaScript, Python, React, Node.js", subscribers: "3.5M+", link: "https://www.youtube.com/results?search_query=Programming+with+Mosh" },
  { name: "Academind", description: "Web development, frameworks, and programming", subscribers: "1M+", link: "https://www.youtube.com/results?search_query=Academind" },
  { name: "CodeWithHarry", description: "Programming tutorials in Hindi", subscribers: "4M+", link: "https://www.youtube.com/results?search_query=CodeWithHarry" },
  { name: "Apna College", description: "DSA, Web Dev, Android Dev in Hindi", subscribers: "3M+", link: "https://www.youtube.com/results?search_query=Apna+College" },
  { name: "CS50", description: "Harvard University's intro to computer science", subscribers: "2.5M+", link: "https://www.youtube.com/results?search_query=CS50" },
  { name: "The Coding Train", description: "Creative coding tutorials", subscribers: "1.5M+", link: "https://www.youtube.com/results?search_query=The+Coding+Train" },
];

export const practiceChallenges: LinkResource[] = [
  { title: "Daily Coding Challenges", link: "https://www.hackerrank.com/domains/tutorials/30-days-of-code", buttonText: "Start Challenge" },
  { title: "SQL Query Puzzles", link: "https://leetcode.com/problemset/database/", buttonText: "Solve Puzzle" },
  { title: "DSA Problem of the Day", link: "https://practice.geeksforgeeks.org/problem-of-the-day", buttonText: "View Problem" },
  { title: "Interactive MCQs with Leaderboard", link: "https://www.sanfoundry.com/java-mcqs-quiz-online/", buttonText: "Take Quiz" },
  { title: "Timed Quizzes (Java, Python, Web Dev)", link: "https://www.w3schools.com/quiztest/", buttonText: "Start Quiz" },
];

export const interviewPrep: LinkResource[] = [
  { title: "Company-wise Interview Questions (Infosys, TCS, Amazon)", link: "https://www.geeksforgeeks.org/company-interview-corner/", buttonText: "View Questions" },
  { title: "Mock Interview Videos", link: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTp7tffADzQ7cgroupx-i", buttonText: "Watch Interview" },
  { title: "Resume Building Tips & Templates", link: "https://www.canva.com/resumes/templates/", buttonText: "Get Tips" },
  { title: "HR Interview FAQs & Situational Questions", link: "https://www.indeed.com/career-advice/interviewing/hr-interview-questions", buttonText: "Read FAQs" },
  { title: "Coding Test Preparation (Aptitude, Logic Puzzles)", link: "https://www.indiabix.com/", buttonText: "Start Prep" },
];

export const projectIdeas: LinkResource[] = [
  { title: "Mini Projects (To-Do List, Portfolio Website, CRUD App)", link: "https://www.freecodecamp.org/news/20-web-projects-with-source-code/", buttonText: "Explore Ideas" },
  { title: "Major Projects (E-commerce Website, LMS Platform)", link: "https://www.javatpoint.com/java-projects", buttonText: "View Projects" },
  { title: "GitHub Trending Repositories", link: "https://github.com/trending", buttonText: "Browse Repos" },
  { title: "Downloadable Source Code Packs", link: "https://www.sourcecodester.com/", buttonText: "Download Code" },
];

export const liveSessions: LinkResource[] = [
  { title: "Upcoming Webinars Calendar", link: "https://www.eventbrite.com/d/online/webinar/", buttonText: "View Calendar" },
  { title: "Join Live Session (Zoom, Google Meet)", link: "https://zoom.us/join", buttonText: "Join Session" },
  { title: "Recordings Archive", link: "https://www.youtube.com/c/freecodecamp/playlists", buttonText: "Watch Recordings" },
];

export const resourceLibrary: LinkResource[] = [
  { title: "Latest NPTEL Course Links", link: "https://nptel.ac.in/courses/", buttonText: "Explore Courses" },
  { title: "B.Tech Notes PDFs (Semester-wise)", link: "https://www.aktu.ac.in/syll.html", buttonText: "Get Notes" },
  { title: "E-Books Section (DSA, Java, Web Dev)", link: "https://www.tutorialspoint.com/tutorial_library.htm", buttonText: "Read E-Books" },
  { title: "Downloadable Cheat Sheets (Git, Linux Commands)", link: "https://cheatography.com/", buttonText: "Get Cheat Sheets" },
  { title: "GitHub Learning Resources", link: "https://docs.github.com/en/get-started", buttonText: "Learn GitHub" },
];

export const communityForum: LinkResource[] = [
  { title: "Doubt Discussion Boards (StackOverflow)", link: "https://stackoverflow.com/", buttonText: "Discuss Doubts" },
  { title: "Peer-to-Peer Support Chat (Discord)", link: "https://discord.com/invite/programming", buttonText: "Join Chat" },
  { title: "Contributor Ranks & Badges System", link: "https://www.freecodecamp.org/news/how-to-earn-badges-on-freecodecamp/", buttonText: "Learn More" },
  { title: "User-generated Tutorials Upload (Dev.to)", link: "https://dev.to/new", buttonText: "Contribute" },
];

export const placementTracker: LinkResource[] = [
  { title: "Company-wise Hiring Status (LinkedIn)", link: "https://www.linkedin.com/jobs/search/", buttonText: "View Status" },
  { title: "Eligibility Criteria and CTC Details", link: "https://www.ambitionbox.com/", buttonText: "Check Details" },
  { title: "Placement Success Stories from Alumni", link: "https://www.linkedin.com/pulse/success-stories/", buttonText: "Read Stories" },
  { title: "PrepInsta Placement Tracker", link: "https://prepinsta.com", buttonText: "View Status" },
  { title: "Naukri Campus Tracker", link: "https://www.naukri.com/campus", buttonText: "View Status" },
  { title: "Internshala Placement Tracker", link: "https://internshala.com", buttonText: "View Status" },
  { title: "HirePro Campus Placements", link: "https://www.hirepro.in", buttonText: "View Status" },
  { title: "Superset", link: "https://joinsuperset.com", buttonText: "View Status" },
];

export const careerPathGuides: LinkResource[] = [
  { title: "Roadmaps (Java Full Stack, Data Science, Dev)", link: "https://roadmap.sh/", buttonText: "View Roadmaps" },
  { title: "GeeksforGeeks Careers", link: "https://www.geeksforgeeks.org/career/", buttonText: "View Roadmaps" },
  { title: "Scaler Academy", link: "https://www.scaler.com/academy/", buttonText: "View Roadmaps" },
  { title: "Internshala Trainings", link: "https://trainings.internshala.com", buttonText: "View Roadmaps" },
  { title: "Coursera Career Learning Paths", link: "https://www.coursera.org/career-academy", buttonText: "View Roadmaps" },
  { title: "Interview Kickstart", link: "https://www.interviewkickstart.com", buttonText: "View Roadmaps" },
];

export const jntuaData: LinkResource[] = [
  { title: "JNTUA Updates", link: "https://www.jntua.ac.in/category/examinations-notifications/", buttonText: "View Updates" },
  { title: "JNTUA Results", link: "https://jntuaresults.ac.in/", buttonText: "Check Results" },
  { title: "JNTUA Study Materials", link: "https://www.forum.universityupdates.in/threads/jntua-b-tech-study-materials-notes-lab-manuals.34716/", buttonText: "Get Study Materials" },
  { title: "JNTUA Syllabus", link: "https://dap.jntua.ac.in/r23/", buttonText: "View Syllabus" },
];

export const pdfsMaterials: LinkResource[] = [
  { title: "JNTUA Files", link: "https://www.forum.universityupdates.in/threads/jntua-b-tech-study-materials-notes-lab-manuals.34716/", buttonText: "View Files" },
  { title: "ECE Files", link: "https://eceweber65.wixsite.com/engineeringhelper/services-7", buttonText: "View Files" },
  { title: "CSE Files", link: "https://eceweber65.wixsite.com/engineeringhelper/copy-of-ece-page", buttonText: "View Files" },
  { title: "EEE Files", link: "https://eceweber65.wixsite.com/engineeringhelper/copy-of-cse-page", buttonText: "View Files" },
  { title: "MECH Files", link: "https://eceweber65.wixsite.com/engineeringhelper/copy-of-eee-page", buttonText: "View Files" },
  { title: "CIVIL Files", link: "https://eceweber65.wixsite.com/engineeringhelper/copy-of-mech-page", buttonText: "View Files" },
  { title: "PLACEMENT Files", link: "https://eceweber65.wixsite.com/engineeringhelper/general-4", buttonText: "View Files" },
  { title: "PQP (Previous Question Papers)", link: "https://drive.google.com/folderview?id=1vwWpJKamRWltdnn4V9wxRph9USRumWn9", buttonText: "View Files" },
  { title: "UHV MATERIALS", link: "https://drive.google.com/folderview?id=16x4I5NdzS0xl_Qoif1JlRRMWEZMtozyZ", buttonText: "View Materials" },
  { title: "CSE E-LIBRARY 2.0 (Telegram)", link: "https://t.me/jntua2", buttonText: "Join Channel" },
  { title: "CSE E-LIBRARY (Telegram)", link: "https://t.me/jntuu", buttonText: "Join Channel" },
  { title: "PK e Library (Telegram)", link: "https://t.me/PkeLibrary", buttonText: "Join Channel" },
  { title: "DSA Handbook PDF", link: "https://www.freecodecamp.org/news/data-structures-and-algorithms-handbook/", buttonText: "Download PDF" },
  { title: "Java Programming E-Book", link: "https://www.tutorialspoint.com/java/java_tutorial.pdf", buttonText: "Read E-Book" },
  { title: "Web Development Cheatsheet", link: "https://htmlcheatsheet.com/", buttonText: "View Cheatsheet" },
  { title: "Operating Systems Notes", link: "https://www.geeksforgeeks.org/operating-systems/", buttonText: "View Notes" },
  { title: "Computer Networks Fundamentals", link: "https://www.tutorialspoint.com/computer_fundamentals/computer_networking.htm", buttonText: "View Materials" },
  { title: "Machine Learning Basics PDF", link: "https://www.cs.cmu.edu/~tom/mlbook.html", buttonText: "Download PDF" },
  { title: "Python for Data Science Handbook", link: "https://jakevdp.github.io/PythonDataScienceHandbook/", buttonText: "Read Handbook" },
];

export const suggestedSections: LinkResource[] = [
  { title: "JNTUA Study Materials", link: "https://www.forum.universityupdates.in/threads/jntua-b-tech-study-materials-notes-lab-manuals.34716/", buttonText: "View" },
  { title: "CSE E-LIBRARY 2.0 (Telegram)", link: "https://t.me/jntua2", buttonText: "Join" },
  { title: "CSE E-LIBRARY (Telegram)", link: "https://t.me/jntuu", buttonText: "Join" },
  { title: "PK e Library (Telegram)", link: "https://t.me/PkeLibrary", buttonText: "Join" },
  { title: "JNTUA ECE pdfs (Telegram)", link: "https://t.me/Jntuar20", buttonText: "Join" },
  { title: "PDFs (Telegram)", link: "https://t.me/fayazpdfs", buttonText: "Join" },
];
