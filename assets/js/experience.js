AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Technical Specialist",
    cardImage: "assets/images/experience-page/jetking.jpg",
    place: "Jetking Infotrain",
    time: "(may, 2021 - present)",
    desp: "<li>Worked as a faculty for few months.</li><li>Conducting Technical Assesments for Faculties.</li><li>Conducting Technical Mock Sessions for the students.</li>",
    
  },
  {
    title: "Desktop & Network Support Engineer",
    cardImage: "assets/images/experience-page/Precision Infomatic.png",
    place: "Precision Infomatic",
    time: "(jun,19 - Nov,20)",
    desp: "<li>Worked in client location ITC.</li><li>Installation,Configuration and Troubleshooting of Desktops.</li><li>Solving various problems related to LAN,Intranet & Internet.</li><li>Working on Symantec End Point Protection & Trobleshooting Symantec Management Agent.</li><li>Troubleshooting domain connectivity, login & network drive access related issues.</li><li>Troubleshooting application startup and various application related issues Updates, Patching and Software installations.</li>",
    
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);