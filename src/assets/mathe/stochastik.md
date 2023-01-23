# Grundlagen und Begriffe

## Zufallsexperiment

Ein Zufallsexperiment ist etwas mit folgenden Eigenschaften:


 - Die Durchführung ist genau festgelegt
 - Die möglichen Ergebnisse sind vor der Durchführung bekannt
 - Das Ergebnis kann nicht vorhergesagt werden

Es gibt auch [verschiedene Stufen](#mehrstufiges-zufallsexperiment).

## Ergebnissmenge

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

# Wahrscheinlichkeit

## relative/absolute Häufigkeit

$$relative Haeufigkeit = \frac{absolute Haeufigkeit}{Anzahl der Versuche} \qquad h_n(A) = \frac{H_n(A)}{n}$$

## Laplace Experiment

# Bernoulli Kette der Länge n

Wir betrachten eine Situation, bei der der Ausgand eine konstante Warscheinlichkeit hat. Dieses Event wird $n$ mal gemacht, und kein Event wird von dem vorherigen beeinflusst.

Als Beispiel ziehe ich hier $n$ Würfelwürfe herbei. Die Warscheinlichkeit, dass man bei einem Wurf eine $6$ Würfelt ist $\frac{1}{6}$, die Warscheinlichkeit das dies nicht der Fall ist, ist $\frac{5}{6}$. Die Variable $X$ beschreibt die Anzahl an gewürfelten $6en$ bei $n$ Würfen.  
- $p = \frac{1}{6}$: Warscheinlichkeit für einen Treffer
- $n$: Anzahl an Versuchen
- $k$: Anzahl an gewünschten Treffern
- $X$: Anzahl an treffern

Die allgemeine Formel die hier angewendet werden kann lautet wiefolgt:  
$$P(X=k) = \begin{pmatrix} n \\ k \end{pmatrix} \cdot p^k \cdot (1-p)^{n-k}$$

$\begin{pmatrix} n \\ k \end{pmatrix}$ beschreibt die Anzahl an Möglichkeiten für $k$ Treffer bei $n$ Versuchen. Das heißt im eigentlichen Rechnen wird dies fast immer $1$ entsprechen. 

## genau k Treffer

$$P(X = k) = \begin{pmatrix} n \\ k \end{pmatrix} \cdot p^k \cdot (1-p)^{n-k}$$

Die Warscheinlichkeit bei unserem Beispiel genau ein Treffer bei $5$ Versuchen zu haben ergibt folgendes:  
$p = \frac{1}{6} \qquad n=5 \qquad k=1$  

$P(X = 1) = 1 \cdot \frac{1}{6}^1 \cdot (1 - \frac{1}{6})^{5-1} \approx 0,0804 = 8,04\%$ 

## mindestens k oder mehr Treffer

$$P(X \ge k) = \sum_{l=k}^{n} \begin{pmatrix} n \\ k \end{pmatrix} \cdot p^l \cdot (1-p)^{n-l}$$

## maximal k oder weniger Treffer

$$P(X \ge k) = \sum_{l=0}^{k} \begin{pmatrix} n \\ k \end{pmatrix} \cdot p^l \cdot (1-p)^{n-l}$$

# Signifikanztests mit der Binominalverteilung
