export default class ProportionalStyle {
    constructor(data) {
        this.target = document.querySelector(data.target);
        if (!this.target) return;
        this.reference = document.querySelector(data.reference);
        this.styles = data.styles;
        document.querySelector('.app').addEventListener(
            'scroll',
            () => {
                this.applyStyles();
            },
            { passive: true }
        );
    }
    applyStyles() {
        if (window.matchMedia('(min-width: 600px)').matches) {
            let coef = 1 - this.reference.getBoundingClientRect().left / window.innerWidth;
            if (coef <= 0) coef = 0;
            if (coef >= 1) coef = 1;

            for (const key in this.styles) {
                this.target.style.setProperty(key, eval('`' + this.styles[key] + '`'));
            }
        }
    }
}
