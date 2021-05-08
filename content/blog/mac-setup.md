---
title: Mac Setup
description: In diesem Artikel fasse ich kurz meine Schritte zusammen, welche ich beim Einrichten meines Macs beachte.
author: Marcel Pfeifer
img: macSetup.jpg
tags: tech
createdAt: 2021-05-07
updatedAt: 2021-05-08
---

Ich benutzt meinen Mac primär zum Entwickeln von Web Anwendungen und Software Lösungen. Dieser Artikel soll es mir erleichtern meinen Mac für diese Zwecke neu aufzusetzen. Vielleicht kann er dir ja auch weiterhelfen.

## Before
- Über ssh keys nachdenken
- Fonts speichern
- iTerm Settings speichern
- Keystores speichern

## Setup

### Setup Homebrew

Wir installieren Homebrew um später Apps einfacher und besser zu installieren.

```bash
xcode-select --install

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Setup Node

Wir installieren `nvm` um zwischen verschiedene Node Versionen wechseln zu können.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh
```
### Setup Git

Wir personalisieren die globalen Git Einstellungen.

```bash
git config —global user.name “Marcel Pfeifer”
git config —global user.email “marcel@wolves.ink”
```

#### Global .gitignore

Create the file `~/.gitignore` as shown below

```bash
vim ~/.gitignore
```

```text
# Folder view configuration files
.DS_Store
Desktop.ini

# Thumbnail cache files
._*
Thumbs.db

# Files that might appear on external disks
.Spotlight-V100
.Trashes

# Compiled Python files
*.pyc

# Compiled C++ files
*.out

# Application specific files
venv
node_modules
.sass-cache
```
### Setup zsh appearance

Hier richte ich mir meine eignen Style der Konsole ein. Dafür füge ich folgenden Code zur .zshrc 

```bash
vim ~/.zshrc
```

```text
# Add space between lines
precmd() { print "" }

# Appearence
PS1="%T %C"$'\n'"▲ : ";clear;

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Android Dev

export ANDROID_HOME="$HOME/Library/Android/Sdk"
PATH=$PATH:$ANDROID_HOME/tools; PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Apple Settings

Die ich mein System auf Englisch einstelle sind die folgenden Punkte ebenfalls in Englisch.
#### Dock
* Automatically hide and show Dock
* Show indicators for open applications

#### Trackpad
* Tap to click -> ON

#### Keyboard
* Key Repeat -> Fast
* Delay Until Repeat -> Short

#### Security and Privacy
* Allow apps downloaded from App Store and identified developers
* Turn FileVault On (makes sure SSD is securely encrypted)
* Turn Firewall On (extra security measure)

#### Sharing
* Change computer name
* Make sure all file sharing is disabled

#### Users & Groups
* Add "Rectangle" to Login items

#### Terminal Commandes
```bash
# Show Library folder
chflags nohidden ~/Library

# Show path bar
defaults write com.apple.finder ShowPathbar -bool true

# Show status bar
defaults write com.apple.finder ShowStatusBar -bool true

# Prevent left and right swipe through history in Chrome
defaults write com.google.Chrome AppleEnableSwipeNavigateWithScrolls -bool false

# Add space to the dock
defaults write com.apple.dock persistent-apps -array-add '{tile-data={}; tile-type="spacer-tile";}'
killall Dock

# Fast Dock animation
defaults write com.apple.dock autohide-time-modifier -float 0.42;killall Dock

# Remove delay from showing dock
defaults write com.apple.dock autohide-delay -float 0; killall Dock
```

### Screenshots
Wir ändern den standart Ordner für screenshots
  - Neuen Ordner anlegen: `mkdir -p [user]/screenshots/`
  - Führe dann den folgenden Befehl aus:

```bash
defaults write com.apple.screencapture location [user]/screenshots/ && killall SystemUIServer
```

### App List

If possible use homebrew.

- LastPass
- PAW
- ForkLift
- Sensei
- Affinity Suite
- Chromium
- Chrome
- Firefox
- Discord
- Docker
- iTerm
- Linear
- Rectangle
- Sketch / Figma
- Slack
- Tor Browser
- xCode
- FinalCut
- iWork (sollten installiert sein)
- The Unarchiver
- Docker
- Visual Studio Code
- Vim

##### Optional Apps

- Minecraft
- WoT
- Spotify
- Opera
- Edge
- Mouseless
- Main Stage
- Logic
- Hopper Disassembler
- Draw.io
- JetBrains
- Spark

### Change App Settings

#### iTerm
* Import Settings

#### Chrome
* VueDev Tools

#### Visual Studio Code
* Install Nord Theme

## Create Bootable Volume

### Required
* Bootable Stick (<12GB)
* MacOS update

### Steps

* Convert Stick to GUID Partition Map with Mac OS Extended Journaled

```bash
sudo /Applications/Install\ macOS\ Beta.app/Contents/Resources/createinstallmedia --volume /Volumes/Untitled
```
