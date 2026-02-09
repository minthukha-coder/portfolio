<template>
  <div class="main">

    <nav class="sticky top-0 " style="z-index:10;background-color:#1f242d">
      <div class="">
        <div class="flex items-center justify-end h-16 pt-2 mx-5">

          <button class="lg:hidden text-white focus:outline-none" @click="isOpen = !isOpen">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul class="hidden lg:flex space-x-6">
            <li v-for="item in navs" :key="item.id">
              <a href="#" class="text-white hover:text-cyan-400 transition text-decoration-none font-bold"
                @click.prevent="scrollTo(item.id)">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isOpen" class="lg:hidden px-4 pb-4">
        <ul class="space-y-3">
          <li v-for="item in navs" :key="item.id">
            <a href="#" class="block text-white text-decoration-none" @click.prevent="handleNavClick(item.id)">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>


    <!-- HOME -->
    <section class="home vh-90" id="home">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 place-items-center pt-5">
          <div class="p-10 text-white justify-self-center">
            <h1 class="fw-bold tracking-wider">Min Thu Kha</h1>
            <h3 class="highlight tracking-wide fw-bold" style="color:#FF8C32">Web Developer</h3>

            <div class="social-media">
              <a href="mailto:minthukha25122003@gmail.com">
                <font-awesome-icon icon="fa-solid fa-envelope" /> </a>
              <a href="https://www.linkedin.com/in/min-thu-kha-407a472a4/" target="_blank">
                <font-awesome-icon icon="fa-brands fa-linkedin" />
              </a>
              <a href="https://github.com/minthukha-coder" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" />
              </a>
            </div>

            <a @click="downloadCv" class="btn mt-3">
              Download CV
            </a>
          </div>

          <div class="hidden md:flex justify-center">
            <img src="/images/cartoon.png" class="profile-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="about" id="about">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6 d-flex justify-content-center">

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="50%" id="blobSvg"
              style="opacity: 1">

              <image x="0" y="-20" width="100%" height="100%" clip-path="url(#shape)"
                href="/images/Me.png?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                preserveAspectRatio="none"></image>

              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color: rgb(238, 205, 163)"></stop>
                  <stop offset="100%" style="stop-color: rgb(239, 98, 159)"></stop>
                </linearGradient>
              </defs>
              <clipPath id="shape">
                <path id="blob" fill="url(#gradient)">
                  <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
                    values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;">
                  </animate>
                </path>
              </clipPath>

            </svg>

          </div>
          <div class="col-md-6">
            <div class="about-content">
              <div class="content-header d-md-flex position-relative mt-5 ">
                <h1 class="text-center text-md-start text-lg-start fw-bold" style="color:#FF8C32;">Who am I?</h1>

              </div>
              <h5 style="line-height:30px;" class="mt-3">
                I am a passionate web developer with 2 years of hands-on experience building dynamic web applications. I
                specialize in Laravel for backend development and Vue.js for frontend development, creating responsive,
                user-friendly interfaces. I have solid experience designing and consuming RESTful APIs, enabling
                seamless communication between client and server. I enjoy tackling challenging problems and continuously
                improving my skills to deliver efficient and maintainable code.
              </h5>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="my-skills my-5" id="my-skills">
      <div class="container">
        <h1 class="text-center  mb-5" style="color:#FF8C32">My Skills</h1>

        <div class="skill-wrapper">
          <div class="skill-track">
            <div v-for="skill in skills" :key="skill.name" class="skill-item">
              <img :src="skill.icon" />
              {{ skill.name }}
            </div>


            <div v-for="skill in skills" :key="skill.name + '-clone'" class="skill-item">
              <img :src="skill.icon" />
              {{ skill.name }}
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- PROJECTS -->
    <section class="my-projects " id="my-projects">
      <div class="container">
        <h1 class="text-center mb-4" style="color:#FF8C32;">My Projects</h1>
        <p class="text-center text-white text-xl">Explore my latest web development work</p>

        <div class="filter-buttons">
          <button class="filter-btn" :class="{ active: activeFilter === 'all' }"
            @click="filterProjects('all')">All</button>
          <button class="filter-btn" :class="{ active: activeFilter === 'app' }"
            @click="filterProjects('app')">App</button>
          <button class="filter-btn" :class="{ active: activeFilter === 'web' }"
            @click="filterProjects('web')">Web</button>
        </div>

        <div class="row mt-3">
          <div v-for="project in filteredProjects" :key="project.title" class="col-md-4 mb-4">
            <div class="card project-card h-100" :data-category="project.category">
              <div class="position-relative img-wrapper">
                <img :src="project.image" class="card-img-top project-img"
                  style="height:220px;object-fit:cover;object-position: center;" />

              </div>
              <div class="card-body">
                <h5 class="fw-bold text-white">{{ project.title }}</h5>
                <p class="fs-6">{{ project.description }}</p>
                <div class="useage-group d-flex flex-wrap gap-2 mb-3">
                  <button v-for="tech in project.tech" :key="tech" class="btn tech-tag">{{ tech }}</button>
                </div>
                <div class="card-footer border-0 d-flex justify-content-between p-0">
                  <a v-if="project.demo != ''" :href="project.demo" target="_blank"><button class="btn1">
                      <span v-if="project.category == 'web'">Live Demo</span>
                      <span v-else-if="project.category == 'app'"><font-awesome-icon icon="fa-brands fa-google-play" />
                        Play Store</span>
                    </button></a>
                  <a v-if="project.code != ''" :href="project.code" target="_blank"><button class="btn2">
                      <font-awesome-icon icon="fa-brands fa-github" /> Code
                    </button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Contact -->
    <section class="contact" id="contact">
      <div class="container">
        <h2 class="fw-bold text-center mb-5 " style="color:#FF8C32">Contact Me</h2>

        <div class="row justify-content-center">
          <!-- Email -->
          <div class="col-md-4 mb-4">
            <div class="contact-card text-center">
              <font-awesome-icon icon="fa-solid fa-envelope" class="contact-icon" />
              <h5>Email</h5>
              <p>
                <a href="mailto:minthukha25122003@gmail.com" class="contact-link">
                  minthukha25122003@gmail.com
                </a>
              </p>
            </div>
          </div>

          <!-- Phone -->
          <div class="col-md-4 mb-4">
            <div class="contact-card text-center">
              <font-awesome-icon icon="fa-solid fa-phone" class="contact-icon" />
              <h5>Phone</h5>
              <p class="contact-link">09975483307</p>
            </div>
          </div>
        </div>
      </div>
    </section>



  </div>
</template>

<script setup>

import { ref, computed } from 'vue'

const activeFilter = ref('all')
const isOpen = ref(false)
const navs = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'my-skills', label: 'Skills' },
  { id: 'my-projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

const skills = [
  { name: 'HTML', icon: '/images/html.png' },
  { name: 'CSS', icon: '/images/css.png' },
  { name: 'Bootstrap', icon: '/images/bootstrap.png' },
  { name: 'JavaScript', icon: '/images/js.png' },
  { name: 'Laravel', icon: '/images/laravel.png' },
  { name: 'Vue.js', icon: '/images/vue.png' },
  { name: 'Node.js', icon: '/images/nodejs.png' },
  { name: 'Tailwind', icon: '/images/tailwind.png' }
]


const projects = ref([
  {
    title: 'Love Car',
    image: '/images/lovecar_image.png',
    description: 'A mobile application for car enthusiasts to find and share their love for cars. Available on Google Play Store.',
    tech: ['Laravel', 'Vue.js', 'Tailwind'],
    demo: 'https://play.google.com/store/apps/details?id=com.ophir.lovecar&pcampaignid=web_share',
    code: '',
    category: 'app'
  },
  {
    title: 'Aung Academy Language School',
    image: '/images/aals_home.png',
    description: 'A comprehensive language learning platform with course management, student enrollment, and progress tracking features.',
    tech: ['HTML', 'CSS', 'Laravel', 'Vue.js', 'Tailwind'],
    demo: 'https://aals.aungacademylanguageschool.com/',
    code: 'https://github.com/minthukha-coder/aals-school.git',
    category: 'web'
  },

  {
    title: 'Sephora Ecommerce Website',
    image: '/images/sephora.png',
    description: 'This project is a fully functional fashion eCommerce website designed to provide a seamless online shopping experience for customers.',
    tech: ['Laravel', 'Vue.js', 'Tailwind'],
    demo: '',
    code: 'https://github.com/BeBeeTheBoss/sephora.git',
    category: 'web'
  },

])

const downloadCV= () => {
  const link = document.createElement('a')
  link.href = '/cv/MinThuKha.pdf'
  link.download = 'Min_Thu_Kha_CV.pdf'
  link.click()
}

const handleNavClick = (id) => {
  const section = document.getElementById(id)

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}


const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project => project.category === activeFilter.value)
})

const filterProjects = (category) => {
  activeFilter.value = category
}

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.main {
  background: #1f242d;
}



.home .btn {
  display: inline-block;
  padding: 12px 28px;
  background-color: dark;
  border-radius: 40px;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 16px;
  box-shadow: 0 0 15px #F97316;
  color: #ffffff;
}

.home .social-media a {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 36px;
  text-align: center;
  align-items: center;
  font-size: 20px;
  border-radius: 50%;
  background: transparent;
  text-decoration: none;
  border: 2px solid #FF8C32;
  color: #FF8C32;
  margin: 20px 15px 30px 0;
}

.home .social-media a:hover {
  background-color: #FF8C32;
  box-shadow: 0 0 20px #FF8C32;
  color: #1f242d;
}

.logo {
  letter-spacing: 5px;
  color: #FF8C32;
  font-weight: bold;
  cursor: pointer;
}

.about {
  background-color: #1f242d;
}

.about .about-content {
  color: #fff;
}

.about .about-content .btn {
  display: inline-block;
  padding: 12px 28px;
  background-color: #FF8C32;
  border-radius: 40px;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 16px;
  box-shadow: 0 0 15px #FF8C32;
  color: #1f242d;
}

.about .about-content .btn:hover {
  background-color: #1f242d;
  box-shadow: 0 0 20px #FF8C32;
  color: #fff;
}



.about .text {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: zoomIn 1s ease forwards;
  animation-delay: 1s;
}

.about .text span {
  position: absolute;
  left: 40%;
  top: -20%;
  font-size: 1rem;
  transform-origin: 0 75px;
}


.highlight {
  color: #FF8C32;
}

.profile-img {
  width: 500px;
}

.social-media a {
  color: #FF8C32;
  font-size: 20px;
  margin-right: 15px;
}

/* Skills */

.skill-wrapper {
  overflow: hidden;
  width: 100%;
}

.skill-track {
  display: flex;
  width: max-content;
  animation: scroll 15s linear infinite;
}

.skill-item {
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  color: white;
  border-radius: 6px;
  padding: 6px 12px;
  margin: 0 6px;
  white-space: nowrap;
}

.skill-item img {
  width: 20px;
  margin-right: 6px;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}


.skill-img {
  width: 80px;
}

/* My Projects */

.my-projects {
  background-color: #1f242d;
}

.my-projects .filter-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.my-projects .filter-btn {
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 1px;
}



.filter-btn.active {
  background: #FF8C32;
  color: white;
  border-color: white;
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.4);
}




.my-projects .img-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;

}

.my-projects .img-wrapper img {
  width: 100%;
  object-fit: cover;
}

.my-projects .project-img {
  transition: transform 0.3s ease;
  /* smooth animation */
}

.my-projects .project-img:hover {
  transform: scale(1.05);
  /* slightly bigger on hover */
}

.my-projects .card {
  background-color: #778da9;
  height: 400px;
}


.my-projects .card-body h6 {
  color: #fff;
  font-size: 18px;
  letter-spacing: 1px;
}

.my-projects .card-body p {
  color: #fff;
  font-size: 14px;
}

.my-projects .card-body .btn {
  /* width: 80px; */
  font-size: 14px;
  height: 27px;
  line-height: 10px;
  background-color: #1f242d;
  border: 0px;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  color: #fff;
  margin: 2px;
}

.my-projects .card-footer {
  padding: 0px;
  margin-top: 10px;
  background-color: #778da9;
}

.my-projects .card-footer .btn1 {
  font-size: 14px;
  padding: 5px 15px;
  background-color: #1f242d;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 0px;
  color: #fff;
  margin: 0 3px;
}

.my-projects .card-footer .btn2 {
  font-size: 15px;
  padding: 5px 15px;
  background-color: #1f242d;
  border-radius: 10px;
  color: #fff;
  margin: 0 3px;
}

.my-projects .card-footer .btn2 i {
  font-size: 20px;
  margin: 0 5px;
}

.my-projects .slick-dots li button::before {
  color: #FF8C32;
}

.my-projects .slick-dots .slick-active button::before {
  color: #fff;
}

.contact {
  padding: 90px 0;
  background: linear-gradient(135deg, #020617, #0f172a);
}

.contact-card {
  background: rgba(30, 41, 59, 0.9);
  padding: 45px 30px;
  border-radius: 18px;
  transition: all 0.35s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.contact-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 10px 10px #FF8C32;
}

.contact-icon {
  font-size: 42px;
  color: #FF8C32;
  margin-bottom: 18px;
}

.contact-card h5 {
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 8px;
}

.contact-link {
  color: #cbd5f5;
  text-decoration: none;
  font-size: 15px;
}

.contact-link:hover {
  color: #FF8C32;
}
</style>
