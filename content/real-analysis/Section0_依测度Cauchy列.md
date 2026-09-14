**周民强定义3.7** 设 $\{f_k(x)\}$ 是 $E$ 上几乎处处有限的可测函数列. 如果 $\forall \varepsilon > 0, \forall \delta > 0$, 存在足够大的 $N_k$ 使得 $\forall k,j > N_k$ 均有

$$
m\left(\left\{x \in E:\left|f_k(x)-f_j(x)\right|>\varepsilon\right\}\right) < \delta
$$

则称 $\left\{f_k(x)\right\}$ 为 $E$ 上的依测度 Cauchy 列.

**周民强定理 3.16** 若 $\left\{f_k(x)\right\}$ 是 $E$ 上的依测度 Cauchy 列, 则在 $E$ 上存在几乎处处有限的可测函数 $f(x)$ , 使得 $\left\{f_k(x)\right\}$ 在 $E$ 上依测度收敛于 $f(x)$ .

**证明 :** $\forall i$ , 存在 $k_i > k_{i - 1}$ , 使得 $\forall l, j \ge k_i$ 时, 令
$$
E_i := \left\{x \in E:\left|f_{k_i}(x)-f_{k_{i+1}}(x)\right| \ge \frac1{2^i}\right\}  \text{ 有 } m(E_i) < \frac1{2^i}
$$

则 $m\left(E_i\right) < 2^{-i}$. 考虑 $S = \limsup E_i$, 易知 $m(S) \le m(\bigcup\limits_{i=j}^\infty E_i) \le \frac1{2^{j - 1}}$, 从而 $m(S) = 0$

对于 $x \notin S$, $\exist j$ s.t. $x \in E \setminus \bigcup\limits_{i = j}^\infty E_i$ . 从而当 $i \ge j$ 时, 有 $\left|f_{k_{i+1}}(x)-f_{k_i}(x)\right|<2^{-i}$. 于是有
$$
\sum_{i = j}^\infty\left|f_{k_{i+1}}(x)-f_{k_i}(x)\right| \le \frac1{2^{j-1}}
$$

即证级数 $f(x) := f_{k_1}(x) + \sum\limits_{i=1}^\infty |f_{k_{i+1}}(x) - f_{k_i}(x)|$ 在 $E \setminus S$ 上绝对收敛.

因此 $f$ 是 $E$ 上几乎处处有限的可测函数.

易知 $\left\{f_{k_i}(x)\right\}$ 在 $E \setminus \bigcup\limits_{i=j}^\infty E_i$ 上是一致收敛于 $f(x)$ 的. 由于 $m\left(\bigcup\limits_{i=j}^\infty E_i\right) \le \frac1{2^{j-1}}$, 于是 $\left\{f_{k_i}\right\} \xrightarrow{a.u.} f$ 以及不等式
$$
\begin{aligned}
&m(\{x \in E: |f_k(x)-f(x)| \ge \varepsilon\}) \\
\le &m(\{x \in E:|f_k(x)-f_{k_i}(x)| \ge \frac\varepsilon2\}) + m(\{x \in E : |f_{k_i}(x)-f(x)| \ge \frac\varepsilon2\})
\end{aligned}
$$


可得 $\lim\limits_{k \to \infty} m(\{x \in E : |f_k(x)-f(x)| \ge \varepsilon\})=0$ 即证.



**Riesz 定理** 若 $\left\{f_k(x)\right\}$ 在 $E$ 上依测度收敛于 $f(x)$ , 则存在子列 $\left\{f_{k_i}(x)\right\}$ , 使得
$$
\lim _{i \to \infty} f_{k_i}(x)=f(x), \quad \text { a. e. } x \in E .
$$
证明 因为 $\left\{f_k(x)\right\}$ 依测度收敛于 $f(x)$ , 所以 $\left\{f_k(x)\right\}$ 是依测度 Cauchy 列. 从而由上述定理的证明可知, 存在子列 $\left\{f_{k_i}(x)\right\}$ 以及可测函数 $g(x)$ , 使得

$$
\lim _{i \to \infty} f_{k_i}(x)=g(x), \quad \text { a. e. } x \in E,
$$

而且 $\left\{f_{k_i}(x)\right\}$ 也是依测度收敛于 $g(x)$ 的. 但按假设, $\left\{f_{k_i}(x)\right\}$ 应依测度收敛于 $f(x)$ , 从而知 $f(x)$ 与 $g(x)$ 对等.




**周民强定理 6.5** $L^1(E)$ 是完备的距离空间.

**证明 :** 我们需要证明对于 Cauchy 列 $f_k$, 一定存在极限.

注意到, $L^1$ 的 Cauchy 列必然是依测度 Cauchy 列, 仿照上述证明 :

取子列 $f_{k_l}$ 使得 $\left\|f_{k_l}-f_{k_{l-1}}\right\| \leq 2^{-l}, \quad l \geq 2$

定义函数

$$
f=f_{k_1}+\left(f_{k_2}-f_{k_1}\right)+\left(f_{k_3}-f_{k_2}\right)+\ldots
$$

上述证明已说明 $f$ 是 $E$ 上几乎处处有限的可测函数.

可知

$$
\int_E|f| \leq \int_E\left|f_{k_1}\right|+\left|f_{k_2}-f_{k_1}\right|+\left|f_{k_3}-f_{k_2}\right|+\ldots<\infty
$$

这表明 $f \in L^1(E)$ 并且 $f_{k_l} \xrightarrow{L^1} f$ . 而 $f_k$ 是 Cauchy 列, 故 $f_k \xrightarrow{L^1} f$ .

