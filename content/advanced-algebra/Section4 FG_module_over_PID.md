**定义12.5.1** PID. R, $M$ is a finite generated torsion $R-$module.

$\begin{cases}
M[a]=\{x \in M | a x=0\} \\ \operatorname{ann}(x)=\{r \in R | r x=0\} \\ \operatorname{ann}(N)=\{r \in R | \forall x \in N, r x=0\}=\bigcap\limits_{x \in N} \operatorname{ann}(x)
\end{cases}$

**(DN, page 225 §6.3 Thm 5)(The Primary Decomposition Thm) (DF, page 465 §12. Thm)**
$$
M[t]=\bigoplus_{i=1}^t M[p_i^{\alpha_i}], \text{ Denote } M[p^\infty]:=\bigcup\limits_{n=1}^\infty M[p^n] 
\text{ is a submodule of $M$ , then } M[t] = \bigoplus_{p: \text { 素元 } / \sim} M[p^\infty] .
$$
**Pf.**

引理1 . $\gcd(a, b)=d, M[d]=M[a] \cap M[b]$

引理2 . $\gcd(a, b)=1, M[a \cdot b]=M[a] \oplus M[b]$

当 $n \ge 0$ 时 $M[p^n]=M[p^n] \cap M[t]=M[\gcd(p^n, t)]=M[p^a]$ , 其中 $p^a \| t$ .



**推论 12.5.7** 设 $R$ 为PID, $R-$模 $M$ 满足 $M = \operatorname{Tor}(M)$ , 则

(1) 对所有有限生成子模 $M_0 \subset M$ 皆存在 $t \in R \backslash\{0\}$ 使得 $M_0=M_0[t]$

(2) $M = \bigoplus\limits_{p \text { : 素元 } / \sim} M[p^\infty]$

**证明.** (1) 设子模 $M_0$ 由 $x_1, \ldots, x_n$ 生成, 对每个 $i$ 取 $t_i \in R \backslash\{0\}$ 使得 $t_i x_i=0$ , 再取 $t=t_1 \cdots t_n \neq 0$ , 则 $t x_i=0$ 对所有 $1 \leq i \leq n$ 成立. 故 $M_0=M_0[t]$.

(2) 给定 $x \in M$ , 命 $M_0=R x$ , 则 $\displaystyle x \in M_0 = M_0[t] =\sum_{p \text { : 素元 } / \sim} M_0[p^\infty] \subset \sum_{p \text { : 素元 } / \sim} M[p^\infty]$

另一方面, 设有互不等价的素元 $p_1,\cdots, p_n$ 和等式 $\sum\limits_{i=1}^n r_i x_i=0$ , 其中 $r_i \in R$ 而 $x_i \in M[p_i^\infty]$. 命 $M_0=\sum\limits_{i=1}^n R x_i$, 于是 $x_i \in M_0[p_i^\infty]$ , 从而(1)配合**定义12.5.1**对 $M_0$ 给出的直和分解表明必有 $r_1=\cdots=r_n=0$. 综上知 $M = \bigoplus\limits_{p \text { : 素元 } / \sim} M[p^\infty]$ .



接着对一些基本情形确定 $M[p^\infty]$ .

**引理 12.5.3** 设 $R$ 为PID, $t \in R \backslash\{0\}$ , 而 $p$ 是 $R$ 的素元. 考虑 $a \in \Z_{\geq 0}$ .

(1) 若 $p^a | t$ 则 $(R /(t))[p^a] \simeq R /(p^a)$

(2) 若 $p^a\|~t$ 则 $(R /(t))[p^\infty] \simeq R /(p^a)$

**证明.** (1) 设 $p^a \| t$ 而 $x \in R$ . 命 $s:=t / p^a$ . 条件 $x+(t) \in (R /(t))[p^a]$ 等价于存在 $y \in R$ 使得 $p^a x=t y$ ; 两边消去 $p^a$ 可知这等价于存在 $y$ 使得 $x=s y$ . 综上, $(R /(t))[p^a]=(s) /(t)$.

(2) 考虑从 $R$ 到 $(s) /(t)$ 的模同态 $y \mapsto s y+(t)$ , 它显然满, 核是 $\{y: t \| s y\}=(p^a)$. 于是得到模同构 $R /(p^a) \xrightarrow{\sim}(s) /(t)$ , 此即 $(\mathrm{i})$ .

既然 $(R /(t))[t]=R /(t)$ , 先前已论证 $p^a \| t$ 蕴涵 $(R /(t))[p^\infty]=(R /(t))[p^a]$ 即证.

---

**李文威定义 12.4.1** 设 $X$ 为集合, 其上的自由模定义为直和 $R^{\oplus X}$ .

**DN定理1,引理12.6.1**设 $R$ 为PID,  $M$ 为一自由 $R-$模, 秩为 $n$ . 于是 $M$ 的任一子模也是自由 $R-$模, 秩 $\le n$.

**证明:** 设 $N$ 为 $M$ 的一个子模. 如果 $M$ 是一零模, 则结论显然.

下面我们对 $M$ 的秩 $n$ 作归纳法. 假设结论对秩小于 $n$ 的自由模已经成立.

任取 $E$ 的基 $f_1, \ldots, f_n$ , 定义 $E':=\bigoplus\limits_{i=2}^n R f_i$ . 定义同态 $p_1: E \to R$ 为第一个坐标投影 $\sum\limits_{i=1}^n r_i f_i \mapsto r_1$ , 则理想 $p_1(N)$ 可以表作 $(d)$ 的形式, $d \in R$ . 若 $d=0$ 则 $N \subset E'$ , 问题化到秩 $n-1$ 的已知情形.

以下假设 $d \neq 0$ .取 $x \in N$ 使得 $p_1(x)=d$ .对于任意 $y \in N$ , 将其展开为 $y=\sum\limits_{i=1}^n r_i f_i$ , 则 $d | r_1$ 而

$$
y=\frac{r_1}{d} \cdot x+(y-\frac{r_1}{d} \cdot x)
$$

记 $N':=E' \cap N$ , 上式表明 $N=R x+N'$.

另一方面, 由于 $f_1$ 在 $x$ 中的系数 $d$ 非零, 而 $R$ 是整环, 故 $R x \cap N' \subset R x \cap E'=\{0\}$ . 综上可得 $N=R x \oplus N'$ .

对 $N' \subset E'$ 应用秩 $n-1$ 的已知情形可得 $N'$ 自由, 秩 $\leq n-1$.



**定理 2: PID上无扭的有限生成模一定是自由模. **

**证明:** 见下面定理 12.6.3 的存在性部分.



**Def.** $\operatorname{Tor}(M)=\{m \in M | \exists r \in R, r \neq 0, r \cdot m=0\}$, i.e. all torsion element

设 $M$ 是PID. $R$ 上一有限生成摸. 易验证 $M / \operatorname{Tor}(M)$ 是无扭模. 于是 $M / \operatorname{Tor}(M)$ 是自由模.

---

**DF 12.1, P458 Def** The $R-$module $M$ is said to be a **Noetherian** $R-$module or to satisfy the **Ascending Chain Condition** on submodules (**ACC**) whenever $M_1 \subseteq M_2 \subseteq M_3 \subseteq \cdots$ is an increasing chain of submodules of $M$, then $m \in \N$ s.t. $M_m=M_{m+1}=M_{m+2}=\cdots$



**DF 12.1, P458 Thm 1** Let $R$ be a ring and let $M$ be a left $R-$module, the following are equivalent (TFAE) :
(1) $M$ is a Noetherian $R-$module.
(2) Every nonempty set of submodules of $M$ contains a maximal element under inclusion.
(3) Every submodule of $M$ is finitely generated (FG) .

**maximal element 定义(李文威定义 2.4.4)** 设 $(A, \preceq)$ 为偏序集. $a_{\max } \in A$ 称为 $A$ 的极大元, 如果不存在 $a \in A$ 使得 $a \succ a_{\max }$.

**Cor2.** If $R$ is PID. then every nonempty set of ideals of $R$ has a maximal element.



**李文威引理 12.6.4** 设 $E$ 为PID. $R$ 上的自由模, 秩为 $n \in \Z_{\geq 0}$ , 而 $N$ 为其子模, 则存在 $E$ 的基 $f_1, \ldots, f_n$ 以及 $R$ 的一列元素
$$
d_1|\cdots| d_n,
$$

使得若取 $0 \leq r \leq n$ 使 $d_j=0 \iff j>r$ , 则元素 $d_1 f_1, \ldots, d_r f_r$ 构成 $N$ 的基.

**证明.**

- **析出** 存在 $f_1 \in E \backslash\{0\}$ 和 $d_1 \in R$ 连同直和分解 $E=R f_1 \oplus E', \quad N=R d_1 f_1 \oplus N',$ 其中 $N':=E' \cap N$ ;
- **递归** 若 $E'=\{0\}$ 则操作停止, 否则在前一步能够以 $N' \subset E'$ 代 $N \subset E$ , 继续析出 $f_2 \in E'$ 和 $d_2 \in R$ 使得 $d_1 \| d_2$ , 依此类推;
- **终止** 上述操作在有限步之内停止, 给出所求的资料.

**析出 :** 根据 Cor2. 确保理想族 $\{\lambda(N): \lambda \in \operatorname{Hom}(E, R)\}$ 必有相对于 $\subset$ 的极大元 $\lambda_1(N) = (d_1)$,

取 $x_1\in N$ 使得 $\lambda_1(x_1)=d_1$. 当 $d_1=0$ 时, 平凡. 下设 $d_1\ne0$,

- 下说明 $\forall \lambda \in \operatorname{Hom}(E, R), \quad d_1 | \lambda(x_1).$

  用 Bezout 定理考虑  $u\lambda(x_1) +v\lambda_1(x_1) = \gcd(\lambda(x_1), \lambda_1(x_1))$, 有 $(u \lambda+v \lambda_1)(N) \supset (d_1)$, 

  由 $u\lambda +v\lambda_1 ∈\operatorname{Hom}(E,R)$ 和 $\lambda$ 的极大性知 $\gcd(\lambda(x_1), \lambda_1(x_1)) \in (u \lambda+v \lambda_1)(N) = (d_1)$ 即证.

现在让 $\lambda$ 遍历 $E$ 相对于某个基的坐标投影, 进而 $x_1$ 的每个坐标都被 $d_1$ 整除,

故存在 $f_1 \in E$ 使得 $x_1=d_1 f_1$, 从 $d_1=\lambda_1(x_1)=d_1 \lambda_1(f_1)$ 推得 $\lambda_1(f_1)=1$. 易验证

$$
\begin{aligned}
E &=R f_1 \oplus \ker\lambda_1, E_1:= \ker\lambda_1\\
N &=R x_1 \oplus (N \cap \ker\lambda_1)
\end{aligned}
$$

**递归 :** **引理12.6.1**说明 $E_1$ 是自由模. 在 $E_1 \neq\{0\}$ 的前提下, 同样操作可对 $N_1 \subset E_1$ 迭代, 给出 $\lambda_2(N_1) = (d_2)$, 其中 $\lambda_2 \in \operatorname{Hom}(E_1, R)$. 

- 下说明 $d_1 | d_2$ : 

  取 $x_2 \in N_1$ 使得 $\lambda_2(x_2)=d_2$ . 可将 $\lambda_2$ 按直和 $E=R f_1 \oplus E_1$ 延拓为 $\widetilde{\lambda}_2 \in \operatorname{Hom}(E, R)$, 使得 $\widetilde{\lambda}_2(f_1)=0$.

  取 $u, v \in R$ 使得 $u d_1+v d_2= \gcd(d_1, d_2)$, 有 $(u \lambda_1+v \tilde{\lambda}_2)(x_1+x_2)=u d_1+v d_2$

  因此 $(u \lambda_1+v \tilde{\lambda}_2)(N) = (\gcd(d_1, d_2)) \supset(d_1)$ , 而 $(d_1)$ 的选法导致包含关系全是等号, 即证 $d_1 | d_2$ 成立.

**终止 :** 这是因为 $f_1 \neq 0$ 蕴涵 $f_1$ 无挠, 有 $R-$模同构 $R \xrightarrow{\sim} R f_1$, 从而 $\operatorname{rk}(E_1) = \operatorname{rk}(E)-1$, 故有限步之内止于零模.


---

**定理 12.6.3(PID上的FG模分类)** 设 $R$ 为PID, $M$ 为有限生成 $R-$模, 则有同构
$$
M \simeq R / I_1 \oplus \cdots \oplus R / I_k \oplus E
$$

其中

- $k \in \Z_{\geq 0}$ 而 $I_1 \supset \cdots \supset I_k$ 是 $R$ 中的一列非零真理想,

- $E$ 是有限生成自由 $R-$模.

- 它们具有唯一性: 若有如上的分解
  $$
  M \simeq R / I_1 \oplus \cdots R / I_k \oplus E, \quad M' \simeq R / I_1' \oplus \cdots R / I_{k'}' \oplus E'
  $$
  则 $M \simeq M'$ 蕴涵 $\mathrm{rk}(E)=\mathrm{rk}(E'), k=k'$ , 以及 $I_i=I_i'$ 对所有 $i$ 成立.

上述分解中的真理想链 $I_1 \supset \cdots \supset I_k \supset \underbrace{\{0\}=\cdots=\{0\}}_{\operatorname{rk}(E) \text { 份 }}$ 称为 $M$ 的不变因子 , 它们由 $M$ 的同构类唯一确定.

**证明. (存在性部分)** 不妨设 $M \neq\{0\}$. 选定 $M$ 的生成元 $x_1, \ldots, x_n$ 和相应的满同态
$$
E:=R^{\oplus n} \to M, \quad(r_i)_{i=1}^n \mapsto \sum_{i=1}^n r_i x_i .
$$


记其核为 $N$, 因此 $E / N \xrightarrow{\sim} M$. 对 $N \subset E$ 应用**引理 12.6.4**得到 $E$ 的基 $f_1, \ldots, f_n$ 和 $d_1|\cdots| d_n$ 和 $0 \leq r \leq n$, 满足 $d_j=0 \iff j>r$, 而且 $N=\bigoplus\limits_{i=1}^r R d_i f_i$. 由之推得

$$
M \simeq E / N=\bigoplus_{i=1}^n R f_i / \bigoplus_{i=1}^r R d_i f_i \xrightarrow\sim \bigoplus_{i=1}^r(R /(d_i)) \oplus \underbrace{R^{\oplus n-r}}_{\text {自由 }} .
$$

舍去 $d_i \in R^\times$的项, 将剩下的主理想 $(d_i)$ 标为 $I_1 \supset \cdots \supset I_k$ 即证.



**(唯一性)** **第一步 :** 给定的直和分解限制为 $\operatorname{Tor}(M) \simeq R / I_1 \oplus \cdots \oplus R / I_k \simeq R / (t_1) \oplus \cdots \oplus R / (t_k)$, 从而
$$
M_{\mathrm{tf}}=(\operatorname{Tor}(M) \oplus E) / \operatorname{Tor}(M) \simeq E
$$


设有同构 $\varphi: M \xrightarrow{\sim} M'$ , 而且 $M'$ 带有类似的直和分解, 则 $\varphi$ 限制为 $\operatorname{Tor}(M) \xrightarrow{\sim} \operatorname{Tor}(M)'$ , 其诱导同构 $M_{\mathrm{tf}} \xrightarrow{\sim} M_{\mathrm{tf}}'$ 给出 $E \simeq E'$ .

化简到 $M = \operatorname{Tor}(M)$ 的情形.



**第二步 :**
$$
M=\bigoplus_{p: \text { 素元 } / \sim} M[p^\infty]
$$


对于选定的素元 $p$ (精确到等价)和 $1 \leq i \leq k$ , 取 $b_i=b_i(p) \in$ $\Z_{\geq 0}$ 使得 $p^{b_i} \| t_i$ .于是 $b_1 \leq b_2 \leq \cdots$


对每个 $i$ 应用**引理 12.5.3(2)** 遂有

$$
M[p^\infty] \simeq \bigoplus_{i=1}^k R /(t_i)[p^\infty] \simeq \bigoplus_{i=1}^k R /(p^{b_i})
$$
设有同构 $M \simeq M'$ , 则它对每个 $p$ 皆限制为 $M[p^\infty] \simeq M'[p^\infty]$ , 而右式同样有分解

$$
M'[p^\infty] \simeq \bigoplus_{i=1}^{k'} R /(p^{b_i'})
$$

留意到 $b_i$ 和 $b_i'$ 可能为零. 为了方便比较, 不妨在 $M$ 或 $M'$ 的直和分解中补零, 使得 $k=k'$.

为了证明 $I_i=I_i'$ 恒成立, 从而证明唯一性, 目标化为对每个 $p$ 证明 $b_i=b_i', \quad 1 \leq i \leq k.$

我们的目的是对于选定的素元 $p$ , 将 $b_1, \ldots, b_k$ 诠释为 $M$ 的同构不变量, 尽管它们的初始定义依赖于直和分解 $M[p^\infty] \simeq \bigoplus\limits_{i=1}^k R /(p^{b_i})$ .

化到 $M=M[p^\infty]$ 情形, 其中 $p$ 是 $R$ 的素元.



**第三步 :** 不失一般性, 今后可设 $M=M[p^\infty]$. 对引理 12.5.3(1) 代入 $a=1$ 可得
$$
M[p] \simeq \bigoplus_i(R /(p^{b_i}))[p] \simeq \bigoplus_{i: b_i>0} R /(p)
$$


由于 $p$ 在这些 $R$-模上的纯量乘法皆为零, 这实则是 $R /(p)-$模的同构. $p$ 是素元确保 $R /(p)$ 为域, 同构遂给出 $\nu_0:=$ $|\{i: b_i>0\}|=\dim_{R /(p)} M[p]$ , 这是 $M$ 的同构不变量.

推而广之, 对于所有 $j \geq 0$ , 易见

$$
\begin{aligned}
p^j M & \simeq \bigoplus_{i: b_i \geq j} p^j R /(p^{b_i}) \simeq \bigoplus_{i: b_i \geq j} R /(p^{b_i-j}), \\
\nu_j & :=|\{i: b_i>j\}|=\dim_{R /(p)}(p^j M)[p] .
\end{aligned}
$$

数列 $\nu_0 \geq \nu_1 \geq \cdots$ 是 $M$ 的同构不变量, 又唯一确定 $b_1 \leq b_2 \leq \cdots$ 何以故? 设想在虚空之中从下而上逐行地放置 $b_1, b_2, \ldots$ 个方块, 如下所示 : 

<img src="C:\Users\yuany\AppData\Roaming\Typora\typora-user-images\image-20250517205541241.png" alt="image-20250517205541241" style="zoom:25%;" />

从左向右逐列扫描也能够重建图表, 读出的方块个数正是 $\nu_0, \nu_1, \cdots$ 明所欲证.
