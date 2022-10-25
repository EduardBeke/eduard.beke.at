<script>
  export let id;
  export let grayBg = true;
  export let withTitle = false;
</script>

<section {id} class={grayBg ? "grayBg" : ""}>
  {#if withTitle}
    <p class="sectionTitle">{id}</p>
  {/if}
  <slot />
</section>

<style lang="scss">
  @import "src/styles";

  section {
    padding: 157px 120px 80px 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .sectionTitle {
    @include text();
    font-size: 40px;
    text-decoration: underline;
  }

  .grayBg {
    background-color: $gray50;
  }
</style>
