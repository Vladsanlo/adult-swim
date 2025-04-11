import { LitElement, html, css } from "lit";

export class RickNMortyComponent extends LitElement {
    static get properties() {
        return {
            title: { type: String },

            name1: { type: String },
            paragraph1: { type: String },
            imgUrl1: { type: String },

            name2: { type: String },
            paragraph2: { type: String },
            imgUrl2: { type: String },

            name3: { type: String },
            paragraph3: { type: String },
            imgUrl3: { type: String },

            name4: { type: String }, 
            paragraph4: { type: String },
            imgUrl4: { type: String },

        }
    }

    constructor() {
        super()
        this.title = "Rick y Morty"

        this.name1 = "Rick Sánchez  "
        this.paragraph1 = html`<strong>${this.name1}</strong>, de la Dimensión C-137 es un viejo científico alcohólico que acostumbra hablar de manera vulgar y entre eructos aparte de hablar de forma bastante inapropiada constantemente, la mayoría de las veces tiene un rastro de saliva e incluso se cree que es licor en la boca. Es padre de Beth Smith y el abuelo materno de Summer y Morty.    Es un hombre que ha pasado gran parte de su vida viajando a través de diversas dimensiones dando a entender que Morty es muy poco inteligente al punto de ser casi un retrasado. `
        this.img1Url1 = "https://i.pinimg.com/originals/4d/e0/8b/4de08b18e7cffda2d96c5ee4c9ec8595.png "

        this.name2 = "Morty Smith "
        this.paragraph2 = html`<strong>${this.name2}</strong>, En "Raising Gazorpazorp", Beth admitió accidentalmente que cuando Morty era un bebé, Jerry llenó a Morty de sus propias inseguridades, convirtiéndolo en el adolescente ansioso que vemos en la serie. En el episodio piloto, los padres de Morty insisten en que tiene algún tipo de discapacidad de aprendizaje. Rick luego afirma que la baja inteligencia de Morty enmascara la alta inteligencia de Rick, actuando como un camuflaje que evita que se rastree la increíble inteligencia de Rick. En "Rickmurai Jack" se revela que la mayoría de los Mortys fueron criados en La Ciudadela para servir a Ricks, así como para actuar como camuflaje.`
        this.img1Url2 = "https://i.pinimg.com/originals/66/83/da/6683da6fc8f5321d2dcb6023e03df4fb.png "

        this.name3 = "Summer Smith "
        this.paragraph3 = html`<strong>${this.name3}</strong>, Summer Smith de la Dimension C-131 es una de los cinco personajes principales. Es miembro de la familia Smith e hija de Jerry Smith y Beth Smith, la hermana mayor de Morty Smith .

        Actualmente actúa como la hermana mayor de Morty y la nieta de Rick, A medida que avanzaba la serie, Summer se involucraba con más frecuencia en las aventuras de Rick y Morty. Ella y Morty a menudo se pelean por el afecto de Rick, pero también mantienen un vínculo único que surge de la revelación de que Morty no es su hermano original.`
        this.img1Url3 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8e360559-b08a-4367-bcf3-0851f92ed33f/dfhinug-77eff2dc-6496-4a42-8f4b-2fad94750844.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlMzYwNTU5LWIwOGEtNDM2Ny1iY2YzLTA4NTFmOTJlZDMzZlwvZGZoaW51Zy03N2VmZjJkYy02NDk2LTRhNDItOGY0Yi0yZmFkOTQ3NTA4NDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xCQ4exTVnPA-Zrz9ic1gou7NBP3POtobb5TlRGUpczg "

        this.name4 = "Evil Morty "
        this.paragraph4 = html`<strong>${this.name4}</strong>, Evil Morty (en español, conocido como Morty Malvado) es uno de los antagonistas de la serie, Por razones desconocidas él ganó un gran odio hacia los Ricks, matando a distintas versiones de ellos, mientras capturaba a otras versiones de sí mismo para utilizar sus ondas cerebrales como escudo para ocultar su guarida del Consejo. Es una de las muchas variantes de Morty en la Curva Finita Central. `
        this.img1Url4 = " https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7746eab7-25c2-4dfb-a0bd-78929e7479ee/dgxcch0-2508b466-706d-4312-b4dc-bc1d95fa5dcb.png/v1/fill/w_672,h_1118/evil_morty__render_1__by_sarventetheepikgamer_dgxcch0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTExOCIsInBhdGgiOiJcL2ZcLzc3NDZlYWI3LTI1YzItNGRmYi1hMGJkLTc4OTI5ZTc0NzllZVwvZGd4Y2NoMC0yNTA4YjQ2Ni03MDZkLTQzMTItYjRkYy1iYzFkOTVmYTVkY2IucG5nIiwid2lkdGgiOiI8PTY3MiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.bUohC0OuGqj56giMddo-F_dKhZ-TUYDJxwuvsubUV90  "

    }
    static get styles() {
        return css`
        #showpage-container{
        background-color:#5bde67;

        padding:2vw;
        }

         .krtn-image{
            width:200px
        }
        `
    }

    render() {
        return html`
        <div id="showpage-container">
            <h1> ${this.title}</h1>
    
            <h1>${this.name1} </h1>
            <p>${this.paragraph1}</p>
            <img class="krtn-image" src="${this.img1Url1}">

            <h1>${this.name2} </h1>
            <p>${this.paragraph2}</p>
            <img class="krtn-image" src="${this.img1Url2}">

            <h1>${this.name3} </h1>
            <p>${this.paragraph3}</p>
            <img class="krtn-image" src="${this.img1Url3}">

            <h1>${this.name4} </h1>
            <p>${this.paragraph4}</p>
            <img class="krtn-image" src="${this.img1Url4}">
      `
    }

}

window.customElements.define('rick-n-morty-component',RickNMortyComponent)