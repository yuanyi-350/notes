**定义 4.1.1** 设序列 $\left\{x_k\right\}$ 以 $x^*$ 为极限.记 $e_k = x_k - x^*$ .如果存在正数 $r$ 和非负常数 $C$ , 使得
$$
\begin{equation*}
\lim _{k \to \infty} \frac{\left\|e_{k+1}\right\|}{\left\|e_k\right\|^r}=C, \tag{4.1.2}
\end{equation*}
$$

则称序列 $\left\{x_k\right\}$ 收敛到 $x^*$ 的收敛速度是 $r$ 阶的.
常见的情形有:
(1) $r=1$ , 此时称为一阶收敛或线性收敛.显然, 这时必有 $0< C<1$ .
(2) $r>1$ 或 $r=1, C=0$ , 此时称为超线性收敛.
(3) $r=2$ , 此时称为二阶收敛.



$x_{k+1}=\varphi\left(x_k\right), \quad k=0,1,2, \cdots$



**定理.** 割线法局部 $p=\frac{\sqrt{5}+1}2$ 阶收敛. ( $f'\left(x^*\right) \neq 0$ ).
$$
x_{n+1}=x_n-\frac{f\left(x_n\right)}{f\left(x_n\right)-f\left(x_{n-1}\right)}\left(x_n-x_{n-1}\right)
$$

**证明.** 首先证明存在 $R=B_\delta\left(x^*\right)$ 迭代封闭.

割线方程 $p_1(x)=f\left(x_n\right) \frac{x-x_{n-1}}{x_n-x_{n-1}}+f\left(x_{n-1}\right) \frac{x_n-x}{x_n-x_{n-1}}$ 有
$$
f(x)-p_1(x)=\frac1{2!} f''(\xi)\left(x-x_n\right)\left(x-x_{n-1}\right)
$$
由于 $p_1(x_{n+1}) = 0$:
$$
\begin{aligned}
& f(x^*) - p_1(x^*) = \frac{f''(\xi)}2(x^*-x_n)(x^*-x_{n-1}) \\
\implies & \frac{f''(\xi)}2(x^*-x_n)(x^*-x_{n-1}) = p_1(x_{n+1}) - p_1(x^*) = \frac{f(x_n)-f(x_{n-1})}{x_n-x_{n-1}} \cdot (x_{n+1}-x^*) = f'(\eta_n)(x_{n+1}-x^*) \\
\implies & x_{n+1} - x^* = \frac12\frac{f''(\xi_n)}{f'(\eta_n)} \cdot (x_n-x^*)(x_{n-1}-x^*)
\end{aligned}
$$

定义 $M=\max _{x \in B_\delta\left(x^*\right)}\left|f''(x)\right| / \min _{x \in B_\delta\left(x^*\right)}\left|f'(x)\right|$ . 当 $\delta$ 充分小时.  $M$ 有限

$$
\implies\left|x_{n+1}-x^*\right| \le M \delta^2=M \delta \cdot \delta \quad P_1 \text { 需 } M \delta<1 \implies \text { 迭代封闭.  }
$$


当 $n \gg 1 . \varepsilon_{n+1} \approx M \varepsilon_n \varepsilon_{n-1}$ . 令 $\widetilde{\varepsilon}_n=M \varepsilon_n$

$$
\implies \tilde{\varepsilon}_{n+1}=\tilde{\varepsilon}_n \tilde{\varepsilon}_{n-1} . \implies \log \tilde{\varepsilon}_{n+1} \approx \log \tilde{\varepsilon}_n+\log \tilde{\varepsilon}_{n-1} .
$$



**定理 4.2.2** 设 $x^*$ 是 $\varphi(x)$ 的不动点.如果 $\varphi(x)$ 在 $x^*$ 的某个邻域中是连续可微的, 而且 $\left|\varphi'\left(x^*\right)\right|<1$ , 则一定存在 $\delta>0$ , 只要初值 $x_0$满足 $\left|x_0-x^*\right|<\delta$ , 不动点迭代序列 $\left\{x_k\right\}$ 就收敛于 $x^*$ .

证明 由 $\varphi'(x)$ 连续的性质知, 存在 $x^*$ 的邻域 $\Delta:\left|x-x^*\right| \le \delta$ , 使得 $\forall x \in \Delta$ , 有 $\left|\varphi'(x)\right| \le L<1$ , 于是

$$
\left|\varphi(x)-x^*\right|=\left|\varphi(x)-\varphi\left(x^*\right)\right| \le L\left|x-x^*\right| \le\left|x-x^*\right| \le \delta,
$$


即 $\varphi(x)$ 可以看成是 $\Delta$ 上的压缩映像. 由定理迭代过程 $x_{k+1}=\varphi\left(x_k\right)$对任意初值 $x_0 \in \Delta$ 有收敛性, 定理得证.



**不动点迭代法的收敛速度.** 设 $x^*$ 是 $\varphi(x)$ 的不动点.

(1) 如果 $\varphi(x)$ 在 $x^*$ 的某个邻域中是连续可微的, 而且 $\left|\varphi'\left(x^*\right)\right|<1$ , 则一定存在 $\delta>0$ , 只要初值 $x_0$满足 $\left|x_0-x^*\right|<\delta$ , 不动点迭代序列 $\left\{x_k\right\}$ 就收敛于 $x^*$ .

(2) 如果 $\varphi \in C^{(r)}[a, b]$ , 而且 $\varphi^{(m)}\left(x^*\right)= 0(1 \le m<r)$ , 但 $\varphi^{(r)}\left(x^*\right) \neq 0$, 此时不动点迭代法至少是 $r$ 阶收敛的.

**Remark.** (2) 中由于 $\varphi'(x^*)=0$, 自然在某个闭邻域中为压缩映射.

**证明.** (1) 首先有 $\left|x_n-x^*\right| \le \frac{L^n}{1-L}\left|x_1-x_0\right|$ , 利用微分中值定理, 得
$$
x_{k+1}-x^*=\varphi\left(x_k\right)-\varphi\left(x^*\right)=\varphi'\left(\xi_k\right)\left(x_k-x^*\right)
$$


其中 $\xi_k$ 介于 $x_k$ 与 $x^*$ 之间, 于是有

$$
\lim _{k \to \infty} \frac{\left|e_{k+1}\right|}{\left|e_k\right|}=\lim _{k \to \infty}\left|\varphi'\left(\xi_k\right)\right|=\left|\varphi'\left(x^*\right)\right| .
$$

所以, 如果 $\varphi'\left(x^*\right) \neq 0$ , 则不动点迭代法是线性收敛的.

(2) 利用 Taylor 展开
$$
\begin{aligned}
x_{k+1}-x^*= & \varphi\left(x_k\right)-\varphi\left(x^*\right) \\
= & \varphi'\left(x^*\right)\left(x_k-x^*\right)+\cdots +\frac1{(r-1)!} \varphi^{(r-1)}\left(x^*\right)\left(x_k-x^*\right)^{r-1}+\frac1{r!} \varphi^{(r)}\left(\xi_k\right)\left(x_k-x^*\right)^r \\
= & \frac1{r!} \varphi^{(r)}\left(\xi_k\right)\left(x_k-x^*\right)^r \quad\left(\xi_k \text { 介于 } x_k \text { 与 } x^* \text { 之间 }\right),
\end{aligned}
$$


有

$$
\lim _{k \to \infty} \frac{\left|e_{k+1}\right|}{\left|e_k\right|^r}=\frac1{r!} \lim _{k \to \infty}\left|\varphi^{(r)}\left(\xi_k\right)\right|=\frac1{r!}\left|\varphi^{(r)}\left(x^*\right)\right|
$$
即证.



**定理 4.2.3** 设 $f(x)$ 在其单重零点 $x^*$ 附近二阶连续可微, 且 $f'\left(x^*\right) \neq 0$ , 则存在 $x^*$ 的邻域 $\Delta:\left|x-x^*\right| \le \delta$ , 对 $\forall x \in \Delta$ , 由 Newton迭代法(4.2.6)产生的序列 $\left\{x_k\right\}$ 都收敛于 $f(x)$ 的零点 $x^*$ , 而且收敛速度至少是二阶的.

**证明.** 记 $\varphi(x)=x-\frac{f(x)}{f'(x)}$ , 则 $x^*$ 是 $\varphi(x)$ 的不动点, Newton 迭代法(4.2.6)可以看成以 $\varphi(x)$ 为迭代函数的不动点迭代. 因为 $f'\left(x^*\right) \neq 0$ , 而且 $f'(x)$ 连续, 必存在 $x^*$ 的邻域 $\Delta:\left|x-x^*\right| \le \delta$ , 对 $\forall x \in \Delta$ 有 $f'(x) \neq 0$ , 于是, $\varphi(x)$ 在 $\Delta$ 上有定义, 且一阶连续可微.容易算出
$$
\varphi'\left(x^*\right)=0 .
$$

由定理 4.2.2以及不动点迭代收敛速度的讨论, 此定理得证.



**往年题.** 设非线性方程为 $f(x)=0,$ Steffensen 迭代可写成 $x_{n+1}=h\left(x_n\right),$ 其中
$$
\begin{aligned}
h(x) &= x-\frac{f(x)}{g(x)} \\
g(x) &= \frac{f(x+f(x))-f(x)}{f(x)} .
\end{aligned}
$$

证明该方法具有二阶收敛

**证明.** 假设 $\alpha$ 为其零点, 记 $A = f'(\alpha), B = f''(\alpha), e = x - \alpha$, 则 Taylor 展开
$$
\begin{aligned}
f(x) &= A e + B e^2 + O(e^3) \\
f(x + f(x)) &= A (x + f(x) - \alpha) + B (x + f(x) - \alpha)^2 + O(e^3) \\
&= A [(1 + A) e + B e^2 + O(e^3)] + B [(1 + A) e + B e^2 + O(e^3)] ^ 2 + O(e^3) \\
&= A(1 + A) e + B \left(A + (1 + A)^2 \right) e^2 + O(e^3) \\
\end{aligned}
$$
从而
$$
\begin{aligned}
h(x) &= x - \frac{f(x)^2}{f(x + f(x)) - f(x)} \\[1ex]
&= x - \frac{(Ae + Be^2 + O(e^3))^2}{A^2 e + B(3A + A^2) e^2 + O(e^3)}
= x - \frac{A^2 e^2+2 A B e^3+O\left(e^4\right)}{A^2 e+B\left(3 A+A^2\right) e^2+O\left(e^3\right)} \\[1ex]
&= x - \left[ e - \frac{B(1+A)}A e^2+O\left(e^3\right) \right]
=\alpha+\frac{B(1+A)}A e^2+O\left(e^3\right)
\end{aligned}
$$
从而 $h'(\alpha) = 0, h(\alpha) = 0$

