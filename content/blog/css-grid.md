---
title: CSS Grid - Die Leckerbissen
description: CSS Grid wird von allen modernen Browsern unterstützt. Dieser Artikel fast die besten Dinge kurz und knapp zusammen.
author: Marcel Pfeifer
img: cssGrid.jpg
tags: tech
createdAt: 2020-12-12
updatedAt: 2020-12-12
---

## Einleitung

CSS Grid ist das leistungsfähigste Layout-System, das in CSS verfügbar ist. Es ist ein 2-dimensionales System, das heißt es kann sowohl Spalten als auch Zeilen verarbeiten.

## Allgemein

Template Columns and rows erlauben es einem Zeilen und Spalten des Rasters mit einer durch Leerzeichen getrennten Liste von Werten zu definieren. Die Werte stellen die Spurgröße dar, und der Abstand zwischen ihnen stellt die Rasterlinie dar.

```css
grid-template-columns: 40px 50px auto 50px 40px;
grid-template-rows: 25% 100px auto;
```

## Die Leckerbissen

Repeat erlaubt es einem einen bestimmten Wert beliebig oft zu wiederholen.

```css
grid-template-columns: repeat(12, 1fr);
```

Diese Zeile würde zum Beispiel 12 gleichgroße Spalten anlegen, welche zusammen die komplette bereite des Layouts füllen. Damit unsere Spalten nun nicht zu klein werden, können wir das Ganze mit minmax kombinieren.

```css
grid-template-columns: repeat(12, minmax(200px, 1fr));
```

Nun sorgen wir dafür, dass eine Spalte mindestens 200px breit ist. Allerdings ist unser Grid nun auch mindestens 2400px breit, dabei werden die Spalten nicht in neue Zeilen umbrochen, wenn die Breite des Ansichtsfensters zu schmal ist.

Um nun ein vollkommen responsives Layout zu bekommen, kann man repeat mit auto-fit kombinieren. Auto-fit erlaubt es uns, die Spalten umzubrechen.

```css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

Diese Webseite benutzt genau diese Möglichkeit im Footer.

## Fazit

CSS Grid erlaubt es, viele Elemente einfacher auf einer Seite anzuordnen. Allerdings ist man dabei an ein striktes Grid System gebunden. Darüber hinaus ist es nicht möglich, das Grid zu animieren. Dennoch bietet es gute neue Möglichkeiten und erleichtert das Anordnen von Elementen.

### Mehr erfahren

-   [CSS Tricks - Allgemein](https://css-tricks.com/snippets/css/complete-guide-grid/)
-   [CSS Tricks - Auto Sizing](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)
