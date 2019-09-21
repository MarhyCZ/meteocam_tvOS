import ATV from 'atvjs'

// template helpers
import 'lib/template-helpers'

// raw css string
import css from 'assets/css/app.css'
// shared templates
import loaderTpl from 'shared/templates/loader.hbs'
import errorTpl from 'shared/templates/error.hbs'

// pages
import { config as HomePageConfig, HomePage } from 'pages/home'
import CameraPage from 'pages/camera'
import SearchPage from 'pages/search'
import FullscreenPage from 'pages/fullscreen'


import DOCS from 'lib/docshelper.js'

ATV.start({
  style: css,
  menu: {
    items: [{
      id: 'home',
      name: 'Kamery',
      page: HomePage,
      attributes: { autoHighlight: true, reloadOnSelect: true }
    } /** , {
      id: 'search',
      name: 'O aplikaci',
      page: SearchPage
    } */]
  },
  templates: {
    loader: loaderTpl,
    error: errorTpl,
    // status level error handlers
    status: {
      '404': () => errorTpl({
        title: '404',
        message: 'Page cannot be found!'
      }),
      '500': () => errorTpl({
        title: '500',
        message: 'An unknown error occurred in the application. Please try again later.'
      }),
      '503': () => errorTpl({
        title: '500',
        message: 'An unknown error occurred in the application. Please try again later.'
      })
    }
  },
  onLaunch (options) {
    ATV.Menu.setOptions({
      loadingMessage: 'Načítání'
    })
    ATV.Navigation.navigateToMenuPage()
  },
  onResume (options) {
    // ATV.Navigation.clear()
    // ATV.Navigation.navigateToMenuPage()
    ATV.Navigation.removeActiveDocument()
    ATV.Navigation.navigate('home', HomePageConfig, true)
  }
})
