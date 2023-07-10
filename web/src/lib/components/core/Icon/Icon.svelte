<script>
  import { ICON_SIZE } from '../../../data/icon';

  export let fill = 'none';
  export let d = '';
  export let size = ICON_SIZE.SMALL;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon"
  width={size}
  height={size}
  viewBox="0 0 512 512"
  {fill}
>
  <path {d} />
</svg>

<style>
  .icon {
    position: relative;
    display: inline-block;
  }
</style>
