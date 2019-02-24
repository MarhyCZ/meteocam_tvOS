function insertMeteoGraf (webcams) {
  Object.entries(webcams).forEach(([key, kraj]) => {
    kraj.webcams.forEach(function (webcam) {
      // console.log(webcam.file)
      let graf = getGraf(webcam.file)
      if (graf == null) { return false }
      Object.assign(webcam, { meteograf: { title: graf.title, url: graf.url } })
    })
  })
  return webcams
}

const getGraf = (webcam) => {
  // ^\s*document\.getElementById\('graf'\).src.*$\n
  // ^\s*document\.getElementById\('meteo'\).style.display.*$\n
  if (webcam === 'sindelova') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-L3SIND01.gif',
      'title': 'Graf L3SIND01 - Meteostanice Šindelová'
    }
  }
  if (webcam === 'hojsova_straz') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-L1HOJS01.gif',
      'title': 'Graf L1HOJS01 - Meteostanice Hojsova Stráž' }
  }
  if (webcam === 'klatovy') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-L1KLAT01.gif',
      'title': 'Graf L1KLAT01 - Meteostanice Klatovy' }
  }
  if (webcam === 'ondrejov') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-P3ONDR01.gif',
      'title': 'Graf P3ONDR01 - Meteostanice Ondřejov' }
  }
  if (webcam === 'podebrady') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-H3PODE01.gif',
      'title': 'Graf H3PODE01 - Meteostanice Poděbrady' }
  }
  if (webcam === 'jizerka') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-P2KORE01.gif',
      'title': 'Graf P2KORE01 - Meteostanice Jizerka' }
  }
  if (webcam === 'lucnibouda') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-H1LUCB01.gif',
      'title': 'Graf H1LUCB01 - Meteostanice Luční bouda' }
  }
  if (webcam === 'dyjakovice') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-B2DYJA01.gif',
      'title': 'Graf B2DYJA01 - Meteostanice Dyjákovice' }
  }
  if (webcam === 'maruska') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-O3MARU01.gif',
      'title': 'Graf O3MARU01 - Meteostanice Maruška' }
  }
  if (webcam === 'vsetin') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-O3VSET01.gif',
      'title': 'Graf O3VSET01 - Meteostanice Vsetín' }
  }
  if (webcam === 'ostrava_poruba') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-O1PORU01.gif',
      'title': 'Graf O1PORU01 - Meteostanice Ostrava-Poruba' }
  }
  if (webcam === 'krasne_udoli') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-L2KRAU01.gif',
      'title': 'Graf O1PORU01 - Meteostanice Krasné Údolí' }
  }
  if (webcam === 'hradec_kralove') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-H3HRAD01.gif',
      'title': 'Graf H3HRAD01 - Meteostanice Hradec Králové' }
  }
  if (webcam === 'kobyli') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-B2KOBY01.gif',
      'title': 'Graf B2KOBY01 - Meteostanice Kobylí' }
  }
  if (webcam === 'olomouc') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-O2OLOM01.gif',
      'title': 'Graf O2OLOM01 - Meteostanice Olomouc' }
  }
  if (webcam === 'belotin') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-O1BELO01.gif',
      'title': 'Graf O1BELO01 - Meteostanice Bělotín' }
  }
  if (webcam === 'pribram') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-P1PRIB01.gif',
      'title': 'Graf P1PRIB01 - Meteostanice Příbram' }
  }
  if (webcam === 'brno') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-B2BZAB01.gif',
      'title': 'Graf B2BZAB01 - Meteostanice Brno-Žabovřesky' }
  }
  if (webcam === 'klinovec') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-L3KLIN01.gif',
      'title': 'Graf L3KLIN01 - Meteostanice Klínovec' }
  }
  if (webcam === 'horska_kvilda') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-C1HKVI01.gif',
      'title': 'Graf C1HKVI01 - Meteostanice Horská Kvilda' }
  }
  if (webcam === 'paprsek') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-O2PAPR01.gif',
      'title': 'Graf O2PAPR01 - Meteostanice Paprsek' }
  }
  if (webcam === 'stitnanadvlari') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-B1STIT01.gif',
      'title': 'Graf B1STIT01 - Meteostanice Štítná nad Vláří' }
  }
  if (webcam === 'nadejkov') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-C2NADV01.gif',
      'title': 'Graf C2NADV01 - Meteostanice Nadějkov' }
  }
  if (webcam === 'medenec') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-U1MEDE01.gif',
      'title': 'Graf U1MEDE01 - Meteostanice Měděnec' }
  }
  if (webcam === 'slamenka') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-O2SLAM01.gif',
      'title': 'Graf O2SLAM01 - Meteostanice Slaměnka' }
  }
  if (webcam === 'labskabouda') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-H1LBOU01.gif',
      'title': 'Graf H1LBOU01 - Meteostanice Labská bouda' }
  }
  if (webcam === 'kopisty') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-U1KOPI01.gif',
      'title': 'Graf U1KOPI01 - Meteostanice Kopisty' }
  }
  if (webcam === 'cheb') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-L3CHEB01.gif',
      'title': 'Graf L3CHEB01 - Meteostanice Cheb' }
  }
  if (webcam === 'primda') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-L2PRIM01.gif',
      'title': 'Graf L2PRIM01 - Meteostanice Přimda' }
  }
  if (webcam === 'lkkv' || webcam === 'lkkv2') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-L3KVAL01.gif',
      'title': 'Graf L3KVAL01 - Meteostanice Karlovy Vary' }
  }
  if (webcam === 'plzen' || webcam === 'plzen2') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-L1PLMI01.gif',
      'title': 'Graf L1PLMI01 - Meteostanice Plzeň' }
  }
  if (webcam === 'churanov') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-C1CHUR01.gif',
      'title': 'Graf C1CHUR01 - Meteostanice Churáňov' }
  }
  if (webcam === 'kocelovice') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-C1KOCE01.gif',
      'title': 'Graf C1KOCE01 - Meteostanice Kocelovice' }
  }
  if (webcam === 'milesovka') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-U1MILE01.gif',
      'title': 'Graf U1MILE01 - Meteostanice Milešovka' }
  }
  if (webcam === 'ustinadlabem') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-U1ULKO01.gif',
      'title': 'Graf U1ULKO01 - Meteostanice Ústí nad Labem' }
  }
  if (webcam === 'temelin') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-C1TEME01.gif',
      'title': 'Graf C1TEME01 - Meteostanice Temelín' }
  }
  if (webcam === 'praha_libus' || webcam === 'praha_libus2') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-P1PLIB01.gif',
      'title': 'Graf P1PLIB01 - Meteostanice Praha-Libuš' }
  }
  if (webcam === 'ceske_budejovice') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-C2CBUD01.gif',
      'title': 'Graf C2CBUD01 - Meteostanice České Budějovice' }
  }
  if (webcam === 'lklb') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-U2LIBC01.gif',
      'title': 'Graf U2LIBC01 - Meteostanice Liberec' }
  }
  if (webcam === 'kostelni_myslova') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-B2KMYS01.gif',
      'title': 'Graf B2KMYS01 - Meteostanice Kostelní Myslová' }
  }
  if (webcam === 'pecpodsnezkou') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-H1PECS01.gif',
      'title': 'Graf H1PECS01 - Meteostanice Pec pod Sněžkou' }
  }
  if (webcam === 'pribyslav') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-P3PRIB01.gif',
      'title': 'Graf P3PRIB01 - Meteostanice Přibyslav' }
  }
  if (webcam === 'svratouch') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-H3SVRA01.gif',
      'title': 'Graf H3SVRA01 - Meteostanice Svratouch' }
  }
  if (webcam === 'dukovany') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-B2DUKO01.gif',
      'title': 'Graf B2DUKO01 - Meteostanice Dukovany' }
  }
  if (webcam === 'serak') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-O1SERA01.gif',
      'title': 'Graf O1SERA01 - Meteostanice Šerák' }
  }
  if (webcam === 'holesov') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-B1HOLE01.gif',
      'title': 'Graf B1HOLE01 - Meteostanice Holešov' }
  }
  if (webcam === 'lkmt' || webcam === 'lkmt2') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-O1MOSN01.gif',
      'title': 'Graf O1MOSN01 - Meteostanice Ostrava Mošnov' }
  }
  if (webcam === 'doksany') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-U1DOKS01.gif',
      'title': 'Graf U1DOKS01 - Meteostanice Doksany' }
  }
  if (webcam === 'tusimice') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-U1KATU01.gif',
      'title': 'Graf U1KATU01 - Meteostanice Tušimice' }
  }
  if (webcam === 'lkuo') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-H2USTI01.gif',
      'title': 'Graf H2USTI01 - Meteostanice Ústí nad Orlicí' }
  }
  if (webcam === 'vlkonice') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-C1VLKO01.gif',
      'title': 'Graf C1VLKO01 - Meteostanice Vlkonice' }
  }
  if (webcam === 'sec') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-H3SECA01.gif',
      'title': 'Graf H3SECA01 - Meteostanice Seč' }
  }
  if (webcam === 'javorovy') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-O1JAVR01.gif',
      'title': 'Graf O1JAVR01 - Meteostanice Javorový vrch' }
  }
  if (webcam === 'osoblaha') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-O1OSOB01.gif',
      'title': 'Graf O1OSOB01 - Meteostanice Osoblaha' }
  }
  if (webcam === 'vitkov') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-O1VITK01.gif',
      'title': 'Graf O1VITK01 - Meteostanice Vítkov' }
  }
  if (webcam === 'jicin') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-H3JICI01.gif',
      'title': 'Graf H3JICI01 - Meteostanice Jičín' }
  }
  if (webcam === 'dylen') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-L2DYLE01.gif',
      'title': 'Graf L2DYLE01 - Meteostanice Dyleň' }
  }
  if (webcam === 'hejnice') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-U2HEJN01.gif',
      'title': 'Graf U2HEJN01 - Meteostanice Hejnice' }
  }
  if (webcam === 'smolnice') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-U1SMOL01.gif',
      'title': 'Graf U1SMOL01 - Meteostanice Smolnice' }
  }
  if (webcam === 'rozmital') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-C1ROZM01.gif',
      'title': 'Graf C1ROZM01 - Meteostanice Rožmitál pod Třemšínem' }
  }
  if (webcam === 'mrzky') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-P2MRZK01.gif',
      'title': 'Graf P2MRZK01 - Meteostanice Mrzky' }
  }
  if (webcam === 'frydlant') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-U2FRYD01.gif',
      'title': 'Graf U2FRYD01 - Meteostanice Frýdlant' }
  }
  if (webcam === 'kucharovice') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-B2KUCH01.gif',
      'title': 'Graf B2KUCH01 - Meteostanice Kuchařovice' }
  }
  if (webcam === 'polom') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-H2POLO01.gif',
      'title': 'Graf H2POLO01 - Meteostanice Polom' }
  }
  if (webcam === 'kralovice') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-L2KRAL01.gif',
      'title': 'Graf L2KRAL01 - Meteostanice Kralovice' }
  }
  if (webcam === 'broumov') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-H3BROU01.gif',
      'title': 'Graf H3BROU01 - Meteostanice Broumov' }
  }
  if (webcam === 'varnsdorf') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-U2VARN01.gif',
      'title': 'Graf U2VARN01 - Meteostanice Varnsdorf' }
  }
  if (webcam === 'nedvezi') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-B2NEDV01.gif',
      'title': 'Graf B2NEDV01 - Meteostanice Nedvězí' }
  }
  if (webcam === 'rymarov') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-O1RYMA01.gif',
      'title': 'Graf O1RYMA01 - Meteostanice Rýmařov' }
  }
  if (webcam === 'turnov') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-P2TURN01.gif',
      'title': 'Graf P2TURN01 - Meteostanice Turnov' }
  }
  if (webcam === 'ivanovice') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-B1IVAN01.gif',
      'title': 'Graf B1IVAN01 - Meteostanice Ivanovice na Hané' }
  }
  if (webcam === 'strojetice') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-U1STRJ01.gif',
      'title': 'Graf U1STRJ01 - Meteostanice Strojetice' }
  }
  if (webcam === 'teplice') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-U1TEPL01.gif',
      'title': 'Graf U1TEPL01 - Meteostanice Teplice' }
  }
  if (webcam === 'volary') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-C1VOLR01.gif',
      'title': 'Graf C1VOLR01 - Meteostanice Volary' }
  }
  if (webcam === 'snezka') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-H7SNEZ01.gif',
      'title': 'Graf H7SNEZ01 - Meteostanice Sněžka' }
  }
  if (webcam === 'nove_hrady') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-C2BYNO01.gif',
      'title': 'Graf C2BYNO01 - Meteostanice Býňov' }
  }
  if (webcam === 'luka') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-O2LUKA01.gif',
      'title': 'Graf O2LUKA01 - Meteostanice Luká' }
  }
  if (webcam === 'hornibecva') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-O3BECV01.gif',
      'title': 'Graf O3BECV01 - Meteostanice Horní Bečva' }
  }
  if (webcam === 'velkechvojno') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-U7VCHV01.gif',
      'title': 'Graf U7VCHV01 - Meteostanice Velké Chvojno' }
  }
  if (webcam === 'vlasim') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-P3VLAS01.gif',
      'title': 'Graf P3VLAS01 - Meteostanice Vlašim' }
  }
  if (webcam === 'bucina') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/PR/grafy/2/C7BUCI01.PNG',
      'title': 'Graf C7BUCI01 - Meteostanice Bučina' }
  }
  if (webcam === 'lysa_hora1' || webcam === 'lysa_hora2' || webcam === 'lysa_hora3') {
    return { 'url': 'http://portal.chmi.cz/files/portal/docs/poboc/OS/KW/Captor/tmp/DMULTI-O1LYSA01.gif',
      'title': 'Graf O1LYSA01 - Meteostanice Lysá Hora' }
  }
}

export default insertMeteoGraf
