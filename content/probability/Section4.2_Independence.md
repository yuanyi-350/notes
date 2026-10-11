## Independence

**Definition.** The (joint) distribution function of $X$ :
$$
F_X(x)=P\left(X_1 \le x_1, \cdots, X_n \le x_n\right) .
$$
**Definition.** Let $(\Omega, \mathcal{A}, P)$ be a probability space.
(1) Events $A_1, \cdots, A_n \in \mathcal{A}$ are said to be independent iff
$$
P\left(\bigcap_{i \in J} A_i\right)=\prod_{i \in J} P\left(A_i\right) .
$$

for every subset $J$ of $\{1,2, \cdots, n\}$.

(2) The r.v.'s $X_1, \cdots, X_n$ are said to be independent iff the events $\left\{X_i \in B_i\right\}$ are independent, i.e.,

$$
P\left(\bigcap_{i \in J}\left\{X_i \in B_i\right\}\right)=\prod_{i \in J} P\left(\left\{X_i \in B_i\right\}\right)
$$

for every subset $J$ of $\{1,2, \cdots, n\}$. This is clearly equivalent to

$$
P\left(\bigcap_{i=1}^n\left\{X_i \in B_i\right\}\right)=\prod_{i=1}^n P\left(\left\{X_i \in B_i\right\}\right)
$$

for any Borel sets $B_i \in \mathcal{B}$ (as one can take some $B_i=\mathcal{R}_i$ ).

**注意.**

- 任意两个事件都满足 $P(A_i A_j) = P(A_i)P(A_j)$ 被称为“两两独立” (Pairwise Independence).
- 任意 $k$ 个事件的集合都满足概率连乘式被称为“相互独立” (如上定义的 Independence).

**反例.** 抛掷两枚硬币

- 事件 $A$ : 第一枚硬币正面朝上, $P(A) = \frac12$.
- 事件 $B$ : 第二枚硬币正面朝上, $P(B) = \frac12$.
- 事件 $C$ : 两枚硬币的结果相同, $P(C) = \frac12$.

满足两两独立性, 但是 $P(ABC) = \frac14 \ne P(A)P(B)P(C) = \frac12 \times \frac12 \times \frac12 = \frac18$ , 不互相独立.



**Theorem 5.2.1** The r.v.'s $X_1, \cdots, X_n$ are independent iff
$$
F_{X_1, \cdots, X_n}\left(t_1, \cdots, t_n\right)=F_{X_1}\left(t_1\right) \cdots \cdots F_{X_n}\left(t_n\right)
$$

for all $t_1, \cdots, t_n \in \R$.

**Proof.** "$\implies$". If $X_1, \cdots, X_n$ are independent, then taking $B_i=\left(-\infty, t_i\right]$ .

"$\impliedby$". As the first step, we shall show that

$$
P\left(X_1 \in B, \bigcap_{j=2}^n\left\{X_j \le t_j\right\}\right)
=P\left(X_1 \in B\right) \prod_{j=2}^n P\left(X_j \le t_j\right), \quad \forall B \in \operatorname{Borel}(\R)
$$


To show this, define

$$
\mathcal{B}_1=\left\{B \in \mathcal{B}: P\left(X_1 \in B, \bigcap_{j=2}^n\left\{X_j \le t_j\right\}\right)=P\left(X_1 \in B\right) \prod_{j=2}^n P\left(X_j \le t_j\right), t_j \in \mathcal{R}, 2 \le j \le n\right\} .
$$
然后这个集合包含 $\mathcal{A} = \{(-\infty, t_1] ~|~ t_1 \in \R \}$ , 并且为一个 $\lambda-$class. 由此 $\mathcal{B_1} \supseteq \sigma(\mathcal{A}) = \operatorname{Borel}(\R)$





**Theorem 5.2.5.** Let $X=\left(X_1, \cdots, X_n\right)$ be an absolutely continuous random vector with p.d.f. $f_{X_i}$. Then $X_1, \cdots, X_n$ are independent iff
$$
f_X\left(y_1, \cdots, y_n\right)=\prod_{i=1}^n f_{X_i}\left(y_i\right)
$$

for all $y_1, \cdots, y_n \in \mathcal{R}$.

**Proof.** "$\implies$" If $X_1, \cdots, X_n$ are independent, then
$$
\begin{aligned}
\prod_{i=1}^n \int_{-\infty}^{t_i} f_{X_i}\left(y_i\right) d y_i & =\prod_{i=1}^n P\left(X_i \le t_i\right)=P\left(X_1 \le t_1, \cdots, X_n \le t_n\right) \\
& =\int_{-\infty}^{t_1} \cdots \int_{-\infty}^{t_n} f_X\left(y_1, \cdots, y_n\right) d y_1 \cdots d y_n
\end{aligned}
$$


Hence,

$$
\int_{-\infty}^{t_1} \cdots \int_{-\infty}^{t_n}\left(f_X\left(y_1, \cdots, y_n\right)-\prod_{i=1}^n f_{X_i}\left(y_i\right)\right) d y_1 \cdots d y_n=0
$$

"$\impliedby$"
$$
\begin{aligned}
P\left(X_1 \le t_1, \cdots, X_n \le t_n\right) & =\int_{-\infty}^{t_1} \cdots \int_{-\infty}^{t_n} f_X\left(y_1, \cdots, y_n\right) d y_1 \cdots d y_n \\
& =\prod_{i=1}^n \int_{-\infty}^{t_i} f_{X_i}\left(y_i\right) d y_i=\prod_{i=1}^n P\left(X_i \le t_i\right)
\end{aligned}
$$

Therefore, $X_1, \cdots, X_n$ are independent.





**Theorem 5.3.5.** If $X, Y$ are independent and integrable r.v.'s, then
$$
\operatorname{Cov}(X, Y)=0 .
$$

That is, independence implies uncorrelatedness.

**Proof.** **Step 1.** If $X, Y$ are simple r.v.'s., i.e., 
$$
X=\sum_{i=1}^n a_i I_{\left\{X=a_i\right\}},\qquad Y=\sum_{j=1}^m b_j I_{\left\{Y=b_j\right\}}
$$
For simplicity, we assume that $a_i$ 's and $b_j$ 's are different. Then,
$$
\mathbb{E} X=\sum_{i=1}^n a_i P\left(\left\{X=a_i\right\}\right), \qquad \mathbb{E} Y=\sum_{j=1}^m b_j P(\{Y= \left.\left.b_j\right\}\right)
$$
Note $\displaystyle X Y=\sum_{i=1}^n \sum_{j=1}^m a_i b_j I_{\left\{X=a_i\right\} \cap\left\{Y=b_j\right\}}$ is also a discrete r.v. and
$$
\begin{aligned}
\mathbb{E}(X Y) & =\sum_{i=1}^n \sum_{j=1}^m a_i b_j P\left(\left\{X=a_i\right\} \cap\left\{Y=b_j\right\}\right) \\
& =\sum_{i=1}^n \sum_{j=1}^m a_i b_j P\left(\left\{X=a_i\right\}\right) P\left(\left\{Y=b_j\right\}\right) = \mathbb{E} X \mathbb{E} Y .
\end{aligned}
$$

**Step 2.** If $X \geq 0, Y \geq 0$, then take $X_n=\min \left(\left[2^n X\right] / 2^n, n\right)$ and $Y_n=\min \left(\left[2^n Y\right] / 2^n, n\right)$.

So $X_n$ and $Y_n$ are both simple r.v.'s and $0 \leq X_n \nearrow X$ and $0 \leq Y_n \nearrow Y$.

Therefore $\mathbb{E} X=\lim \mathbb{E} X_n$, and $\mathbb{E} Y=\lim _n \mathbb{E} Y_n$, by the Monotone Convergence Theorem.

Also $0 \leq X_n Y_n \nearrow X Y$ , $X_n$ and $Y_n$ are independent as Borel functions of $X$ and $Y$, respectively.

Now applying the Monotone Convergence Theorem, we get

$$
\mathbb{E}(X Y)=\lim _n \mathbb{E}\left(X_n Y_n\right)=\lim _n \mathbb{E}\left(X_n\right) \mathbb{E}\left(Y_n\right)=(\mathbb{E} X)(\mathbb{E} Y)
$$

**Step 3.** For general integrable r.v.'s, note that independence of $X$ and $Y$ implies that of $X^{+}$and $Y^{+}$; $X^{+}$and $Y^{-}$; and so on. Therefore,
$$
\begin{aligned}
\mathbb{E} X Y & =E\left(X^{+}-X^{-}\right)\left(Y^{+}-Y^{-}\right) \\
& = \mathbb{E}\left(X^{+} Y^{+}\right)-E\left(X^{+} Y^{-}\right)-\left(\mathbb{E} X^{-} Y^{+}\right) + \mathbb{E}\left(X^{-} Y^{-}\right) \\
& = \mathbb{E} X^{+} \mathbb{E} Y^{+} - \mathbb{E}\left(X^{+} \mathbb{E} Y^{-} - \mathbb{E} X^{-} \mathbb{E} Y^{+} + \mathbb{E} X^{-} \mathbb{E} Y^{-}\right. \\
& =\left(\mathbb{E} X^{+}-\mathbb{E} X^{-}\right)\left(\mathbb{E} Y^{+}-\mathbb{E} Y^{-}\right) \\
& =\mathbb{E} X \mathbb{E} Y .
\end{aligned}
$$
