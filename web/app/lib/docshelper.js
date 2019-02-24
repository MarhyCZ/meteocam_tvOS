import ATV from 'atvjs'

const docs = {}
const configs = {}

const docFunc = {
  setDoc (name, doc) { docs[name] = doc },
  getDoc (name) { return docs[name] },
  setConfig (config) { configs[config.name] = config },
  getConfig (name) { return configs[name] },
  reloadPage (name, options) {
    let config = this.getConfig(name)
    let oldDoc = this.getDoc(name)
    let newDoc = ATV.Page.makeDom(config, options)
    this.setDoc(name, newDoc)
    ATV.Navigation.replaceDocument(newDoc, oldDoc)
  }
}

export default docFunc
