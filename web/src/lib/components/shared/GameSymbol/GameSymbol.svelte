<script>
  import { GAME_SYMBOL_COLOR } from '../../../data/game';
  import { ICON, ICON_SIZE } from '../../../data/icon';
  import Icon from '../../core/Icon/Icon.svelte';

  export let name;
  export let isReadonly = true;
  $: outerCircleClass = `symbol__outer symbol__outer--${GAME_SYMBOL_COLOR[name]}`;

  function handleClick() {
    console.log('clicked', name);
  }
</script>

<div class="symbol" on:click={isReadonly ? () => null : handleClick}>
  <div class={outerCircleClass}>
    <div class="symbol__inner">
      <div class="symbol__icon">
        <Icon d={ICON[name]} fill="#1e293b" size={ICON_SIZE.LARGE} />
      </div>
    </div>
  </div>
</div>

<style>
  .symbol {
    border-radius: 100%;
  }

  .symbol__outer {
    border-radius: inherit;
    padding: 1.4rem;
  }

  .symbol__outer--red {
    background-color: var(--red);
  }

  .symbol__outer--yellow {
    background-color: var(--yellow);
  }

  .symbol__outer--purple {
    background-color: var(--purple);
  }

  .symbol__outer--green {
    background-color: var(--green);
  }

  .symbol__outer--blue {
    background-color: var(--blue);
  }

  .symbol__inner {
    display: flex;
    justify-content: center;
    border-radius: inherit;
    padding: 0.8rem;
    background-color: var(--fg-1);
  }
</style>
