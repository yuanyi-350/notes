#### 广义特征子空间分解

定义 $V[h] :=\ker(h(T)) =\{v \in V: h(T) v=0\}$

注意到 $T(V[h]) \subset V[h]$ , 这是因为 $T$ 和自身的任意次幂相交换, 故 $T h(T)=h(T) T$, $h(T) v=0 \implies h(T) T v=T h(T) v=0$


换言之, $V[h]$ 是**定义 5.10.1**所谓的 $T$-不变子空间.



**引理 7.2.1** 设 $f \in F[X]$ 分解为 $f=g h$ , 其中 $g, h \in F[X]$ 互素.当 $T \in \operatorname{End}(V)$给定, 我们有直和分解 $V[f]=V[g] \oplus V[h]$

**证明.** 因为 $g, h$ 互素, 存在 $a, b \in F[X]$ 使得 $a g+b h=1$ .对于任意 $v \in V$ , 我们有
$$
v=1 \cdot v=(a g+b h)(T) \cdot v=a(T) g(T) v+b(T) h(T) v
$$


然而当 $v \in V[f]$ 时 $g(T) v \in V[h]$ 而 $h(T) v \in V[g]$ , 而且 $V[g]$ 和 $V[h]$ 都是 $T$-不变子空间.综上可见

$$
V[f]=V[g]+V[h]
$$

其次, 若 $v \in V[g] \cap V[h]$ , 则同样由 $v=a(T) g(T) v+b(T) h(T) v$ 可得 $v=0$. 这就验证了直和分解的全部条件.



一般而言,  $\operatorname{Min}_T$ 在 $F[X]$ 中分解为乘积 $\operatorname{Min}_T=p_1^{e_1} \cdots p_m^{e_m}$ , 有 $V=V[p_1^{e_1}] \oplus \cdots \oplus V[p_m^{e_m}]$

---

**定义7.4.1** 定义广义特征子空间 $V_{[\lambda]} :=\bigcup\limits_{N \geq 0} V[(X-\lambda)^N]$

**引理 7.4.3** 设 $\operatorname{Min}_T=\prod\limits_{i=1}^m\left(X-\lambda_i\right)^{b_i}$ , 对每个 $1 \leq i \leq m$ 皆有 $V_{[\lambda_i]}=V[(X-\lambda_i)^{b_i}]$

**证明.** 显然 $V[(X-\lambda_i)^{b_i}] \subset V_{[\lambda_i]}$ . 对于另一方向的包含关系, 设 $v \in V_{[\lambda_i]}$ , 再取 $N \geq 1$ 使得 $(T-\lambda_i \cdot \operatorname{id}_V)^N(v)=0$

若 $h \in F[X]$ 是 $(X-\lambda_i)^N$ 和 $\operatorname{Min}_T$ 的最大公因式, 则因为 $\lambda_i$ 是 $\operatorname{Min}_T$ 的 $b_i$ 重根, $h$整除 $(X-\lambda_i)^{b_i}$ ;

另一方面, 存在 $f, g \in F[X]$ 使得 $h = (X-\lambda_i)^N f+\operatorname{Min}_T g$ .

于是 $h(T) v =f(T)(T-\lambda_i \cdot \operatorname{id}_V)^N v=0$ , 综上遂有 $\left(T-\lambda_i \cdot \mathrm{id}_V\right)^{b_i} v=0$ .

于是得到**广义特征子空间分解** $V = \bigoplus\limits_{i=1}^m V[(X-\lambda_i)^{b_i}] = \bigoplus\limits_{i=1}^m V_{[\lambda_i]} .$

---

#### Jordan标准型

**引理 13.5.5** 设 $A \in M_{n \times n}(F)$ 幂零, 则存在唯一的正整数列 $b_1 \leq \cdots \leq b_r$ 使得 $\sum\limits_{i=1}^r b_i=n$ 而 $A$ 共轭于分块对角矩阵
$$
\left(\begin{array}{ccc}
\boxed{J_{b_1}(0)} & & \\
& \ddots & \\
& & \boxed{J_{b_r}(0)}
\end{array}\right)
$$

- $A$ 的幂零指数为 $b_r$ ;
- 类似地, 设 $V$ 是 $n$ 维 $F$-向量空间而 $T \in \operatorname{End}(V)$ 幂零, 则存在 $V$ 的有序基和 $1 \leq b_1 \leq \cdots \leq b_r$ , 使得 $T$ 表作上述分块对角矩阵, 而 $\left(b_j\right)_{j=1}^r$ 由 $T$ 完全确定, $T$ 的幂零指数为 $b_r$.

**证明.** 注意到 ${ }^t J_d(0)=\left(\begin{array}{cccc}0 & 0 & \cdots & 0 \\ 1 & 0 & \ddots & \vdots \\ 0 & \ddots & \ddots & 0 \\ 0 & \cdots & 1 & 0\end{array}\right)=C_{X^d}$

记 $A$ 的幂零指数为 $d$ . 取 $A$ 的有理标准形 $\operatorname{diag}\left(C_{f_1}, \cdots, C_{f_r}\right)$ , 其中的不变因子 $f_1|\cdots| f_r$ 满足 $f_r=\operatorname{Min}_A=X^d$(命题13.5.3).

于是可将 $f_i$ 写作 $X^{b_i}$ , 其中 $1 \leq b_1 \leq$ $\cdots \leq b_r=d$ ; 相应地,  $C_{f_i} = {}^tJ_{b_i}(0)$ . 综上,  $A$ 共轭于 $\operatorname{diag}(^tJ_{b_1}(0), \cdots, ^tJ_{b_r}(0))$ .

 资料 $\left(b_i\right)_{i=1}^r$ 对 $A$ 的唯一性归结为不变因子 $X^{b_i}$ 的唯一性.

---

**定理13.5.6 ( Jordan标准形)** 设 $V$ 为 $n$ 维 $F-$向量空间, $T \in \operatorname{End}(V)$ . 设 $\operatorname{Char}_T$ 在 $F$ 上分裂, 记其相异根为 $\lambda_1, \cdots, \lambda_m \in F$ . 存在 $V$ 的有序基, 使得 $T$ 表为分块对角矩阵 $\operatorname{diag}\left(A_1, \cdots, A_m\right)$, 其中
$$
A_j := \begin{pmatrix}
 J_{b_{1, j}}(\lambda_j) &  &  \\
 & \ddots &  \\
 &  & J_{b_{r_j, j}}(\lambda_j) \\
\end{pmatrix}, \quad 1 \leq j \leq m,
$$

而每个 $j$ 对应的正整数列 $b_{1, j} \leq \cdots \leq b_{r_j, j}, \quad r_j \in \Z_{\geq 1} .$ 由 $T$ 唯一确定. 上述矩阵 $\operatorname{diag} (A_1, \cdots, A_m)$ 称为 $T$ 的 Jordan 标准形.

**证明.** 取对 $T$ 的广义特征子空间分解 $V=V_{\left[\lambda_1\right]} \oplus \cdots \oplus V_{\left[\lambda_m\right]}$. 每个 $V_{\left[\lambda_j\right]}$ 都是 $T-$不变子空间, 而 $d_j:=\dim V_{\left[\lambda_j\right]}>0$.

记 $T$ 在 $V_{\left[\lambda_j\right]}$ 上的限制为 $T_j$. 选定 $1 \leq j \leq m$ . 已知 $T_j-\lambda_j$ 幂零, 故引理13.5.5给出有序基和 $1 \leq b_{1, j} \leq$ $\cdots \leq b_{r_j, j}$ , 使得 $T_j-\lambda_j$ 表为矩阵 $\operatorname{diag}\left(J_{b_{1, j}}(0), \cdots\right)$ .

即证 $T_j$ 表为矩阵 $A_j:=\operatorname{diag}\left(J_{b_{1, j}}\left(\lambda_j\right), \cdots\right)$ .至此证得 Jordan 标准形的**存在性**.

至于**唯一性**, 设 $T$ 已有如是矩阵表法.选定 $j$ .注意到 $A_j-\lambda_j$ 幂零而 $\lambda_1, \cdots, \lambda_m$相异, 由此可推得分块 $A_j$ 必对应 $T_j$ . 关于 $b_{1, j} \leq \cdots \leq b_{1, r_j}$ 的唯一性因而化到引理 13.5.5 处理过的幂零情形.

---

**引理13.6.1** 设 $V$ 是 $n$ 维 $F$-向量空间, $T \in \operatorname{End}(V)$ 幂零.
(1)在 $T$ 的 Jordan 标准形中, Jordan 块的总数为 $n-\operatorname{rk}(T)$ ;
(2)对于每个 $d \geq 1$ , 标准形中的 $d \times d$ Jordan 块的个数 $N(d)$ 满足
$$
N(d)=\operatorname{rk}\left(T^{d+1}\right)+\operatorname{rk}\left(T^{d-1}\right)-2 \operatorname{rk}\left(T^d\right) .
$$

---

#### 广义特征子空间分解 : 应用

**定理 7.4.8(加性 Jordan-Chevalley 分解)** 考虑 $T \in \operatorname{End}(V)$ 并假设 $\operatorname{Char}_T$ 分裂. 存在唯一一对 $S, N \in \operatorname{End}(V)$ 使得 $S$ 可对角化, $N$ 幂零, $T=S+N$ 而 $S N=N S$. 此外, 存在 $f, g \in F[X]$ 使得 $S=f(T)$ 而 $N=g(T)$ . 当 $T$ 可逆时 $S$ 亦可逆.

**证明.** 先取相对于 $T$ 的广义特征子空间分解, 记 $T_i:=T|_{V_{\left[\lambda_i\right]}}$ .命 $n=$ $\dim V$ .

关于存在性, 定义 $S$ 使得它在每个 $V_{\left[\lambda_i\right]}$ 上限制为 $\lambda_i \mathrm{id}$ .其次定义 $N$ 使得它在每个 $V_{\left[\lambda_i\right]}$ 上限制为 $T_i-\lambda_i \mathrm{id}$ . 从 $V_{\left[\lambda_i\right]}=V_{\left[\lambda_i\right], n}$ 可见 $N^n$ 限制在每个 $V_{\left[\lambda_i\right]}$ 上皆为零映射, 从而 $N^n=0_V$ .

极易在每个 $V_{\left[\lambda_i\right]}$ 上检验 $T=S+N$ 和 $S N=N S$ , 这就给出所求的资料. 观察到当 $T$ 可逆时 $\lambda_i \in F^\times$, 故以上构造的 $S$ 也可逆.

至于唯一性, 先记 $S$ 的相异特征值为 $\mu_1, \cdots, \mu_l$ , 相应地分解 $V$ 为特征子空间直和 $\bigoplus\limits_{j=1}^l V_j$ . 对所有 $j$ , 从 $S N=N S$ 得出 $V_j$ 是 $N$-不变子空间, 而 $\left(T_j-\mu_j \mathrm{id}\right)^k=$ $\left.N^k\right|_{V_j}=0_{V_j}$ 蕴涵 $T_j$ 在 $V_j$ 上的唯一特征值为 $\mu_j$ . 这就说明

- $l=m$ 而 $\mu_j=\lambda_j$ 在重排下标后对所有 $j$ 成立,
- 承上, $V_j \subset V_{\left[\lambda_j\right]}$ 对所有 $j$ 成立.

与广义特征子空间分解对照, 立见 $V_j=V_{\left[\lambda_j\right]}$ .因此 $S$ 由 $S\Big|_{V_{\left[\lambda_i\right]}}=\lambda_i \mathrm{id}$ 唯一确定, 而 $N=T-S$ .

最后选取 $f$ , 对主理想环 $F[X]$ 应用**中国剩余定理**, 得到 $f$ 使得对所有 $1 \leq i \leq m$ 皆有

$$
f \equiv \lambda_i \quad\left(\bmod \left(X-\lambda_i\right)^n\right) ;
$$


故 $\left.f(T)\right|_{V_{\left[\lambda_i\right]}}=\lambda_i \mathrm{id}$ , 回顾唯一性论证得到 $f(T)=S$. 取 $g=X-f$ .

**定理 7.4.9(乘性 Jordan-Chevalley 分解)**设 $T \in \operatorname{End}(V)$ 可逆而 $\operatorname{Char}_T$ 分裂. 存在唯一一对可逆之 $S, U \in \operatorname{End}(V)$ 使得 $S$ 可对角化, $U-\mathrm{id}_V$ 幂零, $S U=T=U S$ .此外, 存在 $f, g \in F[X]$ 使得 $S=f(T)$ 而 $U=g(T)$ .

**证明.** 对于存在性, 先取加性 Jordan-Chevalley 分解 $T=S+N$ , 其中 $S$ 已知可逆.命 $U:=\operatorname{id}_V+S^{-1} N$ , 则 $S U=T$ .此外从 $S N=N S$ 推得 $U-\operatorname{id}_V=S^{-1} N$ 幂零, 而且 $S U=U S$ .

对于唯一性, 将分解写作 $T=S+S\left(U-\mathrm{id}_V\right)$ . 命 $N=S\left(U-\mathrm{id}_V\right)$ , 则从 $S U=U S$和 $U-\operatorname{id}_V$ 幂零推出 $S N=N S$ 以及 $N$ 幂零.于是加性版本说明 $S$ 由 $T$ 唯一确定, $U$随之也唯一确定.

最后, 加性版本给出 $f \in F[X]$ 使得 $S=f(T)$ .兹断言 $f$ 与 $\mathrm{Char}_T$ 互素: 设若不然, 则存在 $T$ 的特征值 $\lambda$ 使得 $X-\lambda | f$ , 从而相应的特征向量 $v$ 满足 $S v=0$ , 矛盾.由断言知存在 $g, h \in F[X]$ 使得 $g f+h \operatorname{Char}_T=X$ , 故 $g(T) f(T)=T, g(T)=T S^{-1}=U$ . 明所欲证.

---

**定理 7.5.3** 设 $\mathcal{S}$ 是 $\operatorname{End}(V)$ 的子集, 则 $\mathcal{S}$ 在 $F$ 上可以同步对角化的充要条件是以下两则性质成立.

- 每个 $T \in \mathcal{S}$ 在 $F$ 上皆可对角化;
- 对所有 $T, T' \in \mathcal{S}$ 皆有 $T T'=T' T$ .

**证明 :** 首先说明条件的必要性. 设 $v_1, \cdots, v_n$ 是 $V$ 的基, 满足
$$
T v_i=\lambda_i(T) v_i, \quad T \in \mathcal{S}, \quad 1 \leq i \leq n
$$


其中 $\lambda_i(T) \in F$ 是对应的特征值, 依赖于 $T$ , 则对任意 $T, T' \in \mathcal{S}$ 和所有 $i$ 皆有

$$
\begin{aligned}
& T T' v_i=T\left(\lambda_i\left(T'\right) v_i\right)=\lambda_i(T) \lambda_i\left(T'\right) v_i \\
& T' T v_i=T'\left(\lambda_i(T) v_i\right)=\lambda_i\left(T'\right) \lambda_i(T) v_i
\end{aligned}
$$

由此立见 $T T'=T' T$ .

接着说明充分性. 取 $\mathcal{S}$ 作为 $\operatorname{End}(V)$ 的子集的极大线性无关子集 $\left\{T_1, \cdots, T_k\right\}$ . 由于 $\mathcal{S}$ 的所有元素都能写成线性组合 $\sum_{i=1}^k a_i T_i$ , 问题简化到 $\mathcal{S}$ 是有限集 $\left\{T_1, \cdots, T_k\right\}$的情形. 以下对 $k$ 递归地论证.

当 $k=1$ 时, $T_1$ 本身按条件已经可对角化.

设 $k \geq 2$ . 对 $T_1$ 应用定理 7.1.7 可得相对于 $T_1$ 的特征子空间分解 $V=\bigoplus_\lambda V_\lambda$ , 下标 $\lambda \in F$ 遍历 $T_1$ 的特征值. 引理 7.5.2 蕴涵 $V_\lambda$ 对所有 $i$ 都是 $T_i$-不变子空间. 现在对每个 $\lambda \in F$ 定义
$$
T_i^\lambda:=\left.T_i\right|_{V_\lambda} \in \operatorname{End}\left(V_\lambda\right), \quad 1 \leq i \leq k
$$

一旦 $T_1^\lambda, \cdots, T_k^\lambda$ 对所有 $\lambda$ 都可以同步对角化, 则取直和可见 $T_1, \cdots, T_k$ 亦然. 所以同步对角化的问题可以化约到每个 $V_\lambda$ 上来处理. 接着选定 $\lambda$ 并观察到

- 每个 $T_i^\lambda$ 皆可对角化, 这是基于推论 7. 2. 10;

- $T_i^\lambda T_j^\lambda=T_j^\lambda T_i^\lambda$ 恒成立, 这是将等式 $T_i T_j=T_j T_i$ 限制到 $V_\lambda$ 上的产物.
  
  然而 $T_1^\lambda=\lambda \cdot \mathrm{id}_{V_\lambda}$ , 所以 $V_\lambda$ 上的同步对角化问题实则只涉及 $T_2^\lambda, \cdots, T_k^\lambda$ . 这就化约到 $k-1$ 的递归假设.
