class AppBody extends HTMLElement {
    static get observedAttributes() {
        return [];
    }

    constructor() { super(); }

    connectedCallback() {
        this.innerHTML = `
        <section class="bg-light-primary">
            <about-us></about-us>
        </section>
        <section class="bg-light-success">
            <our-service></our-service>
        </section>
        <section class="bg-darkest-primary">
            <trending-offer></trending-offer>
        </section>
        <section class="bg-light-warning">
            <eco-system></eco-system>
        </section>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) { }
}

customElements.define('app-body', AppBody);

{/*     
        
        <section class="bg-light-primary">
            <partner-portfolio></partner-portfolio>
        </section>
        <section class="bg-light-primary">
            <register-now></register-now>
        </section> */}