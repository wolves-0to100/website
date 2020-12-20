---
title: Cocktail App
description: Wir bauen eine App für Cocktail Rezepte. Von der Backend Struktur bis hin zur fertigen iOS und Android App.
author: Marcel Pfeifer
img: cocktailApp.jpg
tags: twitch
createdAt: 2020-12-18
updatedAt: 2020-12-20
---

## Einleitung

2021 möchte ich wöchentlich Cocktailrezepte veröffentlichen. Das Ganze soll sowohl auf meiner Webseite als auch in einer App passieren. Dafür bauen wir jetzt eine App mit Backend und Frontend. All das passiert live auf Twitch, also schaut doch gerne mal vorbei: [Twitch](https://twitch.tv/0to100ink)

## Planung

Um die App schnell umsetzen zu können, haben wir uns für Cockpit CMS als Backend entschieden. Das CMS liefert alle Funktionen, welche wir benötigen und erlaubt es uns einfach unsere Rezepte zu managen. Frontendseitig werden wir eine Mobile Hybrid App bauen. Da die Webseite auf Nuxt basiert, werden wir die App ebenfalls mit Vue bauen, um die Einbindung in die Webseite zu erleichtern.

### Backend

Wie bereits erwähnt, benutzen wir Cockpit CMS im Backend. Wer mehr darüber erfahren möchte, kann sich gerne meinen Blogpost zu [Cockpit](/blog/Cockpit) durchlesen.

**Allgemeine Anforderungen:**

-   Internationalisierung vom Content
-   Daten über ein API erreichbar
-   Einfache Datenpflege

**Collections**:

-   **Cocktails**

    Das ist unsere Haupttabelle, hier finden sich alle Informationen zu Cocktails

-   **Alkohol**

    Über die Alkoholtabelle werden wir später in der Lage sein, nach Alkohol zu filtern.

-   **Gläser**

    Ein Glas zeigt uns, in was für einem Glas ein Cocktail typischerweise serviert wird.

-   **Extras**

    Extras ist eine Tabelle, um zusätzliche Informationen zu einem Rezept hinzuzufügen. Ein Beispiel wäre, wie man Zuckersirup herstellt.

### Frontend

Joa machen wir bald!

## Umsetzung

**17.12.2020**

Im ersten Stream haben wir das Backend eingerichtet und unsere Collections angelegt. Dabei haben wir Cockpit ein bisschen näher kennengelernt und uns Gedanken über die allgemeine Struktur gemacht.

## Fazit

Wir sind noch voll dabei das Projekt umzusetzten. Schau doch gerne mal vorbei. Falls du Fragen hast, kannst du sie gerne auch im Chat fragen wenn ich Live bin.
