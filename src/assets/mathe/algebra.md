# Rechenoperationen mit Vektoren
## Kreuzprodukt

$\begin{pmatrix} a_x \\ a_y \\ a_z \end{pmatrix} \times \begin{pmatrix} b_x \\ b_y \\ b_z \end{pmatrix} = \begin{pmatrix}
    a_y \cdot b_z - a_z \cdot b_y \\
    a_z \cdot b_x - a_x \cdot b_z \\
    a_x \cdot b_y - a_y \cdot b_y \\
\end{pmatrix}$

 - Das Kreuzprodukt zweier Vektoren ist orthogonal zu der Ebene, die von beiden Vektoren aufgespannt werde.
 - $\vec{u} \times \vec{v} = \vec{n}$

## Skalarprodukt

$\vec{a} = \begin{pmatrix} x \\ y \\ z \end{pmatrix} 
\;\;\;
\vec{b} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$

$\vec{a} \cdot \vec{b} = \vec{a}_x \cdot \vec{b}_x + \vec{a}_y \cdot \vec{b}_y + \vec{a}_z \cdot \vec{b}_z$

- Wenn das Skalarprodukt zweier Vektoren $0$ ist, so sind diese Vektoren orthogonal zueinander.

# Lotfuspunkt bestimmen

$P(x|y|z)$  
$g: \vec{x} = \vec{q} + s \cdot \vec{u}$

Der Lotfuspunkt ist der Schnittpunkt der Geraden die Orthogonal zu $g$ ist und durch $P$ geht mit der Geraden $g$.

- Stelle die Gleichung einer Ebene auf, die von der Gerade $g$ orthogonal geschnitten wird, und die durch $P$ geht
- Der Schnittpunkt von der Ebene und der Gerade $g$ ist der Lotfuspunkt.

## Ebenengleichung aufstellen
Der Normalvektor $\vec{n}$ einer Ebene ist Orthogonal zur Ebene. Das heißt, dieser kann einfach der Richtungsvektor $\vec{u}$ der Gerade sein.  
$\vec{n} = \vec{u}$

Das ist schon fast alles für die Ebene:  
$E: \vec{n}_x \cdot x + \vec{n}_y \cdot y + \vec{n}_z \cdot z = d$

$d$ entspricht einem Skalarprodukt des Normalvektors $\vec{n}$ und einem beliebigen Punkt auf der Ebene. Da die Ebene durch $P$ gehen soll folgt:  
$d = \vec{0P} \cdot \vec{n}$  
$E: \vec{n}_x \cdot x + \vec{n}_y \cdot y + \vec{n}_z \cdot z = \vec{0P} \cdot \vec{n}$

# Schnittpunkte
## Gerade mit Ebene

$g: \vec{x} = \vec{p} + t \cdot \vec{u}$  
$E: a\cdot x + b\cdot y + c\cdot z = d$

Um den Schnittpunkt zu finden braucht man zuerst den Wert des Parameters $t$ der Gerade $g$. Hat man diesen Wert, kann man ihn in die Geradengleichung einsetzten und der resultierende Punkt ist der Schnittpunkt.

Um den Wert für $t$ zu finden, muss man folgende Gleichung aufstellen, und nach $t$ umstellen:  
$a \cdot (\vec{p}_x + t \cdot \vec{u}_x) + b \cdot (\vec{p}_y + t \cdot \vec{u}_y) + c \cdot (\vec{p}_z + t \cdot \vec{u}_x) = d$

## Schnittgerade

Gegeben sind folgende Ebenen:  
$E_1: a_1x_1 + b_1x_2 + c_1x_2 = d_1 \qquad\qquad E_2: a_2x_1 + b_2x_2 + c_2x_2 = d_2$

Das Finden der Schnittgeraden ist sehr einfach. Man muss die beiden geraden einfach gleichsetzten. Dies macht man einfach mit einem linearen Gleichungssystem.

$$I\;: \quad a_1x_1 + b_1x_2 + c_1x_2 = d_1$$  
$$II: \quad a_2x_1 + b_2x_2 + c_2x_2 = d_2$$

# Spiegelung
## Punkt an Ebene

Gespiegelt wird der Punkt $P$ an der Ebene $E$.

$E: a \cdot x_1 + b \cdot x_2 + c \cdot x_3 = d$  
$P(x_1|x_2|x_3)$

1. Eine Gerade aufstellen, bei der der Stützvektor gleich $P$ ist, und der Richtungsvektor gleich dem Normalvektor von $E$ ist $\vec{u} = \vec{n_E}$  
$g: \vec{x} = P + s \cdot \vec{n_E}$
2. Den Schnittpunkt von der Ebene $E$ mit der Geraden $g$ finden.  
3. Der gespiegelte Punkt ist dann der Parameter $s$ für den Schnittpunkt verdoppelt.

$P' = P + 2s_S \cdot \vec{n}$

# Flächeninhalt
## Parallelogramm / Dreieck

Für den Flächeninhalt $A$ eines Parallelogramms, das von den Vektoren $\vec{a}$ und $\vec{b}$ aufgespannt wird, gilt:  
$A = \lvert \vec{a} \times \vec{b} \rvert$

Da ein Dreieck ein *halbes Parallelogramm* ist, ist der Flächeninhalt eines Dreiecks die Hälfte von dem Flächeninhalt eines Parallelogramms.  
$A = \frac{1}{2} \cdot \lvert \vec{a} \times \vec{b} \rvert$

# Winkel

$\vec{u}$ und $\vec{{v}}$ sind die Richtungsvektoren der Geraden $g$ und $h$.  
$\vec{n}_E$ und $\vec{n}_F$ sind die Normalvektoren der Ebenen $E$ und $F$.

$\alpha$ entspricht dem resultierenden Winkel. Für diesen gilt generell:  
$0 \le \alpha \le 90$

## Gleiches mit Gleichem

Wenn sich *gleiches mit gleichem* Schneidet, so berechnet man den Winkel mit Cosinus.  
*Gleiches mit gleichem* bedeutet entweder eine Ebene mit einer Ebene, oder eine Gerade mit einer Geraden.

$\cos (\alpha) = \frac{\lvert \vec{u} \cdot \vec{v} \rvert}{\lvert \vec{u} \rvert \cdot \lvert \vec{v} \rvert}
\qquad\qquad\
\cos (\alpha) = \frac{\lvert \vec{n}_E \cdot \vec{n}_F \rvert}{\lvert \vec{N}_E \rvert \cdot \lvert \vec{N}_F \rvert}$

## Gerade mit Ebene

Bei einer Geraden und einer Ebene funktioniert das genauso, nur mit Sinus anstatt Cosinus.

$\sin (\alpha) = \frac{\lvert \vec{n}_E \cdot \vec{u} \rvert}{\lvert \vec{N}_E \rvert \cdot \lvert \vec{u} \rvert}$

# Abstand
## Ebene mit Punkt (mit Lotfußpunkt)

$E: ax + by + cz = d \qquad\qquad P(x|y|z)$

- Zuerst muss man eine Gerade $g$ aufstellen, die Orthogonal zu $E$ ist und durch Punkt $P$ geht. Dafür kann man einfach den Normalvektor $\vec{n}$ der Ebene $E$ als Richtungsvektor nehmen und der Punkt $P$ als Stützvektor.

$g: \vec{x} = P + t \cdot \vec{n}$

- Damit kann man dann den **Lotfusßpunkt** berechnen *(der Schnittpunkt von $E$ und $g$)*
- der Abstand zwischen dem Punkt $P$ und der Ebene $E$ entspricht dann dem Betrag zwischen $P$ und dem Lotfuspunkt.

## Ebene mit Punkt (Koordinatenform)

Ist die Ebene in Koordinatenform gegeben und wird der Lotfuspunkt nicht gebrauch so kann man auch einen anderen, einfacheren Weg gehen. Gegeben ist Folgendes:  
$$P(x|y|z) \qquad E: ax + by + cz = d \qquad \vec{n}_E = \begin{pmatrix}
    a \\
    b \\
    c
\end{pmatrix}$$

1. Setzt man den Punkt in die Ebene ein der nicht auf der Ebene ist, kommt eine Zahl ungleich $d$ heraus. Berrechnet man dann die differenz zwischen $d$ und dem Ergebnis, so bekommt man den Wert um den man den **Stützvektor** der Ebene in Koordinatenform hätte multiplitzieren müsste.

$$aP_x + bP_y + cP_z - d = t$$

2. Um dann den Abstand herauszufinden, muss man den Wert $t$ durch den Betrag des Normalvektors teilen.

$$d(P, E) = \frac{t}{\lvert \vec{n}_E \rvert}$$

Dies Ergibt dann folgende generelle Formel für den Abstand:  
$$d(P, E) = \frac{aP_x + bP_y + cP_z - d}{\lvert \vec{n}_E \rvert}$$

## Ebene mit Gerade

Das Berechnen des Abstandes einer Ebene und einer Gerade mach nur Sinn, wenn die beiden parallel zueinander sind *(in dem dreidimensionalen Raum)*. Somit kann man einfach irgendein Punkt auf der Gerade nehmen und den Abstand von diesem Punkt zur Ebene berechnen. Der Stützvektor der Gerade bietet sich dafür an.

*Note:* Die Gerade muss Parallel zur Ebene sein, sonst ist der Abstand automatisch $0$ da es dann ein Schnittpunkt gibt. *Sind diese nicht parallel, bricht auch diese Methode zusammen.*

## Zwei windschiefe Geraden

$$g: \vec{x} = \vec{p} + s \cdot \vec{u}
\qquad
h: \vec{x} = \vec{q} + t \cdot \vec{v}
\qquad
\vec{n} = \vec{u} \times \vec{v}$$

$$d(g; h) = \lvert (\vec{q} - \vec{p}) - \vec{n}_0 \rvert$$  
wobei $\vec{n}_0$ der Normaleinheitsvektor von $\vec{n} = \vec{u} \times \vec{v}$ ist.
