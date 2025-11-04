import React from 'react'
import './App.css'
import Card from './components/card.jsx'
import User from './components/user.jsx' 


const App = () => {
  const jobopenings = [
  {
brand_logo: "https://static.vecteezy.com/system/resources/previews/046/861/647/non_2x/google-logo-transparent-background-free-png.png",
  name_of_company: "Google",
    date_posted: "5 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 30,
    location: "Mumbai, India"
  },
  {
    brand_logo: "https://i.pinimg.com/1200x/0a/06/60/0a06600cc3cedeb49280b54114c88ce6.jpg",
    name_of_company: "Amazon",
    date_posted: "2 weeks ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 45,
    location: "Mumbai, India"
  },
  {
    brand_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMhYuMbA0YMCa1hNHoCZRPjswt6-6AXCb2A&s",
    name_of_company: "Infosys",
    date_posted: "1 month ago",
    post: "Business Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 15,
    location: "Mumbai, India"
  },
  {
    brand_logo: "https://indiacsr.in/wp-content/uploads/2024/05/tcs-logo-india-csr.jpg",
    name_of_company: "TCS",
    date_posted: "10 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 40,
    location: "Mumbai, India"
  },
  {
    brand_logo: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/05/05/Photos/Processed/wiprologo-kXmF--621x414@LiveMint.jpg",
    name_of_company: "Wipro",
    date_posted: "3 weeks ago",
    post: "Quality Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 20,
    location: "Mumbai, India"
  },
  {
    brand_logo: "https://blog.logomaster.ai/hs-fs/hubfs/adobe-logo-3.jpg?width=662&height=441&name=adobe-logo-3.jpg",
    name_of_company: "Adobe",
    date_posted: "4 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 50,
    location: "Mumbai, India"
  },
  {
    brand_logo: "https://www.logodesignlove.com/wp-content/uploads/2012/08/microsoft-logo-02.jpeg",
    name_of_company: "Microsoft",
    date_posted: "1 week ago",
    post: "System Administrator",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 35,
    location: "Mumbai, India"
  },
  {
    brand_logo: "https://download.logo.wine/logo/Capgemini/Capgemini-Logo.wine.png",
    name_of_company: "Capgemini",
    date_posted: "2 months ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 42,
    location: "Mumbai, India"
  },
  {
    brand_logo: "https://static.vecteezy.com/system/resources/previews/009/030/121/non_2x/hcl-logo-hcl-letter-hcl-letter-logo-design-initials-hcl-logo-linked-with-circle-and-uppercase-monogram-logo-hcl-typography-for-technology-business-and-real-estate-brand-vector.jpg",
    name_of_company: "HCL Technologies",
    date_posted: "15 days ago",
    post: "Network Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 25,
    location: "Mumbai, India"
  },
  {
    brand_logo: "https://kreafolk.com/cdn/shop/articles/ibm-logo-design-history-and-evolution-kreafolk_f6963bf2-5011-41cd-a198-3b9b4dcff48d.jpg?v=1717725060&width=2048",
    name_of_company: "IBM",
    date_posted: "1 week ago",
    post: "Project Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 55,
    location: "Mumbai, India"
  }
];
// console.log(jobopenings);

  // arr.map(function(elem){
  //       console.log(elem.user);
  //     })
  return (
    <div className="parent">
      {jobopenings.map(function(elem, idx){
        return <div key = {idx}>
         <Card company={elem.name_of_company} post={elem.post} brand_logo={elem.brand_logo} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} date_posted={elem.date_posted} />
      </div>
      })}
    </div>
  )
}

export default App

