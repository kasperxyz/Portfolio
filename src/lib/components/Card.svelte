<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { trackExternalClick } from '$lib/utils/analytics';
  export let project;
  const dispatch = createEventDispatcher();

  function handleClick() {
    if (project.external && project.url) {
      trackExternalClick(project.slug, project.url);
      window.open(project.url, '_blank');
      return;
    }
    dispatch('open');
  }
</script>

<div class="card" on:click={handleClick}>
  {#if project.video}
    <video
      class="thumbnail"
      src={project.video}
      autoplay
      muted
      loop
      playsinline
      poster={project.thumbnail}
    ></video>
  {:else}
    <img class="thumbnail" src={project.thumbnail} alt={project.title} />
  {/if}
  <span class="tag">{project.brand}</span>
</div>

<style>
.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
  transition: box-shadow 0.2s;
  position: relative;
  filter: drop-shadow(0px 0px 0px rgba(0,0,0,0));
  will-change: transform,filter;
  transition: transform var(--hover-speed, .65s) var(--spring-bouyant),filter var(--hover-speed, .65s) var(--spring-bouyant);
  &:hover {
    filter: drop-shadow(0px 15px 17px rgba(0,0,0,.2));
    transform: scale(1.02);
  }
}

.thumbnail {
  width: 100%;
  height: auto;
  border-radius: 8px;
}


</style>
