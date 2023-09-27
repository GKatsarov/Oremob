import VariantSelects from './variant-selects'

class VariantRadios extends VariantSelects {
  updateOptions() {
    const fieldsets = Array.from(this.querySelectorAll('fieldset'))
    this.options = fieldsets.map((fieldset) => {
      return Array.from(fieldset.querySelectorAll('input')).find(
        (radio) => radio.checked
      ).value
    })
  }
}

if (window.customElements.get('variant-radios') === undefined) {
  window.customElements.define('variant-radios', VariantRadios)
}
