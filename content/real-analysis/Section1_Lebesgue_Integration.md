记 $\chi_E$ 为集合 $E$ 的示性函数. 如果 $a_n$ 为常数, $R_n$ 为方体, 那我们称 $\sum\limits_{n=1}^N a_n \chi_{R_n}$ 为**阶梯函数**. 如果更一般的将 $R_n$ 换成是可测集, 那么称这样的函数为**简单函数**.



**定理 3.3. (简单函数逼近定理)** 对任意非负可测函数 $f(x)$ , 存在非负递增简单函数列 $\varphi_k(x)$ 逐点收敛到 $f(x)$ , 即是存在 $\varphi_k(x) \geq 0$ 使得 $\varphi_k(x) \nearrow f(x)$.
$$
E_{j, k}:=
\begin{cases}
\{x \in E : k 2^{-j} \le f(x) <(k+1) 2^{-j}\} & \text { if } k=0, \cdots, j 2^j-1 \\
\{x \in E : f(x) \ge j\} & \text { if } k=j 2^j .
\end{cases}
$$

$$
\varphi_j:=\sum_{k=0}^{j 2^j} k 2^{-j} \chi_{A_{j, k}} \quad \text { for } j \in \mathbb{N}
$$

易知 $0 \leq \varphi_j \leq \varphi_{j+1}$, $j \in \mathbb{N}$. 于是 $\lim\limits_{j \to \infty} \varphi_j(x)$ 有定义 (可能是无穷)

- 当 $f(x)=\infty$, 由于 $\varphi_j(x)=j$, 于是 $\lim\limits_{j \to \infty} \varphi_j(x)=f(x)$

- 当 $f(x) < \infty$, 对于 $j>f(x)$ 有 $\varphi_j(x) \leq f(x)<\varphi_j(x)+2^{-j}$ , 于是 $\lim\limits_{j \to \infty} \varphi_j(x)=f(x)$

即证逐点收敛.

---------

**定理 4.4 (Beppo Levi 非负渐升列积分定理)** 设有定义在 $E$ 上的非负可测函数渐升列:
$$
f_1(x) \le f_2(x) \le \cdots \le f_k(x) \le \cdots,
$$


且有 $\lim\limits_{k \to \infty} f_k(x)=f(x), x \in E$ , 则 $\displaystyle\lim_{k \to \infty} \int_E f_k=\int_E f$

**证明 :** 易知 $f(x)$ 是 $E$ 上的非负可测函数, 积分 $\displaystyle\int_E f$ 有定义.

因为 $\displaystyle\int_E f_k \le \int_E f_{k+1} \quad(k=1,2, \cdots)$, 所以 $\displaystyle\lim_{k \to \infty} \int_E f_k$ 有定义.

而且从函数列的渐升性可知 $\displaystyle\lim_{k \to \infty} \int_E f_k \le \int_E f$.

只需证 $\R^n$ 上非负可测简单函数 $h \le f$, 均有 $\displaystyle\int_E h \le \lim_{k \to \infty} \int_E f_k$.

对于 $\forall \varepsilon > 0$, 记 $E_k=\{x \in E: f_k(x) \ge {\color{red}(1 - \varepsilon)\cdot  h(x)}\}$ 则 $\{E_k\}$ 是递增可测集列, 且 $\lim\limits_{k \to \infty} E_k=E$ .

> [!NOTE]
>
> 当 $m(E) < \infty$ 时, 可以用 $h(x) - \varepsilon$ 代替 $(1 - \varepsilon) h(x)$

$$
\int_E f_k \ge \int_{E_k} f_k \ge \int_{E_k} (1 - \varepsilon)\cdot h = (1 - \varepsilon)\int_{E_k} h
$$

由于 $h$ 是简单函数, 易验证 $\displaystyle\lim_{k \to \infty} \int_{E_k} h = \int_E h$. 进而 $\displaystyle\lim_{k \to \infty} \int_E f_k \ge (1 - \varepsilon)\int_E h$

令 $\varepsilon\to 0$ , 有 $\displaystyle\lim_{k \to \infty} \int_E f_k \ge \int_E h$. 即证 $\displaystyle\lim_{k \to \infty} \int_E f_k = \int_E f$

------

**定理 4.8 (Fatou 引理)** 若 $\{f_k(x)\}$ 是 $E$ 上的非负可测函数列, 则
$$
\int_E \liminf_{k \to \infty} f_k \le \liminf_{k \to \infty} \int_E f_k
$$

**证明 :** 令 $g_k(x)=\inf \{f_j(x): j \ge k\}$ , 我们有 $g_k(x) \le g_{k+1}(x)$

而且得到 $\displaystyle\liminf_{k \to \infty} f_k(x)=\lim_{k \to \infty} g_k(x), \quad x \in E$

从而根据 Beppo Levi 非负渐升列积分定理可知,

$$
\int_E \liminf_{\hat{k} \to \infty} f_k =\int_E \lim_{k \to \infty} g_k=\lim_{k \to \infty} \int_E g_k =\lim_{k \to \infty} \int_E g_k \le \liminf_{k \to \infty} \int_E f_k
$$

**例子(不等号成立)** : 在 $[0,1]$ 上作非负可测函数列: $f_n(x)= \begin{cases}0, & x=0, \\ n, & 0<x<\frac1n , \quad(n=1,2, \cdots) . \\ 0, & \frac1n \le x \le 1\end{cases}$

显然,  $\displaystyle\lim_{n \to \infty} f_n(x)=0(x \in[0,1])$ , 因此我们有 $\displaystyle\int_{[0,1]} \lim_{n \to \infty} f_n=0<1=\lim_{n \to \infty} \int_{[0,1]} f_n$

---------------

**定理 4.14 (Lebesgue控制收敛定理)** 设 $f_k \in L(E)(k=1,2, \cdots)$ , 且有
$$
\lim_{k \to \infty} f_k(x)=f(x), \quad a.e. x \in E
$$

若存在 $E$ 上的可积函数 $F(x)$ , 使得 $|f_k(x)| \le F(x), a.e.$ 那么有 $\displaystyle \lim_{n \to \infty} \int\left|f_n-f\right|=0$, 进而 $\displaystyle\lim_{k \to \infty} \int_E f_k=\int_E f$

**证明 :** 显然, $f(x)$ 是 $E$ 上的可测函数, 且由 $|f_k(x)| \le F(x), a.e.$ 可知 $|f(x)| \le F(x), a. e. $

因此, $f(x)$ 也是 $E$ 上的可积函数. 作函数列 $g_k(x)=\left|f_k(x)-f(x)\right| \quad(k=1,2, \cdots)$

则 $g_k \in L(E)$ , 且 $0 \le g_k(x) \le 2 F(x), a. e. $ 根据 Fatou 引理, 有

$$
\int_E \lim_{k \to \infty} (2 F(x)-g_k(x)) dx \le \liminf_{k \to \infty} \int_E (2 F(x)-g_k(x)) dx
$$


因为 $F(x)$ 以及每个 $g_k(x)$ 都是可积的, 所以得到

$$
\begin{align}
\int_E 2 F - \int_E \lim_{k \to \infty} g_k &\le \int_E 2 F - \limsup_{k \to \infty} \int_E g_k \\
\implies \limsup_{k \to \infty} \int_E g_k &\le \int_E \lim_{k \to \infty} g_k
\end{align}
$$


注意到 $\lim\limits_{k \to \infty} g_k(x)=0, a. e.$ 可得 $\displaystyle\limsup_{k \to \infty} \int_E g_k=0.$ 进而

$$
\left|\int_E f_k-\int_E f\right| \le\left|\int_E\left(f_k(x)-f(x)\right) dx\right| \le \int_E g_k
$$
即证.



**推论(Lebesgue积分的绝对连续性):** 设 $f \in L^1([a, b])$, 则 $\forall \varepsilon>0$, $\exist \delta>0$, 使得 $\forall$ 可测集合 $E \subset [a, b]$ 满足 $m(E)<\delta$ 均有 $\displaystyle\int_E |f|<\varepsilon$.

**证明 :** 假设不成立, 即存在 $\varepsilon_0$ 和 $E_k$ 使得 $m(E_k) < \frac1{2^k}$ 并且 $\displaystyle\int_{E_k} |f| \ge \varepsilon_0$

记 $f_k = f|_{E_k}$, 则显然有 $0 \leq f_k(x) \leq|f(x)|$

另一方面, 考虑集合 $\displaystyle E^*=\limsup_{k \to \infty} E_k=\bigcap_{n=1}^\infty \bigcup_{k=n}^\infty E_k$, 有

$$
m(E^*) \leq \lim_{n \to \infty} m\left(\bigcup_{k=n}^\infty E_k\right) \leq \lim_{n \to \infty} \sum_{k=n}^\infty m\left(E_k\right) \\
\leq \lim_{n \to \infty} \sum_{k=n}^\infty \frac1{2^k} = \lim_{n \to \infty} \frac1{2^{n - 1}} = 0
$$


因此, $m\left(E^*\right)=0$. 由定义, $\forall x \notin E^*$, $\exist$ 某个编号 $N(x)$ s.t. 当 $k>N(x)$ 时有 $x \notin$ $E_k$ , 即 $f_k(x) \to 0$ .

即证 $\lim\limits_{k \to \infty} f_k(x)=0, a.e.$ 显然可积函数 $f \ge f_k$

从而 Lebesgue 控制收敛定理 $\implies$ $\displaystyle\lim_{k \to \infty} \int f_k = \int 0 = 0$, 矛盾! 即证.

---

**命题4.9 (可积函数空间中的典型稠密子空间).** 以下函数空间在 $L^1(E)$ 中稠密:
(1) 简单函数空间;
(2) 阶梯函数空间;
(3) 光滑函数空间 `Mathlib.MeasureTheory.Function.ContinuousMapDense`

**证明:** (1) 假设 $f \in L^1(E)$ , 可分解 $f=f^+-f^-$. 因而存在非负单调升简单函数 $\varphi_k^+ \to f^+$,  $\varphi_k^- \to f^-$. 由 Beppo-Levi 以及定义可知 $\left\|\varphi_k^+-f^+\right\| \to 0,\left\|\varphi_k^--f^-\right\| \to 0$ . 这样定义 $\varphi_k=\varphi^+-\varphi_k^-$, 可知 $\left\|\varphi_k-f\right\| \to 0$ .

(2) 首先可以用简单函数 $g=\sum\limits_{k=1}^N a_k \chi_{E_k}$ 逼近 $f$ 使得 $\|f-g\|<\frac\varepsilon2$ , 不防假设 $E_k$ 互不相交.

只需证明对于每个示性函数 $\chi_{E_k}$ 证明存在阶梯函数 $\varphi_k \xrightarrow{L^1} \chi_{E_k}$ 即可. 

由于阶梯函数的有限线性组合仍是阶梯函数, 有
$$
\left\|\sum_{k = 1}^N a_k\chi_{E_k} - \sum_{k = 1}^N a_k\varphi_k\right\|_{L^1} \le \sum_{k = 1}^N a_k \|\chi_{E_k} - \varphi_k\|_{L^1} \to 0
$$
根据外测度的定义, 显然存在有限方体的并 $I_k$ 使得 $m\left(E_k \Delta I_k\right) \to 0$. 令阶梯函数为 $\chi_{I_k}$ 即可.

(3) 只需用光滑函数在 $L^1$ 度量下逼近 $\chi_{[a, b]}$ 即可, 这是熟知的.

---

**Tonelli 定理仅适用于非负可测函数**

**Fubini 定理 适用于可积函数**

例子. $f(x, y)=\dfrac{x^2-y^2}{\left(x^2+y^2\right)^2}$ 为 $[0,1]^2$ 上的函数.
$$
\int_0^1 \frac{x^2-y^2}{(x^2+y^2)^2}~dy = \left.\frac{y}{x^2+y^2}\right|_0^1 = \frac{1}{x^2+1} \\
\int_0^1 \int_0^1 \frac{x^2-y^2}{(x^2+y^2)^2}~dy~dx = \int_0^1 \frac{1}{x^2+1}~dx = \frac\pi4
$$
同理
$$
\int_0^1 \frac{x^2-y^2}{(x^2+y^2)^2}~dx = -\frac{1}{y^2+1} \\
\int_0^1 \int_0^1 \frac{x^2-y^2}{(x^2+y^2)^2}~dy~dx = -\frac\pi4
$$
原因在于这个函数不可积 : 令 $x=r \cos \theta, \quad y=r \sin \theta, \quad r=\sqrt{x^2+y^2}$ , 那么

- $x^2-y^2=r^2\left(\cos ^2 \theta-\sin ^2 \theta\right)=r^2 \cos 2 \theta$ , 
- $x^2+y^2=r^2$ ，所以 $\left(x^2+y^2\right)^2=r^4$

$$
f(x, y)=\frac{r^2 \cos 2 \theta}{r^4}=\frac{\cos 2 \theta}{r^2} .
$$


面积元 $~dx~dy =r~dr~d \theta$ ，所以在原点附近一个小圆盘 $0<r<\varepsilon$ 上：

$$
\iint|f|~d x~d y \approx \int_0^{\varepsilon} \int_0^{2 \pi} \frac{|\cos 2 \theta|}{r^2} r~d \theta~d r=\int_0^{\varepsilon} \frac{1}{r}~d r \cdot \int_0^{2 \pi}|\cos 2 \theta|~d \theta = \infty
$$
