import DetailsModal from './details-modal'

class PasswordModal extends DetailsModal {
  constructor() {
    super()

    if (this.querySelector('input[aria-invalid="true"]'))
      this.open({ target: this.querySelector('details') })
  }
}

if (window.customElements.get('password-modal') === undefined) {
  window.customElements.define('password-modal', PasswordModal)
}
