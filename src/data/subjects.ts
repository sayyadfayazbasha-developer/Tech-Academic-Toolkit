export interface Subject {
  title: string;
  category: string;
  level: string;
  rating: number;
  youtubeLink: string;
}

const subjectsData: Subject[] = [
  { title: "Data Structures", category: "Core Programming", level: "Intermediate", rating: 4.8 },
  { title: "Object Oriented Programming", category: "Programming", level: "Beginner", rating: 4.9 },
  { title: "Database Management", category: "Database", level: "Intermediate", rating: 4.7 },
  { title: "Web Development", category: "Frontend", level: "Beginner", rating: 4.9 },
  { title: "Software Engineering", category: "Theory", level: "Advanced", rating: 4.6 },
  { title: "Computer Networks", category: "Networking", level: "Intermediate", rating: 4.5 },
  { title: "Linear Algebra and Calculus", category: "Mathematics", level: "Intermediate", rating: 4.7 },
  { title: "Chemistry", category: "Science", level: "Beginner", rating: 4.2 },
  { title: "C-Programming & Data Structures", category: "Programming", level: "Intermediate", rating: 4.8 },
  { title: "Probability & Statistics", category: "Mathematics", level: "Intermediate", rating: 4.6 },
  { title: "Applied Physics", category: "Science", level: "Beginner", rating: 4.3 },
  { title: "Communicative English", category: "Language", level: "Beginner", rating: 4.0 },
  { title: "Python Programming & Data Science", category: "Programming", level: "Advanced", rating: 4.9 },
  { title: "Engineering Drawing & Basic Electrical Engineering", category: "Engineering", level: "Beginner", rating: 4.5 },
  { title: "Engineering Workshop", category: "Engineering", level: "Beginner", rating: 4.1 },
  { title: "Java", category: "Programming", level: "Intermediate", rating: 4.7 },
  { title: "Python", category: "Programming", level: "Beginner", rating: 4.8 },
  { title: "Discrete Mathematics & Graph Theory", category: "Mathematics", level: "Intermediate", rating: 4.7 },
  { title: "Digital Electronics & Microprocessors", category: "Electronics", level: "Intermediate", rating: 4.5 },
  { title: "Advanced Data Structures & Algorithms", category: "Programming", level: "Advanced", rating: 4.9 },
  { title: "Object Oriented Programming Through Java", category: "Programming", level: "Intermediate", rating: 4.8 },
  { title: "Universal Human Values", category: "Humanities", level: "Beginner", rating: 4.0 },
  { title: "Database Management Systems", category: "Database", level: "Intermediate", rating: 4.7 },
  { title: "Operating Systems", category: "Core Computer Science", level: "Intermediate", rating: 4.6 },
  { title: "Managerial Economics & Financial Analysis", category: "Management", level: "Beginner", rating: 4.2 },
  { title: "Organizational Behaviour", category: "Management", level: "Beginner", rating: 4.1 },
  { title: "Business Environment", category: "Management", level: "Beginner", rating: 4.0 },
  { title: "Computer Organization", category: "Core Computer Science", level: "Intermediate", rating: 4.5 },
  { title: "Artificial Intelligence", category: "AI/ML", level: "Advanced", rating: 4.9 },
  { title: "Formal Languages and Automata Theory", category: "Theory", level: "Advanced", rating: 4.4 },
  { title: "Software Project Management", category: "Software Development", level: "Advanced", rating: 4.3 },
  { title: "Digital Image Processing", category: "Computer Vision", level: "Advanced", rating: 4.6 },
  { title: "Big Data Technologies", category: "Data Science", level: "Advanced", rating: 4.7 },
  { title: "Compiler Design", category: "Core Computer Science", level: "Advanced", rating: 4.5 },
  { title: "Machine Learning", category: "AI/ML", level: "Advanced", rating: 4.9 },
  { title: "Internet of Things", category: "Networking", level: "Intermediate", rating: 4.6 },
  { title: "Software Testing", category: "Software Development", level: "Intermediate", rating: 4.3 },
  { title: "Cloud Computing", category: "Networking", level: "Advanced", rating: 4.8 },
  { title: "Agile Methodologies", category: "Software Development", level: "Intermediate", rating: 4.5 },
  { title: "Cryptography & Network Security", category: "Security", level: "Advanced", rating: 4.7 },
  { title: "Natural Language Processing", category: "AI/ML", level: "Advanced", rating: 4.9 },
  { title: "Full Stack Development", category: "Web Development", level: "Advanced", rating: 4.9 },
  { title: "Block Chain Technology", category: "Emerging Technologies", level: "Intermediate", rating: 4.5 },
  { title: "Deep Learning", category: "AI/ML", level: "Advanced", rating: 4.9 },
  { title: "Computer Vision", category: "AI/ML", level: "Advanced", rating: 4.8 },
].map(subject => ({
  ...subject,
  youtubeLink: `https://www.youtube.com/results?search_query=${encodeURIComponent(subject.title + ' playlist btech')}`
}));

// Remove duplicates
const seen = new Set<string>();
export const subjects: Subject[] = subjectsData.filter(item => {
  if (seen.has(item.title)) return false;
  seen.add(item.title);
  return true;
});
