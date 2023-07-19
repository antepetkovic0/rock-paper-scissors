<script>
  let isAdvancedMode = false;

  function handleChangeMode() {
    isAdvancedMode = !isAdvancedMode;
  }
</script>

<div class="container">
  <div class="mode">
    <div class="mode__title">mode</div>
    <label class="mode__switch">
      <input
        type="checkbox"
        checked={isAdvancedMode}
        on:change={handleChangeMode}
      />
      <span class="mode__slider round" />
    </label>
  </div>
  <div class="play">
    <ul class="play__list">
      <li class="play__item">
        <a href="/single-player" class="play__link">vs computer</a>
      </li>
      <li class="play__item">
        <a href="/multi-player" class="play__link">vs others</a>
      </li>
    </ul>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
    height: calc(100vh - 4.8rem);
  }

  .mode {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }

  .mode__title {
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--fg-3);
  }

  .mode__switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .mode__switch::before,
  .mode__switch::after {
    position: absolute;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .mode__switch::before {
    content: 'BASIC';
    left: -6rem;
  }

  .mode__switch::after {
    content: 'ADVANCED';
    right: -10.3rem;
  }

  .mode__switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .mode__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .mode__slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .mode__slider {
    background-color: var(--yellow);
  }

  input:focus + .mode__slider {
    box-shadow: 0 0 1px var(--yellow);
  }

  input:checked + .mode__slider:before {
    transform: translateX(26px);
    color: var(--fg-3);
  }

  input:checked + .mode__slider:after {
    color: var(--fg-1);
  }

  .mode__slider.round {
    border-radius: 34px;
  }

  .mode__slider.round:before {
    border-radius: 50%;
  }

  .play__list {
    list-style: none;
    text-align: center;
  }

  .play__item {
    margin-bottom: 3.2rem;
    background-color: var(--yellow);
    border-radius: 0.4rem;
    padding: 0.8rem 1.6rem;
  }

  .play__link {
    color: var(--fg-1);
    letter-spacing: 0.05rem;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
  }
</style>
