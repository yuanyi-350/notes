**定义 4.7.5** 设 $V$ 为 $F-$向量空间, 它的**对偶空间** $V^{\vee}$ 定义为 $\operatorname{Hom}(V, F)$.

**定义 4.7.6** 如果 $T: V \rightarrow W$ 是线性映射, 则我们可以定义 $T$ 的**转置映射**为
$$
\begin{gathered}
{ }^{\mathrm{t}} T: W^{\vee} \longrightarrow V^{\vee} \\
\qquad\quad\lambda \longmapsto \lambda T,
\end{gathered}
$$

其中 $\lambda T$ 代表线性映射 $V \xrightarrow{T} W \xrightarrow{\lambda} F$ 的合成.

---

**定义 8.1.1(双线性映射和双线性形式)** 设 $V, W, X$ 为 $F$-向量空间, 若映射 $B: V \times W \to X$ 对每个变元都是线性的, 亦即
$$
\begin{gathered}
B(v_1+v_2, w)=B(v_1, w)+B(v_2, w), \\
B(v, w_1+w_2)=B(v, w_1)+B(v, w_2), \\
B(t v, w)=t B(v, w)=B(v, t w), \quad t \in F,
\end{gathered}
$$

则称 $B$ 为双线性映射. 这些双线性映射构成的集合记为 $\operatorname{Bil}(V, W ; X)$

取 $X=F$ 的特例, 则双线性映射 $B: V \times W \to F$ 也称为 $V \times W$ 上的双线性形式, 或称双线性型.

--------------------

##### 非退化双线性形式

**定义8.2.1** 考虑任意向量空间 $V, W$ 和双线性形式 $B \in \operatorname{Bil}(V, W ; F)$.

* Left radical $=\{v \in V: B(v, \cdot)=0\}$.
* Right radical $=\{w \in W: B(\cdot, w)=0\}$.
* 设 $V$ 和 $W$ 都是有限维的. 若 $B$ 的左根和右根都是零空间, then $B$ is **nondegeneracy** (**非退化**).

**例 8.2.2** $\dim V < \infty$ $\langle\cdot, \cdot\rangle_V : V^{\vee} \times V \rightarrow F$ is nondegeneracy.

- Left radical = $\{\lambda \in V^{\vee}| \langle\lambda, v\rangle=\lambda(v)=0,\forall v \in V\} = \{0\}$ .

- $\forall v \neq 0$ , 可将 $v=v_1$ 扩充为基 $v_1, \ldots, v_n$ ,  $\implies$对偶基 $\check{v}_1, \ldots, \check{v}_n$ 中的 $\check{v}_1$ 满足 $\left\langle\check{v}_1, v\right\rangle=1$

  即 $\forall v\neq 0, v \notin$ Right radical , i.e. Right radical $= \{0\}$.

**引理 8.2.3** 设 $B \in \operatorname{Bil}(V, W ; F)$ 对应到 $\psi \in \operatorname{Hom}\left(V, W^{\vee}\right)$ 和 $\varphi \in \operatorname{Hom}\left(W, V^{\vee}\right)$ ,
$$
B(v,\cdot) = 0 \iff \langle\psi(v), \cdot \rangle_W = 0_F \qquad(\psi \in W^{\vee}), \qquad\text{left radical} =\ker \psi\\
B(\cdot, w) = 0 \iff \langle\varphi(w), \cdot \rangle_V = 0_F \qquad(\varphi \in V^{\vee}), \qquad\text{right radical} =\ker \varphi\\
$$

**Obs** : Assume $V$ and $W$ 皆为有限维向量空间,  $B$ is nondegeneracy $\implies\operatorname{dim} V=\operatorname{dim} W$

Suppose $\operatorname{dim} V>$ $\operatorname{dim} W=\operatorname{dim}\left(W^{\vee}\right)$ , then $\operatorname{dim} \operatorname{ker}(\psi)=\operatorname{dim} V-\operatorname{rk}(\psi)>0$ , So $B$ cannot be nondegeneracy.



**命题 8.2.4** 设 $V$ 和 $W$ 是有限维 $F$-向量空间,  $\operatorname{dim} V=\operatorname{dim} W$ , 则对于任意 $B \in$ $\operatorname{Bil}(V, W ; F)$ , The Following Are Equivalent
(1). $B$ is nondegeneracy,
(2). Left radical $= \{0\}$,
(3). Right radical $= \{0\}$,

When they hold, $\varphi: W \rightarrow V^{\vee}$ and $\psi: V \rightarrow W^{\vee}$ are both isomorphism

**In terms of matrices** : $V = W = F^n , B(v,w ) = {}^tvAw$

Left radical of $B = \{v \in F^n \vert \forall w, {}^tvAw = 0\} \overset{\text{Obv 1}}{=} \{v \in F^n \vert {}^t Av  = 0\} = \ker ({}^tA)$

($1.\ \lambda \in M_{1 \times n}(F), \forall w \in F^n = M_{n \times 1}(F), \lambda w = 0 \implies \lambda = (0,0,\cdots,0)$ )

Right radical of $B = \{w \in F^n \vert \forall v, {}^tvAw = 0\} \overset{\text{Obv 2}}{=} \ker (A)$

($2.\ w \in F^n, \forall \lambda \in M_{1 \times n}(F) , \lambda w = 0 \implies w = v = \left(\begin{array}{c}
0 \\
0 \\
\vdots \\
0
\end{array}\right)$ )

**From this : $\ker A = 0 \iff A$ is invertible $\iff \ker ({}^tA ) = 0 \iff B$ is nondegeneracy.**

------------

##### 伴随映射

**命题 8.1.5** 对于任意 $F$-向量空间 $V$ 和 $W$, 我们有向量空间的同构
$$
\begin{CD}
\operatorname{Hom}\left(W, V^{\vee}\right) @>\sim>>  \operatorname{Bil}(V, W ; F) @<\sim<< \operatorname{Hom}\left(V, W^{\vee}\right) \\
@. @.\\
[w \longmapsto B(\cdot, w)] @<<< B @>>> [v \longmapsto B(v,\cdot)]\\
@. @.\\
\varphi @>>> [B(v,w) := \langle\varphi(w), v\rangle] @. \\
@. @.\\
@. [B(v,w) := \langle\phi(v), w\rangle] @<<< \psi\\
\end{CD}
$$

**定义-命题 8.2.8** 考虑双线性形式 $B_i \in \operatorname{Bil}\left(V_i, V_i' ; F\right)$, 其中 $i=1,2$, 其中所有向量空间均为有限维, 并且假设 $B_1$ 非退化.
$$
\begin{align}
\exist! \text{ linear map : }\operatorname{Hom}\left(V_1, V_2\right) &\longrightarrow \operatorname{Hom}\left(V_2', V_1'\right) \\
T &\longmapsto T^*,
\end{align}
$$


其中的 $T^*$ 称为 $T$ 相对于 $B_1$ 和 $B_2$ 的右伴随, $B_2\left(T v_1, v_2'\right)=B_1\left(v_1, T^* v_2'\right), \quad v_1 \in V_1, v_2' \in V_2'$

<font : color = Red>**Key** 非退化双线性形式 $V \times W \overset{B}\longrightarrow F$ 可以看作同构 $\varphi : W \overset{\sim}\longrightarrow V^{\vee}$ 和 $\psi : V \overset{\sim}\longrightarrow W^\vee$ </font>

设 $B : (v,w) \longmapsto {}^tvAw$, 则 $\varphi : w \longmapsto (v \longmapsto {}^t v(Aw) )$ , 从而 $\forall \lambda \in V^\vee , \exist!\ w \in W , \lambda = \varphi(w) := B(\cdot,w)$ .

回到原定义: 固定 $v_2' \in V_2'$ , 则映射 $B_2\left(T(\cdot), v_2'\right): v_1 \mapsto B_2\left(T v_1, v_2'\right)$ 给出 $V_1^{\vee}$ 的元素 $\lambda$

因为 $B_1$ 非退化, 先前说明 $\exist! v_1' \in V_1'$ 使得 $B_2\left(T(\cdot), v_2'\right)=B_1\left(\cdot, v_1'\right)$ . $T^*$ 的映法必然是 $v_2' \mapsto v_1'$



**例 8.2.14** 取 $V_i=V_i':=F^{n_i}$, 等同于列向量空间 $(i=1,2)$. 考虑 $A_i \in \mathrm{M}_{n_i \times n_i}(F)$ 确定的双线性形式
$$
\begin{aligned}
B_i: F^{n_i} \times F^{n_i} &\longrightarrow F\\
\quad(v, w) & \longmapsto{ }^{\mathrm{t}} v A_i w .
\end{aligned}
$$

设 $A_1$ 可逆, 即 $B_1$ 非退化. 断言 $T^* \xlongequal{\text { 等同于 }} A_1^{-1} \cdot{ }^{\mathrm{t}} T \cdot A_2 \in \mathrm{M}_{n_1 \times n_2}(F) .$
$$
\begin{aligned}
B_2\left(T v_1, v_2\right)={ }^{\mathrm{t}}\left(T v_1\right) A_2 v_2=\left({ }^{\mathrm{t}} v_1\right)^{\mathrm{t}} T A_2 v_2=\left({ }^{\mathrm{t}} v_1\right) A_1 A_1^{-1} \cdot{ }^{\mathrm{t}} T A_2 v_2 \\
=\left({ }^{\mathrm{t}} v_1\right) A_1\left(A_1^{-1} \cdot{ }^{\mathrm{t}} T \cdot A_2\right) v_2=B_1\left(v_1,\left(A_1^{-1} \cdot{ }^{\mathrm{t}} T \cdot A_2\right) v_2\right)
\end{aligned}
$$

**Examples :**

**定义 8.2.15** 若 $T^*=T$ , 则称 $T$ 是自伴的. $\iff$ 作为矩阵 ${}^tT = T$

​	     	若 $T^*=-T$ , 则称 $T$ 是反自伴的. $\iff$ 作为矩阵 ${}^tT = -T$

**例 8.2.16** 对于标准内积空间, 考虑 $(v, w) \mapsto^{\mathrm{t}} w \cdot v$ 确定的对称非退化双线性形式 $F^n \times F^n \rightarrow F$

相当于取 $A_1=A_2=1_{n \times n}$ , 伴随映射 $T^* \xlongequal{\text{等同于}}$ 作为矩阵取转置 ${ }^t T$, 即 $T$ 自伴, 满足 $(Tv|w) = (v | {}^tTw)$

**例 8.1.4** (Canonical pairing)
$$
\textcolor{Red}{\begin{aligned}
\langle\cdot, \cdot\rangle_V := V^V \times V & \longrightarrow F \\
(\lambda, v) & \longmapsto\langle\lambda, v\rangle:=\lambda(v) .
\end{aligned}}
$$

Suppose linear map $T : V \to V , S : V^\vee \to V^\vee$

$\langle \lambda,Tv \rangle = \lambda (Tv) = \langle\lambda T,v \rangle,$ i.e. ${}^*T\lambda = \lambda T\qquad({}^*T : V^\vee \to V^\vee)$

$\langle S\lambda,v \rangle = S\lambda v \textcolor{red}= \langle\lambda ,{}^tSv \rangle  , $ i.e. $S^*v = {}^tSv \qquad(S^* : V \to V,$ 其中 ${}^tS : V \to V,$ 作为矩阵是 $S$ 的转置

**命题 9.5.9** 给定有限维内积空间 $(V,(\cdot \mid \cdot))$ , 则 $P \in \operatorname{End}(V)$ 是向某个子空间 $V_0$ 的正交投影算子当且仅当 $P^*=P$, $P^2=P$, 此时 $V_0=\operatorname{im}(P)$ .
**证明 :** 左 $\implies$ 右如下图 : 这是平凡的.

<img src="https://cdn.jsdelivr.net/gh/yuanyi-350/image/20250327163306.png" style="zoom:25%;" />

右 $\implies$ 左 : 设 $P \in \operatorname{End}(V)$ 满足 $P^*=P$ 和 $P^2=P$. 取 $V_0:=\operatorname{im}(P)$.

将任意 $v \in V$ 按先前方式作唯一分解 $v=P u+v_1$ , 其中 $u \in V$ 而 $v_1 \in V_0^{\perp}$ , 则
$$
P v=P^2 u+P v_1=P u+P v_1 .
$$


由于 $v_1 \in V_0^{\perp}$ , 从

$$
\left(P v_1 \mid P v_1\right)=\left(P^* P v_1 \mid v_1\right)=(\underbrace{P^2 v_1}_{\in V_0} \mid v_1)=0
$$

推知 $P v_1=0$ . 因此 $P v=P u$ . 这便说明 $P$ 是向 $V_0$ 的正交投影算子.

<div STYLE="page-break-after: always;"></div>

##### 伴随应用 : 最小二乘解

**引理 9.6.1** 设 $T \in \operatorname{End}(V)$ 而 $V_0$ 是 $V$ 的 $T$-不变子空间(定义 5. 10. 1), 则 $V_0^{\perp}$ 是 $T^*$-不变子空间.

**证明 :** 操练定义. 对于任意 $w \in V_0^{\perp}$ 和 $v \in V_0$ , 我们有 $\left(T^* w \mid v\right)=(w \mid T v)$ , 然而条件蕴涵 $T v \in V_0$ , 故此内积为 0 . 这就表明 $T^*\left(V_0^{\perp}\right) \subset V_0^{\perp}$ .

**引理 9.7.2** 给定 $w \in W$, 将它按正交直和分解唯一地表成
$$
w=w^{\prime}+w^{\prime \prime}, \quad w^{\prime} \in \operatorname{im}(T), \quad w^{\prime \prime} \in \operatorname{im}(T)^{\perp}
$$


则 $v \in V$ 是最小二乘解当且仅当 $T v=w'$; 这般的 $v$ 总是存在, 等价的条件是 $T v-w \in \operatorname{im}(T)^{\perp}$.


**定理 9.7.3** 给定 $w \in W$ , 则方程 $T v=w$ 的最小二乘解 $v \in V$ 正好是 $T^* T v=$ $T^* w$ 的解.

**证明 :** 回忆到 $v$ 是最小二乘解当且仅当 $T v-w \in \operatorname{im}(T)^{\perp}$, 换言之
$$
\forall v^{\prime} \in V,\left(T v-w \mid T v^{\prime}\right)_W=0
$$

然而 $\left(T v-w \mid T v'\right)_W=\left(T^* T v-T^* w \mid v'\right)_V$ , 而 $v' \in V$ 可任取, 故上式等价于 $T^* T v=T^* w$ 明所欲证.



**推论 9.7.4** 对有限维实内积空间 $V, W$ 和线性映射 $T: V \rightarrow W$ , 我们有
$$
\begin{aligned}
\operatorname{im}\left(T^* T\right) &= \operatorname{im}\left(T^*\right), \quad \operatorname{im}\left(T T^*\right)=\operatorname{im}(T), \\
\operatorname{ker}\left(T^* T\right) &= \operatorname{ker}(T), \quad \operatorname{ker}\left(T T^*\right)=\operatorname{ker}\left(T^*\right), \\
\operatorname{rk}\left(T^* T\right) &= \operatorname{rk}(T), \quad \operatorname{rk}\left(T T^*\right)=\operatorname{rk}\left(T^*\right)
\end{aligned}
$$

**证明 :** 

1. $\ker T = \ker [T^*T : V \to V]$

$\subseteq$ 显然. 并且 $TT^*v = 0_V \implies (v | T^*Tv)_V = (Tv | Tv)_W = 0 \xRightarrow{正定} Tv = 0_W$

2. $\operatorname{rk}(T) = \operatorname{rk}(T^*T)$

$\operatorname{rk}(T) = \dim(\operatorname{im} T) = \dim V - \dim \ker T \xlongequal{(1)} \dim V - \dim \ker (T^*T) = \operatorname{rk} (T^*T)$

