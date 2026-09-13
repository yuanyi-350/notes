

### Monte Carlo 方法

假设要计算一个一般的积分(或者求期望)

$$
I = \int_\Omega f(x) p(x) ~dx = \mathbb{E}[f(X)]
$$

- $X$ 是服从概率密度分布 $p(x)$ 的随机变量.

- 设随机变量 $f(X)$ 的方差存在且为有限值, 记作 $\sigma^2$:

  $$
  \sigma^2 = \text{Var}(f(X)) = \mathbb{E}[f(X)^2] - (\mathbb{E}[f(X)])^2
  $$

**Monte Carlo 估计量** $\hat{I}_N$

定义为从分布 $p(x)$ 中独立同分布(i.i.d.)地抽取 $N$ 个样本 $X_1, X_2, \cdots, X_N$, 然后计算算术平均值:
$$
\hat{I}_N = \frac1N \sum_{i=1}^N f(X_i)
$$

对估计量 $\hat{I}_N$ 求期望:
$$
\mathbb{E}[\hat{I}_N] = \mathbb{E} \left[ \frac1N \sum_{i=1}^N f(X_i) \right]
= \frac1N \sum_{i=1}^N \mathbb{E}[f(X_i)] = \frac1N \sum_{i=1}^N I = I
$$
估计方差
$$
\begin{aligned}
\text{Var}(\hat{I}_N) &= \text{Var} \left( \frac1N \sum_{i=1}^N f(X_i) \right)
= \frac1{N^2} \text{Var} \left( \sum_{i=1}^N f(X_i) \right) \\
&= \frac1{N^2} \sum_{i=1}^N \text{Var}(f(X_i))
= \frac1{N^2} \left( N \cdot \sigma^2 \right) = \frac{\sigma^2}N
\end{aligned}
$$

根据 中心极限定理 (Central Limit Theorem), $\dfrac{\hat{I}_N - I}{\sigma / \sqrt{N}} \xrightarrow{d} \mathcal{N}(0, 1)$



**重要性采样 (Importance Sampling)**

引入一个提议分布 $q(x)$ ,
$$
I = \int_\Omega f(x) p(x) ~dx = \int_\Omega \left( f(x) \frac{p(x)}{q(x)} \right) q(x) ~dx = \mathbb{E}_{X \sim q} \left[ f(X) \frac{p(X)}{q(X)} \right]
$$

记重要性权重(Importance Weight)为 $W(x) = \frac{p(x)}{q(x)}$.

$\hat{I}_{N, q}$ 定义为从分布 $q(x)$ 中独立同分布地抽取 $N$ 个样本 $X_1, X_2, \cdots, X_N$, 计算加权平均值:
$$
\hat{I}_{N, q} = \frac1N \sum_{i=1}^N f(X_i) W(X_i)
$$

对估计量 $\hat{I}_{N, q}$ 求期望 $\mathbb{E}_q[\hat{I}_{N, q}] = \frac1N \sum\limits_{i=1}^N \mathbb{E}_q \left[ f(X_i) \frac{p(X_i)}{q(X_i)} \right] = I$

单次采样的随机变量 $Z = f(X)W(X)$ 在分布 $q(x)$ 下的方差为

$$
\sigma_q^2=\operatorname{Var}_q(Z)=\mathbb{E}_q\left[Z^2\right]-\left(\mathbb{E}_q[Z]\right)^2 = \int_\Omega \frac{f(x)^2 p(x)^2}{q(x)^2} q(x) ~dx - I^2 = \int_\Omega \frac{f(x)^2 p(x)^2}{q(x)} ~dx - I^2
$$

同理, $\displaystyle\text{Var}_q(\hat{I}_{N, q}) = \frac{\sigma_q^2}N = \frac1N \left( \int_\Omega \frac{f(x)^2 p(x)^2}{q(x)} ~dx - I^2 \right)$

代入Cauchy不等式得到
$$
\left( \int_\Omega \frac{|f(x)| p(x)}{\sqrt{q(x)}} \cdot \sqrt{q(x)} ~dx \right)^2 \le \left( \int_\Omega \frac{f(x)^2 p(x)^2}{q(x)} ~dx \right) \left( \int_\Omega q(x) ~dx \right)
= \int_\Omega \frac{f(x)^2 p(x)^2}{q(x)} ~dx
$$

这意味 $\sigma_q^2 \ge \left( \int_\Omega |f(x)| p(x) ~dx \right)^2 - I^2$ , 根据Cauchy不等式, 等号成立的充要条件
$$
\frac{|f(x)| p(x)}{\sqrt{q(x)}} \propto \sqrt{q(x)} \implies q^*(x) \propto |f(x)| p(x)
$$
归一化后, 我们得到最优提议分布 $q^*(x) = \dfrac{|f(x)| p(x)}{\int_\Omega |f(x)| p(x) ~dx}$

如果 $f(x) \ge 0$ 恒成立, 分母恰好是真实值 $I$. 因此最优分布在工程上是不可能实现的, 只能采用近似.

根据中心极限定理 $\dfrac{\hat{I}_{N, q} - I}{\sigma_q / \sqrt{N}} \xrightarrow{d} \mathcal{N}(0, 1)$



**控制变量法(control varieties)**

$$
I(f)=\int_0^1 f(x)~dx=\int_0^1 f(x)-g(x)~dx+\int_0^1 g(x)~dx
$$


假设 $\int_0^1 g(x)~dx$ 可解析地计算, 或高精度地逼近. 令 $h=f-g . \quad I(f)=I(h)+I(g)$

如 $\operatorname{Var}(h) \le \operatorname{Var}(f)$ , 则方差减小. 考虑 $\int_0^1 f(x)-c g(x)~dx+c \int_0^1 g(x)~dx$

令 $\tilde{I}_N=\frac1N \sum\limits_{k=1}^N(f-c g)\left(X_k\right) . \quad X_k \stackrel{\text { i.i.d.}}{\sim} U[0,1]$ .
$$
\begin{aligned}
I_N & =\frac1N \sum_{i=1}^N f\left(Y_k\right) \quad Y_k \stackrel{\text { i.i.d.}}{\sim} U[0,1] . \\
\mathbb{E} \widetilde{e}_N^2 & =\frac1N \int_0^1\left((f(x)-c g(x))-(I(f)-c I(g))^2~dx\right. \\
& =\operatorname{Var}(f)+c^2 \operatorname{Var}(g)-2 c \operatorname{Cov}(f, g) .
\end{aligned}
$$

最优 $C^*=\dfrac{\operatorname{Cov}(f, g)}{\operatorname{Var}(g)}$ 时取到, 此时
$$
V^*=\operatorname{Var}(f)\left(1-\frac{\operatorname{Cov}^2(f, g)}{\operatorname{Var}(f) \operatorname{Var}(g)}\right)=\operatorname{Var}(f) \cdot\left(1-\rho_{f, g}^2\right)
$$
其中 $\rho_{f, g}=\dfrac{\operatorname{Cov}(f, g)}{\sigma_f \cdot \sigma_g}$ 是相关性系数.

这里的 $C^*$ 同样需要求 $\mathbb{E}f$ 才能算出, 工程上只能近似





### Markov chain Monte Carlo

传统的 Monte Carlo 方法难以解决输入较简单的未归一化密度 $\tilde{p}(x)$ , 因为归一化密度函数 $p(x) = \frac{\tilde{p}(x)}Z$ 中的配分函数 $Z = \int \tilde{p}(x)~dx$ 在高维空间中是难以解析计算的多重积分.

**定义.** 设状态空间为 $S$ 的离散时间随机过程 $\{X_t\}_{t=0}^\infty$, 若对任意 $t \ge 0$ 和状态 $x_0, x_1, \dots, x_{t+1} \in S$, 满足无后效性(即马尔可夫性质):
$$
P(X_{t+1} = x_{t+1} | X_0 = x_0, \dots, X_t = x_t) = P(X_{t+1} = x_{t+1} | X_t = x_t)
$$
则称该过程为一阶马尔可夫链.

**定义. (转移核, Transition Kernel)** 对于连续状态空间, 记转移核为条件概率密度 $T(x'|x) = p(X_{t+1}=x' | X_t=x)$.

**定义. (平稳分布, Stationary Distribution)** 若存在一个概率分布 $\pi(x)$, 使得马尔可夫链经历一次状态转移后, 其边缘分布保持不变, 即
$$
\pi(x') = \int \pi(x) T(x'|x)~dx
$$
则称 $\pi(x)$ 为该马尔可夫链的平稳分布.

**定义. (细致平稳条件, Detailed Balance)** 若转移核 $T$ 和分布 $\pi$ 满足 $\pi(x) T(x'|x) = \pi(x') T(x|x')$

**定理.** 细致平稳条件 $\implies$ 平稳分布

**证明.** 直接关于 $x$ 积分, 立刻可得
$$
\int \pi(x) T(x'|x)~dx = \pi(x') \int T(x|x')~dx = \pi(x')
$$

**算法(Metropolis-Hastings).**

1. 输入: $\tilde{p}(x)$ 以及需要求期望的函数 $f(x)$.

2. 设定迭代算法(具体动机见下面Markov 链的状态转移), 随机选择一个 $x^{(0)}$ 然后按照如下随机过程迭代

   - 提议 (Propose): 从条件分布 $q(x^* | x^{(t)})$ 中抽取一个候选状态 $x^*$.

   - 计算接受率 (Acceptance Probability): $\alpha(x^{(t)}, x^*) = \min \left( 1, \dfrac{\tilde{p}(x^*) q(x^{(t)} | x^*)}{\tilde{p}(x^{(t)}) q(x^* | x^{(t)})} \right)$

   - 接受/拒绝判定: 生成服从标准均匀分布的随机数 $u \sim U(0,1)$.

     - 若 $u \le \alpha(x^{(t)}, x^*)$, 则接受转移, 设 $x^{(t+1)} = x^*$.
     - 若 $u > \alpha(x^{(t)}, x^*)$, 则拒绝转移, 保留原状态 $x^{(t+1)} = x^{(t)}$.

3. 预热 (Burn-in):  运行 Metropolis-Hastings 等 MCMC 算法迭代 $M$ 步. 由于前 $M$ 步的链尚未收敛到平稳分布 $p(x)$. 这部分样本直接丢弃.

4. 采样 (Sampling):  链收敛后, 继续运行 $N$ 步, 收集样本序列 $\{x^{(M+1)}, x^{(M+2)}, \dots, x^{(M+N)}\}$.

5. 积分计算 (Integration):  运行一个极为简单的聚合计算:
   $$
   \hat{I} = \frac1N \sum_{i=1}^N f(x^{(M+i)})
   $$

6. 输出:  返回 $\hat{I}$ 作为原复杂积分 $\int f(x) p(x)~dx$ 的数值解.

**Markov 链的状态转移.** 分为两步, 首先从提议分布 $q(y|x)$ 中抽取候选状态, 然后以概率 $\alpha(x, y)$ 接受该状态.

因此对于 $x \neq y$, $T(x \to y) = q(y|x) \alpha(x, y)$

希望马尔可夫链以目标分布 $p(x)$ 为平稳分布 , 只需 $T(x \to y)$ 满足细致平稳条件
$$
p(x) T(x \to y) = p(y) T(y \to x), \quad \forall x, y
$$
因此 $p(x) q(y|x) \alpha(x, y) = p(y) q(x|y) \alpha(y, x)$ , 即希望
$$
\frac{\alpha(x, y)}{\alpha(y, x)} = \frac{\frac{\tilde{p}(y)}Z q(x|y)}{\frac{\tilde{p}(x)}Z q(y|x)} = \frac{\tilde{p}(y) q(x|y)}{\tilde{p}(x) q(y|x)} \triangleq r(x, y)
$$
*(注: 配分函数 $Z$ 在分子分母中被严格约去, 这是 MCMC 能够处理未归一化分布的代数根源. )*

上述等式给出了 $\alpha(x, y)$ 和 $\alpha(y, x)$ 之间必须满足的比例关系. 此比例关系的解有无穷多个(例如, 可以同时将两者同比例缩放).

然而在 MCMC 采样中为了尽快混合, 需要尽可能地提高接受率, 接受率的理论上限为 $1$.

根据 $r(x, y)$ 的值, 最大化 $\alpha(x, y)$ 和 $\alpha(y, x)$ 为
$$
\begin{cases}
\alpha(x, y) = 1, \quad \alpha(y, x) = \frac1{r(x, y)} \le 1 , & \text{ when } r(x, y) \ge 1 \\
\alpha(y, x) = 1, \quad \alpha(x, y) = r(x, y) < 1 , & \text{ when } r(x, y) < 1
\end{cases}
$$
简而言之, $\alpha(x, y) = \min(1, r(x, y)) = \min \left( 1, \dfrac{\tilde{p}(y) q(x|y)}{\tilde{p}(x) q(y|x)} \right)$



### Metropolis-within-Gibbs

设定状态空间为一个 $n$ 维随机变量 $x = (x_1, x_2, \dots, x_n)$, 目标联合分布为 $p(x)$.

记 $x_{-i} = (x_1, \dots, x_{i-1}, x_{i+1}, \dots, x_n)$ 为剔除第 $i$ 个分量后的剩余变量集合.

在 Gibbs 取样的每一步状态转移中, 算法只选择一个维度 $i$ 进行更新, 而保持 $x_{-i}$ 不变.

更新策略: 利用 $p(x_i | x_{-i})$ 作为 M-H 算法的提议分布 $q(x^* | x)$. 即提议状态 $x^*$ 满足 $x^*_{-i} = x_{-i}$ , 其概率密度为 $q(x^* | x) = p(x^*_i | x_{-i})$

同理, 逆向的转移概率为 $q(x | x^*) = p(x_i | x^*_{-i}) = p(x_i | x_{-i})$

根据条件概率的定义, 代入关于 M-H 算法接受率的比例关系 $r(x, x^*)$
$$
r(x, x^*) = \frac{p(x^*) q(x | x^*)}{p(x) q(x^* | x)} = \frac{\left[ p(x^*_i | x_{-i}) p(x_{-i}) \right] p(x_i | x_{-i})}{\left[ p(x_i | x_{-i}) p(x_{-i}) \right] p(x^*_i | x_{-i})} = 1
$$
接受概率 $\alpha(x, x^*) = \min(1, r(x, x^*)) = 1$ , 即使用满条件分布作为提议分布时, 每次状态转移都会被 $100\%$ 接受.



**算法.**

1. 输入:  联合分布 $p(x)$ 的所有单变量满条件分布 $p(x_i | x_{-i})$, 预热步数 $M$, 采样步数 $N$.

2. 初始化:  随机设定一个初始状态 $x^{(0)} = (x_1^{(0)}, x_2^{(0)}, \dots, x_n^{(0)})$.

3. 迭代:  对于 $t = 0, 1, \dots, M+N-1$, 执行以下轮询式的坐标更新:

    - 从 $p(x_1 | x_2^{(t)}, x_3^{(t)}, \dots, x_n^{(t)})$ 中抽取 $x_1^{(t+1)}$
    - 从 $p(x_2 | x_1^{(t+1)}, x_3^{(t)}, \dots, x_n^{(t)})$ 中抽取 $x_2^{(t+1)}$
    - $\dots$
    - 从 $p(x_i | x_1^{(t+1)}, \dots, x_{i-1}^{(t+1)}, x_{i+1}^{(t)}, \dots, x_n^{(t)})$ 中抽取 $x_i^{(t+1)}$
    - $\dots$
    - 从 $p(x_n | x_1^{(t+1)}, x_2^{(t+1)}, \dots, x_{n-1}^{(t+1)})$ 中抽取 $x_n^{(t+1)}$

	完成这 $n$ 步条件抽样后, 记完成了一次完整的转移: $x^{(t)} \to x^{(t+1)}$.

4. 预热丢弃:  丢弃前 $M$ 个样本, 保留链收敛后的 $N$ 个样本.

5. 积分计算:  通过 $\hat{I} = \frac1N \sum\limits_{k=1}^N f(x^{(M+k)})$ 计算期望.



### Ising Model

设一维 Ising 模型由 $N$ 个格点组成, 其组态空间为 $\mathcal{S}=\{-1,+1\}^N$. 设系统的一个微观组态为 $\sigma=(\sigma_1,\sigma_2,\dots,\sigma_N)$, 其中自旋变量 $\sigma_i\in\{-1,+1\}$.

在给定相邻自旋相互作用常数 $J$ 与外加磁场 $h$ 的前提下, 采用周期性边界条件(即 $\sigma_{N+1}=\sigma_1$), 系统的哈密顿量(系统总能量)定义为

$$
H(\sigma)=-J\sum_{i=1}^N\sigma_i\sigma_{i+1}-h\sum_{i=1}^N\sigma_i
$$
该模型在热力学平衡态下服从 Gibbs 分布, 即目标概率测度为 $\pi(\sigma)=\frac1Z\exp(-\beta H(\sigma))$


其中 $\beta=\frac1{k_BT}$ 为逆温度, 配分函数 $Z=\sum_{\sigma\in\mathcal{S}}\exp(-\beta H(\sigma))$ 为归一化常数.



**算法.** 从目标分布 $\pi(\sigma)$ 中进行采样, 最常使用单自旋翻转的 Metropolis-Hastings 算法

1. 在组态空间 $\mathcal{S}$ 中任意选定一个初始自旋组态 $\sigma^{(0)}$, 设定当前迭代步数 $t=0$.

2. 从离散均匀分布 $\mathcal{U}(1,N)$ 中随机抽取一个整数 $i$, 构造一个新的候选组态 $\sigma'$, 仅将第 $i$ 个位置的自旋翻转, 其余位置保持不变:
  $$
  \sigma'_k=\begin{cases}-\sigma^{(t)}_k,&k=i\\\sigma^{(t)}_k,&k\neq i\end{cases}
  $$


3. 计算系统从状态 $\sigma^{(t)}$ 转移至 $\sigma'$ 所引起的能量变化 $\Delta H=H(\sigma')-H(\sigma^{(t)})$. 由于仅有局部自旋发生改变, 能量差可简化为局部计算
  $$
  \Delta H=2J\sigma^{(t)}_i(\sigma^{(t)}_{i-1}+\sigma^{(t)}_{i+1})+2h\sigma^{(t)}_i
  $$


4. 计算 Metropolis 接受概率 $\alpha(\sigma^{(t)},\sigma')=\min(1,\exp(-\beta\Delta H))$ 并确定是否状态更新.

5. 更新 $t=t+1$, 返回步骤 2, 直至马尔可夫链达到平稳状态并完成所需的采样次数.

