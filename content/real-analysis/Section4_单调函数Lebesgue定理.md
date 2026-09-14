## 单调函数的 Lebesgue 微分定理

**定义.** 我们称 $\mathcal{B}=\left\{B_\alpha, B_\alpha\right.$ 为 $\R^d$ 中的闭球 $\}$ 为 $\R^d$ 中的集合 $E$ 的 Vitali 覆盖, 如果对任意 $x \in E$以及 $\eta>0$ 存在 $B_\alpha \in \mathcal{B}$ 使得 $x \in B_\alpha, m\left(B_\alpha\right)<\eta$ . 换言之, $E$ 中的点被任意小的球盖住.

**定理 5.16 (Vitali).** $E \subseteq \R^d$ 满足 $m^*(E)<\infty$ , 且 $\mathcal{B}$ 是 $E$ 的一个Vitali覆盖. 证明存在 $\mathcal{B}$ 中可数个互不相交的闭球 $\left\{B_j\right\}$ 使得
$$
m^*\left(E \backslash \bigcup_j B_j\right)=0 .
$$

因此也存在有限个两两不交的球 $B_1, B_2, \cdots, B_n$ 使得
$$
m^*\left(E \setminus \bigcup_{k=1}^n B_k\right)<\delta
$$
**Remark.** 这里并没有要求 $\bigcup\limits_j B_j \subseteq E$ , 所以并不能通过 $m^*\left(E \backslash \bigcup_j B_j\right)=0$ 说明 $E$ 可测.

**证明.** 首先由于 $m^*(E)<\infty$ , 取开集 $U \supset E$ 使得 $m(U)<\infty$ . 无妨设 $\mathcal{B}$ 中的球均包含于 $U$ 并且所有球半径小于 $1$.

采用归纳构造 : 假设已进行 $k$ 步, 得到互不相交的有限球集 $S_k= \bigcup\limits_{j=1}^k B_j$ , 定义候选球集合:
$$
\mathcal{F}_k=\left\{B \in \mathcal{B}: B \cap S_k=\emptyset\right\}
$$

如果 $\mathcal{F}_k=\emptyset$ , 这意味着 $U$ 中任意一个球都与 $S_k$ 相交. 对于任意 $x \in E \backslash S_k$ , 由于 $S_k$ 是闭集, 所以 $x$ 与 $S_k$ 有正距离, 存在 $B \in \mathcal{B}$ 使得 $x \in B$ 且 $B$ 足够小从而 $B \cap S_k=\emptyset$ . 这与 $\mathcal{F}_k=\emptyset$ 矛盾. 因此, 此时必然有 $E \subseteq S_k$ , 即证.

如果 $\mathcal{F}_k \neq \emptyset$ . 令 $M_k=\sup \left\{r(B): B \in \mathcal{F}_k\right\}$ , 选取 $B_{k+1} \in \mathcal{F}_k$ 满足:
$$
r\left(B_{k+1}\right)>\frac12 M_k=\frac12 \sup \left\{r(B): B \in \mathcal{B}, B \cap S_k=\emptyset\right\}
$$


如果这个过程能无限进行下去, 得到一个可数无穷互不相交的球列 $\left\{B_k\right\}_{k=1}^\infty$ .

$$
\sum_{k=1}^\infty m\left(B_k\right)=m\left(\bigcup_{k=1}^\infty B_k\right) \le m(U)<\infty
$$

> **Claim.** $\displaystyle E \setminus \bigcup_{k=1}^N B_k \subseteq \bigcup_{l=N+1}^\infty 5 B_l$
>
> **Proof.** 对于 $x \in$ 左, 由于 $\bigcup\limits_{k=1}^N B_k$ 是闭集, 存在 $B_x \in \mathcal{B}$ 使得 $x \in B_x$ 以及 $B_x \cap S_k = \varnothing$
>
> 下证 $B_x$ 必定与某个 $k>N$ 的球 $B_k$ 相交. 反证法 : 假设不成立, 那么在每一步中 $B_x$ 始终属于候选集合 $\mathcal{F}_k$ . 根据选取规则:
> $$
> r\left(B_{k+1}\right)>\frac12 \sup _{B \in \mathcal{F}_k} r(B) \ge \frac12 r\left(B_x\right), \qquad k \ge 1
> $$
>
> 这与前面 $\sum\limits_{k=1}^\infty m\left(B_k\right) < \infty$ 矛盾! 因此设 $l$ 是满足 $B_x \cap B_l \neq \emptyset$ 的最小下标, 有 $l \ge N+1$ .
>
> 由于 $\mathcal{F}_l$ 里仍包含候选球 $B_x$ , 因此 $r\left(B_l\right)>\frac12 r\left(B_x\right)$ , 即证 $B_x \subset 5 B_l$ , 至此 Claim 得证.


对 Claim 两边取外测度:
$$
m^*\left(E \backslash \bigcup_{k=1}^\infty B_k\right) \le \sum_{l=N+1}^\infty m\left(5 B_l\right)=5^d \sum_{l=N+1}^\infty m\left(B_l\right)
$$


由于级数 $\sum\limits_{k = 1}^\infty m\left(B_k\right)$ 收敛, 当 $N \to \infty$ 时, 余项 $\sum\limits_{l=N+1}^\infty m\left(B_l\right) \to 0$.  因此 $m^*\left(E \backslash \bigcup\limits_{k=1}^\infty B_k\right)=0$ 证毕.



---

**引理 5.8** 如果 $F$ 是定义在 $[a, b]$ 上的单调增函数, 那么 $F(x)-J_F(x)$ 为连续单调增函数.

**命题 5.9** 假设 $J(x)$ 为跳跃函数, 那么 $J(x)$ 几乎处处的导数为 0 .



**命题 5.11.** 如果 $F$ 是定义在闭区间 $[a, b]$ 上的单调增有界函数, 那么
$$
D^+(F)(x)<\infty, a.e. \qquad D^+(F)(x) \le D_-(F)(x) , a.e.
$$

特别的如果考虑 $-F(-x)$ 可知 $D^-(F) \le D_+(F)(x), a.e.$ . 这样可推出 $D^+ \le D_- \le D^- \le D_+, a.e.$, 因而四个 Dini 导数几乎处处相等, 也就是 $F(x)$ 几乎处处可微.

**证明.** 对任意 $\gamma>0$ 定义集合 $E_\gamma=\left\{x \in[a, b]: D^+(F)(x)>\gamma\right\}$

**Step1.** 由于 $F$ 单调增当 $h \in\left[\frac1{n+1}, \frac1n\right]$ 时
$$
\frac{n}{n+1} \frac{F\left(x+\frac1{n+1}\right)-F(x)}{\frac1{n+1}} \le \frac{F(x+h)-F(x)}h \le \frac{n+1}n \frac{F\left(x+\frac1n\right)-F(x)}{\frac1n}
$$


因而根据定义有

$$
D^+(F)(x)=\limsup _{h \to 0, h>0} \frac{F(x+h)-F(x)}h=\limsup _{n \to \infty} \frac{F\left(x+\frac1n\right)-F(x)}{\frac1n}
$$

这就表明 $D^+(F)$ 是可测函数, 故而 $E_\gamma$ 是可测集.

**Step2.** 对于 $x \in E_\gamma$ 存在充分小的 $h>0$ 使得 $F(x+h)-F(x) \ge \gamma h$ .

即得 $\left\{ [x, x + h_l]  \quad| x \in E_\gamma, l \in \N \right\}$ 构成 $E_\gamma$ 的 Vitali 覆盖, 其中 $h_l \to 0$

根据 Vitali 定理, 存在 $[x_1, x_1 + l_1], \cdots, [x_n, x_n + l_n]$ 互不相交使得 $m^*\left(E_\gamma \setminus \bigcup\limits_{j = 1}^n [x_j, x_j + l_j] \right) < \varepsilon$ , 有

$$
\sum_{j = 1}^n [f(x_j + l_j) - f(x_j)] \ge \gamma \sum_{j = 1}^n l_j
$$
即证 $|f(b) - f(a)| \ge \gamma (m^*(E_\gamma) - \varepsilon)$, 令 $\varepsilon \to 0$ 即证 $|f(b) - f(a)| \ge \gamma m^*(E_\gamma)$

**Step3.** 只需要证明对任意的有理数 $s < r$ , 集合 $A_{r, s} = \left\{x \in[a, b]: D^+(F)(x) > r > s > D_-(F)(x)\right\}$ 为零测集即可.

记 $A := A_{r, s}$ , 假如 $m^*(A) \ne 0$, 则 $\forall \varepsilon > 0$ 均存在开集 $G \supseteq A$ 并且 $m(G) < (1 + \varepsilon) m^*(A)$

注意到 $\forall x \in A, D_-(x) < s$, 即知 $\liminf_{h \to 0^+} \dfrac{f(x) - f(x - h)}h < s$.

取 $h_n(x) > 0$ 使得 $h_n(x) \xrightarrow{n \to \infty}0$ 并且 $[x - h_n(x), x] \subseteq G$ , 于是 $\Gamma = \{ [x - h_n(x), x], x \in A, n \in \Z^+ \}$ 是 $A$ 的一个Vitali覆盖. 根据 Vitali 覆盖定理, 即知存在 $[x_1 - h_1, x_1], \cdots, [x_n - h_n, x_n]$ 使得 $m^*\left( A \setminus \bigcup\limits_{k = 1}^n [x_k - h_k, x_k] \right) < \varepsilon$

注意到 $\dfrac{f(x_k) - f(x_k - h_k)}{h_k} < s$, 因此

$$
\sum_{k = 1}^n \left( f(x_k) - f(x_k - h_k) \right) < s \sum_{k = 1}^n h_k < s m(G) < s (1 + \varepsilon) m^*(A)
$$

**Lemma.** $f$ 在 $[a, b]$ 上单调增, 则对于 $r \in \R$ 有
$$
m^*\left(x \in (a, b), D^+f(x) > r\right) \le \frac1r (f(b) - f(a))
$$
**Proof.** 记 $B:= \{x \in (a, b), D^+f(x) > r\}$ , 注意到 $\forall x \in B, D_+(x) > r$, 即知 $\limsup\limits_{h \to 0^+} \dfrac{f(x + h) - f(x)}h > r$

取 $l_n(x) > 0$ 使得 $l_n(x) \xrightarrow{n \to \infty}0$ 并且 $[x - l_n(x), x] \subseteq (a, b)$ , 于是 $\Gamma = \{ [x - l_n(x), x], x \in B, n \in \Z^+ \}$ 是 $B$ 的一个Vitali覆盖. 根据 Vitali 覆盖定理, 即知存在 $[x_1 - l_1, x_1], \cdots, [x_n - l_n, x_n]$ 使得 $m^*\left( B \setminus \bigcup\limits_{k = 1}^n [x_k - l_k, x_k] \right) < \varepsilon$

也就是 $m^*(B) < m^*\left(\bigcup\limits_{k = 1}^n [x_k - l_k, x_k]\right) + \varepsilon$ , 注意到 $\dfrac{f(x_k + l_k) - f(x_k)}{l_k} > r$, 因此
$$
f(b) - f(a) \ge \sum_{k = 1}^n \left( f(x_k + l_k) - f(x_k) \right) > r \sum_{k = 1}^n l_k > r (m^*(B) - \varepsilon)
$$

令 $\varepsilon \to 0$ 即证.

**回到原题,** 令 $B = A \cap (x_k - h_k, x_k)$ 然后有 $m^*(B) > m^*(A) - \varepsilon$, 于是
$$
B \subseteq \bigcup_{k = 1}^n \left\{ y \in (x_k - h_k, x_k), D^+f(y) > r \right\}
$$
根据Lemma 即知
$$
m^*\left( y \in (x_k - h_k, x_k), D^+f(y) > r \right) < \frac{f(x_k) - f(x_k - h_k)}r
$$
因此 $m^*(B) \le \sum\limits_{k = 1}^n \dfrac{f(x_k) - f(x_k - h_k)}r$ , 进而的带
$$
r (m^*(A) - \varepsilon) \le m^*(B) \le \sum_{k = 1}^n \left(f(x_k) - f(x_k - h_k)\right) \le s (1 + \varepsilon) m^*(A)
$$
再令 $\varepsilon \to 0$ 即知 $r m^*(A) \le s m^*(A)$ 推出要么 $r \le s$, 要么 $m^*(A) = 0$, 二者均矛盾!






**定理 5.7 (单调函数的 Lebesgue 微分定理).** $F$ 是定义在 $[a, b]$ 上的单调递增函数, 那么导数 $F'(x)$几乎处处存在, 并且是非负 Lebesgue 可积的满足
$$
\int_{[a, b]} F'(x) \le F(b)-F(a)
$$

**证明.** 有了这些准备, 我们现在就可以证明单调增函数的 Lebesgue 微分定理: 上面讨论说明 $F$ 几乎处处可微, 并且 $F'$ 非负.


为此延拓 $F$ 到整个实轴使得 $F(x)=F(a), x<a, F(x)=F(b), x>b$ . 在考虑函数 $f_n(x)=n\left(F\left(x+\tfrac1n\right)-F(x)\right)$ 可知 $f_n(x) \to F'(x), a.e.$ 根据定义 $f_n(x)$ 非负, 故可用 Fatou 引理

$$
\begin{aligned}
\int_{[a, b]} F'(x)~dx & \le \liminf _{n \to \infty} \int_{[a, b]} n\left(F\left(x+\frac1n\right)-F(x)\right)~dx \\
& \le \liminf _{n \to \infty} n\left(\frac{F(b)}n-\int_a^{a+\frac1n} F(x)~dx\right) \\
& \le F(b)-F(a)
\end{aligned}
$$


最后一步由于

$$
F(a) \le n \int_a^{a+\frac1n} F(x)~dx
$$

**例子.** 对于Contor-Lebesgue 函数 $\Phi$ , 其导数几乎处处为 $0$. 此时不等号是严格的.





**引理 5.12 (Riesz 日出引理).** 假设 $G$ 是 $\R$ 上的实值连续函数, 定义 $E=\{x: \exists h>0$ s.t. $G(x+h)>$ $G(x)\}$ . 那么 $E$ 是开集, 因而可以写成可数个开区间的并 $E=\bigcup_{k=1}^\infty\left(a_k, b_k\right)$.

并且如果 $\left(a_k, b_k\right)$ 是**有限的开区间**那么有 $G\left(a_k\right)=G\left(b_k\right)$ . 特别的如果 $G$ 只是定义在某个闭区间 $[a, b]$ 上, 那么结论仍然成立, 只是对于 $a_k=a$ 的情形有 $G(a) \le G\left(b_k\right)$ .

**证明:** 对任意 $x \in E$ , 存在 $h>0$ 使得 $G(x+h)>G(x)$ .

由于 $G$ 的连续性可知存在 $\delta>0$使得对任意 $|y-x|<\delta$ 有 $|G(y)-G(x)|<\frac12(G(x+h)-G(x))$.

特别的对任意 $|y-x|<\min \{\delta, h\}$有 $G(x+h)>G(y)$ , 故而根据定义有 $y \in E$ . 即证 $E$ 是开集.

现在假设 $(a, b) \subset E$ 是 $E$ 中的一个极大开区间, 即是 $a \notin E, b \notin E$. 根据定义显然有 $G(a) \ge G(b)$.

如果 $G(a)>G(b)$ , 由于 $b \notin E$ , 故而有 $G(x) \le G(b), \forall x>b$ . 取足够小的 $0<\varepsilon<b-a$ 使得 $G(a+\varepsilon)>G(b)$ . 考虑 $G$ 在区间 $[a+\varepsilon, b]$ 上的极大值点 $x_\varepsilon$ , 由条件可知 $G(b)<G\left(x_\varepsilon\right) \le G(a)$ .

由于 $x_\varepsilon \in[a+\varepsilon, b)$ 因而根据定义存在 $h>0$ 使得 $G\left(x_\varepsilon+h\right)>G\left(x_\varepsilon\right)$.

由于 $G(x) \le G(x), \forall x>b$ , 这就表明 $x_\varepsilon+h \in(a+\varepsilon, b)$与 $x_\varepsilon$ 在 $[a+\varepsilon, b]$ 上取极大值矛盾.

---

**引理.** 设 $E\subseteq (a,b)$ 且 $m(E)=0$ , 则存在单增连续函数 $f$ 满足对一切 $x\in E$, 有 $f'(x)=+\infty$

**证明.** 因为 $m(E)=0$, 所以对每个 $n\in\mathbb N$, 存在开集 $G_n$ 使得 $E\subset G_n, m(G_n)<2^{-n}.$

对每个 $n$ 定义 $f_n(x)=m\big((a,x)\cap G_n\big)$ , 显然 $f_n$ 单调递增并且 $f_n$ 连续

令 $f(x)=\sum\limits_{n=1}^\infty f_n(x)$ , 由于对所有 $x$, $0\le f_n(x)\le m(G_n)<2^{-n}$ , 所以 $\sum f_n$ 一致收敛. 因此 $f$ 单增连续.

固定 $x\in E$. 因为 $x\in G_n$ 且 $G_n$ 是开集, 存在 $\delta_n>0$ 使得当 $0<h<\delta_n$ 时, $(x,x+h)\subseteq G_n.$

于是对 $0<h<\delta_n, f_n(x+h)-f_n(x)=m(x,x+h)=h.$

给定任意 $N\in\mathbb N$, 取 $\delta=\min(\delta_1,\dots,\delta_N).$ 当 $0<h<\delta$ 时,
$$
\begin{aligned}
f(x+h)-f(x)
&=\sum_{n=1}^\infty\big(f_n(x+h)-f_n(x)\big) \\
&\ge \sum_{n=1}^N\big(f_n(x+h)-f_n(x)\big)
 =\sum_{n=1}^N h =Nh
\end{aligned}
$$
因此, $\frac{f(x+h)-f(x)}h\ge N.$ 所以 $f'(x) = \lim\limits_{h\to 0^+}\frac{f(x+h)-f(x)}h=+\infty,$ 即在 $x\in E$ 上 $f'(x)=+\infty$.

**定理 (Fubini Differentiation).** 设 $f_n$ 在 $[a,b]$ 上递增, 且级数 $f(x)=\sum\limits_{n=1}^\infty f_n(x)$ 在 $[a,b]$ 上逐点收敛. 则有
$$
\frac{d}{dx}\Big(\sum_{n=1}^\infty f_n(x)\Big)=\sum_{n=1}^\infty f_n'(x) \quad a.e. x \in (a,b).
$$

**证明.** 令部分和 $S_N(x)=\sum\limits_{n=1}^N f_n(x),$ 尾和 $R_N(x)=\sum\limits_{n=N+1}^\infty f_n(x)=f(x)-S_N(x).$ 有 $f(x)=S_N(x)+R_N(x)$

注意到 $f'(x)=S_N'(x)+R_N'(x), a.e.$ 以及 $S_N'(x)=\sum\limits_{n=1}^N f_n'(x), a.e.$ 只需证 $R_N'(x)\xrightarrow{N\to\infty}0\quad a.e.$ 

根据 Fatou 引理, 有
$$
\int_a^b \liminf_{N\to\infty} R_N'(x)~dx
\le \liminf_{N\to\infty}\int_a^b R_N'(x)~dx 
\le \liminf_{N\to\infty}\big(R_N(b)-R_N(a)\big) \to 0
$$
至此即知 $\lim\limits_{N\to\infty}R_N'(x) = 0, a.e.$

