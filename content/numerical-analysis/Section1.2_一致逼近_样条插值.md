**Hermite 样条插值** : 传入 $x_0, \cdots, x_n$ 的 $f$ 值, 和 $f'$ 值. 只能做到 $C^1$

**三次样条插值** : 传入 $x_0, \cdots, x_n$ 的 $f$ 值. 能做到 $C^2$

三次样条的讨论见 : **数值分析上机1**



书上三次样条插值已知f函数值 $y_0, y_1, \cdots, y_n$ , 待定**<font : color=Red>二阶导</font>** $M_0, M_1, \cdots, M_n$ , 而非一阶导

这样基函数自然为 $x^3, (1 - x)^3, x, 1- x$ ; 相比 Hermite 插值的基函数简单不少. 对应的函数为

$$
S_i(x) = \frac{M_i (1 - x)^3}6 + \frac{M_{i + 1} x^3}6 + \left(y_i - \frac{M_i}6\right)(1 - x) + \left(y_{i+1} - \frac{M_{i + 1}}6\right)x
$$



最佳平方逼近多项式, 把 $P \in \mathbb{P}_k$ 写成 $P(x)=c_0 b_0(x)+c_1 b_1(x)+\cdots+c_k b_k(x),$

$$
\int_a^b|P(x)-f(x)|^2 \mathrm{~d} x
= \int_a^b\left[c_0 b_0(x)+\cdots+c_k b_k(x)-f(x)\right]^2 \mathrm{~d} x
$$
求最小值只需对每个 $c_k$ 求偏导, 即知
$$
\sum_{i=0}^k\left[\int_a^b b_i(x) b_j(x) \mathrm{d} x\right] c_i=\int_a^b f(x) b_j(x) \mathrm{d} x, \quad j=0,1, \cdots, k
$$

其中系数矩阵是对称的.

----

**[Weisterstrass 逼近定理](https://leanprover-community.github.io/mathlib4_docs/Mathlib/Topology/ContinuousMap/Weierstrass.html).** 设 $f \in C[a, b]$ 则 $\forall \varepsilon>0. \exists$  多项式 $p(x)$ 使得 $\|f-p\|_\infty \le \varepsilon$ .

**证明.** 设 $[a, b]=[0,1]$ , 令 $p_n(x)=\sum\limits_{k=0}^n C_n^k x^k(1-x)^{n k} f\left(\frac{k}n\right)$ , 往证 $\left\|p_n-f\right\|_\infty \to 0$ .

令 r.v. $X$ 满足 $\mathbb{P}(X)=\left\{\begin{array}{cl}x, & x=1 \\ 1-x, & x=0\end{array} \quad x \in(0,1)\right.$ , 即服从两点分布 $\operatorname{Ber}(x)$.

令 $\bar{X}_n=\frac1n \sum\limits_{k=0}^n X_k . \quad X_k \stackrel{\text { iid.}}{\sim} \operatorname{Ber}(x)$ , 则 $p_n(x)=\mathbb{E} f(\bar{X}_n)$ , 而 $f(x)=f(\mathbb{E} X)$ .
$$
\left|p_n(x)-f(x)\right|=\left|\mathbb{E} f(\bar{X}_n)-f(\mathbb{E} X)\right| = \left|\mathbb{E}[f(\bar{X}_n)-f(x)]\right|
$$


根据 Chebyshev 不等式,  $\mathbb{P}(|z - \mu| \ge \delta) \le \dfrac1{\delta^2} \mathbb{E}\left(|z-\mu|^2\right), \mu=\mathbb{E}z$ .

$$
\implies \mathbb{P}\left(\left|\bar{X}_n-x\right| \ge \delta\right) \le \frac1{\delta^2} \operatorname{Var}\left(\bar{X}_n\right) = \frac1{\delta^2 n^2} \cdot n \cdot \operatorname{Var}(X)=\frac1{n \delta^2} \cdot x(1-x) \le \frac1{4n\delta^2} \sim O\left(\frac1n\right)
$$

因为 $f$ 在有界闭区间 $[0, 1]$ 上连续, 所以一致连续且有界.

假设 $\forall \varepsilon > 0$ , 存在 $\delta > 0$, 使得当 $|y - x| < \delta$ 时, 有 $|f(y) - f(x)| < \frac\varepsilon2$. 并且 $|f(x)| \le M$
$$
\begin{aligned}
|p_n(x) - f(x)|
&= \left| \mathbb{E}[f(\bar{X}_n) - f(x)] \right| \le \mathbb{E}\left|f(\bar{X}_n) - f(x) \right| \\
&= \mathbb{E}\left[ |f(\bar{X}_n) - f(x)| \cdot I(|\bar{X}_n - x| < \delta) \right] + \mathbb{E}\left[ |f(\bar{X}_n) - f(x)| \cdot I(|\bar{X}_n - x| \ge \delta) \right] \\
&< \frac\varepsilon2 \mathbb{E}[I(A)] + 2M \cdot \frac1{4n\delta^2}
\le \frac\varepsilon2 + \frac{M}{2n\delta^2}
\end{aligned}
$$
取充分大的 $n$ 即可.



记最大绝对误差 $\Delta(p) = \|p - f\|_\infty$ , 误差函数 $\varepsilon_p(x) = p(x) - f(x)$

**定义.** 如果多项式 $p_n^*(x) \in \mathbb{P}_n$, 使得 $\forall p(x) \in \mathbb{P}_n$, 都满足 $\Delta (p_n^*) \le \Delta (p)$. $p_n^*(x)$ 就被称为 $f(x)$ 在区间 $[a, b]$ 上的 $n$ 次最佳一致逼近多项式.



**Vallée-Poussin 定理.** 设 $\varepsilon_p(x)$ 在 $x_1<x_2<\cdots<x_N$ 上取值为正负相间, 为 $\lambda_1,-\lambda_2, \lambda_3, \cdots,(-1)^{N+1} \lambda_N \quad\left(\lambda_j>0\right)$ 且 $N \ge n+2$ . 则对于所有的 $n$ 次多项式 $q \in \mathbb{P}_n$, 都有其最大误差
$$
\Delta(q) \ge \min\{\lambda_1, \lambda_2, \dots, \lambda_N\}
$$
**证明.** 若不然, 存在多项式 $q(x) \in \mathbb{P}_n$ 使得 $\Delta(q) < \min\{\lambda_1, \lambda_2, \dots, \lambda_N\}$.

在每一个交错点 $x_j$ 上, 必定有 **$|\varepsilon_q(x_j)| < \lambda_j$**.

定义一个 $D(x) = p(x) - q(x) \in \mathbb{P}_n$. 同时
$$
D(x) = p(x) - q(x) = [p(x) - f(x)] - [q(x) - f(x)] = \varepsilon_p(x) - \varepsilon_q(x)
$$
考虑其在 $x_1, \cdots, x_N$ 上的取值, 有 $D\left(x_j\right)=(-1)^{j+1} \lambda_j-\varepsilon_q\left(x_j\right)$

注意 $\left|\varepsilon_q\left(x_j\right)\right|<\lambda_j$ 知 $\varepsilon_p\left(x_j\right)-\varepsilon_q\left(x_j\right)$ 符号与 $\varepsilon_p\left(x_j\right)$ 相同.

因此 $p-q$ 在 $[a, b]$ 上有至少 $N-1 \ge n+1$ 个零点. 故 $p=q$ . 矛盾！



**Chebyshev Equioscillation 定理.**  $p_n(x)$ 是 $f(x)$ 在 $[a, b]$ 上的最佳一致逼近多项式, 当且仅当在区间 $[a, b]$ 上存在 $n+2$ 个点 $x_0 < x_1 < x_2 < \dots < x_{n+1}$, 使得误差函数在这些点上达到最大绝对值 $E$, 并且符号交错. 即
$$
e(x_i) = \pm (-1)^i E, \quad (i = 0, 1, 2, \dots, n+1)
$$
其中误差函数为 $e(x) = f(x) - p(x)$. 最大逼近误差记为
$$
E = \|e(x)\|_\infty = \max_{x \in [a, b]} |e(x)|
$$
**证明.** "$\impliedby$" : 直接套用 Vallée-Poussin 定理, 对于空间 $\mathbb{P}_n$ 中的任意一个多项式 $q(x)$,
$$
\Delta(q) \ge  \min\{E, E, \dots, E\} = E
$$
"$\implies$" 反证法, 假设误差函数 $e(x)$ 达到最大绝对值 $E$ 的交错点最多只有 $m$ 个, 且 $m \le n+1$.

找到 $m-1$ 个分界点 $z_1 < z_2 < \dots < z_{m-1}$, 将区间 $[a, b]$ 划分为 $m$ 个子区间. 在每个子区间内, 误差函数 $e(x)$ 要么只达到 $+E$, 要么只达到 $-E$, 并且相邻区间的极端符号是相反的.

构造 $q(x) = \sigma \cdot\prod\limits_{k=1}^{m-1} (x - z_k)$ , 其次数 $\le n$, $\sigma \in \{\pm1\}$ 待定

取 $\sigma = \pm 1$ 使得在每个区间 $(z_k, z_{k + 1})$ 内 $q(x)$ 的符号与 $e$ 极致点的符号一致, 即如果 $e(x)$ 在 $(z_k, z_{k + 1})$ 中取到 $E$, 则 $q(x)$ 在 $(z_k, z_{k + 1})$ 内恒正, 反之同理 $e(x)$ 在区间内取到 $-E$ 则 $q(x)$ 在区间内恒负.

现在待定 $\lambda > 0$, 构造一个新的逼近多项式 $r(x) = p(x) + \lambda q(x)$ 次数 $\le n$

来证明只要 $\lambda$ 足够小, $r(x)$ 是比 $p(x)$ 更好的逼近多项式. 新的误差函数为:
$$
e^*(x) = e(x) - \lambda q(x)
$$
选取一个足够小的 $\varepsilon > 0$, 使得在 $|e(x)| > E - \varepsilon$ 的区域内, $q(x)$ 的符号与 $e(x)$ 始终相同.

- 在 $|e(x)| > E - \epsilon$ 的区域内,
  $$
  |e^*(x)| = |e(x)| - \lambda |q(x)| \le E - \lambda \min_{x \in A} |q(x)| < E
  $$

- 剩余的 $|e(x)| \le E - \varepsilon$ 区域内,
  $$
  |e^*(x)| \le |e(x)| + \lambda |q(x)| \le E - \varepsilon + \lambda \max_{x \in [a, b]} |q(x)|
  $$

综上, 只需  $\lambda$ 足够小, 即可始终有 $|f(x) - r(x)| < E$, 这与 $p$ 的最优性假设矛盾! 由此即证.





**定理.** 下面证明 $P_n^*(x)$ 是存在且唯一的

**证明.** "**存在性**" 设 $f(x) \in C[a, b]$, 不超过 $n$ 次的多项式空间记为 $\mathbb{P}_n$.

任意 $P(x) \in \mathbb{P}_n$ 可以表示为 $P(x) = a_0 + a_1x + \dots + a_nx^n$ . 定义 $F : \R^{n + 1} \to \R$ 为
$$
F(a_0, a_1,\cdots, a_n) = \|f(x) - \left(a_0 + a_1x + \dots + a_nx^n\right)\|_\infty
$$
往证这一个连续函数: 因为任意两个系数向量 $A$ 和 $B$, 对应多项式 $P(x)$ 和 $Q(x)$
$$
\begin{aligned}
|F(A) - F(B)| &= \left| \|f - P\|_\infty - \|f - Q\|_\infty \right| \le \|P - Q\|_\infty \\
&= \max_{x \in [a, b]} \left| \sum_{i=0}^n (a_i - b_i)x^i \right| \le \sum_{i=0}^n |a_i - b_i| \max_{x \in [a, b]} |x^i|
\end{aligned}
$$
显然, 当 $A \to B$ 时, 上述误差趋于 0. 因此, $F(A)$ 是关于变量 $(a_0, a_1, \dots, a_n)$ 的多元连续函数.

因为当 $\|A\| \to \infty$ 时, $F(A) \to \infty$. 故存在 $M$ 使得 $\forall \|A\| > M$ 均有 $F(A) > F(0)$

因此, 寻找 $F(A)$ 的全局最小值, 等价于在紧集 $S := B(0, M)$ 上寻找最小值. 存在性得证.

"**唯一性**" : 假设存在两个不同的最佳一致逼近多项式 $P(x), Q(x) \in \mathbb{P}_n$, 它们具有相同的最大误差 $E$
$$
\|f - P\|_\infty = \|f - Q\|_\infty = E
$$
令 $R(x) = \frac12[P(x) + Q(x)]$. 显然 $R(x) \in \mathbb{P}_n$. 考察 $R(x)$ 的误差:

$$
|f(x) - R(x)| \le \frac12|f(x) - P(x)| + \frac12|f(x) - Q(x)| \le \frac12 E + \frac12 E = E
$$
因为 $E$ 已经是最小误差, 所以 $R(x)$ 的最大误差也必须恰好等于 $E$. 这意味着 $R(x)$ 也是一个最佳一致逼近多项式.

根据切比雪夫交错定理, 在区间 $[a, b]$ 上存在 $n+2$ 个交错极值点 $x_0 < x_1 < \dots < x_{n+1}$ 使得:

$$
f(x_i) - R(x_i) = \pm E \quad \text{(符号交错)}
$$
将 $R(x)$ 的定义代入这 $n+2$ 个点:

$$
\frac{[f(x_i) - P(x_i)] + [f(x_i) - Q(x_i)]}2 = \pm E
$$
注意到 $|f(x_i) - P(x_i)| \le E, |f(x_i) - Q(x_i)| \le E$. 因此必然有
$$
f(x_i) - P(x_i) = f(x_i) - Q(x_i) = \pm E
$$
因此在这 $n+2$ 个交错点上 $P(x_i) = Q(x_i), \quad (i = 0, 1, \dots, n+1)$

即多项式 $H(x) = P(x) - Q(x)$ 在 $[a, b]$ 上至少有 $n+2$ 个根.

但是, 由于 $P(x), Q(x) \in \mathbb{P}_n$, 它们的差 $H(x)$ 次数 $\le n$. 因此 $H(x) = 0$, 即 $P(x) \equiv Q(x)$, 与假设矛盾！即证唯一性.





**Chebyshev 多项式.** 在所有 $n$ 次首一多项式 $P_n(x) = x^n + a_{n-1}x^{n-1} + \dots + a_0$ 中, 最大绝对值最小的是 Chebyshev 多项式

**证明.** 问题转化为在多项式空间 $\mathbb{P}_{n-1}$ 中, 寻找一个多项式 $Q_{n-1}^*(x)$, 使得它在 $[-1, 1]$ 上对 **$f(x) = x^n$** 的一致逼近误差达到最小.

考察 $e^*(x) = \tilde{T}_n(x) = \frac1{2^{n-1}} T_n(x)$, 验证其在 $[-1, 1]$ 上至少拥有 $n+1$ 个极值点, 且在这些点上误差达到最大绝对值并正负交错.

考察 $e^*(x)$ 的极值点. 因为 $T_n(x) = \cos(n \arccos x)$, 它在 $[-1, 1]$ 上的极值点恰好是:
$$
x_k = \cos\left(\frac{k\pi}n\right), \quad k = 0, 1, 2, \dots, n
$$
把这 $n+1$ 个点代入误差函数 $e^*(x)$:
$$
e^*(x_k) = \frac1{2^{n-1}} \cos\left(n \cdot \frac{k\pi}n\right) = \frac1{2^{n-1}} \cos(k\pi) = (-1)^k \frac1{2^{n-1}}
$$
- 误差的最大绝对值为 $E = \frac1{2^{n-1}}$.
- 在这 $n+1$ 个点上, 误差的取值分别为 $\frac1{2^{n-1}}, -\frac1{2^{n-1}}, \frac1{2^{n-1}}, \dots$ 正负交错

根据 Chebyshev 交错定理的充分性, 证毕.
