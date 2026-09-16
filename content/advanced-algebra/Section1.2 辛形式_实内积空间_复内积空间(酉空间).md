#### 双线性型

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

---

**定义8.3.1** 考虑资料 $(V_1, B_1)$ 和 $(V_2, B_2)$ , 其中 $V_i$ 是 $F$-向量空间而 $B_i: V_i \times V_i \to$ $F$ 是双线性形式 $(i=1,2)$.

从 $(V_1, B_1)$ 到 $(V_2, B_2)$ 的同构意谓满足以下条件的线性映射 $\varphi \in \operatorname{Hom}(V_1, V_2)$ :

- $\varphi$ 是向量空间的同构 ;
- $B_2(\varphi(v_1), \varphi(v_1'))=B_1(v_1, v_1')$ 对所有 $v_1, v_1' \in V_1$ 成立.

上述同构也记为 $\varphi:(V_1, B_1) \xrightarrow{\sim}(V_2, B_2)$ , 简记为 $(V_1, B_1) \simeq(V_2, B_2)$.

**定义 8.3.8(矩阵的合同关系)** 设 $A, A' \in M_{n \times n}(F)$ .若存在可逆的 $C \in M_{n \times n}(F)$使得 $A={ }^t C A' C$ , 则称 $A$ 和 $A'$ 合同.

---

**定义 8.6.1** 设 $V$ 是 $\R$-向量空间, $B: V \times V \to \R$ 是**对称双线性**形式.

如果 $B(v, v) \geq 0$ (或 $\leq 0$ )对所有 $v$ 成立, 则称( $V, B$ )为半正定(或半负定)的;

如果进一步要求 $B(v, v)=0 \iff$ $v=0$ , 则称 $(V, B)$ 为正定(或负定)的. 若以上皆非, 则称 $B$ 不定. (即正定矩阵自动成为对称矩阵)

**命题 8.6.3** 设 $n$ 元实二次型 $f$ 同构于规范形 $X_1^2+\cdots+X_p^2-X_{p+1}^2-\cdots-X_r^2$ , 其中 $r$ 是 $f$ 的秩, 

则 $f$ 半正定当且仅当 $p=r$ ; $f$ 正定当且仅当 $p=n$.

**证明 :** 配方法

矩阵意义为 $f$ 对应的矩阵的合同标准型为 $\operatorname{diag}\{1, 1, \cdots, 1, -1, \cdots, -1\}$

---

**定义 8.7.1** 设 $V$ 为有限维向量空间, 其上的非退化反对称双线性形式 $B: V \times$ $V \to F$ 称为辛形式, 而资料 $(V, B)$ 也称为辛空间, 往往简记为 $V$.

**定义 8.7.2** 设 $(V, B)$ 为辛空间.

- 设 $V_0$ 为 $V$ 的子空间, 若 $B\Big|_{V_0 \times V_0}$ 恒为零, 则称 $V_0$ 是全迷向的;
- 极大全迷向子空间 $L$ 称为 $V$ 的 Lagrange 子空间, 这相当于说 $L$ 全迷向, 而任何严格包含 $L$ 的子空间都不是全迷向的.

**命题 8.2.17** 设 $B: V \times W \to F$ 非退化, 则
$$
\dim V_0^{\perp}+\dim V_0=\dim V, \quad \dim^{\perp} W_0+\dim W_0=\dim W .
$$
**引理 8.7.3** 设 $(V, B)$ 为辛空间, $L$ 为 Lagrange 子空间, 则有 $L^{\perp}=L$ 和 $\dim V=$ $2 \dim L$ .

证明 先证 $L^{\perp}=L$ . 全迷向性质等价于 $L \subset L^{\perp}$ . 假若存在 $v \in L^{\perp} \backslash L$ , 则 $L+\langle v\rangle$仍是全迷向的, 而且严格包含 $L$ , 与极大性质矛盾.

其次, **命题 8.2.17** 说明 $\dim L^{\perp}=\dim V-\dim L$ , 代入 $L^{\perp}=L$ 立得 $\dim V=$ $2 \dim L$.

**定理 8.7.4 (J.-G.Darboux)** 设( $V, B$ )为辛空间, $L$ 为 Lagrange 子空间, 则 $L$ 的任何有序基 $p_1, \cdots, p_n$ 都能扩充为 $V$ 的有序基
$$
p_1, \cdots, p_n, q_1, \cdots, q_n
$$


使得对一切 $1 \leq i, j \leq n$ 皆有

$$
\begin{aligned}
& B\left(p_i, p_j\right)=B\left(q_i, q_j\right)=0 \\
& B\left(p_i, q_j\right)=-B\left(q_j, p_i\right)= \begin{cases}1, & i=j \\
0, & i \neq j\end{cases}
\end{aligned}
$$

满足上述条件的有序基 $p_1, \cdots, q_n$ 也称为辛空间 $V$ 的辛基.

此时对应的辛形式便对应到 $2 n \times 2 n$ 反对称矩阵 $J_{2 n}:=\left(\begin{array}{lllll} 
& & & & & 1\\
& & & & \cdots\\
& & & 1 & \\
& & -1 & & \\
& \cdots & & & \\
-1 & & & &
\end{array}\right)$

---

**定义10.1.4(半双线性映射和半双线性形式)** 设 $V, W, X$ 为 $\mathbb{C}$-向量空间, 从 $V \times W$ 到 $X$ 的半双线性映射是指满足以下条件的映射 $B: V \times W \to X$

- 第一个变元是半线性的:
  $$
  \begin{gathered}
  B(v_1+v_2, w) = B(v_1, w) + B(v_2, w), \\
  B(t v, w)=\bar{t} B(v, w) .
  \end{gathered}
  $$

- 第二个变元是线性的:
  $$
  \begin{gathered}
  B(v, w_1+w_2) = B(v, w_1) + B(v, w_2), \\
  B(v, t w)=t B(v, w)
  \end{gathered}
  $$
  则称 $B$ 为双线性映射. 这些双线性映射构成的集合记为 $\operatorname{Sesq}_{\mathbb{C} | \R}(V, W ; X)$ .
  对于 $X=\mathbb{C}$ 的特例, 半双线性映射 $B: V \times W \to \mathbb{C}$ 也称为 $V \times W$ 上的半双线性形式, 它们构成的 $\mathbb{C}$-向量空间记为 $\operatorname{Sesq}_{\mathbb{C} | \R}(V, W)$ .



**命题10.1.7(以矩阵表达半双线性形式)** 设 $m, n \in \Z_{\geq 1}$ . 将 $\mathbb{C}^m$ 和 $\mathbb{C}^n$ 的元素视同列向量, 则有向量空间的同构
$$
\begin{aligned}
M_{m \times n}(\mathbb{C}) & \longrightarrow \operatorname{Sesq}_{\mathbb{C} | \R}\left(\mathbb{C}^m, \mathbb{C}^n\right) \\
A & \longmapsto \left[B(v, w):={ }^{\dagger} v A w\right]
\end{aligned}
$$



**定义10.1.8** 设 $V$ 是 $\mathbb{C}$-向量空间, $\varepsilon \in\{ \pm 1\}$ . 若半双线性形式 $B: V \times V \to \mathbb{C}$ 满足 $B(v, w)=\varepsilon \overline{B(w, v)}$, 则称 $B$ 是 $\varepsilon$-Hermite 形式.

将 $(+1)$-Hermite 形式简称为 $V$ 上的 **Hermite 形式**, 将 $(-1)$-Hermite 形式简称为 $V$ 上的 **反Hermite 形式**.

将 $A = {}^\dagger A$ 称为 Hermite 矩阵, $A = -{}^\dagger A$ 称为反 Hermite 矩阵.



**定义10.2.6** 考虑 $\mathbb{C}$-向量空间 $V$ 上的 Hermite 形式 $B$. 易验证 $B(v,v)$ 是实数 (只有实数才有序). 正定等定义完全照搬实内积空间



**定义10.3.1** 复向量空间 $V$ 上的 Hermite 内积(又称复内积)意指满足以下性质的映射

- $(\cdot | \cdot): V \times V \to \mathbb{C}$ 是 $V$ 上的 Hermite 形式 (**定义10.1.8**)

- $( \cdot | \cdot)$  : 正定 (**定义10.2.6**).


设 $V$ 为复向量空间, $(\cdot | \cdot)$ 为 $V$ 上的内积, 则资料 $(V,(\cdot | \cdot))$ 统称为**复内积空间**, **Hermite 空间**, 或**酉空间**.



**例10.1.11** 假设 $V_i=V_i'=\mathbb{C}^{n_i}$ , 等同于列向量空间 $(i=1,2)$ . 考虑 $A_i \in$ $M_{n_i \times n_i}(\mathbb{C})$ 确定的半双线性形式 $B_i$ ; 假设 $A_1$ 可逆, 亦即 $B_1$ 非退化. 以下给定矩阵 $T \in M_{n_2 \times n_1}(\mathbb{C})$ , 视同线性映射 $\mathbb{C}^{n_1} \to \mathbb{C}^{n_2}$ .
$$
T^* \xlongequal{\text { 等同于 }} A_1^{-1}{ }^{\dagger} T A_2 \in M_{n_1 \times n_2}(\mathbb{C}) .
$$


可以直接代入矩阵表达式来检验等式

$$
{ }^{\dagger}\left(T v_1\right) A_2 v_2={ }^{\dagger} v_1 A_1\left(A_1^{-1}{ }^{\dagger} T A_2\right) v_2
$$

确实对所有列向量 $v_i \in \mathbb{C}^{n_i}$ 成立 $(i=1,2)$ , 而这刻画了 $T^*$ .

---

#### 内积空间

**定义 9.2.1** 实向量空间 $V$ 上的内积意指**正定对称双线性形式** $(\cdot | \cdot): V \times V \to \R$ ; 这般资料 $(V,(\cdot | \cdot))$ 统称为实内积空间

- 双线性 $(\cdot | \cdot): V \times V \to \R$ 是双线性形式 (**定义 8.1.1**).
- 对称性 对所有 $v, w \in V$ 皆有 $(v | w)=(w | v)$.
- 正定性 我们有 $(v | v) \geq 0$ , 等号成立当且仅当 $v=0$. (**定义 8.6.1**)



**定义 9.8.5** 设 $(V,(\cdot | \cdot))$ 为有限维内积空间. 若 $T \in \operatorname{End}(V)$ 自伴, 而且 $\left(v_1, v_2\right) \mapsto \left( T v_1 | v_2\right)$ 是 $V$ 上的正定(或半正定)二次型, 则称 $T$ 是正定(或半正定)的.

**定义 9.2.6** 设 $\left(V,(\cdot | \cdot)_V\right)$ 和 $\left(W,(\cdot |)_W\right)$ 为内积空间 , 线性映射 $T: V \to W$ .

由于内积可以通过以长度来表达 , **保距$\|\varphi(v)\|_W=\|v\|_V,\forall v \in V$ $\iff$ 保内积 $\left(T v_1 | T v_2\right)_W=\left(v_1 | v_2\right)_V , \forall v_1,v_2 \in V$**



**定义9.2.7** 设 $\left(V,(\cdot | \cdot)_V\right)$ 和 $\left(W,(\cdot | \cdot)_W\right)$ 为内积空间, 若

$$
V \underset{S}{\stackrel{T}{\leftrightarrows}} W
$$


是一对保距线性映射, 使得 $T S=\mathrm{id}_W, S T=\mathrm{id}_V$ , 则称 $S$ 和 $T$ 为内积空间的互逆同构.



**命题 9.4.1** 取 $\left(V,(\cdot | \cdot)_V\right)$ 和 $\left(W,(\cdot | \cdot)_W\right)$ 如上. 线性映射 $T: V \to W$ 是内积空间的同构(定义9.2.7) 当且仅当 $T^*=T^{-1}$ .

**证明** 设 $T$ 是内积空间的同构, 则 $(T v | w)_W=\left(T^{-1} T v | T^{-1} w\right)_V=\left(v | T^{-1} w\right)_V, \quad v \in V, w \in W$ , 这表明 $T^*=T^{-1}$ .

反之设 $T^*=T^{-1}$ , 则 $\left(T v_1 | T v_2\right)_W=\left(v_1 | T^* T v_2\right)_V=\left(v_1 | v_2\right)_V$ , 而 $v_1, v_2 \in V$ 可任选, 故 $T$ 是保距的线性同构.

<div STYLE="page-break-after: always;"></div>

##### 正交化 (对实内积空间, 复内积空间一样)

**定理 9.3.5 (Gram-Schmidt 正交化)** 设 $V$ 中的一族向量 $v_1, v_2, \cdots$ 线性无关
$$
\begin{aligned}
w_1 & :=v_1 \\
\vdots\\
w_k & :=v_k-\sum_{i=1}^{k-1} \frac{\left(w_i | v_k\right)}{\left(w_i | w_i\right)} \cdot w_i, \quad k \in \Z_{\geq 2}
\end{aligned}
$$

**推论 9.5.7 (QR 分解)** 任何可逆矩阵 $A \in M_{n \times n}(\R)$ 都能表作 $A={Q R}$ , 其中 $Q$是正交矩阵, $R$ 是可逆上三角矩阵.

**证明 :** Gram-Schmidt 正交化
