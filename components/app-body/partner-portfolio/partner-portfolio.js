class PartnerPortfolio extends HTMLElement {
    static get observedAttributes() {
        return [];
    }

    constructor() { super(); }

    connectedCallback() {
        this.innerHTML = `
        <div class="row">
            <div class="col py-3">
                partner-portfolio
            </div>
        </div>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define('partner-portfolio', PartnerPortfolio);
