class AppRoot extends HTMLElement {
    static get observedAttributes() {
        return [];
    }

    constructor() { super(); }

    connectedCallback() {
        this.innerHTML = `
        <app-nav></app-nav>
        <app-header></app-header>
        <app-body></app-body>
        <app-footer></app-footer>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) { }
}

customElements.define('app-root', AppRoot);
