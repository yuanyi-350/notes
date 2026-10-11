| Measure                  | Probability          |
| :----------------------- | :------------------- |
| Integral                 | Expectation          |
| Measurable set           | Event                |
| Measurable function      | Random variable      |
| Almost everywhere (a.e.) | Almost surely (a.s.) |

**Theorem 4.1.3** $X_n \geq 0, Y_n \geq 0$ are simple r.v.'s and $X_n \nearrow X, Y_n \nearrow X$. Then
(1) $\lim\limits_{n \to \infty} \mathbb{E} X_n$ and $\lim\limits_{n \to \infty} \mathbb{E} Y_n$ exist.
(2) $\lim\limits_{n \to \infty} \mathbb{E} X_n=\lim\limits_{n \to \infty} \mathbb{E} Y_n$.

**Proof.** (1) $X_n \nearrow X \implies \mathbb{E} X_n \leq \mathbb{E} X_{n+1} \implies \lim\limits_{n \to \infty} E X_n$ exists (maybe $\infty$ ). Similarly, $\lim\limits_{n \to \infty} \mathbb{E} Y_n$ exists.
(2) Given $k \geq 1, Y_k$ is simple and $Y_k \leq X$. If we can show that
$$
\forall k \geq 1: \quad \mathbb{E} Y_k \leq \lim_n \mathbb{E} X_n,
$$

which implies that $\lim _k \mathbb{E} Y_k \leq \lim _n \mathbb{E} X_n$. By symmetry, $\lim _k \mathbb{E} Y_k \geq \lim _n \mathbb{E} X_n$. This proves the theorem.

Proof of (1.2). Fix $\varepsilon>0$ and $k \geq 1$. For each $n$, define $A_n=\left\{X_n>Y_k-\varepsilon\right\}$, which is measurable. Note that

---

$$
\begin{aligned}
\operatorname{Var}(X) &:= \mathbb{E}(X-\mathbb{E} X)^2 = \mathbb{E}X^2 - (\mathbb{E} X)^2 \\
\operatorname{Cov}(X, Y) &:= \mathbb{E}(X-\mathbb{E} X)(Y-\mathbb{E} Y) = \mathbb{E}XY - \mathbb{E} X \mathbb{E} Y
\end{aligned}
$$

其中特别的, $\operatorname{Var}(X) = \operatorname{Cov}(X, X)$

协方差定义动机 : 
$$
\begin{aligned}
\operatorname{Var} (X_1 + X_2 + \cdots + X_n)
&= \mathbb{E}(X_1 + \cdots + X_n)^2 - (\mathbb{E}(X_1 + \cdots + X_n))^2 \\
&= \sum_{i = 1}^n \sum_{j = 1}^n (\mathbb{E} X_iX_j - \mathbb{E}X_i \mathbb{E}X_j) 
= \sum_{i = 1}^n \sum_{j = 1}^n \operatorname{Cov}(X_i, X_j)
\end{aligned}
$$

---

**(Law of the Unconscious Statistician, LOTUS)** d.f. 相同的函数拥有一样的期望, 这是因为p.d.f. 可以当成一种测度 :
$$
\mathbb{E}[g(X)]=\int_{-\infty}^\infty g(x) f(x)~dx
$$
**Proof.** 只需证 $\displaystyle\int_\Omega g(X(\omega)) d P(\omega)=\int_{\R} g(x) f(x)~dx$

证明是标准的实变技巧, 特征函数 $\to$ 简单函数 $\to$ 可测函数. 对于特征函数 $1_A$
$$
\mathbb{E}[g(X)]=\mathbb{E}\left[1_A(X)\right]=P(X \in A) =\int_A f(x)~dx = \int_{\R} 1_A(x) f(x)~dx
$$

后面的根据线性性和 Beppo Levi 渐升引理即证.

**Example.** If $X > 0$ has p.d.f. $p(x)$, Then
$$
\begin{aligned}
\mathbb{E}X &= \int_\R X ~dP = \int_0^\infty m(X > x)~dx = \int_0^\infty \int_x^\infty p(y)~dy ~dx = \int_0^\infty xp(y) ~dx \\
\operatorname{Var}[X] &= \int_{-\infty}^{+\infty} (x - \mu)^2 p(x)~dx
\end{aligned}
$$
**Example 1.6.1.** If $X$ has an exponential distribution with rate 1 then
$$
E X^k=\int_0^\infty x^k e^{-x}~dx=k!
$$

**Example.** r.v. $X$ have d.f. $F$, then
$$
\begin{aligned}
\int_0^\infty(1-F(x))~dx & =\int_0^\infty P(X>x)~d x \\
& =\int_0^\infty\left[\int_\Omega \mathbb{I}_{\{X(\omega)>x\}} d P(\omega)\right]~d x \\
& \xlongequal{\text{ Tonelli }} \int_\Omega\left[\int_0^\infty \mathbb{I}_{\{x<X(\omega)\}}~dx\right]~d P(\omega) \\
& =\int_\Omega\left[\int_0^{X(\omega)} 1~d x\right] d P(\omega) \\
& =\int_\Omega X(\omega) d P(\omega) = E[X]
\end{aligned}
$$


---



