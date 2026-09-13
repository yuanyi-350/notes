**Lagrange 插值** : 选取基函数 $l_i\left(x_j\right)=\delta_{i j}= \begin{cases}1, & i=j \\ 0, & i \neq j\end{cases}$ , 即 $l_i(x)=\dfrac{\prod_{j=0, j \neq i}^n\left(x-x_j\right)}{\prod_{j=0, j \neq i}^n\left(x_i-x_j\right)}, \quad i=0,1, \cdots, n$

$$
L_n(x)=\sum_{i=0}^n y_i \cdot l_i(x) .
$$
**Newton 插值** :
$$
f\left[x_i, x_{i+1}, \cdots, x_{i+k}\right] \triangleq \frac{f\left[x_{i+1}, x_{i+2}, \cdots, x_{i+k}\right]-f\left[x_i, x_{i+1}, \cdots, x_{i+k-1}\right]}{x_{i+k}-x_i}
$$

$$
N_n(x)= f\left[x_0\right]+f\left[x_0, x_1\right]\left(x-x_0\right)+\cdots +f\left[x_0, x_1, \cdots, x_n\right]\left(x-x_0\right)\left(x-x_1\right) \cdots\left(x-x_{n-1}\right) .
$$

**误差估计** : 为了估计 $f(x) - N_n(x)$ , 只需在 $N_n(x)$ 的基础上构造一个辅助函数 $G$ 使得在 $x_0, \cdots, x_n, x$ 点处均为 $0$, 不断用 Rolle 定理.

记 $R(t) = f(t) - N_n(t)$ , 令
$$
G(t) = R(t) - R(x) \frac{(t - x_0)\cdots(t - x_n)}{(x - x_0)\cdots(x - x_n)}
$$
$G^{(n + 1)}$ 存在零点, 即
$$
R^{(n + 1)}(\xi) - R(x)\cdot \frac{(n + 1)!}{(x - x_0)\cdots(x - x_n)} = 0
$$
其中 $R^{(n + 1)}(\xi) = f^{(n + 1)}(\xi)$ 从而算出 $R(x) = f^{(n + 1)}(\xi) \cdot \dfrac{(x - x_0)\cdots (x - x_n)}{(n + 1)!}$

**总结. 估计 $t$ 处的误差, 在误差函数的基础上微调, 构造一个辅助函数, 使得其在 $t, x_1, \cdots, x_n$ 处均为零点, 然后不断用 Rolle 定理.**

---

**等距节点高次插值的不稳定性 :**

考查等距插值点列 $x_{-n}<x_{-n+1}<\cdots<x_{-1}<x_0<x_1<\cdots<x_n,$ 这里 $x_{i+1}-x_i=h(i=-n, \cdots, n-1)$

其中一个 Lagrange 插值基函数
$$
l_0(x)=\frac{\prod_{j \neq 0}\left(x-x_j\right)}{\prod_{j \neq 0}\left(x_0-x_j\right)} .
$$


取 $x^*=x_n-\frac{h}2$ , 则 $\left|l_0\left(x^*\right)\right|=\frac{U}L$ , 这里

$$
\begin{aligned}
& U=h^{2 n} \cdot \frac1{2^{2 n}} \cdot(2 n-3)!!\frac{(4 n-1)!!}{(2 n-1)!!} \\
& L=h^{2 n} \cdot(n!)^2
\end{aligned}
$$


由 Stirling 公式 $n!\sim \sqrt{2 \pi} n^{n+\frac12} \mathrm{e}^{-n}$ , 得到

$$
\begin{aligned}
\left|l_0\left(x^*\right)\right| & =\frac{U}L=\frac{(4 n)!}{2^{4 n}(n!)^2(2 n)!} \cdot \frac1{2 n-1} \\
& \sim \frac{(4 n)^{4 n+\frac12} \mathrm{e}^{-4 n}}{2 \pi 2^{4 n} n^{2 n+1} \mathrm{e}^{-2 n}(2 n)^{2 n+\frac12} \mathrm{e}^{-2 n}} \cdot \frac1{2 n-1} \to+\infty
\end{aligned}
$$
由于插值函数值不可避免存在误差, 设 $\bar{y}_i=y_i+\varepsilon_i$ 为扰动后的值, 而 $\bar{P}_n(x)$ 为以 $\bar{y}_0, \bar{y}_1, \cdots, \bar{y}_n$ 为插值函数值的多项式, 则

$$
f(x)-\bar{P}_n(x)=f(x)-P_n(x)+\left[P_n(x)-\bar{P}_n(x)\right] .
$$


而 $P_n(x)-\bar{P}_n(x)=-\sum\limits_{j=-n}^n \varepsilon_j l_j(x)$ . 不妨设 $\varepsilon_0 \neq 0$ , 其他 $\varepsilon_j=0$ , 得到

$$
\left[f(x)-P_n(x)\right]-\left[f(x)-\bar{P}_n(x)\right]=\varepsilon_0 l_0(x) .
$$


由前推导, $l_0\left(x^*\right)$ 非常大, 从而 $\varepsilon_0 l_0\left(x^*\right)$ 也非常大. 这表明即使是函数值的微小扰动也将带来插值函数的巨大变化, 误差会充分放大.

---

定义Lebesgue函数 $\lambda_n(x) = \sum\limits_{j=0}^n |l_j(x)|$. 定义Lebesgue常数 $\Lambda_n(X)$ 是Lebesgue函数在区间上的最大值:
$$
\Lambda_n(X) = \max_{x \in [a,b]} \sum_{j=0}^n |l_j(x)|
$$
将多项式插值视为一个线性算子 $I_n$. 它将一个<font : color = Red>**连续函数**</font> $f$ 映射为一个 $n$ 次多项式:

$$
I_n(f)(x) = \sum_{j=0}^n f(x_j)l_j(x)
$$

这里 $l_j(x)$ 就是拉格朗日基函数.



**定理.** 插值算子 $I_n$ 的无穷范数恰好就等于 Lebesgue 常数:

**证明.** **Step1.** 证明 $\|I_n\|_\infty \le \Lambda_n(X)$

对于任意一个在 $[a,b]$ 上的连续函数 $f(x)$, 其插值多项式为 $(I_n f)(x) = \sum\limits_{j=0}^n f(x_j) l_j(x)$

对等式两边取绝对值, 并利用三角不等式:

$$
\begin{aligned}
|(I_n f)(x)| &= \left| \sum_{j=0}^n f(x_j) l_j(x) \right| \le \sum_{j=0}^n |f(x_j)| |l_j(x)| \le \|f\|_\infty \sum_{j=0}^n |l_j(x)| \\[1ex]
&\le \|f\|_\infty \lambda_n(x) \le \|f\|_\infty \Lambda_n(X) \\[1ex]
&\le \Lambda_n(X) \|f\|_\infty
\end{aligned}
$$

**Step2.** 证明 $\|I_n\|_\infty \ge \Lambda_n(X)$

只需构造连续函数 $f^*(x)$, 使得到 $\|I_n f^*\|_\infty = \Lambda_n(X) \cdot \|f^*\|_\infty$

设连续函数 $\lambda_n(x)$ 在闭区间 $[a,b]$ 上的 $x^*$ 取得最大值, 有 $\lambda_n(x^*) = \sum\limits_{j=0}^n |l_j(x^*)| = \Lambda_n(X)$

规定目标函数 $f^*$ 在各个插值节点 $x_j$ 上的取值为 $f^*(x_j) = \text{sgn}(l_j(x^*)) \in \{\pm1\}$

再用直线段将这些点 $(x_j, f^*(x_j))$ 连接起来(即分段线性插值), 并在两端保持常数延伸到边界 $a$ 和 $b$.

有 $\|f^*\|_\infty \le 1$ 然后把 $f^*(x)$ 代入插值算子
$$
\begin{aligned}
(I_n f^*)(x^*) &= \sum_{j=0}^n f^*(x_j) l_j(x^*) = \sum_{j=0}^n \text{sgn}(l_j(x^*)) l_j(x^*) \\
&= \sum_{j=0}^n |l_j(x^*)| = \lambda_n(x^*) = \Lambda_n(X)
\end{aligned}
$$

即知 $\|I_n f^*\|_\infty \ge |(I_n f^*)(x^*)| = \Lambda_n(X)$ , 再回到算子范数的定义:
$$
\|I_n\|_\infty = \sup_{\|f\|_\infty \le 1} \|I_n f\|_\infty \ge \frac{\|I_n f^*\|_\infty}{\|f^*\|_\infty} = \Lambda_n(X)
$$





**定理.** $E_n(f, X) \triangleq \|f - I_n f\|_\infty$ 是实际构造的插值多项式 $I_n f$ 的最大误差.

设 $P_n^*$ 为 $f$ 的最佳一致逼近多项式, 其误差记为 $E_n^* = \|f - P_n^*\|_\infty$.
$$
\begin{aligned}
\|f - I_n f\|_\infty &\le \|f - P_n^*\|_\infty + \|I_n(P_n^* - f)\|_\infty \\[1ex]
&\le \|f - P_n^*\|_\infty + \|I_n\|_\infty \|P_n^* - f\|_\infty \\[1ex]
&\le E_n^* + \Lambda_n(X) E_n^* = E_n^*(1 + \Lambda_n(X))
\end{aligned}
$$

