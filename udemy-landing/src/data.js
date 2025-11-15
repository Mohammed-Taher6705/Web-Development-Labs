// data.js
import img1 from "./components/Images/image-1.png";
import img2 from "./components/Images/image-2.png";
import img3 from "./components/Images/image-3.png";
import img4 from "./components/Images/image-4.png";

export const heroImages = [
  "https://img-c.udemycdn.com/notices/home_carousel_slide/image/4ecf5f5f-1e48-4783-8b06-76306c633e71.jpg",
  "https://img-c.udemycdn.com/notices/home_carousel_slide/image/4ea0e369-e5a2-4a86-b616-2fc2312a8efd.png"
];

export const heroData = [
  {
    title: "Subscribe to the best of Udemy",
    subtitle:
      "With Personal Plan, you get access to 26,000+ of our top-rated courses in tech, business, and more.",
    buttonText: "Try it now",
    showButton: true
  },
  {
    title: "Jump into learning — for less",
    subtitle:
      "If you’re new to Udemy, we’ve got good news: For a limited time, courses start at just E£259.99 for new learners!",
    buttonText: "Sign Up now",
    showButton: true
  }
];

export const featuredCourses = [
  {
    id: 1,
    title: "The Product Management for AI & Data Science Course",
    instructor: "365 Careers, Danielle Thé",
    rating: 4.5,
    numRatings: "9,014",
    price: "E£609.99",
    badge: "Premium",
    image: img1,
  },
  {
    id: 2,
    title: "The Beginner's Guide to AI - Unity 6 Compatible",
    instructor: "Penny de Byl, Penny Holistic3D",
    rating: 4.4,
    numRatings: "2,820",
    price: "E£349.99",
    badge: "Bestseller",
    image: img2,
  },
  {
    id: 3,
    title: "AI Programming in C# - Beginner to Expert",
    instructor: "Robert Gioia",
    rating: 4.2,
    numRatings: "206",
    price: "E£349.99",
    badge: "",
    image: img3,
  },
  {
    id: 4,
    title: "AI Agents for Everyone & AI Bootcamp with 100 Hands-on Labs",
    instructor: "School of AI",
    rating: 4.2,
    numRatings: "317",
    price: "E£349.99",
    badge: "Premium",
    image: img4,
  },
];


export const trustedCompanies = ["Nasdaq", "Volkswagen", "Box", "NetApp", "Eventbrite", "TCS"];
