import { LitElement,html,css } from "lit";

export class TheBoondocksComponent extends LitElement{
    static get properties(){
        return{

            title1:{type:String},

            title2:{type:String},
            name1:{type:String},
            paragraph1:{type:String},
            img1:{type:String},

            name2:{type:String},
            paragraph2:{type:String},
            img2:{type:String},

            name3:{type:String},
            paragraph3:{type:String},
            img3:{type:String},

            title3:{type:String},
            name4:{type:String},
            paragraph4:{type:String},
            img4:{type:String},

            name5:{type:String},
            paragraph5:{type:String},
            img5:{type:String},

            name6:{type:String},
            paragraph6:{type:String},
            img6:{type:String},

            title4:{type:String},
            name7:{type:String},
            paragraph7:{type:String},
            img7:{type:String},

            name8:{type:String},
            paragraph8:{type:String},
            img8:{type:String},
        }
    }

    constructor(){
        super()
        this.title1="The Boondocks"

        this.title2= "The Freemans"
        this.name1="Robert Freeman"
        this.paragraph1=html`<Strong>${this.name1}</Strong> Es el abuelo paterno de Huey y Riley Freeman, y se convirtió en su tutor legal tras un destino desconocido para los padres de los niños. Robert vive con sus nietos en los suburbios de Woodcrest. `
        this.img1="https://preview.redd.it/does-anyone-know-where-i-can-get-this-outfit-that-robert-v0-he9n067t9u2c1.jpg?width=446&format=pjpg&auto=webp&s=47ed0af1d3b32b3b2a5ded50445594049838ffcc"

        this.name2="Huey Freeman"
        this.paragraph2=html`<Strong>${this.name2}</Strong> fue un personaje de tira cómica sindicada escrito por Aaron McGruder, además de protagonista y narrador principal recurrente de la serie de televisión homónima. Huey, políticamente inteligente y casi militante, se autodenomina revolucionario radical de izquierda y reflexiona con frecuencia sobre la actualidad, así como sobre la difícil situación de los afroamericanos en relación con la sociedad estadounidense en general. Su personaje ha sido descrito a menudo como misántropo y cínico, como suele manifestarse en su personalidad pesimista. Huey también es un terrorista doméstico retirado. Su nombre proviene de Huey P. Newton, uno de los cofundadores y líderes del Partido Pantera Negra. `
        this.img2="https://preview.redd.it/best-opponent-matchup-for-huey-freeman-the-boondocks-v0-m7el5hoanpda1.jpg?width=1080&crop=smart&auto=webp&s=e3a48e673a33ca609af57d1dbf793566166d5c18"

        this.name3="Riley Freeman"
        this.paragraph3=html`<Strong>${this.name3}</Strong> es el hermano menor de Huey Freeman y el nieto menor de Robert Freeman. Tiene 8 años y emula el estilo de vida de los gánsteres. Él y muchos otros lo llaman comúnmente Riley Escobar, El joven Reezy y El recaudador de fondos.`
        this.img3="https://i1.sndcdn.com/artworks-000536268027-a1ckdc-t500x500.jpg"

        this.title3="The DuBois"
        this.name4="Thomas Lancaster /Tom/ DuBois"
        this.paragraph4=html`<Strong>${this.name4}</Strong> Es uno de los dos tritagonistas (junto con Jazmine DuBois) de The Boondocks.
        Es un abogado negro de modales apacibles, con una esposa blanca llamada Sarah y una hija birracial llamada Jazmine. Fue fiscal adjunto de distrito antes de convertirse en abogado defensor y es amigo íntimo de Robert Freeman.`
        this.img4="https://i.redd.it/2q0axhhxv3i81.jpg"

        this.name5="Sarah DuBois"
        this.paragraph5=html`<Strong>${this.name5}</Strong> es un personaje principal de The Boondocks. Es la esposa de Tom DuBois y madre de Jazmine DuBois`
        this.img5="https://pbs.twimg.com/media/EDISel0UcAAyi_C.jpg:large"

        this.name6="Jazmine DuBois"
        this.paragraph6=html`<Strong>${this.name6}</Strong>Es una de las dos protagonistas (junto con Tom DuBois) de The Boondocks.Es la hija birracial de Tom y Sarah DuBois, de raza negra y blanca, respectivamente. Se la retrata como una niña muy dulce, ingenua y sincera, en marcado contraste con todas las personas groseras y cínicas que la rodean, especialmente su vecino y amigo Huey Freeman. En los cómics, su ascendencia mestiza alimenta gran parte de sus inseguridades personales. Sin embargo, este aspecto de su personalidad es mucho menos evidente en la serie animada.`
        this.img6="https://64.media.tumblr.com/019f148bf304d7fc2661e6ebad4b7bed/tumblr_mmg147fqRB1rgam01o1_1280.png"

        this.title4="Others"
        this.name7="Uncle Ruckus"
        this.paragraph7=html`<Strong>${this.name7}</Strong>Es el antagonista principal de la serie animada de televisión The Boondocks. Su voz es la de Gary Anthony Williams.
        Su papel en la serie varía según la trama del episodio en el que aparece. Puede ser uno de los antagonistas principales, un antihéroe importante o neutral. Es un hombre negro que detesta rotundamente a las personas negras: el "Tío Tom" más grande del mundo. Un hombre con sobrepeso, horrible, detestable y feo, con un ojo de cristal enorme, disfruta de distanciarse de otros afroamericanos tanto como sea posible y apoya abiertamente lo que Huey llama la "estructura de poder supremacista blanca".
        
        Tiene opiniones extremadamente racistas hacia todas las personas negras y hacia cualquier otra persona que no sea blanca. El nombre del tío Ruckus hace referencia al tío Remus o tío Tom. Es el personaje de piel más oscura de la serie. Su nombre también hace referencia a Amos Rucker, un miembro afroamericano de los Veteranos Confederados Unidos, quien supuestamente quiso seguir siendo esclavo después de la Guerra Civil de los Estados Unidos. Un "ruckus" también es el acto de armar un alboroto ruidoso, algo que el tío Ruckus casi siempre hace. Su canción número uno, escrita por él mismo, se llama "Don't Trust Them New N***as Over There" (No confíes en esos nuevos negros de allí).
        
        Su odio hacia los negros proviene de su madre negra adoptiva (en realidad biológica), irremediablemente engañada y dañada, quien le enseñó historia blanca y le contó a Ruckus una historia distorsionada, intolerante y desequilibrada de los logros de los negros, como la afirmación de que George Washington Carver fue el responsable del mayor número de muertes por alergia al cacahuete. Este odio se vio reforzado por el hecho de que sufrió terribles abusos por parte de su padre de niño. `
        this.img7="https://foodforthesoul.me/wp-content/uploads/2013/12/uncle-ruckus.jpg"

        this.name8="Colonel H. Stinkmeaner"
        this.paragraph8=html`<Strong>${this.name8}</Strong> El Coronel H. Stinkmeaner es el antagonista secundario de la serie The Boondocks.

        Era un anciano ciego y odioso a quien Robert Freeman mató en una pelea callejera.
        
        Stinkmeaner es descrito como uno de los seres humanos más malvados que jamás haya pisado la tierra. Es sádico, nihilista y, en general, horrible con todo aquel que conoce. Disfruta del dolor y la angustia de los demás. Afirma odiar a todos en general (especialmente a los negros), pero en realidad, simplemente le encanta ser malvado y odia cualquier cosa remotamente inocente y pacífica; simplemente encuentra que ser malvado y malo es más divertido y satisfactorio. Vivió una vida larga y terrible, ya que cuando lo asesinaron, fue enviado al Infierno, donde se sintió mucho más feliz que nunca y lo consideró mucho mejor que la cárcel.
        
        Si bien se sabe poco sobre sus primeros años, Stinkmeaner nació a principios del siglo XX. A pesar de haber nacido en una familia aparentemente normal, pasó todos esos días tan odioso y pesimista como lo es ahora. Para cuando Stinkmeaner tenía 15 años, perdió la vista por culpa del cáncer. Los médicos le dieron 3 años más de vida. Dedicó esos 3 años a sembrar odio y miseria por doquier. Pero por alguna razón, logró sobrevivir mucho más allá de los 18, probablemente gracias a su pasión por el odio.
        
        En algún momento, Stinkmeaner formó la Hateocracia junto con Lord Rufus Crabmiser, Lady Esmeralda Gripenasty y el Sr. George Pistofferson. Los cuatro se odiaban entre sí, pero odiaban aún más a los demás. Y así empezaron a causar problemas a los residentes de su residencia de ancianos hasta que finalmente los echaron y se separaron.`
        this.img8="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKnqvp_SVfi_RNZG4RPpW5InQ4AADGkShrA&s"

    }

    static get styles() {
        return css`
        #showpage-container{
        background-color:#b06300;

        padding:2vw;
        }

         .krtn-image{
            width:200px
        }
        `
    }

    render(){
        return html`
     <div id="showpage-container">
        <h1>${this.title1}</h1>

        <h2>${this.title2}</h2>
        <h2>${this.name1}</h2>
        <p>${this.paragraph1}</p>
        <img class="krtn-image" src="${this.img1}">

        <h2>${this.name2}</h2>
        <p>${this.paragraph2}</p>
        <img class="krtn-image" src="${this.img2}">

        <h2>${this.name3}</h2>
        <p>${this.paragraph3}</p>
        <img class="krtn-image" src="${this.img3}">

        <h2>${this.title3}</h2>
        <h2>${this.name4}</h2>
        <p>${this.paragraph4}</p>
        <img class="krtn-image" src="${this.img4}">

        <h2>${this.name5}</h2>
        <p>${this.paragraph5}</p>
        <img class="krtn-image" src="${this.img5}">
        
        <h2>${this.name6}</h2>
        <p>${this.paragraph6}</p>
        <img class="krtn-image" src="${this.img6}">

        <h2>${this.title4}</h2>
        <h2>${this.name7}</h2>
        <p>${this.paragraph7}</p>
        <img class="krtn-image" src="${this.img7}">
        
        <h2>${this.name8}</h2>
        <p>${this.paragraph8}</p>
        <img class="krtn-image" src="${this.img8}">
        


     </div>
     
        `
    }


}


window.customElements.define('the-boondocks-component',TheBoondocksComponent)