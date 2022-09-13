import {defineStore} from "pinia";

export const useAppStore = defineStore('app',{
    state: () => ({
        windowWidth: window.innerWidth
    }),
    getters: {
        isTablet: state => state.windowWidth <= 768
    },
    actions: {
        setWindowWidth(){
            this.windowWidth = window.innerWidth;
        }
    }
});