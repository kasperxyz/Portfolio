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

  let modalOpen = false;
  let selectedProject: Project | null = null;

  // reactive flag for viewport size (mobile <= 767px)
  let isMobile = false;
  let _mql: MediaQueryList | null = null;
  function _onMqlChange(e: MediaQueryListEvent) {
    isMobile = e.matches;
  }

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

    // set up responsive matchMedia for mobile/desktop conditional rendering
    if (typeof window !== 'undefined') {
      _mql = window.matchMedia('(max-width: 767px)');
      isMobile = _mql.matches;
      if (_mql.addEventListener) {
        _mql.addEventListener('change', _onMqlChange as any);
      } else {
        // Safari and older browsers
        _mql.addListener(_onMqlChange as any);
      }
    }
  });

  onDestroy(() => {
    if (_mql) {
      if (_mql.removeEventListener) {
        _mql.removeEventListener('change', _onMqlChange as any);
      } else {
        _mql.removeListener(_onMqlChange as any);
      }
    }
  });
</script>

<!-- Hero / intro -->
<div class="hero">
  <div class="container">
    <div class="header">
      <a href="#" class="link">Kasper Slusarczyk</a>
      <a href="#" class="link">Get in touch</a>
    </div>
    <div class="hero-content"> 
      <h1>
        Design engineer focused on SaaS, enterprise, and AI teams.
      </h1>
    </div>
  </div>
</div>

<!-- Portfolio grid -->
<div class="projects">
    <div class="container container-mobile">
    {#if isMobile}
      <!-- Mobile: simple stacked cards for small screens -->
      <div class="grid grid--mobile">
        <Card project={projects[0]} on:open={() => openModal(projects[0])} />
        <div class="item item--center">
          <span class="tag tag--black">About</span>
          <p>I’ve worked on  creating products and experiences for a variety of brands, including  startups, and leading global companies. I’m interested in designing  impactful digital experiences that solve tough but meaningful problems.</p>
        </div>
        <Card project={projects[1]} on:open={() => openModal(projects[1])} />
        <div class="item item--center">
          <span class="tag tag--black">Contact</span>
          <a class="email" href="mailto:kasper.slusarczyk@gmail.com">kasper.slusarczyk@gmail.com</a>
        </div>
        <Card project={projects[2]} on:open={() => openModal(projects[2])} />
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
        <Card project={projects[3]} on:open={() => openModal(projects[3])} />
        <Card project={projects[4]} on:open={() => openModal(projects[4])} />
        <Card project={projects[5]} on:open={() => openModal(projects[5])} />          
      </div>
    {:else}
      <!-- Desktop: manual 3-column layout -->
      <div class="grid">
        <div class="column">
          <Card project={projects[0]} on:open={() => openModal(projects[0])} />
          <div class="item item--center">
            <span class="tag tag--black">Contact</span>
            <a class="email" href="mailto:kasper.slusarczyk@gmail.com">kasper.slusarczyk@gmail.com</a>
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
    {/if}
    </div>
</div>

<!-- Footer -->
<div class="footer">
  <div class="container">
    <div class="footer-content">
      <h1>Get in touch to talk design, ideas, or opportunities.</h1>
    </div>
    <div class="footer-copyright">
  <a class="email" href="mailto:kasper.slusarczyk@gmail.com">kasper.slusarczyk@gmail.com</a>
    </div>
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

.header {
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid var(--color-bg-secondary);
  .link {
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.25rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-text);
  }
}

.hero-content {
  max-width: 680px;
  margin: 140px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  
}

.footer-content {
  border-bottom: 1px solid var(--color-bg-secondary);
  h1 {
    text-align: center;
    max-width: 520px;
    margin: 120px auto;
    color: var(--color-text-primary);
  }
}
.footer-copyright {
  display: flex;
  justify-content: center;
  padding: 16px 0;
}
.grid {
  display: flex;
  flex-direction: row;
  gap: 16px;
  border-top: 1px solid var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-bg-secondary);
  padding: 16px 0;
  .column {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
  }
  &.grid--mobile {
    flex-direction: column;
  }
  .item {
    background: var(--color-bg-tertiary);
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
    .skills-carousel {
      height: 240px;
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
        font-family: var(--font-primary);
      }

      .fade {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        background: linear-gradient(
          180deg,
          var(--color-bg-tertiary) 0%,
          rgba(26, 26, 26, 0.6) 30%,
          rgba(26, 26, 26, 0.2) 50%,
          rgba(26, 26, 26, 0.6) 70%,
          var(--color-bg-tertiary) 100%
        );
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


