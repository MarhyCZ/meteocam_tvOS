import ATV from 'atvjs'
import DOCS from '../../lib/docshelper.js'
import template from './template.hbs'

import API from '../../lib/chmi.js'

export let config = {
  name: 'home',
  template: template,
  ready (options, resolve, reject) {
    let homescreen = API.getWebcams()

    // Then resolve them at once
    Promise
      .all([homescreen])
      .then((vysledky) => {
        console.log(vysledky)
        let list = vysledky[0]

        resolve({
          list
        })
      }, (xhr) => {
        // error
        reject()
      })
  },
  afterReady (doc) {
    DOCS.setDoc('home', doc)
  }
}

export const HomePage = ATV.Page.create(config)

// export default HomePage
