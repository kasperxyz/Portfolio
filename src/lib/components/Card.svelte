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
  <img class="thumbnail" src={project.thumbnail} alt={project.title} />
  <div class="card-details">
    <div class="title-desc">
      <h3>{project.title}</h3>
      <div class="tags">
        <span class="tag tag--secondary">{project.brand}</span>
        {#each project.tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
      <p>{@html project.description}</p>
    </div>
  </div>
</div>

<style>
.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
  transition: box-shadow 0.2s;
  position: relative;
  .thumbnail {
    filter: drop-shadow(0px 0px 0px rgba(0,0,0,0));
    will-change: transform,filter;
    transition: transform var(--hover-speed, .65s) var(--spring-bouyant),filter var(--hover-speed, .65s) var(--spring-bouyant);
  }
  &:hover {
    .thumbnail {
      filter: drop-shadow(0px 15px 17px rgba(0,0,0,.2));
      transform: scale(1.02);
    }
  }
}

.title-desc {
  display: flex;
  flex-direction: column;
  gap: 12px;
  h3 {
    margin: 0;
  }
  p {
    font-weight: 300;
  }
}

.thumbnail {
  width: 100%;
  height: auto;
  border-radius: 12px;
}


</style>
