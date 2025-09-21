<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let open = false;
  export let title = '';
  const dispatch = createEventDispatcher();

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
  <div class="modal-overlay" on:click={clickOutside}>
    <div class="modal-content">
      <button class="close-btn" on:click={close}>×</button>
      <h2>{title}</h2>
      <slot />
    </div>
  </div>
{/if}

<style>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}
.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 600px;
  width: 90%;
  position: relative;
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
