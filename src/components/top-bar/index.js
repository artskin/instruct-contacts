import { LitElement, html, css, unsafeCSS, svg } from 'lit-element'
import style from './style.styl'

class TopBar extends LitElement {
	static get properties() {	return {
		text: { type: String },
		active: { type: Boolean },
		positionX: { type: String },
		positionY: { type: String },
		timeout: { type: Number }
	}}

	static get styles() {
		return [css`${unsafeCSS(style)}`]
	}

	constructor() {
		super()
	}

	connectedCallback() {
		super.connectedCallback()
	}

	attributeChangedCallback() {
		super.attributeChangedCallback()
	}

	/**
	 * funcs
	 */
	handleClickFilter(event) {
		const [icon] = event.path

		icon.classList.add('animationPulse')

		setTimeout(() => {
			icon.classList.remove('animationPulse')
		}, 600)
	}

	/**
	 * HTML
	 */
	render() {
		return html`
			${this.icons()}

			${this.main()}
		`
	}

	main() {
		return html`
			<div class='root'>
				<div class='logo'>${this.logoElement()}</div>
				<div class='filter'>
					<i class='material-icons' @click=${this.handleClickFilter}>filter_list</i>
				</div>
			</div>
		`
	}

	logoElement() {
		return html`
			<svg xmlns="http://www.w3.org/2000/svg" width="200" height="51" viewBox="0 0 200 51">
				<path d="M185.351 23.108v-4.137h3.366v-5.939h4.825v5.939h4.742v4.137h-4.742v9.887c0 .863.183 1.446.536 1.747.361.301.997.449 1.916.449.856 0 1.626-.141 2.29-.428v3.977c-.945.396-1.97.588-3.08.588h-.095c-1.988 0-3.547-.588-4.686-1.768-1.135-1.172-1.707-2.797-1.707-4.859v-9.593h-3.365zm-18.642 5.482c0-3.339.817-5.897 2.449-7.67 1.641-1.774 3.978-2.664 7.024-2.664 1.959 0 3.887.381 5.788 1.138v3.961a13.164 13.164 0 0 0-4.987-.962c-1.84 0-3.213.422-4.102 1.271-.896.843-1.347 2.49-1.347 4.927 0 2.417.451 4.051 1.347 4.915.889.856 2.262 1.284 4.102 1.284 1.663 0 3.327-.335 4.987-.997v3.965c-1.901.781-3.829 1.17-5.788 1.17-3.047 0-5.384-.889-7.024-2.672-1.632-1.781-2.449-4.338-2.449-7.666m-21.567 1.346V18.971h4.828v11.582c0 1.608.326 2.757.984 3.459.649.704 1.721 1.057 3.198 1.057 1.5 0 2.586-.353 3.234-1.057.655-.702.983-1.852.983-3.459V18.971h4.826v10.965c0 2.939-.797 5.241-2.396 6.902-1.595 1.66-3.811 2.488-6.648 2.488-2.846 0-5.054-.828-6.634-2.488-1.583-1.661-2.375-3.963-2.375-6.902m-14.036 9.079V20.751a17.79 17.79 0 0 1 1.354-.548c.575-.214 1.734-.522 3.473-.917a24.977 24.977 0 0 1 5.175-.629v4.137c-2.016.026-3.735.247-5.175.668v15.552h-4.827zm-17.324-15.907v-4.137h3.367v-5.939h4.83v5.939h4.737v4.137h-4.737v9.887c0 .863.179 1.446.532 1.747.363.301.998.449 1.916.449.855 0 1.626-.141 2.289-.428v3.977c-.944.396-1.967.588-3.081.588h-.091c-1.99 0-3.548-.588-4.688-1.768-1.137-1.172-1.708-2.797-1.708-4.859v-9.593h-3.366zm-16.564 1.808c0-2.015.709-3.56 2.129-4.638 1.417-1.077 3.185-1.62 5.308-1.62 1.989 0 3.809.475 5.468 1.432v3.667c-1.356-.642-2.896-.963-4.624-.963-2.304 0-3.453.563-3.453 1.694 0 .562.326 1.003.978 1.325.654.321 1.452.603 2.395.85.944.242 1.882.568 2.813.985.937.407 1.732 1.109 2.395 2.095.663.983.994 2.234.994 3.753 0 1.681-.687 3.064-2.051 4.173-1.368 1.104-3.176 1.657-5.43 1.657-2.293 0-4.416-.541-6.352-1.632v-4.275c1.769 1.184 3.655 1.772 5.668 1.772 1.389 0 2.292-.162 2.707-.482.421-.321.627-.803.627-1.444 0-.591-.326-1.065-.989-1.427-.666-.363-1.461-.679-2.389-.943a30.67 30.67 0 0 1-2.806-.959c-.937-.368-1.733-.97-2.396-1.821-.664-.843-.992-1.908-.992-3.199M74.125 39.015V20.852c2.947-1.466 6.011-2.195 9.206-2.195 2.797 0 4.979.729 6.56 2.188 1.574 1.454 2.363 3.502 2.363 6.126v12.043h-4.826V26.562c0-.535-.047-.984-.148-1.346-.1-.36-.293-.736-.587-1.125-.295-.394-.777-.689-1.44-.882-.668-.195-1.526-.295-2.571-.295-1.177 0-2.424.12-3.727.355v15.746h-4.83zM62.721 18.972h4.825v20.043h-4.825zm-.082-7.137h4.948v4.411h-4.948zm-39.073 4.198a4.854 4.854 0 1 1 0-9.709 4.854 4.854 0 0 1 0 9.709m24.235-9.617c-.354-1.476-.899-2.28-2.311-2.69-11.163-2.699-29.132-2.699-40.295 0-1.301.512-2.101 1.04-2.311 2.69-3.014 20.179-.361 36.377-.008 38.381.32 1.482.777 2.304 2.474 2.819 6.117 1.16 12.429 1.773 18.755 1.847 2.361-7.864 4.077-15.791 3.004-19.829-2.569-9.677-18.323 7.093-18.323 7.093 9.632-15.785 23.656-25.266 27.806-12.819 2.215 6.647 2.178 16.79 1.66 24.796 2.383-.281 4.747-.645 7.084-1.087 1.65-.457 2.141-1.397 2.473-2.819.353-2.005 3.006-18.203-.008-38.382" fill="#FFF"/>
			</svg>
		`
	}

	icons() {
		return html`<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>`
	}
}

customElements.define('wc-top-bar', TopBar)