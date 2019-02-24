import ATV from 'atvjs'

import template from './template.hbs'

const FullscreenPage = ATV.Page.create({
  name: 'fullscreen',
  template: template,
  ready (options, resolve, reject) {
    resolve(options)
    reject(options)
  }
})

export default FullscreenPage
