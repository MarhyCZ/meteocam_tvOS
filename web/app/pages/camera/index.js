import ATV from 'atvjs'

import template from './template.hbs'

import API from '../../lib/chmi.js'

const CameraPage = ATV.Page.create({
  name: 'camera',
  template: template,
  ready (options, resolve, reject) {
    let images = API.getImages(options)
    // let homescreen = null
    // Then resolve them at once
    Promise
      .all([images])
      .then((vysledky) => {
        // let list = xhrs[0].response
        resolve({
          camera: options,
          image: vysledky[0][0]
        })
      }, (xhr) => {
        // error
        reject()
      })
  }
})

export default CameraPage
