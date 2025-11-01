<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import '../../app.css';
  import type { Project } from '$lib/data/projects';
  export let open = false;
  export let project: Project | null = null;
  const dispatch = createEventDispatcher();
  import { fade, fly } from 'svelte/transition';
  import { linear } from 'svelte/easing';

  // Fix for mobile Safari viewport (address bar) — set CSS --vh to 1% of the innerHeight
  function setVh() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  let _resizeHandler: any;
  onMount(() => {
    setVh();
    _resizeHandler = () => setVh();
    window.addEventListener('resize', _resizeHandler, { passive: true });
    window.addEventListener('orientationchange', _resizeHandler);
  });

  onDestroy(() => {
    if (_resizeHandler) {
      window.removeEventListener('resize', _resizeHandler);
      window.removeEventListener('orientationchange', _resizeHandler);
    }
  });

  // ensure --vh is recalculated when the modal opens (address bar may hide/show)
  $: if (open) {
    // small delay to allow UI changes (keyboard/addressbar) to settle
    setTimeout(() => setVh(), 60);
  }
  
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
  /* use --vh to avoid mobile safari address bar issues */
  height: calc(var(--vh, 1vh) * 100);
}
.modal-content {
  background-color: white;
  overflow-y: auto;
  box-sizing: border-box;
  width: 70vw;
  max-width: 1020px;
  display: block;
  /* include safe-area insets so content isn't clipped under notch / home indicator */
  padding: calc(56px + env(safe-area-inset-top)) 56px calc(112px + env(safe-area-inset-bottom)) 56px;
  scrollbar-width: none;
  color: var(--color-text-black);
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
    /* mobile padding also respects safe-area insets */
    padding: calc(16px + env(safe-area-inset-top)) 16px calc(40px + env(safe-area-inset-bottom)) 16px;
    max-height: calc(var(--vh, 1vh) * 100);
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
    top: 16px;
    right: 16px;
  }
}
</style>
