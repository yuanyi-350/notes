**Def.** Let $X$ and $Y$ be topological spaces; let $p: X \to Y$ be a surjective map. The map $p$ is said to be a **<u>quotient map</u>** if : subset $U$ of $Y$ is open in $Y \iff p^{-1}(U)$ is open in $X$.

Another way of describing a quotient map is as follows: We say that a subset $C$ of $X$ is **<u>saturated</u>** if $C = p^{-1}(D)$ for some subset $D$. To say that $p$ is a quotient map $\iff p$ is continuous and $p$ maps saturated open sets of $X$ to open sets of $Y$ (or saturated closed sets of $X$ to closed sets of $Y$ ).



**Def.** If $X$ is a space and $A$ is a set and if $p: X \twoheadrightarrow A$ is a surjective map, then there exists exactly one topology $\mathcal{T}$ on $A$ relative to which $p$ is a quotient map; it is called the <u>**quotient topology**</u> induced by $p$.

The topology $\mathcal{T}$ is defined by subsets $U$ of $A$ is open $\iff p^{-1}(U)$ is open in $X$. It is easy to check that $\mathcal{T}$ is a topolog

**Prop.** It follows immediately from the definition that if $p: X \to Y$ is a surjective continuous map that is either open or closed, then $p$ is a quotient map.

**Example 1.** Let $X$ be the subspace $[0,1] \cup[2,3]$ of $\R$, and let $Y$ be the subspace $[0,2]$ of $\R$. The map $p: X \to Y$ defined by
$$
p(x)= \begin{cases}x & \text { for } x \in[0,1] \\ x-1 & \text { for } x \in[2,3]\end{cases}
$$

is readily seen to be surjective, continuous, and closed. Therefore it is a quotient map. It is not, however, an open map; the image of the open set $[0,1]$ of $X$ is not open in $Y$.

Note that if $A$ is the subspace $[0,1) \cup[2,3]$ of $X$, then the map $q: A \to Y$ obtained by restricting $p$ is continuous and surjective, but it is not a quotient map. For the set $[2,3]$ is open in $A$ and is saturated with respect to $q$, but its image is not open in $Y$.

**Example 2.** Let $\pi_1: \R \times \R \to \R$ be projection onto the first coordinate; then $\pi_1$ is continuous and surjective. Furthermore, $\pi_1$ is an open map. For if $U \times V$ is a nonempty basis element for $\R \times \R$, then $\pi_1(U \times V)=U$ is open in $\R$; it follows that $\pi_1$ carries open sets of $\R \times \R$ to open sets of $\R$. However, $\pi_1$ is not a closed map. The subset $C=\{x \times y | x y=1\}$ of $\R \times \R$ is closed, but $\pi_1(C)=\R-\{0\}$, which is not closed in $\R$.
Note that if $A = C \cup \{(0, 0)\}$ is the subspace of $\R \times \R$ , then the map $q : A \to \R$ obtained by restructing $\pi_1$ is continuous and surjective, but it is not a quotient map. For the one-point set $\{(0, 0)\}$ is open in $A$ and is saturated with respect to $q$, but its image is not open in $\R$.

**Example 3.** Let $\pi_1: \R \times \R \to \R$ be projection on the first coordinate. Let $A = \{(x, y) | x \ge 0 \text{ or } y =0\}$ be the subspace of $\R \times \R$ ; let $q: A \to \R$ be obtained by restricting $\pi_1$. Show that $q$ is a quotient map that is neither open nor closed.



**Def.** Let $X$ be a topological space, and let $X^*$ be a partition of $X$ into disjoint subsets whose union is $X$.
Let $p: X \twoheadrightarrow X^*$ be the surjective map that carries each point of $X$ to the element of $X^*$ containing it. In the quotient topology induced by $p$, the space $X^*$ is called a quotient space of $X$.

In other words, the topology on $X^*$ is defined by : a subset $\mathcal{U}$ of $X^*$ is open $\iff \bigcup\limits_{U \in \mathcal{U}} U \subseteq X$ is open.



**Theorem 22.1.** Let $p: X \to Y$ be a quotient map; let $A$ be a subspace of $X$ that is saturated with respect to $p$; let $q: A \to p(A)$ be the map obtained by restricting $p$. If $A$ is either open or closed in $X$, then $q$ is a quotient map.

**Pf.** **Step1.** $q^{-1}(V) = p^{-1}(V)$ if $V \subseteq p(A)$

It is trivial that $q^{-1}(V) \subseteq p^{-1}(V)$. WTS $p^{-1}(V) \subseteq q^{-1}(V)$

If $x \in p^{-1}(V)$, i.e. $x \in p^{-1}(V) \subseteq p^{-1}(p(A)) = A$ (The last equation is because $A$ is saturated with respect to $p$)

**Step2.** Suppose $A$ is open. Given the subset $V$ of $p(A)$, WTS $V$ is open in $p(A)\iff q^{-1}(V)$ is open in $A$

"$\impliedby$" : Since $q^{-1}(V)$ is open in $A$ and $A$ is open in $X$, the set $q^{-1}(V) = p^{-1}(V)$ is open in $X$.

Since $p$ is a quotient map , $V$ is open in $Y \implies$ $V \cap p(A) = V$ is open in $p(A)$

"$\implies$" : Since $A$ is saturated with respect to $p$, $A = p^{-1}(p(A))$

Since $p$ is a quotient map and $A$ is open $\implies p(A)$ is open in $Y$

And $V$ is open in $p(A)$ $\implies$ $V$ is open in $Y$. Since $p$ is a quotient map, $p^{-1}(V)$ is open in $X$

Therefore $p^{-1}(V) \cap A = q^{-1}(V) \cap A = q^{-1}(V)$ is open in $A$



##### Adjunction spaces(沿映射粘合)

商空间的一个重要用途, 是把一个空间的某个子空间粘到另一个空间上. 这种空间称为 **adjunction space**(粘附空间).

**Definition.** 设 $X$ 是已经存在的空间, $Y$ 是准备粘上去的新空间, $A\subseteq Y$ 是参与粘合的子空间, 并设 $f:A\to X$ 是连续映射.

定义沿 $f$ 把 $Y$ 粘到 $X$ 上得到的 adjunction space 为 $X\cup_f Y := (X\sqcup Y)/{\sim_f},$

其中 $\sim_f$ 是满足下列条件的最小等价关系 $a \sim f(a), \quad a \in A$

显式地, 等价类有以下形式:

- 若 $y\in Y\setminus A$, 则其等价类是单点集;
- 若 $x\in X$, 则

$$
[x] = \{x\} \cup f^{-1}(x)
$$

特别地, 如果 $f(a)=f(b)$ , 则传递性给出 $a \sim_f f(a) = f(b) \sim_f b$



**Example.** 记 $\mathbb{RP}^2\cong S^2/(x\sim -x)$ , 以及 $z \sim \varphi_2(z)=z^2, \quad z \in \partial D^2$ . 则 $X_2 = S^1\cup_{\varphi_2}D^2 \cong \mathbb{RP}^2$

**Proof.** 依定义, \[ X_2 \cong D^2/\left(z\sim -z\text{, 其中 }z\in\partial D^2\right). \]

现在只看闭的上半球 \[ H=\{(x,y,z)\in S^2:z\ge 0\}. \] 因此 $\mathbb{RP}^2 \cong H/\left(p\sim -p\text{, 其中 }p\in\partial H\right).$

而闭上半球 $H$ 同胚于闭圆盘 $D^2$, 所以 \[ \mathbb{RP}^2 \cong D^2/\left(z\sim -z\text{, 其中 }z\in\partial D^2\right). \]

