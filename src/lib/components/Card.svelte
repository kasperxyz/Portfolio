<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let project;
  const dispatch = createEventDispatcher();

  function handleClick() {
    if (project.external && project.url) {
      window.open(project.url, '_blank');
      return;
    }
    dispatch('open');
  }
</script>

<div class="card" on:click={handleClick}>
  <!-- {#if project.external}
    <img class="icon" src="/icons/arrow_outward.svg" alt="Expand" />
  {:else}
    <img class="icon" src="/icons/expand_white.svg" alt="Expand" />
  {/if} -->
  <img class="thumbnail" src={project.thumbnail} alt={project.title} />
  <div class="card-details">
    <div class="title-desc">
      <h3>{project.title}</h3>
      <div class="card-tags">
        <span class="tag tag--secondary">{project.slug}</span>
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
  img {
    filter: drop-shadow(0px 0px 0px rgba(0,0,0,0));
    will-change: transform,filter;
    transition: transform var(--hover-speed, .65s) var(--spring-bouyant),filter var(--hover-speed, .65s) var(--spring-bouyant);
  }
  &:hover {
    img {
      filter: drop-shadow(0px 15px 17px rgba(0,0,0,.2));
      transform: scale(1.02);
    }
  }
}


.title-desc {
  color: #2C2C2C;
  display: flex;
  flex-direction: column;
  gap: 12px;
  h3 {
    margin: 0;
  }
  p {
    color: var(--color-text-secondary);
    /* font-size: 0.875rem;
    line-height: 1.4rem; */
    a { 
      color: var(--color-text-primary);
      text-decoration: none;
    }
  }
}

.card-tags {
  display: flex;
  gap: 8px;
  .tag {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    text-transform: uppercase;
    font-size: 10px;
    line-height: 18px;
    letter-spacing: 0.5px;
    font-weight: 700;
    &.tag--secondary {
      background-color: #DDDCDC;
      border: none;
    }
  }
}

.thumbnail {
  width: 100%;
  height: auto;
  border-radius: 12px;
}


</style>
