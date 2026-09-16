##### 群同态

**定义 3.2.1** 设 $f: R \to R'$ 为环之间的映射.当以下条件成立时, 称 $f$ 为环同态:

- $f(x+y)=f(x)+f(y)$

- $f(x y)=f(x) f(y)$

- $f(1_R)=1_{R'}$

其中 $x, y$ 取遍 $R$ 的元素.从环 $R$ 映到其自身的同态也称为 $R$ 的自同态.



**定义11.2.1** 设 $f: G \to G'$ 为群之间的映射. 当以下条件成立时, 称 $f$ 为群同态:
$$
f(x y)=f(x) f(y), \quad x, y \in G .
$$

与环同态的定义 3.2.1 颇为相似, 但又有些微差异. 定义未要求 $f$ 保持么元, 因为这是自动的 :

有 $f(1_G) 1_{G'}=f(1_G)=$ $f(1_G 1_G)=f(1_G) f(1_G)$ , 对此应用群 $G'$ 的乘法消去律, 即得 $f(1_G)=1_{G'}$ .



**定义11.2.7** 设 $f: G \to G'$ 为群同态. 如果存在群同态 $g: G' \to G$ 使得 $g f=\mathrm{id}_G$而 $f g=\operatorname{id}_{G'}$ , 则称 $f$ 为群同构, 而 $g$ 为 $f$ 的逆.



- $GL(n, F):=\{T \in M_{n \times n}(F) : \det T \ne 1\},$

- $SL(n, F):=\{T \in GL(n, F): \det T=1\}$
- $O(n, F) := \{T \in M_{n \times n}(F) : T\cdot{}^tT = I\}$
- $SO(n, F):= O(n, F) \cap SL(n, F)$ 



##### 群作用

**命题11.5.10 (Burnside 引理).** 设有限群 $G$ 作用在有限集合 $X$ 上. 记 $X / G$ 为所有轨道的集合. 对于 $g \in G$ , 记 $X^g=\{x \in X \mid g x=x\}$ 为 $X$ 中 $g$ 作用的不动点. 则
$$
|X / G|=\frac1{|G|} \sum_{g \in G} |X^g|
$$

**证明.** 记 $\operatorname{Stab}_G(x) = \{ x \in X | \forall g \in G, g \cdot x = x \}$


考虑 $G \times X$ 的子集 $Z=\{(x, g) \in G \times X | g x=x\}$ . 我们有两个映射

$\pi_X: Z \to X,(g, x) \to x$ 以及 $\pi_G: Z \to G,(g, x) \to g$


易知 $\pi_X^{-1}(x)=\operatorname{Stab}(x), \pi_G^{-1}(g)=X^g$ .

**算两次** 利用 $\pi_X$ 或者 $\pi_G$ 计算 $|Z|$

$$
|Z|=\sum_{g \in G}\left|X^g\right|=\sum_{x \in X}|\operatorname{Stab}(x)|
$$


另一方面,

$$
\sum_{x \in X}|\operatorname{Stab}(x)|=\sum_{X / G}|G|=|G||X / G|
$$



##### 正规子群

**肖梁Thm 5.1.1.** $G$ is a group, $H$ and $K$ are normal subgroups of $G$, and $H \cap K=\{1\}$.Then $H K \cong H \times K$ (as groups).

**Pf.** Since both $H$ and $K$ are normal subgroups of $G, H K$ is a normal subgroup of $G$. Consider the natural map
$$
\begin{aligned}
\phi: H \times K & \longrightarrow H K \\
(h, k) & \longmapsto h k
\end{aligned}
$$

<u>Claim</u> : $\phi$ is a homomorphism, WTS $\forall h_1, h_2 \in H$ and $\forall k_1, k_2 \in K$, we have
$$
\begin{align}
\phi((h_1, k_1)(h_2, k_2)) &= \phi(h_1 h_2, k_1 k_2)=h_1 h_2 k_1 k_2 \\
? \| \qquad &\\
\phi(h_1, k_1) \phi (h_2, k_2) &= h_1 k_1 h_2 k_2
\end{align}
$$


It suffices to show that $h_2 k_1=k_1 h_2,$ or equivalently $k_1 h_2 k_1^{-1} h_2^{-1}=1$

But the normality of $K$ and $H$ $\implies \underbrace{k_1 h_2 k_1^{-1}}_{\text {in } H} h_2^{-1} \in H$ and $k_1 \underbrace{h_2 k_1^{-1} h_2^{-1}}_{\text {in } K} \in K .$ So $k_1 h_2 k_1^{-1} h_2^{-1} \in H \cap K=\{1\}$.

- $\phi$ is clearly surjective.
- $\ker \phi=\{(k, h) \in K \times H \mid k h=1\}$. Thus $k=h^{-1} \in$ $K \cap H=\{1\}$. So $\ker \phi=\{1\}$.



##### 半直积

**定义—命题11.10.3 (半直积的内在版本).** 设 $H$ 和 $N$ 为群 $G$ 的子群, 满足
$$
N \triangleleft G, \quad G=N H, \quad N \cap H=\{1\} .
$$


考虑由 $\operatorname{Ad}_h(n)=h n h^{-1}$ 给出的同态 $\operatorname{Ad}: H \to \operatorname{Aut}(N)$ , 则有群同构

$$
\begin{align}
\Phi: N \rtimes_{\mathrm{Ad}} H &\longrightarrow G \\
(n, h) &\longmapsto n h .
\end{align}
$$

此时也称 $G$ 是子群 $H$ 和正规子群 $N$ 的半直积, 合理地记为 $G=N \rtimes H$ .

**证明.** 验证 $\Phi$ 是群同态: $(n, h)\left(n', h'\right)=\left(n \operatorname{Ad}_h\left(n'\right), h h'\right)$ 被映为 $n \operatorname{Ad}_h\left(n'\right) h h'$ , 然而后者即 $n h n' h^{-1} h h'=(n h)\left(n' h'\right)$ .

条件 $G=N H$ 相当于说 $\Phi$ 满. 最后证明 $\Phi$ 单: 若 $\Phi(n, h)=1$ , 则 $n=h^{-1} \in$ $N \cap H=\{1\}$ .因此 $\Phi$ 是同构.



**李文威 $\S11$ 作业**

16. 设有限群 $G$ 满足以下条件: 对所有 $d \in \Z_{\geq 1}$ , 集合 $\left\{x \in G: x^d=1\right\}$ 至多只有 $d$ 个元素.记 $n:=|G|$ .

    (1)说明对于所有 $d | n$ , 集合 $\{g \in G: \operatorname{ord}(g)=d\}$ 或者是空集, 或者有 $\varphi(d)$ 个元素.

    **提示 :** 论证 $\operatorname{ord}(g)=d$ 蕴涵 $\langle g\rangle=\left\{x \in G: x^d=1\right\}$ , 再对 $\langle g\rangle$ 应用推论 11.3.4.

    (2)基于(1), 说明 $G$ 是 $n$ 阶循环群.

    **提示 :** 对所有 $d | n$ , 记 $m_d:=|\{g \in G: \operatorname{ord}(g)=d\}|$ , 然后注意到 $\sum_{d | n} m_d=n=$ $\sum_{d | n} \varphi(d)$.

17. 设 $F$ 为域.利用上一题的结果, 证明 $F^\times$的所有有限子群皆为循环群.作为推论, 若 $F$ 是有限域则 $F^\times$是循环群.

18. (原根)考虑环 $\Z / n \Z$ , 要求 $n \in \Z_{\geq 2}$ . 证明 $(\Z / n \Z)^\times$是循环群当且仅当 $n=2,4, p^k, 2 p^k$ , 其中 $p$ 是奇素数而 $k \in \Z_{\geq 1}$ . 若 $a+n \Z$ 是 $(\Z / n \Z)^\times$的生成元, 则称 $a$ 为 $\bmod n$ 原根

    **提示 :** 上一则习题可处理 $n$ 为素数的情形.









