## Lebesgue 密度定理

**引理 5.3.** 对于 $\R^d$ 中有限个开球 $\left\{B_1, B_2, \cdots, B_N\right\}$ . 存在其中的 $l$ 个互不相交的开球 $\left\{B_{n_1}, \cdots, B_{n_l}\right\}$使得
$$
m\left(\bigcup_{j=1}^N B_j\right) \le 3^d m\left(\bigcup_{i=1}^l B_{n_i}\right)
$$

**引理 5.3 推论.** 对于 $\R^d$ 中开球族 $\left\{B_\alpha, \alpha \in \Lambda\right\}$ , $\forall c < m\left(\bigcup\limits_{\alpha \in \Lambda} B_\alpha\right)$ , 存在其中的 $l$ 个互不相交的开球 $\left\{B_{n_1}, \cdots, B_{n_l}\right\}$使得
$$
c \le 3^d m\left(\bigcup_{i=1}^l B_{n_i}\right)
$$

**证明.** 可以找到紧集 $K \subseteq \bigcup\limits_{\alpha \in \Lambda} B_\alpha$ 使得 $c \le m(K)$ , 随后可以找到有限覆盖 $K \subseteq \bigcup\limits_{j=1}^N B_j$ , 由上引理即证.





**命题 5.2 (Hardy-Littlewood).** 如果 $f \in L^1$ , 那么对应的极大函数 $\displaystyle\mathcal{M} f(x) := \sup_{x \in B} \frac1{m(B)} \int_B|f| .$ 满足如下性质:
(1) $\mathcal{M}f$ 可测;

(2) 对几乎处处的 $x$ , 有 $|f(x)| \le \mathcal{M} f(x)<\infty$ .

(3) 存在常数 $A$ 使得对任意 $\alpha>0$ , 有

$$
m(\{x: \mathcal{M} f(x)>\alpha\}) \le \frac{A}\alpha\|f\|_{L^1}
$$

**证明:** (1) 对任意 $\alpha>0$ , 定义 $E_\alpha=\{x: \mathcal{M} f>\alpha\}$ . 如果 $x \in E_\alpha$ , 那么根据定义存在包含 $x$ 的开球 $B_x$ 使得
$$
\frac1{m\left(B_x\right)} \int_{B_x}|f|>\alpha .
$$

这表明 $B_x \subset E_\alpha$ , 因而 $E_\alpha$ 为开集, 故而 $\mathcal{M} f$ 可测.

(2) <u>似乎在后面的证明中并没有使用到?</u>

(3) 首先 $E_\alpha \subseteq \bigcup\limits_{x \in E_\alpha} B_x$ , 通过 Vitali 覆盖引理, 对于 $\forall c<m\left(\bigcup\limits_{x \in E_\alpha} B_x\right)$

可以找到互不相交的开球序列 $B_k,\quad k = 1,\cdots, N$ 使得
$$
c < \frac1{3^n} \sum_{k = 1}^N \left|B_k\right|
$$
由于 $\displaystyle \int_{B_k}|f(x)|~d y \ge \alpha\left|B_k\right|$ , 因此
$$
\int_{\R^n} |f|~dx \ge \int_{\bigcup\limits_{k = 1}^N B_k} |f|~dx \ge \alpha\sum_{k = 1}^N |B_k| \ge \frac{\alpha c}{3^n}
$$
由此即证.

---

**定理 5.1 [Lebesgue 微分定理]** 如果 $f \in L^1\left(\R^d\right)$ , 那么有
$$
\lim _{x \in B, m(B) \to 0} \frac1{m(B)} \int_B f=f(x) , a.e.
$$
**证明.** 对任意 $\varepsilon>0$ , 取连续函数 $g \in C_0$ 使得 $\|g-f\|_{L^1}<\varepsilon$ . 由 $g$ 的连续性, 对任意 $\varepsilon_0>0$ , 存在 $\delta>0$ 使得当 $x \in B, m(B)<\delta$ 时, 有 $|g(y)-g(x)|<\varepsilon_0$ ,  $\forall y \in B$ . 根据定义可知
$$
\begin{aligned}
\frac1{m(B)} \int_B|f(y)-f(x)|~dy & \le \frac1{m(B)} \int_B\Big(|g(y)-g(x)|+|f(y)-g(y)|\Big)~d y+|g(x)-f(x)| \\[1ex]
& \le \mathcal{M}(f-g)(x) + |g(x)-f(x)| + \varepsilon_0
\end{aligned}
$$

于是
$$
\limsup_{r \to 0} \frac1{|B(x, r)|} \int_{B(x, r)}|f(y)-f(x)|~dy \le \mathcal{M}(f-g)(x)+|g(x)-f(x)|
$$

根据 Chebyshev 定理,
$$
m( \mathcal{M}(f - g)(x) > \alpha ) \le \frac{A}\alpha\|f - g\|_{L^1} \\
m( |f(x) - g(x)|>\alpha ) \le \frac1\alpha \|f - g\|_{L^1} \\
$$
由此
$$
m\left(\limsup_{r \to 0} \frac1{|B(x, r)|} \int_{B(x, r)}|f(y)-f(x)|~dy > \varepsilon\right) \le \frac{C}\varepsilon \|f - g\|_{L^1}
$$
即证.



**推论 5.4 (Lebesgue 密度定理)** 对可测集 $E$ , 几乎所有 $E$ 中的点都是 $E$ 的密度点. 几乎所有 $E$之外的点都不是 $E$ 的密度点.

特别的考虑可测集 $E$ , 那么有
$$
\frac1{m(B)} \int \chi_E=\frac{m(B \cap E)}{m(B)}
$$


称为 $E$ 在 $B$ 中的密度. 如果有

$$
\lim _{x \in B, m(B) \to 0} \frac{m(B \cap E)}{m(B)}=1
$$

则称 $x$ 为 $E$ 的密度点(也成稠密点或者全密点).



**Remark.** 其意义在于, 如果记 $\displaystyle F(x) := \int_{[-\infty, x]} f(x)~dx$ , 则有 $F'(x) = f(x), a.e. x \in \R$ 

`Mathlib.MeasureTheory.Integral.IntervalIntegral.LebesgueDifferentiationThm` 里有

- `LocallyIntegrable.ae_hasDerivAt_integral`（全局版）
- `IntervalIntegrable.ae_hasDerivAt_integral`（区间局部版）
