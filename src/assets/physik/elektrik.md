# Elektrische Felder

Elektrische Felder können verschieden stark sein. Dies wird mit der Elektrischen Feldstärke $[E] = 1 \frac{V}{m}$ beschrieben, die sich wie folgt errechnet:

$$E = \frac{U}{d}$$

> *Um diese Formel zu verstehen bzw lernen hilft es sich die Einheit anzuschauen.*

 - $[d] = 1m$ der Absand beider Kondensatorplatten.
 - $[U] = 1V$ die anliegende Spannung.

## Elektrische Kraft

Befindet sich ein geladenes Teilchen in einem E-Feld der stärke $E$, so wirkt die Elektrische Kraft auf das Teilchen.

$$F_{el} = q \cdot E \qquad E = \frac{q}{F_{el}}$$

 - $[q] = 1C$ die Ladung des Teilchens


# Magnetische Felder

Eine Spule, durch die Strom fliest, erzeugt ein B-Feld.

$$B = \mu_r \cdot \mu_0 \cdot \frac{I \cdot n}{l}$$

 - $[B] = 1T$ Die Stärke des magnetfeldes
 - $[I] = 1A$ Die Stromstärke die durch den Leiter fliest
 - $[l] = 1m$ Die Länge der Spule
 - $n$ Die Anzahl an Windungen
 - $\mu_0$ permibilitätskonstante
 - $\mu_r$ materialabhängig. im Vakuum 1.

# Beschleunigungsspannung

Beschleunigt man ein Elektron mit einer Beschleunigungsspannung, kann man den Energieerhaltungssatz verwenden und die kinetische und elektrische Energie gleichsetzten[^1](#elektrische-kraft):

$$E_{el} = q \cdot U \qquad E_{kin} = \frac{1}{2} mv^2\\q \cdot U = \frac{1}{2} mv^2$$

Wenn man nach $v$ umstellt bekommt man folgende Formel:

$$v = \sqrt{2\cdot e \cdot \frac{U_B}{m}}$$

 - $e$ die Ladung eines Elektron  
 - $m$ die Masse eines Elektrons
 - $U_B$ Beschleunigungsspannung

# Lorentzkraft

Bewegt sich ein geladener Körper Orthogonal zu einem B-Feld, so wirkt auf ihn die Lorentzkraft.

Berechnen kann man die Lorentzkraft wie folgt:

$$F_{Lorentz} = q \cdot v \cdot B$$

 - $[q] = 1C$ Die Ladung des Teilchens
 - $[v] = 1 \frac{m}{s}$ Die Geschwindigkeit des Teilchens
 - $[B] = 1T$ Die Stärke des B-Feldes

## Linke Hand Regel

Die Richtung der Lorentzkraft lässt sich mit der Linken Hand Regel bestimmen. 

 - **Daumen**: Gibt die Richtung negativer Ladungsträger an.
 - **Zeigefinger**: Gibt die Richtung der magnetischen Feldlinien an.
 - **Mittelfinger**: Gibt die Richtung der Lorentzkraft an.

Die Richtung der Magnetischen Feldlinien sind wiefolgt

Steht für | Symbol auf dem Papier
---|---
in das Feld hinein. | ![in das Feld hinein](assets/magnet_in.svg)
aus dem Feld hinaus. | ![aus dem Feld hinaus](assets/magnet_out.svg)

# Leiterrahmen

Läuft Strom durch einen Leiterrahmen, so erzeugt dieser ein B-Feld.

## Magnetischer Fluss

Der magnetische Fluss in einem Leiterrahmen $\Phi$ kann man sich als die Anzahl der magnetischen Feldlinien in dem Leiterrahmen vorstellen. Folglich kann man diesen einfach berechnen, indem man die Fläche mit dem B-Feld Multipliziert.

$$\Phi = A \cdot B$$

## Induktionspannung

Ändert sich der [Magnetische Fluss](#magnetischer-fluss) des durchsetzten Leiterrahmens, so wird eine Spannung $U_{ind}$ induziert.

$$U_{ind} = -n \cdot \dot{\Phi}= -n \cdot B \cdot \dot{A}$$

- $n$ Windungszahl

## Induzierte Lorentzkraft

Wird der Leiterrahmen mit einem Widerstand $R$ kurzgeschlossen, so fließt ein Induktionsstrom von $I = \frac{U}{R}$.  
Mit diesem Induktionsstrom lässt sich dann die Induzierte Lorentzkraft berechnen. 

$$F_{Lorentz} = I \cdot B \cdot l \cdot n$$

- $[l] = 1m$ Länge des relevanten Leiters.

# Elektromagnetischer Schwingkreis

## Kondensator

[für Elektrische Felder, siehe "Elektrische Felder"](#elektrische-felder)

Die Kapazität $C$ eines Plattenkondensators, wird in Farad $F$ gemessen, und kann wie folgt berechnet werden.

$$C = \varepsilon \cdot \frac{A}{d}$$

 - $[C] = 1F$ Kapazität des Kondensators
 - $\varepsilon$ Dielektrizitätskonstante des Isolationsmaterials (eine konstante)
 - $[A] = 1 m^2$ Fläche der Kondensatorplatten
 - $[d] = 1 m$ Abstand zwischen beiden Platten 

### Ladung eines Kondensators

Die Ladung eines Kondensators $Q$ ist Proportional zu der Spannung $U$ und Kapazität $C$.

$$Q = C \cdot U$$

### Energie in einem Kondensator

Die elektrische Energie $E_{el}$, die in einem Kondensator gespeichert ist, lässt sich wie folgt errechnen.

$$E_{el} = \frac{1}{2} \cdot C \cdot U^2$$

Dabei sieht die Formel sehr ähnlich, wie die für die Kinetische Energie $E_{kin}$ aus.

 - $[U] = 1V$ die Spannung an dem Kondensator

## Spule

Folgende Werte gelten in den Folgenden Formeln:

 - $\mu$ magnetische Permeabilität des Kernmaterials (eine konstante)
 - $n$ die Anzahl der Windungen

### B-Feld

Das B-Feld **innerhalb** einer Zylinderförmigen Spule kann wie folgt berrechnet werden:

$$B = \mu \cdot \frac{n \cdot I}{2r}$$

 - $[r] = 1m$ Radius der Spule

### Induktivität

Die Induktivität einer Spule $L$ wird in Henry $H$ beschrieben.

$$L = \frac{\mu \cdot n^2 \cdot A}{l}$$

 - $[L] = 1H$ Induktivität der Spule

 - $[A] = 1 m^2$ Fläche des Querschnitts der Spule
 - $[l] = 1 m$ die Länge der Spule

### Energie in einer Spule

Für die Energie $E_{sp}$, die in einer Spule gespeichert ist, gilt.

$$E_{sp} = \frac{1}{2} \cdot L \cdot I^2$$

Wie auch bei dem [Kondensator](#energie-in-einem-kondensator) zeigen sich hier deutliche parallelen zu der Formel für die kinetische Energie.

 - $[I] = 1A$ Stromstärke

## Resonanzfrequenz

Die Schwingungsdauer $[T] = 1s$ kann man in einem solchen Schwingkreis einfach berechnen. *Die Frequenz auch, da $f = \frac{1}{T}$.*

$$T = 2 \cdot \pi \cdot \sqrt{L \cdot C}$$

Wie man die [Kapatzität $C$](#kondensator) und die [Induktivität $L$](#spule) errechnet, kann man vorher finden.
