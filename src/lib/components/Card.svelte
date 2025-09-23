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
  <img class="thumbnail" src={project.thumbnail} alt={project.title} />
  <div class="card-details">
    <div class="title-desc">
      <h3>{project.title}</h3>
      <img class="icon" src="/icons/expand_white.svg" alt="Expand" />
    </div>
  </div>
</div>

<style>
.card {
  display: flex;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: box-shadow 0.2s;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  transition: transform var(--hover-speed, .65s) var(--spring-bouyant),filter var(--hover-speed, .65s) var(--spring-bouyant);
	will-change: transform,filter;
	filter: drop-shadow(0px 0px 0px rgba(0,0,0,0));
  &:hover {
    transform: scale(1.025);
    filter: drop-shadow(0px 15px 17px rgba(0,0,0,.2));
  }
  @media (max-width: 767px) {
      &:hover {
        transform: scale(1.05);
      }
  }
}

.card-details {
  position: absolute;
  width: 100%;
  bottom: 0;
}

.title-desc {
  padding: 24px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 16px;
  h3 {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 28px;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 1.125rem;
    line-height: 20px;
    opacity: 0.7;
    margin-top: 4px;
  }
}

.thumbnail {
  width: 100%;
  height: auto;
}


</style>
