# Grundlagen und Begriffe

## Zufallsexperiment

Ein Zufallsexperiment ist etwas mit folgenden Eigenschaften:


 - Die Durchführung ist genau festgelegt
 - Die möglichen Ergebnisse sind vor der Durchführung bekannt
 - Das Ergebnis kann nicht vorhergesagt werden

Es gibt auch [verschiedene Stufen](#mehrstufiges-zufallsexperiment).

## Ergebnismenge

Die Menge an unterschiedlichen Ergebnissen eines Zufall**sex**periment, nennt man **Ergebnissmenge** $|\Omega |$.

Bei dem Wurf eines Würfels sieht diese Bespielsweise so aus:

$$\Omega = \{1, 2, 3, 4, 5, 6\} \Rightarrow |\Omega | = 6$$

## Mehrstufiges Zufallsexperiment

Als Stufen kann man die Anzahl wie oft ein [Zufallsexperiment](#zufallsexperiment) durchgeführt wird bezeichnen.

Für die Anzahl der Stufen wird die Variable $n$ verwendet.

### Einstufiges Zufallsexperiment

Wenn $n = 1$ bei dem Werfen einer Münze ist die [Ereignissmenge](#ergebnissmenge) wie folgt:

$$K = Kopf \qquad Z = Zahl$$

$$\Omega = \{K, Z\}$$

### Mehrstufiges Zufallsexperiment

Wenn $n=3$, bei gleichem Experiment, sieht die Ereignissmenge wie folgt aus:

$$\Omega = \{K, Z\} \times \{K, Z\} \times \{K, Z\} =$$
$$\{K-K-K, Z-Z-Z, K-Z-Z, K-Z-K, Z-K-K, Z-K-Z, K-K-Z, Z-Z-K\}$$


## Ereignisse

Als Ereignis $A$ beseichnet man die Menge von Ergebnissen, eine Teilmenge der [Ereignissmenge](#ergebnissmenge) eines Zufallsexperiment. $\Rightarrow$ Ergebnis $A$ tritt ein wenn eines der Ergebnisse aus $A$ eintritt.

### Gegenereignis

Als Gegenereignis bezeichnet man die Menge aller Ereignisse, die nicht in dem Ereignismenge $A$ drinnen ist.

$$\bar{A} = \Omega \backslash A $$
$$ P(\bar{A}) = 1 - P(A)$$

# Wahrscheinlichkeit

## relative/absolute Häufigkeit

$$relative Haeufigkeit = \frac{absolute Haeufigkeit}{Anzahl der Versuche}$$
$$h_n(A) = \frac{H_n(A)}{n}$$

## Laplace Experiment

Bei dem Laplace Experiment treten alle Möglichen Ergebnisse mit gleicher Wahrscheinlichkeit ein.

Es gibt $| \Omega |$ viele Ergebnisse und die Summe aller Warscheinlichkeiten is  $1$.

$$P(i) = \frac{1}{| \Omega |}$$

Die Wahrscheinlichkeit für ein Ereignis berechnet sich wie folgt:

$$P(E) =  \frac{|E|}{| \Omega |}$$

### Beispiele

Beispiele für ein solches Zufallsexperiment sind:
 - Werfen einer Münze
 - Würfeln

# Logik

Ausdruck | Mengenlehre | Stochastik
---|---|---
$A \cap B$ | Die Schnittmenge von $A$ und $B$ | $A$ und $B$ treten gleichzeitig ein
$A \cup B$ | Die Vereinigte Menge von $A$ und $B$ *(alle Elemente aus $A$ und $B$ in einer Menge)* | Mindestens eins der Ereignisse aus $A$ und $B$ tritt ein.
$\bar{E}$ | Die Menge aller Ereignisse die nicht in $E$ sind | siehe [Gegenereignis](#gegenereignis)

Will man die Warscheinlichkeit des Ereignis $E$ haben so schreibt man:

$$P(E)$$

## Additionssatz

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

# Bäume und Pfade

## Pfad

Als Pfad bezeichnet man einen Ast eines Baumdiagramms.  
Eine Abfolge von Ereignissen in festgelegter Reihenfolge

## Pfadmultiplikationsregel

Um die Wahrscheinlichkeit eines bestimmten Pfades zu bekommen, multipliziert man jedes Ereignis des Pfades miteinander

## Pfadaditionsregel

Die Wahrscheinlichkeit mehrerer Pfade können addiert werden. Siehe [Pfadmultiplikation](#pfadmultiplikationsregel)

# Erwartungswert

Der Erwartungswert ist der Wert, der am Ende bei sehr vielen Versuchen eines Zufallsexperiment herauskommt.

Nimmt eine Zufallsgröße $X$  nur endlich viele Werte $x_0, x_1, ..., x_n$ an, so gilt

$$E X = \mu = \sum^n_{k = 0} x_k \cdot P(X=x_k)$$

## Beispiel

> Augensumme beim Würfeln mit 2 Würfeln

$x_k$ | $P(X=x_k)$
---|---
$2$ | $\frac{1}{36}$
$3$ | $\frac{2}{36}$
$4$ | $\frac{3}{36}$
$5$ | $\frac{4}{36}$
$6$ | $\frac{5}{36}$
$7$ | $\frac{6}{36}$
$8$ | $\frac{5}{36}$
$9$ | $\frac{4}{36}$
$11$ | $\frac{2}{36}$
$12$ | $\frac{1}{36}$

```python
erwahrtungswert = 0

for wahrscheinlichkeit, ereignis_wert in values:
    erwahrtungswert += wahrscheinlichkeit * eregnis_wert
```

# Varianz und Standardabweichung

Varianz $Var(x)$ und Standardabweichung $\sigma$ sind Maße für die Abweichung vom Erwartungswert. Je kleiner $Var(X)$ bzw. $\sigma$, desto weniger weit entfernt vom Erwartungswert sind die $x_k$ (Werte von $X$).

$X$ Zufallsgröße, die nur $x_0, x_1, ..., x_n$ als Wert haben kann

### Varianz

$$Var(X) = \sum^n_{k=0} = (x_k - EX)^2 \cdot P(X=x_k)$$

### Standardabweichung

$$\sigma = \sqrt{Var(X)}$$

# Binomialverteilung

[hier ein Video wie man das mit unserem Taschenrechner macht](https://yt.artemislena.eu/watch?v=50md1ECU-_s)


<iframe width="560" height="315" title="YouTube video player" src='https://yt.artemislena.eu/embed/50md1ECU-_s' frameborder='0' allowfullscreen></iframe>


Die Binomialverteilung ist eine Wahrscheinlichkeitsverteilung, die beschreibt, wie wahrscheinlich es ist, dass bei einer bestimmten Anzahl von unabhängigen, wiederholten Experimenten mit genau zwei möglichen Ergebnissen *(z.B. Erfolg/Misserfolg, Kopf/Zahl)* ein bestimmter Erfolg eintritt.

Um die Wahrscheinlichkeit zu berechnen, dass ein bestimmter Erfolg in einer gegebenen Anzahl von Versuchen eintritt, benötigt man drei Parameter:

 - Die Anzahl der Versuche ($n$)
 - Die Wahrscheinlichkeit für einen Erfolg bei jedem Versuch ($p$)
 - Die Anzahl der Erfolge, die man erwartet ($k$)
  
Die Wahrscheinlichkeit, dass genau $k$ Erfolge in $n$ Versuchen auftreten, kann mit der folgenden Formel berechnet werden:

$$B_{n, p}(k) = P(k = n) = \binom{n}{k} \cdot p^k \cdot (1-p)^{n-k}$$

> Kann man mit dem Taschenrechner berrechnen:

```
2nd + data
right (distr)
4/5 (Binomial pdf-cdf/)
```

## Binomialkoeffizient

Der Binomialkoeffizient $\binom{n}{k}$ die Anzahl der möglichen Kombinationen von $k$ Erfolgen aus $n$ Versuchen darstellt. Man berechnet ihn wie folgt:

$$\binom{n}{k} = \frac{n!}{k! \cdot (n - k)!}$$

## Kumulierte Binomialverteilung

Die kumulierte Binomialverteilung wird verwendet, um die Wahrscheinlichkeiten von mehreren möglichen Ergebnissen in einer Binomialverteilung zu berechnen, anstatt nur die Wahrscheinlichkeit eines einzelnen Ereignisses. Dies wird durch die Addition der Wahrscheinlichkeiten aller relevanten Erfolgsfälle.

Es gibt zwei Formeln für die kumulierte Binomialverteilung, je nachdem, ob es sich um eine kumulierte Wahrscheinlichkeit unterhalb oder oberhalb des bestimmten Werts handelt:

 - Kumulierte Wahrscheinlichkeit unterhalb des bestimmten Werts $k$:
$$P(k \leq n) = \sum_{i=0}^{k} B_{n, p}(i) = \sum_{i=0}^{k} \binom{n}{i} \cdot p^i \cdot (1-p)^{n-i}$$

 - Kumulierte Wahrscheinlichkeit oberhalb des bestimmten Werts $k$:
$$P(k \geq n) = \sum_{i=n}^{k} B_{n, p}(i) = \sum_{i=n}^{k} \binom{n}{i} \cdot p^i \cdot (1-p)^{n-i}$$

# Normalverteilung

Die Normalverteilung ist eine kontinuierliche Wahrscheinlichkeitsverteilung. Sie zeichnet sich durch eine glockenförmige Kurve aus, die durch zwei Parameter beschrieben wird:

 - Der **Erwartungswert** ($\mu$) gibt den Mittelwert der Verteilung an.
 - Die **Standardabweichung** ($\sigma$) gibt an, wie stark die Werte um den Erwartungswert streuen.
Die Wahrscheinlichkeitsdichte-Funktion (`PDF`) der Normalverteilung ist gegeben durch:

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} \cdot e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

## Kumulierte Normalverteilung

Die Wahrscheinlichkeit, dass eine Zufallsvariable $X$ in einem bestimmten Intervall $[a, b]$ liegt, kann durch Integration der `PDF` berechnet werden:

$$P(a \leq X \leq b) = \int_{a}^{b} f(x) dx$$

Die Standardnormalverteilung ist eine spezielle Normalverteilung mit einem Erwartungswert von 0 und einer Standardabweichung von 1. Diese Verteilung wird oft verwendet, um Normalverteilungen zu standardisieren.

Die Standardisierung einer Normalverteilung wird durch folgende Formel erreicht:

$$Z = \frac{X - \mu}{\sigma}$$

Dabei gibt $Z$ die Anzahl der Standardabweichungen an, um die $X$ von $\mu$ entfernt ist.

Die kumulierte Verteilungsfunktion (`CDF`) der Normalverteilung gibt die Wahrscheinlichkeit an, dass eine Zufallsvariable $X$ kleiner oder gleich einem bestimmten Wert $x$ ist und wird durch folgende Formel berechnet:

$$F(x) = P(X \leq x) = \int_{-\infty}^{x} f(t) dt$$

Die inverse kumulierte Verteilungsfunktion (Inverse `CDF` oder Quantilfunktion) gibt den Wert an, bei dem die Verteilungsfunktion $F(x)$ einen bestimmten Wert $p$ annimmt. Diese Funktion wird oft verwendet, um kritische Werte für Hypothesentests zu berechnen und wird durch den Buchstaben $z_\alpha$ oder $t_{n-1, \alpha}$ bezeichnet, je nachdem, ob es sich um eine Normalverteilung oder eine t-Verteilung handelt.

In der Standardnormalverteilung wird die Inverse `CDF` als Standardnormalverteilungstabelle dargestellt, die die Wahrscheinlichkeiten für bestimmte Bereich zwischen $-\infty$ und $z_\alpha$ listet.
