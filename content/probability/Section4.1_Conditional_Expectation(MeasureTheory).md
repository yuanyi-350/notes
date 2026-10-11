### 条件期望

设 $(\Omega, \mathcal{F}, \mathbb{P})$ 为一个概率空间, $X$ 和 $Y$ 是定义在该空间上的随机变量. $X$ 是Lebesgue可积的.

随机变量 $Y$ 会在 $\Omega$ 上诱导生成一个 $\mathcal{F}$ 的子 $\sigma$-代数, 记为 $ \sigma(Y) = \{Y^{-1}(B) : B \in \mathcal{B}(\R)\} \subseteq \mathcal{F} $

定义条件期望 $\mathbb{E}[X|Y]$ 为一个随机变量 $\varphi$ (更严格地说, 是a.s. 意义下的r.v.等价类)

**动机.** 希望 $\varphi(y) = \mathbb{E}(X \mid Y=y) = \int_{-\infty}^{\infty} x \frac{f(x, y)}{f_Y(y)} \, dx$ , 可以将 $Y$ 看成先验, 输入 $Y = y$ 这个条件, 输出期望 $\varphi(y)$ ,

于是应满足

- 可测性 (Measurability) : $\varphi$ 必须是 $\sigma(Y)$-可测的.

  推论: 根据 Doob-Dynkin 引理, 由于 $\varphi$ 是 $\sigma(Y)$-可测的, 必然存在一个 Borel 可测函数 $g: \R \to \R$, 使得 $\varphi(\omega) = g(Y(\omega))$.

- 局部积分等式 (Partial Averaging) : 对于任意的集合 $A \in \sigma(Y)$ ,
  $$
  \int_A \varphi~d\mathbb{P} = \int_A X \, d\mathbb{P}, \quad \forall A \in \sigma(Y)
  $$



**验证.** 局部积分等式。任意集合 $A \in \sigma(Y)$ 都可以表示为 $A = \{\omega \in \Omega : Y(\omega) \in B\}$，其中 $B$ 是 $\mathbb{R}$ 上的某个 Borel 集。

计算 $\varphi(Y)$ 在集合 $A$ 上的积分：
$$
\begin{aligned}
\int_A \varphi(Y) \, d\mathbb{P}
&= \int_{\{Y \in B\}} \varphi(Y) \, d\mathbb{P} \xlongequal{\text{LOTUS}} \int_B \varphi(y) f_Y(y) \, dy \\
&= \int_B \left( \int_{-\infty}^{\infty} x \frac{f(x, y)}{f_Y(y)} \, dx \right) f_Y(y) \, dy \\
&= \int_B \int_{-\infty}^{\infty} x f(x, y) \, dx \, dy 
\end{aligned}
$$
另一方面，计算 $X$ 在集合 $A$ 上的积分：
$$
\int_A X \, d\mathbb{P} = \int_{\{Y \in B\}} X \, d\mathbb{P} = \iint_{x \in \mathbb{R}, y \in B} x f(x, y) \, dx \, dy
$$


**重期望公式.** 设 $\mathbb{E}X$ 存在且有限, 则 $\mathbb{E} X = \mathbb{EE}(X | Y)$.

**证明.** 观察局部积分等式: $\forall A \in \sigma(Y), \int_A Z \, \mathrm{d}\mathbb{P} = \int_A X \, \mathrm{d}\mathbb{P}$.

直接令 **$A = \Omega$** 代入等式, 即得
$$
 \int_\Omega Z \, \mathrm{d}\mathbb{P} = \int_\Omega X \, \mathrm{d}\mathbb{P}
$$
写回期望的符号, 即 $\mathbb{E}[\mathbb{E}[X|Y]] = \mathbb{E}[X]$ 即证.



**引理.** 如果 $\tau$ 是 $\sigma(X)$ 可测的, 则 $\mathbb{E}(\tau Y | X) = \tau \cdot \mathbb{E}(Y|X)$

根据条件期望的定义, 只需验证 $\tau \cdot \mathbb{E}(Y|X)$ 是 $\sigma(X)$ 可测的(显然) 并且
$$
\int_A \tau \cdot \mathbb{E}(Y|X)~d\mathbb{P} = \int_A \tau Y ~d\mathbb{P}, \quad A \in\sigma(X)
$$

方法是经典的, 示性函数 $\to$ 简单函数 $\to$ 一般函数

设 $\tau = \mathbb{I}_B$, 其中 $B \in \sigma(X)$. 对于任意 $A \in \sigma(X)$,
$$
\int_A \mathbb{I}_B \mathbb{E}(Y | X)~d\mathbb{P}
= \int_{A \cap B} \mathbb{E}(Y | X)~d\mathbb{P} = \int_{A \cap B} Y~d\mathbb{P} = \int_A \mathbb{I}_B Y d\mathbb{P}
$$
**Remark.** 这里 $\tau$ 经常取 $\mathbb{E}(Y|X)$





**离散情形.** 假设 $Y$ 是一个离散随机变量, 只能取可数个值 $y_1, y_2, y_3, \dots$.
$$
\varphi(y_i) = \mathbb{E}(X|Y = y_i) = \sum_j x_j \mathbb{P}(X=x_j | Y=y_i)
$$


**理解.** 条件概率常用来刻画 Markov 过程, 比如只知道 $X_n$ 的分布, 而不知道 r .v. $X_n$ 的具体值.

因此我们用随机变量 $\mathbb{E}(X_{n + 1}| X_n)$ 来刻画 $X_{n + 1}$ 的期望. 自变量为 $X_n$ 的取值, 因变量为 $X_n$ 取到该值条件下的期望.

---

**存在性与唯一性.**

在可测空间 $(\Omega, \sigma(Y))$ 上, 定义一个新的带号测度 (Signed measure)

$$
\nu(A) = \int_A X \, d\mathbb{P}, \quad \forall A \in \sigma(Y)
$$
显然,  $\nu \ll \mathbb{P}|_{\sigma(Y)}$ , 根据 Radon-Nikodym 定理, Radon-Nikodym导数 $\frac{d\nu}{d\mathbb{P}|_{\sigma(Y)}}$ 在 a.s. 的意义下存在唯一, 使得所有 $A \in \sigma(Y)$, 有

$$
\nu(A) = \int_A \frac{d\nu}{d\mathbb{P}|_{\sigma(Y)}} \, d\mathbb{P}
$$
$\mathbb{E}[X|Y] \triangleq \dfrac{d\nu}{d\mathbb{P}|_{\sigma(Y)}}$

这套定义规避了经典概率论中当 $\mathbb{P}(Y=y) = 0$ (例如连续型r.v.) 时, 由于分母为零导致 $P(X|Y=y) = \frac{P(X, Y=y)}{P(Y=y)}$ 无法定义的问题.




### Hahn 分解定理

设 $(X, \mathcal{M})$ 是可测空间, $\nu$ 是其上的一个带号测度 (Signed Measure).

根据带号测度的定义, 为了避免出现 $\infty - \infty$ 这种无意义的运算, $\nu$ 不能同时取 $+\infty$ 和 $-\infty$.

无妨假设 $\nu$ 不取 $+\infty$. (即任何可测集 $A$, 都有 $\nu(A) < \infty$).

- 正集 (Positive Set) : 一个集合 $P$ 被称为正集, 如果对于它的任何可测子集 $E \subseteq P$, 都有 $\nu(E) \ge 0$.
- 负集 (Negative Set) : 同理, 任何子集测度均 $\le 0$.



**引理.** 如果一个可测集 $A$ 满足 $\nu(A) > 0$, 则 $A$ 中必包含子集 $A^*$是正集, 且 $\nu(A^*) \ge \nu(A) > 0$.

**证明.**

1. 如果 $A$ 已经是正集, 直接令 $A^* = A$, 引理得证.

2. 如果 $A$ 不是正集, 说明 $A$ 包含测度为负的子集. 令
   $$
   t_1 = \inf\{\nu(E) : E \subseteq A\}
   $$
   因为有负子集, 所以 $t_1 < 0$ (可能为 $-\infty$).

3. 在 $A$ 中找一个集合 $E_1$, 使得 $\nu(E_1) < \max\left(\frac{t_1}2, -1\right)$.

4. 把 $E_1$ 挖掉, 得到 $A_1 = A \setminus E_1$. 此时 $\nu(A_1) = \nu(A) - \nu(E_1) > \nu(A)$.

5. 如果 $A_1$ 是正集, 证明结束. 如果不是, 继续这个过程: 在 $A_{k-1}$ 中找下确界
   $$
   t_k = \inf\{\nu(E) : E \subseteq A_{k-1}\} < 0
   $$
   并挖去一个满足 $\nu(E_k) < \max\left(\frac{t_k}2, -1\right)$ 的子集 $E_k$.

如果这个过程在某一步停止, 即得正集. 如果无限进行下去, 定义最终剩下的集合为 $A^* = A \setminus \bigcup\limits_{k=1}^\infty E_k$.

下证 $A^*$ 是一个正集. 用反证法, 假设 $A^*$ 不是正集, 即包含子集 $C \subseteq A^*$ 满足 $\nu(C) < 0$.

**Step1.** 因为所有 $E_k$ 互不相交, 由测度的可数可加性:
$$
\nu(A^*) = \nu(A) - \sum_{k=1}^\infty \nu(E_k)
$$
因为假设 $\nu$ 不取 $+\infty$, 所以 $\nu(A^*) < \infty$. 因此右边的级数必须收敛, 有 $\lim\limits_{k \to \infty} \nu(E_k) = 0$.

根据挑选 $E_k$ 的规则 $\nu(E_k) < \max\left(\frac{t_k}2, -1\right) \le 0$, 因此 $\lim\limits_{k \to \infty} t_k = 0$

**Step2.** $C \sube A^* \sube A_{k - 1}$ , 必有 $t_k \le \nu(C)$ 对所有 $k$ 成立.

取 $k \to 0$, 即知 $0 \le \nu(C)$, 这与 $\nu(C) < 0$ 矛盾! 引理得证.



**定理 (Hahn 分解定理).** 全空间 $X$ 可以被划分为两个不相交的可测集 $P$ 和 $N$ (即 $P \cup N = X$ 且 $P \cap N = \emptyset$), 使得 $P$ 是一个正集, $N$ 是一个负集. 这种划分 $(P, N)$ 被称为 $\nu$ 的一个 Hahn 分解. 而且这种分解在零测的意义下是唯一的.

**证明.** **Step1.** 考虑全空间 $X$ 中所有的正集. 令 $s = \sup \{ \nu(P) : P \text{ 且 } P \text{ 是正集} \}$.

因为空集 $\emptyset$ 是一个正集且 $\nu(\emptyset) = 0$, 所以 $s \ge 0$.

注意到, 存在正集序列 $P_k$, 使得 $\lim\limits_{k \to \infty} \nu(P_k) = s$, 令 $P = \bigcup\limits_{k=1}^\infty P_k$ 依然是正集.

并且 $\nu(P) \ge \nu(P_k)$. 取极限得到 $\nu(P) \ge s$. 但 $s$ 已经是上确界了, 所以必须有 **$\nu(P) = s$**.

**Step2.** 令 $N = X \setminus P$. 全空间被划分为 $P$ 和 $N$, 往证 $N$ 是一个负集. 反证法, 假设 $N$ 不是一个负集, 即存在 $E \subseteq N$, 使得 $\nu(E) > 0$.

根据引理, 由于 $\nu(E) > 0$, 则 $E$ 中包含子集 $E^*$ 使得 $\nu(E^*) > 0$, 令 $P_\text{new} = P \cup E^*$.

因为 $P$ 是正集, $E^*$ 是正集, 且它们互不相交(因为 $E^* \subseteq N$), 所以 $P_\text{new}$ 也是正集, 并且

$$
\nu(P_\text{new}) = \nu(P) + \nu(E^*) = s + \nu(E^*) > s
$$
这与 $s$ 是所有正集测度的上确界矛盾!





**定义.(相互奇异)** 设 $\mu_1$ 和 $\mu_2$ 是定义在可测空间 $(X, \mathcal{M})$ 上的两个非负测度.

若存在全空间 $X$ 的一个划分 $X = A \cup B$ 且 $A \cap B = \emptyset$, 使得 $\mu_1(B) = 0$ , $\mu_2(A) = 0$ . 则称 $\mu_1$ 与 $\mu_2$ 相互奇异, 记作 **$\mu_1 \perp \mu_2$**.



**定理.(Jordan Decomposition)** 设 $\nu$ 是可测空间 $(X, \mathcal{M})$ 上的一个带号测度(按定义, $\nu$ 不能同时取 $+\infty$ 和 $-\infty$). 则存在唯一的一对非负测度 $\nu^+$ 和 $\nu^-$, 使得 $\nu = \nu^+ - \nu^-$ 以及 $\nu^+ \perp \nu^-$ (相互奇异)

**证明.** **存在性.** 定义 $\nu^+(A) = \nu(A \cap P)$ 以及 $\nu^-(A) = -\nu(A \cap N)$ 都是合法的非负测度.
$$
\nu(A) = \nu(A \cap P) + \nu(A \cap N) = \nu^+(A) - (-\nu(A \cap N)) = \nu^+(A) - \nu^-(A)
$$
相互奇异性 $\nu^+ \perp \nu^-$ 是显然的.

**唯一性.** 假设存在另外两个非负测度 $\mu^+$ 和 $\mu^-$, 满足 $\nu = \mu^+ - \mu^-$ 以及 $\mu^+ \perp \mu^-$

只需证所有的可测集 $E$, 都有 $\mu^+(E) = \nu^+(E)$ 且 $\mu^-(E) = \nu^-(E)$.

因为 $\mu^+$ 与 $\mu^-$ 相互奇异, 必定存在全空间 $X$ 的划分 $X = A \cup B$ (且 $A \cap B = \varnothing$), 使得 $\mu^+(B) = 0$ 以及 $\mu^-(A) = 0$

从而任意子集 $E \subseteq A$ 均有
$$
\nu(E) = \mu^+(E) - \mu^-(E) = \mu^+(E) - 0 = \mu^+(E) \ge 0
$$
说明 $A$ 也是 $\nu$ 的一个正集.

同理, 对于 $B$ 中的任意子集 $F \subseteq B$ 有
$$
 \nu(F) = \mu^+(F) - \mu^-(F) = 0 - \mu^-(F) = -\mu^-(F) \le 0
$$
说明, $B$ 也是 $\nu$ 的一个负集.

现在有两套 Hahn 分解: $(P, N)$ 和 $(A, B)$. 从而有 $\nu(P \cap B) \ge 0$ 和 $\nu(A \cap N) = 0$

对于任意可测集 $E$,
$$
\nu^+(E) = \nu(E \cap P) = \nu(E \cap P \cap A) + \nu(E \cap P \cap B) = \nu(E \cap P \cap A) \\
\mu^+(E) = \nu(E \cap A) = \nu(E \cap A \cap P) + \nu(E \cap A \cap N) = \nu(E \cap A \cap P)
$$
即 $\nu^+ \equiv \mu^+$, 唯一性证毕!





### Radon-Nikodym定理

**定义.** 如果测度 $\nu$ 关于测度 $\mu$ 是绝对连续的 (Absolutely Continuous), 记作 $\nu \ll \mu$, 即对于任意 $A \in \mathcal{M}$, 如果 $\mu(A) = 0$, 则必然有 $\nu(A) = 0$.



**(Radon-Nikodym定理).** 设 $(X, \mathcal{M})$ 是一个可测空间($X$ 是全空间, $\mathcal{M}$ 是其上的 $\sigma$-代数).

设 $\mu$ 和 $\nu$ 是定义在该空间上的两个$\sigma$-有限测度 ( $\sigma$-finite measures) 并且 $\nu \ll \mu$

则存在一个关于 $\mu$ 几乎处处唯一的非负可测函数 $f: X \to [0, \infty)$, 使得对于任意的 $A \in \mathcal{M}$, 都有:

$$
\nu(A) = \int_A f \, d\mu
$$
这个函数 $f$ 就被称为 $\nu$ 关于 $\mu$ 的 Radon-Nikodym Derivative, 通常记作 $f = \frac{d\nu}{d\mu}$.

**证明1 (冯·诺伊曼).** 无妨假设 $\mu$ 和 $\nu$ 都是有限测度, 即 $\mu(X) < \infty, \nu(X) < \infty$.

**Step1.** 定义一个新的测度 $\varphi = \mu + \nu$, $\varphi$ 显然也是一个有限测度,并且任意集合 $A$, 都有 $\nu(A) \le \varphi(A)$.

现在, 考察关于测度 $\varphi$ 的平方可积函数空间 $L^2(\varphi)$. 定义一个映射 $T: L^2(\varphi) \to \R$ 使得 $T(g) = \int_X g \, d\nu $

**Claim.** $T$ 是有界线性泛函

显然 $T$ 是线性的. 只需证它在 $L^2(\varphi)$ 上是有界的, 根据 Cauchy-Schwarz Inequality

$$
\begin{aligned}
|T(g)| &\le \int_X |g| \, d\nu \le \int_X |g| \, d\varphi
\le \left( \int_X |g|^2 \, d\varphi \right)^{1/2} \left( \int_X 1^2 \, d\varphi \right)^{1/2} \\
&\le \|g\|_{L^2(\varphi)} \sqrt{\varphi(X)}
\end{aligned}
$$
**Recall. (Riesz Representation Theorem, 见杨诗武老师数分三讲义)**

设 $\mathcal{H}$ 是一个实或复的希尔伯特空间(带有内积 $\left< \cdot, \cdot \right>$ 和由内积诱导的范数 $\|\cdot\|$ 的完备向量空间).

设 $T: \mathcal{H} \to \R$(或 $\mathbb{C}$)是一个有界线性泛函, 则存在唯一的一个向量 $y \in \mathcal{H}$, 使得 $T(x) = \left< x, y \right>$. 并且, $\|T\| = \|y\|$.

**Step2.** 存在一个关于 $\varphi$ 几乎处处唯一的函数 $h \in L^2(\varphi)$, 使得 $T(g) = \int_X g \cdot h \, d\varphi$ , 即
$$
T(g) = \int_X g \, d\nu = \int_X g h \, d\varphi = \int_X g h \, d\mu + \int_X g h \, d\nu
$$
因此 (这里用到了 $\mu, \nu$ 是有限测度)
$$
\int_X g (1 - h) \, d\nu = \int_X g h \, d\mu \quad \tag{*}
$$
在 (*) 让 $g$ 等于某个可测集 $A$ 的指示函数 $\mathbb{I}_A$, 则 $\nu(A) = \int_A h \, d\varphi$

因为 $0 \le \nu(A) \le \varphi(A)$ 对所有 $A$ 成立, 即有 $0 \le h(x) \le 1 \quad (\varphi \,a.e.$)

设 $B = \{x \in X : h(x) = 1\}$. 将 $g = \mathbb{I}_B$ 代入 (*)  , 于是
$$
\int_B (1 - 1) \, d\nu = \int_B 1 \, d\mu \implies 0 = \mu(B)
$$


根据绝对连续性 $\nu \ll \mu$, 必然有 $\nu(B) = 0$, 从而 $\varphi(B) = 0$.  即证 $0 \le h(x) < 1 ,\quad \varphi\, a.e.$

**Step3.** 有 $1 - h(x) \ne 0,\quad \varphi\, a.e.$ , 可以做分母.

在 (*), 令测试函数 $g = \frac{\mathbb{I}_A}{1 - h}$ , 得到
$$
\int_X \frac{\mathbb{I}_A}{1 - h} (1 - h) \, d\nu = \int_X \frac{\mathbb{I}_A}{1 - h} h \, d\mu
$$
即得 $\int_A \, d\nu = \int_A \frac{h}{1 - h} \, d\mu$ , 令 $f = \frac{h}{1 - h}$ 为非负的可测函数, 从而得到 $\nu(A) = \int_A f \, \, d\mu$. 证毕！

---

**证明2.** 使用 Hahn 分解定理来证明 Radon-Nikodym 定理

定义一个候选函数家族
$$
\mathcal{F} = \left\{ g: X \to [0, \infty) | g \text{ 是可测的, 且对任意 } A \in \mathcal{M}, \text{ 都有 } \int_A g \, d\mu \le \nu(A) \right\}
$$
注: 因为常数函数 $g=0$ 显然在 $\mathcal{F}$ 里, 所以 $\mathcal{F} \ne \varnothing$.

**引理: ** 如果 $g_1, g_2 \in \mathcal{F}$, 那么它们的逐点最大值 $g = \max(g_1, g_2)$ 也属于 $\mathcal{F}$.

证明略

令 $\alpha = \sup \left\{ \int_X g \, \mathrm{d}\mu | g \in \mathcal{F} \right\} \le \nu(X) < \infty$ , 必然存在函数序列 $\{g_n\} \subset \mathcal{F}$, 使得 $\lim\limits_{n \to \infty} \int_X g_n \, \mathrm{d}\mu = \alpha$.

构造一个单调递增的序列 $h_n = \max(g_1, g_2, \dots, g_n) \in \mathcal{F}$, 且 $h_n \uparrow f$ , 根据单调收敛定理 (MCT),
$$
\int_X f \, \mathrm{d}\mu = \lim_{n \to \infty} \int_X h_n \, \mathrm{d}\mu = \alpha
$$
并且对于任意集合 $A$, 因为 $\int_A h_n \, \mathrm{d}\mu \le \nu(A)$, 取极限也得到 $\int_A f \, \mathrm{d}\mu \le \nu(A)$. 即证极限函数 $f \in \mathcal{F}$

**Claim.** 下证 $f$ 是 Radon-Nikodym 导数.

定义一个余数测度 $\lambda(A) = \nu(A) - \int_A f \, \mathrm{d}\mu$ , 下证 $\lambda$ 必定是零测度

因为 $f \in \mathcal{F}$, 所以对于任何 $A$, 都有 $\lambda(A) \ge 0$. 即 $\lambda$ 是一个合法的非负有限测度.

既然 $\nu \ll \mu$ 且积分 $\int f \mathrm{d}\mu$ 也关于 $\mu$ 绝对连续, 余数测度 $\lambda \ll \mu$ . 待定一个极小的正数 $\varepsilon > 0$,

对带号测度 $\varphi = \lambda - \varepsilon \mu$ 应用 Hahn 分解定理, 存在一个正集 $P$ 和一个负集 $N$, 使得 $X = P \cup N$ 且互不相交.

- 在正集 $P$ 上, $\varphi(A) \ge 0 \implies \lambda(A) \ge \varepsilon \mu(A)$
- 在负集 $N$ 上, $\varphi(A) \le 0 \implies \lambda(A) \le \varepsilon \mu(A)$

**Case1.** $\mu(P) = 0$ , 因为 $\lambda \ll \mu$ 有 $\lambda(P) = 0$. 从而
$$
\lambda(X) = \lambda(P) + \lambda(N) = \lambda(N) \le \varepsilon \mu(N) \le \varepsilon \mu(X)
$$
让 $\varepsilon \to 0$, 从而 $\lambda(X) \le 0$. 即证 $\lambda$ 必定是零测度

**Case2.** $\mu(P) > 0$

根据 Hahn 分解定理的性质, 在正集 $P$ 上, 对于任意可测子集 $A \in \mathcal{M}$, 都有 $\varphi(A) \ge 0$, 即
$$
\nu(A) - \int_A f \, d\mu = \lambda(A) \ge \varepsilon \mu(A)
$$
从而 $\int_A (f + \varepsilon) \, \mathrm{d}\mu \le \nu(A), \quad \forall A \subset P$

构造 $f^*(x) = f(x) + \varepsilon \chi_P(x)$ , 其中 $\chi_P$ 是集合 $P$ 的示性函数. 显然 $f^*$ 非负可测.

下证 $f^* \in \mathcal{F}$. 对于任意可测集 $E \in \mathcal{M}$, 有
$$
\begin{aligned}
\int_E f^* \, \mathrm{d}\mu &= \int_{E \cap P} f^* \, \mathrm{d}\mu + \int_{E \cap N} f^* \, \mathrm{d}\mu \\
&= \int_{E \cap P} (f + \varepsilon) \, \mathrm{d}\mu + \int_{E \cap N} f \, \mathrm{d}\mu \\
&\le \nu(E \cap P) + \nu(E \cap N) = \nu(E)
\end{aligned}
$$
最后,
$$
\int_X f^* \, \mathrm{d}\mu = \int_X f \, \mathrm{d}\mu + \varepsilon \int_X \chi_P \, \mathrm{d}\mu = \alpha + \varepsilon \mu(P) > \alpha
$$
这与上确界 $\alpha$ 相矛盾!
