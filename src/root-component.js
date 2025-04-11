import { LitElement, html, css, nothing } from 'lit'

import { NavbarComponent } from './navbar-component'

import { CommonSideEffectsComponent } from './common-side-effects-component'

import { TheBoondocksComponent } from './the-boondocks-component'

import { RickNMortyComponent } from './rick-n-morty-component'

export class RootComponent extends LitElement {
    static get properties() {
        return {
            currentPage: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.currentPage = "homepage"
    }

    static get styles() {
        return css`
        #root-container{
        background-color:#3f68df;

        padding:2vw;
        }
        `
    }

    handlePageChange(e) {
        console.log('Handling change')
        this.currentPage = e.detail
    }

    render() {
        let pageTemplate = nothing
        console.log(this.currentPage)
        switch (this.currentPage) {
            case 'common-side-effects':
                pageTemplate = html`<common-side-effects-component></common-side-effects-component>`
                break;
            case 'the-boondocks':
                pageTemplate = html`<the-boondocks-component></the-boondocks-component>`
                break;
            case 'rick-n-morty':
                pageTemplate = html`<rick-n-morty-component></rick-n-morty-component>`
                break;
        }

        return html`
        <div id="root-container">
            <navbar-component @change-page="${this.handlePageChange}"></navbar-component>
            <h1>Pagina para mostrar caricaturas de adult swim</h1>

            <h1>Antes</h1>
            ${pageTemplate}
            <h1>Despues</h1>
    </div>
    `
    }
}

window.customElements.define('root-component', RootComponent)