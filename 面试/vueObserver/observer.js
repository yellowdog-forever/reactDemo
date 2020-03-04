class Observer {
  constructor(data) {
    this.Observer(data)
  }
  ob(data) {
    if(data && typeof data === 'object') {
      Object.keys(data).forEach(key => {
        this.reactive(data, key, data[key])
      })
    }
  }
  reactive(data, key, value) {
    this.ob(value);
    Object.defineProperty(obj, key, {
      get: val => {
        // 订阅数据的变化，往dep中添加watcher
        return val
      },
      set: (cureentVal) => {
        this.ob(cureentVal)
        val = cureentVal
      },
      notify() {

      }
    })
  }
}

class Dep{
  constructor() {
    this.subs = []
  }
  addSub(watcher) {
    this.subs.push(watcher)
  }
  notify() {
    this.subs.forEach(w => w.updata)
  }
}

class Watcher {
  constructor() {
    this.oldVal = this.getOldVal() //获取旧值
  }
  getOldVal() {
    Dep.target = this;
    // 获取旧的值
  }
  updata() {

  }
}