<script lang="ts">
  import '../app.css';
  import Card from '$lib/components/Card.svelte';
  import Modal from '$lib/components/Modal.svelte';
  import { projects } from '$lib/data/projects';
  import type { Project } from '$lib/data/projects';
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import { trackPageView, trackProjectView, trackExternalClick } from '$lib/utils/analytics';
  
  // skills for the skills carousel
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'UX Research', 'Product strategy',
    'React', 'UI design', 'Product management', 'Webflow', 'Git'
  ];

  let emblaApi: any;
  const currentSlide = writable<number>(0);
  function onInit(event: any) {
    emblaApi = event.detail;
    emblaApi.on('select', () => {
      currentSlide.set(emblaApi.selectedScrollSnap());
    });
  }

  let modalOpen = false;
  let selectedProject: Project | null = null;

  // Reactive statement to handle body class
  $: if (typeof window !== 'undefined') {
    if (modalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }

  // Ensure body class is removed if component is destroyed
  onDestroy(() => {
    if (typeof window !== 'undefined') {
      document.body.classList.remove('modal-open');
    }
  });

  // Open modal on card click
  function openModal(project: Project) {
    selectedProject = project;
    modalOpen = true;

    if (typeof window !== 'undefined') {
      const projectUrl = `/work/${project.slug}`;
      history.pushState({}, '', projectUrl);
      
      // Track analytics
      trackPageView(window.location.origin + projectUrl, project.title);
      trackProjectView(project.slug, project.title);
    }
  }

  // Close modal
  function closeModal() {
    modalOpen = false;
    selectedProject = null;

    if (typeof window !== 'undefined') {
      history.pushState({}, '', '/');
    }
  }

  // Detect direct URL load
  onMount(() => {

    if (typeof window === 'undefined') return;
    const pathSlug = window.location.pathname.split('/work/')[1];
    if (pathSlug) {
      const found = projects.find(p => p.slug === pathSlug);
      if (found) {
        selectedProject = found;
        modalOpen = true;
      }
    }

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      const slug = window.location.pathname.split('/work/')[1];
      if (slug) {
        const found = projects.find(p => p.slug === slug);
        selectedProject = found ?? null;
        modalOpen = !!selectedProject;
      } else {
        modalOpen = false;
        selectedProject = null;
      }
    });
  });
</script>

<!-- Hero / intro -->
<div class="hero">
  <div class="container">
    <img src="/logo.svg" alt="made by kasper" class="logo" />
    <div class="hero-content"> 
      <h1>
        Design engineer focused on SaaS, enterprise, and AI teams.
      </h1>
      <p>I'm open to new opportunities.</p>
    </div>
  </div>
</div>

<!-- Portfolio grid -->
<div class="projects">
    <div class="container container-mobile">
      <div class="grid">
        <div class="column">
          <Card project={projects[0]} on:open={() => openModal(projects[0])} />
          <div class="item item--center">
            <span class="tag tag--black">Contact</span>
            <a class="email" href="email:kasd@sdfk.gmail.com">kasper.slusarczyk@gmail.com</a>
          </div>
          <Card project={projects[4]} on:open={() => openModal(projects[4])} />
        </div>
        <div class="column">
          <div class="item item--center">
            <span class="tag tag--black">About</span>
            <p>I’ve worked on  creating products and experiences for a variety of brands, including  startups, and leading global companies. I’m interested in designing  impactful digital experiences that solve tough but meaningful problems.</p>
          </div>
          <Card project={projects[2]} on:open={() => openModal(projects[2])} />
          <Card project={projects[3]} on:open={() => openModal(projects[3])} />
        </div>
        <div class="column">
          <Card project={projects[1]} on:open={() => openModal(projects[1])} />
          <div class="item">
            <span class="tag tag--black">Skills</span>
            <div class="skills-carousel">
              <div class="skills-track">
                {#each skills.concat(skills) as s, idx}
                  <span class="skill">{s}</span>
                {/each}
              </div>
              <div class="fade"></div>
            </div>
          </div>
          <Card project={projects[5]} on:open={() => openModal(projects[5])} />
        </div>
      </div>
    </div>
</div>

<!-- Footer -->
<div class="footer">
  <div class="container">
    <div class="footer-content">
      <img class="avatar" src="/avatar.png" alt="">
      <h2>Get in touch to talk design, ideas, or opportunities.</h2>
      <a class="button" href="mailto:kasper.slusarczyk@gmail.com">Send email</a>
    </div>
    <p class="love">Made with ❤ on planet earth.</p>
  </div>
</div>

<!-- Modal -->
<Modal 
  open={modalOpen} 
  project={selectedProject}
  on:close={closeModal} 
/>

<style>
:global(body.modal-open) {
  overflow: hidden;
}

.logo {
  display: block;
  margin: 56px auto 0 auto;
}

.hero-content {
  max-width: 680px;
  margin: 140px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  p {
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
  }
}

.footer-content {
  max-width: 520px;
  margin: 120px auto;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  .avatar {
    width: 72px;
  }
}
.love {
  margin: 40px auto;
  display: block;
  text-align: center;
}

.button {
  padding: 24px 32px;
  background-color: black;
  color: white;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s ease;
  &:hover {
    background: #1c1c1c
  }
}

.grid {
  display: flex;
  flex-direction: row;
  gap: 16px;

  .column {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
  }

  .item {
    background: #F2EFEA;
    padding: 80px 24px 40px 24px;
    border-radius: 8px;
    position: relative;
    display: flex;
    justify-content: center;
    &.item--center {
      padding: 80px 24px 80px 24px;
    }
    p {
      text-align: center;
      max-width: 360px;
    }
    .email {
      text-align: center;
      font-size: 1.5rem;
      line-height: 2rem;
      color: black;
      text-decoration: none;
    }
    .skills-carousel {
      height: 220px;
      overflow: hidden;
      position: relative;
      .skills-track {
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: center;
        /* duplicated content is used for a seamless loop */
        animation: skills-scroll 20s linear infinite;
        will-change: transform;
        z-index: 1;
      }

      .skill {
        font-size: 1.5rem;
        line-height: 2rem;
        text-align: center;
        font-style: italic;
      }

      .fade {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        background: linear-gradient(180deg, #F2EFEA 0%, rgba(242, 239, 234, 0) 50%, #F2EFEA 100%);
        z-index: 5;
      }
    }
  }
}

@keyframes skills-scroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}
</style>


