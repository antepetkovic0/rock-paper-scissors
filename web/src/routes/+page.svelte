<script>
  import {
    GAME_RULES_CONTENT,
    GAME_SYMBOL,
    GAME_SYMBOL_COLOR
  } from '../lib/data/game';
  import GameSymbol from '../lib/components/shared/GameSymbol/GameSymbol.svelte';
</script>

<h1>Rock paper scissors</h1>
<h1>(Lizard spock)</h1>
<p>
  Welcome to the ultimate showdown of strategy and wit! Get ready to dive into
  the addictive world of Rock Paper Scissors (Lizard Spock), where you'll engage
  in an exhilarating battle of choices.
</p>
<h2>Legend</h2>
<ul class="symbol__list">
  {#each Object.values(GAME_SYMBOL) as symbol, i}
    <li class="symbol__item">
      <GameSymbol name={symbol} />
    </li>
  {/each}
</ul>
<ul class="color__list">
  {#each Object.entries(GAME_SYMBOL_COLOR) as [key, value] (key)}
    <li class="color__item">
      <span class={`color__icon color__icon--${value}`} />
      {key}
    </li>
  {/each}
</ul>
<h2>Rules & Trills</h2>
<ul class="rule__list">
  {#each GAME_RULES_CONTENT as { title, description }, i}
    <li class="rule__item">
      <div class="rule__number">rule no.{i + 1}</div>
      <div class="rule__content">
        <h3 class="rule__title">{title}</h3>
        <p class="rule__description">{description}</p>
      </div>
    </li>
  {/each}
</ul>

<style>
  .symbol__list,
  .color__list,
  .rule__list {
    list-style: none;
  }

  .symbol__list {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .color__item {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .color__list .color__item:not(:last-child) {
    margin-bottom: 0.8rem;
  }

  .color__icon {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
  }

  .color__icon--red {
    background-color: var(--red);
  }

  .color__icon--yellow {
    background-color: var(--yellow);
  }

  .color__icon--purple {
    background-color: var(--purple);
  }

  .color__icon--green {
    background-color: var(--green);
  }

  .color__icon--blue {
    background-color: var(--blue);
  }

  .rule__list .rule__item:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  .rule__item {
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }

  .rule__number {
    grid-column: span 2 / span 2;
    letter-spacing: 0.05rem;
    color: var(--fg-3);
    font-weight: 600;
    margin-top: 0.15rem;
  }

  .rule__content {
    grid-column: span 6 / span 6;
  }
</style>
