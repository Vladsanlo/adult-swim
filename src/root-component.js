import { LitElement, html, css, nothing } from 'lit'

import { NavbarComponent } from './navbar-component'

import { CommonSideEffects } from './common-side-effects-component'

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
        this.currentPage = e.detail
    }

    render() {
        let pageTemplate = nothing
        switch (this.currentPage) {
            case 'common-side-effects':
                pageTemplate = html`<common-side-effects-component></common-side-effects-component>`
                break;
        }

        return html`
        <div id="root-container">
            <navbar-component @change-page="${this.handlerPageChange}"></navbar-component>
            <h1>Pagina para mostrar caricaturas de adult swim</h1>

            ${pageTemplate}
    </div>
    `
    }
}

window.customElements.define('root-component', RootComponent)