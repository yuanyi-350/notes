### Adams-Bashforth 方法

首先, 有精确度递推关系
$$
y(t_{n+1}) = y(t_n) + \int_{t_n}^{t_{n+1}} f(t, y(t)) dt
$$
核心思想是, 假设已知在 $s$ 个节点 $t_n, t_{n-1}, \dots, t_{n-s+1}$ 上的导数值 $f_i = f(t_i, y_i)$.

可以构造一个 $s-1$ 次的Lagrange插值多项式 $P_{s-1}(t) = \sum\limits_{j=0}^{s-1} f_{n-j} L_j(t)$ 来近似 $f(t, y(t))$

其中 $L_j(t)$ 为拉格朗日基多项式, 带入得到 $s$ 步 Adams-Bashforth 方法
$$
y_{n+1} = y_n + \int_{t_n}^{t_{n+1}} P_{s-1}(t) dt = y_n + h \sum_{j=0}^{s-1} \beta_j f_{n-j}
$$
**例子.**

- $s = 1$ 时, 为标准的显式欧拉法 (Forward Euler Method). $y_{n+1} = y_n + h f_n$

- $s=2$ 时, $y_{n+1} = y_n + \frac{h}2 \left( 3f_n - f_{n-1} \right)$
- $s = 3$ 时, $y_{n+1} = y_n + \frac{h}{12} \left( 23f_n - 16f_{n-1} + 5f_{n-2} \right)$

- $s=4$ 时, $y_{n+1} = y_n + \frac{h}{24} \left( 55f_n - 59f_{n-1} + 37f_{n-2} - 9f_{n-3} \right)$



**误差估计.** 记插值多项式 $P(t)$ 的次数为 $r$ (在 $s$ 步方法中, 通常 $r = s-1$), 则该数值方法的局部截断误差为 $\mathcal{O}(h^{r+2})$.

**证明.**
$$
\tau_{n+1} = y(t_{n+1}) - y_{n+1} = \int_{t_n}^{t_{n+1}} \left[ f(t, y(t)) - P_r(t) \right] dt
$$
被积函数 $f(t, y(t))$ 与插值多项式 $P_r(t)$ 之间的截断误差为
$$
\begin{aligned}
R_r(t) &= f(t, y(t)) - P_r(t) = \tfrac1{(r+1)!} \tfrac{d^{r+1}}{dt^{r+1}} f(\xi, y(\xi)) \prod_{j=0}^r (t - t_{n-j}) \\
&= \tfrac{y^{(r+2)}(\xi)}{(r+1)!} \prod_{j=0}^r (t - t_{n-j})
\end{aligned}
$$
令 $t = t_n + uh$, 积分区间 $u \in [0, 1]$. 有
$$
\prod_{j=0}^r (t - t_{n-j}) = \prod_{j=0}^r (u + j)h = h^{r+1} \prod_{j=0}^r (u + j)
$$
因此
$$
\tau_{n + 1} = h^{r+2} \int_0^1 \tfrac{y^{(r+2)}(\xi)}{(r+1)!} \prod_{j=0}^r (u + j)~du \\
$$
根据积分的第一中值定理, 若函数 $g(x)$ 连续,  $w(x)$ 在积分区间上不变号且可积, 则存在中值点 $\eta$ 使得 $\int f(x)w(x)dx = f(\eta) \int w(x)dx$. 因此
$$
\tau_{n + 1} = h^{r+2} \tfrac{y^{(r+2)}(\eta)}{(r+1)!} \int_0^1 \prod_{j=0}^r (u + j)~du
$$

---

### 相容性

**多元函数 Taylor 展开.** 假设 $\Omega \subset \R^n$ 是凸的开集, $f$ 在 $\Omega$ 上 $k+1$ 次连续可微. 那么, 对于任意的 $x, y \in \Omega$ , 其中 $x=\left(x_1, \cdots, x_n\right), y=\left(y_1, \cdots, y_n\right)$ , 存在 $\theta \in[0,1]$ , 使得
$$
f(y)=\sum_{|\alpha| \le k} \frac{\partial^\alpha f(x)}{\alpha!}(y-x)^\alpha+\sum_{|\alpha|=k+1} \frac{\partial^\alpha f(x+\theta(y-x))}{\alpha!}(y-x)^\alpha,
$$


其中,

$$
(x-y)^\alpha=\left(x_1-y_1\right)^{\alpha_1} \cdots\left(x_n-y_n\right)^{\alpha_n}, \quad \alpha!=\alpha_1!\cdots \alpha_n!.
$$
**理解.** 记 $N_{\alpha_1, \cdots,\alpha_n} := \binom{\alpha}{\alpha_1}\binom{\alpha -\alpha_1}{\alpha_2}\binom{\alpha -\alpha_1 - \alpha_2}{\alpha_3}\cdots \binom{\alpha_{n-1} + \alpha_n}{\alpha_{n - 1}}$ 相当于把 $\{1,\cdots, \alpha\}$ 划分成 $n$ 个大小为 $\alpha_1,\cdots,\alpha_n$ 的集合的方法数, 随后
$$
\frac{N_{\alpha_1, \cdots,\alpha_n}}N = \frac1{\alpha_1!\cdots \alpha_n!}
$$
即为系数.

**例子.**
$$
\begin{aligned}
f(x+h, y+k) \approx f(x, y)
& + h f_x + k f_y \\
&+ \frac12 h^2 f_{xx} + h k f_{xy} + \frac12 k^2 f_{yy} \\
&+ \frac16 h^3 f_{xxx} + \frac12 h^2 k f_{xxy} + \frac12 h k^2 f_{xyy} + \frac16 k^3 f_{yyy} \\
& + \frac1{24} h^4 f_{xxxx} + \frac16 h^3 k f_{xxxy} + \frac14 h^2 k^2 f_{xxyy} + \frac16 h k^3 f_{xyyy} + \frac1{24} k^4 f_{yyyy}
\end{aligned}
$$



初值问题 $y'(t) = f(t, y(t)), \quad t \in [t_0, T], \quad y(t_0) = y_0$

设时间步长为 $h$, 离散节点为 $t_n = t_0 + nh$. 设 $y(t_n)$ 为真实精确解在 $t_n$ 处的值, $y_n$ 为数值解.

**定义(相容性)** 设数值方法可表示为如下一般形式(以单步法为例)
$$
y_{n+1} = y_n + h \Phi(t_n, y_n, h)
$$
将真实解 $y(t)$ 代入上述数值格式中, 定义局部截断误差 (Local Truncation Error)
$$
T_{n+1} = y(t_{n+1}) - \left[ y(t_n) + h \Phi(t_n, y(t_n), h) \right]
$$
如果该数值方法满足 $\lim\limits_{h \to 0} \frac{T_{n+1}}h = 0$ , 则称该数值方法是相容的. 若 $T_{n+1} = o(h^{p+1})$ 且 $p \ge 1$, 则称该方法具有 $p$ 阶精度(或 $p$ 阶相容).

**Remark.** 为什么必须要求 $T_{n + 1} = o(h)$ ? 能不能是 $o(h^{1/2})$ ? 这样 $T_{n + 1}$ 只是收敛的慢一些吗?

答案是否定的, 假设我们使用的步长为 $h$, 总步数 $N = \frac{T - t_0}h$

全局误差 $E_N \approx N \cdot T_{n+1} \approx \frac{T - t_0}h \cdot T_{n+1}$ , 希望 $h \to 0$ 时 $E_N \to 0$, 因此希望 $\lim\limits_{h \to 0} \frac{T_{n+1}}h = 0$

如果 $T_{n+1} = o(h^{1/2}), E_N \approx \frac1h \cdot o(h^{1/2}) = o(h^{-1/2})$ 步长越小误差越大,从而数值解完全发散.



**例子.** 证明梯形公式
$$
y_{n+1}=y_n+\frac{h}2\left(f\left(t_n, y_n\right)+f\left(t_{n+1}, y_{n+1}\right)\right) \text {. }
$$

的局部截断误差为 $\tau(h)=O\left(h^3\right)$ .

**证明.** 假设 $y$ 为精确解
$$
\tau(h) = y(t_{n+1}) - \left[ y(t_n) + \frac{h}2 \left( f(t_n, y(t_n)) + f(t_{n+1}, y(t_{n+1})) \right) \right]
$$
其中
$$
y(t_{n+1}) = y(t_n) + h y'(t_n) + \tfrac{h^2}2 y''(t_n) + \tfrac{h^3}6 y'''(t_n) + O(h^4) \\
$$
因此上式
$$
\begin{aligned}
\tau(h) &= h y'(t_n) + \tfrac{h^2}2 y''(t_n) + \tfrac{h^3}6 y^{(3)}(t_n) + O(h^4) \\
&\quad - \tfrac{h}2 \left[ f(t_n, y(t_n)) + f(t_{n+1}, y(t_{n+1})) \right] \\[1ex]
&= h y'(t_n) + \tfrac{h^2}2 y''(t_n) + \tfrac{h^3}6 y^{(3)}(t_n) + O(h^4) - \tfrac{h}2 \left[ y'(t_n) + y'(t_{n+1}) \right] \\[1ex]
&= h y'(t_n) + \tfrac{h^2}2 y''(t_n) + \tfrac{h^3}6 y^{(3)}(t_n) + O(h^4) \\
&\quad - \tfrac{h}2 \left( 2y'(t_n) + h y''(t_n) + \tfrac12 h^2 y^{(3)}(t_n) + O(h^3)\right) \\[1ex]
&= -\tfrac1{12} h^3 y'''(t_n) + O(h^4)
\end{aligned}
$$

**例子.**
$$
\begin{aligned}
K_1 &= f\left(t_n, y_n\right) \\
K_2 &= f\left(t_n+c h, y_n+a h K_1\right) \\
y_{n+1} &= y_n+h\left(b_1 K_1+b_2 K_2\right)
\end{aligned}
$$

Taylor 展开: $y_{n+1}=y_n+h\left(b_1+b_2\right) f_n+h^2\left(b_2 c \frac{\partial f}{\partial t}+b_2 a f \frac{\partial f}{\partial y}\right)+\cdots$
$$
\left\{\begin{array}{l}
b_1+b_2=1 \\
b_2 c=\frac12 \\
b_2 a=\frac12
\end{array}\right.
$$
例 $a=c=1, \quad b_1=b_2=\frac12$ 或 $a=c=\frac23 . \quad b_2=\frac34 . \quad b_1=\frac14$.

---

### 稳定性



**定义(零稳定性)** 考虑一个步长为 $h$ 的数值方法 $y_{n+1}=y_n+h \Phi\left(t_n, y_n ; h\right), \quad y_0 \text { given } .$

在区间 $[0, T]$ 上生成数值解 $y_0, y_1, \cdots, y_{N_h}, \quad N_h=\frac{T}h .$ 再考虑一个带扰动的数值格式
$$
z_{n+1}=z_n+h\left(\Phi\left(t_n, z_n ; h\right)+\delta_{n+1}\right), \quad z_0=y_0+\delta_0 .
$$


这里 $\left|\delta_0\right| \le \varepsilon, \quad\left|\delta_{n+1}\right| \le \varepsilon, \quad 0 \le n \le N_h-1 .$

若存在 $h_0>0, C>0$ , 使得对任意 $h \in\left(0, h_0\right] ,\quad \left|\delta_k\right| \le \varepsilon$ , 就有 $\left|z_n-y_n\right| \le C \varepsilon, \quad 0 \le n \le N_h$ ,其中 $C$ 与 $h, n, \varepsilon$ 无关.

**Remark.** 与方程无关, 仅与迭代格式相关.



**定理.** 假设 $\Phi$ 对 $y$ 是 Lipschitz 的, 即 $|\Phi(t, y ; h)-\Phi(t, z ; h)| \le L|y-z| .$ 则单步法必然满足零稳定性.

**证明.** 比较两个递推:
$$
\begin{aligned}
y_{n+1}&=y_n+h \Phi\left(t_n, y_n ; h\right) \\
z_{n+1}&=z_n+h\left(\Phi\left(t_n, z_n ; h\right)+\delta_{n+1}\right)
\end{aligned}
$$


相减得 $z_{n+1}-y_{n+1}=z_n-y_n+h\left[\Phi\left(t_n, z_n ; h\right)-\Phi\left(t_n, y_n ; h\right)\right]+h \delta_{n+1} .$ 因此

$$
\left|z_{n+1}-y_{n+1}\right| \le\left|z_n-y_n\right|+h L\left|z_n-y_n\right|+h\left|\delta_{n+1}\right| .
$$


记 $e_n=\left|z_n-y_n\right| .$ 于是 $e_{n+1} \le(1+h L) e_n+h \varepsilon .$ 又有 $e_0=\left|z_0-y_0\right|=\left|\delta_0\right| \le \varepsilon .$

用离散 Gronwall 不等式可得 $e_n \le(1+T) e^{L T} \varepsilon .$

令 $C=(1+T) e^{L T} $ , 这个常数依赖于 $T$ 和 Lipschitz 常数 $L$ , 但不依赖于 $h$ , 即证零稳定性.





考虑 $y' = f(t, y)$ 的一般 $k$ 步线性多步法
$$
\sum_{j=0}^k \alpha_j y_{n+j} = h \sum_{j=0}^k \beta_j f(t_{n+j}, y_{n+j})
$$
其中 $\alpha_k \neq 0$., 且假设与第二特征多项式 $\sigma(\zeta) = \sum\limits_{j=0}^k \beta_j \zeta^j$ 没有公共根.

**定义. (零稳定性)** 当步长 $h \to 0$ 时, 线性多步法退化为其对应的齐次线性常系数差分方程:
$$
\sum_{j=0}^k \alpha_j y_{n+j} = 0
$$
若对于任意有界的初始条件 $y_0, y_1, \dots, y_{k-1}$, 解序列 $\{y_n\}$ 当 $n \to \infty$ 时均保持有界, 则称该线性多步法是零稳定的.

**定理.** 特征多项式 $\rho(\zeta) = \sum\limits_{j=0}^k \alpha_j \zeta^j$ 的所有根满足根条件, 即 $|\zeta_i| \le 1$; 且若 $|\zeta_i| = 1$, 则其重数 $r_i = 1$ $\iff$ 序列 $\{y_n\}$ 有界

**引理.** $\rho(\zeta) = \alpha_k \zeta^k + \alpha_{k-1} \zeta^{k-1} + \dots + \alpha_1 \zeta + \alpha_0 = 0$ 有 $m$ 个互不相同的复数根 $\zeta_1, \zeta_2, \dots, \zeta_m$, 其对应的代数重数分别为 $r_1, r_2, \dots, r_m$, 且满足 $\sum\limits_{i=1}^m r_i = k$. 则通解为
$$
y_n = \sum_{i=1}^m \sum_{s=0}^{r_i-1} c_{is} n^s \zeta_i^n
$$
证明略

**证明.** "$\impliedby$" 分析通解 $\displaystyle y_n = \sum_{i=1}^m \sum_{s=0}^{r_i-1} c_{is} n^s \zeta_i^n$ 中的任意一项 $n^s \zeta_i^n$:

1. 若 $|\zeta_i| < 1$,  则 $\lim\limits_{n \to \infty} n^s |\zeta_i|^n = 0$. 因此, 存在一个正数 $M$, 使得对于所有的 $n$, 该项的绝对值严格有界.
2. 若 $|\zeta_i| = 1$, 此根必为单根, 即 $r_i = 1$. 该项退化为 $c_{i0} \zeta_i^n$. 有 $|c_{i0} \zeta_i^n| = |c_{i0}|$ 不随 $n$ 增长.

"$\implies$" 采用反证法, 假设根条件不成立, 则存在以下两种违背情形之一.

- Case1.存在某个特征根 $\zeta_p$ 满足 $|\zeta_p| > 1$.

由于差分方程是线性的, 通解由初值决定. 构造一组特定的有界初始条件, 使得解中仅包含与 $\zeta_p$ 相关的项, 即 $c_{p0} \neq 0$, 而其余所有系数均为 $0$. 此时解退化为 $y_n = c_{p0} \zeta_p^n$ . 因为 $|\zeta_p| > 1$, 当 $n \to \infty$ 时, $|\zeta_p|^n \to \infty$. 导致 $|y_n| \to \infty$, 与零稳定性的有界性要求产生矛盾.

- Case2. 存在某个特征根 $\zeta_q$ 满足 $|\zeta_q| = 1$, 且为重根(重数 $r_q \ge 2$).

同理, 构造特定的初始条件, 使得解中只保留对应于该重根的最高次项, 即令 $c_{q, 1} \neq 0$(因为 $r_q \ge 2$, 所以 $s$ 至少可取到 $1$), 其余系数为 $0$.

此时解的形式为 $y_n = c_{q,1} n \zeta_q^n$, 当 $n \to \infty$ 时, $|y_n| \to \infty$. 解序列再次发散, 与零稳定性矛盾.



**定义.**  将数值方法应用于试验方程 $y'=\lambda y$, 若对一切
$$
\mu=\lambda h \in R \subset \mathbb{C}
$$


都是绝对稳定的, 则称区域 $R$ 为该方法的**绝对稳定域**.

**例子.** 对向后 Euler 方法, 误差 $e_n$ 满足 $e_{n+1}=e_n+\lambda h e_{n+1},$

从而绝对稳定域为 $|1-\xi|>1 .$ 这是以 $(1,0)$ 为中心, 半径为 1 的圆外部.

---

### 收敛性

**定义(收敛性) ** 定义在节点 $t_n$ 处的全局误差 (Global Error) 为 $e_n = y(t_n) - y_n$.

如果对于积分区间 $[t_0, T]$ 上的任意固定点 $t = t_n$(即当 $h \to 0$ 时, $n \to \infty$ 且保持 $nh = t - t_0$ 固定), 数值解满足:

$$
\lim_{\substack{h \to 0 \\ nh = t-t_0}} \| y(t_n) - y_n \| = 0
$$
则称该数值方法是收敛的. 若全局误差满足 $\| e_n \| \le C h^p$, 其中 $C$ 为不依赖于 $h$ 的常数, 则称该方法具有 $p$ 阶收敛性.



**定理.** 相容性 + 稳定性 $\iff$ 收敛性

**例子.** 考虑单步法的通用格式 $y_{n+1} = y_n + h \Phi(t_n, y_n; h)$

- 相容性条件 : 局部截断误差(Local Truncation Error, LTE)满足 $\mathcal{O}(h^{p+1})$.
- 稳定性条件 : 增量函数 $\Phi$ 关于 $y$ 满足 Lipschitz 条件, 即存在常数 $L > 0$, 使得 $|\Phi(t, y; h) - \Phi(t, \bar{y}; h)| \le L|y - \bar{y}|$.

则全局误差 $|e_n| = |y_n - y(t_n)|$ 满足 $|y_n - y(t_n)| \le C h^p$, 即该方法是 $p$ 阶收敛的.

**引理.** 假如 $|e_{n+1}| \le (1+Lh)|e_n| + C h^{p+1}$ , 则 $|e_n| \le \frac{C h^p}L (e^{LT} - 1) = \mathcal{O}(h^p)$.

**引理证明.** $|e_{n + 1}| \le \dfrac{(1 + Lh)^{n + 1} - 1}L Ch^p$ , 再用 $hn \le T$

回到原题, 定义局部参考解 $\overline{y}_{n+1} = y(t_n) + h \Phi(t_n, y(t_n); h)$
$$
\begin{aligned}
|y(t_{n+1}) - y_{n+1}|
&\le |y(t_{n+1}) - \overline{y}_{n+1}| + |\overline{y}_{n+1} - y_{n+1}| \\
&\le C h^{p+1} +  \left| y(t_n) - y_n \right| + h \left| \Phi(t_n, y(t_n); h) - \Phi(t_n, y_n; h) \right| \\
&\le |e_n| + h L |y(t_n) - y_n|
= (1+Lh)|e_n|
\end{aligned}
$$
代入引理即证得全局收敛性 $|e_n| \le C h^p$.

---

### Runge Kutta方法

$$
\begin{aligned}
& K_i=f\left(t_n+c_i h, y_n+h \sum_{j=1}^s a_{i j} K_j\right) \qquad i=1:s \\
& y_{n+1}=y_n+h\left(\sum_{i=1}^s b_i K_i\right)
\end{aligned}
$$

隐式 RK 方法满足

$$
\begin{cases}
\sum\limits_{j=1}^s c_j^{k-1} a_{i j}=\frac1k c_i^k, & i, k=1: s \\
\sum\limits_{j=1}^s b_j c_j^{k-1}=1 / k, & k=1: s
\end{cases}
$$
**推导.** $\displaystyle y'=f(t, y) \implies y_{n+1}=y_n+\int_{t_n}^{t_{n+1}} f(t, y)~d t$

取 $f(t, y) = t^k, \quad k = 0:s-1$ 然后取 $t_n = 0, y(t_n) = 0$ , 应有
$$
y(t_{n + 1}) = \frac1{k + 1} h^{k + 1} = y_{n + 1} = y_n+\int_{t_n}^{t_{n+1}} f(t, y)~d t=   h \sum_{i = 1}^s b_i (c_i h)^k, \quad k = 0:s-1
$$
化简解即得第二个式子.
$$
K_i = \frac1{k + 1}(c_ih)^{k + 1} = y(t_n + c_ih) = y_n + \int_{t_n}^{t_n + c_ih} f(t, y)~dt = h \sum_{j = 1}^s a_{ij} (c_j h)^{k - 1}
$$
化简解即得第一个式子.
