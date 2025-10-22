# KI-Prompt für StreamSync Ads (Werbeplattform für Livestreams)

## Ziel
Erstelle eine Plattform, die es Livestreamern (Twitch, YouTube, TikTok) ermöglicht, automatisch dynamische Werbung in ihren Streams zu integrieren. Werbetreibende können ihre Kampagnen erstellen und in Echtzeit gezielt auf Streams ausspielen, basierend auf Zuschauerverhalten, Stream-Inhalten und Streaming-Zeiten.

## Funktionen der Plattform

### Streamer‑Login und Account‑Management
- Registrierung und Anmeldung für Streamer
- Möglichkeit, Streams zu verknüpfen (z. B. über API, OAuth)
- Einfaches Dashboard zur Verwaltung von Kampagnen und Werbepartnern

### Erstellung von Overlay‑Links für Werbeeinblendungen
- Automatische Generierung von Browser‑Source‑Links, die direkt in OBS integriert werden können
- Anpassbare Werbeformate: Banner, Videos, Call‑to‑Actions
- Steuerung der Anzeigezeit (z. B. 10‑15 Sekunden)
- Einbindung von QR‑Codes oder Text‑Links für zusätzliche Tracking‑Optionen

### Kampagnenverwaltung für Werbetreibende
- Dashboard zur Erstellung und Verwaltung von Kampagnen
- Optionen für einfache Kampagnengenerierung: Zielgruppe definieren, Banner hochladen, Budget festlegen
- Echtzeit‑Analytics für Werbetreibende: Klicks, Impressionen, Engagement
- Automatische Zuordnung von Kampagnen zu Streamern basierend auf Zielgruppen (z. B. Gaming, Tech, Lifestyle)

### Analytics und Performance‑Tracking
- Tracking von Anzeigenleistung (Impressionen, Klicks, Engagements)
- Echtzeit‑Berichte für Streamer und Werbetreibende
- Integration von Google Analytics und UTM‑Parametern
- Anti‑Fraud‑Systeme (z. B. zum Ausschließen von Bots und Fake‑Views)

### Monetarisierung für Streamer
- Auszahlungssystem für Streamer (70 % der Einnahmen aus Kampagnen)
- Möglichkeit zur Erstellung von Pro‑Accounts (Monetarisierung, Priorisierung, erweiterte Funktionen)
- Integrationsmöglichkeit für bestehende Streaming‑Plattformen wie Twitch, YouTube, TikTok
- Empfehlungsprogramm für Streamer, die neue Werbepartner gewinnen

### Preisgestaltung und Abrechnung
- vCPM (viewable CPM) als Basis: 6‑10 €/1.000 viewable Minuten
- Mindestbudget pro Kampagne: 500‑1.000 €
- Transparentes Provisionsmodell: 25‑35 % Plattformgebühr, 70 % an Creator
- Optionale Zusatzpakete für Marken: Targeting, Whitelisting, Frequency‑Capping (ab 399 €/Monat)

### Brand‑Safety und Zielgruppenausrichtung
- Filter für Werbeinhalte: Altersfreigabe, Themen (Gaming, Tech, Lifestyle)
- Möglichkeit zur Durchführung von Whitelisting/Blacklisting für Creators
- Tools für das Erstellen und Verwalten von Zielgruppen nach demografischen Merkmalen

## Erforderliche Technologien und Tools

### Frontend (User Interface)
- React.js für die Interaktivität des Dashboards
- Tailwind CSS für die Gestaltung der UI
- Integration von OBS als Quelle für die Browser‑Overlays

### Backend
- Node.js für die serverseitige Logik
- MongoDB oder PostgreSQL für die Speicherung der Nutzer‑ und Kampagnendaten
- Firebase für einfache Echtzeit‑Datenverarbeitung und Authentifizierung
- RESTful APIs für die Integration mit Twitch, YouTube und TikTok

### Tracking und Analytics
- Google Analytics für die Performance‑Überwachung
- Verwendung von UTM‑Parametern zur Verknüpfung von Kampagnen und Traffic
- Eigenes Reporting‑System zur Erfassung von Klicks, Views und Engagement

### Monetarisierung
- Stripe oder PayPal für die Zahlungen an Streamer und Plattformbetreiber

## Schritte zur Entwicklung

### Marktforschung und Validierung
- Führe Interviews mit 10‑20 Micro‑Streamern und Werbepartnern, um die Bedürfnisse und den Markt besser zu verstehen.

### MVP‑Entwicklung (Minimum Viable Product)
Baue die grundlegende Infrastruktur für die Plattform:
- Einfacher Streamer‑Login
- Erstellen von Overlay‑Links
- Kampagnenverwaltung für Werbepartner
- Analytics und Monetarisierung (Basic Reporting)

### Testphase mit 10‑20 Streamern und ersten Werbepartnern
- Akquiriere die ersten Test‑Streamer durch Direktansprache auf Twitch und Discord
- Teste Werbekampagnen mit kleinen Marken aus der Gaming‑ oder Lifestyle‑Branche

### Feedback und Iteration
- Sammle Feedback von Streamern und Werbepartnern und optimiere die Benutzeroberfläche sowie die Funktionalitäten
- Verbessere das Kampagnen‑Management und Reporting

### Launch und Wachstum
- Skaliere mit einer erweiterten Marketingkampagne und einer breiten Streuung von Werbetreibenden und Streamern

## Ziele und Metriken für den Launch
- Testphase: Mindestens 10‑20 aktive Streamer, 3‑5 Werbepartner
- Monetarisierung: Mindestens 1.000 € monatlicher Umsatz bei Beta‑Launch
- Feedback: Positive Rückmeldungen zu Usability und Effektivität der Werbeeinblendungen
