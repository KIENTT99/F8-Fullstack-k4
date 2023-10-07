class CountdownTimer extends HTMLElement {
    constructor() {
        super();
        this.duration = parseInt(this.getAttribute("duration")) || 30;
        this.attachShadow({ mode: "open" });
        this.renderTime();
        this.lastTimestamp = 0;
        this.delay = 1000;
        this.isCounting = true;
        this.updateTimer();
    }

    renderTime() {
        const counterElement = document.createElement("div");
        counterElement.classList.add("box");
        counterElement.textContent = this.duration;
        this.shadowRoot.appendChild(counterElement);

        const style = document.createElement("style");
        style.textContent = `
            .box {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #ff9100;
                color: #fff;
                font-size: 1.6rem;
                margin: 30px auto;
                padding: 15px;
            }
          `;
        this.shadowRoot.appendChild(style);
    }

    updateTimer() {
        const counterElement = this.shadowRoot.querySelector(".box");
        const timestamp = performance.now();

        if (timestamp - this.lastTimestamp >= this.delay && this.isCounting) {
            if (this.duration >= 0) {
                counterElement.textContent = this.duration;
                this.duration--;
                const actionButton = document.querySelector(".btn");
                if (actionButton) {
                    actionButton.disabled = true;
                }
            } else {
                this.isCounting = false;
                const actionButton = document.querySelector(".btn");
                if (actionButton) {
                    actionButton.disabled = false;
                    actionButton.addEventListener("click", function () {
                        window.location.href = "https://vnexpress.net/";
                    });
                }
            }
            this.lastTimestamp = timestamp;
        }

        if (this.isCounting) {
            requestAnimationFrame(() => this.updateTimer());
        }
    }
}

customElements.define("countdown-timer", CountdownTimer);