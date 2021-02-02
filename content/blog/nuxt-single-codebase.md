---
title: Nuxt Single Codebase
description: In diesem Artikel fasse ich zusammen, wie man mit Nuxt und Capacitor aus einer Codebase eine Webseite, Android und iOS App baut.
author: Marcel Pfeifer
img: nuxtSingleCodebase.jpg
tags: tech
createdAt: 2021-02-12
updatedAt: 2021-02-12
---

## Einleitung

## Setting up

```bash
npx create-nuxt-app <my-project>
```

```bash
npm install --save @capacitor/core @capacitor/cli
```

```bash
npx cap init --web-dir
```

capactior.config.js

```json
{
	"npmClient": "npm",
	"webDir": "dist",
	"plugins": {},
	"server": {
		"iosScheme": "roastandbrew"
	}
}
```

```bash
npm run generate
```

```bash
npx cap add ios
```

```bash
npx cap add android
```

## Fazit
