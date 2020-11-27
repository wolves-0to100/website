---
title: WebAuthn
author: Marcel Pfeifer
---

## Einleitung

Das Web Authenticaiton API oder auch kurz WebAuthn ist eine neue Art der Authentifizierung von Nutzer. Um zu verstehen warum dieses API sinnvoll ist werde ich in diesem Artikel zuerst auf die aktuelle Situation in diesem Bereich eingehen. Danach folgt ein Überblick zum Web Authenication API und abschließend stelle ich noch das API vor.

### Passwörter

Aktuelle muss man eigentlich überall, wo man sich Anmelden möchte, ein Passwort erstellen und dann eingeben. Dabei ist der durchschnittliche Bürger bei mehr als 90 Online Diensten angemeldet. Das kann schnell zu Problemen führen, den für alle online Dienste sich ein eigenes Passwort zu merken ist fast unmöglich. Aufgrund dessen haben sich in den letzten Jahren vermehrt Passwortmanager durchgesetzt. Doch leider benutzen viele Nutzer online auch einfach immer wieder das gleiche Passwort, ohne zu wissen, das sie die Sicherheit aller ihrer Konten drastisch reduzieren. Darüber hinaus sind Passwörter geteilte Geheimnis, das bedeute so viel wie um sich zu Authentifizieren wird ein Passwort immer wieder geteilt. Dabei ist es schwer, dieses Geheimnis auch wirklich auf dem Weg geheim zu halten. So kommen wir auch gleich zum nächsten Problem. Passwörter können leicht gestohlen werden. Phishing E-Mail sind grade im heutigen Zeitalter nichts Besonderes mehr, eine Studie hat ergeben, das 31 % aller Leute auf diese Links klicken und 17 % auch auf diesen falschen Seiten ihr Passwort eingeben. Das waren alles Nachteile für den Nutzer, doch auch für Entwickler sind Passwörter nicht ganz einfach. Passwörter dürfen auf keinen Fall als Klartext in einer Datenbank gespeichert werden, deshalb Hashen die meisten Onlineplattformen diese. Doch auch ein Hash kann grade bei einfach Passwörten leicht verglichen werden, weshalb empholen wird noch Salt beim Hashen hinzuzufügen. Doch auch dann muss immer noch drauf geachtet werden das man keine Passwörter in irgendwelche Logs schreibt. Zusammenfassend lässt sich über Passwörter sagen:

-   Schwer zu merken
-   Unsichere Wiederverwendung
-   Geteiltes Geheimnis
-   Leicht gestolen
-   Schwer sicher zu speichern

## Web Authentication API

### FIDO

Das Web Authentication API wurde als Konzept der FIDO (Fast Identity Online) Gruppe entwickelt. Neben diesem hat die FIDO Gruppe ebenfalls das CTAP (Client to Authenticator Protocol), welches für die Kommunikation zwischen Authenticatoren und Plattformen genutzt wird entwickelt. Das Web Authentication API, dieses wurde 2017 zusammen mit dem W3C entwickelt und vorgestellt.

### Vorteile & Nutzung

### Technische Grundlagen

### Das API

```bash
npm install nuxt
```
