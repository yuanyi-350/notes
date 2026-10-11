

## Random Variable

**Definition.** (1) If $\mu$ is a measure on a $\sigma$-algebra $\mathcal{A}$ of subsets of $\Omega$, the triplet $(\Omega, \mathcal{A}, \mu)$ is a **<u>measure space</u>**.

(2) A measure space $(\Omega, \mathcal{A}, P)$ is a **<u>probability space</u>** if $P(\Omega)=1$.

$\Omega$ 为样本空间, $\omega \in \Omega$ 为样本点



**Definition:** (1) $(\Omega_1, \mathcal{A})$ and $(\Omega_2, \mathcal{B})$ are measurable spaces. $X: \Omega_1 \to \Omega_2$ is a **<u>measurable mapping</u>** if $X^{-1}(B) \in \mathcal{A}, \quad \forall B \in \mathcal{B}$

(2) $X$ is a **<u>measurable function</u>** if $\left(\Omega_2, \mathcal{B}\right)=\left(\R^n, \mathcal{B}\left(\R^n\right)\right)$ in (1).

(3) $X$ is a **<u>Borel (measurable) function</u>** if $\left(\Omega_1, \mathcal{A}\right)=\left(\R^m, \mathcal{B}\left(\R^m\right)\right)$ and $\left(\Omega_2, \mathcal{B}\right)=\left(\R^n, \mathcal{B}\left(\R^n\right)\right)$ in (1).



**Theorem 3.1.1(3)** $X$ is a mapping from $\Omega_1$ to $\Omega_2$. Let $\mathcal{C}$ be a nonempty class in $\Omega_2$, then $X^{-1}(\sigma(\mathcal{C}))=\sigma\left(X^{-1}(\mathcal{C})\right)$

**Proof.** Since $X^{-1} (\sigma(\mathcal{C}))$ is a $\sigma$-algebra which contains $X^{-1}(\mathcal{C})$, therefore Left $\supseteq$ Right. It remains to show
$$
X^{-1}(\sigma(\mathcal{C})) \subset \sigma\left(X^{-1}(\mathcal{C})\right)
$$

Define $\mathcal{G}=\left\{G: X^{-1}(G) \in \sigma\left(X^{-1}(\mathcal{C})\right)\right\}$. It suffices to show that $\sigma(\mathcal{C}) \subset \mathcal{G}$.
First, we have $\mathcal{C} \subset \mathcal{G}$ by take $G \in \mathcal{C}$, then $X^{-1}(G) \in X^{-1}(\mathcal{C}) \in \sigma\left(X^{-1}(\mathcal{C})\right)$, hence $G \in \mathcal{G}$
Next, $\mathcal{G}$ is a $\sigma$-algebra. The proof is complete.



**Theorem 3.2.1** $X:\left(\Omega_1, \mathcal{A}\right) \to\left(\Omega_2, \mathcal{B}\right)$ is a measurable mapping if $\mathcal{B}=\sigma(\mathcal{C})$ and $X^{-1}(C) \in \mathcal{A}$ for all $C \in \mathcal{C}$.

**Proof.** From **<u>Theorem 3.1.1(3)</u>**, we have $X^{-1}(\mathcal{B})=X^{-1}(\sigma(\mathcal{C}))=\sigma\left(X^{-1}(\mathcal{C})\right) \subset \sigma(\mathcal{A})=\mathcal{A}$



**Definition.** A **<u>random variable (r.v.)</u>** $X$ is a measurable function from $(\Omega, \mathcal{A})$ to $(\R, \mathcal{B})$.
$$
\iff X^{-1}(B) \in \mathcal{A}, \quad \forall \text { Borel set } B \in \mathcal{B}
$$

We then say that $X$ is $\mathcal{A}$-measurable, or simply write it as $X \in \mathcal{A}$



**Theorem 3.3.1** $X$ is a r.v. from $(\Omega, \mathcal{A})$ to $(\R, \mathcal{B}) \iff\{X \leq x\}=X^{-1}([-\infty, x]) \in \mathcal{A}$ for all $x \in \R$.

**Proof.** Take $\mathcal{C}=\{[-\infty, b]: b \in \mathcal{R}\}$ in **<u>Theorem 3.2.1.</u>**



**Definition.** $X=\left(X_1, \ldots, X_n\right)$ is a random vector if $X_k$ is a r.v. on $(\Omega, \mathcal{A})$ for $1 \leq k \leq n$.



## Distribution Function

**Defintion.** The distribution of a r.v. $X$ is usually described by giving its **distribution function**, $F(x)=P(X \le x)$.

**Remark.** 根据这个定义, 不同的r.v.可能拥有相同的d.f. 例如

定义 $X(\omega)=-\ln (\omega)$ , 这是一个从 $[0,1]$ 到 $[0, \infty)$ 的单调函数, 有 $X \sim \operatorname{Exp}(1)$ .

定义 $Y(\omega)=-\ln (1-\omega)$ , 这也是一个从 $[0,1]$ 到 $[0, \infty)$ 的函数, 亦有 $Y \sim \operatorname{Exp}(1)$ .



**Another Defintion.** (1) $F(-\infty)=\lim\limits_{x \to-\infty} F(x)=0$, $F(\infty)=\lim\limits_{x \to \infty} F(x)=1$.

(2) $F$ is nondecreasing, i.e. $F(x) \le F(y)$ if $x \le y$

(3) $F$ is right continuous, i.e. $F(y) \searrow F(x)$ if $y \searrow x$.



**Definition.** The inverse of a d.f. $F$, or quantile function associated with $F$, is defined by
$$
F^{-1}(u)=\inf \{t: F(t) \ge u\}, \quad \forall u \in(0,1)
$$
**Example.** $F=$ Cantor Function. Then $F^{-1}(\frac12) = \frac13, F^{-1}(\frac34) = \frac79$



**The equivalence of two definitions.**

**Theorem 3.8.2 (Quantile transformation.)** $F$ is a d.f. on $\R$, r.v. $U \sim \operatorname{Uniform}(0,1)$. Then $X := F^{-1}(U) \sim F .$

这里的 `~` 读作 **"服从"**, 即"is distributed as". 比如:

- $U \sim \text{Uniform}(0,1)$ : $U$ 服从区间 $(0,1)$ 的均匀分布; 实变角度来看, 即 $\Omega = (0,1)$, $U(\omega) = \omega, \forall \omega \in (0, 1)$
- $X \sim F$ : $X$ 的分布函数是 $F$.

**Proof.** Since $F^{-1}(u)$ is non-decreasing (monotone), it is Borel measurable. Thus, $X:=F^{-1}(U)$ is a r.v. Furthermore,
$$
P(X \le x)=P\left(F^{-1}(U) \le x\right)=P(U \le F(x))=F(x) .
$$
**Remark 3.8.1.** Theorem 3.8.2 is the basis for many simulation procedures. First one needs to generate "random number" $U$ from the uniform d.f. Uniform $(0,1)$, and then apply Theorem 3.8.2. Feasibility of this technique, of course, depends on either having $F^{-1}$ available in closed form, or being able to approximate it numerically, or using some other techniques.



**Lemma. (杨诗武数分二第6讲)** 如果映射 $\varphi: U \to V$ 以及逆映射 $\varphi^{-1}: V \to U$ 都是连续可微的, 并且 Jacobi 行列式 $J_{\varphi}(x)=\det\left(\frac{\partial \varphi_j(x)}{\partial_{x_i}}\right)_{1 \le i, j \le d} \neq 0$ . 如果 $f$ 是 $\varphi(U)$ 上的可积函数, 那么有下列积分换元公式
$$
\int_{\varphi(U)} f(y) d y=\int_U f(\varphi(x))\left|J_{\varphi}\right|~dx
$$
**Lemma.** 设连续 r.v. $(X, Y)$ 的可能取值范围是 $\R^2$ 中的一个开集 $D_{xy}$. 定义双射 $\varphi: D_{xy} \to D_{uv}$ , 使得 $(u, v) = \varphi(x, y)$

其中 $\varphi$ 及其逆映射都是连续可微的, 且雅可比行列式 $J_{\varphi}(x, y) = \det \frac{\partial(u, v)}{\partial(x, y)} \neq 0$.

**Proof.** 设 $A$ 是 $D_{xy}$ 中的任意一个可测子区域(Borel 集), 其在 $\varphi$ 映射下对应 $D_{uv}$ 中的区域 $B = \varphi(A)$.

因为映射是一一对应的, r.v. $(X, Y)$ 落在区域 $A$ 中的事件, 与r.v. $(U, V)$ 落在对应区域 $B$ 中的事件是完全等价的.
$$
P((X, Y) \in A) = P((U, V) \in B)
$$
使用联合概率密度函数, 将上述概率表示为二重积分:
$$
\iint_A f_{X,Y}(x, y)~dx~dy = \iint_B f_{U,V}(u, v)~du~dv = \iint_A f_{U,V}(\varphi(x, y)) \cdot \left| \det \frac{\partial(u, v)}{\partial(x, y)} \right|~dx~dy
$$
由于上面的等式对于 $D_{xy}$ 中的任意可测区域 $A$ 都成立, 因此
$$
f_{X,Y}(x, y) = f_{U,V}(u, v) \cdot \left| \det \frac{\partial(u, v)}{\partial(x, y)} \right|
$$
**Example.** Think about how to generate r.v.'s from (1) $\operatorname{Exponential}(1)$, (2) $N(0,1)$,

**Solution.** Let $U, V \sim \operatorname{Uniform}(0,1)$, and they are independent.
(1) Take $X=-\ln U$. (Using Theorem 3.8.2, we get $X=-\ln (1-U)$.)
(2) Let $\theta=2 \pi U, R=\sqrt{-2 \ln V}$. Then $X=R \cos \theta$ and $Y=R \sin \theta$ are both $N(0,1)$ and independent.

**Proof.** (1) $X = F^{-1}(U) = -\ln U$

(2)
$$
\left\{\begin{array}{l}
X=\sqrt{-2 \ln V} \cos (2 \pi U) \\
Y=\sqrt{-2 \ln V} \sin (2 \pi U)
\end{array}\right.
$$

先求逆映射 $\varphi: (X,Y) \to (U,V)$ , 其中
$$
\ln V = -\frac{X^2 + Y^2}2 \implies V = \exp\left(-\frac{X^2 + Y^2}2\right) \\
\frac{Y}X = \tan(2 \pi U) \implies U = \frac1{2 \pi} \arctan\left(\frac{Y}X\right)
$$
再来计算
$$
J = \det \frac{\partial(u, v)}{\partial(x, y)} = \begin{vmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{vmatrix} = \begin{vmatrix} -\frac{y}{2 \pi (x^2 + y^2)} & \frac{x}{2 \pi (x^2 + y^2)} \\ -x e^{-\frac{x^2 + y^2}2} & -y e^{-\frac{x^2 + y^2}2} \end{vmatrix} = \frac1{2 \pi} e^{-\frac{x^2 + y^2}2}
$$
因此
$$
f_{X,Y}(x, y) = f_{U,V}(u(x,y), v(x,y)) \cdot |J| = 1 \cdot \left( \frac1{2 \pi} e^{-\frac{x^2 + y^2}2} \right) = \left( \frac1{\sqrt{2 \pi}} e^{-\frac{x^2}2} \right) \cdot \left( \frac1{\sqrt{2 \pi}} e^{-\frac{y^2}2} \right) = f_X(x) \cdot f_Y(y)
$$
因此 $X$ 和 $Y$ 是相互独立的,  $X$ 和 $Y$ 均服从 $N(0,1)$.



**Theorem 3.8.3** If a r.v. $X$ has a continuous d.f. $F$, then $F(X) \sim \operatorname{Uniform}(0,1)$.

**Lemma 3.8.1.** If a r.v. $X$ has a continuous d.f. $F$, then $F(X)$ is also a continuous r.v..



A d.f $F$ is called **absolutely continuous** iff there exists a function $f \ge 0$ such that

$$
F(x)=\int_{-\infty}^x f(t) d t
$$

Here $f(t)$ is called the **probability density function (p.d.f.).**



**Example.** $X$ r.v., $f$ 连续可微且单增. 已知 $X$ 的 p.d.f. 为 $p$ , 下面来求 $f(X)$ 的 p.d.f.
$$
\begin{aligned}
P(f(X) \le u) &= P(X \le f^{-1}(u)) = \int_{-\infty}^{f^{-1}(u)} p(t)~dt \\
&\xlongequal{\text{ 换元 } t = f^{-1}(s)} \int_{-\infty}^{s} p(f^{-1}(s)) \cdot (f^{-1})' ~ds \\
\end{aligned}
$$
因此密度函数为 $p(f^{-1}(x)) \cdot (f^{-1})'$.

**Example.** 根据上面的例子, 如果 $X \sim N(0, 1)$, 则考察 $\sigma X$ 的密度函数
$$
p(\sigma^{-1}x) \cdot \sigma^{-1} = \frac1{\sqrt{2\pi \sigma^2}} e^{-\frac{x^2}{2\sigma^2}}
$$


**<font : color = Red>(Memorize)</font>** 

**Examples.** Absolutely continuous d.f. $F$ 's with p.d.f. $f$ 's

(1) Uniform distribution: p.d.f. $f(x)=\frac1{b-a} I\{a \le x \le b\}$.

(2) $X\sim N(0, 1)$ Normal distribution: p.d.f.$f(x)=\frac1{\sqrt{2 \pi}} e^{-x^2 / 2}.$

$N(\mu, \sigma^2)$ p.d.f. $f(x) = \dfrac1{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$

(3) $\lambda>0$ , r.v. $X \sim \operatorname{Exp}(\lambda)$ , Exponential distribution p.d.f. $f(x) = \lambda e^{-\lambda x} \cdot 1_{[0, \infty)}(x)$.

(4) Cauchy distribution: p.d.f. $f(x)=\frac{C}{\left(1+x^2\right)}$

(5) $X \sim \Gamma(n, \lambda)$,  Gamma distribution: p.d.f.  $p(x)= \frac{\lambda^n}{(n-1)!} x^{n-1} \mathrm{e}^{-\lambda x}, x>0$

**<font : color = Red>(Memorize)</font>** Discrete distribution

(1) $X \sim B(n, p)$ Binomial d.f. $P(X=x)=\binom{n}{x} p^x(1-p)^{n-x}, 0<p<1, x=0, \cdots, n$.

(2) $X \sim G(p)$ Geometry d.f. $P(X=k)=(1-p)^{k-1} p$

(3) $X \sim P(\lambda)$ Possion d.f. $P(X=x)=\dfrac{\lambda^x e^{-\lambda}}{x!}, \quad x=0,1,2, \cdots \cdots$

(4) Empirical distribution function (e.d.f.) of observations $\left\{x_1, \cdots, x_n\right\}$ :
$$
F_n(x)=\frac1n \sum_{i=1}^n I\left\{x_i \le x\right\}
$$
(i.e., $F_n(x)$ is the proportion of data $\le x$.)



## High Dimmension

If $X$ is a r.v., then $X$ induces a probability measure on $\R$ called its **distribution** by setting
$$
\mu(A)=P(X \in A) = P\left(X^{-1}(A)\right)
$$
for Borel sets $A$.

**Theorem 3.7.1** A r.v. $X$ on $(\Omega, \mathcal{A}, P)$ induces another probability space $(\R, \mathcal{B}, P_X)$ through
$$
\forall B \in \mathcal{B}: \quad P_X(B)=P\left(X^{-1}(B)\right)=P(X \in B) .
$$

**Proof.** Clearly, $P_X(B)$ is nonnegative and $P_X(\R)=P(\Omega)=1$. It is also $\sigma$-additive as
$$
P_X\left(\sum_i B_i\right)=P\left(X^{-1}\left(\sum_i B_i\right)\right)=\sum_i P\left(X^{-1}\left(B_i\right)\right)=\sum_i P_X\left(B_i\right) .
$$


**Definition:** $X$ is a r.v.

(1) The distribution of $X$ : $P_X(B)=P\left(X^{-1}(B)\right)=P(X \in B), \quad B \in \mathcal{B} .$

(2) The distribution function of $X$ : $F_X(x)=P_X((-\infty, x])=P(X \le x)$

**Remark:** $P$ 是 $(\Omega, \mathcal{A})$ 上的p.m. 通过 $X$ 诱导出 $P_X$ 这个 $(\R, \mathcal{B})$ 上的p.m.



**Definition:** (1) Given two r.v.'s $X$ and $Y$ on $(\Omega_1, \mathcal{A}_1, P_1)$ and $(\Omega_2, \mathcal{A}_2, P_2)$ respectively, $X$ and $Y$ are **<u>identically distributed (i.d.)</u>** if $F_X=F_Y$, denoted by $X={ }_d Y$.

(2) $X$ and $Y$ on $(\Omega, \mathcal{A}, P)$ are equal **<u>almost surely (a.s.)</u>** if $P(X=Y)=1$, denoted by $X=_{a.s.} Y$

**Example.** $X = \begin{cases}0, &x < 0\\x,&0\le x \le 1&\\1,&x > 1\end{cases}$ 以及 $Y = 1 - X$. 有 $X=_d Y$



**Definition:** $X=\left(X_1, \cdots, X_n\right)$ is a random vector.

(1) The **distribution** of $X$ : $P_X(B)=P\left(X^{-1}(B)\right)=P(X \in B), \quad B \in \mathcal{B}^n$

(2) The (joint) distribution function of $X$ : $F_X(x)=P\left(X_1 \le x_1, \cdots, X_n \le x_n\right)$



