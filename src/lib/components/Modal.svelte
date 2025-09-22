<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let open = false;
  export let title = '';
  const dispatch = createEventDispatcher();
  import { fade, fly } from 'svelte/transition';
  import { backOut } from 'svelte/easing';
  
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
  <div class="modal-overlay" on:click={clickOutside} transition:fade={{ duration: 200 }}>
    <div class="modal-content" transition:fly={{ y: 200, duration: 500, easing: backOut }}>
      <button class="close-btn" on:click={close}>×</button>
      <img class="poster" src="/decidr/poster.png" alt="Decidr" />
      <h2>{title}</h2>
      <slot />
    </div>
  </div>
{/if}

<style>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}
.modal-content {
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  width: 100%;
  max-width: 1068px;
  height: 101%;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  inset: 40px 0% 0%;
  display: block;
  filter: drop-shadow(0px 20px 32px rgba(0,0,0,.1));
}
.poster {
  width: 100%;
  object-fit: cover;
}
.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
