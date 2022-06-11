class AppNav extends HTMLElement {
    static get observedAttributes() {
        return [];
    }

    constructor() { super(); }

    connectedCallback() {
        this.innerHTML = `
        <section class="sticky-top bg-white">
            <div class="container">
                <div class="row">
                    <div class="col py-2">
                        <i class="icofont-navigation-menu text-dark-primary icofont-2x position-absolute"></i>
                        <h4 class="d-flex justify-content-center">Career Discover</h4>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) { }
}

customElements.define('app-nav', AppNav);
