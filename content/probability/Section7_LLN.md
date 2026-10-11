## 弱大数定律

**定理4.14.** 设 $X_1, X_2, \cdots$ 独立同分布, **<font : color=Red>方差存在且有限</font>**, 则 $\frac1n S_n-\mathbb{E} X_1 \xrightarrow{P} 0$ .

**证明.** 对任意 $\varepsilon>0$ ,
$$
\begin{aligned}
P\left(\left|\tfrac{S_n}n-\mathbb{E} X_1\right|>\varepsilon\right)
&=P\left(\left|\tfrac{S_n-\mathbb{E} S_n}n\right|>\varepsilon\right) \\
&=P\left(\left|S_n-\mathbb{E} S_n\right|>n \varepsilon\right) \\
&\le \frac{\operatorname{Var}\left(S_n\right)}{(n \varepsilon)^2}
=\frac{n \operatorname{Var}\left(X_1\right)}{n^2 \varepsilon^2}
=\frac{\operatorname{Var}\left(X_1\right)}{n \varepsilon^2}
\end{aligned}
$$

其中不等号用到了切比雪夫不等式,  $\operatorname{Var}\left(S_n\right)=n \operatorname{Var}\left(X_1\right)$ 用到了独立同分布的假设. 当 $n \to \infty$ 时, 上式右端趋于 0 . 因此结论成立.

上述证明中的独立同分布条件可以减弱为两两不相关和方差有界的假设, 证明完全一样. 于是得到如下版本, 其中取 $a_n=\mathbb{E} S_n / n$ .

**命题 4.1.5 (切比雪夫大数定律)** 设 $X_1, X_2, \cdots$ 两两不相关, 且存在常数 $C$ 使得对任意 $n \ge 1, \operatorname{Var}\left(X_n\right) \le C$ , 则 $\frac1n\left(S_n-\mathbb{E} S_n\right) \xrightarrow{P} 0$ .

**Remark.** 独立性假设用于展开方差, 设 $S_n = \sum\limits_{i=1}^n X_i$ , 则
$$
\operatorname{Var}(S_n) = \operatorname{Var}\left(\sum_{i=1}^n X_i\right) = \sum_{i=1}^n \operatorname{Var}(X_i) + 2 \sum_{1 \le i < j \le n} \operatorname{Cov}(X_i, X_j)
$$
只需要两两不相关即可消去协方差项.



**定理 4.1.8 (弱大数定律)** 假设 $X_1, X_2, \cdots$ 独立同分布,  $\lim\limits_{x \to \infty} x P\left(\left|X_1\right|>x\right)=0$ , 则
$$
\frac1n S_n - \mathbb{E}\left(X_1 \cdot \mathbb{I}_{\left\{\left|X_1\right| \le n\right\}}\right) \xrightarrow{\mathrm{P}} 0 .
$$
**Remark.** 此定理是解决上面方差有限的问题的, $\mathbb{E}\left(X_1 \cdot \mathbb{I}_{\left\{\left|X_1\right| \le n\right\}}\right)$ 的动机是防止期望不存在.

**证明.** 将 $X_1$ 简记为 $X$ , 并将 $\mathbb{E}\left(X \cdot \mathbb{I}_{\{|X| \le n\}}\right)$ 记为 $\mu_n$ . 对任意 $n$ , 令
$$
T_n = X_1 \cdot \mathbb{I}_{\left\{\left|X_1\right| \le n\right\}}+\cdots+X_n \cdot \mathbb{I}_{\left\{\left|X_n\right| \le n\right\}} .
$$


若 $\left|X_i\right| \le n, i=1, \cdots, n$ , 则 $S_n=T_n$ . 因此

$$
P\left(S_n \neq T_n\right) \le P\left(\bigcup_{i=1}^n\left\{\left|X_i\right|>n\right\}\right) \le n P(|X|>n) \xrightarrow{n \to \infty} 0 .
$$

下面估计 $T_n$ 的期望与方差. 由 $X_i \cdot \mathbb{I}_{\left\{|X_i| \le n\right\}}, i=1,2, \cdots$ 独立同分布知 $\mathbb{E} T_n=n \mu_n$ , 并且

对于任意 $\varepsilon > 0$ , 由于 $\lim\limits_{x \to \infty} x P(|X|>x) = 0$ , 存在 $M$ 使得当 $x > M$ 时有 $x P(|X|>x) < \varepsilon/2$ .
$$
\begin{aligned}
\frac1{n^2}\operatorname{Var}\left(T_n\right)
&=\frac1n \operatorname{Var}\left(X \cdot \mathbb{I}_{\{|X| \le n\}}\right) \\
&\le \frac1n\mathbb{E}\left(X \cdot \mathbb{I}_{\{|X| \le n\}}\right)^2
= \frac1n\mathbb{E}\left(X^2 \cdot \mathbb{I}_{\{|X| \le n\}}\right) \le \frac1n\int_0^n 2 x P(|X|>x)~dx \\
&= \frac1n \int_0^M 2x P(|X|>x)~dx + \frac1n \int_M^n 2x P(|X|>x)~dx
\end{aligned}
$$
当 $n \to \infty$ 时, 第一项 $\to 0$ . 对于第二项, 利用 $x > M$ 时的放缩:
$$
\frac1n \int_M^n 2x P(|X|>x)~dx < \frac1n \int_M^n 2 \left( \frac\varepsilon2 \right)~dx = \frac{n-M}n \varepsilon < \varepsilon .
$$
综合两项, 由 $\varepsilon$ 的任意性可知

$$
\lim_{n \to \infty} \frac1{n^2} \operatorname{Var}(T_n) = \lim_{n \to \infty} \frac1n \int_0^n 2x P(|X|>x)~dx = 0 .
$$
因此当 $n \to \infty$ 时, $\frac1n \operatorname{Var}\left(X \cdot \mathbb{I}_{\{|X| \le n\}}\right) \to 0$ . 对任意 $\varepsilon>0$ , 由切比雪夫不等式,

$$
P\left(\left|\frac{T_n}n-\mu_n\right| \ge \varepsilon\right) \le \frac1{\varepsilon^2} \cdot \frac{\operatorname{Var}\left(T_n\right)}{n^2}=\frac1{\varepsilon^2} \cdot \frac{\operatorname{Var}\left(X \cdot \mathbb{I}_{\{|X| \le n\}}\right)}{n} \xrightarrow{n \to \infty} 0 .
$$


最后,

$$
\begin{aligned}
P\left(\left|\frac{S_n}n-\mu_n\right| \ge \varepsilon\right)
&\le P\left(\left|\frac{T_n}n-\mu_n\right| \ge \varepsilon\right)+P\left(S_n \neq T_n\right) \xrightarrow{n \to \infty} 0 .
\end{aligned}
$$

从而 $S_n / n-\mu_n \xrightarrow{P} 0$ .







## 强大数定律

**Lemma 8.3.1 (Cesaro's Lemma).** Given two sequences $\left\{b_n\right\}$ and $\left\{x_n\right\}$, assume that

(1) $b_n \ge 0$ and $a_n=\sum\limits_{k=1}^n b_k \nearrow \infty$,
(2) $x_n \to x,|x|<\infty$.

Then

$$
\frac1{a_n} \sum_{k=1}^n b_k x_k \equiv \frac{\sum_{k=1}^n b_k x_k}{\sum_{k=1}^n b_k} \to x .
$$

**Proof.** $\forall \varepsilon>0, \exists n_0$ such that $\left|x_n-x\right|<\varepsilon$ for $n \ge n_0$. Therefore,
$$
\begin{aligned}
\left|\frac1{a_n} \sum_{k=1}^n b_k x_k-x\right| & =\left|\frac{\sum_{k=1}^n b_k\left(x_k-x\right)}{\sum_{k=1}^n b_k}\right| \le \frac{\sum_{k=1}^{n_0} b_k\left|x_k-x\right|}{\sum_{k=1}^n b_k}+\frac{\sum_{k=n_0}^n b_k\left|x_k-x\right|}{\sum_{k=1}^n b_k} \\
& \le \frac{\sum_{k=1}^{n_0} b_k\left|x_k-x\right|}{\sum_{k=1}^n b_k}+\frac{\sum_{k=n_0}^n b_k \varepsilon}{\sum_{k=1}^n b_k} \le \frac{C\left(n_0\right)}{a_n}+\varepsilon .
\end{aligned}
$$


Letting $n \to \infty$, and noting $a_n \to \infty$, we obtain the theorem.



**Lemma 8.3.3 (sums into weighted sums, Kronecker)** If $a_n \nearrow \infty$ and $\sum\limits_{n=1}^\infty x_n$ converges, then
$$
\frac1{a_n} \sum_{k=1}^n a_k x_k \to 0 .
$$

**Proof.** Let $S_k=\sum\limits_{j=1}^k x_k$ and $S_0=0$. So $S_n \to S_\infty$, say. Applying Abel's method and Cesaro's Lemma, we get
$$
\begin{aligned}
\frac1{a_n} \sum_{k=1}^n a_k x_k & =\frac1{a_n}\left(a_n S_n-\sum_{k=1}^n\left(a_k-a_{k-1}\right) S_{k-1}\right) \\
& =S_n-\frac{\sum_{k=1}^n\left(a_k-a_{k-1}\right) S_{k-1}}{\sum_{k=1}^n\left(a_k-a_{k-1}\right)} \to S_\infty-S_\infty=0
\end{aligned}
$$



**THEOREM 8.1.2 (Kolmogorov maximal inequality)** Let $X_1, X_2, \cdots$ be independent with $\mathbb{E} X_k=0$ and $\sigma_k^2=\operatorname{Var}\left(X_i\right)<\infty$. Write $S_k=\sum\limits_{i=1}^k X_i$. Let $\varepsilon>0$.
$$
P\left(\max _{1 \le k \le n}\left|S_k\right| \ge \varepsilon\right) \le \frac{\operatorname{Var}\left(S_n\right)}{\varepsilon^2}
$$

**Proof.**
$$
\begin{aligned}
E_1 &=\left\{\left|S_1\right| \ge \varepsilon\right\}, \\
E_j &=\left\{\max _{1 \le k<j}\left|S_k\right|<\varepsilon,\left|S_j\right| \ge \varepsilon\right\}, \quad \text{for } 2 \le j \le n, \\
A &=\bigcup_{j=1}^n E_j=\left\{\max _{1 \le k \le n}\left|S_k\right| \ge \varepsilon\right\},
\end{aligned}
$$

> 其中交叉项 $\mathbb{E}\left[S_k \mathbb{I}_{E_k} (S_n - S_k)\right]$ 为 $0$ .
>
> 事件 $E_k$ 完全由前 $k$ 个随机变量 $X_1, \dots, X_k$ 决定, 因此随机变量 $S_k \mathbb{I}_{E_k}$ 与 $S_n - S_k = X_{k+1} + \dots + X_n$ 相互独立. 又因为 $\mathbb{E}[X_i] = 0$, 故 $\mathbb{E}[S_n - S_k] = 0$. 由独立性可知
> $$
> \mathbb{E}\left[S_k \mathbb{I}_{E_k} (S_n - S_k)\right] = \mathbb{E}\left[S_k \mathbb{I}_{E_k}\right] \mathbb{E}[S_n - S_k] = 0
> $$

So
$$
\begin{aligned}
\operatorname{Var}\left(S_n\right)
&=\mathbb{E} S_n^2 \ge \mathbb{E} S_n^2 \mathbb{I}_A
=\sum_{j=1}^n \mathbb{E} S_n^2 \mathbb{I}_{E_j} \\
&=\sum_{j=1}^n \mathbb{E}\left[\left(S_j+\left(S_n-S_j\right)\right)^2 \mathbb{I}_{E_j}\right] \\
&=\sum_{j=1}^n \mathbb{E} S_j^2 \mathbb{I}_{E_j}
+\sum_{j=1}^n \mathbb{E}\left(S_n-S_j\right)^2 \mathbb{I}_{E_j}
+2 \sum_{j=1}^n \mathbb{E} S_j\left(S_n-S_j\right) \mathbb{I}_{E_j} \\
&\ge \sum_{j=1}^n \mathbb{E} S_j^2 \mathbb{I}_{E_j} \ge \varepsilon^2 P(A)
= \varepsilon^2 P\left(\max _{1 \le k \le n}\left|S_k\right| \ge \varepsilon\right) .
\end{aligned}
$$



**Theorem 8.2.4 (Variance criterion for series, due to Khinchin and Kolmogorov)** Let $X_1, X_2, \cdots$ be independent with $\mathbb{E} X_k=0$ and $\sigma_k^2=\operatorname{Var}\left(X_k\right)<\infty$. If $\sum\limits_{k=1}^\infty \operatorname{Var}\left(X_k\right)<\infty$, then $\sum\limits_{k=1}^\infty X_k$ converges a.s.
(i.e., $L_2$ convergence implies a.s. convergence for independent series)

**Method 1.** Direct approach. Write $S_n=\sum\limits_{k=1}^n X_k$. By Kolmogorov inequality,
$$
P\left(\max_{M<m \le n}\left|S_m-S_M\right|>\varepsilon\right) \le \frac{\operatorname{Var}\left(S_n-S_M\right)}{\varepsilon^2}=\frac{\sum_{k=M+1}^n \operatorname{Var}\left(X_k\right)}{\varepsilon^2}
$$


Let $n \to \infty$, $\displaystyle P\left(\sup _{m>M}\left|S_m-S_M\right|>\varepsilon\right) \le \frac{\sum_{k=M+1}^\infty \operatorname{Var}\left(X_k\right)}{\varepsilon^2} .$ Therefore,

$$
\lim _{M \to \infty} P\left(\sup _{m>M}\left|S_m-S_M\right|>\varepsilon\right)=0 .
$$


Note that $\sup _{m, n>M}\left|S_m-S_n\right| \searrow$ as $M \nearrow$, and

$$
\begin{aligned}
P\left(\sup _{m, n>M}\left|S_m-S_n\right|>2 \varepsilon\right)
&\le P\left(\sup _{m>M}\left|S_m-S_M\right|>\varepsilon\right)+P\left(\sup _{n>M}\left|S_n-S_M\right|>\varepsilon\right) \\
&=2 P\left(\sup _{m>M}\left|S_m-S_M\right|>\varepsilon\right) \to 0, \quad \text{as } M \to \infty
\end{aligned}
$$


Therefore, $S_n$ is a Cauchy sequence a.s., hence $\lim _{n \to \infty} S_n$ exists.

**Method 2.** Subsequence method. Write $S_n=\sum_{k=1}^n X_k$. By Chebyshev's inequality, for $m<n$,

$$
P\left(\left|S_n-S_m\right|>\varepsilon\right) \le \frac{\sum_{k=m+1}^n \operatorname{Var}\left(X_k\right)}{\varepsilon^2} \to 0, \quad \text{as } m \to \infty .
$$


Therefore, $S_n$ is a Cauchy sequence in probability, i.e., $S_n \to_p S_\infty$, say. Hence, $\exists$ a subsequence $\left\{n_k\right\} \nearrow \infty$ such that $S_{n_k} \to_{\text{a.s.}} S_\infty$ as $k \to \infty$.

Now $\forall n \ge 1, \exists k \ge 1$, such that $n_k<n \le n_{k+1}$, and

$$
\begin{aligned}
0 & \le\left|S_n-S_\infty\right| \le\left|S_{n_{k+1}}-S_\infty\right|+\left|S_{n_{k+1}}-S_n\right| \\
& \le\left|S_{n_{k+1}}-S_\infty\right|+\max _{n_k<j \le n_{k+1}}\left|S_{n_{k+1}}-S_j\right| =: A_k+B_k
\end{aligned}
$$


We have shown that $A_k \to 0$ a.s. To show $B_k \to 0$ a.s., we apply Kolmogorov inequality,

$$
\sum_{k=1}^\infty P\left(\left|B_k\right| \ge \varepsilon\right) \le \sum_{k=1}^\infty \frac1{\varepsilon^2} \mathbb{E}\left(S_{n_{k+1}}-S_{n_k}\right)^2=\sum_{k=1}^\infty \frac1{\varepsilon^2} \sum_{j=n_k+1}^{n_{k+1}} \mathbb{E} X_j^2 \le \frac{\sum_{i=1}^\infty \mathbb{E} X_i^2}{\varepsilon^2}<\infty
$$

which implies that $B_k \to 0$ a.s. Hence, $S_n \to S_\infty, a.s.$

**Corollary 8.2.1** Let $X_1, X_2 \cdots$ be independent with $\mu_k=\mathbb{E} X_k$ and $\sigma_k^2= \mathbb{E} X_k^2<\infty$.

Let $\bar{X}=\frac1n \sum\limits_{i=1}^n X_i$ and $\bar{\mu}= \frac1n \sum\limits_{i=1}^n \mu_i$ If $\sum\limits_{k=1}^\infty \mathbb{E} X_k^2 / k^2<\infty$, then $\bar{X}-\bar{\mu} \to 0, a.s.$

**Proof.** Let $Y_k=\left(X_k-\mathbb{E} X_k\right) / k$. Since $\sum\limits_{k=1}^\infty \operatorname{var}\left(Y_k\right)<\infty$, from the last theorem, we get $\sum\limits_{k=1}^\infty\left(X_k-\mathbb{E} X_k\right) / k$ converges a.s. By the Kronecker Lemma, $\frac1n \sum\limits_{k=1}^n\left(X_k-\mathbb{E} X_k\right) \to 0, a.s.$





**(Kolmogorov SLLN)** 已知 $X_1, X_2, \cdots$ 独立同分布, 且 $\mathbb{E}|X_1| < \infty$ , 记 $\mathbb{E} X_1 = \mu$. 证明: $\frac1n \sum\limits_{i=1}^n X_i \xrightarrow{\text{a.s.}} \mu$

**证明.** **Step1.** 定义截断随机变量 $Y_k = X_k \mathbb{I}_{\{|X_k| \le k\}}$ , 也是独立序列.

**Step2.** 证明 $\displaystyle  \frac1n \sum_{k=1}^n X_k - \frac1n \sum_{k=1}^n Y_k \xrightarrow{\text{a.s.}} 0$
$$
\sum_{k=1}^\infty P(X_k \neq Y_k) = \sum_{k=1}^\infty P(|X_k| > k) = \sum_{k=1}^\infty P(|X_1| > k)
$$

由于 $\mathbb{E}|X_1| < \infty$, 上述级数收敛:

$$
\sum_{k=1}^\infty P(|X_1| > k) \le \int_0^\infty P(|X_1| > t)~dt = \mathbb{E}|X_1| < \infty
$$

根据First Borel-Cantelli Lemma, 事件 $\{X_k \neq Y_k\}$ 发生无穷多次的概率为 $0$ .

即存在零测集 $N$, 当 $\omega \notin N$ 时, 存在 $K(\omega)$, 使得对所有 $k \ge K(\omega)$ 均有 $X_k(\omega) = Y_k(\omega)$. 因此

$$
\frac1n \sum_{k=1}^n X_k - \frac1n \sum_{k=1}^n Y_k \xrightarrow{\text{a.s.}} 0
$$

**Step3.** 证明 $\frac1n \sum\limits_{k=1}^n \mathbb{E} Y_k \xrightarrow{\text{a.s.}} \mu$.


因为 $Y_k=X_k \mathbb{I}_{\left\{\left|X_k\right| \le k\right\}}$ , 且 $X_k$ 与 $X_1$ 同分布, 所以 $\mathbb{E} Y_k=\mathbb{E}\left[X_1 \mathbb{I}_{\left\{\left|X_1\right| \le k\right\}}\right] .$


由于 $\mathbb{E}\left|X_1\right|<\infty$ , DCT 即得 $\mathbb{E} Y_k \to \mathbb{E} X_1=\mu .$ 于是由 Cesàro 平均定理, $\frac1n \sum\limits_{k=1}^n \mathbb{E} Y_k \to \mu .$

**Step4.** 证明 $\frac1n \sum_{k=1}^n (Y_k - \mathbb{E}[Y_k]) \xrightarrow{\text{a.s.}} 0$.

对 $\{Y_k\}$ 序列使用Corollary 8.2.1., 需要验证方差级数收敛

$$
\sum_{k=1}^\infty \frac{\operatorname{Var}(Y_k)}{k^2}
\le \sum_{k=1}^\infty \frac{\mathbb{E}[Y_k^2]}{k^2}
= \sum_{k=1}^\infty \frac1{k^2} \mathbb{E}\left[X_1^2 \mathbb{I}_{\{|X_1| \le k\}}\right] \\
= \sum_{j=1}^\infty \mathbb{E}\left[X_1^2 \mathbb{I}_{\{j-1 < |X_1| \le j\}}\right] \sum_{k=j}^\infty \frac1{k^2} \\
$$

利用 $\sum_{k=j}^\infty \frac1{k^2} \le \frac1{j^2} + \int_j^\infty \frac1{x^2}~dx = \frac1{j^2} + \frac1j \le \frac2j$ (当 $j \ge 1$) 将其代回上式

$$
\sum_{k=1}^\infty \frac{\operatorname{Var}(Y_k)}{k^2} \le 2 \sum_{j=1}^\infty \frac1j \mathbb{E}\left[X_1^2 \mathbf{I}_{\{j-1 < |X_1| \le j\}}\right] \\
\le 2 \sum_{j=1}^\infty \mathbb{E}\left[|X_1| \mathbf{I}_{\{j-1 < |X_1| \le j\}}\right]
= 2 \mathbb{E}|X_1| < \infty
$$

级数收敛条件得证, 从而即证.

最后将 Step2. Step3. Step4. 相加即证.





**Remark.** $\mathbb{E} |X| = \infty$ 的反例, 设 $X_1, X_2, \dots$ 为i.i.d. r.v. 且其 c.d.f. 满足
$$
F(x) = \begin{cases} 0, & x < 1, \\ 1 - \frac1x, & x \ge 1. \end{cases}
$$
记其前 $n$ 项的部分和为 $S_n = \sum\limits_{i=1}^n X_i$. 则该序列的绝对期望 $E|X| = \infty$, 且样本均值满足 $\limsup\limits_{n \to \infty} \frac{S_n}n = \infty , a.s.$ 几乎必然发散

**证明.** $E|X| = \infty$ 是平凡的.

任取一任意大的常数 $M > 0$, 定义随机事件序列 $A_n^{(M)} = \{ X_n > Mn \}$ 互相独立.

$$
P(A_n^{(M)}) = P(X_n > Mn) = \frac1{Mn} \\
\sum_{n=1}^\infty P(A_n^{(M)}) = \sum_{n=1}^\infty \frac1{Mn} = \frac1M \sum_{n=1}^\infty \frac1n = \infty
$$
运用 Borel-Cantelli 第二引理, $P\left(\limsup_{n \to \infty} A_n^{(M)}\right) = P(A_n^{(M)} \text{ i.o.}) = 1$

对于满足 $X_n > Mn$ 的指标 $n$, 部分和 $S_n = X_1 + \dots + X_{n-1} + X_n \ge X_n > Mn$ , 即 $\frac{S_n}n > M$

因此在样本均值序列中, 无穷多次地会出现大于 $M$ 的值. 由此得到 $\limsup\limits_{n \to \infty} \frac{S_n}n \ge M \quad a.s.$

因为 $M$ 是可以任意大, 因此 $\limsup\limits_{n \to \infty} \frac{S_n}n = \infty \quad a.s.$






## 柯尔莫哥洛夫截断法

动机: 许多放缩都要求r.v. 具有二阶矩 (即方差有限, $\operatorname{Var}(X) < \infty$).

然而, 很多条件只提供一阶矩存在(即期望有限, $\mathbb{E}|X| < \infty$).

**Step1.** 构造截断随机变量序列 (Truncation)

给定一列随机变量 $\{X_n\}$ 以及一列发散到无穷的截断常数序列 $\{c_n\}$(最常见的选取是 $c_n = n$)

定义截断后的随机变量序列 $\{Y_n\}$ 为 $Y_n = X_n \mathbb{I}_{\{|X_n| \le c_n\}}$  , 拥有有限的方差 $\operatorname{Var}(Y_n) < \infty$.

**Step2.** 利用 Borel-Cantelli 引理证明序列等价性 (Equivalence)
$$
\sum_{n=1}^\infty P(X_n \neq Y_n) = \sum_{n=1}^\infty P(|X_n| > c_n) < \infty
$$

*(注: 对于独立同分布且 $\mathbb{E}|X_1| < \infty$ 的序列, 当 $c_n = n$ 时, 上述级数收敛恰好等价于期望有限, 即 $\sum P(|X_1| > n) \le \mathbb{E}|X_1| < \infty$. )*

一旦级数收敛, 根据First Borel-Cantelli Lemma, 事件 $\{X_n \neq Y_n\}$ 发生无穷多次的概率为 $0$:

$$
P\left(\limsup_{n \to \infty} \{X_n \neq Y_n\}\right) = 0
$$

对于几乎所有的样本轨道 $\omega \in \Omega$, 存在一个有限的整数 $N(\omega)$, 使得对于所有的 $n \ge N(\omega)$, 均有 $X_n(\omega) = Y_n(\omega)$. 即证
$$
\lim_{n \to \infty} \frac1n \left(\sum_{k=1}^n X_k - \sum_{k=1}^n Y_k \right) = 0
$$


**Step3.** 接下来所有的操作都在有界的 $\{Y_n\}$ 上进行:

**1. 处理中心化序列的收敛性:**

利用 $|Y_n| \le c_n$ 的性质, 计算或放缩 $\operatorname{Var}(Y_n) \le \mathbb{E}[Y_n^2]$.

通过证明截断变量的方差级数收敛(例如 $\sum_{n=1}^\infty \frac{\operatorname{Var}(Y_n)}{n^2} < \infty$), 就可以合法地使用柯尔莫哥洛夫方差准则, 得出中心化后的截断序列极限:

$$
\frac1n \sum_{k=1}^n (Y_k - \mathbb{E}[Y_k]) \xrightarrow{\text{a.s.}} 0
$$

**2. 消除截断带来的期望偏差:**

截断操作会使得 $\mathbb{E}[Y_n] \neq \mathbb{E}[X_n]$. 因此最后必须证明截断变量的期望渐近收敛于原变量的期望.

利用 DCT 或直接对尾部期望进行积分放缩, 证明

$$
\lim_{n \to \infty} \mathbb{E}[Y_n] = \mathbb{E}[X_n]
$$

进而通过Cesàro mean 或其他引理得到 $\frac1n \sum\limits_{k=1}^n \mathbb{E}[Y_k] \to \mathbb{E}[X_1]$.
