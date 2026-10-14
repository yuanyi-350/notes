| Measure                  | Probability          |
| :----------------------- | :------------------- |
| Integral                 | Expectation          |
| Measurable set           | Event                |
| Measurable function      | Random variable      |
| Almost everywhere (a.e.) | Almost surely (a.s.) |

**Theorem 4.1.3** $X_n \ge 0, Y_n \ge 0$ are simple r.v.'s and $X_n \nearrow X, Y_n \nearrow X$. Then
(1) $\lim\limits_{n \to \infty} \mathbb{E} X_n$ and $\lim\limits_{n \to \infty} \mathbb{E} Y_n$ exist.
(2) $\lim\limits_{n \to \infty} \mathbb{E} X_n=\lim\limits_{n \to \infty} \mathbb{E} Y_n$.

**Proof.** (1) $X_n \nearrow X \implies \mathbb{E} X_n \le \mathbb{E} X_{n+1} \implies \lim\limits_{n \to \infty} E X_n$ exists (maybe $\infty$ ). Similarly, $\lim\limits_{n \to \infty} \mathbb{E} Y_n$ exists.
(2) Given $k \ge 1, Y_k$ is simple and $Y_k \le X$. If we can show that
$$
\forall k \ge 1: \quad \mathbb{E} Y_k \le \lim_n \mathbb{E} X_n,
$$

which implies that $\lim _k \mathbb{E} Y_k \le \lim _n \mathbb{E} X_n$. By symmetry, $\lim _k \mathbb{E} Y_k \ge \lim _n \mathbb{E} X_n$. This proves the theorem.

Proof of (1.2). Fix $\varepsilon>0$ and $k \ge 1$. For each $n$, define $A_n=\left\{X_n>Y_k-\varepsilon\right\}$, which is measurable. Note that

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

#### 矩母函数

定义矩母函数 $M_X(\lambda) := \mathbb{E}\left[e^{\lambda X}\right]$, 定义 $\psi(\lambda)=\log \mathbb{E}\left[e^{\lambda(X-\mathbb{E}[X])}\right] = \log M_X(\lambda) - \mathbb{E}[X]$

**注意.** 矩母函数不一定处处有定义, 例如 $X \sim \operatorname{Exp}(1)$ 时, $M_X(\lambda)=\int_0^\infty e^{\lambda x} e^{-x}~dx=\frac1{1-\lambda}, \quad \lambda<1$. 但当 $\lambda \ge 1$ 时, 积分发散.



**性质.** 假设矩母函数在 \((-a,a)\) 内有限, 则 $M_X^{(k)}(\lambda)=\mathbb E[X^ke^{\lambda X}], \qquad |\lambda| < a$

**证明.** 因为 \(|\lambda|<a\), 可以选取 \[ |\lambda|<b<c<a. \]

- 对 $k$ 归纳, 当 $k = 1$ 时归纳奠基, 由导数定义,

$$
M_X'(\lambda) =\lim_{h\to0}\frac{M_X(\lambda+h)-M_X(\lambda)}h =\lim_{h\to0} \mathbb E\left[e^{\lambda X}\frac{e^{hX}-1}h\right].
$$

记 \[ Y_h=e^{\lambda X}\frac{e^{hX}-1}h. \] 显然逐点有 \[ Y_h\longrightarrow Xe^{\lambda X}. \] 只需找一个与 \(h\) 无关的可积控制函数.

有 \[ |Y_h|\le\frac1{e(c-b)}e^{c|X|}. \] 而 \[ \mathbb E[e^{c|X|}] \le M_X(c)+M_X(-c)<\infty. \]

因此, 控制收敛定理保证 \[ M_X'(\lambda) =\mathbb E\left[\lim_{h\to0}Y_h\right] =\mathbb E[Xe^{\lambda X}]. \]

- $k - 1 \to k$, 若 \[ M_X^{(k-1)}(\lambda)=\mathbb E[X^{k-1}e^{\lambda X}], \] 则对应差商的被积函数是 \[ X^{k-1}e^{\lambda X}\frac{e^{hX}-1}h, \]

它逐点趋于 \(X^ke^{\lambda X}\), 且绝对值满足 \[ \left|X^{k-1}e^{\lambda X}\frac{e^{hX}-1}h\right| \le |X|^ke^{b|X|} \le C_k e^{c|X|}. \] 同样由控制收敛定理即证.

**推论.** 令 \(\lambda=0\), 得到生成矩的公式 \[ M_X^{(k)}(0)=\mathbb E[X^k]. \]



#### 常见不等式

常见不等式估计

1. **Markov** : $X \ge 0, t>0: P(X \ge t) \le \frac{\mathbb{E}[X]}t$

2. **Chebyshev** :  $P(|X-\mathbb{E} X| \ge t) \le \frac{\operatorname{Var}(X)}{t^2}$ , 只多项式量级衰减, 比较弱

3. **Chernoff 技巧** : 对任意 $\lambda>0$ , 事件 $\{X \ge t\}=\left\{e^{\lambda X} \ge e^{\lambda t}\right\}$ , 再套 Markov :
   $$
   P(X \ge t) \le e^{-\lambda t} \mathbb{E}\left[e^{\lambda X}\right] \quad \implies \quad P(X \ge t) \le \inf _{\lambda>0} e^{-\lambda t} M_X(\lambda)
   $$

4. **Hoeffding's lemma.** Assume $a \le X \le b$. Then, $\psi(\lambda) \le \lambda^2(b-a)^2 / 8$.
   **Proof.** WLOG, assume that $\mathbb{E}[X]=0$. Recall that $\psi(\lambda)=\log \mathbb{E}\left[e^{\lambda X}\right]$. (利用调整法, 最大值取值时必然全在 $a, b$.) 根据凸函数
   $$
   e^{\lambda X} \le \frac{b-X}{b-a} e^{\lambda a}+\frac{X-a}{b-a} e^{\lambda b} \implies \mathbb{E} e^{\lambda X} \le \frac{b}{b-a} e^{\lambda a}-\frac{a}{b-a} e^{\lambda b} .
   $$

   后面平凡

   **Hoeffding's inequality.** Let $X_1, \cdots, X_n$ be i.i.d. random variables. If $a \le X_i \le b$, then,
   $$
   P\left\{\left|\frac1n \sum_{i=1}^n X_i-\mu\right| \ge t\right\} \le 2 e^{-\frac{2 n t^2}{(b-a)^2}} .
   $$
   **Proof.** We have

	$$
	\begin{aligned}
	  P\left\{\frac1n \sum_{i=1}^n X_i \ge t\right\} & =P\left\{e^{\lambda \sum_{i=1}^n} \ge e^{n \lambda t}\right\} \le \frac{\mathbb{E}\left[e^{\lambda \sum_{i=1}^n X_i}\right]}{e^{n \lambda t}} \\
	  & =e^{-n \lambda t} \prod_{i=1}^n \mathbb{E}\left[e^{\lambda X_i}\right]=e^{-n \lambda t+n \psi(\lambda)},
	  \end{aligned}
	$$
	  where $\psi(\lambda)\le \lambda^2(b - a)^2 / 8 .$ Therefore,

	$$
	  P\left\{\frac1n \sum_{i=1}^n X_i \ge t\right\} \le \inf _{\lambda>0} e^{-n \lambda t+n \psi(\lambda)}=\inf _\lambda e^{-n\left(\lambda t-\lambda^2 / 2\right)}=e^{-n t^2 / 2} .
	$$
