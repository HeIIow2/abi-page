# Geschwindigkeit einer Schwingung

Die Geschwindigkeit einer Schwingung, bzw. wie schnell eine Schwingung schwingt, kann man mit 3 Werten beschreiben:

- [Geschwindigkeit einer Schwingung](#geschwindigkeit-einer-schwingung)
  - [Frequenz](#frequenz)
  - [Schwingungsdauer](#schwingungsdauer)
  - [Winkelfrequenz](#winkelfrequenz)
- [Elongation](#elongation)
- [Federoszillator](#federoszillator)
  - [Federkonstante](#federkonstante)

## Frequenz

Die Frequenz beschreibt, die Anzahl an Schwingungen pro Sekunde.

$$[f] = s^{-1}$$

## Schwingungsdauer

Die Schwingungsdauer beschreibt die Dauer einer Schwingung.  
Somit ist dies der Kehrwehrt der [Frequenz](#frequenz).

$$T = \frac{1}{f} \qquad [T] = s$$

## Winkelfrequenz

Die Winkelfrequenz gibt den [überstrichenen Phasenwinkel der Schwingung pro Zeitspanne an](https://de.wikipedia.org/wiki/Kreisfrequenz). Also die Frequenz für den Phasenwinkel.

$$\omega = 2\pi f = \frac{2\pi}{T}\qquad [\omega] = \frac{1}{s}$$

_Obwohl die Einheit eigenlich die gleiche ist wie die der Frequenz, wird diese nicht als Hertz bezeichnet._

# Elongation

Zuerst müssen Grundbezeichnungen festgelegt werden:

- $[s] = 1m$ Auslenkung der Schwingung
- $[\hat{s}] = 1m$ Die maximale Auslenkung bzw. die **Amplitude**

Abhängig von der Zeit gelten folgende Formeln für Auslenkung, Geschwindigkeit und Beschleunigung über Zeit.

$$s(t) = \hat{s} \cdot \sin (\omega \cdot t)$$

$$v(t) = s'(t) = -\hat{v} \cos (\omega \cdot t)$$

$$a(t) = s''(t) = -\hat{a} \cdot \sin (\omega \cdot t)$$

Wen man die maximale Auslenkung $\hat{s}$ hat, kann man sowohl die maximale Geschwindigkeit $\hat{v}$, als auch die maximale Beschleunigung $\hat{a}$.

$$\hat{v} = \hat{s} \cdot \omega$$

$$\hat{a} = \hat{v} \cdot \omega = \hat{s} \cdot \omega^2$$

# Federoszillator

## Federkonstante

Die Federkonstante $D$ beschreibt die **Härte der Feder**. Diese kann bestimmt werden, wenn man die Feder mit der Kraft $F$ um die Länge $\Delta L$ auslenkt. Dann gilt:

$$D = \frac{F}{\Delta L} \qquad [D] = 1 \frac{N}{m}$$

Mit der Federkonstante lässt sich auch die [Winkelfrequenz](#winkelfrequenz) $\omega$ berechnen:

$$\omega = \sqrt{\frac{D}{m}}$$

 - $[m] = 1kg$ Masse des Objektes and der Feder.
