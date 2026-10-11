Let $\mathcal{A}$ be a nonempty class of subsets of $\Omega$.

**Definition:** $\mathcal{A}$ is an **<u>semi-algebra</u>** on $\Omega$ if
(1) 对有限交封闭	(2) $A \in \mathcal{A}$, 则 $A^c$ is a finite disjoint union of sets in $\mathcal{A}$,

**Definition:** $\mathcal{A}$ is an **<u>algebra</u>** on $\Omega$ if (1) 对有限交封闭	(2) 对补集封闭

**Definition:** $\mathcal{A}$ is a **<u>$\sigma$-algebra</u>** on $\Omega$ if (1) 对无限交封闭	(2) 对补集封闭. The pair ( $\Omega, \mathcal{A}$ ) is called a **<u>measurable space</u>**.



**Theorem 1.5.1** If $\mathcal{S}$ is a semi-algebra, then $\overline{\mathcal{S}}=\{\text { finite disjoint unions of sets in } \mathcal{S}\}$ is an algebra, called the algebra **<u>generated</u>** by $\mathcal{S}$.



**Definition:** $\mathcal{A}$ is said to be a monotone class (**<u>$m$-class</u>**) on $\Omega$ if
(1) If $A_i \in \mathcal{A}$ and $A_i \uparrow$, then $\lim\limits_{n \to \infty} A_n = \bigcup\limits_{i=1}^\infty A_i \in \mathcal{A}$
(2) If $A_i \in \mathcal{A}$ and $A_i \downarrow$, then $\lim\limits_{n \to \infty} A_n=\bigcap\limits_{i=1}^\infty A_i \in \mathcal{A}$

**Definition:** $\mathcal{A}$ is a **<u>$\pi$-class</u>** on $\Omega$ if 对有限交封闭

**Definition:** $\mathcal{A}$ is a **<u>$\lambda$-class</u>** on $\Omega$ if (1) $\Omega \in \mathcal{A}$	(2) $A-B \in \mathcal{A}$ for $A, B \in \mathcal{A}$ and $B \subsetneq A$	(3) $\lim A_n \in \mathcal{A}$ for every increasing sequence $A_n \in \mathcal{A}, n \geq 1$.



**Theorem 1.7.1** If $\mathcal{A}$ is a $\lambda$-class, it is an $m$-class.

**Theorem 1.7.2** Suppose $\mathcal{A}$ is an algebra on $\Omega$. Then $\mathcal{A}$ is an $m$-class $\iff \mathcal{A}$ is a $\sigma$-algebra.

**Theorem 1.7.3(Dynkin system $\pi-\lambda$ theorem)** $\mathcal{A}$ is a $\sigma$-algebra iff it is both a $\lambda$-class and $\pi$-class.

**Pf.** "$\implies$" Trivial

"$\impliedby$" Now suppose that $\mathcal{A}$ is both a $\lambda$-class and $\pi$-class.

First, $\forall A \in \mathcal{A}$, $A^c=\Omega-A \in \mathcal{A}$ as $\mathcal{A}$ is a $\lambda$-class.

For $A_i \in \mathcal{A}$, let $B_n := \bigcap\limits_{i = 1}^n A_i \in \mathcal{A}$ since $\mathcal{A}$ is a $\pi$-class. We have $\lim\limits_{n \to \infty} B_n = \bigcap\limits_{i = 1}^\infty A_i \in \mathcal{A}$ since $\mathcal{A}$ is a $m$-class.

<img src="https://cdn.jsdelivr.net/gh/yuanyi-350/image/202508151328566.png" alt="image-20250815132629351" style="zoom:50%;" />

---

**Theorem 1.8.1 <font : color = Red>[极其精妙]</font>** Let $\mathcal{A}$ be an algebra. Then,
(1) $m(\mathcal{A})=\sigma(\mathcal{A})$
(2) if $\mathcal{B}$ is an $m$-class and $\mathcal{A} \subset \mathcal{B}$, then $\sigma(\mathcal{A}) \subset \mathcal{B}$.

(1) Since $\sigma(\mathcal{A})$ is an $m$-class containing $\mathcal{A}$ and $m(\mathcal{A})$ is the smallest $m$-class containing $\mathcal{A}$,  $\mathcal{A} \subset m(\mathcal{A}) \subset \sigma(\mathcal{A})$.

It remains to show that $m(\mathcal{A}) \supset \sigma(\mathcal{A})$. It suffices to show that $m(\mathcal{A})$ is a $\sigma$-algebra. In fact, by **<u>Theorem 1.7.2</u>**, we only need to show $m(\mathcal{A})$ is an algebra.

Define

$$
\begin{aligned}
\mathcal{C}_1 & =\{A: A \in m(\mathcal{A}), A \cap B \in m(\mathcal{A}) \text { for all } B \in \mathcal{A}\} \\
\mathcal{C}_2 & =\{B: B \in m(\mathcal{A}), A \cap B \in m(\mathcal{A}) \text { for all } A \in m(\mathcal{A})\} \\
\mathcal{C}_3 & =\left\{A: A \in m(\mathcal{A}), A^c \in m(\mathcal{A})\right\} .
\end{aligned}
$$
**Claim :** $\mathcal{C}_1, \mathcal{C}_2, \mathcal{C}_3$ are $m$-classes.
**Proof.** Suppose $A_j \in \mathcal{C}_1$, and $A_j \uparrow$ , we have $A_j \cap B \in m(\mathcal{A})$, for all $B \in \mathcal{A} \subseteq m(\mathcal{A})$.

Also we have $\left(A_j \cap B\right)\uparrow$ and $\bigcup\limits_{j=1}^\infty\left(A_j \cap B\right) \in m(\mathcal{A})$. It follows that  $B \cap \left(\bigcup\limits_{j=1}^\infty A_j\right) \in m(\mathcal{A})$ for all $B \in \mathcal{A} .$ Therefore, $\lim\limits_{j \to \infty} A_j =\bigcup\limits_{j=1}^\infty A_j \in \mathcal{C}_1$.

Similarly, it holds for the decreasing sequence. Thus, $\mathcal{C}_1$ is a $m$-class.

The proof for $\mathcal{C}_2$ is similar and hence omitted.

Now we look at $\mathcal{C}_3$. By the identities $\left(\bigcup\limits_{j=1}^\infty A_j\right)^c=\bigcap\limits_{j=1}^\infty A_j^c, \quad\left(\bigcap\limits_{j=1}^\infty A_j\right)^c=\bigcup\limits_{j=1}^\infty A_j^c$, we have $\mathcal{C}_3$ is a $m$-class.

**Claim :** $m(\mathcal{A})=\mathcal{C}_1=\mathcal{C}_2=\mathcal{C}_3$.

**Proof.** Since $\mathcal{A}$ is an algebra and $\mathcal{A} \subset m(\mathcal{A})$, it is clear that $\mathcal{A} \subset \mathcal{C}_1$. Hence, $m(\mathcal{A}) \subset \mathcal{C}_1$ as $m(\mathcal{A})$ is the smallest $m$-class. Noting $\mathcal{C}_1 \subset m(\mathcal{A})$, we get $m(\mathcal{A})=\mathcal{C}_1 .$

For any $B \in \mathcal{A}$ and $A \in m(\mathcal{A})=\mathcal{C}_1$, we have $A \cap B \in m(\mathcal{A})$ , then $\mathcal{A} \subset \mathcal{C}_2$ as $m(\mathcal{A})$ is the smallest $m$-class. Noting $\mathcal{C}_2 \subset m(\mathcal{A})$, we get $m(\mathcal{A})=\mathcal{C}_2\implies m(\mathcal{A})$ is closed under intersection.

It is easy to see that $\mathcal{A} \subset \mathcal{C}_3$. Thus, $\mathcal{C}_3$ is an $m$-class containing $\mathcal{A}$. Thus, $m(\mathcal{A}) \subset \mathcal{C}_3$. But it is clear that $\mathcal{C}_3 \subset m(\mathcal{A})$ by definition. Then $m(\mathcal{A})=\mathcal{C}_3\implies m(\mathcal{A})$ is closed under complement.

----

**Theorem 1.8.2** Let $\mathcal{A}$ be a $\pi$-class.
(1) Then $\lambda(\mathcal{A})=\sigma(\mathcal{A})$.
(2) If $\mathcal{B}$ is an $\lambda$-class and $\mathcal{A} \subset \mathcal{B}$, then $\sigma(\mathcal{A}) \subset \mathcal{B}$.



**Theorem 1.8.3 (Monotone Class Theorem) .** Let $\mathcal{A} \subset \mathcal{B}$ be two classes on $\Omega$.
(1). If $\mathcal{A}$ is a $\pi$-class, and $\mathcal{B}$ is a $\lambda$-class, then $\sigma(\mathcal{A}) \subset \mathcal{B}$.
(2). If $\mathcal{A}$ is an algebra, and $\mathcal{B}$ is an $m$-class, then $\sigma(\mathcal{A}) \subset \mathcal{B}$.

**Proof.** Applying the last two theorems, we get
(1) $\mathcal{B}$ is a $\lambda$-class containing $\mathcal{A}$, so $\mathcal{B} \supset \lambda(\mathcal{A})=\sigma(\mathcal{A})$.
(2) $\mathcal{B}$ is a $m$-class containing $\mathcal{A}$, so $\mathcal{B} \supset m(\mathcal{A})=\sigma(\mathcal{A})$.
