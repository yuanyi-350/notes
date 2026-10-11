$$
\vec{\mu}=\left(\begin{array}{c}
\mu_1 \\ \vdots \\ \mu_n
\end{array}\right), \quad \Sigma=\left(\begin{array}{ccc}
\sigma_{11} & \cdots & \sigma_{1 n} \\
\vdots & \ddots & \vdots \\
\sigma_{n 1} & \cdots & \sigma_{n n}
\end{array}\right), \quad \vec{X}=\left(\begin{array}{c}
X_1 \\ \vdots \\ X_n
\end{array}\right) .
$$

**引理.** $$\operatorname{Cov}(CX) = C\operatorname{Cov}(X)C^T$$

**引理.** 协方差矩阵必然是半正定的



设 $\Sigma$ 为正定矩阵.若 $\vec{X}$ 的联合密度函数如下:
$$
p_{\vec{X}}(\vec{x})=\frac1{\sqrt{(2 \pi)^n \det \Sigma}} \exp \left\{-\frac12(\vec{x}-\vec{\mu})^T \Sigma^{-1}(\vec{x}-\vec{\mu})\right\}
$$
则称为高维正态分布



**引理.** 设 $\vec{Z} \sim N(\vec{0}, I), A$ 为 $n \times n$ 矩阵, $\vec{\mu}$ 为 $n$ 维实向量, 则 $A \vec{Z}+\vec{\mu} \sim N(\vec{\mu}, \Sigma)$ , 其中 $\Sigma = AA^T$ 为半正定矩阵.

依定义即证.



**引理.** $N(\vec{0}, I_n)$ 的特征函数为 $e^{-\|\vec{t}\|^2 / 2}$ .

**证明.** 设 $\vec{Z} \sim N(\vec{0}, I_n)$.
$$
f_{\vec{Z}}(\vec{t}) = \mathbb{E} \prod_{k=1}^n e^{i t_k Z_k} = \prod_{k=1}^n f_{Z_k}\left(t_k\right) = \prod_{k=1}^n e^{-t_k^2 / 2} = e^{-\|\vec{t}\|^2 / 2}
$$



**引理.** 已知 $X \sim N(0, \Sigma)$, 且协方差矩阵 $\Sigma$ 半正定可分解为 $\Sigma = AA^T$. 则存在 $Z \sim N(0, I)$, 使得 $X = AZ$.

**证明.** $\Sigma$ 正定则根据上面的引理, 取 $Z = A^{-1}X$ 则显然成立, 因为正定性 $A$ 必然可逆.

对于 $\det \Sigma = 0$ 的情况, 需要用到 Moore-Penrose 广义逆矩阵, 为了简洁下面用 SVD 的方式解释

设任意矩阵 $A$ 的奇异值分解为 $A = U \Sigma V^T$, 其中 $\Sigma$ 是对角线元素为奇异值 $\sigma_i$ 的对角阵.

Moore-Penrose 广义逆定义 $(\Sigma^+)_{ii} = \begin{cases} \frac1{\sigma_i}, & \text{if } \sigma_i > 0 \\ 0, & \text{if } \sigma_i = 0 \end{cases}$ , 进而构造 $A^+ = V \Sigma^+ U^T$.

引入一个与 $X$​ 相互独立的标准正态随机向量 $W \sim N(0, I)$​. <font : color=Red>**(为什么?)**</font>

令 $Z = A^+X + (I - A^+A)W$



**引理.** 设 $\Sigma$ 为半正定矩阵, 则 $N(\vec{\mu}, \Sigma)$ 的特征函数为 $e^{i \vec{t} \cdot \vec{\mu}-\frac12 \vec{t}^T \Sigma \vec{t}}$ .

**证明.** 假设矩阵 $A$ 满足 $\Sigma=A A^T$  , 这由 $\Sigma$ 半正定性保证. 则存在 $\vec{Z} \sim N(\vec{0}, I_n)$ , 使得 $\vec{X}:=A \vec{Z}+\vec{\mu} \sim N(\vec{\mu}, \Sigma)$ .
$$
\begin{aligned}
f_{\vec{X}}(\vec{t}) &= \mathbb{E} e^{i \vec{t} \cdot(A \vec{Z}+\vec{\mu})}
=e^{i \vec{t} \cdot \vec{\mu}} \cdot \mathbb{E} e^{i(A^T \vec{t}) \cdot \vec{Z}}
=e^{i \vec{t} \cdot \vec{\mu}} f_{\vec{Z}} (A^T \vec{t}) \\
&= e^{i \vec{t} \cdot \vec{\mu}} e^{- \|A^T \vec{t}\|^2 / 2}
= e^{i \vec{t} \cdot \vec{\mu} -\frac12 \vec{t}^T \Sigma \vec{t}}
\end{aligned}
$$




---

**高维正态分布的条件分布.** 设二维随机变量 $(X, Y)$ 服从二维正态分布, 即 $(X, Y) \sim \mathcal{N}(\mu, \Sigma)$, 其中:

* 期望向量 $\mu = (\mu_X, \mu_Y)^T = (\mathbb{E}(X), \mathbb{E}(Y))^T$
* 协方差矩阵 $\Sigma = \begin{pmatrix} \sigma_X^2 & \sigma_{XY} \\ \sigma_{XY} & \sigma_Y^2 \end{pmatrix} = \begin{pmatrix} \operatorname{Var}(X) & \operatorname{Cov}(X, Y) \\ \operatorname{Cov}(X, Y) & \operatorname{Var}(Y) \end{pmatrix}$

如果 $\sigma_X^2 \ne 0$ , 则
$$
\mathbb{E}(Y | X = x) = \mu_Y + \frac{\sigma_{XY}}{\sigma_X^2} (x - \mu_X)
$$
**证明.** **Step1.** 令 $Z = Y - aX$, 其中 $a$ 是待定常数. 希望 $Z,X$ 不相关.
$$
\operatorname{Cov}(Z, X) = \operatorname{Cov}(Y - aX, X)
= \operatorname{Cov}(Y, X) - a \operatorname{Cov}(X, X) = \sigma_{XY} - a \sigma_X^2
$$
令 $\operatorname{Cov}(Z, X) = 0$, 解得 $a = \frac{\sigma_{XY}}{\sigma_X^2}$ , 此时 $Z, X$ 不相关.

**Step2.** $\operatorname{Cov}(Z, X) = 0$ 推出 $Z, X$ 独立 (一般情况下不成立, 但是二维正态分布条件下成立)

首先, $(Z,X)$ 是二维正态分布的线性变换, 因此假设 $(Z, X)$ 服从二维正态分布 $\mathcal{N}(\mu, \Sigma)$.

其相关系数为 $\rho$. 协方差 $\operatorname{Cov}(Z, X) = \rho \sigma_Z \sigma_X = 0$ . 因此 $\rho = 0$, 从而联合概率密度函数为
$$
\begin{aligned}
f(z, x) &= \tfrac1{2\pi \sigma_Z \sigma_X \sqrt{1-\rho^2}} \exp\left( -\tfrac1{2(1-\rho^2)} \left[ \tfrac{(z-\mu_Z)^2}{\sigma_Z^2} - 2\rho\tfrac{(z-\mu_Z)(x-\mu_X)}{\sigma_Z \sigma_X} + \tfrac{(x-\mu_X)^2}{\sigma_X^2} \right] \right) \\
&= \tfrac1{2\pi \sigma_Z \sigma_X} \exp\left( -\tfrac12 \left[ \tfrac{(z-\mu_Z)^2}{\sigma_Z^2} + \tfrac{(x-\mu_X)^2}{\sigma_X^2} \right] \right) \\
&= \tfrac1{\sqrt{2\pi}\sigma_Z} \exp\left( -\tfrac{(z-\mu_Z)^2}{2\sigma_Z^2} \right) \cdot \tfrac1{\sqrt{2\pi}\sigma_X} \exp\left( -\tfrac{(x-\mu_X)^2}{2\sigma_X^2} \right)
= f_Z(z) \cdot f_X(x)
\end{aligned}
$$
从而 $Z, X$ 相互独立.

**Step3.**
$$
\begin{aligned}
\mathbb{E}(Y | X = x) &= \mathbb{E}(Z + aX | X = x) = \mathbb{E}(Z | X = x) + a\mathbb{E}(X | X = x) \\
&= \mathbb{E}(Z) + ax = \mathbb{E}(Y - aX) + ax \\
&= \mu_Y + \tfrac{\sigma_{XY}}{\sigma_X^2} (x - \mu_X)
\end{aligned}
$$

证明完毕.





**定理: **$(X | Y = y)$ 是一维正态分布.

**证明.** **Step1.** 和 **Step2.** 同之前.

**Step3.** 由于 $Z, Y$ 相互独立
$$
(X | Y = y) = (Z + aY | Y = y) = (Z | Y = y) + ay = Z + ay
$$
仍为正态分布, 再来求其方差
$$
\begin{aligned}
\operatorname{Var}(X | Y = y)
&= \operatorname{Var}(Z) = \operatorname{Var}(X - aY) \\ &= \sigma_X^2 - 2a\sigma_{XY} + a^2\sigma_Y^2
= \sigma_X^2 - \tfrac{\sigma_{XY}^2}{\sigma_Y^2}
\end{aligned}
$$
