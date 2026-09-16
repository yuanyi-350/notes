**Def.** Let $A$ be a commutative ring, $M, N, P$ be $R-$modules. Then a function $f: M \times N \to P$ is called bilinear if it is linear on each argument:
$$
\begin{aligned}
f\left(r m_1+m_2, n\right) & =r f\left(m_1, n\right)+f\left(m_2, n\right) \\
f\left(m, r n_1+n_2\right) & =r f\left(m, n_1\right)+f\left(m, n_2\right) .
\end{aligned}
$$

for all $m, m_1, m_2 \in M, n, n_1, n_2 \in N, r \in A$.

**定义 8.1.1 (双线性映射和双线性形式)** 设 $V, W, X$ 为 $F$-向量空间, 若映射 $B: V \times W \to X$ 对每个变元都是线性的, 亦即
$$
\begin{gathered}
B\left(v_1+v_2, w\right)=B\left(v_1, w\right)+B\left(v_2, w\right) \\
B\left(v, w_1+w_2\right)=B\left(v, w_1\right)+B\left(v, w_2\right) \\
B(t v, w)=t B(v, w)=B(v, t w), \quad t \in F
\end{gathered}
$$
例子 : $B(v, w) = {}^tvw$ 是双线性的, $B(v, w) = v + w$ 不是, $B(v, w) = (v, w)$ 也不是

**命题15.1.1** 设 $V$ 和 $W$ 为 $R$-向量空间.

(1) 存在 $R-$ module $L_{\text {univ }}$ 连同双线性映射 $B_{\text {univ }}: V \times W \to L_{\text {univ}}$, 使得对所有 $R-$Mod $L$ 和双线性映射 $B: V \times W \to L$ , 存在唯一的线性映射 $\varphi: L_{\text {univ }} \to L$ 使下图交换:

<img src="C:\Users\yuany\AppData\Roaming\Typora\typora-user-images\image-20250411110824712.png" alt="image-20250411110824712" style="zoom:10%;" />

(2) 若资料 $\left(L_{\text {univ }}, B_{\text {univ }}\right)$ 和 $\left(L_{\text {univ }}', B_{\text {univ }}'\right)$ 皆具有 (1) 的性质, 则存在唯一的向量空间同构 $\varphi: L_{\text {univ }} \xrightarrow{\sim} L_{\text {univ }}'$ 使得下图交换:

<img src="C:\Users\yuany\AppData\Roaming\Typora\typora-user-images\image-20250411110929727.png" alt="image-20250411110929727" style="zoom:10%;" />

**证明.** (1)的存在性, 构造以集合 $V \times W$ 为基的 $R-Mod$  $F^{\oplus(V \times W)}$ , 其元素表作有限线性组合 $\sum_i c_i\left(v_i, w_i\right)$ , 其中 $\left(v_i, w_i\right) \in V \times W$. <font : color = red> 注意 : 这里 $c_i \cdot (v_i, w_i)$ 表示 $(v_i, w_i)$ 分量为 $c_i$, 并不能将其等价为 $(c_i v_i, c_iw_i)$</font>

定义 $\mathcal{N}$ 为以下元素生成的子空间
$$
\begin{gathered}
\left(v+v', w\right)-(v, w)-\left(v', w\right) \\
\left(v, w+w'\right)-(v, w)-\left(v, w'\right) \\
\quad(t v, w)-t(v, w) \\
\quad(v, t w)-t(v, w)
\end{gathered}
$$

其中 $v, v' \in V, w, w' \in W$ 而 $t \in F$ . 定义商空间 $L_{\text {univ }}:=F^{\oplus(V \times W)} / \mathcal{N}$


连同映射 $B_{\text {univ }}: V \times W \to L_{\text {univ }}$ : $B_{\text {univ }}(v, w)=(v, w)+\mathcal{N}$. 易验证映射 $B_{\text {univ }}$ 是双线性的.

对于双线性映射 $B: V \times W \to L$ . 

- $\varphi$ 的存在性 : 定义线性映射 $\Phi : F^{\oplus(V \times W)} \to L$ 使得 $\Phi((v, w))=B(v, w)$

  易验证 $\Phi$ 映 $\mathcal{N}$ 的所有生成元为零, 因此 $\Phi(\mathcal{N}) = 0$

  故诱导线性映射 $\varphi: L_{\text {univ }} \to L$ 使得 $\varphi(x+\mathcal{N})=\Phi(x)$ 对所有 $x \in F^{\oplus(V \times W)}$ 成立.  即有
  $$
  \varphi\left(B_{\text {univ }}(v, w)\right)=B(v, w), \quad(v, w) \in V \times W
  $$

- $\varphi$ 的唯一性 : 由 $B_{\text{univ}}$ 是满射即证.

(2)的唯一性, 应用(1)两次, 存在**唯一线性映射** $\varphi$ 和 $\psi$, 分别使下图的两个三角部分皆交换

<img src="C:\Users\yuany\AppData\Roaming\Typora\typora-user-images\image-20250411113630889.png" alt="image-20250411113630889" style="zoom:10%;" />

于是 $\varphi$ 和 $\psi$ 互为逆映射. 即 $\varphi$ 为同构

**泛性质 :**
$$
\color{Red}\begin{aligned}
\operatorname{Hom}(V \otimes W, L) & \xrightarrow{\sim} \operatorname{Bil}(V, W ; L) \\
\varphi & \mapsto \varphi B_{\text {univ }},
\end{aligned}
$$

**定义-命题15.1.6** 给定—族线性映射 $f_i: V_i \to W_i$ , 其中 $i=1, \cdots, n$ . 存在唯一的线性映射 $f_1 \otimes \cdots \otimes f_n$ 使下图交换

<img src="https://cdn.jsdelivr.net/gh/yuanyi-350/image/img/202506031255004.png" alt="image-20250603125210064" style="zoom:40%;" />

亦即 $\left(f_1 \otimes \cdots f_n\right)\left(v_1 \otimes \cdots \otimes v_n\right)=f_1\left(v_1\right) \otimes \cdots \otimes f_n\left(v_n\right)$ 恒成立. 今后称此线性映射为 $f_1, \cdots, f_n$ 所诱导的映射.

**证明.** 验证 $(v_1, \cdots, v_n) \mapsto f(v_1) \otimes f(v_2) \otimes \cdots \otimes f(v_n)$ 是 $V_1 \times \cdots V_n \to W_1 \otimes W_2 \otimes \cdots W_n$ 的 $n$ 重线性映射, 根据泛性质即证.

------

**命题 15.2.2(结合约束)** 设 $V_1, V_2, V_3$ 为 $F$-向量空间, 则有同构 $\left(V_1 \otimes V_2\right) \otimes V_3 \simeq V_1 \otimes V_2 \otimes V_3$

**证明 :** 关键在于说明存在线性映射如下
$$
V_1 \otimes\left(V_2 \otimes V_3\right) \xrightarrow{\alpha} V_1 \otimes V_2 \otimes V_3 \xrightarrow{\beta} V_1 \otimes\left(V_2 \otimes V_3\right) \\
v_1 \otimes\left(v_2 \otimes v_3\right) \longmapsto v_1 \otimes v_2 \otimes v_3 \longmapsto v_1 \otimes\left(v_2 \otimes v_3\right) .
$$

- 为了定义 $\alpha$ , 考虑映射
  $$
  \begin{aligned}
  B: V_1 \times\left(V_2 \times V_3\right) & \to V_1 \otimes V_2 \otimes V_3 \\
  \left(v_1,\left(v_2, v_3\right)\right) & \mapsto v_1 \otimes v_2 \otimes v_3 .
  \end{aligned}
  $$
  当 $v_1 \in V_1$ 固定, $B(v_1, \cdot): V_2 \times V_3 \to V_1 \otimes V_2 \otimes V_3$ 是双线性映射,

  根据泛性质, 有 $\varphi_{v_1} : V_2 \otimes V_3 \to V_1 \otimes V_2 \otimes V_3$ 使得 $B(v_1, \cdot) = \varphi_{c_1} \circ B_{univ}$ , 其中 $B_{univ} : V \times W \to V \otimes W$

  于是有映射
  $$
  \begin{aligned}
  B': V_1 \times\left(V_2 \otimes V_3\right) & \longrightarrow V_1 \otimes V_2 \otimes V_3 \\
  \left(v_1, v_2 \otimes v_3\right) = \left(v_1, w\right) & \longmapsto \varphi_{v_1}(w) = v_1 \otimes\left(v_2 \otimes v_3\right)
  \end{aligned}
  $$
  因为 $\varphi_{v_1}$ 是线性映射, 上式对 $V_2 \otimes V_3$ 变元是线性的;

  此外 $B\left(v_1, \cdot\right) \in \operatorname{Bil}\left(V_2, V_3 ; V_1 \otimes\right.$ $\left.V_2 \otimes V_3\right)$ 线性地依赖于 $v_1$, 故 $\varphi_{v_1}$ 亦然, 从而 $B'$ 对 $V_1$ 变元也是线性的.

  综上, $B'$ 是双线性映射, 故进一步给出线性映射
  $$
  \begin{aligned}
  \alpha: V_1 \otimes\left(V_2 \otimes V_3\right) & \to V_1 \otimes V_2 \otimes V_3 \\
  v_1 \otimes\left(v_2 \otimes v_3\right) & \mapsto v_1 \otimes v_2 \otimes v_3,
  \end{aligned}
  $$

  **p.s.** 构造 $B' : V_1 \times\left(V_2 \otimes V_3\right) \to V_1 \otimes V_2 \otimes V_3$ 的另一种方式.

  可以让 $(v_1, v_2, v_3) \mapsto v_1 \otimes v_2 \otimes v_3$, 只需证如果 $v_2 \otimes v_3 = v_2' \otimes v_3'$, 均有 $v_1 \otimes v_2 \otimes v_3 = v_1 \otimes v_2' \otimes v_3'$

  设 $V_2 \otimes V_3 = F^{\bigoplus (V_2 \times V_3)} / \mathcal{N}$ , $V_1 \otimes V_2 \otimes V_3 = F^{\bigoplus (V_1 \times V_2 \times V_3)} / \mathcal{M}$ , 有自然的嵌入 $\mathcal{N} \hookrightarrow \mathcal{M}$ 即证.

- 至于 $\beta$ 的构造更简单: 易见映射
  $$
  \begin{aligned}
  C: V_1 \times V_2 \times V_3 & \to V_1 \otimes\left(V_2 \otimes V_3\right) \\
  \left(v_1, v_2, v_3\right) & \mapsto v_1 \otimes\left(v_2 \otimes v_3\right)
  \end{aligned}
  $$
  是三重线性的, 由泛性质有唯一的线性映射 $\beta: V_1 \otimes V_2 \otimes V_3 \to V_1 \otimes\left(V_2 \otimes V_3\right)$.

  考虑合成映射 $\alpha \beta$. 它映所有 $v_1 \otimes v_2 \otimes v_3$ 为 $v_1 \otimes v_2 \otimes v_3$ , 故 $\alpha \beta=\mathrm{id}$.

  考虑合成映射 $\beta \alpha$ 映所有 $v_1 \otimes\left(v_2 \otimes v_3\right)$ 为 $v_1 \otimes\left(v_2 \otimes v_3\right)$. 先固定 $v_1$, 可得 $\beta \alpha$ 映所有 $v_1 \otimes w$ 为 $v_1 \otimes w$, 其中 $w \in V_2 \otimes V_3$, 可得 $\beta \alpha=\mathrm{id}$. 于是 $\alpha$ 和 $\beta$ 互逆.

---

**命题15.2.5** 设 $V$ 和 $W$ 为 $F$-向量空间, $V$ 带有直和分解 $V=\bigoplus\limits_{i \in I} V_i$ , 则有同构
$$
\begin{align}
V \otimes W &\xrightarrow{\sim} \bigoplus_{i \in I}\left(V_i \otimes W\right) \\
\left(\sum_{i \in I} v_i\right) \otimes w &\mapsto\left(v_i \otimes w\right)_{i \in I}
\end{align}
$$

上式默认至多只有有限个 $v_i \in V_i$ 非零, 并且将 $V_i$ 视同 $V$ 的子空间.

**证明.** 首先来证明是同构 : 定义双线性映射 $B_{\text {univ }}': V \times W \to \bigoplus\limits_{i \in I}\left(V_i \otimes W\right)$ , 使得它映 $\left(\sum_i v_i, w\right)$ 为 $\left(v_i \otimes w\right)_i$

根据泛性质的唯一性, 只需证任意双线性映射 $B : V \times W \to$ $L$ 均存在唯一的 $\varphi$ 构成交换图表 :

<img src="https://cdn.jsdelivr.net/gh/yuanyi-350/image/img/202506051123624.png" alt="image-20250605112332170" style="zoom:15%;" />

- $\varphi$ 的唯一性 : $B_{\text {univ }}'$ 是满射, 即证

- 设双线性形式 $B_i := B|_{V_i \times W}$ , 对于 $v = \sum_i v_i, v_i \in V_i$ 有 $B(v, w) = \sum_i B_i(v_i, w)$

  对每个 $i$ 记张量积自带的双线性映射为 $B_{i, \text { univ }}: V_i \times W \to V_i \otimes W$ , 存在唯一的 $\varphi_i: V_i\otimes W \to L$ 使得 $B_i = \varphi_i \circ B_{i, \text{univ}}$ 

  因此 $B(v, w) = \sum_i \varphi_i(B_{i, \text{univ}}(v_i, w)) = \sum_i \varphi_i(v_i \otimes w)$
  $$
  \begin{align}
  \varphi : \bigoplus_{i \in I} (V_i \otimes W) &\to L \\
  (u_i)_{i \in I} &\mapsto \sum_i \varphi_i(u_i)
  \end{align}
  $$
  从而 $\varphi(B'_{\text{univ}}(v, w)) = \varphi(\left(v_i \otimes w\right)_{i \in I}) = \sum_i \varphi_i (v_i \otimes w)$ 即证明了同构.

  <img src="https://cdn.jsdelivr.net/gh/yuanyi-350/image/img/202506051405028.png" alt="image-20250605140521813" style="zoom:40%;" />

  观察定义可见同构必映 $\left(\sum_i v_i\right) \otimes w$ 为 $\left(v_i \otimes w\right)_i$.

---

**推论 15.2.6** 设 $V$ 有基 $\left(v_i\right)_{i \in I}$ 而 $W$ 有基 $\left(w_j\right)_{j \in J}$ , 则 $\left(v_i \otimes w_j\right)_{(i, j) \in I \times J}$ 是 $V \otimes W$的基. 多元张量积的基也有类似描述.

**证明.** 基于命题 15.2.5,
$$
\begin{aligned}
V \otimes W&=\left(\bigoplus_{i \in I} F v_i\right) \otimes\left(\bigoplus_{j \in J} F w_j\right) \\
& \simeq \bigoplus_{i \in I}\left(F v_i \otimes \bigoplus_{j \in J} F w_j\right) \simeq \bigoplus_{i \in I} \bigoplus_{j \in J} F v_i \otimes F w_j \\
&=\bigoplus_{(i, j) \in I \times J} F v_i \otimes F w_j
\end{aligned}
$$

---

**例15.2.7(矩阵的 Kronecker 积)** 考虑线性映射$f: V \to V'$和$g: W \to W'$. 设$V$(或$V'$)有基 $v_1, \cdots, v_n$(或 $v_1', \cdots, v_{n'}'$ ), 而 $W$(或$W'$)有基 $w_1, \cdots, w_m$(或 $\left.w_1', \cdots, w_{m'}'\right)$ . 命 $e_{i j}:=v_i \otimes w_j$ 和 $e_{i j}':=v_i' \otimes w_j'$ .

于是 $e_{11}, e_{12}, \cdots, e_{1 m}, e_{21}, e_{22}, \cdots, e_{n m}$ 是 $V \otimes W$ 的基,  $e_{11}', e_{12}', \cdots, e_{1 m'}', e_{21}', e_{22}', \cdots, e_{n' m'}'$ 是 $V' \otimes W'$ 的基.

设 $f$ 对应到矩阵 $A \in M_{n' \times n}(F)$ 而 $g$ 对应到矩阵 $B \in M_{m' \times m}(F)$ . 我们有

$$
\begin{aligned}
(f \otimes g)\left(e_{i j}\right) & =\left(\sum_{k=1}^{n'} a_{k i} v_k'\right) \otimes\left(\sum_{\ell=1}^{m'} b_{\ell j} w_{\ell}'\right) \\
& =a_{1 i} b_{1 j} e_{11}'+a_{1 i} b_{2 j} e_{12}'+\cdots+a_{2 i} b_{1 j} e_{21}'+a_{2 i} b_{2 j} e_{22}'+\cdots
\end{aligned}
$$


相对于上述有序基, $f \otimes g: V \otimes W \to V' \otimes W'$ 遂对应到 $m' n' \times m n$ 分块矩阵

$$
A \otimes B:=\left(\begin{array}{c|c|c}
a_{11} B & \cdots & a_{1 n} B \\
\hline \vdots & \ddots & \vdots \\
\hline a_{n' 1} B & \cdots & a_{n' n} B
\end{array}\right)
$$

------

**Example. Problem 5.2.6. [DF, page 376, problem 16]**

Suppose $R$ is commutative and let $I$ and $J$ be ideals of $R$, so $R / I$ and $R / J$ are naturally $R$-modules.

(1) Prove that every element of $R / I \otimes_R R / J$ can be written as a simple tensor of the form $(1 \bmod I) \otimes(r \bmod J)$.

(2) Prove that there is an $R$-module isomorphism $R / I \otimes_R R / J \cong R /(I+J)$ mapping $(r \bmod I) \otimes\left(r' \bmod J\right)$ to $r r' \bmod (I+J)$.

In particular $(\Z / m \Z) \otimes(\Z / n \Z) \cong \Z / d \Z$ where $d=\gcd(m, n)$

**Pf.** (1) 

<img src="C:\Users\yuany\AppData\Roaming\Typora\typora-user-images\image-20250411160221749.png" alt="image-20250411160221749" style="zoom:25%;" />

**Exercise. Problem 5.3.10. [DF, page 375, problem 5]**

Let $A$ be a finite abelian group of order $n$ and let $p^k$ be the largest power of the prime $p$ dividing $n$. Prove that $\Z / p^k \Z \otimes_{\Z} A$ is isomorphic to the Sylow $p$-subgroup of $A$.

(1) $\Z / p^k \Z \otimes_{\Z} A \cong A / p^kA$

