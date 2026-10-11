**Definition.** $\mu$ is a measure on $\mathcal{A}$ if (1) $\forall A \in \mathcal{A}: \mu(A) \geq 0$	(2) it is $\sigma$-additive $\iff \mu\left(\bigcup\limits_{i=1}^\infty A_i\right)=\sum\limits_{i=1}^\infty \mu\left(A_i\right)$ forall disjoint $A_i$

**Definition.** $\mu$ is a measure on $\mathcal{A}$ if
(1) it is nonnegative, i.e. $\forall A \in \mathcal{A}: \mu(A) \geq 0$;
(2) it is $\sigma$-additive, i.e. $\mu\left(\sum\limits_{i=1}^\infty A_i\right)=\sum\limits_{i=1}^\infty \mu\left(A_i\right)$

**Definition.** (1) If $\mu$ is a measure on a $\sigma$-algebra $\mathcal{A}$ of subsets of $\Omega$, the triplet $(\Omega, \mathcal{A}, \mu)$ is a **<u>measure space</u>**.
(2) A measure space $(\Omega, \mathcal{A}, P)$ is a **<u>probability space</u>** if $P(\Omega)=1$.

---

**Theorem 2.2.2 ($\sigma$-subadditivity)** Let $\mu$ be a measure on an algebra $\mathcal{A}$. Then suppose $A \subset \bigcup\limits_{n = 1}^\infty A_n$ where $A \in \mathcal{A},\left\{A_n, n \geq 1\right\} \in \mathcal{A}$, we have $\mu(A) \leq \sum\limits_{n = 1}^\infty \mu\left(A_n\right) .$

**Proof.** Let $B_n=A \cap A_n \in \mathcal{A}$, and $C_n=B_n - \bigcup\limits_{i=1}^{n-1} B_i \in \mathcal{A}$ . So
$$
\begin{aligned}
A &= \bigcup_{n = 1}^\infty\left(A \cap A_n\right) = \bigcup_{n = 1}^\infty B_n \\
& =B_1+\left(B_2-B_1\right)+\left(B_3-\left[B_1 \cup B_2\right]\right)+\cdots =\sum_{n=1}^\infty C_n
\end{aligned}
$$

Thus we get

$$
\mu(A)=\mu\left(\sum_{n=1}^\infty C_n\right)=\sum_{n=1}^\infty \mu\left(C_n\right) \leq \sum_{n=1}^\infty \mu\left(B_n\right) \leq \sum_{n=1}^\infty \mu\left(A_n\right)
$$

**Theorem 2.6.1** (1) Let $\mu$ be a non-negative additive set function on a semialgebra $\mathcal{S}$ (containing $\emptyset$), then $\mu$ has a unique extension $\bar{\mu}$ to $\overline{\mathcal{S}}$, such that $\bar{\mu}$ is additive.

(2) Moreover, if $\mu$ is $\sigma$-additive on $\mathcal{S}$ (which implies that $\mu$ is a measure on $\mathcal{S}$ ), then so is $\bar{\mu}$ on $\overline{\mathcal{S}}$.

**Proof. (1)** For every $A \in \overline{\mathcal{S}}$, we can write $A=\sum\limits_{i = 1}^m A_i$ with $A_i \in \mathcal{S}$. Define $\bar{\mu}(A)=\sum\limits_{i = 1}^m \mu\left(A_i\right)$. Trivial to check $\bar\mu$ is welll defined.

To prove uniqueness, let $\hat{\mu}$ be another extension of $\mu$ to $\overline{\mathcal{S}}=\mathcal{A}(\mathcal{S})$ such that $\hat{\mu}$ is additive. For $A=\sum\limits_{i=1}^l A_i \in \overline{\mathcal{S}}$ with $A_i \in \mathcal{S}$, we have $\hat{\mu}(A)=\sum\limits_1^l \hat{\mu}\left(A_i\right)=\sum\limits_1^l \mu\left(A_i\right)=\bar{\mu}(A)$



**Theorem 2.6.2 ($\sigma$-Subadditivity)** Let $\mu$ be a nonnegative additive set function on a semialgebra $\mathcal{S}$. Let $A, A_n \in \mathcal{S}$. Then
(1) $\sum\limits_{n = 1}^\infty A_n \subset A, \quad \implies \quad \mu(A) \geq \sum\limits_{n = 1}^\infty \mu\left(A_n\right)$.
(2). Further assume that $\mu$ is $\sigma$-additive (hence a measure). Then,
$$
A \subset \sum_{n=1}^\infty A_n, \implies \mu(A) \leq \sum_{n=1}^\infty \mu\left(A_n\right) .
$$

**Proof.** Let $\mu$ be the unique extension $\bar{\mu}$ on $\overline{\mathcal{S}}$

(1) Since $\sum\limits_{i = 1}^n A_i \subset A$ and $A, \sum\limits_{i = 1}^n A_i \in \overline{\mathcal{S}}$, by the monotonicity of $\mu$, we get
$$
\mu(A) = \bar{\mu}(A) \geq \bar{\mu}\left(\sum_{i = 1}^n A_i\right)=\sum_{i = 1}^n \bar{\mu}\left(A_i\right)=\sum_{i = 1}^n \mu\left(A_i\right) .
$$

Letting $n \to \infty$, we get the desired result.
(2). Since $\bar{\mu}$ is a measure on the algebra $\overline{\mathcal{S}}$, applying **<u>Theorem 2.2.2</u>**, we have $\bar{\mu}(A) \leq \sum\limits_{i= 1}^\infty \bar{\mu}\left(A_i\right)$, implying $\mu(A) \leq \sum\limits_{i = 1}^\infty \mu\left(A_i\right)$.



**Definition.** Let $\mu$ be a measure on a semialgebra $\mathcal{S}$ with $\emptyset, \Omega \in \mathcal{S}$. For any $A \subset \Omega$, define
$$
\mu^*(A):=\inf \left\{\sum_{n=1}^\infty \mu\left(A_n\right) ; A \subset \bigcup_{n=1}^\infty A_n, A_n \in \mathcal{S}\right\}
$$

to be the outer measure of $A . \mu^*$ is called the outer measure induced by the measure $\mu$.

**Theorem 2.7.1** Let $\mu$ be a measure on a semialgebra $\mathcal{S}$ with $\empty, \Omega \in \mathcal{S}$, and $\mu^*$ be the outer measure induced by $\mu$. $\mu^*(A)=\mu(A)$ for $A \in \mathcal{S}$.

**Proof.** Suppose $A \in \mathcal{S}$. Since $A \subset A$, by definition, $\mu^*(A) \leq \mu(A)$.

On the other hand, if $A \subset \bigcup\limits_{n=1}^\infty A_n$ with $A_n \in \mathcal{S}$, then $\mu(A) \leq \sum\limits_{n=1}^\infty \mu\left(A_n\right)$ by the $\sigma$-subadditivity of $\mu$ on $\mathcal{S}$, see **<u>Theorem 2.6.2.</u>**


---

**Definition.** A set $A \subset \Omega$ is said to be measurable w.r.t. an outer measure $\mu^*$ if for any $D \subset \Omega$, one has
$$
\mu^*(D)=\mu^*(A \cap D)+\mu^*\left(A^c \cap D\right)
$$

Let $\mathcal{A}^*$ be the class of all $\mu^*$-measurable sets.

**Theorem 2.7.3** The class $\mathcal{A}^*$ is a $\sigma$-algebra.

**Theorem 2.8.1** We have $\mathcal{S} \subset \mathcal{A}^*$, hence $\sigma(\mathcal{S}) \subset \mathcal{A}^*$.



**Theorem 2.8.2 (Caratheodory Extension Theorem)** Let $\mu$ be a measure on a semialgebra $\mathcal{S}$ with $\emptyset, \Omega \in \mathcal{S}$.
(1) $\mu$ has an extension to $\sigma(\mathcal{S})$, denoted by $\left.\mu\right|_{\sigma(\mathcal{S})}$, so $\left(\Omega, \sigma(\mathcal{S}),\left.\mu\right|_{\sigma(\mathcal{S})}\right)$ is a measure space. Furthermore, $\left.\mu\right|_{\sigma(\mathcal{S})}=\left.\mu^*\right|_{\sigma(\mathcal{S})}$, i.e., this extension can be simply taken to be the restriction of measure $\left.\mu^*\right|_{\mathcal{A}^*}$ to $\sigma(\mathcal{S})$.
(2) If $\mu$ is $\sigma$-finite, then the extension in (1) is <font : color = Red>unique</font>. i.e. if $\mu_1$ and $\mu_2$ are both extensions of $\mu$ to $\sigma(\mathcal{S})$, then $\mu_1=\mu_2$.

**Proof.** (1) From **<u>Theorem 2.8.1</u>**, we know $\sigma(\mathcal{S}) \subset \mathcal{A}^*$. Then, by **<u>Theorem 2.7.3</u>**, the restriction of $\mu^*$ on $\sigma(\mathcal{S})$ is an extension of $\mu$ from $\mathcal{S}$ to $\sigma(\mathcal{S})$.
(2). $\mu$ is $\sigma$-finite $\implies$ there exists disjoint $\left\{D_n\right\} \subset \mathcal{S}$, such that $\sum\limits_{i=1}^\infty D_i=\Omega$ and $\mu\left(D_n\right)<\infty$ for each $n$. Suppose $\mu_1$ and $\mu_2$ are both extensions of measure $\mu$ from $\mathcal{S}$ to $\sigma(\mathcal{S})$.

**Claim.** $\mu_1\left(A \cap D_n\right)=\mu_2\left(A \cap D_n\right), \quad \forall A \in \sigma(\mathcal{S}),$ and $\forall n \geq 1 .$

**Proof.** $\forall n \geq 1$, define $\mathcal{M}=\left\{A: A \in \sigma(\mathcal{S}), \mu_1\left(A \cap D_n\right)=\mu_2\left(A \cap D_n\right)\right\} .$

Obviously, $\mathcal{S} \subset \mathcal{M}$ since $\mu_1$ and $\mu_2$ are both extensions of $\mu$ from $\mathcal{S}$ to $\sigma(\mathcal{S})$.

From **<u>Theorem 2.6.1</u>**, we know $\mu$ has a unique extension to $\bar{S}$, i.e. $\mu_1(A)=\mu_2(A), \quad \forall A \in \overline{\mathcal{S}}$.

Therefore, $\overline{\mathcal{S}} \subset \mathcal{M}$ since $\forall A \in \overline{\mathcal{S}}$ , $A \cap D_n \in \overline{\mathcal{S}}$ and $\mu_1$ and $\mu_2$ are both unique extensions of $\mu$ from $\mathcal{S}$ to $\overline{\mathcal{S}}$.

From the **<u>Monotone Class Theorem</u>** of the last chapter, [i.e., if $\mathcal{M}$ is an $m$-class containing $\mathcal{S}$, then $\sigma(\mathcal{S}) \subset \mathcal{M}$ ]

WTS $\mathcal{M}$ is an $m$-class :  Let $\left\{A_k\right\} \in \mathcal{M}$ and $A = \bigcup\limits_{k = 1}^\infty A_k$. Note $\left\{A_k\right\} \in \mathcal{M} \implies \mu_1\left(A_k \cap D_n\right)= \mu_2\left(A_k \cap D_n\right)$.
$$
\mu_1\left(A \cap D_n\right)=\lim _{k \to \infty} \mu_1\left(A_k \cap D_n\right)=\lim _{k \to \infty} \mu_2\left(A_k \cap D_n\right)=\mu_2\left(A \cap D_n\right)
$$
The first and the third equation is the property of continuity from below for a measure on a $\sigma$-algebra

It is Similar for the other side. Therefore, $\mathcal{M}$ is an $m$-class. $\implies\mathcal{M} \supset \sigma(\mathcal{S})=\sigma(\mathcal{S})$. By definition, $\mathcal{M} \subset \sigma(\mathcal{S})$. This shows $\mathcal{M}=\sigma(\mathcal{S})$ finish the proof of Claim.

Finally, we show the uniqueness.

**Proof.** $\forall A \in \sigma(\mathcal{S})$, in view of **<u>Claim</u>** and $\sigma$-additivity of a measure, we have
$$
\mu_1(A)=\mu_1\left(A \cap \sum_{n = 1}^\infty D_n\right)=\sum_{n = 1}^\infty \mu_1\left(A \cap D_n\right)=\sum_{n = 1}^\infty \mu_2\left(A \cap D_n\right)=\mu_2(A) .
$$

Thus, $\mu_1$ and $\mu_2$ are the same on $\sigma(\mathcal{S})$.

---

**Definition:** Suppose $\R = (-\infty, +\infty)$, $\mathcal{S} = \{(a, b) \Big| -\infty < a < b < +\infty\}$, $\mathcal{B} = \sigma(\mathcal{S})$ is called the Borel $\sigma$-algebra. The elements of $\mathcal{B}$ are called Borel sets. The pair $(\mathcal{R}, \mathcal{B})$ is called the Borel measurable space.

**Example :** 记 $\mathcal{E}$ 为 $\R$ 中所有方体, 例如 $(a, b), (a, b], [a, b), [a, b], \{a\}$ 均当成方体. 易知 $\mathcal{E}$ 为 semi-algebra.

由于其包含所有开区间, 因此 $\mathcal{B} \subseteq \sigma(\mathcal{E})$. 并且显然 $\mathcal{E} \subseteq \mathcal{B} \implies \sigma(\mathcal{E}) \subseteq \sigma(\mathcal{B}) = \mathcal{B}$ 即证 $\sigma(\mathcal{E}) = \mathcal{B}$

$\mathcal{A}^* = \mathcal{U}$ 表示 Lebesgue 可测集, $\mathcal{E} \sub \overline{\mathcal{E}} \sub \mathcal{B} \sub \mathcal{U}$

**Theorem 2.10.2 (Lebesgue-Stieltjes measure)**  Suppose that $F$ is finite on $(-\infty, \infty)$ (i.e. $|F(t)|<\infty$ for $|t|<\infty$ ), and
(1) $F$ is nondecreasing	(2) $F$ is right continuous.

Then there is a unique measure $\mu$ on $(\R, \mathcal{B})$ with $\mu((a, b])=F(b)-F(a), \quad-\infty \leq a \leq b \leq \infty,$

When $a=b=\infty$ or $-\infty$, the right hand is understood to be $0$

**Corollary 2.10.1 (Lebesgue measure)** There is a unique measure $\lambda$ on ( $R, \mathcal{B}$ ) with
$$
\mu((a, b])=b-a, \quad-\infty \leq a<b \leq \infty,
$$

Easy to check $\mu$ is a measure on $\mathcal{E}$, we can apply Caratheodory's Extension Theorem to get the desired result.

---

**Definition:** Let $(\Omega, \mathcal{A}, \mu)$ be a measure space, and $N \subset \Omega$.
(1) $N$ is a $\mu$-null set iff $\exists B \in \mathcal{A}$ with $\mu(B)=0$ such that $N \subset B$.
(2) $(\Omega, \mathcal{A}, \mu)$ is a complete measure space if every $\mu$-null set $N \in \mathcal{A}$.



**Theorem 2.9.1** Given a measure space $(\Omega, \mathcal{A}, \mu)$ , there exists a complete space $(\Omega, \overline{\mathcal{A}}, \bar{\mu})$ such that $\mathcal{A} \subset \overline{\mathcal{A}}$ and $\bar{\mu}=\mu$ on $\mathcal{A}$.

Let $\overline{\mathcal{A}}=\{A \cup N: A \in \mathcal{A}, N \text { is a } \mu \text {-null set }\}$, $\bar\mu(A \cup N) = \mu(A)$ for $A \in \mathcal{A}, N$ is a $\mu$-null set.
(1) $\overline{\mathcal{A}}$ is a $\sigma$-algebra	(2) $\bar{\mu}$ is well defined	(3) $(\Omega, \overline{\mathcal{A}}, \bar{\mu})$  is a measure space.
(4) $(X, \overline{\mathcal{A}}, \bar{\mu})$ is a complete measure space
(5) $(X, \overline{\mathcal{A}}, \bar{\mu})$ 是由 $(X, \mathcal{A}, \mu)$ 扩张而来的最小的完备测度空间
(6) $\bar{\mu}$ 也是从 $\mathcal{A}$ 到 $\overline{\mathcal{A}}$ 上的唯一扩张

**Proof.** (1) 任取集合 $B \in \overline{\mathcal{A}}$ , 设 $B = A \cup E$, 其中 $A \in \mathcal{A}, E \subset F, F \in \mathcal{A}, \mu(F)=0$
$$
B^c = \left(A^c \cap F^c\right) \cup\left(A^c \cap(F-E)\right)
$$
前者 $\in \mathcal{A}$, 后者 $\subseteq F$

令 $\left\{B_n\right\}_{n=1}^\infty \subset \mathcal{A}$ , 对每个 $n$ , 设 $B_n=A_n \cup E_n$ , 其中 $A_n \in \mathcal{A}$ , 且 $E_n \subseteq F_n, F_n \in \mathcal{A}, \mu\left(F_n\right)=0$
$$
\bigcup_{n=1}^\infty B_n=\bigcup_{n=1}^\infty\left(A_n \cup E_n\right)=\left(\bigcup_{n=1}^\infty A_n\right) \cup\left(\bigcup_{n=1}^\infty E_n\right)
$$
前者 $\in \mathcal{A}$, 后者 $\subseteq \bigcup\limits_{n = 1}^\infty F_n$ 零测

(2) $B \in \overline{\mathcal{A}}$ , 满足 $B=A \cup E=A' \cup E'$ , 其中 $A, A', F, F' \in \mathcal{A}$ , 且 $E \subset F, E \subset F', \mu(F)=\mu\left(F'\right)=0$ .
$$
\mu(A) \leq \mu\left(A \cup F \cup F'\right)=\mu\left(A' \cup F \cup F'\right) \leq \mu\left(A'\right)+\mu\left(F \cup F'\right)=\mu\left(A'\right)
$$
同理 $\mu(A') \le \mu(A)$, 即得 $\mu(A') = \mu(A)$

(3) 令 $\left\{B_n\right\}_{n=1}^\infty$ 是可数个互不相交的集合序列, 且 $\forall n \in \mathbb{N}, B_n \in \mathcal{A}$ . 有 $B_n=A_n \cup E_n, A_n \in \mathcal{A}$ , 且 $F_n \in \mathcal{A}, \mu\left(F_n\right)=0, E_n \subset F_n$.
$$
\bar{\mu}\left(\bigcup_{n=1}^\infty B_n\right)=\mu\left(\bigcup_{n=1}^\infty A_n\right)=\sum_{n=1}^\infty \mu\left(A_n\right)=\sum_{n=1}^\infty \bar{\mu}\left(B_n\right)
$$

(4) $F \in \overline{\mathcal{A}}, \bar{\mu}(F)=0$ , 取 $E \subset F$, 往证 $E \in \overline{\mathcal{A}}$
设 $F=A \cup E'$ , 其中 $A \in \mathcal{A}, E'$ 是 $\mu$-null set. 即 $\exists F' \in \mathcal{A}, \mu\left(F'\right)=0, E' \subset F'$.
$$
E=\emptyset \cup E
$$
前者 $\emptyset \in \mathcal{A}$. 由于 $\mu(A)=\bar{\mu}(F)=0$, 于是后者 $E \subseteq A \cup F', \mu\left(A \cup F'\right) \leq \mu(A)+\mu\left(F'\right)=0$ 即证 $E \in \overline{\mathcal{A}}$

(5) 令 $(X, \mathcal{F}, \eta)$ 是另外一个完备测度空间, 其中 $\mathcal{F}$ 是 $\sigma$-代数, 且 $\mathcal{A} \subset \mathcal{F}$ , $\eta$ 是 $\mu$ 到 $\mathcal{F}$ 上面的扩张.
令 $B \in \overline{\mathcal{A}}$ , 有 $B=A \cup E$, 其中 $A \in \mathcal{A}, E$ 是 $\mu$-null set. 即 $\exists F \in \mathcal{A}, E \subset F, \mu(F)=0$
因为 $\left.\eta\right|_{\mathcal{A}}=\mu$ , 故 $\eta(F)=\mu(F)=0$. 又因为 $E \subset F$ 且 $(X, \mathcal{F}, \eta)$ 是完备的, 于是 $E \in \mathcal{F}$.
故 $B=A \cup E \in \mathcal{F}$. 即证 $\overline{\mathcal{A}} \subseteq \mathcal{F}$ , 即 $(X, \overline{\mathcal{A}}, \bar{\mu})$ 是最小的.

(6) 假设 $\nu$ 也是 $\overline{\mathcal{A}}$ 上的测度, 且 $\left.\nu\right|_{\mathcal{A}}=\mu$
令 $B \in \overline{\mathcal{A}}$, 有 $B=A \cup E$, 其中 $A \in \mathcal{A}, E$ 是 $\mu$-null set. 即 $\exists F \in \mathcal{A}, E \subset F, \mu(F)=0$
$$
\mu(A) = \nu(A) \le \nu(B) \le\nu(A \cup F) = \mu(A \cup F) \leq \mu(A)+\mu(F) =\mu(A)
$$
所以 $\nu(B)=\mu(A)=\bar{\mu}(B)$, 即证
