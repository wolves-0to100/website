---
title: WebAuthn - einfach sicher?
description: Eine Einleitung in das Thema Web Authentication und warum es eine bessere Alternative für die Sicherung unserer sensiblen Informationen im Internet ist.
author: Marcel Pfeifer
img: webAuthn.jpg
tags: tech
readingTime: 4min
---

## Einleitung

Das Web Authenticaiton API oder auch kurz WebAuthn ist eine neue Art der Authentifizierung von Nutzern. Um zu verstehen warum dieses API sinnvoll ist, werde ich in diesem Artikel zuerst auf die aktuelle Situation in diesem Bereich eingehen. Danach folgt ein Überblick zur Nutzung und ihre Vorteile. Abschließend stelle ich noch das Browser API vor und gebe einen kurzen Einblick in die Backendintegration.

### Passwörter

Aktuell muss man eigentlich überall, wo man sich anmelden möchte, ein Passwort erstellen und dann eingeben. Dabei ist der durchschnittliche Bürger bei mehr als 90 Online Diensten angemeldet. Das kann schnell zu Problemen führen, denn sich für alle online Dienste ein eigenes Passwort zu merken ist fast unmöglich. Aufgrund dessen haben sich in den letzten Jahren vermehrt Passwortmanager durchgesetzt. Doch leider benutzen viele Nutzer online auch einfach immer wieder das gleiche Passwort, ohne zu wissen, dass sie die Sicherheit aller ihrer Konten drastisch reduzieren. Darüber hinaus sind Passwörter geteilte Geheimnisse. Dies bedeutet, um sich zu authentifizieren, wird ein Passwort immer wieder geteilt. Dabei ist es schwer, dieses Geheimnis auch wirklich auf dem Weg geheim zu halten. So kommen wir auch gleich zum nächsten Problem. Passwörter können leicht gestohlen werden. Phishing E-Mails sind gerade im heutigen Zeitalter nichts Besonderes mehr. Eine Studie hat ergeben, dass 31 % aller Personen auf diese Links klicken und 17 % auch auf diesen falschen Seiten ihr Passwort eingeben. Die zuvor gennanten Aspekte sind Nachteile für den Nutzer, doch auch für Entwickler sind Passwörter nicht ganz einfach. Passwörter dürfen auf keinen Fall als Klartext in einer Datenbank gespeichert werden. Deshalb hashen diese die meisten Onlineplattformen. Doch auch ein Hash kann gerade bei einfachen Passwörten leicht verglichen werden, weshalb empholen wird, noch Salt beim Hashen hinzuzufügen. Doch auch dann muss immer noch darauf geachtet werden, dass keine Passwörter in irgendwelche Logs geschrieben werden. Zusammenfassend lässt sich über Passwörter sagen:

1.  Schwer zu merken
2.  Unsichere Wiederverwendung
3.  Geteiltes Geheimnis
4.  Leicht gestolen
5.  Schwer, sicher zu speichern

## Web Authentication API

### FIDO

Das Web Authentication API wurde als Konzept der FIDO (Fast Identity Online) Allianz entwickelt. Neben diesem hat die FIDO Allianz ebenfalls das CTAP (Client to Authenticator Protocol) entwickelt, welches für die Kommunikation zwischen Authenticatoren und Plattformen genutzt wird. Das Web Authentication API wurde 2017 zusammen mit dem W3C entwickelt und vorgestellt.
Die FIDO Allianz hat viele namenhafte Mitglieder, wie zum Beispiel: Amazon, Apple, Facebook, Google, LastPass und Paypal.

### Nutzung

Das WebAuthentication API kann für folgende Dinge genutzt werden:

-   Passwortlose Authentifizierung
-   Zwei Faktor Authentifizierung
-   Multifaktor Authentifizierung

Und dabei können folgende Authenticator genutzt werden:

-   Sicherheitsschlüssel (USB, NFC, Bluetooth)
-   Gesichtserkennung
-   Fingerabdruck
-   Spracherkennung

### Vorteile

Seperate Hardware (Authenticator) ist für die Authentifizierung verantwortlich.

Der Authenticator ist für das Signieren der Daten verantwortlich. Somit kann ein Keypaar nur auf einer Seite benutzt werden und Daten werden auch nur für diese Seite signiert.

Authenticator können verifiziert werden. Augrund dessen kann sicher gestellt werden, dass die Signatur von einem vertraunten Authenticator kommt.

### Technische Grundlagen

Die Authentifizierung basiert auf dem Prinzip der Public-Key Cryptography. Das heißt ein Authenticator generiert ein Public- und einen Privatkey. Der Publickey wird an den Server gesschickt. Ohne den Privatkey ist der Publickey jedoch nutzlos. Somit ist es nicht schlimm, sollte jemand versuchen, diesen zu klauen.

### Das API

Das API, welches vom Browser bereit gestellt wird, ist verhältnismäßig einfach. Es gibt eine Methode zum Anlegen eines Keypaares und eine Methode um sich Daten von einem bestehenden Keypaar signieren zu lassen.

#### Anmelden

```js
const credential = await navigator.credentials.create({
	publicKey: publicKeyCredentialCreationOptions,
})
```

```js
const publicKeyCredentialCreationOptions = {
	challenge: Uint8Array.from(randomStringFromServer, (c) => c.charCodeAt(0)),
	rp: {
		name: 'Wolves Software',
		id: 'wolves.ink',
	},
	user: {
		id: Uint8Array.from('UZSL85T9AFC', (c) => c.charCodeAt(0)),
		name: 'webauthn@wolves.ink',
		displayName: 'Marcel',
	},
	pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
	authenticatorSelection: {
		authenticatorAttachment: 'cross-platform',
	},
	timeout: 60000,
	attestation: 'direct',
}
```

#### Einloggen

```js
const credential = await navigator.credentials.get({
	publicKey: publicKeyCredentialRequestOptions,
})
```

```js
const publicKeyCredentialRequestOptions = {
	challenge: Uint8Array.from(randomStringFromServer, (c) => c.charCodeAt(0)),
	allowCredentials: [
		{
			id: Uint8Array.from(credentialId, (c) => c.charCodeAt(0)),
			type: 'public-key',
			transports: ['usb', 'ble', 'nfc'],
		},
	],
	timeout: 60000,
}

const assertion = await navigator.credentials.get({
	publicKey: publicKeyCredentialRequestOptions,
})
```

### Probleme

Frontendseitig ist die Bedienung somit relativ einfach und selbsterklärend. Backendeseitig sieht das Ganze leider etwas anders aus. Das W3C hat hier einen [19. Schritte Guide](https://www.w3.org/TR/webauthn/#registering-a-new-credential) entwickelt, um sicherzustellen, dass die Registrierung valide ist. Für das Einloggen gibt es einen [18. Schritte Guide](https://www.w3.org/TR/webauthn/#verifying-assertion).

Das Ganze würde durch eine Library bedeutend vereinfacht werden. Für NodeJS gibt es jedoch leider keine fertige Libary (Stand Ende 2020). Für eine Demo habe ich auch ein kleines eigenes Projekt aufgesetzt: [WebAuthn](https://gitlab.com/marcel.pfeifer/webauthn)

Für andere Sprachen gibt es hier ein paar Packages:

-   [GO](https://github.com/duo-labs/webauthn)
-   [Python](https://github.com/duo-labs/py_webauthn)
-   [Java](https://github.com/Yubico/java-webauthn-server)
-   [PHP](https://github.com/lbuchs/WebAuthn)

### Nützliche Tools

Für Entwickler bietet Chrome ab der Version 87 die Möglichkeit einen Authenticator zu simulieren. So kann man schnell und einfach die Implementierung testen. Zu finden ist diese in den DevTools:

Drei Punkte in der oberen Ecke -> More Tools -> WebAuthn

## Fazit

Ich denke, dass das Web Authentication API ein Schritt in die richtige Richtung ist und wir in den nächsten Jahren immer mehr Dienstleister sehen werden, welche diesen Service in ihre Anwendungen einbauen. Zusätzlich werden immer mehr Geräte als Authenticator dienen können. Jedoch wird es noch eine Weile dauern bis sich dieser Service als Standart durchsetzt. Für den durchschnittlichen Nutzer bieten Passwörter ein Gefühl der Sicherheit und die Umgewöhnung wird ihre Zeit in Anspruch nehmen.

Aus Sicherheitsgründen ist dieser Schritt schon lange überfällig und auch für die Nutzer bietet er einige Vorteile.

### Mehr erfahren

-   [WebAuthn Guide](https://webauthn.guide)
-   [W3C WebAuthn](https://w3c.github.io/webauthn/)
