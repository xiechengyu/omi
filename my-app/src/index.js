import { render } from 'omi'
import './assets/index.css'
import './elements/demo'

// render(<my-app />, '#root')
render(<my-app numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />, 'body')
