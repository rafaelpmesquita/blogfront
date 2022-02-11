import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Nav from '@/store/nav'
import especialidades from '@/store/especialidades'
import Timeline from '@/store/Timeline'


// /* eslint-disable import/no-mutable-exports */
let nav: Nav 
let especialidade: especialidades 
let time: Timeline 

const initializeStores = (store: Store<any>): void => {
    nav = getModule(Nav, store)
    especialidade= getModule(especialidades, store)
    time= getModule(Timeline, store)
  }

export { initializeStores, nav, especialidade,time }

/* dps mudar de books para o que for preciso */