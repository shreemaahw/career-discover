class OurService extends HTMLElement {
    static get observedAttributes() {
        return [];
    }

    constructor() { super(); }

    connectedCallback() {
        this.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col py-3">
                    <h4 class="d-flex justify-content-center pt-5">Out services</h4>
                    <p>Helping students to make the best possible career and study decisions.</p>
                    <img class="img img-fluid w-100" src="./img/ourservice/img-0.png">
                    <p><b><i>Career Discover</i></b> platform is packed with the latest features to engage and inspire our next generation of future leaders. See the following services.</p>
                </div>
            </div>
            <div class="row">
                <div class="col p-0">
                    <grid-list></grid-list>
                </div>
            </div>
        </div>
        `;
        this._gridListEle = this.getElementsByTagName('grid-list')[0];
        this._gridListEle.addEventListener('initialized', () => {
            this._gridListEle.itemList = [
                { title: 'Virtual events', imgSrc: './img/ourservice/img-1.png', desc: 'Confidently unlock the next step in your career journey.' },
                { title: 'Employer experiences', imgSrc: './img/ourservice/img-2.png', desc: 'Inspire future students to study with you.' },
                { title: 'Project based learning', imgSrc: './img/ourservice/img-3.png', desc: 'Support your members\' career development.' },
                { title: 'Course tasters', imgSrc: './img/ourservice/img-4.png', desc: 'Push graduate career outcomes to new heights.' },
            ];
        });
    }

    attributeChangedCallback(name, oldValue, newValue) { }
}

customElements.define('our-service', OurService);
