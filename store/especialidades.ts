import { Module, Mutation, VuexModule, Action } from 'vuex-module-decorators'
import { conhecimento } from '@/Models'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'especialidades', stateFactory: true, namespaced: true })
export default class especialidades extends VuexModule {
    private conhecimentos = [] as conhecimento[]
    public get $all() {
        return this.conhecimentos
    }
    @Mutation
    private SET_ALL_CONHECIMENTOS(conhecimentos: conhecimento[]) {
        this.conhecimentos = conhecimentos
    }
    @Action({ rawError: true })
    public async getConhecimentos() {
        const conhecimentos = await $axios.$get('/api/v1')
        this.context.commit('SET_ALL_CONHECIMENTOS', conhecimentos)
    }
}