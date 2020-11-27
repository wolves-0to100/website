---
title: WebAuthn
author: Marcel Pfeifer
img: webAuthn.jpg
tags: WebAuthn, Authentifizierung, API
---

## Einleitung

Das Web Authenticaiton API oder auch kurz WebAuthn ist eine neue Art der Authentifizierung von Nutzer. Um zu verstehen warum dieses API sinnvoll ist werde ich in diesem Artikel zuerst auf die aktuelle Situation in diesem Bereich eingehen. Danach folgt ein Überblick zum Web Authenication API und abschließend stelle ich noch das API vor.

### Passwörter

Aktuelle muss man eigentlich überall, wo man sich Anmelden möchte, ein Passwort erstellen und dann eingeben. Dabei ist der durchschnittliche Bürger bei mehr als 90 Online Diensten angemeldet. Das kann schnell zu Problemen führen, den für alle online Dienste sich ein eigenes Passwort zu merken ist fast unmöglich. Aufgrund dessen haben sich in den letzten Jahren vermehrt Passwortmanager durchgesetzt. Doch leider benutzen viele Nutzer online auch einfach immer wieder das gleiche Passwort, ohne zu wissen, das sie die Sicherheit aller ihrer Konten drastisch reduzieren. Darüber hinaus sind Passwörter geteilte Geheimnis, das bedeute so viel wie um sich zu Authentifizieren wird ein Passwort immer wieder geteilt. Dabei ist es schwer, dieses Geheimnis auch wirklich auf dem Weg geheim zu halten. So kommen wir auch gleich zum nächsten Problem. Passwörter können leicht gestohlen werden. Phishing E-Mail sind grade im heutigen Zeitalter nichts Besonderes mehr, eine Studie hat ergeben, das 31 % aller Leute auf diese Links klicken und 17 % auch auf diesen falschen Seiten ihr Passwort eingeben. Das waren alles Nachteile für den Nutzer, doch auch für Entwickler sind Passwörter nicht ganz einfach. Passwörter dürfen auf keinen Fall als Klartext in einer Datenbank gespeichert werden, deshalb Hashen die meisten Onlineplattformen diese. Doch auch ein Hash kann grade bei einfach Passwörten leicht verglichen werden, weshalb empholen wird noch Salt beim Hashen hinzuzufügen. Doch auch dann muss immer noch drauf geachtet werden das man keine Passwörter in irgendwelche Logs schreibt. Zusammenfassend lässt sich über Passwörter sagen:

1.  Schwer zu merken
2.  Unsichere Wiederverwendung
3.  Geteiltes Geheimnis
4.  Leicht gestolen
5.  Schwer sicher zu speichern

## Web Authentication API

### FIDO

Das Web Authentication API wurde als Konzept der FIDO (Fast Identity Online) Allianz entwickelt. Neben diesem hat die FIDO Allianz ebenfalls das CTAP (Client to Authenticator Protocol), welches für die Kommunikation zwischen Authenticatoren und Plattformen genutzt wird entwickelt. Das Web Authentication API wurde 2017 zusammen mit dem W3C entwickelt und vorgestellt.
Die FIDO Allianz hat viele namenhaft Mitglieder, wie zum Beispiel: Amazon, Apple, Facebook, Google, LastPass und Paypal.

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

Der Authenticator ist für das signieren der Daten verantwortlich und somit kann ein Keypaar nur auf einer Seite benutzt werden und Daten werden auch nur für diese Seite signiert.

Authenticator können verifiziert werden und so kann sicher gestellt werden, das die Signatur von einem vertraunten Authenticator kommt.

<img src="/assets/Blog/webAuthn.jpg" >

### Technische Grundlagen

Die Authentifizierung basiert auf dem Prinzip der Public-Key Cryptography. Das heißt unser Authenticator generiert ein Public- und einen Privatkey. Den Publickey schicken wir an den Server. Ohne den Privatkey ist der Publickey jedoch nutzlos. Somit ist es nicht schlimm sollte jemand versuchen diesen zu klauen.

### Das API

Das API, welches vom Browser bereit gestellt wird, ist Verhältnismäßig einfach. Es gibt eine Methode zum Anlegen eine Key Paares und eine um sich Daten signieren zu lassen von einem bestehenden Key Paar.

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

## Mehr erfahren

-   [WebAuthn Guide](https://webauthn.guide)
-   [W3C WebAuthn](https://w3c.github.io/webauthn/)
