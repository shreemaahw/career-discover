class EcoSystem extends HTMLElement {
    static get observedAttributes() {
        return [];
    }

    constructor() { super(); }

    connectedCallback() {
        this.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col py-3 text-dark">
                    <h4 class="d-flex justify-content-center pt-5">Join our ecosystem</h4>
                    <p>Our mission is to help every student get the best possible start to their career.</p>
                    <p>Partner with us to help make that a reality!</p>
                </div>
            </div>
        </div>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) { }
}

customElements.define('eco-system', EcoSystem);
