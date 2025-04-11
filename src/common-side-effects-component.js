import { LitElement, html, css } from "lit";

export class CommonSideEffectsComponent extends LitElement {
    static get properties() {
        return {

            title: { type: String },

            name1: { type: String },
            paragraph1: { type: String },
            img1: { type: String },

            name2: { type: String },
            paragraph2: { type: String },
            img2: { type: String },

            name3: { type: String },
            paragraph3: { type: String },
            img3: { type: String },

            name4: { type: String },
            paragraph4: { type: String },
            img4: { type: String },

            name5: { type: String },
            paragraph5: { type: String },
            img5: { type: String },

        }
    }

    constructor() {
        super()
        this.title = "Common Side Effects"

        this.name1 = "Marshall Cuso"
        this.paragraph1 = html`<Strong>${this.name1}</Strong> es el protagonista de la serie, un erudito y cauteloso experto en hongos. Durante su juventud, fue compañero de laboratorio y amigo de Frances Applewhite. Tras realizar obras de caridad en el extranjero, descubre un hongo con propiedades curativas extraordinarias, lo que lo convierte en objetivo de diversas entidades.`
        this.img1 = "https://totalapexentertainment.com/wp-content/uploads/2024/08/This-is-s-Banisteriopsis.jpeg"

        this.name2 = "Frances Applewhite"
        this.paragraph2 = html`<Strong>${this.name2}</Strong> es asistente ejecutiva de Rick Kruger en Reutical Pharmaceuticals y excompañera de laboratorio de Marshall en la secundaria. Aunque inicialmente escéptica sobre los efectos del Ángel Azul, pronto reconoce su potencial económico y busca involucrar a Rick para obtener fondos que ayuden a su madre, recientemente diagnosticada con demencia.`
        this.img2 = "https://static.tvtropes.org/pmwiki/pub/images/frances_applewhite.png"

        this.name3 = "Agente Copano"
        this.paragraph3 = html`<Strong>${this.name3}</Strong> es agente de la DEA que, junto con su compañera Harrington, persigue a Marshall y su descubrimiento. Es descrito como alguien muy pragmático en su trabajo y con inclinaciones hacia las teorías de conspiración, disfrutando de conectar puntos incluso cuando no están relacionados.`
        this.img3 = "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2025/01/copano-in-the-drivers-seat-looking-at-harrington-in-the-adult-swim-series-common-side-effects.jpg"

        this.name4 = "Agente Harrington"
        this.paragraph4 = html`<Strong>${this.name4}</Strong> es compañera de Copano en la DEA, comparte la misión de capturar a Marshall. Es caracterizada como un poco boba, pero muy pragmática en su trabajo y se interesa por teorías de conspiración, a menudo buscando conexiones entre eventos.`
        this.img4 = "https://static.wikia.nocookie.net/lgbt-characters/images/e/e6/Agent_Harrington.jpg/revision/latest/thumbnail/width/360/height/450?cb=20250215213642"

        this.name5 = "Jonas Backstein"
        this.paragraph5 = html`<Strong>${this.name5}</Strong> es un poderoso financiero suizo y miembro de la junta directiva de Reutical Pharmaceuticals. Tiene fuertes vínculos con el gobierno federal y está determinado a destruir a Marshall y su descubrimiento, viéndolo como una amenaza a sus intereses.`
        this.img5 = "https://static.wikia.nocookie.net/villains/images/b/b3/Jonas_CSE.jpg/revision/latest?cb=20250403044556"

    }

    static get styles() {
        return css`
        #showpage-container{
        background-color:#01b111;

        padding:2vw;
        }

         .krtn-image{
            width:300px
        }
        `
    }

    render() {
        return html`
        <div id="showpage-container">
            <h1>${this.title}</h1>

            <h2>${this.name1}</h2>
            <p>${this.paragraph1}</p>
            <img class="krtn-img" src="${this.img1}">

            <h2>${this.name2}</h2>
            <p>${this.paragraph2}</p>
            <img class="krtn-img" src="${this.img2}">

            <h2>${this.name3}</h2>
            <p>${this.paragraph3}</p>
            <img class="krtn-img" src="${this.img3}">

            <h2>${this.name4}</h2>
            <p>${this.paragraph4}</p>
            <img class="krtn-img" src="${this.img4}">

            <h2>${this.name5}</h2>
            <p>${this.paragraph5}</p>
            <img class="krtn-img" src="${this.img5}">
        
        </div>
        `
    }
}


window.customElements.define('common-side-effects-component', CommonSideEffectsComponent)