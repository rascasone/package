<script lang="ts">
  export let color: "black" | "red" = "black";
</script>

<button data-color={color}>
  <slot />
</button>

<style lang="postcss">
  button {
    padding: 10px;

    &[data-color="black"] {
      background: black;
      color: white;
    }

    &[data-color="red"] {
      background: red;
      color: white;
    }
  }
</style>
