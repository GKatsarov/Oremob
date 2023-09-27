class ProductRecommendations extends window.HTMLElement {
  connectedCallback() {
    fetch(this.dataset.url)
      .then((response) => response.text())
      .then((text) => {
        const html = document.createElement('div')
        html.innerHTML = text
        const recommendations = html.querySelector('product-recommendations')

        if (recommendations && recommendations.innerHTML.trim().length) {
          this.innerHTML = recommendations.innerHTML
        }
      })
      .catch((e) => {
        console.error(e)
      })
  }
}

if (window.customElements.get('product-recommendations') === undefined) {
  window.customElements.define(
    'product-recommendations',
    ProductRecommendations
  )
}
