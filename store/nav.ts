import { Module, Mutation, VuexModule, Action } from 'vuex-module-decorators'
import { Nav } from '@/Models'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'nav', stateFactory: true, namespaced: true })
export default class nav extends VuexModule {
    private navs = [] as Nav[]

    public get $all() {
        return this.navs
    }

    @Mutation
    private SET_ALL_NAVBAR(navs: Nav[]) {
        this.navs = navs
    }
    @Action({ rawError: true })
    public async getNav() {
        const navs = await $axios.$get('api/nv')
        this.context.commit('SET_ALL_NAVBAR', navs)
    }
    
}