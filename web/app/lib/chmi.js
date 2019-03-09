import ATV from 'atvjs'
import insertMeteoCam from './meteograf'

const _ = ATV._ // lodash

// import qs from 'qs';

const getWebcams = () => {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `http://portal.chmi.cz/files/portal/docs/meteo/kam/webcams.json`)
    xhr.responseType = 'json'

    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        let categorized = categorizeWebcams(xhr.response)
        let list = insertMeteoCam(categorized)
        console.log(list)
        resolve(list)
      } else {
        reject(console.error())
      }
    }

    xhr.send()
  })
}

const categorizeWebcams = (webcams) => {
  let finalList = {
    'A': { 'name': 'Praha', 'webcams': [] },
    'B': { 'name': 'Jihomoravský', 'webcams': [] },
    'C': { 'name': 'Jihočeský', 'webcams': [] },
    'E': { 'name': 'Pardubický', 'webcams': [] },
    'H': { 'name': 'Kralovehradecký', 'webcams': [] },
    'J': { 'name': 'Vysočina', 'webcams': [] },
    'K': { 'name': 'Karlovarský', 'webcams': [] },
    'L': { 'name': 'Liberecký', 'webcams': [] },
    'M': { 'name': 'Olomoucký', 'webcams': [] },
    'P': { 'name': 'Plzeňský', 'webcams': [] },
    'S': { 'name': 'Stredočeský', 'webcams': [] },
    'T': { 'name': 'Moravskoslezký', 'webcams': [] },
    'U': { 'name': 'Ústecký', 'webcams': [] },
    'Z': { 'name': 'Zlínský', 'webcams': [] }
  }
  // Sorts webcams by province
  webcams.forEach(function (obj) {
    let kraj = obj.kraj
    finalList[kraj].webcams.push(obj)
  })
  // Counts webcams in each province
  Object.entries(finalList).forEach(([key, kraj]) => {
    kraj.webcamCount = kraj.webcams.length
  })
  // console.log(finalList);
  console.log(finalList);
  return finalList
}

const approxLastImage = () => {
  // Due to performance (requesting data from each webcam)
  // Lets just count safe recent time, that every camera will have available
  // CHMI - 20190215.0830.jpg
  let date = new Date()
  let currDay = date.getDate()
  let currYear = date.getFullYear()
  let currMonth = ('0' + (date.getMonth() + 1)).slice(-2)
  let currHour = ('0' + date.getHours()).slice(-2)
  let currMinutes = ('0' + ((Math.ceil((date.getMinutes() + 1) / 10) * 10) - 10)).slice(-2)
  console.log(currYear + '' + currMonth + '' + currDay + '.' + currHour + '' + currMinutes + '.jpg')
  if (currMinutes < 30) {
    if (currHour === '00') {
      currHour = '23'
    } else {
      currHour -= 1
    }

    currMinutes = 50
  } else {
    currMinutes -= 30
    currMinutes = ('0' + currMinutes).slice(-2)
  }
  return currYear + '' + currMonth + '' + currDay + '.' + currHour + '' + currMinutes + '.jpg'
}

const parseImages = (document) => {
  let odkazy = document.getElementsByTagName('a')
  var pole = []
  var ii = 0
  for (var i = 1; i < odkazy.length; i++) {
    if (odkazy.item(i).getAttribute('href').match(/\.jpg/)) {
      pole[ii] = odkazy.item(i).getAttribute('href')
      ii++
    }
  }
  pole.sort()
  pole.reverse()
  console.log(pole)
  return pole
}

const getImages = (webcam) => {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `http://portal.chmi.cz/files/portal/docs/meteo/kam/data_${webcam.file}/`)
    xhr.responseType = 'document'

    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        // let list = parseImages(xhr.responseXML)
        let parser = new DOMParser()
        let tvmlHack = xhr.responseText.replace(/<hr>/g, '')
        let doc = parser.parseFromString(tvmlHack, 'application/xml')
        let list = parseImages(doc)
        resolve(list)
      } else {
        reject(console.error())
      }
    }

    xhr.send()
  })
}

const toQueryString = obj => (
  _.map(obj, (v, k) => {
    if (_.isArray(v)) {
      return (_.map(v, av => `${k}[]=${av}`)).join('&')
    }
    return `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
  })
).join('&')

const xhrOptions = (params) => {
  // const baseParams = {
  //   token: makeToken()
  // }
  console.log(`${toQueryString()}&${toQueryString(params)}`)
  return {
    data: `${toQueryString(params)}`,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    responseType: 'json'
  }
}

export default {
  getWebcams,
  getImages
}
