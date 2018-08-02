import { observable, computed, action, autorun } from 'mobx';

class AppState {
    @observable count = 0
    @observable countStore = 0;
    @observable countObj = {
        count: 0,
        name: 'jason'
    }
    @observable countStoreObj = {
        count: 0,
        name: 'jason'
    };
    @observable name = 'jason'
    @computed get msg() {
        return `${this.name} say count is ${this.count},上一次的数据是${this.countStore}`
    }
    @action add () {
        this.countStore = this.count;
        this.count += 1
    }
    @action addObj () {
        this.countStoreObj = Object.assign({}, this.countObj);
        this.countObj = Object.assign({}, {count: this.countObj.count+1, ...this.countObj.name})
    }
    @computed get getObj() {
        return `${this.countObj.name} say now count is ${this.countObj.count},上一次的数据是${this.countStoreObj.count}`
    }
    @action changeName (name) {
        this.name = name
    }
}

const appState = new AppState()

autorun( () => {
    console.log(appState)
})

// setInterval( () => {
//     appState.add()
// }, 1000)

export default appState;