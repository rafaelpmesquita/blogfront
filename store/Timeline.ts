import { Module, Mutation, VuexModule, Action } from 'vuex-module-decorators'
import { tl } from '@/Models'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'Timeline', stateFactory: true, namespaced: true })
export default class Timeline extends VuexModule {
    private timeLine = [] as tl[]
    public get $all() {
        return this.timeLine
    }
    @Mutation
    private SET_ALL_TIME(tl: tl[]) {
        this.timeLine = tl
    }
    @Action({ rawError: true })
    public async get() {
        const tl = await $axios.$get('https://apirestrafaelblog.azurewebsites.net/v1/tl')
        this.context.commit('SET_ALL_TIME', tl)
    }
}