### Romberg 加速收敛

**定义 3.3.3 ** $n$ 次 Bernoulli 多项式 $B_n(x)$ 是指满足
$$
\left\{\begin{array}{l}
B_0(x)=1, \\
B_n'(x)=B_{n-1}(x) \text { 且 } \int_0^1 B_n(x) \mathrm{d} x=0, n \in \mathbb{N}
\end{array}\right.
$$

的多项式序列, 其中 $b_n=n!B_n(0)(n=0,1, \cdots)$ 称为 Bernoulli 数. .



**(Euler-Maclaurin 展开).** 若 $f \in C^{2 p}[a, b]$ , 则有
$$
I-T_h=-\sum_{m=1}^{p-1} \frac{B_{2 m}}{(2 m)!} h^{2 m}\left(f^{(2 m-1)}(b)-f^{(2 m-1)}(a)\right)+R_p
$$


其中 $B_{2 m}$ 为 Bernoulli 数, 余项满足 $R_p=O\left(h^{2 p}\right)$ .

**证明.** Bernoulli 多项式 $B_m(t)$ , 满足 $B_1(t)=t-\frac12, \quad B_m'(t)=m B_{m-1}(t)$ , 并且对 $m \ge 1$ 有
$$
B_{2 m}(1)=B_{2 m}(0)=B_{2 m}, \quad B_{2 m+1}(1)=B_{2 m+1}(0)=0 .
$$


先看单个小区间 $\left[x_k, x_{k+1}\right]$ . 令 $F_k(t)=f\left(x_k+t h\right), \quad 0 \le t \le 1$ . 则

$$
\int_{x_k}^{x_{k+1}} f(x)~dx=h \int_0^1 F_k(t) d t
$$


分部积分可得

$$
\begin{aligned}
\int_0^1 F_k(t) d t & =\left[B_1(t) F_k(t)\right]_0^1-\int_0^1 B_1(t) F_k'(t) d t \\
& =\frac{F_k(0)+F_k(1)}2-\int_0^1 B_1(t) F_k'(t) d t
\end{aligned}
$$


再利用 $B_m'(t)=m B_{m-1}(t)$ 反复分部积分.

$$
\begin{aligned}
-\int_0^1 B_1(t) F_k'(t) d t & =-\left[\frac{B_2(t)}{2!} F_k'(t)\right]_0^1+\int_0^1 \frac{B_2(t)}{2!} F_k''(t) d t \\
& =-\frac{B_2}{2!}\left(F_k'(1)-F_k'(0)\right)-\int_0^1 \frac{B_3(t)}{3!} F_k^{(3)}(t) d t \\
& =-\frac{B_2}{2!}\left(F_k'(1)-F_k'(0)\right)-\frac{B_4}{4!}\left(F_k^{(3)}(1)-F_k^{(3)}(0)\right)+\int_0^1 \frac{B_4(t)}{4!} F_k^{(4)}(t) d t
\end{aligned}
$$
继续到 $2 p$ 阶便得

$$
\int_0^1 F_k(t) d t=\frac{F_k(0)+F_k(1)}2-\sum_{m=1}^{p-1} \frac{B_{2 m}}{(2 m)!}\left(F_k^{(2 m-1)}(1)-F_k^{(2 m-1)}(0)\right)-\int_0^1 \frac{B_{2 p}(t)}{(2 p)!} F_k^{(2 p)}(t) d t .
$$


所以

$$
\begin{aligned}
\int_{x_k}^{x_{k+1}} f(x)~dx=\frac{h}2 & \left(f\left(x_k\right)+f\left(x_{k+1}\right)\right)-\sum_{m=1}^{p-1} \frac{B_{2 m}}{(2 m)!} h^{2 m}\left(f^{(2 m-1)}\left(x_{k+1}\right)-f^{(2 m-1)}\left(x_k\right)\right) \\
& -\frac{h^{2 p}}{(2 p)!} \int_0^1 B_{2 p}(t) f^{(2 p)}\left(x_k+t h\right) d t
\end{aligned}
$$


对 $k=0,1, \cdots, n-1$ 求和后, 得到

$$
\begin{aligned}
I-T_h=- & \sum_{m=1}^{p-1} \frac{B_{2 m}}{(2 m)!} h^{2 m}\left(f^{(2 m-1)}(b)-f^{(2 m-1)}(a)\right) \\
& -\frac{h^{2 p}}{(2 p)!} \sum_{k=0}^{n-1} \int_0^1 B_{2 p}(t) f^{(2 p)}\left(x_k+t h\right) d t
\end{aligned}
$$


尾项是 $O\left(h^{2 p}\right)$

---

**Romberg 加速收敛.** 假设我们要用一个与步长 $h$ 有关的量 $Q_1(h)$(比如一个复合求积公式)去近似一个与 $h$ 无关的量 $Q$(比如一个定积分), 而且已知截断误差的渐进展开式为
$$
\begin{equation*}
Q-Q_1(h)=c_1 h^{p_1}+c_2 h^{p_2}+c_3 h^{p_3}+\cdots+c_k h^{p_k}+\cdots, \tag{3.3.19}
\end{equation*}
$$
其中 $c_k, p_k$ 为常数且 $0<p_1<p_2<\cdots$ . 此时, $Q_1$ 逼近 $Q$ 的截断误差量级就是 $O\left(h^{p_1}\right)$ .

如果我们把步长缩小一倍, 即取 $h=h / 2$ , 则有

$$
\begin{align*}
Q-Q_1(h / 2) & =c_1(h / 2)^{p_1}+c_2(h / 2)^{p_2}+c_3(h / 2)^{p_3}+\cdots \\
& =2^{-p_1} c_1 h^{p_1}+2^{-p_2} c_2 h^{p_2}+2^{-p_3} c_3 h^{p_3}+\cdots \tag{3.3.20}
\end{align*}
$$

如果记 $Q_2(h)=\dfrac{Q_1(h / 2)-2^{-p_1} Q_1(h)}{1-2^{-p_1}}$


把式(3.3.19)乘上 $2^{-p_1}$ 再减去式(3.3.20)得 $Q_2$ 逼近 $Q$ 的截断误差量级就提高为 $O\left(h^{p_2}\right)$ , 即有
$$
Q-Q_2(h)=c_2^* h^{p_2}+c_3^* h^{p_3}+\cdots+c_k^* h^{p_k}+\cdots
$$

**Remark.** 上面证明了 $\displaystyle \int_a^b f(x) \mathrm{d} x=T_1(h)+\sum_{k=1}^\infty c_{2 k}^{(1)} h^{2 k}$ , 其中 $c_{2 k}^{(1)}ts)$ 为常数. 计算得
$$
T_2(h) = \frac{4 T_1(h / 2) - T_1(h)}3 = \int_a^b f(x) \mathrm{d} x- \sum_{k=2}^\infty c_{2 k}^{(2)} h^{2 k}
$$
这恰好是 Simpson 公式, 截断误差阶提高至 $O(h^4)$.



**算法实现.** 设积分 $I = \int_a^b f(x)~dx$. 

令 $R_{k, 1} = Q_1(h_k)$ 表示步长 $h_k = \frac{b-a}{2^{k-1}}$的复合梯形求积公式.

由 Euler-Maclaurin 求和公式可知,
$$
I - R_{k, 1} = c_1 h_k^2 + c_2 h_k^4 + c_3 h_k^6 + \cdots
$$

- 第一次外推, 消除 $O(h^2)$ 误差项
  $$
  Q_2(h_k) = \frac{Q_1(h_k / 2) - 2^{-p_1} Q_1(h_k)}{1 - 2^{-p_1}}
  $$
  代入 $R_{k, j}$ 的记号
  $$
  R_{k, 2} = Q_2(h_k) = \frac{R_{k+1, 1} - \frac14 R_{k, 1}}{1 - \frac14} = \frac{4 R_{k+1, 1} - R_{k, 1}}3
  $$

- 第 $j$ 次外推

  第 $j-1$ 次外推得到的序列 $R_{k, j-1}$ 的首项截断误差量级为 $O(h^{2(j-1)})$, 这一步应消除 $2(j-1)$ 次项.
  $$
  R_{k, j} = \frac{4^{j-1} R_{k+1, j-1} - R_{k, j-1}}{4^{j-1} - 1}
  $$

- 

**Remark.** 为什么要这样递推? 比如计算 $Q_3(h)=\dfrac{Q_2(h / 2)-2^{-p_2} Q_2(h)}{1-2^{-p_2}}$ 时需要计算 $Q_2(h / 2)$ 和 $Q_2(h)$
$$
Q_2(h)=\frac{Q_1(h / 2)-2^{-p_1} Q_1(h)}{1-2^{-p_1}} \\
Q_2(h / 2)=\frac{Q_1(h / 4)-2^{-p_1} Q_1(h / 2)}{1-2^{-p_1}}
$$
发现递归计算, $Q_1(h / 2)$ 会重复计算浪费时间, 因此通过 $R_{2, 1} :=  Q_1(h / 2)$ 将其存储.





### 代数精度

一个数值积分公式写成被积函数的几个函数值的线性组合, 即
$$
\int_a^b f(x) \mathrm{d} x \approx \sum_{j=0}^n A_j f\left(x_j\right) \triangleq I_N
$$

**定义 3.3.1** 设 $m$ 是一个正整数. 如果数值积分公式的截断误差对
$$
f(x)=1, x, x^2, \cdots, x^m
$$

都为零, 但对 $f(x)=x^{m+1}$ 不为零, 则称数值积分公式的代数精度为 $m$ 阶.



**Peano 核误差公式.** 如果 $f(x)$ 具有连续的 $n+1$ 阶导数, 且求积公式具有 $n$ 阶代数精度, 误差可以表示为:
$$
R[f]=\frac{R\left[x^{n+1}\right]}{(n+1)!} f^{(n+1)}(\xi)
$$

这里的 $K_n(t)$ 叫做 Peano Kernel.

**证明.**设准确积分为 $I[f]=\int_a^b f(x)~dx$ , 数值积分为 $I_n[f]=\sum\limits_{k=0}^m A_k f\left(x_k\right)$ .截断误差为 $R[f]=I[f]-I_n[f]$是线性泛函.

由于 $f \in C^{n+1}[a, b]$ , 记 $P_n(x)$ 为 $f$ 在点 $a$ 处的 $n$ 次 Taylor 多项式, 则由带积分余项的 Taylor 公式

$$
\begin{aligned}
f(x) & =P_n(x)+\frac1{n!} \int_a^x f^{(n+1)}(t)(x-t)^n d t \\
& =P_n(x)+\frac1{n!} \int_a^b f^{(n+1)}(t)(x-t)_+^n d t
\end{aligned}
$$

其中 $(x-t)_+^n= \begin{cases}(x-t)^n, & x \ge t, \\ 0, & x<t .\end{cases}$

对上式作用误差泛函 $R$ , 再利用 $R\left[P_n\right]=0$ , 得到
$$
\begin{aligned}
R[f] & =R\left[P_n(x)\right]+R\left[\frac1{n!} \int_a^b f^{(n+1)}(t)(x-t)_+^n d t\right] \\
& =\frac1{n!} R\left[\int_a^b f^{(n+1)}(t)(x-t)_+^n d t\right] \\
& =\int_a^b f^{(n+1)}(t) K_n(t) d t
\end{aligned}
$$


其中 $K_n(t)=\frac1{n!} R\left[(x-t)_+^n\right]$ 为关于 $x$ 的函数 $(x-t)_+^n$ 的截断误差, 称为 Peano 核.

根据微积分中的积分第一中值定理: 如果 $K_n(t)$ 在区间 $[a, b]$ 上不变号(即始终 $\ge 0$ 或始终 $\le 0$ ), 于是

$$
R[f]=f^{(n+1)}(\xi) \int_a^b K_n(t) d t
$$


最后一步, 为了求 $\int_a^b K_n(t) d t$ 这个常数, 取 $f(x)=x^{n+1}$ 代入上面的公式.

$$
R\left[x^{n+1}\right]=(n+1)!\int_a^b K_n(t) d t
$$


把这个结果代回 $R[f]$ 的表达式中, 即得误差公式:

$$
R[f]=\frac{R\left[x^{n+1}\right]}{(n+1)!} f^{(n+1)}(\xi)
$$

---

记 $E_n(f) \triangleq I(f)-I_N(f)$

**定义 3.3.2** 如果 $\forall f \in \mathbb{P}_n, E_n(f)=0$ , 即代数精度 $\ge n$ 时, 则称数值积分为插值型的.

**定理 3.3.1** 下面两个命题是等价的:
(1) $I_N(f) = \sum\limits_{j=0}^n A_j f\left(x_j\right)$ 为插值型积分;
(2) $I_N(f)$ 可由对 $x_0, x_1, \cdots, x_n$ 的 $n$ 次插值积分得到. 即构造函数 $f(x)$ 的 $n$ 次插值多项式 $L_n(f)(x)$, 将 $L_n(f)(x)$ 的积分值定义为 $I_N(f)$.

**证明.** (1) $\implies$ (2) 对 $\forall f(x)$ , 在 $x_0, x_1, \cdots, x_n$ 点作 $f$ 的 Lagrange插值多项式
$$
L_n(f)=\sum_{k=0}^n f\left(x_k\right) l_k(x) \in \mathbb{P}_n
$$

由 $I_N(f)$ 为插值型积分有 $E_n\left(L_n(f)\right)=0$ , 则

$$
\begin{aligned}
I\left(L_n(f)\right)-I_N\left(L_n(f)\right)
& =\sum_{k=0}^n\left(\int_a^b l_k(x) \mathrm{d} x\right) f\left(x_k\right)-\sum_{k=0}^n A_k\left(L_n(f)\right)\left(x_k\right) \\
& =\sum_{k=0}^n\left(\int_a^b l_k(x) \mathrm{d} x-A_k\right) f\left(x_k\right)=0 .
\end{aligned}
$$

由 $f$ 的任意性, 立得 $A_k=\int_a^b l_k(x) \mathrm{d} x$ .

(2) $\implies$ (1) 如有 $A_k=\int_a^b l_k(x) \mathrm{d} x$ , 则 $\forall f \in \mathbb{P}_n, L_n(f)=f$ , 于是有
$$
\begin{aligned}
I(f) & =I\left(L_n(f)\right)=\int_a^b \sum_{k=0}^n f\left(x_k\right) l_k(x) \mathrm{d} x \\
& =\sum_{k=0}^n A_k f\left(x_k\right)=I_N(f)
\end{aligned}
$$


即 $E_n(f)=0$ .定理得证. "$I_N(f)$ 可由对 $x_0, x_1, \cdots, x_n$ 的 $n$ 次插值积分得到.



**定理 3.3.2** 对 $\forall 0 \le k \le n+1, I_N(f)$ 为 $d=n+k$ 阶代数精度等价于

(1) $I_N(f)$ 为插值型的;
(2) $\omega_n(x)=\prod_{i=0}^n\left(x-x_i\right)$ 满足 $\int_a^b \omega_n(x) P(x) \mathrm{d} x=0, \forall P(x) \in \mathbb{P}_{k-1}$ .

**证明.** "$\implies$" 由于 $I_N(f)$ 已有 $d=n+k$ 阶代数精度, 它必有 $n$ 阶代数精度, 由定理3.3.1知(1)成立.

由于 $\omega_n(x) P(x) \in \mathbb{P}_{n+k}$ , 则

$$
\int_a^b \omega_n(x) P(x) \mathrm{d} x
=I\left(\omega_n(x) P(x)\right)=I_N\left(\omega_n(x) P(x)\right)
=\sum_{i=0}^n A_i \omega_n\left(x_i\right) P\left(x_i\right)=0
$$
故(2)也得证.
"$\impliedby$" 由(1)知 $I_N(f)$ 有 $n$ 阶代数精度. 对 $\forall g(x) \in \mathbb{P}_{n+k}$ , 有
$$
g(x)=\omega_n(x) g_1(x)+g_2(x), \quad g_2(x) \in \mathbb{P}_n, g_1(x) \in \mathbb{P}_{k-1} .
$$


显然有 $g\left(x_i\right)=g_2\left(x_i\right)(i=0,1, \cdots, n)$ , 且由(2)得

$$
\int_a^b g(x) \mathrm{d} x
=\int_a^b g_2(x) \mathrm{d} x=\sum_{i=0}^n A_i g_2\left(x_i\right)
=\sum_{i=0}^n A_i g\left(x_i\right)=I_N(g)
$$

即 $I_N(f)$ 的代数精度为 $n+k$ 阶, 得证.



对等距节点 $x_k = a + kh \ (k = 0, 1, \dots, n)$ 进行插值积分就得到了 Newton-Cotes 求积公式.

**定理 3.3.3.** Newton-Cotes 求积公式至少具有 $n$ 阶代数精度, 如 $n$ 为偶数, 则具有 $n+1$ 阶代数精度.

**证明.** 由 Newton-Cotes 求积公式的构造知其为插值型积分, 故显然至少有 $n$ 阶代数精度.

如 $n$ 为偶数, 由定理 3.3.2 知, 只需证明
$$
\int_a^b \omega_n(x) \mathrm{d} x=0
$$


令 $x=a+t h$ 可得到

$$
\begin{aligned}
\int_a^b \omega_n(x) \mathrm{d} x & =\int_0^n t(t-1) \cdots(t-n) \mathrm{d} t \cdot h^{n+2} \quad(n=2 k) \\
& =\int_{-k}^k(u+k)(u+k-1) \cdots(u+1) u(u-1) \cdots(u-k) \mathrm{d} u \cdot h^{n+2} \\
& =\int_{-k}^k u\left(u^2-1\right) \cdots\left(u^2-k^2\right) \mathrm{d} u \cdot h^{n+2}=0
\end{aligned}
$$

故定理得证.



### Guass 积分

考虑带权积分 $I = \int_a^b \rho(x) f(x)~dx$ , 其中 $\rho(x) \ge 0$ 为区间 $[a, b]$ 上的权函数. 构造 $n$ 阶求积公式(含 $n+1$ 个节点):
$$
I \approx \sum_{k=0}^n A_k f(x_k)
$$
**定理(最高代数精度极限)**: 对于任意包含 $n+1$ 个节点的求积公式, 其代数精度最高不超过 $2n+1$ 次. 若一个求积公式的代数精度达到了 $2n+1$ 次, 则称该公式为高斯型求积公式(Gauss-type Quadrature), 其节点 $x_k$ 称为高斯点(Gauss nodes).

**证明(反证法)**: 假设存在一个具有 $n+1$ 个节点的求积公式, 其代数精度至少为 $2n+2$.

令 $\omega_{n+1}(x) = \prod\limits_{k=0}^n (x - x_k)$ , $f(x) = [\omega_{n+1}(x)]^2$ 次数为 $2n+2$ 的多项式. 并且 $\forall x \in (a, b)$ 且 $x \neq x_k$, 都有 $f(x) > 0$.

计算该多项式的真实带权积分 $I(f) = \int_a^b \rho(x) [\omega_{n+1}(x)]^2~dx > 0$.

另一方面, 使用假设具有 $2n+2$ 次代数精度的求积公式 $Q(f)$ 来计算:

$$
Q(f) = \sum_{k=0}^n A_k f(x_k) = \sum_{k=0}^n A_k [\omega_{n+1}(x_k)]^2 = \sum_{k=0}^n A_k \cdot 0 = 0
$$
此时 $I(f) \neq Q(f)$, 这与假设该公式具有 $2n+2$ 次代数精度相矛盾.



**定理(高斯求积公式的判定定理).** 求积公式具有 $2n+1$​ 次代数精度的 $\iff$​ 它是插值型的, 且其节点多项式 $\omega_{n+1}(x) = \prod\limits_{k=0}^n (x - x_k)$​ 关于权函数 $\rho(x)$​ 正交于任何次数不超过 $n$​ 的多项式 $\mathbb{P}_n$​. 即满足正交条件:
$$
\int_a^b \rho(x) \omega_{n+1}(x) P(x)~dx = 0 \quad , \forall P(x) \in \mathbb{P}_n
$$
**证明.** 对于 $f(x) \in \mathbb{P}_{2n+1}$ , 由多项式带余除法, 假设
$$
f(x) = \omega_{n+1}(x) q(x) + r(x)
$$
其中, 商 $q(x)$ 和余数 $r(x)$ 的次数均不超过 $n$.

计算真实积分

$$
I(f) = \int_a^b \rho(x) f(x)~dx = \int_a^b \rho(x) \omega_{n+1}(x) q(x)~dx + \int_a^b \rho(x) r(x)~dx
$$
计算求积公式的值:

$$
\begin{aligned}
Q(f) &= \sum_{k=0}^n A_k f(x_k) = \sum_{k=0}^n A_k [\omega_{n+1}(x_k) q(x_k) + r(x_k)] \\
&= \sum_{k=0}^n A_k r(x_k) = Q(r) \xlongequal{\text{公式是插值型的}} I(r)
\end{aligned}
$$
因此, 要求 $I(f) = Q(f)$ 对所有 $f(x) \in \mathbb{P}_{2n+1}$ 成立, 当且仅当:

$$
\int_a^b \rho(x) \omega_{n+1}(x) q(x)~dx = 0
$$
由于 $q(x)$ 可以是 $\mathbb{P}_n$ 中的任意多项式, 上式等价于 $\omega_{n+1}(x)$ 必须与 $\mathbb{P}_n$ 中的所有多项式正交. 证毕.



**例子.** Gauss-Chebyshev 公式
$$
\int_{-1}^1 \tfrac{f(x)}{\sqrt{1-x^2}} \mathrm{~d} x \approx \tfrac\pi{n} \sum_{j=1}^n f\left(x_j\right),
$$
其中 $x_j(j=1,2, \cdots, n)$ 是区间 $[-1,1]$ 上的 $n$ 次 Chebyshev 多项式 $T_n(x)$ 的零点:
$$
x_j=\cos \left(\tfrac{2 j-1}{2 n} \pi\right), \quad j=1,2, \cdots, n .
$$
**验证.** 设 $\rho(x) = \frac1{\sqrt{1-x^2}}$ 为区间 $[-1, 1]$ 上的权函数. 定义函数空间 $L_\rho^2[-1, 1]$ 上的内积为:
$$
\left< f, g \right>_\rho := \int_{-1}^1 \rho(x) f(x) g(x) \mathrm{d}x
$$
则熟知 Chebyshev 多项式 $\{T_n\}$ 是一组正交多项式 (证明见作业)

这里 $\omega_n(x) = \prod\limits_{j=1}^n (x - x_j) = \frac1{2^{n-1}} T_n(x)$ 符合上述引理的正交条件, 即证求积公式具有 $n$ 阶精度.

下面只需验算求积系数 $A_i = \int_{-1}^1 \frac{l_j(x)}{\sqrt{1-x^2}} \mathrm{d}x$ , 其中 $l_j(x) = \dfrac{T_n(x)}{(x - x_j) T_n'(x_j)}$

已知 $T_n(x) = \cos(n \arccos x)$. 引入变量代换 $x = \cos \theta$, 且节点 $x_j = \cos \theta_j$, 其中 $\theta_j = \frac{2j-1}{2n}\pi$.
$$
T_n'(x) = \frac{\mathrm{d}}{\mathrm{d}x} \cos(n\theta) = \frac{\frac{\mathrm{d}}{\mathrm{d}\theta} \cos(n\theta)}{\frac{\mathrm{d}x}{\mathrm{d}\theta}} = \frac{n \sin(n\theta)}{\sin \theta}
$$
从而
$$
\begin{aligned}
A_j &= \int_{-1}^1 \frac{T_n(x)}{(x - x_j) T_n'(x_j)} \frac1{\sqrt{1-x^2}} \mathrm{d}x \\[1ex]
&= \frac{\sin \theta_j}{n \sin n\theta_j} \int_\pi^0 \frac{\cos(n\theta)}{\cos \theta - \cos \theta_j} \frac1{\sin \theta} (-\sin \theta) \mathrm{d}\theta
\end{aligned}
$$
上式中包含 $I_n = \int_0^\pi \frac{\cos(n\theta)}{\cos \theta - \cos \alpha} \mathrm{d}\theta, \alpha \in (0, \pi)$
$$
\begin{aligned}
I_{n+1} + I_{n-1} &= \int_0^\pi \frac{\cos((n+1)\theta) + \cos((n-1)\theta)}{\cos \theta - \cos \alpha} \mathrm{d}\theta
= \int_0^\pi \frac{2 \cos(n\theta) \cos \theta}{\cos \theta - \cos \alpha} \mathrm{d}\theta \\
&= 2 \int_0^\pi \cos(n\theta) \mathrm{d}\theta + 2\cos \alpha \int_0^\pi \frac{\cos(n\theta)}{\cos \theta - \cos \alpha} \mathrm{d}\theta \\
\end{aligned}
$$
因此 $I_{n+1} - 2\cos \alpha I_n + I_{n-1} = 0$ , 得到通项 $I_n = A \cos(n\alpha) + B \sin(n\alpha)$

由初始条件确定待定系数

- $I_0 = \int_0^\pi \frac1{\cos \theta - \cos \alpha} \mathrm{d}\theta = 0$ , 故 $A = 0$.
- $I_1 = \int_0^\pi \frac{\cos \theta}{\cos \theta - \cos \alpha} \mathrm{d}\theta = \int_0^\pi \left( 1 + \frac{\cos \alpha}{\cos \theta - \cos \alpha} \right) \mathrm{d}\theta = \pi + \cos \alpha \cdot I_0 = \pi$. 故 $B = \frac\pi{\sin \alpha}$

$$
\int_0^\pi \frac{\cos(n\theta)}{\cos \theta - \cos \alpha} \mathrm{d}\theta = \pi \frac{\sin(n\alpha)}{\sin \alpha}
$$

带入即证 $A_j = \frac{\sin \theta_j}{n \sin(n\theta_j)} \cdot \pi \frac{\sin(n\theta_j)}{\sin \theta_j} = \frac\pi{n}$
