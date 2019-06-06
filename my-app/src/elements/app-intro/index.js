import { define, WeElement } from 'omi'
import style from './_index.css'

define('app-intro', class extends WeElement {
  css() {
    return (
      style +
      `
    code{
      color: ${Math.random() > 0.5 ? 'red' : 'blue'}
    }`
    )
  }

  render(props, data) {
    return (
      <p class="app-intro">
        哈哈哈哈 <code>src/elements/*/*.*</code> and save to reload.
      </p>
    )
  }
})
