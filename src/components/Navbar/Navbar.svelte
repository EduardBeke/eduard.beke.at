<script>
  import { Sections } from "../../sections";
</script>

<div class="navbar">
  <p class="fullname">Eduard Beke</p>
  <div class="links">
    {#each Object.values(Sections) as section}
      <a href={"#" + section}>{section}</a>
    {/each}
  </div>
  <a class="resume">Resume</a>
</div>

<style lang="scss">
  @import "src/styles";

  .links {
    display: flex;
    gap: 40px;

    a {
      @include textMdMedium();
    }
  }

  .resume {
    @include textMdMedium();

    display: flex;
    justify-content: center;
    align-items: center;
    width: 122px;
    height: 50px;
    border: 1px solid $primary;
    border-radius: 20px;

    cursor: pointer;
  }

  .navbar {
    padding: 28px 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .fullname {
    @include text();
    color: $primary;
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;
  }
</style>
