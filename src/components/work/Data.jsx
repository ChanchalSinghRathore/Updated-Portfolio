import { link } from "framer-motion/client"
import Work1 from "../../assets/work1.png"
import Work2 from "../../assets/work2.jpg"
import Work3 from "../../assets/work3.jpeg"
import Work4 from "../../assets/work4.jpg"
import Work5 from "../../assets/work5.jpg"
import Blog from "../../assets/Blog.jpg"
import Work6 from "../../assets/Work6.jpg"


export const projectsData = [


    {
      id: 1,
      image: Work1,
      title: "Music Player",
      category: "web",
      link:"https://spotify4u.freewebhostmost.com/"
    },
    {
      id: 2,
      image: Work2,
      title: "UI Project",
      category: "web",
      link:"https://ui-project-alpha.vercel.app/"
    },
    {
      id: 3,
      image: Work3,
      title: "Group Discussion",
      category: "web",
      link:"https://group-discussion.vercel.app/"
    },
    {
      id: 5,
      image: Blog,
      title: "Blog",
      category: "web",
      link:"https://blog-inspireothers.vercel.app/"
    },
    {
      id: 6,
      image: Work6,
      title: "Chrome Extension",
      category: "web",
      link:"https://github.com/ChanchalSinghRathore/Chrome-Extension"
    },
    {
      id: 4,
      image: Work4,
      title: "App movil",
      category: "app",
    },
  ];



  export const projectsNav =[
    {
        name:'all'
    },
    {
        name:'web'
    },
    {
        name:'app'
    },
    {
        name:'design'
    },
  ]