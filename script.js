 // create a new account
 const cAccount = document.getElementById('c-Account')
      
 const logout = () => {
   
   // show login form
   const loginForm = document.getElementById('login-form');
   loginForm.classList.remove('d-none');

   // hide logged in user div
   const loggedInDiv = document.getElementById('logged-in');
   loggedInDiv.classList.add('d-none');
   cAccount.classList.remove('d-none');
 
   sessionStorage.removeItem('username');
 }

 const renderLoggedInUser = (username) => {
   // hide login form
   const loginForm = document.getElementById('login-form');
   loginForm.classList.add('d-none');

   // show logged in user div
   const loggedInDiv = document.getElementById('logged-in',);
   loggedInDiv.classList.remove('d-none');
   cAccount.classList.add('d-none');

   // fill in username
   const loggedInUser = document.getElementById('logged-in-user');
   loggedInUser.textContent = username;
 }

 const loginUser = () => {
   const username = document.getElementById('username').value;

   sessionStorage.setItem('username', username);

   renderLoggedInUser(username);
 }

 const showSelectedPage = (selectedPage) => {

   pages.forEach(page => {
     const pageDiv = document.getElementById(page);

     if (page === selectedPage) {
       pageDiv.classList.remove('d-none');
     } else {
       pageDiv.classList.add('d-none');
     }
   });
 }

 const navigateToHome = () => {
   history.pushState({ id: 'home' }, 'Home', './index.html');
   showSelectedPage('home');
 }

 const navigateToAbout = () => {
   history.pushState({ id: 'about' }, 'About', './index.html#about');
   showSelectedPage('about');
 }

 const navigateToJobs = () => {
   history.pushState({ id: 'jobs' }, 'Jobs', './index.html#jobs');
   showSelectedPage('jobs');
 }

 const navigateToApplyJob = () => {
  history.pushState({ id: 'applyJob' }, 'ApplyJob', './index.html#applyJob');
  showSelectedPage('applyJob');
}

 const navigateToTestimonial = () => {
   history.pushState({ id: 'testimonial' }, 'Testimonial', './index.html#testimonial');
   showSelectedPage('testimonial');
 }

 const navigateToCreateAccount = () => {
   history.pushState({ id: 'createAccount' }, 'CreateAccount', './index.html#createAccount');
   showSelectedPage('createAccount');
 }

 navigateToCreateAccount

 window.addEventListener('popstate', (e) => {
   showSelectedPage(e.state.id);
 });

 const pages = ['home', 'about', 'jobs','applyJob', 'testimonial','createAccount'];

 history.replaceState({ id: 'home' }, 'Home', './index.html');

 const username = sessionStorage.getItem('username');
 if (username) {
   renderLoggedInUser(username);
 }

 fetch('https://www.arbeitnow.com/api/job-board-api')
.then(response => response.json())
.then(data => {
 // Display the API response on the console
 const jobs = data.data;

 console.log(data)
 const jobListDiv = document.getElementById('job-list');
 const applyJobDiv = document.getElementById('job-description');

 jobs.forEach(job => {
   const cardDiv = document.createElement('div');
   cardDiv.innerHTML = `
     <div class="container border d-flex row w-lg-50 mb-5 m-auto">
       <div class="ms-2 col-lg-4 my-2">
       <dd>${job.title},</dd>
       <dd><i class="fa-solid fa-building me-2" style="color: #3A43C9;"></i>${job.company_name},</dd>
       <dd><i class="fa-solid fa-earth-americas me-2" style="color: #3A43C9;"></i>${job.location}</dd>
       </div>
       <div class="ms-4 col-lg-6 my-2">
         <dd>${job.tags}</dd>
       </div>
       <div class="col-lg-1  align-self-center">
         <span onclick="navigateToApplyJob()" class="btn btn-primary">Apply</span>
       </div>
     </div>
     `;

    //  Job Description apply
     const jobDes = document.createElement('div');
  //    jobDes.innerHTML = `<div class="container border d-flex row w-lg-50 mb-5 m-auto">
  //    <div class="ms-2 col-lg-4 my-2">
  //    <dd>${job.title},</dd>
  //    <dd><i class="fa-solid fa-building me-2" style="color: #3A43C9;"></i>${job.company_name},</dd>
  //    <dd><i class="fa-solid fa-earth-americas me-2" style="color: #3A43C9;"></i>${job.location}</dd>
  //    </div>
  //    <div class="ms-4 col-lg-6 my-2">
  //      <dd>${job.tags}</dd>
  //    </div>
  //    <div class="col-lg-1  align-self-center">
  //      <span onclick="navigateToApplyJob()" class="btn btn-primary">Apply</span>
  //    </div>
  //  </div>`;
   
  //  applyJobDiv.appendChild(jobDes);
   jobListDiv.appendChild(cardDiv);
 });
})
 .catch(error => {
 console.error('Error:', error);
 });
