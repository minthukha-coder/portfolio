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
              <a href="#" :class="[
                'transition text-decoration-none font-bold',
                navActive == item.id ? '!text-[#FFD700]' : 'text-white'
              ]" @click.prevent="scrollTo(item.id)">
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
            <a href="#" class="block" :class="[
              'transition text-decoration-none font-bold',
              navActive == item.id ? '!text-[#FFD700]' : 'text-white'
            ]" @click.prevent="handleNavClick(item.id)">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>


    <!-- HOME -->
    <section class="home vh-90" id="home">
      <div class="container home-inner">
        <div class="hero-content text-center">
          <h1 class="fw-bold tracking-wider">Min Thu Kha</h1>
          <h3 class="highlight tracking-wide fw-bold">Web Developer</h3>

          <p class="subtitle">Laravel · Vue.js · Tailwind · REST APIs</p>

          <div class="social-media mt-4">
            <a href="mailto:minthukha25122003@gmail.com" aria-label="Email">
              <font-awesome-icon icon="fa-solid fa-envelope" />
            </a>
            <a href="https://www.linkedin.com/in/min-thu-kha-407a472a4/" target="_blank" aria-label="LinkedIn">
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </a>
            <a href="https://github.com/minthukha-coder" target="_blank" aria-label="GitHub">
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
          </div>

          <a @click="downloadCV" class="btn mt-5">Download CV</a>
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
                <h1 class="text-center text-md-start text-lg-start fw-bold" style="color:#FFD700;">Who am I?</h1>

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
        <h1 class="text-center fw-bold mb-5" style="color:#FFD700">My Skills</h1>

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
    <section class="my-projects" id="my-projects">
      <div class="container">
        <h1 class="text-center fw-bold mb-4" style="color:#FFD700;">My Projects</h1>

        <div class="filter-buttons">
          <button class="filter-btn" :class="{ active: activeFilter === 'all' }"
            @click="filterProjects('all')">All</button>
          <button class="filter-btn" :class="{ active: activeFilter === 'app' }"
            @click="filterProjects('app')">App</button>
          <button class="filter-btn" :class="{ active: activeFilter === 'web' }"
            @click="filterProjects('web')">Web</button>
        </div>

        <div class="projects-grid">
          <div v-for="(project, index) in filteredProjects" :key="project.title" class="project-card-wrapper"
            :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="project-card">
              <div class="project-card-top">
                <div class="project-card-icon">
                  <img :src="project.image" alt="Project logo" class="rounded-md"/>
                </div>
                <div class="project-card-tags">
                  <span v-for="tech in project.tech" :key="tech" class="tag">{{ tech }}</span>
                </div>
              </div>

              <div class="project-content">
                <h5 class="project-title">{{ project.title }}</h5>
                <p class="project-description">{{ project.description }}</p>
              </div>

              <div class="project-links">
                <a v-if="project.code" :href="project.code" target="_blank" class="project-link code-link">
                  <font-awesome-icon icon="fa-brands fa-github" /> Github
                </a>
                <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link demo-link">
                  Live Demo <font-awesome-icon icon="fa-solid fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Contact -->
    <section class="contact" id="contact">
      <div class="container">
        <h2 class="fw-bold text-center mb-5 " style="color:#FFD700">Contact Me</h2>

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

import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const activeFilter = ref('all')
const isOpen = ref(false)
const navActive = ref('home')
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
    image: '/images/lovecar.jpg',
    description: 'A mobile application for car enthusiasts to find and share their love for cars. Available on Google Play Store.',
    tech: ['HTML', 'CSS', 'Laravel', 'Vue.js', 'Tailwind'],
    demo: 'https://play.google.com/store/apps/details?id=com.ophir.lovecar&pcampaignid=web_share',
    code: '',
    category: 'app'
  },
  {
    title: 'Aung Academy Language School',
    image: '/images/aals.jpg',
    description: 'A comprehensive language learning platform with course management, student enrollment, and progress tracking features.',
    tech: ['HTML', 'CSS', 'Laravel', 'Vue.js', 'Tailwind'],
    demo: 'https://aals.aungacademylanguageschool.com/',
    code: 'https://github.com/minthukha-coder/aals-school.git',
    category: 'web'
  },

  {
    title: 'Learning Management System',
    image: '/images/sayazaw.jpg',
    description: 'A mobile-friendly learning platform delivering video lessons, deployed on DigitalOcean.',
    tech: ['HTML', 'CSS', 'Laravel', 'Vue.js', 'Tailwind'],
    demo: 'https://mathssayazaw.online/',
    code: '',
    category: 'web'
  },

  {
    title: 'Sephora Ecommerce Website',
    image: '/images/sephora.png',
    description: 'This project is a fully functional fashion eCommerce website designed to provide a seamless online shopping experience for customers.',
    tech: ['HTML', 'CSS', 'Laravel', 'Vue.js', 'Tailwind'],
    demo: '',
    code: 'https://github.com/BeBeeTheBoss/sephora.git',
    category: 'web'
  },

])

const downloadCV = () => {
  window.open('/cv/MinThuKha.pdf', '_blank')

}

const handleNavClick = (id) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  navActive.value = id;
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

let sectionObserver = null

onMounted(() => {
  const sectionIds = navs.map((item) => item.id)

  sectionObserver = new IntersectionObserver(
    (entries) => {
      let bestEntry = null
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio) {
            bestEntry = entry
          }
        }
      })

      if (bestEntry) {
        navActive.value = bestEntry.target.id
      }
    },
    {
      root: null,
      rootMargin: '-10% 0px -40% 0px',
      threshold: [0.25, 0.5, 0.75]
    }
  )

  sectionIds.forEach((id) => {
    const section = document.getElementById(id)
    if (section) {
      sectionObserver.observe(section)
    }
  })
})

onBeforeUnmount(() => {
  if (sectionObserver) {
    sectionObserver.disconnect()
    sectionObserver = null
  }
})

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  navActive.value = id
}
</script>

<style scoped>

</style>
