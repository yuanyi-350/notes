**("实对称矩阵" $\to$ 正交对角化 : 自伴情形 ; "复对称矩阵" $\to$ 正规算子的谱分解)**

**引理 9.6.1** 设 $T \in \operatorname{End}(V)$ 而 $V_0$ 是 $V$ 的 $T$-不变子空间(定义 5.10.1), 则 $V_0^{\perp}$ 是 $T^*$-不变子空间.

证明 操练定义. 对于任意 $w \in V_0^{\perp}$ 和 $v \in V_0$ , 我们有 $\left(T^* w \mid v\right)=(w \mid T v)$ , 然而条件蕴涵 $T v \in V_0$ , 故此内积为 0 .这就表明 $T^*\left(V_0^{\perp}\right) \subset V_0^{\perp}$ .



**引理 9.6.4** 设 $A \in M_{n \times n}(\mathbb{C})$ 满足 ${ }^{\dagger} A=\varepsilon A$, 其中 $\varepsilon \in \mathbb{C}$, 则 $A$ 的所有特征值 $\lambda \in \mathbb{C}$ 都满足 $\bar{\lambda}=\varepsilon \lambda$ .

**证明 :**  设 $v \in \mathbb{C}^n$ 是以 $\lambda$ 为特征值的特征向量. 考虑
$$
{ }^{\dagger} v \cdot(A v)=\lambda \cdot\left({ }^{\dagger} v v\right) .
$$


对两边取 ${ }^{\dagger}(\cdot)$ . 左边给出 ${ }^{\dagger} v{ }^{\dagger} A v=\epsilon \cdot{ }^{\dagger} v A v=\epsilon \lambda\left({ }^{\dagger} v v\right)$ , 右边则给出 $\bar{\lambda}\left({ }^{\dagger} v v\right)$ . 两边消去 ${ }^{\dagger} v v \in \R_{>0}$ 即是 $\bar{\lambda}=\epsilon \lambda$ .

特别的, 当 $A$ 是是对称矩阵时, $A$ 的所有特征值 $\lambda \in \R$



**命题10.1.15 :** Any $T \in \operatorname{End}(V)$ decomposes uniqueness as $T_1 + T_2$, $T_1^* = T_1$ and $T_2^* = - T_2$.

**Pf :** **Uniqueness :** if $T = T_1 + T_2 = S_1 + S_2$ are two such decomposes.

Then $T_1 - S_1 = S_2 - T_2 := R$ $\implies R^* = R = -R^*$ $\implies$ $R = 0 \in \operatorname{End}(V)$

**Existence :** $T = \frac{T + T^*}2 + \frac{T - T^*}2 := T_1 + T_2$, as $T^{**} = T$



**引理 10.4.3** 设 $N \in \operatorname{End}(V)$ 是正规算子, $\lambda \in \mathbb{C}$ , 而 $v \in V$. 若 $N v=\lambda v$ 则 $N^* v=\bar{\lambda} v$.

**证明 :** 取 $M:=N-\lambda \cdot \mathrm{id}_V$ , 这仍是正规的, 而 $M^*=N^*-\bar{\lambda} \cdot \mathrm{id}_V$ . 条件 $N v=\lambda v$ 相当于 $v \in \operatorname{ker}(M)$ , 而**命题 10.3.12** 连同 $M$ 的正规性所蕴涵的 $\operatorname{ker}(M)=\operatorname{ker}\left(M^* M\right)=$ $\operatorname{ker}\left(M M^*\right)=\operatorname{ker}\left(M^*\right)$ 又导致 $N^* v=\bar{\lambda} v$.

**引理 10.4.5** 设 $N \in \operatorname{End}(V)$ 是正规算子, 对应到 $\lambda, \mu \in \mathbb{C}$ 的特征子空间照例分别记为 $V_\lambda$ 和 $V_\mu$ , 则当 $\lambda \neq \mu$ 时 $V_\lambda \perp V_\mu$ .

**证明 :** 任取 $v \in V_\lambda$ 和 $w \in V_\mu$ , **引理 10.4.3** 蕴涵
$$
\begin{aligned}
& (v \mid N w)=(v \mid \mu w)=\mu(v \mid w), \\
& \left(N^* v \mid w\right)=(\bar{\lambda} v \mid w)=\lambda(v \mid w) .
\end{aligned}
$$


由于 $\lambda \neq \mu$ , 两式相等导致 $(v \mid w)=0$ .



**定理 10.4.1(正规算子的谱分解)** 酉空间 $V$, 设 $T \in \operatorname{End}(V)$ , 则以下两者等价:

(1)存在单位正交基 $v_1, \cdots, v_n \in V$ 和 $\lambda_1, \cdots, \lambda_n \in \mathbb{C}$ , 使得 $T v_i=\lambda_i v_i, \quad 1 \leq i \leq n$

(2)$T$ 是正规算子.

对于 $(V,(\cdot \mid \cdot))$ 为标准**复内积空间** $\mathbb{C}^n$ , 其元素视同列向量, 并将 $T \in$ $\operatorname{End}(V)$ 等同于矩阵 $A \in M_{n \times n}(\mathbb{C})$ 满足 ${ }^{\dagger} A A=A^{\dagger} A$ .则 $A$ 可酉对角化, 亦即 $\exists P=\left(v_1|\cdots| v_n\right) \in M_{n \times n}(\mathbb{C}), \quad \exists \lambda_1, \cdots, \lambda_n \in \mathbb{C}$,
$$
\quad{ }^{\dagger} P=P^{-1}, \quad P^{-1} A P=\left(\begin{array}{ccc}
\lambda_1 & & \\
& \ddots & \\
& & \lambda_n
\end{array}\right)
$$
**Case1 :** **定理 9.6.2(实对称矩阵正交对角化)**

设 $T \in \operatorname{End}(V)$ 自伴, 即 $T = T^*$, 则存在 $V$ 的单位正交基 $v_1, \cdots, v_n$ 使得每个 $v_i$ 都是 $T$ 的特征向量.

(实内积空间则是实正交基, 复内积空间则是复正交基; 实内积空间和复内积空间的证明十分相似)

**也可以用矩阵语言表述 :**

对于 $(V,(\cdot \mid \cdot))$ 为标准**实内积空间** $\left(\R^n, \cdot\right)$ ,  其元素视同列向量, 并将 $T \in$ $\operatorname{End}(V)$ 等同于矩阵 $A \in M_{n \times n}(\R)$ , 满足 ${ }^t A=A$ . 取 $P$ 为以单位正交基 $v_1, \cdots, v_n$ 为列向量的矩阵, 则 $P$ 是正交矩阵给出矩阵正交对角化
$$
P^{-1} A P=\left(\begin{array}{ccc}
\lambda_1 & & \\
& \ddots & \\
& & \lambda_n
\end{array}\right), \quad \lambda_1, \cdots, \lambda_n \in \R
$$

**证明 :** 对 $n=\operatorname{dim} V$ 递归地论证. 当 $n=0,1$ 时无事可作. 以下设 $n \geq 2$ .

不妨将 $T$ 等同于矩阵 $A$, 满足 ${ }^{\dagger} A=A$. 由 **引理 9.6.4** 说明 $T$ 有特征值 $\lambda_1 \in \R$, 取 $v_1 \in V$, $\left\|v_1\right\|=1$ 使得 $T v_1=\lambda_1 v_1$

考虑正交直和分解 $V=\langle v_1\rangle \oplus\langle v_1\rangle^{\perp}$, 留意到 $\left< v_1\right>^{\perp}$ 相对于 $(\cdot \mid \cdot)$ 仍是内积空间. 既然 $\left< v_1\right>$ 是 $T-$不变子空间, **引理 9.6.1** 说明 $\left< v_1\right>^{\perp}$ 是 $T^*$ 不变子空间. 恒等式 $(T v \mid w)=(v \mid T w)$ 限制到 $v, w \in\left< v_1\right>^{\perp}$ 上依然成立, 所以 $T$ 限制在 $\left< v_1\right>^{\perp}$ 上仍然自伴.

根据递归假设, 存在 $\left< v_1\right>^{\perp}$ 的单位正交基 $v_2, \cdots, v_n$ 连同 $\lambda_2, \cdots, \lambda_n \in \R$ , 使得 $T v_i=\lambda_i v_i$ 对 $i=2, \cdots, n$ 成立. 于是 $v_1, \cdots, v_n$ 给出 $V$ 的单位正交基, 使得每个 $v_i$ 都是以 $\lambda_i$ 为特征值的特征向量 $(i=1, \cdots, n)$.

**Case2 (复内积空间版本):** 当 $T = - T^*$, 则存在**复内积空间** $V$ 的单位正交基 $v_1, \cdots, v_n$ 使得每个 $v_i$ 都是 $T$ 的特征向量.

**证明 :** $(\sqrt{-1}~T)^* = \sqrt{-1}~T$ $\implies$ 则存在 $V$ 的单位正交基 $v_1, \cdots, v_n$ 使得每个 $v_i$ 都是 $\sqrt{-1}~T$ 的特征向量.

即 $\sqrt{-1}~T v_i = \mu_i v_i$ $\implies$ 令 $\lambda_i = \sqrt{-1} \mu_i$ 有 $T v_i = \lambda_i v_i$, 其中 **$\lambda_i \in \sqrt{-1} \R$**

**Case3 :** General Normal $T$

根据命题10.1.15, 分解为 $T = T_1 + T_2$, 其中 $T_1^* = T_1$ 以及 $T_2^* = - T_2$. 根据 $TT^* = T^* T$ 知 $T_1T_2 = T_2 T_1$

(仿照 <font : color = Red>**定理7.5.3 同步对角化, c.f. 见后**</font> 证明过程, 有下述同步正交对角化)

详细过程 : $V = V_{\mu_1} \oplus \cdots \oplus V_{\mu_k}$, 其中 $\mu_1, \cdots, \mu_k$ 是 $T_1$ 的不同特征值, $V_{\mu_i}$ 是对应特征值的特征子空间.

并且根据 **引理 10.4.5** 知 $V_{\mu_i} \perp V_{\mu_j}$ 如果 $i \neq j$.  $T_1T_2 = T_2 T_1$ $\implies$ 每个 $V_{\mu_i}$ 均是 $T_2$ 的不变子空间.

(这是因为 $\forall v \in V_{\mu_i}$ s.t. $T_1 v=\mu_i v$, 于是 $T_1(T_2v) = T_2T_1 v = \mu_i T_2v$, i.e. $T_2v \in V_{\mu_i}$)

$\left(T_2\big|_{V_{\mu_i}}\right)^* = - T_2\big|_{V_{\mu_i}}$, 根据 **Case2**, 于是 $V_{\mu_i}$ 有一组由 $T_2$ 特征向量组成的单位正交基.

从而 $V$ 有一组单位正交基, 每个向量都是 $T_1$ 和 $T_2$ 的特征向量.即证.

---

**(Case2 实内积空间版本 / 定理 9.6.2 推论) :** 当 $T^* = -T$ 反自伴时, 则存在 $V$ 的一组单位正交基 $v_1, \cdots, v_n$ 使得
$$
\begin{cases}
Tv_{2i - 1} = \mu_i \cdot v_{2i} \\ Tv_{2i} = - \mu_i \cdot v_{2i - 1}\\
\end{cases}, i = 1,\cdots,k; \quad Tv_i = 0, i = 2k + 1, \cdots, n
$$

或者说 $T \in$ $\operatorname{End}(V)$ 等同于矩阵 $A \in M_{n \times n}(\R)$ , 满足 ${ }^t A = - A$, 存在单位正交基 $v_1, \cdots, v_n$ 使得

$$
A (v_1, \cdots, v_n) = (v_1, v_2, \cdots, v_n) \cdot

\begin{pmatrix}
0 & -\mu_1 & & & & \\
\mu_1 & 0 & \ddots & & & \\
& & & 0 & -\mu_k & \\
& & & \mu_k & 0 & \\
& & & & & \mathbf{0}_{(n-2 k)}
\end{pmatrix}
$$

**证明 :** 对 $n=\operatorname{dim} V$ 递归地论证. 当 $n=0, 1$ 时无事可作, $n = 2$ 时平凡. 以下设 $n \geq 3$ .

由 引理 9.6.4 说明 $T$ 在 $\mathbb{C}$ 中的每个特征值均形如 $\R i$

假设 $T$ 存在非零特征值 $\mu_1 i$ (其中 $\mu_1 \in \R$ 且 $\mu_1 \neq 0$ ), 设对应的复特征向量为 $v = x + i y, \quad x, y \in \R^n$.

由于 $T v= \mu_1 i \cdot v$ , 将实部与虚部分离可得 : $T x = -\mu_1 y, \quad T y = \mu_1 x$.

注意到 $(Tx | x) = (x | T^*x) = (x | - Tx) = - (Tx | x) \implies (Tx | x) = 0$ $\implies (x | y) = - \frac1{\mu_1} \cdot (x | Tx) = 0$

以及 $(x | x) = \frac1{\mu_1} \cdot (Ty | x) = \frac1{\mu_1} \cdot (y | T^*x) = \frac1{\mu_1} \cdot (y | -Tx) = (y | y)$ $\implies \|x\| = \|y\|$

我们取 $v_2 = \dfrac{x}{\|x\|}, v_1 = \dfrac{y}{\|x\|}$, 上述两个结论说明 $v_1, v_2$ 是 $W := \left< v_1, v_2 \right>$ 的单位正交基.

并且满足 $Tv_1 = \mu_1 v_2$ 以及 $Tv_2 = - \mu_1 v_1$, 显然 $W$ 是 $T$ 的不变子空间

 考虑正交直和分解 $V=\langle v_1, v_2\rangle \oplus\langle v_1, v_2\rangle^{\perp}$, 留意到 $\left< v_1, v_2\right>^{\perp}$ 相对于 $(\cdot \mid \cdot)$ 仍是内积空间. 既然 $\left< v_1, v_2\right>$ 是 $A-$不变子空间, 引理 9.6.1 知 $\left< v_1, v_2\right>^{\perp}$ 是 ${}^t A = - A$ 的不变子空间. 恒等式 $(A v \mid w)=(v \mid -A w)$ 限制到 $v, w \in\left< v_1, v_2\right>^{\perp}$ 上依然成立, 所以 $A$ 限制在 $\left< v_1, v_2\right>^{\perp}$ 上仍然反对称.

根据递归假设, 可以逐步将 $A$ 化为由若干个 $2 \times 2$ 块和一个零块组成的块对角形式, 即证.

<div STYLE="page-break-after: always;"></div>

**定义-命题 9.8.7** 设 $T \in \operatorname{End}(V)$ 正定(或半正定), 则存在唯一的 $S \in \operatorname{End}(V)$ 使得 $S$ 正定(或半正定) 而且 $S^2=T$ . 因此, 这样的 $S$ 可以合理地记为 $\sqrt{T}$ .

**证明 :** 存在性显然. 现在考虑唯一性.

对于具备所需性质的 $S$ , 特征值(不记重数)排列为 $\mu_1>\cdots>\mu_m \in \R_{\geq 0}$ , 则 $V$ 相应地分解为特征子空间的直和
$$
V=\bigoplus_{i=1}^m V_{\mu_i}
$$


由于 $T=S^2$ , 这说明 $T$ 的特征值是 $\mu_1^2>\cdots>\mu_m^2$(不记重数), 而 $\mu_i^2$ 对应的特征子空间正是上述 $V_{\mu_i}$ .

这反过来说明如何从 $T$ 来确定 $S$ : 将 $T$ 的特征值(不记重数)排列为 $\lambda_1>\cdots>$ $\lambda_m$ , 则 $S$ 在 $T$ 的 $\lambda_i-$特征子空间上必然等于 $\sqrt{\lambda_i} \cdot id$ .



**定理 9.8.8 (极分解)** 仍然设 $(V,(\cdot \mid \cdot))$ 为实内积空间(酉空间), 而 $T \in \operatorname{End}(V)$ 可逆, 则存在唯——对 $R, U \in \operatorname{End}(V)$ , 使得 $R$ 正定, $U$ 是正交变换(酉变换), 而且 $T=R U$ .

**证明 :** 首先说明 $(R, U)$ 唯一. 我们有 $T T^*=R U U^* R=R^2$ . 因为 $T$ 可逆, 引理 9.8.6确保 $T T^*$ 和 $R$ 同样正定, 从而 $R=\sqrt{T T^*}$ ; 因为 $R$ 可逆, 必有 $U=R^{-1} T$ .

下面处理存在性. 线索已经明朗: 必须取 $R:=\sqrt{T T^*}$ , 这是正定的, 而 $U:=R^{-1} T$ . 关键在于证 $U^*=U^{-1}$ . 从 $\left(R^{-1}\right)^*=\left(R^*\right)^{-1}=R^{-1}$(请回忆8.2.2) 和 $R^2=T T^*$ 得到

$$
\begin{aligned}
U^* & =T^*\left(R^{-1}\right)^*=T^* R^{-1} \\
& =T^{-1} T T^*\left(R^2\right)^{-1} R \\
& =T^{-1} R=U^{-1} .
\end{aligned}
$$

明所欲证. 极分解可设想为非零复数的极分解 $z=r e^{i \theta}$ 的矩阵类比, 其中 $r=|z|=\sqrt{z \bar{z}}$ 而 $\theta$是 $z$ 的幅角.
