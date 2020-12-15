---
title: Cockpit CMS
description: Cockpit ist ein Open Source Headless Content Managment System. Dabei bietet es eine simple und intuitive Benutzeroberfläche. In diesem Post gucken wir uns das CMS etwas genauer an.
author: Marcel Pfeifer
img: cockpit.jpg
tags: tech
createdAt: 2020-12-16
updatedAt: 2020-12-16
---

## Einleitung

Cockpit ist ein Content Management System, welches von der kleinen deutschen Agentur [Agentejo](https://agentejo.com) entwickelt wurde. Das Projekt steht auf GitHub mit MIT-Lizenz zur Verfügung und wird immer noch weiterentwickelt. Veröffentlicht wurde Cockpit 2013 und läuft auch dementsprechend stabil. Geschrieben ist das CMS in PHP.

## Vorteile

Das CMS liefert eigentlich alles, was man sich von einem Headless CMS wünscht. Dabei sind die größten Punkte, welche für Cockpit sprechen:

-   Selbstgehostet
-   Open Source
-   Gute Benutzeroberfläche

Zusätzlich bietet es viel Flexibilität bei der Struktur der Daten und durch den Headless Ansatz ermöglicht es außerdem, die Inhalte auf verschiedenste Plattformen zur Verfügung zu stellen. Weitere Vorteile sind:

-   Einfache Installation
-   SQLite oder MongoDB support
-   Integriertes verwalten von Formularen
-   Webhooks
-   Addons

## Nachteile

Trotz der vielen Vorteile gibt es leider auch einen kleinen Nachteil:

-   Dokumentation

Diese ist zwar gut, aber beinhaltet nicht alle wesentlichen Funktionen. Das sorgt dafür, dass man sich manche Dinge in Foren zusammen suchen muss. Auch die Übersichtlichkeit könnte an manchen stellen noch verbessert werden.

## Benutzung

### Installation

Die installation von Cockpit CMS ist sehr einfach und kann in folgenden drei Schritten zusammengefasst werden:

1. Herunterladen: [Link](https://getcockpit.com/download)
2. Im Web-Root oder ein Unterverzeichnis entpacken

    Sicherstellen, dass das System Schreibzugriff auf die Ordner storage und config mit allen hat

3. https://_domain.com_/cockpit/install aufrufen

Das war es! Cockpit kann jetzt verwenden werden.

Alternativ kann Cockpit auch über ein offizielles Docker Image installiert werden. Dieses ist hier zu finden: [Docker Hub](https://hub.docker.com/r/agentejo/cockpit/).

### Struktur

In Cockpit gibt es drei Arten von Strukturen, die man anlegen kann:

-   Collections:

    Sind mit einer Liste zu vergleichen. Ein gutes Beispiel für die Benutzung wäre zum Beispiel Posts. Man kann vorab festlegen, welche Felder ein Post haben soll. Beim Anlegen eines Posts kann man diese dann ausfüllen.

-   Singeltons:

    Können für Informationen genutzt werden, welche nur einmal vorkommen. Ein Beispiel hierfür wären die Inhalte einer Seite oder Kontaktinformationen.

-   Forms:

    Formulare können genutzt werden, um Nutzer Input entgegenzunehmen. Das einfachste Beispiel hierfür wäre ein Kontaktformular.

Um die Inhalte für Collections und Singletons vorzugeben, gibt es ungefähr 30 verschiedene Feldtypen. Diese können hier gefunden werden: [Docs](https://getcockpit.com/documentation/reference/fieldtypes)

### Benutzung

Inhalte lassen sich einfach über das Dashboard anlegen. Dabei haben Admins die Möglichkeiten, Schemen von Collections und Singletons zu bearbeiten. Andere Nutzergruppen können je nach Rechteverteilung nur Inhalte von bestimmten Collections updaten.

Alternativ gibt es auch API Endpunkte, um Inhalte anzulegen oder zu aktualisieren.

Collections:

```js
// Liste aller Collections
'/api/collections/listCollections'
// Collection Schema
'/api/collections/collection/{collectionname}'
// Collection Schema aktuallisieren
'/api/collections/updateCollection/{collectionname}'
// Einträge bekommen
'/api/collections/get/{collectionname}'
// Eintrag erstellen / updaten
'/api/collections/save/{collectionname}'
// Eintrag löschen
'/api/collections/remove/{collectionname}'

```

Forms:

```js
// Form eintragen
'/api/forms/submit/{form_name}'

```

Singletons:

```js
// Liste aller Singletons
'/api/singletons/listSingletons'
// Singleton Einträge
'/api/singletons/get/{singletonname}'

```

### Updates

Updates des CMS lassen sich relativ einfach durchführen.

1. Laden und entpacken der neuen Version von Cockpit
2. Das gesamte Cockpit-Verzeichnis überschreiben mit Ausnahme des Config- und des Storage-Ordners.

Leider gibt es innerhalb des Dashboards keine Anzeige, ob eine neuere Version verfügbar ist. Somit sollte man selbstständig in regelmäßigen Abständen nach Updates suchen.

## Weiteres

### Nutzergruppen

Nutzergruppen können über die config.yaml angelegt werden.

```yaml
groups:
    author:
        cockpit:
            backend: true
        collections:
            manage: true
```

Alternativ gibt es ein Addon zur Verwaltung von Nutzergruppen: [Groups Management UI Addon](https://github.com/serjoscha87/cockpit_GROUPS)

Danach kann man Nutzern einfach eine der existierenden Rollen zuordnen. Den Zugriff auf verschiedene Collections / Singletons / Forms kann man dann wieder über das UI handeln.

### Internationalisierung

Um Beiträge zu internationalisieren, muss zunächst die möglichen Sprachen in config.yaml angelegt werden.

```yaml
i18n: de # set default/backend lang to deutsch
languages: # optional: make entries multilingual, "de" is default now
    en: English
    de: Deutsch
```

Nach dem Anlegen kann man einfach in einem Beitrag zwischen den verschiedenen Sprachen wählen.

### Sprachen im Dashboard

Um weitere Backendsprachen hinzuzufügen, kann man sich aus folgendem Repo die Language Dateien kopieren.

[Cockpit i18n](https://github.com/agentejo/cockpit-i18n)

Diese kann man dann in folgendem Ordner ablegen.

/config/cockpit/i18n

Nach dem Ablegen der Dateien können die Sprachen einfach von Nutzern ausgewählt werden. Dabei ist die Sprache an einen Account gebunden.

### Addons

Es gibt einige Addons für Cockpit CMS, leider gibt es in der Dokumentation dafür keinen eigenen kleinen Bereich.
Allerdings gibt es im Forum einen Beitrag, welcher diese kuriert.

[Liste von Addons](https://discourse.getcockpit.com/t/list-of-cockpit-addons/234)

Dabei gibt es Addons für die verschiedensten Dinge. Ein paar Beispiele sind: GraphQL, CloudStorage, Form Validation und noch viele weitere.

In dieser Liste führe ich einige meiner lieblings Addons:

-   [Öffnungszeiten](https://github.com/kasperkamperman/cockpitcms_addons/tree/main/openinghours)
-   [Push Notifications](https://github.com/NaderIkladious/cockpit-push-notification)

\* Disclaimer: Bei einigen Addons handelt es sich um Community Addons. Benutzung auf eigene Gefahr.

## Fazit

Es lohnt sich auf jeden Fall mal einen Blick auf Cockpit CMS zu richten. Trotz seiner geringen Bekanntheit umfasst es viele Funktionen, welche selbst bei manchen größeren CMS auf sich warten lassen. Mir persönlich macht die Arbeit mit Cockpit sehr viel Spaß, auch wenn einen die Dokumentation ab und an mal zu längeren Googlesuchen treibt.

Wer auf der Suche nach einem selbstgehosteten CMS wird schell feststellen, wie einfach die Bedienung und Nutzung von Cockpit ist.
