<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import '../../app.css';
  export let open = false;
  export let title = '';
  export let content: (string)[] = [];
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
  <div class="modal-overlay" on:click={clickOutside} transition:fade={{ duration: 400 }}>
    <div class="modal-content" transition:fly={{ x: 1000, duration: 400, easing: linear }}>
      <button class="close-btn" on:click={close}>×</button>
      <img class="poster" src="/decidr/poster.png" alt="Decidr" />
      <div class="modal-body">
        <p class="modal-paragraph">{content[0]}</p>
        <p class="modal-paragraph">{content[1]}</p>
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
}
.modal-content {
  background-color: white;
  overflow-y: scroll;
  width: 70vw;
  max-width: 1440px;
  display: block;
  padding: 64px;
  img {
    border-radius: 16px;
  }
}

.modal-body {
  max-width: 620px;
  width: 100%;
  margin: 0 auto;
  padding: 64px 0;
  line-height: 32px;
  .modal-paragraph {
    font-size: 20px;
    line-height: 32px;
  }
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
