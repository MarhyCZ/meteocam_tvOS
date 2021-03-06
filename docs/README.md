# MeteoCam pro tvOS
Aplikace pro sledování webových kamer ze stránek ČHMÚ. Postavena s použitím TVML a [atvjs](https://github.com/emadalam/atvjs) frameworku.

Problémy hlašte v Issues.


### Jak začít s vývojem

Pokud máte nainstalovnaný [nodejs](https://nodejs.org/) a [npm](https://www.npmjs.com/) stačí spustit následující příkazy ve složce s projektem:

```shell
$ npm run install-deps                   # Spustí yarn, který nainstaluje všechny závislosti z package.json. Také lze použít npm install
```

### Spuštění testovacího webserveru
Zkompiluje .js aplikaci a spustí výchozí webserver na portu 9001. Server hlídá změny a při každém uložení zdrojového souboru znovu překompiluje aplikaci.

```shell
$ npm run serve                   # Spustí se webpack-dev-server
```

### Načtení aplikace z testovacího webserveru
V Xcode projektu v souboru AppDelegate.swift odkomentujte řádek s proměnnou tvBaseURL, která odkazuje na localhost. např:

```swift
    // static let tvBaseURL = "https://marhycz.github.io/ivysilani_tvOS/app/"
    static let tvBaseURL = "http://localhost:9001/"
```

Pak stačí jen projekt spustit a tvOS načte aplikaci z běžícího lokálního webového serveru.
