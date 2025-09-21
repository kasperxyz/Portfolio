<script lang="ts">
  import '../app.css';
  import Card from '$lib/components/Card.svelte';
  import Modal from '$lib/components/Modal.svelte';
  import { projects } from '$lib/data/projects';
  import type { Project } from '$lib/data/projects';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { BlossomCarousel } from '@blossom-carousel/svelte';
  import '@blossom-carousel/core/style.css';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';

  const isDesktop = writable(false);
  let modalOpen = false;
  let selectedProject: Project | null = null;

  function updateSize() {
    isDesktop.set(window.innerWidth >= 768);
  }

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
    updateSize();
    window.addEventListener('resize', updateSize);

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
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  });
</script>

<!-- Hero / intro -->
<div class="hero">
  <div class="container">
    <h1>
      Kasper Slusarczyk<br><br>
      I'm a product designer focused on SaaS, enterprise, and AI teams.<br><br>
      I’ve worked on creating products and experiences for a variety of brands, including startups, and leading global companies. I’m interested in designing impactful digital experiences that solve tough but meaningful problems.
    </h1>
  </div>
</div>
<!-- Portfolio grid -->
<div class="projects">
  {#if $isDesktop}
    <div class="container">
      <div class="projects-grid">
        {#each projects as project: Project}
          <Card {project} on:open={() => openModal(project)} />
        {/each}
      </div>
    </div>
      {:else}
        {#if browser}
        <div class="container container-mobile">
          <BlossomCarousel class="carousel">
            {#each projects as project: Project}
              <div class="slide">
                <Card {project} on:open={() => openModal(project)} />
              </div>
            {/each}
          </BlossomCarousel>
        </div> 
        {/if}
    {/if} 
</div>

<!-- Footer -->
<div class="footer">
  <div class="container">
    <div class="footer-content">
      <p>Interested in working together?</p>
      <a href="mailto:kasper.slusarczyk@gmail.com">Get in touch</a>
    </div>
  </div>
</div>

<!-- Modal -->
<Modal open={modalOpen} title={selectedProject?.title} on:close={closeModal}>
  <p>{selectedProject?.content}</p>
</Modal>

<style>
.hero {
  h1 {
    max-width: 680px;
    margin: 120px auto;
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 400;
    letter-spacing: -1px;
    color: #a3a3a3;
  }
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

:global(.carousel) {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 300px;
  scroll-snap-type: x mandatory;
  scroll-snap-stop: always;
  gap: 1rem;
  overflow-y: visible;
}

.slide {
  width: 100%;
  scroll-snap-align: center;
  padding-left: 1rem;
  &:last-child {
    padding-right: 1rem;
  }
}

.footer {
  p, a {
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 400;
    letter-spacing: -1px;
    color: #a3a3a3;
    margin: 0;
    text-decoration: none;
  }
  a {
    color: #000;
    transition: color 0.3s ease;
    &:hover {
      color: #333;
    }
  }
}

.footer-content {
  max-width: 680px;
  margin: 120px auto;
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
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 999px;
  &:hover {
    background-color: #333;
  }
}
</style>
