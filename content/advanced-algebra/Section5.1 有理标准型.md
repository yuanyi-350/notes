#### 问题描述

- **矩阵版本 :** 将矩阵 $A, B \in M_{n \times n}(F)$ 的共轭关系写作 $A \sim B$. 矩阵共轭问题相当于研究商集 $M_{n \times n}(F) / \sim$ .

- **线性映射版本 :** 考虑形如 $(V, T)$ 的资料, 其中 $V$ 是 $n$ 维 $F-$向量空间, 而 $T \in \operatorname{End}(V)$.

  对于资料 $(V, T)$ 和 $(V', T')$, 若存在向量空间的同构 $\varphi: V \xrightarrow{\sim} V'$ 使得下图交换, 即 $\varphi T' = T \varphi$

  <img src="https://cdn.jsdelivr.net/gh/yuanyi-350/image/20250520101903.png" style="zoom:25%;" />

  则记此为 $(V, T) \approx(V', T')$. 易见 $\approx$ 是等价关系. 研究商集$\{$ 资料 $(V, T), \dim V=n\} / \approx$ .

- **模论版本 :** 在同构意义下分类 $n$ 维 $F[X]-$模, 亦即研究商集 $\{n$维 $F[X]-$模 $\} / \simeq$

**命题13.2.1** 上述三种分类问题相互等价: 我们有以下双射

<img src="https://cdn.jsdelivr.net/gh/yuanyi-350/image/20250520102149.png" style="zoom: 33%;" />

---

#### Smith标准型

**约定 12.7.1** 取定交换环 $R$ 和 $n, m \in \Z_{\geq 1}$.

对于任意 $R-$模 $M$ 中的两列元素 $e_1, \cdots, e_n, \quad x_1, \cdots, x_m$ 以及 $R$ 上的矩阵 $A=(a_{i j})_{i, j} \in M_{n \times m}(R)$,

引入形式的记法 $(x_1 | \cdots | x_m) = (e_1 | \cdots | e_n) A$ 来代表 $x_j = \sum\limits_{i=1}^n a_{i j} e_i$ 对所有 $1 \leq j \leq m$ 成立.

**定义-命题12.7.2** 设 $R$ 为交换环. 命 $GL(n, R)$ 为所有满足 $\det P \in R^\times$的 $P \in M_{n \times n}(R)$ 所成集合, 则有
$$
GL(n, R) = \{P \in M_{n \times n}(R): \exists Q, P Q=1_{n \times n}=Q P\} =M_{n \times n}(R)^\times
$$

作为推论,  $GL(n, R)$ 对矩阵乘法成群.

**证明.** 设 $P, Q \in M_{n \times n}(R)$ 满足 $P Q=1_{n \times n}=Q P$ , 则 $1=\det(P Q)=\det P \det Q$ 蕴涵 $P, Q \in GL(n, R)$ .

反之设 $P \in GL(n, R)$ .取 $Q:=(\det P)^{-1} P^{\vee}$ 即有 $P Q=1_{n \times n}=Q P$ .



**引理 12.7.3** 设 $y_1, \cdots, y_m$ 为 $R$-模 $M$ 的元素,  $P \in GL(m, R)$ , 则由
$$
(y_1'|\cdots| y_m')=(y_1|\cdots| y_m) P
$$

确定的 $y_1', \cdots, y_m'$ 生成的子模等于 $\sum\limits_{j=1}^m R y_j$ .

**证明.** 显然 $\sum\limits_{j = 1}^m R y_j' \subset \sum\limits_{j = 1}^m R y_j$. 另一方面 $(y_1|\cdots| y_m)=(y_1'|\cdots| y_m') P^{-1}$, 故同理可见 $\sum\limits_{j = 1}^m R y_j \subset \sum\limits_{j = 1}^m R y_j'$ .



**引理12.7.4** 设 $e_1, \cdots, e_n$ 为自由 $R$-模 $E$ 的基. 对任意 $e_1', \cdots, e_n' \in E$ , 取唯一矩阵 $Q \in M_{n \times n}(R)$ 使得
$$
(e_1'|\cdots| e_n')=(e_1|\cdots| e_n) Q,
$$

则 $e_1', \cdots, e_n'$ 是 $E$ 的基当且仅当 $Q \in GL(n, R)$ .

**证明.** 如果 $e_1', \cdots, e_n'$ 是基, 则它们也可以唯一地通过某个矩阵 $Q'$ 的右乘表出 $e_1, \cdots, e_n$ . 于是有
$$
(e_1|\cdots| e_n)=(e_1'|\cdots| e_n') Q'=(e_1|\cdots| e_n) Q Q',
$$

于是 $Q Q'=1_{n \times n}$ ; 同理有 $Q' Q=1_{n \times n}$ .故 $Q \in GL(n, R)$ .

反之若 $Q \in GL(n, R)$ , 则**引理 12.7.3** 代入 $y_i=e_i$ 和 $y_i'=e_i'$ 说明 $e_1', \cdots, e_n'$ 也生成 $E$ , 而线性关系式 $\sum\limits_{i=1}^n a_i e_i'=0$ 等价于
$$
(e_1' | \cdots | e_n')
\begin{pmatrix}a_1 \\ \vdots \\ a_n \end{pmatrix}
= (e_1 | \cdots | e_n) Q
\begin{pmatrix} a_1 \\ \vdots \\ a_n \end{pmatrix}
= 0
$$

这进一步等价于 $a_1=\cdots=a_n=0$ , 故 $e_1', \cdots, e_n'$ 线性无关.



**定理 12.7.6 (Smith标准型)** 设 $R$ 或者是 $\Z$ 或者是某个域上的一元多项式环. 给定 $A \in M_{n \times m}(R)$ , 存在 $P \in GL(m, R)$ 和 $Q \in GL(n, R)$ 使得
$$
A=Q
\begin{pmatrix}
d_1 & & \\
& d_2 & \\
& & \ddots
\end{pmatrix}
P
$$


其中 $d_1|d_2| \cdots$ 落在对角线上, $d_i \in R$ , 其余空白部分为零.



**推论12.7.8 (不变因子的计算方法)** 设 $R$ 为 $\Z$ 或域上的一元多项式环. 设 $E$ 为秩 $n$ 自由 $R$-模, $N$ 为其子模. 任选 $E$ 的基 $e_1, \cdots, e_n$ 和 $N$ 的生成元 $x_1, \cdots, x_m$,根据 **定义12.7.1** 得到  $A \in M_{n \times m}(R)$, 然后代入**定理12.7.6** 得到 $d_1|d_2| \cdots$ 取 $0 \leq r \leq n$ 使得 $d_j=0 \iff j>r$, 则:

- 此法给出 $E$ 的基 $f_1, \cdots, f_n$ 使得 $N=\bigoplus\limits_{i=1}^r R d_i f_i$
- $E / N \simeq \bigoplus\limits_{i=1}^n R /\left(d_i\right)$ , 其中 $d_i \in R^\times$的直和项可舍去
- 若取 $Q \in GL(n, R)$ 如**定理12.7.6**, 则 $f_1, \cdots f_n$ 可取为下式确定的基

$$
(f_1 | \cdots | f_n) = (e_1|\cdots| e_n) Q .
$$

**证明.** 我们有 $\left(x_1|\cdots| x_m\right)=\left(e_1|\cdots| e_n\right) Q\left(\begin{array}{lll}
d_1 & & \\
& d_2 & \\
& & \ddots
\end{array}\right) P$, 亦即
$$
(x_1|\cdots| x_m) P^{-1} =
(e_1|\cdots| e_n) Q
\begin{pmatrix}
d_1 & & \\
& d_2 & \\
& & \ddots
\end{pmatrix} = (f_1|\cdots| f_n)
\begin{pmatrix}
d_1 & & \\
& d_2 & \\
& & \ddots
\end{pmatrix}
$$

$(x_1|\cdots| x_m) P^{-1}$ 是 $N$ 的一组基, 即 $d_1f_1, \cdots, d_rf_r$ 是一组基.

---

#### 有理标准型

记 $f=c_0+\cdots+c_{n-1} X^{n-1}+X^n \in F[X]$ 的友矩阵 $C_f=\left(\begin{array}{ccccc}
0 & 0 & \cdots & 0 & -c_0 \\
1 & 0 & \cdots & 0 & -c_1 \\
0 & 1 & \cdots & 0 & -c_2 \\
\vdots & & \ddots & & \vdots \\
0 & 0 & \cdots & 1 & -c_{n-1}
\end{array}\right) .$

**定理 13.3.2(有理标准形)** 设 $n \in \Z_{\geq 1}$ 而 $A \in \mathrm{M}_{n \times n}(F)$ , 存在唯一一列前后整除的非常数首一多项式
$$
f_1|\cdots| f_k, \quad k \in \Z_{\geq 1}, \quad f_i \in F[X],
$$

使得 $\sum\limits_{i=1}^k \deg f_i=n$ 而 $A$ 共轭于分块对角矩阵 $\operatorname{diag}\left(C_{f_1}, \cdots, C_{f_k}\right)=\left(\begin{array}{ccc}
\boxed{C_{f_1}} & & \\
& \ddots & \\
& & \boxed{C_{f_k}}
\end{array}\right) .$

上述矩阵称为 $A$ 的有理标准形, 而 $f_1, \cdots, f_k$ 称为 $A$ 的不变因子.

**证明.** 基于**命题13.2.1**的对应, 记 $\boldsymbol{A}$ 对应的 $n$ 维 $F[X]-$模为 $M$.

将 $M$ 代入关于主理想环 $F[X]$ 上的**有限生成模的结构定理 12.6.3**, 存在一列非零真理想 $(f_1) \supset \cdots \supset (f_k)$ 和 $F[X]$ 自由模 $E$
$$
M \simeq F[X] / (f_1) \oplus \cdots \oplus F[X] / (f_k) \oplus E
$$
由于 $\dim_FM$ 有限, $\dim_F F[X]$ 无限, 因此 $E = 0$. 对每个 $I_i$ 取唯一的首一多项式 $f_i$ 使得 $I_i=\left(f_i\right)$ 即得
$$
M \simeq \bigoplus_{i=1}^k F[X] / (f_i)
$$
下面考虑非零循环 $F[X]-$模 $M:=F[X] /(f)$ , 其中 $f=c_0+\cdots+c_{n-1} X^{n-1}+X^n \in F[X]$

取其有序基为 $1 + (f), X + (f), \cdots, X^{n-1} + (f)$.

- 当 $i<n-1$ 时有 $T\left(X^i+(f)\right)=X^{i+1}+(f)$;

- 当 $i=n-1$ 时则有 $T\left(X^{n-1}+(f)\right) = X^n+(f) = -c_0-c_1 X-\cdots-c_{n-1} X^{n-1}+(f)$

从而 $T$ 对应的矩阵为 $C_f$, 即证 $A$ 共轭于 $\operatorname{diag}(C_{f_1}, \cdots, C_{f_k})$ .

反之, 若 $A$ 共轭于 $\operatorname{diag}(C_{f_1}, \cdots, C_{f_k})$, 则**命题 13.2.1**表明 $M \simeq$ $\bigoplus\limits_{i = 1}^k F[X] / (f_i)$, 故 $f_1|\cdots| f_k$ 的唯一性归结为有限生成 $F[X]-$模的不变因子的唯一性.

---

#### 有理标准形的计算

考虑 $n$ 维 $F-$向量空间 $V$ 配上 $T \in \operatorname{End}(V)$ , 以 $T$ 将 $V$ 升级为 $F[X]-$模. 取 $V$ 的基 $v_1, \cdots, v_n$ . 定义秩 $n$ 自由 $F[X]-$ 模 $F[X]^{\oplus n}$ 及其标准基 $e_1, \cdots, e_n$ . 现在考虑 $F[X]-$模的同态
$$
\begin{aligned}
\varphi: F[X]^{\oplus n} & \longrightarrow V \\
(r_1, \cdots, r_n) = \sum_{i=1}^n r_i e_i & \longmapsto \sum_{i=1}^n r_i(T) v_i, \text{ 其中 } r_i\in F[X]
\end{aligned}
$$


记 $\left(x_1|\cdots| x_n\right)=\left(e_1|\cdots| e_n\right)\left(\begin{array}{cccc}X-a_{11} & -a_{12} & -a_{13} & \cdots \\ -a_{21} & X-a_{22} & -a_{23} & \cdots \\ \vdots & \vdots & \ddots & \\ -a_{n 1} & -a_{n 2} & \cdots & X-a_{n n}\end{array}\right)$, $N:=\left< x_1, \cdots, x_n\right>$

**引理13.4.1** $\ker \varphi = N$

**证明.** 首先易验证 $\varphi (x_i) = 0$ 即知 $N \sub \ker \varphi$

其次, 注意到每个 $x \in F[X]^{\oplus n}$, 均存在 $x - \sum\limits_{i = 1}^n c_i e_i \in N$ , 其中 $c_i \in F$, 

进而 $\varphi(x) = \varphi\left(\sum\limits_{i = 1}^n c_i e_i\right) = \sum\limits_{i = 1}^n c_i v_i$ 可得
$$
x \in \ker \varphi \iff \sum\limits_{i = 1}^n c_i v_i = 0 \iff c_1 = \cdots = c_n = 0 \iff x \in N
$$


**命题 13.4.2** 按照**定理 12.7.6** 取 $P, Q \in GL(n, F[X])$ 和 $F[X]$ 的元素 $d_1|d_2| \cdots$ 使得
$$
X \cdot 1_{n \times n}-A = Q
\begin{pmatrix}
d_1 & & \\
& \ddots & \\
& & d_n
\end{pmatrix}
 P
$$

则 $d_i$ 皆可取为首一的, 而且从 $\left(d_i\right)_{i=1}^n$ 删除 $d_i=1$ 的项后, 产物是 $T$ 的有理标准形中的不变因子.

**证明.** 上述同态 $\varphi$ 显然满. 于是有 $\displaystyle V \simeq F[X]^{\oplus n} / N \simeq \bigoplus_{i=1}^n F[X] /\left(d_i\right)$ , (其中第二个同构是根据**推论 12.7.8**)
$$
\begin{aligned}
\bigoplus_{i=1}^n F[X] /\left(d_i\right) &\xrightarrow{\sim} F[X]^{\oplus n} / N \xrightarrow{\sim} V \\
(r_i+(d_i))_{i=1}^n & \mapsto \sum_{i=1}^n r_i g_i+N \mapsto \sum_{i=1}^n r_i(T) \varphi(g_i),
\end{aligned}
$$
由于 $\operatorname{dim} V=n$ 有限, 对所有 $i$ 皆有 $d_i \neq 0$, 故可设 $d_i$ 首一. 

根据有理标准形与结构定理的关系, 不变因子正是 $d_1, \ldots, d_n$ 中 $\neq 1$ 的项. 



**命题 13.4.5** 对所有 $A, B \in M_{n \times n}(F)$ , 以下陈述等价:

(1) $A$ 和 $B$ 在 $M_{n \times n}(F)$ 中共轭

(2) $X \cdot 1_{n \times n}-A$ 和 $X \cdot 1_{n \times n}-B$ 在 $M_{n \times n}(F[X])$ 中相抵.

**证明.** 将 $X \cdot 1_{n \times n}-A$ 简记为 $\Lambda_A$. 向 $A$ 的有理标准形中的不变因子插入 $1$, 可得 $F[X]$ 的一列首一元素 $d_1|\cdots| d_n$. 同理, 对 $B$ 有 $\Lambda_B$ 和 $d_1'|\cdots| d_n'$.

(1) $\implies$ (2) 若 $A$ 和 $B$ 共轭, 则不变因子的唯一性蕴涵 $d_i=d_i'$ 恒成立. 代入**命题 13.4.2** 可知 $\Lambda_A$ 和 $\Lambda_B$ 都相抵于 $\operatorname{diag}(d_1, \cdots, d_n)$.

(2) $\implies$ (1) 若 $\Lambda_A$ 和 $\Lambda_B$ 相抵, 则命题13.4.2蕴涵 $\operatorname{diag}(d_1, \cdots, d_n)$ 和 $\operatorname{diag}(d_1', \cdots, d_n')$ 相抵, 推得 $d_i=d_i'$ 恒成立, 故 $A$ 和 $B$ 共轭.

