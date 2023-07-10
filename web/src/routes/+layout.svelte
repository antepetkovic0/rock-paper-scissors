<script>
  let isDrawerOpened = false;

  function handleRouteClick() {
    isDrawerOpened = false;
  }
</script>

<div class="navigation">
  <input
    type="checkbox"
    id="navigation-toggle"
    class="navigation__checkbox"
    bind:checked={isDrawerOpened}
  />
  <label for="navigation-toggle" class="navigation__button">
    <span class="navigation__icon" />
  </label>
  <div class="navigation__background" />
  <nav class="navigation__nav">
    <ul class="navigation__list">
      <li class="navigation__item">
        <a href="/" class="navigation__link" on:click={handleRouteClick}
          >Overview</a
        >
      </li>
      <li class="navigation__item">
        <a href="/map" class="navigation__link" on:click={handleRouteClick}
          >Singleplayer</a
        >
      </li>
      <li class="navigation__item">
        <a href="/compare" class="navigation__link" on:click={handleRouteClick}
          >Multiplayer</a
        >
      </li>
    </ul>
  </nav>
</div>

<div class="content">
  <slot />
</div>

<style>
  .navigation__checkbox {
    display: none;
  }

  .navigation__button {
    width: 4rem;
    height: 4rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    position: fixed;
    top: 2rem;
    left: 0;
    background-color: var(--purple-1);
    z-index: 200;
    text-align: center;
    cursor: pointer;
  }

  .navigation__icon {
    margin-top: 2rem;
    position: relative;

    &,
    &::before,
    &::after {
      display: inline-block;
      width: 1.6rem;
      height: 2px;
      background-color: var(--fg-1);
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }

  .navigation__background {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    position: fixed;
    top: 2rem;
    left: 0;
    z-index: 100;
    background-image: linear-gradient(
      to right bottom,
      #d16ba5,
      #c777b9,
      #ba83ca,
      #aa8fd8,
      #9a9ae1,
      #8aa7ec,
      #79b3f4,
      #69bff8,
      #52cffe,
      #41dfff,
      #46eefa,
      #5ffbf1
    );
    transition: transform 0.7s ease-in-out;
  }

  .navigation__nav {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 150;
    opacity: 0;
    width: 0;
  }

  .navigation__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
  }

  .navigation__item {
    color: var(--fg-1);
  }

  .navigation__checkbox:checked ~ .navigation__background {
    transform: scale(80);
  }

  .navigation__checkbox:checked ~ .navigation__background {
    transform: scale(80);
  }

  .navigation__checkbox:checked ~ .navigation__nav {
    width: 100%;
    opacity: 1;
  }

  .navigation__checkbox:checked + .navigation__button .navigation__icon {
    background-color: transparent;
  }

  .navigation__checkbox:checked
    + .navigation__button
    .navigation__icon::before {
    top: 0;
    transform: rotate(45deg);
  }

  .navigation__checkbox:checked + .navigation__button .navigation__icon::after {
    top: 0;
    transform: rotate(-45deg);
  }

  .navigation__link:link,
  .navigation__link:visited {
    display: inline-block;
    font-size: 2.4rem;
    color: white;
    text-decoration: none;
    padding: 1rem 2rem;
  }

  .content {
    padding: 2.4rem 4.8rem;
  }
</style>
