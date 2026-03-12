class AiCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const name = this.getAttribute('name');
        const category = this.getAttribute('category');
        const link = this.getAttribute('link');
        const rank = this.getAttribute('rank');

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #2c2c3e;
                    border-radius: 12px;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.25);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    overflow: hidden;
                    position: relative;
                    cursor: pointer;
                    transform-style: preserve-3d;
                }
                :host(:hover) {
                    transform: translateY(-5px) scale(1.02) rotateX(10deg);
                    box-shadow: 0 15px 30px rgba(78, 255, 223, 0.2), 0 10px 10px rgba(0,0,0,0.3);
                }
                a {
                    text-decoration: none;
                    color: inherit;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    padding: 20px;
                    box-sizing: border-box;
                }
                .rank {
                    position: absolute;
                    top: -10px;
                    left: -10px;
                    background-color: #4e5dff;
                    color: white;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 1.2em;
                    border: 3px solid #1a1a2e;
                }
                h3 {
                    margin: 0;
                    font-size: 1.4em;
                    color: #e0e0ff;
                    margin-top: 20px; /* Space for rank */
                }
                p {
                    margin: 5px 0 0;
                    color: #a0a0c0;
                    font-size: 0.9em;
                }
                :host(.ranked) h3 { 
                    margin-top: 25px;
                    font-size: 1.2em;
                }
                 :host(.ranked) a { 
                    padding: 15px;
                } 

            </style>
            <a href="${link}" target="_blank" rel="noopener noreferrer">
                ${rank ? `<div class="rank">${rank}</div>` : ''}
                <h3>${name}</h3>
                <p>${category}</p>
            </a>
        `;
    }
}

customElements.define('ai-card', AiCard);
