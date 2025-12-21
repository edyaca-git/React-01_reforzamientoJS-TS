import './style.css'
import './bases/01-const-let'
import './bases/02_template-string'
import './bases/03_object-literal'
import './bases/04_arrays'
import './bases/05_functions'
import './bases/06_obj-destructuring'
import './bases/07_array-destructuring'
import './bases/08_imp-exp'
import { getHeroesByOwnerEnum } from './bases/08_imp-exp'
import { OwnerEnum } from './data/heores.data'

import './bases/09_promises'
import './bases/10_fetch-api'
import './bases/11_async-await'
 
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
     <h1>Hello Vite!</h1>
  </div>
`;
 
 console.log(getHeroesByOwnerEnum(OwnerEnum.DC));