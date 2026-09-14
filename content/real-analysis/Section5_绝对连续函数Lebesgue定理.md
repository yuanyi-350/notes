## 绝对连续函数的 Lebesgue 微分定理

**定义.** 我们称定义在 $[a, b]$ 上的函数 $F$ 是绝对连续函数, 如果对任意 $\varepsilon>0$ , 存在 $\delta>0$ 使得对任意两两不相交区间 $\left(a_k, b_k\right), k=1,2, \cdots, n$ 满足 $\sum\limits_{k=1}^n\left(b_k-a_k\right)<\delta$ 都有
$$
\sum_{k=1}^n\left|F\left(b_k\right)-F\left(a_k\right)\right|<\varepsilon .
$$


所有绝对连续的函数组成空间 $A C([a, b])$ .

- 显然 Lipschitz 函数是绝对连续函数 , 并且显然 $C^1$ 的连续可微函数是Lipschitz 函数.

- 绝对连续函数是有界变差函数

  **证明.** 取 $\varepsilon=1$ , 由绝对连续性, 存在 $\delta>0$ 使得当区间总长小于 $\delta$ 时, 函数值变化总和小于 1 .
  将区间 $[a, b]$ 分成 $n=\left\lceil\frac{b-a}\delta\right\rceil$ 个长度为 $\delta$ 的小区间 (最后一个可能小于 $\delta$ ). 在每个小区间上, 函数的变化不超过1, 因此全变差 $BV(f) \le n<\infty$ , 即证 $f$ 是有界变差函数.

- 处处可微函数不一定是绝对连续函数 : $f(x)= \begin{cases}x^2 \sin \frac1{x^2}, & x \in(0,1] \\ 0, & x=0 \end{cases}$ 处处可导, 但是不是有界变差函数.



**命题 5.15** 如果 $F \in A C([a, b])$ 并且 $F'=0, a.e.$ , 那么 $F$ 为常数.

**证明.** 考虑集合 $E=\left\{x \in[a, b]: F'(x)=0\right\}$ . 对于 $\forall \varepsilon > 0$ , 取 $\delta$​ 使得任意两两不相交区间 $(x_k, y_k)$ 满足 $\sum\limits_{k=1}^n\left(y_k - x_k\right) < \delta$ 都有
$$
\sum_{k=1}^n |F(y_k) - F(x_k)| < \varepsilon
$$

对任意 $x \in E$ , 存在 $h_n(x) \xrightarrow{n \to \infty} 0, $ 使得 $[x - h_n(x), x + h_n(x)] \subseteq [a, b]$ 并且 $|F(x \pm h_n(x))-F(x)| < \varepsilon h_n(x)$


因而所有闭区间 $[x - h_n(x), x + h_n(x)]$ 构成 $E$ 的 Vitali 覆盖. 由 Vitali 覆盖定理, 存在有限个不相交区间 $\left[a_k, b_k\right]=\left[x_k-h_k, x_k+h_k\right]$ 使得

$$
m\left(E \setminus \bigcup_{k=1}^n\left[x_k-h_k, x_k+h_k\right]\right) < \delta
$$
可不妨假设 $a \le a_1<b_1<a_2<b_2<\cdots<a_n<b_n \le b .$ 这样
$$
(b - b_n) + (a_1 - a) + \sum_{k = 1}^{n-1} (a_{k+1} - b_k)
\le m\left(E \setminus \bigcup_{k=1}^n [x_k-h_k, x_k+h_k]\right) < \delta
$$
因此
$$
\begin{aligned}
|F(b)-F(a)| & \le |F(b)-F(b_n)| + |F(a_1)-F(a)| + \sum_{k=1}^{n-1} |F(a_{k+1}) - F(b_k)| + \sum_{k=1}^n |F(b_k) - F(a_k)| \\
& \le \varepsilon(b - a) + |F(b)-F(b_n)| + |F(a_1)-F(a)| + \sum_{k = 1}^{n-1} |F(a_{k+1})-F(b_k)| \\
& \le \varepsilon(b - a) + \varepsilon
\end{aligned}
$$


最后一步是根据绝对连续性, 至此即知 $F(b)=F(a)$ .



**定理 5.13 (微积分基本定理).** 如果 $F \in A C([a, b])$ , 那么 $F$ 几乎处处可微, 并且导数 $F' \in L^1([a, b])$ 满足
$$
F(x)-F(a)=\int_{[a, x]} F'
$$

由于绝对连续函数必定是有界变差函数, 而有界变差函数可写成两个单调增函数的差, 因而由单调函数的可微性便知绝对连续函数几乎处处可微, 并且导数可积. 这样可定义

$$
\tilde{F}(x)=F(a)+\int_{[a, x]} F'
$$


再由 Lebesgue 微分定理可知

$$
\tilde{F}'=F', \text { a.e. }
$$

注意到 $F, \tilde{F}$ 均为绝对连续函数, 根据命题 5.15 知 $F - \tilde{F}$ 为常数.



**Corllary.** TFAE

(1) $f \in AC[a, b]$

(2) $\exist g \in L^1$ 使得 $\displaystyle f(x)=f(a)+\int_a^x g(t)~dt$
(3) $f'$ 几乎处处存在并且 $f' \in L^1$ 满足 $\displaystyle f(x) = f(a) + \int_a^x f'(y)~dy$

**证明.** 上面证明了 (1) $\implies$ (3) , 然后根据积分的绝对连续性即知 (2) $\implies$ (1)

(3) $\implies$ (2) 和 (2) $\implies$ (1) 显然成立.





**命题 5.18.** 如果 $F$ 在 $[a, b]$ 实值函数, 对任意 $E \subset[a, b]$ , 如果 $F$ 在 $E$ 上可微并且 $\left|F'\right|_E \le M$ , 那么有
$$
m^*(F(E)) \le M m^*(E)
$$

**证明.** **Step1.** 先证明当 $E$ 为零测集时, 命题成立. 即证 $F(E)$ 也为零测集. 定义
$$
E_n=\left\{x \in E:|F(y)-F(x)| \le(M+\varepsilon)|y-x|, \forall|y-x|<\frac1n\right\} .
$$


由条件可知 $E_n$ 单调升到 $E$ , 故而 $F\left(E_n\right)$ 单调升到 $F(E)$ . 只需证 $F\left(E_n\right)$ 为零测集即可. 由于 $E_n$ 为零测集, 可以找到可数个不相交的开区间 $J_{n, k}$ 使得

$$
E_n \subset \bigcup J_{n, k}, \quad \sum m\left(J_{n, k}\right)<\varepsilon .
$$


而对于任意 $x, y \in E_n \cap J_{n, k}$ 有 $|F(x)-F(y)| \le(M+\varepsilon)|x-y| .$ 这样有

$$
m^*\left(F\left(E_n\right)\right) \le \sum m^*\left(F\left(E_n \cap J_{n, k}\right)\right) \le \sum(M+\varepsilon) m\left(J_{n, k}\right) \le \varepsilon(M+\varepsilon) .
$$


由 $\varepsilon$ 的任意性可知 $F\left(E_n\right)$ 为零测集, 因而 $F(E) = \bigcup F\left(E_n\right)$ 也为零测集.

**Step2.** 固定任意 $\varepsilon>0$ , 首先存在开集 $B$ 使得 $E \subset B$ 并且 $m(B)<m^*(E)+\varepsilon$ . 对任意 $x \in E$ , 存在 $\delta>0$ 使得
$$
\frac{F(x+h)-F(x)}h \le M+\varepsilon, \quad \forall|h| \le \delta .
$$


这表明 $x$ 能被任意小的区间 $[x-h, x+h] \subseteq B$ 盖住. 因而这些区间构成 $E$ 的 Vitali 覆盖, 故存在可数个不相交的区间 $I_k=\left[x_k-h_k, x_k+h_k\right] \subseteq B$ 使得

$$
m^*\left(E \setminus \bigcup_{k=1}^\infty I_k\right)=0, \quad \sum_{k=1}^\infty m\left(I_k\right) \le m^*(B) < m^*(E)+\varepsilon .
$$


在区间 $I_k := [y_k, z_k]$ 上有

$$
\begin{aligned}
m^*(F(I_k)) & \le|F(y_k) - F(z_k)| \le |F(y_k) - F(x_k)| + |F(x_k)-F(z_k)| \\
& \le(M+\varepsilon) (|y_k - x_k| + |x_k - z_k|) \le 2(M+\varepsilon) h_k
\end{aligned}
$$
已经有
$$
m^*(F(E)) \le m^*\left(F\left(E \cap \bigcup_{k = 1}^n I_k\right)\right) + m^*\left(F\left(E \setminus \bigcup_{k = 1}^n I_k\right)\right)
$$
前者
$$
m^*\left(F\left(E \cap \bigcup I_k\right)\right)\le \sum m^*\left(F\left(E \cap I_k\right)\right) \le (M+\varepsilon) \sum m\left(I_k\right)
\le (M+\varepsilon)\left(m^*(E)+\varepsilon\right) .
$$


后者中 $E \setminus \bigcup I_k$ 为零测集, 根据引理即证.



**引理.** $[a, b]$ 上的可测函数 $f$ , 在有限测度的可测集 $E$ 上处处可微, 则 $\displaystyle m^*(f(E)) \le \int_E\left|f'\right|$

**证明.** $\forall \varepsilon>0$ , 定义 $E_k=\left\{x \in E:(k-1) \varepsilon \le\left|f'(x)\right|<k \varepsilon\right\}$ , 于是
$$
\begin{aligned}
m^*(f(E)) & =m^*\left(\bigcup_{k=1}^\infty f\left(E_k\right)\right) \le \sum_{k=1}^\infty m^*\left(f\left(E_k\right)\right) \\
& \le \sum_{k=1}^\infty k \varepsilon \cdot m\left(E_k\right)=\sum_{k=1}^\infty(k-1) \varepsilon\left|E_k\right|+\sum_{k=1}^\infty \varepsilon\left|E_k\right| \\
& \le \sum_{k=1}^\infty \int_{E_k}\left|f'\right|+\varepsilon|E|=\int_E\left|f'\right|+\varepsilon|E| .
\end{aligned}
$$


令 $\varepsilon \to 0$ 即证.



**定理 5.17.** 如果 $F$ 在 $[a, b]$ 上处处可微, 并且 $F'$ 可积, 那么 $F$ 是绝对连续函数, 因而
$$
\int_a^b F'(x)~dx=F(b)-F(a)
$$
[`intervalIntegral.integral_deriv_eq_sub`](https://leanprover-community.github.io/mathlib4_docs/Mathlib/MeasureTheory/Integral/IntervalIntegral/FundThmCalculus.html#intervalIntegral.integral_deriv_eq_sub)

**证明.** 只需要证明 $\displaystyle |F(b)-F(a)| \le \int_a^b\left|F'\right|~dx$ , 随后根据积分的绝对连续性知 $F$ 连续明所欲证. 而这个不等式正是引理.



**Banach-Zarecki 定理** TFAE

(1) $f \in A C(a, b)$

(2) $f \in C[a, b] \cap B V[a, b]$ , $\forall$ null set $Z \in[a, b]$ 均有 $f(Z)$ null set.

(3) $f$ 连续且几乎处处可导, 并且 $f' \in L^1([a, b])$ , $\forall$ null set $Z \subseteq [a, b]$ , $f(Z)$ null set.









