class RegisterNow extends HTMLElement {
    static get observedAttributes() {
        return [];
    }

    constructor() { super(); }

    connectedCallback() {
        this.innerHTML = `
        <div class="row">
            <div class="col py-3">
                register-now
            </div>
        </div>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define('register-now', RegisterNow);
