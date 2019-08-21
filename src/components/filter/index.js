import { LitElement, html, css, unsafeCSS } from 'lit-element'
import style from './style.styl'

class Filter extends LitElement {
	static get properties() {	return {
		active: { type: Boolean },
		onFilter: { type: Object },
		filterKeys: { type: Array }
	}}

	static get styles() {
		return [css`${unsafeCSS(style)}`]
	}

	constructor() {
		super()

		this.active = false
		this.onFilter = null
		this.filterKeys = []

		this.filterValue = ''
		this.fixedKeys = [
			{ id: 'all', name: 'params', label: 'All', checked: true }
		]
		this.radioGroupParams = []

		this.handleSearch = this.handleSearch.bind(this)
	}

	connectedCallback() {
		super.connectedCallback()

		this.initializeEvents()
		this.radioGroupParamsGenerate()

		this.toggle = this.toggle.bind(this)

		this.toggle() // just for tests
	}

	attributeChangedCallback(name, oldValue, newValue) {
		super.attributeChangedCallback(name, oldValue, newValue)

		/**
		 * this validation is very generic and
		 * should be refactored to check attribute
		 * name, old and new value.
		 */
		if (this.filterKeys.length > 0) {
			this.radioGroupParamsGenerate()
		}
	}

	disconnectedCallback() {
		document.removeEventListener('toggleFilter', this.toggle)

		super.disconnectedCallback()
	}

	/**
	 * funcs
	 */
	initializeEvents() {
		document.addEventListener('toggleFilter', this.toggle.bind(this))
	}

	radioGroupParamsGenerate() {
		const dinamicKeys = this.filterKeys.reduce((acc, item) => {
			const key = {
				id: item,
				name: 'params',
				label: item.charAt(0).toUpperCase() + item.slice(1),
				checked: false
			}

			acc.push(key)

			return acc
		}, [])

		this.radioGroupParams = Object.assign([], dinamicKeys, this.fixedKeys)
	}

	toggle() {
		this.active = !this.active

		if (this.active) {
			this.setAttribute('active', '')
		} else {
			this.removeAttribute('active')
		}
	}

	handleClickOverlay() {
		this.toggle()
	}

	handleClickRadioGroupParams(radio) {
		this.radioGroupParams.forEach(item => item.checked = item.id == radio.id)

		if (this.onFilter && this.filterValue) {
			const [selectedParam] = this.radioGroupParams.filter(item => item.checked)

			this.onFilter(this.filterValue, selectedParam.id)
		}

		this.requestUpdate()
	}

	handleSearch(event) {
		const [input] = event.path
		const { value } = input

		this.filterValue = value

		if (this.onFilter) {
			const [selectedParam] = this.radioGroupParams.filter(item => item.checked)

			this.onFilter(value, selectedParam.id)
		}
	}

	/**
	 * HTML
	 */
	render() {
		return html`
			<div class='root'>
				<div class='search'>
					<wc-field name='search' label='Search' disableautocomplete .oninput=${this.handleSearch}></ wc-field>
				</div>
				<div class='content'>
					${
						this.radioGroupParams.map(radio => html`
							<div class='radio'>
								<wc-radio
									id=${radio.id}
									name=${radio.name}
									label=${radio.label}
									?checked=${radio.checked}
									.click=${this.handleClickRadioGroupParams.bind(this)}
								>
								</ wc-radio>
							</div>
						`)
					}
				</div>
			</div>
			${this.overlay()}
		`
	}

	overlay() {
		return html`<div class='overlay' @click=${this.handleClickOverlay}></div>`
	}
}

customElements.define('wc-filter', Filter)