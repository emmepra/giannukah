<script>
  import { onMount } from 'svelte';

  export let data;
  let path = data.slug;

  onMount(() => {
    document.title = path;
  });
</script>

<div class="relative h-screen w-screen overflow-hidden">
  <div class="absolute inset-0 bg-center bg-no-repeat bg-cover backdrop-blur-md" style="background-image: url('/background.png');"></div>
  <div class="absolute inset-0 bg-center bg-no-repeat bg-contain" style="background-image: url('/background.png');"></div>
  <div class="relative z-10 h-full w-full flex items-center justify-center">
    <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold text-white drop-shadow-lg px-4 text-center break-words max-w-full">
      {path}
    </h1>
  </div>
</div>

<style>
  .backdrop-blur-md {
    filter: blur(8px);
    opacity: 0.8;
  }

  /* This ensures Poppins is used even if Tailwind doesn't load properly */
  :global(body) {
    font-family: 'Poppins', sans-serif;
  }
</style>
