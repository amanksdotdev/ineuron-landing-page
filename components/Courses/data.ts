export interface ICourse {
  title: string;
  instructor: string;
  img: string;
  price: string;
}
export interface ICourses {
  live: ICourse[];
  affordable: ICourse[];
  community?: ICourse[];
  one?: ICourse[];
  test?: ICourse[];
}
export const courses: ICourses = {
  live: [
    {
      title: "DSA for FAANG with Python and JavaScript",
      instructor: "Anurag Tiwari",
      img: "/assets/images/courses/dsabootcamp.jpg",
      price: "3990",
    },
    {
      title: "Full Stack Data Science Bootcamp 2.0",
      instructor: "Krish Naik",
      img: "/assets/images/courses/datascience.jpg",
      price: "14,990",
    },
    {
      title: "Full Stack Web Development with Python",
      instructor: "Navin Reddy",
      img: "/assets/images/courses/fspython.jpg",
      price: "3990",
    },
    {
      title: "YouTube Mastery Batch 2 in Hindi",
      instructor: "Amresh Bharti",
      img: "/assets/images/courses/ytmastery.png",
      price: "6990",
    },
    {
      title: "Digital Marketing in Hindi",
      instructor: "Amresh Bharti",
      img: "/assets/images/courses/digitalmarketing.png",
      price: "11,000",
    },
  ],
  affordable: [
    {
      title: "Mastering DSA with Python",
      instructor: "Hitesh Choudhary",
      img: "/assets/images/courses/dsawithpython.jpg",
      price: "499.00",
    },
    {
      title: "Mastering DSA with Java",
      instructor: "Hitesh Choudhary",
      img: "/assets/images/courses/dsawithjava.jpg",
      price: "499.00",
    },
    {
      title: "Mastering DSA with C++",
      instructor: "Hitesh Choudhary",
      img: "/assets/images/courses/dsawithcpp.jpg",
      price: "499.00",
    },
    {
      title: "Full Stack Django ",
      instructor: "Hitesh Choudhary",
      img: "/assets/images/courses/djangofs.jpg",
      price: "499.00",
    },
  ],
  community: [
    {
      title: "Angular Crash Course",
      instructor: "Hitesh Choudhary",
      img: "/assets/images/courses/angularcrash.jpg",
      price: "FREE",
    },
    {
      title: "ReactJS Crash Course",
      instructor: "Hitesh Choudhary",
      img: "/assets/images/courses/reactjscrash.jpg",
      price: "FREE",
    },
    {
      title: "HTML CSS with Emmet4",
      instructor: "Hitesh Choudhary",
      img: "/assets/images/courses/htmlcss.jpg",
      price: "FREE",
    },
    {
      title: "Custom cocopad",
      instructor: "Hitesh Choudhary",
      img: "/assets/images/courses/customcocopad.jpg",
      price: "FREE",
    },
    {
      title: "Python Crash Course",
      instructor: "Hitesh Choudhary",
      img: "/assets/images/courses/pythoncrash.jpg",
      price: "FREE",
    },
  ],
  one: [
    {
      title: "Tech Neuron",
      instructor: "200+ courses, 500+ projects...",
      img: "/assets/images/courses/techneuron.webp",
      price: "25,000",
    },
    {
      title: "Kids Neuron",
      instructor: "Lifetime access, Raise your demand...",
      img: "/assets/images/courses/kidneuron.webp",
      price: "6990",
    },
  ],
  test: [
    {
      title: "Java Interview Preparation",
      instructor: "",
      img: "/assets/images/courses/javainterview.jpg",
      price: "499.00",
    },
    {
      title: "C++ Interview Preparation",
      instructor: "",
      img: "/assets/images/courses/cppinterview.jpg",
      price: "499.00",
    },
    {
      title: "Data Structure and Algorithm Interview Preparation",
      instructor: "",
      img: "/assets/images/courses/dsainterview.jpg",
      price: "499.00",
    },
    {
      title: "HTML & CSS Interview Preparation ",
      instructor: "",
      img: "/assets/images/courses/htmlinterview.jpg",
      price: "499.00",
    },
  ],
};
