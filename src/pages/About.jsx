import { useEffect } from "react"

function About() {
  useEffect(() => {
    document.title = 'About'
  }, [])

  return (
    <>   
      <div className="container-fluid w-75 card mt-5 d-flex w-sm-50 mb-5 justify-content-center">
       <h2 className="text-primary">Our Story</h2>
       

            <p><b>'Dom' </b>and <b>'Jay'</b> were college friends who shared a passion for technology and entrepreneurship. 
            They both studied computer science and had some experience in web development and design. They also had a common problem: 
            they couldn't find a good job after graduation.
            They had applied to dozens of companies, but they either got rejected or ignored. They felt like they had the skills 
            and the talent, but they didn't have the connections or the opportunities. They also felt like the existing job websites
            were not helpful or user-friendly. They were cluttered, outdated, and impersonal.
            They decided to create their own job website, one that would be different from the rest. 
            One that would be simple, modern, and personalized. One that would help both job seekers and 
            employers find their perfect match.
            They called it Jobify, and they started working on it in their spare time. 
            They used their savings and some crowdfunding to fund their project. 
            They also recruited some of their friends and classmates to join their team.
            They spent months developing and testing their website. They wanted to make sure it was fast, secure, and reliable.
            They also wanted to make sure it was easy to use and attractive to look at.
            They focused on three main features that they thought would make Rapid Jobs stand out:</p>

            <ul>
              <li> A smart matching algorithm that would analyze the profiles of job seekers and employers and suggest the best matches based on skills, experience, preferences, and personality.</li>
              <li>A social networking feature that would allow users to create and join communities based on their interests, goals, and backgrounds. Users could also follow, message, and endorse each other, as well as share tips, insights, and opportunities.</li>
              <li>A gamification feature that would reward users for completing tasks, achieving goals, and improving their profiles. Users could earn points, badges, and trophies, as well as unlock new features and benefits.</li> 
            </ul>
          
            <p>They launched Rapid Jobs in beta mode and invited some of their contacts in Germany to try it out. They received positive feedback and constructive criticism. They used the data and the suggestions to improve their website and fix any bugs or issues.
            They also started marketing their website through social media, blogs, podcasts, and events. They created a catchy slogan: <b> “Rapid Jobs: The Job Website That Works For You”</b>. They also created a logo: a blue circle with a white J inside. 
            They gradually gained more users and more traction. They also attracted the attention of some investors and media outlets. They were featured in some magazines and newspapers as one of the most promising startups in the country.
            They were happy with their progress, but they also faced some challenges and competition. They had to deal with some technical difficulties, legal issues, and security threats. They also had to compete with some other job websites that tried to copy or undermine them.
            They didn't give up or give in. They kept working hard and smart. They kept innovating and improving. They kept listening to their users and meeting their needs. 
            They eventually achieved their goal: they became one of the most popular and successful job websites in the world. They helped millions of people find their dream jobs, and millions of companies find their ideal employees.
            They also achieved their dream: they became rich and famous entrepreneurs. They were admired and respected by their peers and their fans. They were invited to speak at conferences and events. They were awarded with prizes and honors. 
            They were proud of themselves and their team. They were grateful for their supporters and their customers. They were happy with their work and their life.
            They realized that Rapid Jobs was more than just a job website. It was a vision, a mission, a legacy. </p>

        <h2 class="text-primary">What We Do</h2>
        <br />
  
           <p>We ease people's burdens by connecting employers who need help with workers who need jobs. We work hard to put trust into the outsourcing experience for everyone.</p>
     

        <h2 class="text-primary">Why We Do It</h2>
        <br />
        
           <p>Because it changes people's lives.

              Because Filipino workers keep emailing us saying: <br />
            <b>"Thank you for helping me get a job! I can now work from home and earn a good wage."</b></p>
            
            <p>Because entrepreneurs keep emailing us saying: <br />
            <b>"I hired a Filipino worker and he's fantastic. I can't imagine life without him!"</b></p>

    </div>
    </>
  )
}

export default About
