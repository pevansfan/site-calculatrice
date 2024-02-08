new Vue({
    el: '#calcul',
    data: {
        expression: '',
        result: '',
    },
    methods: {
        appendChar(char) {
            this.expression += char;
        },
        updateResult() {
            this.result = eval(this.expression)
        },
        calculateResult() {
            this.updateResult();
            if (this.result < 0) {
                this.expression = this.expression.split('').reverse().join('');
                this.expression = this.result;
            }
            this.expression = this.result;
        },
        clearInput() {
            this.expression = '';
            this.result = '';
        },

        clearChar() {
            this.expression = this.expression.slice(0, -1);
            this.updateResult();
        }
    }
});


function allPage() {
    let container = document.querySelector('.calculatrice')
    let zoom = document.querySelector('.zoom')
    let dezoom = document.querySelector('.dezoom')
    container.style.width = '100%'
    zoom.style.display = 'none'
    dezoom.style.display = 'block'
}

function closeWindow() {
    document.getElementById("fermerPage").addEventListener("click", function () {
        // Fermer la fenêtre du navigateur
        window.close();
    });
}

function globalPage() {
    let container = document.querySelector('.calculatrice')
    let zoom = document.querySelector('.zoom')
    let dezoom = document.querySelector('.dezoom')
    container.style.width = '400px'
    zoom.style.display = 'block'
    dezoom.style.display = 'none'

}

function openWindow() {
    let container = document.querySelector('.calculatrice')
    let apparaitre = document.querySelector('.apparaitre')
    apparaitre.style.display = 'none'
    container.style.display = 'block'
}

function refreshPage() {
    location.reload();
}

function smallWindow() {
    let container = document.querySelector('.calculatrice')
    let apparaitre = document.querySelector('.apparaitre')
    apparaitre.style.display = 'block'
    container.style.display = 'none'
}

