<script lang="ts">
  import '../app.css';
  import Card from '$lib/components/Card.svelte';
  import Modal from '$lib/components/Modal.svelte';
  import { projects } from '$lib/data/projects';
  import type { Project } from '$lib/data/projects';
  import { onMount, onDestroy } from 'svelte';
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import { writable } from 'svelte/store';

  let emblaApi;
  const currentSlide = writable<number>(0);
  function onInit(event) {
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
      history.pushState({}, '', `/work/${project.slug}`);
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
        Product design focused on SaaS, enterprise, and AI teams.
      </h1>
      <p>I'm currently a Senior Product Designer. Ex Linktree.</p>
    </div>
  </div>
</div>

<!-- Portfolio grid -->
<div class="projects">
    <div class="container container-mobile">
      <div class="projects-grid">
        {#each projects as project: Project}
          <Card {project} on:open={() => openModal(project)} />
        {/each}
      </div>
      <div class="embla" use:emblaCarouselSvelte on:emblaInit={onInit}>
        <div class="embla__container">
          {#each projects as project: Project, index}
            <div class="embla__slide" class:selected={$currentSlide === index}>
              <Card {project} on:open={() => openModal(project)} />
            </div>
          {/each}
        </div>
      </div>
    </div>
</div>

<!-- Footer -->
<!-- <div class="footer">
  <div class="container">
    <div class="footer-content">
      <h2>Interested in working together?</h2>
      <a href="mailto:kasper.slusarczyk@gmail.com">Get in touch</a>
    </div>
  </div>
</div> -->

<!-- Modal -->
<Modal 
  open={modalOpen} 
  title={selectedProject?.title}
  content={selectedProject?.content}
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 80px 0;
}

.embla {
  overflow: hidden;
  padding: 80px 0;
}
@media (min-width: 768px) {
  .embla {
    display: none;
  }
}

.embla__container {
  display: flex;
  gap: 2rem;
}
.embla__slide {
  flex: 0 0 80%;
  min-width: 0;
  padding-left: 0;
  padding-right: 0;
}
.embla__slide:first-child {
  padding-left: 2rem;
}
.embla__slide:last-child {
  padding-right: 2rem;
}
.embla__slide.selected :global(.card) {
  transform: scale(1.025);
  filter: drop-shadow(0px 15px 17px rgba(0,0,0,.2));
}

.footer p,
.footer a {
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 400;
  letter-spacing: -1px;
  color: #a3a3a3;
  margin: 0;
  text-decoration: none;
}
.footer a {
  color: #000;
  transition: color 0.3s ease;
}
.footer a:hover {
  color: #333;
}

.footer-content {
  max-width: 680px;
  margin: 120px auto 200px auto;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: baseline;
}

button.btn-primary {
  background-color: #000;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 999px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button.btn-primary:hover {
  background-color: #333;
}

@media (max-width: 767px) {
  .hero h1 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .container-mobile {
    padding: 0;
  }
  .projects-grid {
    display: none;
  }
  .footer-content {
    margin: 0 auto 80px auto;
  }
}
</style>
