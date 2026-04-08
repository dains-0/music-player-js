class BackIcon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="icon icon-tabler icons-tabler-filled icon-tabler-player-skip-back"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z"
      />
      <path
        d="M4 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z"
      />
    </svg>`;
  }
}
class PlayIcon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                />
              </svg>`;
  }
}
class StopIcon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="icon icon-tabler icons-tabler-filled icon-tabler-player-pause"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"
      />
      <path
        d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"
      />
    </svg>`;
  }
}
class SkipIcon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="icon icon-tabler icons-tabler-filled icon-tabler-player-skip-forward"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M3 5v14a1 1 0 0 0 1.504 .864l12 -7a1 1 0 0 0 0 -1.728l-12 -7a1 1 0 0 0 -1.504 .864z"
      />
      <path
        d="M20 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z"
      />
    </svg>`;
  }
}
class AddIcon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-circle-plus"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M9 12h6" />
        <path d="M12 9v6" />
      </svg>`;
  }
}
class PlaylistIcon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="icon icon-tabler icons-tabler-filled icon-tabler-playlist"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M21 3a1 1 0 0 1 0 2h-3v12a4 4 0 1 1 -2.001 -3.465l.001 -9.535a1 1 0 0 1 1 -1z"
        />
        <path d="M14 5a1 1 0 0 1 -1 1h-10a1 1 0 1 1 0 -2h10a1 1 0 0 1 1 1" />
        <path d="M14 9a1 1 0 0 1 -1 1h-10a1 1 0 1 1 0 -2h10a1 1 0 0 1 1 1" />
        <path d="M10 13a1 1 0 0 1 -1 1h-6a1 1 0 0 1 0 -2h6a1 1 0 0 1 1 1" />
      </svg>`;
  }
}
customElements.define('back-icon', BackIcon);
customElements.define('play-icon', PlayIcon);
customElements.define('stop-icon', StopIcon);
customElements.define('skip-icon', SkipIcon);
customElements.define('add-icon', AddIcon);
customElements.define('playlist-icon', PlaylistIcon);
