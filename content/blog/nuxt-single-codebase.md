---
title: Nuxt Single Codebase
description: In diesem Artikel fasse ich zusammen, wie man mit Nuxt und Capacitor aus einer Codebase eine Webseite, Android und iOS App baut.
author: Marcel Pfeifer
img: nuxtSingleCodebase.jpg
tags: tech
createdAt: 2021-08-12
updatedAt: 2021-08-12
---

## Einleitung

In diesem Artikel fasse ich zusammen wie Nuxt in kombiniation mit Capacitor genutzt werden kann um aus einer einzigen Codebase sowohl eine Webseite als auch Apps generieren kann. Dabei ist es sowohl möglich nur eine iOS App oder Android App zu erstellen oder beide. Zunächst wird beschrieben wie das Projekt angelegt wird. Im Verlauf folgen weitere Tipps um plattformspezifische Funktionen einfach nutzen zu können.

## Setting up

Das Setup beginnt zunächst mit dem erstellen einer normal Nuxt Anwendung. Dafür wird create-nuxt-app genutzt.

```bash
npx create-nuxt-app <my-project>
```

Beim erstellen der App wird die Frage nach dem "Rendering Mode" gestellt. Für die mobilen Anwendungen werden wir hier SPA benutzen. Jedoch wird unsere Webseite im SSR Modus betrieben. Aus diesem Grund wählen wir zunächst SSR aus.

Darauf folgt die Installation von Capacitor. Dafür werden die Folgenden zwei NPM Packages benötigt

```bash
npm install --save @capacitor/core @capacitor/cli
```

Jetzt haben wir die Möglichkeit eine Konfigurationsdatei für Capacitor anzulegen. Über das --web-dir zeigen wir auf das Verzeichnis welches in die App eingebunden werden soll.

```bash
npx cap init --web-dir dist
```

capactior.config.ts

```js
{
  appId: '<appId>', // normalerweise die eigene Domain rückwärts: ink.wolves.<AppName>
  appName: '<AppName>',
  webDir: 'dist',
  bundledWebRuntime: false
}
```

Nun können wir die benötigten NPM Packages für die Plattformen hinzufügen. Anschließend können über npx cap add die verschiedene Plattformen hinzuzufügt werden.

```bash
npm install @capacitor/ios @capacitor/android
```

```bash
npx cap add ios
```

```bash
npx cap add android
```

## Fazit
