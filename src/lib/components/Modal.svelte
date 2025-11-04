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
            <div class="tech">
              <span class="tech-item">{project.brand}</span>
              <span class="tech-item">{project.role}</span>
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
  height: 100%;
}
.modal-content {
  background-color: white;
  overflow-y: scroll;
  width: 70vw;
  max-width: 1020px;
  display: block;
  padding: 56px 56px 112px 56px;
  scrollbar-width: none;
  color: var(--color-text-black);
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    /* width: 100vw; */
    padding: 40px 16px 40px 16px;
    height: 100%;
    width: 100%;
    inset: 0px;
    border-radius: 0px;
    position: fixed;
    height: 100%;
    transform-origin: center bottom 0px;
    pointer-events: all;
    box-sizing: border-box;
  }
}

.modal-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  img {
    border-radius: 8px;
    width: 100%;
  }
  .poster{
    margin-top: 40px;
  }
  .modal-header {
    display: flex;
    flex-direction: column;
    gap: 16px;
    h1 {
      text-align: center;
    }
  }
}

.tech {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}

.close-btn {
  position: absolute;
  top: 56px;
  right: 56px;
  background: var(--color-bg-light);
  padding: 16px;
  border-radius: 50%;
  display: flex;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  @media screen and (max-width: 768px) {
    top: 32px;
    right: 16px;
    position: fixed;
  }
}
</style>
