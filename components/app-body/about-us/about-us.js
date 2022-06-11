class AboutUs extends HTMLElement {
    _gridListEle;

    static get observedAttributes() {
        return [];
    }

    constructor() { super(); }

    connectedCallback() {
        this.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col py-3">
                    <h4 class="d-flex justify-content-center pt-5">Who are we?</h4>
                    <p><b><i>Career Discover</i></b> helps individuals and groups connect in the early careers and education sector.</p>
                    <p>Select the group below you represent to see how we can help you.</p>
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
                { title: 'Current student', imgSrc: './../../../img/aboutus/img-6.png', desc: 'Confidently unlock the next step in your career journey.' },
                { title: 'Student recruitment', imgSrc: './../../../img/aboutus/img-5.png', desc: 'Inspire future students to study with you.' },
                { title: 'Student society', imgSrc: './../../../img/aboutus/img-4.png', desc: 'Support your members\' career development.' },
                { title: 'Careers service', imgSrc: './../../../img/aboutus/img-2.png', desc: 'Push graduate career outcomes to new heights.' },
                { title: 'Industry association', imgSrc: './../../../img/aboutus/img-3.png', desc: 'Offer more value and boost membership engagement.' },
                { title: 'Employer', imgSrc: './../../../img/aboutus/img-1.png', desc: 'Attract top talent and make smarter hiring decisions.' },
            ];
        });
    }

    attributeChangedCallback(name, oldValue, newValue) { }
}

customElements.define('about-us', AboutUs);
