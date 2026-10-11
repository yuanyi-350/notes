### 特征函数



**Definition 10.0.1** The characteristic function (c.f.) for a random variable (r.v.) $X$ in $\R$ with distribution function (d.f.) F is defined to be
$$
\psi_X(t) := \mathbb{E} e^{i t X} = \int_{-\infty}^\infty e^{i t x}~d F(x) = \mathbb{E} [\cos (t X)+i \sin (t X)]
$$



**动机.** 计算两个独立 r.v. $X$ 和 $Y$ 之和 $Z = X + Y$ 的分布时, 若直接在 p.d.f. 空间内进行, 需要计算卷积
$$
f_Z(z) = \int_{-\infty}^\infty f_X(x) f_Y(z-x)~dx
$$
而通过傅里叶变换的 c.f. 即转变为
$$
\varphi_{X+Y}(t) = \mathbb{E}[e^{it(X+Y)}] = \mathbb{E}[e^{itX}]\mathbb{E}[e^{itY}] = \varphi_X(t)\varphi_Y(t)
$$

**应用(随机变量矩的计算).** 设 $\mathbb{E}|X|^n<\infty$ , 则对 $k=1, \cdots, n, \psi_X^{(k)}(0)=i^k \mathbb{E} X^k$ .

**引理.** 矩的降阶存在性 : 已知 $\mathbb{E}|X|^n < \infty$ , 对于任意正整数 $1 \le k \le n$, 均有 $\mathbb{E}|X|^k < \infty$.

**引理证明.** 首先有 $|X|^k \le |X|^n + 1$ , 这是因为当 $|X| \le 1$ 时显然成立, $|X| > 1$ 时, $|X|^k \le |X|^n$

**证明.** 来证明更一般的结论: 对于 $k=1, \dots, n$, $\psi_X^{(k)}(t) = \mathbb{E}[(iX)^k e^{itX}]$. 下面对 $k$ 来归纳

**归纳奠基. ** $k=1$
$$
\psi_X'(t) = \lim_{h \to 0} \frac{\psi_X(t+h) - \psi_X(t)}h = \lim_{h \to 0} \mathbb{E} \left[ \frac{e^{i(t+h)X} - e^{itX}}h \right] = \lim_{h \to 0} \mathbb{E} \left[ e^{itX} \frac{e^{ihX} - 1}h \right]
$$
需要验证交换极限 $\lim\limits_{h \to 0}$ 与期望 $\mathbb{E}$ 合法, 即 Lebesgue 控制收敛定理(DCT) .

记 $Y_h = e^{itX} \dfrac{e^{ihX} - 1}h$ , 显然有逐点收敛 $\lim\limits_{h \to 0} Y_h = e^{itX} \cdot iX, \quad a.s.$ 和控制函数
$$
|Y_h| = |e^{itX}| \cdot \frac{|e^{ihX} - 1|}{|h|} \le 1 \cdot \frac{|hX|}{|h|} = |X|
$$

至此 DCT 的条件均满足, 交换极限 $\lim\limits_{h \to 0}$ 与期望 $\mathbb{E}$ 合法

$k -1 \to k$ , 假设对于 $k-1$ 阶导数, 积分与求导交换成立, 即:
$$
\psi_X^{(k-1)}(t) = \mathbb{E}[(iX)^{k-1} e^{itX}]
$$
现在考察第 $k$ 阶导数的差商:

$$
\psi_X^{(k)}(t) = \lim_{h \to 0} \frac{\psi_X^{(k-1)}(t+h) - \psi_X^{(k-1)}(t)}h = \lim_{h \to 0} \mathbb{E} \left[ (iX)^{k-1} e^{itX} \frac{e^{ihX} - 1}h \right]
$$
记 $Z_h = (iX)^{k-1} e^{itX} \frac{e^{ihX} - 1}h$. 同样验证控制收敛定理的条件, 逐点收敛
$$
\lim_{h \to 0} Z_h = (iX)^{k-1} e^{itX} (iX) = (iX)^k e^{itX}
$$
并且存在控制函数
$$
|Z_h| = |iX|^{k-1} \cdot |e^{itX}| \cdot \frac{|e^{ihX} - 1|}{|h|} \le |X|^{k-1} \cdot 1 \cdot \frac{|hX|}{|h|} = |X|^k
$$
至此, 通过数学归纳法证明了对所有 $k=1, \dots, n$, $\psi_X^{(k)}(t) = \mathbb{E}[(iX)^k e^{itX}]$ 均成立.

在通用情形中令 $t=0$ 即证 $\psi_X^{(k)}(0) = i^k \mathbb{E}[X^k]$.



**例子.** 求标准正态分布 $N(0,1)$ 的 c.f.

**证明.** 设 $X \sim N(0,1)$, 其概率密度函数为 $p(x) = \frac1{\sqrt{2\pi}} e^{-x^2/2}$. 根据上面的结果
$$
\begin{aligned}
\psi_X'(t) &= \int_{-\infty}^\infty ix e^{itx} \frac1{\sqrt{2\pi}} e^{-\frac{x^2}2}~dx \\
&= \frac{i}{\sqrt{2\pi}} \left[ -e^{itx} e^{-\frac{x^2}2} \right]_{x=-\infty}^{x=\infty} - \frac{i}{\sqrt{2\pi}} \int_{-\infty}^\infty \left( -e^{-\frac{x^2}2} \right) \cdot \left( it e^{itx} \right)~dx \\
&= -t \int_{-\infty}^\infty e^{itx} \frac1{\sqrt{2\pi}} e^{-\frac{x^2}2}~dx
\end{aligned}
$$
即得 $\psi_X'(t) = -t \psi_X(t)$ , 解得 $\psi_X(t) = e^{-\frac{t^2}2}$.





### 弱收敛

**定义 3.8.18 (Lévy 连续性定理)** 设 $\mu, \mu_1, \mu_2, \cdots$ 均为概率分布, 对应的分布函数依次记为 $F(\cdot), F_1(\cdot),F_2(\cdot), \cdots$ .若 $F_n \xrightarrow{\mathrm{w}} F$ , 则称 $\mu_n$ 弱收敛于 $\mu$ , 记为 $\mu_n \xrightarrow{\mathrm{w}} \mu$ .



**引理 3.8.21 (Helly’s Selection Theorem)**  设 $F_1(\cdot), F_2(\cdot), \cdots$ 是一列分布函数, 则存在子列 $n_1, n_2, \cdots$ , 使得当 $k \to \infty$ 时, $F_{n_k}(\cdot)$ 弱收敛.

**证明.** 将全体有理数排列为 $r_1, r_2, \cdots$ .

- 首先考虑 $r_1$ . 因为 $F_n\left(r_1\right), n=1,2, \cdots$ 是 $[0,1]$ 中的实数序列, 所以存在子列 $m_1^{(1)}, m_2^{(1)}, \cdots$ 使得当 $i \to \infty$ 时, $F_{m_i^{(1)}}\left(r_1\right)$ 收敛于某实数, 记为 $f\left(r_1\right)$ .

- 接下来考虑 $r_2$ . 因为 $F_{m_i^{(1)}}\left(r_2\right), i=1,2, \cdots$ 是 $[0,1]$ 中的实数序列, 所以存在 $m_1^{(1)}, m_2^{(1)}, \cdots$ 的子列 $m_1^{(2)}, m_2^{(2)}, \cdots$ 使得当 $i \to \infty$ 时, $F_{m_i^{(2)}}\left(r_2\right)$ 收敛于某实数, 记为 $f\left(r_2\right)$ .
- 接下来依次考虑 $r_3, r_4, \cdots$ . 于是对任意 $i$ , 我们得到一系列序列, 其中第 $i$ 个正整数序列 $m_1^{(i)}, m_2^{(i)}, \cdots$ 是第 $i-1$ 个序列的子列, 且 $\lim\limits_{k \to \infty} F_{m_k^{(i)}}\left(r_i\right)$ 存在, 记为 $f\left(r_i\right)$ .

令 $n_k=m_k^{(k)}$ , 如下表所示

第一个序列: $\boxed{m_1^{(1)}}, m_2^{(1)}, m_3^{(1)}, \cdots, F_{m_k^{(1)}}\left(r_1\right) \xrightarrow{k \to \infty} f\left(r_1\right) \in[0,1]$ ;

第二个序列 : $m_1^{(2)}, \boxed{m_2^{(2)}}, m_3^{(2)}, \cdots, F_{m_k^{(2)}}\left(r_2\right) \xrightarrow{k \to \infty} f\left(r_2\right) \in[0,1]$ ;

第三个序列: $m_1^{(3)}, m_2^{(3)}, \boxed{m_3^{(3)}}, \cdots, F_{m_k^{(3)}}\left(r_3\right) \xrightarrow{k \to \infty} f\left(r_3\right) \in[0,1]$ ;

则 $n_1, n_2, \cdots$ 是正整数的子列; 且对任意 $i, n_i, n_{i+1}, \cdots$ 是第 $i$ 个序列的子列, 因此 $\displaystyle \lim_{k \to \infty} F_{n_k}\left(r_i\right)=\lim _{k \to \infty} F_{m_k^{(i)}}\left(r_i\right)=f\left(r_i\right)$ . 换言之,
$$
\lim _{k \to \infty} F_{n_k}(r)=f(r), \quad \forall r \in \mathbb{Q} .
$$

对任意 $x \in \R$ , 令 $F(x):=\inf \{f(r): r \in \mathbb{Q} \text { 且 } r>x\}$ , 易知 $F(\cdot)$ 是右连续的.

> 因为 $F$ 单调不减, $F(x^+)$ 上极限存在并且显然 $F(x_0^+) \ge F(x_0)$
>
> 并且 $F(x_0^+) \le f(r), \quad\forall r > x_0, r \in \Q$, 因此 $F(x_0^+) \le \inf \{f(r), r > x_0, r \in \Q\} = F(x_0)$
>
> 即证 $F(x_0^+) = F(x_0)$ 右连续.

最后, 往证 $F_{n_k} \xrightarrow{\mathrm{w}} F$ .设 $x \in C(F)$ .设 $r \in \mathbb{Q}$ 且 $r>x$ , 则
$$
\limsup _{k \to \infty} F_{n_k}(x) \le \limsup _{k \to \infty} F_{n_k}(r)=f(r)
$$
由 $r$ 的任意性,  $\limsup\limits_{k \to \infty} F_{n_k}(x) \le F(x)$ .对任意 $y<x$ , 取 $r \in \mathbb{Q}$ 使得 $y<r<x$ , 则
$$
\liminf _{k \to \infty} F_{n_k}(x) \ge \liminf _{k \to \infty} F_{n_k}(r)=f(r) \ge F(y)
$$
令 $y \to x$ .又 $x$ 是 $F$ 的连续点知 $F(y) \to F(x)$. 因此 $\liminf\limits_{k \to \infty} F_{n_k}(x) \ge F(x)$. 综上,  $\lim\limits_{k \to \infty} F_{n_k}(x)=F(x)$ .



**Definition 9.3.1(胎紧性).** A sequence of d.f.'s $\left\{F_n, n \ge 1\right\}$ is said to be tight if, for all $\varepsilon>0$, there is an $M_\varepsilon$ (free of $n$) so that
$$
\limsup _{n \to \infty} P\left(\left|X_n\right|>M\right) \le \epsilon
$$

**Remark.** 动机是为了保证一列分布函数的极限还是分布函数.

否则例如 $F_n(x) = x/n, \quad x \in [0, n]$ , 则极限为 $0$ 不是一个分布函数.

**等价定义.** 存在 $M_\varepsilon$ 使得任意 $P(|X_n| > M) \le \varepsilon$



**Theorem 9.3.2.** 设 $\{F_n\}$ 为一列分布函数. 则 $\{F_n\}$ 的每一个弱收敛子列的极限 $F$ 都是一个分布函数, 当且仅当 $\{F_n\}$ 是胎紧的.

**Proof.** "$\impliedby$" : Let $r<-M_\varepsilon$ and $s>M_\varepsilon$ be continuity points of $F$. Since $F_{n_k}(r) \to F(r)$ and $F_{n_k}(s) \to F(s)$
$$
\begin{aligned}
1-F(s)+F(r) & =\lim _{k \to \infty}\left(1-F_{n_k}(s)+F_{n_k}(r)\right) \\
& \le \limsup _{k \to \infty}\left(1-F_{n_k}\left(M_\varepsilon\right)+F_{n_k}\left(-M_\varepsilon\right)\right) \\
& \le \limsup _{n \to \infty}\left(1-F_n\left(M_\varepsilon\right)+F_n\left(-M_\varepsilon\right)\right) \le \varepsilon,
\end{aligned}
$$

Hence $1-F(x)+F(-x) \to 0$ as $x \to \infty$. Therefore, $F$ is a d.f.

"$\implies$" : Suppose that $F_n$ is not tight. In this case, there is an $\varepsilon_0>0$ and a subsequence $n_k \to \infty$ so that
$$
1-F_{n_k}(k)+F_{n_k}(-k) \ge \varepsilon_0, \quad \forall k
$$

Suppose there is a subsequence $\{ F_{n_{k_j}} \} \xrightarrow{d} F$ . Let $r<0<s$ be continuity points of $F$. Since $F_{n_{k_j}}(r) \to F(r)$ and $F_{n_{k_j}}(s) \to F(s)$, we have
$$
\begin{aligned}
1-F(s)+F(r) & =\lim _{j \to \infty}\left(1-F_{n_{k_j}}(s)+F_{n_{k_j}}(r)\right) \\
& \ge \liminf _{j \to \infty}\left(1-F_{n_{k_j}}\left(k_j\right)+F_{n_{k_j}}\left(-k_j\right)\right)  \ge \varepsilon_0
\end{aligned}
$$

Hence $\lim\limits_{x \to \infty}[1-F(x)+F(-x)] \ge \varepsilon_0$ . Therefore $F$ is not a d.f., contradiction!

---

### Levy 连续性定理

**Lemma 10.4.1** For any a $>0$, we have
$$
P\left(|X|>\frac2a\right) \le \frac1a \int_{-a}^a(1-\psi(t)) d t .
$$

**Proof.**
$$
\begin{aligned}
\int_{-a}^a(1-\psi(t)) d t & =2 a-\int_{-a}^a \mathbb{E} e^{i t X} d t =2 a - \mathbb{E}\left(\int_{-a}^a e^{i t X} d t\right) \quad \text { (by Fubini theorem) } \\
&= 2 a - \mathbb{E}\left(\int_{-a}^a \cos (t X) d t\right)
= 2 a \mathbb{E}\left(1-\tfrac{\sin (a X)}{a X}\right) \\
& \ge 2 a \mathbb{E}\left(1-\tfrac{\sin (a X)}{a X}\right) \mathbb{I}\{|a X|>2\} \\[1ex]
& \ge 2 a \mathbb{E}\left(1-\tfrac12\right) \mathbb{I}\{|a X|>2\}
\ge a P(|a X|>2)
\end{aligned}
$$





**Lemma 10.4.2.** Let $F_n$ be a sequence of d.f.s with c.f.s $\psi_n$. If $\psi_n(t) \to g(t)$, and $g(t)$ that is continuous at 0 , then $F_n$ is tight.

**Proof.** First note that $g(0)=\lim _n \psi_n(0)=1$ and $g(t)$ is continuous at 0 . Therefore, $\forall \varepsilon>0, \exists a_0>0$ such that $|1-g(t)|=|g(t)-g(0)|<\varepsilon / 2$ whenever $|t|<a_0$. Therefore, as $n \to \infty$, we have
$$
\begin{aligned}
P\left(\left|X_n\right|>\frac2{a_0}\right) & \le\left|\frac1{a_0} \int_{-a_0}^{a_0}\left(1-\psi_n(t)\right) d t\right| \quad(\text { Lemma 10.4.1 }) \\
& \longrightarrow\left|\frac1{a_0} \int_{-a_0}^{a_0}(1-g(t)) d t\right| \quad(\text { dominated convergence theorem }) \\
& \le \frac1{a_0} \int_{-a_0}^{a_0}|1-g(t)| d t \le \frac1{a_0} \int_{-a_0}^{a_0} \varepsilon d t \le \varepsilon / 2
\end{aligned}
$$


Thus, $\exists N_0>0$ such that, for all $n>N_0$, one has $P\left(\left|X_n\right|>\frac2{a_0}\right) \le \varepsilon$.



**Theorem 10.4.1 (Levy continuity theorem).** Assume that $X_n$ has d.f. $F_n$ and c.f. $\psi_n$ for $1 \le n \le \infty$.

(1) If $X_n \to_d X$, then $\psi_n(t) \to \psi(t)$ for all $t$.

(2) If $\psi_n(t) \to \psi(t)$, and $\psi(t)$ is continuous at 0 , then there exists a r.v. $X$ such that $X_n \to_d X$ , and $\psi$ is the c.f. of $X$.

**Proof.** (1) 往证
$$
\lim_{n \to \infty} \int_{-\infty}^\infty e^{itx} dF_n(x) = \int_{-\infty}^\infty e^{itx} dF(x)
$$
设定任意常数 $\varepsilon > 0$ 以及固定的实参数 $t \in \R$.

根据弱收敛, 必然是胎紧的, 存在充分大的 $M > 0$ 使得
$$
F(M) - F(-M) > 1 - \varepsilon, \quad F_n(M) - F_n(-M) > 1 - \varepsilon
$$
因此
$$
\left| \int_{|x| > M} e^{itx} dF_n(x) \right| \le \int_{|x| > M} 1 dF_n(x) < \varepsilon \\
\left| \int_{|x| > M} e^{itx} dF(x) \right| \le \int_{|x| > M} 1 dF(x) < \varepsilon
$$
考察被积函数 $f(x) = e^{itx}$. 在闭区间 $[-M, M]$ 上, $f(x)$ 是一致连续的.

因此, 存在 $\delta > 0$, 使得对于任意 $x, y \in [-M, M]$, 只要 $|x - y| < \delta$, 就有 $|e^{itx} - e^{ity}| < \varepsilon$.

由于 $F$ 的连续点在 $\R$ 中稠密, 在区间 $[-M, M]$ 上选取一个分割
$$
-M = x_0 < x_1 < x_2 < \dots < x_K = M
$$
使得间隔 $< \delta$ 并且每一个分割点均为 $F$ 的连续点.

定义阶梯函数 $h(x) = \sum\limits_{k=1}^K e^{itx_k} \mathbb {1}_{(x_{k-1}, x_k]}(x)$ , 对于所有 $x \in (-M, M]$, 均有 $|e^{itx} - h(x)| < \varepsilon$
$$
\begin{aligned}
\Delta_n &= \left| \int_{[-M, M]} e^{itx} dF_n(x) - \int_{[-M, M]} e^{itx} dF(x) \right| \\
&\le \int_{[-M, M]} |e^{itx} - h(x)| dF_n(x)
+ \left| \int_{[-M, M]} h(x) dF_n(x) - \int_{[-M, M]} h(x) dF(x) \right| \\
&\qquad + \int_{[-M, M]} |h(x) - e^{itx}| dF(x) \\
&\le \int_{[-M, M]} \varepsilon dF_n(x)
+ \left| \sum_{k=1}^K e^{itx_k} \Big[ (F_n(x_k) - F_n(x_{k-1})) - (F(x_k) - F(x_{k-1})) \Big] \right|
+ \int_{[-M, M]} \varepsilon dF(x) \\
&\le 2\varepsilon + \sum_{k=1}^K \left| (F_n(x_k) - F_n(x_{k-1})) - (F(x_k) - F(x_{k-1})) \right|
\end{aligned}
$$
由于每一个 $x_k$ 均为 $F$ 的连续点, 当 $n \to \infty$ 时, $F_n(x_k) \to F(x_k)$.

这是一个有限项求和, 每一项都趋于 $0$, 因此存在整数 $N > 0$, 使得当 $n > N$ 时, 该有限和小于 $< \varepsilon$.

将所有部分组合, 当 $n > N$ 时, 整体误差为
$$
|\psi_n(t) - \psi_\infty(t)| = \left| \int_{-\infty}^\infty e^{itx} dF_n(x) - \int_{-\infty}^\infty e^{itx} dF_\infty(x) \right| \\
\le \left| \int_{|x| > M} e^{itx} dF_n(x) \right| + \left| \int_{|x| > M} e^{itx} dF_\infty(x) \right| + \Delta_n \\
< 2 \varepsilon + 3 \varepsilon \to 0
$$
所以即证 $\lim\limits_{n \to \infty} |\psi_n(t) - \psi_\infty(t)| = 0$ , 证毕.

(2) Now suppose that $\psi_n(t) \to \psi(t)$, and that $\psi(t)$ is continuous at 0 . From Lemma 10.4.2, $F_n$ is tight.

因为 $\left\{X_n\right\}$ tight, 所以由 Helly 选择定理, 存在子列  $X_{n_k} \xrightarrow{d} X$ , 其中 $X$ 的分布函数是 $F$ .

记 $X$ 的特征函数为 $\varphi(t)=\mathbb{E} e^{i t X} .$ 由 (1) 知弱收敛推出特征函数逐点收敛, 所以 $\psi_{n_k}(t) \to \varphi(t) .$

但原假设说全列满足 $\psi_n(t) \to \psi(t) .$ 于是对所有 $t \in \R$ , 有 $\varphi(t)=\psi(t) .$

接下来证明 $X_n \xrightarrow{d} X .$


反证法, 假设全列不弱收敛到 $X$ . 那么存在 $F$ 的某个连续点 $x$ , 存在 $\eta>0$ , 以及一个子列 $X_{m_k}$ , 使得

$$
\left|F_{m_k}(x)-F(x)\right|>\eta .
$$

但是 $\left\{X_{m_k}\right\}$ 仍然 tight, 因为它是 tight 列的子列.

所以由 Helly 选择定理, 可以从 $X_{m_k}$ 中再抽出一个弱收敛子列 $X_{m_{k_j}} \xrightarrow{d} Y .$


记 $Y$ 的特征函数为 $\varphi_Y$ . 由第一问, $\psi_{m_{k_j}}(t) \to \varphi_Y(t) .$ 但原假设仍然给出 $\psi_{m_{k_j}}(t) \to \psi(t) .$

所以 $\varphi_Y(t)=\psi(t) .$ 而 $X$ 的特征函数也是 $\psi(t)$ . 由特征函数唯一性, $Y \xlongequal{d} X$, 矛盾!



