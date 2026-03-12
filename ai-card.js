class AiCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const name = this.getAttribute('name');
        const category = this.getAttribute('category');

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    height: 100%;
                    box-sizing: border-box;
                }
                .ai-card {
                    padding: 1.5rem;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    box-sizing: border-box;
                }
                h3 {
                    margin: 0 0 0.5rem 0;
                    font-size: 1.2rem;
                    color: var(--primary-color, #ffffff);
                }
                p {
                    margin: 0;
                    font-size: 0.9rem;
                    color: var(--secondary-color, #b3b3b3);
                    flex-grow: 1;
                }
            </style>
            <div class="ai-card">
                <h3>${name}</h3>
                <p>${category}</p>
            </div>
        `;
    }
}

customElements.define('ai-card', AiCard);
