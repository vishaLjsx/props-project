import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const jobs = [{
    brandLogo: "https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    name: "Amazon",
    datePosted: "2 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    name: "Meta",
    datePosted: "8 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-index-content-uploads-10.png",
    name: "Apple",
    datePosted: "3 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/814/original/netflix-mobile-application-logo-free-png.png",
    name: "Netflix",
    datePosted: "10 days ago",
    post: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/028/339/965/original/microsoft-icon-logo-symbol-free-png.png",
    name: "Microsoft",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Pune, India",
  },
  {
    brandLogo: "https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png",
    name: "Google",
    datePosted: "12 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    name: "Amazon",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    name: "Meta",
    datePosted: "9 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Pune, India",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/028/339/965/original/microsoft-icon-logo-symbol-free-png.png",
    name: "Microsoft",
    datePosted: "1 day ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hour",
    location: "Mumbai, India",
  },
];

  return (
    <>
     <div className="parent">
      {jobs.map((elem,idx)=>{
        return <div key={idx}>
          <Card brandLogo={elem.brandLogo} name={elem.name} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}
     </div>
    </>
  )
}

export default App