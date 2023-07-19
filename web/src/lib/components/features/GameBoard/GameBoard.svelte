<script>
  import { GAME_SYMBOL } from '../../../data/game';
  import GameSymbol from '../../shared/GameSymbol/GameSymbol.svelte';
</script>

<div class="game-board">
  <div class="game-board__pick">
    <GameSymbol name={GAME_SYMBOL.ROCK} isReadonly={false} />
  </div>
  <div class="game-board__pick">
    <GameSymbol name={GAME_SYMBOL.PAPER} isReadonly={false} />
  </div>
  <div class="game-board__pick">
    <GameSymbol name={GAME_SYMBOL.SCISSORS} isReadonly={false} />
  </div>
</div>

<style>
  .game-board {
    display: flex;
    justify-content: center;
    gap: 1.6rem;
  }
</style>
