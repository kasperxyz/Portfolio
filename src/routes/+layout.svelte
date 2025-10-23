<script lang="ts">
  import '../app.css';
  import Card from '$lib/components/Card.svelte';
  import Modal from '$lib/components/Modal.svelte';
  import { projects } from '$lib/data/projects';
  import type { Project } from '$lib/data/projects';
  import { onMount, onDestroy } from 'svelte';
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
      <p>Open to new design opportunities. Formerly @Linktree.</p>
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 80px 0;
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
</style>
