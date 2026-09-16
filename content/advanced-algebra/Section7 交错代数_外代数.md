回忆到 $F$-向量空间 $V$ 的对偶空间记为 $V^{\vee}:=\operatorname{Hom}(V, F)$ ; 在 $V^{\vee}$ 和 $V$ 之间有典范配对

$$
\begin{aligned}
V^{\vee} \times V & \longrightarrow F \\
(\lambda, v) & \longmapsto \langle\lambda, v\rangle:=\lambda(v) .
\end{aligned}
$$
设 $T \in \operatorname{Hom}(V, W)$ .若 $\operatorname{im}(T)$ 有限维, 则称 $T$ 为有限秩的.


**命题15.3.1** 设 $V$ 和 $W$ 为 $F$-向量空间.存在线性映射如下
$$
\begin{aligned}
V^{\vee} \otimes W & \xrightarrow{\Theta_{V, W}} \operatorname{Hom}(V, W) \\
\lambda \otimes w & \longmapsto \quad[v \mapsto\langle\lambda, v\rangle \cdot w] .
\end{aligned}
$$

映射 $\Theta_{V, W}$ 总是单射, 而 $\operatorname{im}\left(\Theta_{V, W}\right)=\{T \in \operatorname{Hom}(V, W)$ : 有限秩$\}$ . 当 $V$ 或 $W$ 有限维时, $\Theta_{V, W}$ 是同构.

**证明.** 考虑 $\sum\limits_{i=1}^n \lambda_i \otimes w_i \in \ker\left(\Theta_{V, W}\right)$. 适当整理后, 不妨设 $w_1, \cdots, w_n \in W$ 线性无关.对所有 $v \in V$ 皆有
$$
\left<\lambda_1, v\right> w_1+\cdots+\left<\lambda_n, v\right> w_n=0
$$

线性无关条件蕴涵 $\left<\lambda_1, v\right>=\cdots=\left<\lambda_n, v\right>=0$. 既然 $v$ 是任意的, $\lambda_1=\cdots=\lambda_n=0$ .

现在来刻画 $\Theta_{V, W}$ 的像. 按定义, $\Theta_{V, W}\left(\sum\limits_{i=1}^n \lambda_i \otimes w_i\right)$ 的像包含于 $\sum\limits_{i=1}^n F w_i$ , 因而是有限秩的.

设 $T \in \operatorname{Hom}(V, W)$ 有限秩, 取 $\operatorname{im}(T)$ 的基 $w_1, \cdots, w_n$ . 对所有 $v \in V$ , 将 $T(v)$ 唯一地展开为 $c_1 w_1+\cdots+c_n w_n$ , 则每个系数 $c_i \in F$ 对 $v$ 都是线性的, 故可表为 $c_i=\left<\lambda_i, v\right>$ , 其中的 $\lambda_i \in V^{\vee}$ 与 $v$ 无关. 由此验证 $T=\Theta_{V, W}\left(\sum_i \lambda_i \otimes w_i\right)$ .

综上可知 $\operatorname{im}\left(\Theta_{V, W}\right)$ 由所有有限秩的 $T \in \operatorname{Hom}(V, W)$ 构成. 当 $V$ 或 $W$ 有限维时, 所有 $T$ 都是有限秩的.证毕.

**命题15.3.5** 设 $V_1, \cdots, V_n$ 为 $F$-向量空间, 则有典范的线性映射 $\Psi_{V_1, \cdots, V_n}: V_1^{\vee} \otimes \cdots \otimes V_n^{\vee} \to\left(V_1 \otimes \cdots \otimes V_n\right)^{\vee}$


通过张量积的泛性质对应到以下 $n$ 重线性映射:

$$
\begin{aligned}
V_1^{\vee} \times \cdots \times V_n^{\vee} & \to\left(V_1 \otimes \cdots \otimes V_n\right)^{\vee} \\
\left(\check{v}_1, \cdots, \check{v}_n\right) & \mapsto\left[v_1 \otimes \cdots \otimes v_n \mapsto \prod_{i=1}^n\left<\check{v}_i, v_i\right>\right] .
\end{aligned}
$$

当每个 $V_i$ 皆为有限维时, $\Psi_{V_1, \cdots, V_n}$ 为同构.

**证明.** 首务是观察到当 $\check{v}_1, \cdots, \check{v}_n$ 固定, $v_1 \otimes \cdots \otimes v_n \mapsto \prod_{i=1}^n\left<\check{v}_i, v_i\right>$ 是良定义的: 它对应到 $n$ 重线性映射
$$
\begin{aligned}
V_1 \times \cdots \times V_n & \to F \\
\left(v_1, \cdots, v_n\right) & \mapsto \prod_{i=1}^n\left<\check{v}_i, v_i\right> .
\end{aligned}
$$


此外, 当 $\left(v_1, \cdots, v_n\right)$ 固定, $\prod_{i=1}^n\left<\check{v}_i, v_i\right>$ 对每个 $\check{v}_i$ 都是线性的, 因此这给出 $n$ 重线性映射 $V_1^{\vee} \times \cdots \times V_n^{\vee} \to\left(V_1 \otimes \cdots \otimes V_n\right)^{\vee}$ , 相应地有 $\Psi_{V_1, \cdots, V_n}$ .

以下设每个 $V_i$ 都是有限维的. 先证 $\Psi_{V_1, \cdots, V_n}$ 单. 对每个 $1 \leq h \leq n$ 为 $V_h$ 取基 $\left(v_{h, i}\right)_{i \in I_h}$ , 相应地有 $V_h^{\vee}$ 的对偶基 $\left(\check{v}_{h, i}\right)_{i \in I_h}$.

推论15.2.6说明 $\check{v}_{1, i_1} \otimes \cdots \otimes \check{v}_{n, i_n}, \quad \forall h, i_h \in I_h$ 构成 $V_1^{\vee} \otimes \cdots \otimes V_n^{\vee}$ 的基.

将每个 $\lambda \in V_1^{\vee} \otimes \cdots \otimes V_n^{\vee}$ 以上述基展开, 取 $\Psi_{V_1, \cdots, V_n}(\lambda)$ 在 $v_{i, i_1} \otimes \cdots \otimes v_{n, i_n}$ 处的值便是 $\check{v}_{i, i_1} \otimes \cdots \otimes \check{v}_{n, i_n}$ 在 $\lambda$ 中的系数.由此可见 $\Psi_{V_1, \cdots, V_n}$ 单, 比较维数即由 $\Psi_{V_1, \cdots, V_n}$ 的单性推得同构.

---

**定义15.3.3(缩并)**给定 $F$-向量空间 $V$ , 通过张量积的泛性质对应到双线性形式
$$
\begin{aligned}
V^{\vee} \times V & \to F \\
(\check{v}, v) & \mapsto\langle\check{v}, v\rangle
\end{aligned}
$$


的线性映射 $V^{\vee} \otimes V \to F$ 称为缩并.具体地说, $\sum_i \check{v}_i \otimes v_i \in V^{\vee} \otimes V$ 的缩并是 $\sum_i\left\langle\check{v}_i, v_i\right\rangle$.

**练习15.3.4** 在 $V$ 有限维的情形, 验证缩并运算等于 $V^{\vee} \otimes V \xrightarrow{\Theta_{V, V}} \operatorname{End}(V) \xrightarrow{\mathrm{Tr}} F$的合成. 提示 : 归结为证 $\langle\lambda, \cdot\rangle w$ 的迹是 $\langle\lambda, w\rangle$ .

**证明.** 首先, 选取 $V$ 的一组基为 $v_1, \cdots, v_n$ , 对应的对偶基为 $\check{v_1}, \cdots, \check{v_n}$. $\Theta(\lambda \otimes w) = [v \mapsto \left<\lambda, v\right>\cdot w]$

计算 $\Theta(\check{v_i} \otimes v_j)v_k = \left<\check{v_i}, v_k\right>v_j = \begin{cases}v_j, i = k\\
0, i \neq k\\
\end{cases}$ , 从而 $\operatorname{Tr}\Big(\Theta(\check{v_i} \otimes v_j)\Big) = \left<\check{v_i}, v_j\right> = \begin{cases}1, i = j \\ 0, i \neq j\end{cases}$

设 $\lambda = c_1 \check{v_1} + \cdots + c_n \check{v_n}$ , $w = d_1 v_1 + \cdots + d_n v_n$

于是 $\operatorname{Tr}(\Theta(\lambda, w)) = \sum\limits_{i = 1}^n \sum\limits_{j = 1}^n c_i d_j \operatorname{Tr}\Big(\Theta(\check{v_i} \otimes v_j)\Big) = \sum\limits_{i = 1}^n \sum\limits_{j = 1}^n c_i d_j \left< \check{v_i}, v_j\right> = \left<\lambda, v\right>$ 正是 $\lambda \otimes w$ 的缩并.

---

基于张量幂的符号, **命题15.3.1**和**命题15.3.5**表明从有限维 $F$-向量空间 $V$ 出发, 反复应用 $\otimes$, Hom 和取对偶空间这三种操作, 所得产物都同构于形如

$$
V^{\otimes p} \otimes\left(V^{\vee}\right)^{\otimes q}, \quad p, q \in \Z_{\geq 0}
$$

的向量空间; 上述向量空间的元素也称为 $V$ 上的 $(p, q)$-型张量.

**例15.3.7** 空间 $V$ 的元素是 $(1,0)-$型张量, $V^{\vee}$ 的元素是 $(0,1)-$型张量,  $\operatorname{End}(V)$ 的元素等同于 $(1,1)$-型张量. 双线性形式 $V \times V \to F$ 等同于 $\operatorname{Hom}(V \otimes V, F) \simeq\left(V^{\vee}\right)^{\otimes 2}$的元素(基于泛性质和命题 15.3.5), 因而等同于 $(0,2)-$型张量.

---

**定义15.5.1(域上的代数)** 设 $A$ 为环, 同时又有 $F$-向量空间的结构, 使得环的加法等于向量空间加法, 而环的乘法 $A \times A \to A$ 是双线性映射, 则称 $A$ 为 $F$-代数. (注意 : 这里的双线性映射是指代 $F-$双线性的, 环的乘法天然是 $\Z-$ 双线性的)

若 $F$-代数 $A$ 作为环是交换的, 则称之为交换 $F$-代数.

设 $A$ 和 $A'$ 为 $F$-代数. 如果环同态 $f: A \to A'$ 同时也是 $F$-线性映射, 则称之为 $F$-代数的同态.按照类似方法定义 $F$-代数的同构.

因此 $F$-代数 $A$ 的乘法也可以等价地表为线性映射 $A \otimes A \to A$ . 若 $F$-代数 $A$ 的子环 $A_0$ 同时也是子空间, 则称 $A_0$ 为 $A$ 的子代数.

**定义-命题15.5.6(张量代数)** 对 $F$-向量空间 $V$ , 定义 $T(V):=\bigoplus_{n \geq 0} V^{\otimes n}$ . 在 $T(V)$ 上存在 $F$-代数结构, 使得 $V^{\otimes a} \cdot V^{\otimes b} \subset V^{\otimes(a+b)}$ 对所有 $a, b \in \Z_{\geq 0}$ 成立, 而且对应的线性映射 $V^{\otimes a} \otimes V^{\otimes b} \to V^{\otimes(a+b)}$ 刻画为
$$
\left(v_1 \otimes \cdots \otimes v_a\right) \otimes\left(v_1' \otimes \cdots \otimes v_b'\right) \mapsto v_1 \otimes \cdots \otimes v_a \otimes v_1' \otimes \cdots \otimes v_b' .
$$

它的么元是 $1 \in F=V^{\otimes 0}$ .这一结构称为 $V$ 的张量代数.

---

**定义15.6.1** 对于 $n$ 重线性的 $C$

若 $C$ 满足性质 $C(\cdots, x, y, \cdots)=C(\cdots, y, x, \cdots)$, 则称之为对称的.

若 $C$ 满足性质 $C(\cdots, x, x, \cdots)=0$, 则称之为交错的. 在 $\operatorname{Char}(F) \ne 2$ 时$\iff$ $C(\cdots, x, y, \cdots)=-C(\cdots, y, x, \cdots)$ 恒成立 (反对称)

**定义15.6.3(对称代数与外代数)** 设 $V$ 为 $F$-向量空间, 定义张量代数 $T(V)$ 的理想如下:

$I_{Sym}:=$ 形如 $x \otimes y-y \otimes x$ 的元素生成的理想, $I_{\wedge}:=$ 形如 $x \otimes x$ 的元素生成的理想, 其中 $x, y \in V$

具体地说, $I_{\mathrm{Sym}}$ 的元素形如 $u \otimes x \otimes y \otimes v-u \otimes y \otimes x \otimes v, \quad u \in V^{\otimes a}, \quad v \in V^{\otimes b}$ 之线性组合

$I_{\wedge}$ 的元素形如 $u \otimes x \otimes x \otimes v$ 之线性组合

相应的商代数定义为 $V$ 的对称代数 $Sym(V) :=T(V) / I_{Sym}$,  $V$ 的外代数 $\bigwedge(V) :=T(V) / I_{\wedge}$
$$
\begin{aligned} I_{Sym}
& =\bigoplus_{m \geq 0} I_{Sym}^m, & I_{Sym}^m:=I_{Sym} \cap V^{\otimes m}, \\
I_{\wedge} & =\bigoplus_{m \geq 0} I_{\wedge}^m, & I_{\wedge}^m:=I_{\wedge} \cap V^{\otimes m}
\end{aligned}
$$

按此逐项取商: 命 $\operatorname{Sym}^m(V)=V^{\otimes m} / I_{Sym}^m$ 而 $\bigwedge^m(V)=V^{\otimes m} / I_{\wedge}^m$ , 有

$$
\operatorname{Sym}(V)=\bigoplus_{m \geq 0} \operatorname{Sym}^m(V), \quad \bigwedge(V)=\bigoplus_{m \geq 0} \bigwedge^m(V) .
$$

**命题15.6.5** 设 $M$ 为 $F$-向量空间, 则 $\operatorname{Mul}(V, \cdots, V ; M) \simeq \operatorname{Hom}\left(V^{\otimes m}, M\right)$ 限制为
$$
\begin{aligned}
& \{C \in \operatorname{Mul}(V, \cdots, V ; M): \text { 对称 }\} \simeq \operatorname{Hom}\left(\operatorname{Sym}^m V, M\right), \\
& \{C \in \operatorname{Mul}(V, \cdots, V ; M): \text { 交错 }\} \simeq \operatorname{Hom}\left(\bigwedge^m V, M\right),
\end{aligned}
$$
**例子 :** 设 $F$-向量空间 $V$ 有一组基 $v_1, \cdots, v_n$, 有 $F-$ 代数同构 $F[X_1, \cdots, X_n] \simeq Sym(V)$, 具体的, 让 $X_i \mapsto v_i$

**定理15.6.7** 设 $V$ 为 $n$ 维向量空间, 取定 $V$ 的基 $v_1, \cdots, v_n$ , 则 $v_{i_1} \wedge \cdots \wedge v_{i_m}$, $1 \leq i_1<\cdots<i_m \leq n$ 构成 $\bigwedge^m(V)$ 的基.

**证明.** 对于一般的 $m \leq n$ , 设有 $\wedge^m(V)$ 中的线性关系式 $\sum\limits_{i_1'<\cdots<i_m'} c_{i_1', \cdots, i_m'} v_{i_1'} \wedge \cdots \wedge v_{i_m'}=0$


选定 $1 \leq i_1<\cdots<i_m \leq n$ . 定义 $V$ 的 $m$ 维子空间 $V':=\sum\limits_{k=1}^m F v_{i_k}$ 和线性映射 $\psi: V \to V'$ , 使得

$$
\psi\left(v_a\right)= \begin{cases}v_a, & a \in\left\{i_1, \cdots, i_m\right\}, \\ 0, & a \notin\left\{i_1, \cdots, i_m\right\} .\end{cases}
$$

$$
\begin{cases}
\bigwedge^m(\psi) (v_{i_1} \wedge \cdots \wedge v_{i_m}) = v_{i_1} \wedge \cdots \wedge v_{i_m} \\[1ex]
\bigwedge^m(\psi) (v_{i_1'} \wedge \cdots \wedge v_{i_m'}) = 0, \text{ 其中 } (i_1, \cdots, i_m) \neq (i_1', \cdots, i_m') \\
\end{cases}
$$

于是有 $\sum\limits_{i_1'<\cdots<i_m'} c_{i_1', \cdots, i_m'} \cdot \bigwedge^m(\psi)(v_{i_1'} \wedge \cdots \wedge v_{i_m'})=0$ , 即 $c_{i_1, \cdots, i_m} \cdot v_{i_1} \wedge \cdots \wedge v_{i_m} = 0$

考虑 $\bigwedge^m(V')=F v_{i_1} \wedge \cdots \wedge v_{i_m}$ 的维数为 $1$, 可得 $c_{i_1, \cdots, i_m}=0$.



---

$\sigma\left(v_1 \otimes \cdots \otimes v_n\right)=v_{\sigma^{-1}(1)} \otimes \cdots \otimes v_{\sigma^{-1}(n)}$ , 其中 $v_1, \cdots, v_n \in V$.
$$
\begin{aligned}
\left(V^{\otimes n}\right)_{\mathrm{Sym}} & :=\left\{x \in V^{\otimes n}: \forall \sigma \in \mathfrak{S}_n, \sigma x = x\right\} , & T_{\mathrm{Sym}}(V) & :=\bigoplus_{n \geq 0}\left(V^{\otimes n}\right)_{\mathrm{Sym}}, \\
\left(V^{\otimes n}\right)_{\wedge} & :=\left\{x \in V^{\otimes n}: \forall \sigma \in \mathfrak{S}_n, \sigma x = \operatorname{sgn}(\sigma) x\right\} & T_{\wedge}(V) & :=\bigoplus_{n \geq 0}\left(V^{\otimes n}\right)_{\wedge}
\end{aligned}
$$
定义商映射
$$
\begin{aligned}
q_{\mathrm{Sym}}: T(V) & \to \operatorname{Sym}(V), \\
q_{\wedge}: T(V) & \to \bigwedge(V)
\end{aligned}
$$
例子 : 设 $V = Fe_1 \oplus Fe_2$ , $\left(V^{\otimes n}\right)_{\mathrm{Sym}} = \{a e_1 \otimes e_1 + be_1 \otimes e_2 + be_2 \otimes e_1 + ce_2 \otimes e_2 | a, b, c \in F\}$



**定理 15.9.2** 设 $n \in \Z_{\geq 0}$ .若 $n!\in F^\times$, 则 $q_{\text {Sym }}^n$ 和 $q_{\wedge}^n$ 分别限制为向量空间的同构
$$
q_{\text {Sym }}^n : \left(V^{\otimes n}\right)_{\mathrm{Sym}} \xrightarrow{\sim} \operatorname{Sym}^n(V), \quad q_{\wedge}^n : \left(V^{\otimes n}\right)_{\wedge} \xrightarrow{\sim} \bigwedge^n(V) .
$$


作为推论, 当 $\operatorname{char}(F)=0$ 时有向量空间的同构

$$
q_{\mathrm{Sym}}: T_{\mathrm{Sym}}(V) \xrightarrow{\sim} \operatorname{Sym}(V), \quad q_{\wedge}: T_{\wedge}(V) \xrightarrow{\sim} \bigwedge(V).
$$
定义 $\displaystyle \operatorname{Avg} : x \longmapsto \sum_{\sigma \in \mathfrak{S}_n} \frac{\sigma x}{n!}$ 是 $V^{\otimes n} \twoheadrightarrow V^{\otimes n}_{\text{Sym}}$ 的投影 (投影即 $\operatorname{Avg}\Big|_{V^{\otimes n}_{\text{Sym}}} = id.$ 并且 $\operatorname{Im}(\operatorname{Avg}) = V^{\otimes n}_{\text{Sym}}$)

因此 $V^{\otimes n} = V^{\otimes n}_{\text{Sym}} \oplus \ker (\operatorname{Avg})$ 

断言 : 在 $q_{\text{Symm}}^n : V^{\otimes n} \twoheadrightarrow Sym^n(V)$ 中, $q_{\text{Symm}}^n \left(\ker (\operatorname{Avg})\right) = 0$

只需证 $\ker( \operatorname{Avg}) \sub \ker q_{\text{Symm}}^n$ , 这是因为 $q_{\text {sym}}^n(\sigma x)=q_{\text {sym }}^n(x)$ $\implies q_{\text {sym}}^n \operatorname{Avg} =q_{\text {sym }}^n$ 即证.

由断言即证满射, 为证明单射 ,$V_{\text{sym}}^{\otimes n} \cap \ker q_{\text{sym}}^n=\{0\}$ 并验证 $\operatorname{Avg}(\cdots \otimes x \otimes y\otimes \cdots)  = \operatorname{Avg}(\cdots \otimes y \otimes x\otimes \cdots)$
