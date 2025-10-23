<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import '../../app.css';
  import type { Project } from '$lib/data/projects';
  export let open = false;
  export let project: Project | null = null;
  const dispatch = createEventDispatcher();
  import { fade, fly } from 'svelte/transition';
  import { linear } from 'svelte/easing';
  
  function close() {
    dispatch('close');
  }

  function clickOutside(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      close();
    }
  }
</script>

{#if open}
  <div 
    class="modal-overlay" 
    on:click={clickOutside} 
    on:keydown={(e) => e.key === 'Escape' && close()}
    role="button" 
    tabindex="-1"
    transition:fade={{ duration: 400 }}
  >
    <div class="modal-content" transition:fly={{ x: 1000, duration: 400, easing: linear }}>
      <button class="close-btn" on:click={close}>
        <img src="/icons/close.svg" alt="">
      </button>
      <div class="modal-body">
        {#if project}
          <div class="modal-header">
            <h1>{project.title}</h1>
            <div class="tags">
              <span class="tag tag--secondary">{project.slug}</span>
              {#each project.tags as tag}
                <span class="tag tag--dark">{tag}</span>
              {/each}
            </div>
          </div>
          <img class="poster" src={project.hero || project.thumbnail} alt={project.title} />
          <p class="modal-intro">{project.introduction}</p>
          <div class="tldr">
            <div class="tldr-row">
              <div class="tldr-column">
                <h4>Role</h4>
                <p>{project.role}</p>
              </div>
              <div class="tldr-column">
                <h4>Deliverables</h4>
                <p>{project.deliverables}</p>
              </div>
              <div class="tldr-column">
                <h4>Outcome</h4>
                <p>{@html project.outcome}</p>
              </div>
            </div>
          </div>
          {#each project.content as paragraph}
            <div class="modal-paragraph">{@html paragraph}</div>
          {/each}
        {/if}
      </div>
      <slot />
    </div>
  </div>
{/if}

<style>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: end;
  z-index: 50;
  height: 100svh;
}
.modal-content {
  background-color: black;
  overflow-y: scroll;
  width: 70vw;
  max-width: 1020px;
  display: block;
  padding: 56px 56px 112px 56px;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
    padding: 16px 16px 40px 16px;
    height: 100svh;
  }
}

.modal-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  img {
    border-radius: 8px;
    width: 100%;
  }
  .modal-header {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .modal-intro {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 300;
    max-width: 680px;
    margin: 0 auto;
  }
}

.tldr {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 680px;
  margin: auto;
  .tldr-row {
    display: flex;
    gap: 24px;
    flex-direction: column;
    .tldr-column {
      display: flex;
      flex-direction: row;
      h4 {
        width: 180px;
      }
      p {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: 300;
        flex: 1;
        span {
          font-weight: 700;
        }
      }
    }
  }
}

.close-btn {
  position: absolute;
  top: 56px;
  right: 56px;
  background: rgba(255, 255, 255, 0.75);
  padding: 16px;
  border-radius: 50%;
  display: flex;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.85);
  }
  @media screen and (max-width: 768px) {
    top: 16px;
    right: 16px;
  }
}
</style>
