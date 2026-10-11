**定理 4.3.4.** 设 $X_1, X_2, \cdots$ 独立同分布, $\mu=\mathrm{E} X_1$ 和 $\sigma^2=\operatorname{Var}\left(X_1\right)$ 存在且有限, 且 $\sigma^2>0$ , 则中心极限定理成立, 即
$$
S_n^*:=\frac{S_n-n \mu}{\sqrt{n \sigma^2}} \xrightarrow{\mathrm{~d}} Z \sim N(0,1) .
$$

**证明.** 先假设 $\mu=0, \sigma^2=1$ . 将 $X_1$ 简记为 $X$ , 其特征函数记为 $f(\cdot)$ . 将 $S_n^*= \frac{S_n-n \mu}{\sqrt{n \sigma^2}}=\frac{S_n}{\sqrt{n}}$ 的特征函数记为 $f_n(\cdot)$ , 则
$$
f_n(t)=\mathbb{E}e^{\mathrm{i} t S_n^*}=\mathbb{E} \exp \left[\mathrm{i} \tfrac{t}{\sqrt{n}}\left(X_1+\cdots+X_n\right)\right] = \left(\mathbb{E} \exp \left(\mathrm{i} \tfrac{t}{\sqrt{n}} X\right)\right)^n=f\left(\tfrac{t}{\sqrt{n}}\right)^n
$$

往证对任意 $t, \lim\limits_{n \to \infty} f_n(t)=\mathrm{e}^{-t^2 / 2}$ .

因此 $f(0) = 1, \quad f'(0) = \mathrm{i}\mathbb{E}X = 0, \quad f''(0) = \mathrm{i}^2\mathbb{E}X^2 = -1$

因此考虑 Taylor 展开余项 $\varphi(s):=f(s)-1+\frac{s^2}2$ , 有 $\varphi(s) = o(s^2), \quad s \to 0$
$$
f_n(t) = \left[ 1 + \frac{-\frac{t^2}2 + n \cdot \varphi\left(\frac{t}{\sqrt{n}}\right)}n \right]^n
$$
根据j基本引理 : 复数列 $c_n \to c$, 则 $\lim\limits_{n \to \infty} \left(1 + \frac{c_n}n\right)^n = \mathrm{e}^c$ , 立即得到
$$
\lim_{n \to \infty} f_n(t) = \mathrm{e}^{-t^2 / 2}
$$

> ps. 复数列 $c_n \to c$, 则 $\lim\limits_{n \to \infty} \left(1 + \frac{c_n}n\right)^n = \mathrm{e}^c$
>
> **证明.** 只需证 $\lim\limits_{n \to \infty} \left(1 + \frac{c_n}n\right)^n / (1 + \frac{c}n)^n = 1$ , 即证 $\lim\limits_{n\to \infty} \left(\frac{n + c_n}{n + c}\right)^n = 1$
>
> 只需证 $\lim\limits_{n\to \infty} n \log\left(\frac{n + c_n}{n + c}\right) = 0$
>
> 注意到 $\log\left(\frac{n + c_n}{n + c}\right) = \log\left(1 + \frac{c_n - c}{n + c}\right) \le \frac{|c_n - c|}{n + c} \to 0$ 即证.

---

假设 $X_1, X_2, \cdots$ 相互独立, $X_n$ 的期望和方差均存在且有限, 并且方差为正.记

$$
\mu_n:=\mathbb{E} X_n, \quad \sigma_n^2:=\operatorname{Var}\left(X_n\right), \quad s_n^2:=\operatorname{Var}\left(S_n\right)=\sum_{k=1}^n \sigma_k^2
$$

**Liapunov 条件.** 若存在 $\delta > 0$, 使得
$$
\lim _{n \to \infty} \frac1{s_n^{2+\delta}} \sum_{k=1}^n \mathbb{E}\left|X_k-\mu_k\right|^{2+\delta}=0
$$

**Lindeberg 条件.** 若任意 $\epsilon > 0$, 均有
$$
\lim_{n \to \infty} \frac1{s_n^2} \sum_{k=1}^n \mathbb{E}\left(X_k-\mu_k\right)^2 \mathbb{I}_{\left\{\left|X_k-\mu_k\right|>\varepsilon s_n\right\}}=0 .
$$
令 $Y_{n k}=\left(X_k-\mu_k\right) / s_n$ , 则Lindeberg 条件等价于对任意 $\varepsilon>0$ ,

$$
\lim _{n \to \infty} \sum_{k=1}^n \mathbb{E} Y_{n k}^2 \mathbb{I}_{\left\{\left|Y_{n k}\right|>\varepsilon\right\}}=0 .
$$
**Feller Condition条件(UAN).** 若满足
$$
\lim_{n \to \infty} \max_{1 \le k \le n} \frac{\sigma_k^2}{s_n^2} = 0
$$


**三者之间的关系.** Liapunov 条件 $\implies$Lindeberg 条件 $\implies$ Feller Condition条件

**证明.** (1) 对任意 $\varepsilon>0$ ,
$$
\begin{aligned}
\frac1{s_n^2} \mathbb{E}\left(X_k-\mu_k\right)^2 \mathbb{I}_{\left\{\left|X_k-\mu_k\right|>\varepsilon B_n\right\}}
& \le \frac1{s_n^2} \mathbb{E}\left(X_k-\mu_k\right)^2 \frac{\left|X_k-\mu_k\right|^\delta}{\left(\varepsilon s_n\right)^\delta} \mathbb{I}_{\left\{\left|X_k-\mu_k\right|>\varepsilon s_n\right\}} \\
& \le \frac1{\varepsilon^\delta s_n^{2+\delta}} \mathbb{E}\left|X_k-\mu_k\right|^{2+\delta} .
\end{aligned}
$$
(2) 对任意 $\varepsilon>0, n \ge k \ge 1$ ,

$$
\begin{aligned}
\frac{\sigma_k^2}{s_n^2} &= \frac1{s_n^2} \mathbb{E}\left(X_k-\mu_k\right)^2 \mathbb{I}_{\left\{\left|X_k-\mu_k\right|>\varepsilon s_n\right\}}
+\frac1{s_n^2} \mathbb{E}\left(X_k-\mu_k\right)^2 \mathbb{I}_{\left\{\left|X_k-\mu_k\right| \le \varepsilon s_n\right\}} \\
& \le \frac1{s_n^2} \mathbb{E}\left(X_k-\mu_k\right)^2 \mathbb{I}_{\left\{\left|X_k-\mu_k\right|>\varepsilon s_n\right\}} + \varepsilon^2 .
\end{aligned}
$$


对 $k$ 取最大值, 推出

$$
\begin{aligned}
\frac1{s_n^2} \max_{1 \le k \le n} \sigma_k^2 & \le \frac1{s_n^2} \max_{1 \le k \le n} \mathbb{E}\left(X_k-\mu_k\right)^2 \mathbb{I}_{\left\{\left|X_k-\mu_k\right|>\varepsilon s_n\right\}}+\varepsilon^2 \\
& \le \frac1{s_n^2} \sum_{k=1}^n \mathbb{E}\left(X_k-\mu_k\right)^2 \mathbb{I}_{\left\{\left|X_k-\mu_k\right|>\varepsilon s_n\right\}}+\varepsilon^2
\end{aligned}
$$

令 $n \to \infty$ , 再令 $\varepsilon \to 0$ 即证.

---

以下令

$$
Y_{n k}:=\frac{X_k-\mathbb{E} X_k}{s_n}, \quad
S_n^*=\frac1{s_n} \sum_{k=1}^n\left(X_k-\mathbb{E} X_k\right)=\sum_{k=1}^n Y_{n k}
$$

中心极限定理即 $S_n^*:=\frac{S_n-\mathbb{E} S_n}{\sqrt{\operatorname{Var}\left(S_n\right)}}  \xrightarrow{\mathrm{~d}} Z \sim N(0,1)$



**Lindeberg-Feller 定理.** Lindeberg条件成立 $\iff$ Feller和中心极限定理同时成立.

**证明.** (1) "$\implies$" : 只需证 Lindeberg条件成立 $\implies$ 中心极限定理.

无妨设 $\mu_k = 0$. 记 $X_k$ 的特征函数为 $\varphi_k(t) = \mathbb{E}[\mathrm{e}^{\mathrm{i}tX_k}]$, 标准化和 $S_n^* = \frac1{s_n} \sum\limits_{k=1}^n X_k$ 的特征函数记为 $f_n(t)$.

根据独立性, 有 $f_n(t) = \prod\limits_{k=1}^n \varphi_k\left(\frac{t}{s_n}\right) .$ 只需证对任意 $t \in \R$, 有 $\lim\limits_{n \to \infty} f_n(t) = \mathrm{e}^{-t^2 / 2}$.

**Step1.** 根据 Taylor 展开, 对任意实数 $x$ 有 $\left| \mathrm{e}^{\mathrm{i}x} - \left(1 + \mathrm{i}x - \frac{x^2}2\right) \right| \le \min\left\{ x^2, \frac{|x|^3}6 \right\} .$

记 $\Delta_{n,k} := \varphi_k\left(\frac{t}{s_n}\right) - \left( 1 - \frac{t^2 \sigma_k^2}{2 s_n^2} \right)$ , 将 $x = \frac{t X_k}{s_n}$ 代入上式并取期望因此
$$
\begin{aligned}
|\Delta_{n,k}| &\le \mathbb{E} \left[ \min\left\{ \tfrac{t^2 X_k^2}{s_n^2}, \tfrac{|t|^3 |X_k|^3}{6 s_n^3} \right\} \right] \\[1ex]
&\le \mathbb{E}\left[ \frac{|t|^3 |X_k|^3}{6 s_n^3} \mathbb{I}_{\{|X_k| \le \varepsilon s_n\}} \right] + \mathbb{E}\left[ \frac{t^2 X_k^2}{s_n^2} \mathbb{I}_{\{|X_k| > \varepsilon s_n\}} \right] \\[1ex]
&\le \frac{\varepsilon s_n |t|^3}{6 s_n^3} \mathbb{E}\left[ X_k^2 \mathbb{I}_{\{|X_k| \le \varepsilon s_n\}} \right] + \frac{t^2}{s_n^2} \mathbb{E}\left[ X_k^2 \mathbb{I}_{\{|X_k| > \varepsilon s_n\}} \right] \\
&\le \frac{\varepsilon |t|^3}6 \frac{\sigma_k^2}{s_n^2} + \frac{t^2}{s_n^2} \mathbb{E}\left[ X_k^2 \mathbb{I}_{\{|X_k| > \varepsilon s_n\}} \right] .
\end{aligned}
$$
对 $k$ 从 $1$ 到 $n$ 求和, 并注意到 $\sum\limits_{k=1}^n \frac{\sigma_k^2}{s_n^2} = 1$

$$
\sum_{k=1}^n |\Delta_{n,k}| \le \frac{\varepsilon |t|^3}6 + t^2 \sum_{k=1}^n \frac1{s_n^2} \mathbb{E}\left[ X_k^2 \mathbb{I}_{\{|X_k| > \varepsilon s_n\}} \right] .
$$
令 $n \to \infty$ 并让 $\varepsilon \to 0$ , 有 $\displaystyle\lim_{n \to \infty} \sum_{k=1}^n |\Delta_{n,k}| = 0$ , 因此
$$
\lim_{n \to \infty} \sum_{k=1}^n \left( \varphi_k\left(\tfrac{t}{s_n}\right) - 1 \right) = \lim_{n \to \infty} \sum_{k=1}^n \left( \Delta_{n,k} - \tfrac{t^2 \sigma_k^2}{2 s_n^2} \right) = -\frac{t^2}2 .
$$

**Step2.**

> **引理.** 若 $|z_k| \le 1$ 且 $|w_k| \le 1$, 则 $|\prod z_k - \prod w_k| \le \sum |z_k - w_k|$.

令 $z_k = \varphi_k(t/s_n)$, $w_k = \exp(\varphi_k(t/s_n) - 1)$ , 则 $|z_k|, |w_k| \le 1$ . 因此
$$
\begin{aligned}
\left| f_n(t) - \exp\left( \sum_{k=1}^n \left(\varphi_k\left(\tfrac{t}{s_n}\right) - 1\right) \right) \right| &\le \sum_{k=1}^n \left| \varphi_k\left(\tfrac{t}{s_n}\right) - \exp\left(\varphi_k\left(\tfrac{t}{s_n}\right) - 1\right) \right| \\
&\le \frac12\sum_{k=1}^n \left| \varphi_k\left(\tfrac{t}{s_n}\right) - 1 \right|^2 \\
&\le \frac12\left( \max_{1 \le k \le n} \left| \varphi_k\left(\tfrac{t}{s_n}\right) - 1 \right| \right) \cdot \sum_{k=1}^n \left| \varphi_k\left(\tfrac{t}{s_n}\right) - 1 \right| . \end{aligned}
$$

> 其中第一个不等号是引理.
>
>  第二个不等号是因为对于复数 $w$, 由 Taylor 展开可知, 当 $\mathrm{Re}(w) \le 0$ 时恒有 $|e^w - (1 + w)| \le \frac12|w|^2$.
>
> 令 $w_k = \varphi_k\left(\frac{t}{s_n}\right) - 1$, 因为特征函数满足 $|\varphi_k| \le 1$, 故有 $\mathrm{Re}(w_k) \le 0$. 因此
>
> $$
> \left| \varphi_k\left(\tfrac{t}{s_n}\right) - \exp\left(\varphi_k\left(\tfrac{t}{s_n}\right) - 1\right) \right| = \left| w_k + 1 - e^{w_k} \right| \le \frac12 |w_k|^2 = \frac12 \left| \varphi_k\left(\tfrac{t}{s_n}\right) - 1 \right|^2
> $$

利用特征函数的性质 $\left|\mathbb{E}\left[e^{\mathrm{i}x} - 1 - \mathrm{i}x\right]\right| \le \frac{x^2}2$ 以及 $\mathbb{E}X_k = 0$, 可以对各项做如下界定:

$$
\left| \varphi_k\left(\tfrac{t}{s_n}\right) - 1 \right| = \left| \mathbb{E}\left[ \exp\left(\mathrm{i} t \tfrac{X_k}{s_n}\right) - 1 - \mathrm{i} t \tfrac{X_k}{s_n} \right] \right| \le \frac{t^2}{2 s_n^2} \mathbb{E}X_k^2 = \frac{t^2 \sigma_k^2}{2 s_n^2}
$$
因此, $\displaystyle \sum_{k=1}^n \left| \varphi_k\left(\tfrac{t}{s_n}\right) - 1 \right| \le \sum_{k=1}^n \frac{t^2 \sigma_k^2}{2 s_n^2} = \frac{t^2}2$ 有一致上界

对最大项部分, 结合 Lindeberg 条件 $\implies$ Feller 条件, 有 $\displaystyle\lim_{n \to \infty} \max_{1 \le k \le n} \frac{\sigma_k^2}{s_n^2} = 0$, 故

$$
\max_{1 \le k \le n} \left| \varphi_k\left(\tfrac{t}{s_n}\right) - 1 \right| \le \frac{t^2}2 \max_{1 \le k \le n} \frac{\sigma_k^2}{s_n^2} \to 0 \quad (n \to \infty)
$$
由此, $\displaystyle \lim_{n \to \infty} \left| f_n(t) - \exp\left( \sum_{k=1}^n \left(\varphi_k\left(\tfrac{t}{s_n}\right) - 1\right) \right) \right| = 0$ , 再结合 Step 1 即证 $\lim\limits_{n \to \infty} f_n(t) = \exp\left( -\frac{t^2}2 \right)$.

 (2) “$\impliedby$” 由 $f_n(t) = \prod_{k=1}^n \varphi_k\left(\frac{t}{s_n}\right) \to e^{-t^2/2}$ 有 $\sum\limits_{k=1}^n \log \varphi_k\left(\frac{t}{s_n}\right) \to -\frac{t^2}2$

利用 Taylor 展开 $\log(1+z) = z + O(|z|^2)$, 并且已证的 $\sum\limits_{k=1}^n \left| \varphi_k\left(\tfrac{t}{s_n}\right) - 1 \right|^2 \to 0$ 作为无穷小量的控制, 有
$$
\lim_{n \to \infty} \sum_{k=1}^n \left( \varphi_k\left(\tfrac{t}{s_n}\right) - 1 \right) = -\frac{t^2}2
$$
取上式两边的实部. 由于 $\mathrm{Re}\left(\varphi_k\left(\frac{t}{s_n}\right)\right) = \mathbb{E}[\cos(t Y_{nk})]$, 则有 $\sum\limits_{k=1}^n \mathbb{E}\left[ 1 - \cos(t Y_{nk}) \right] \to \frac{t^2}2$

根据 $\sum\limits_{k=1}^n \mathbb{E}[Y_{nk}^2] = 1$, 有 $\sum\limits_{k=1}^n \mathbb{E}\left[ \frac{t^2}2 Y_{nk}^2 - (1 - \cos(t Y_{nk})) \right] \to 0$

由于对任意实数 $x$ 恒有 $\frac{x^2}2 - (1 - \cos x) \ge 0$, 故期望号内的项严格非负.

对任意固定的 $\varepsilon > 0$,  有
$$
\sum_{k=1}^n \mathbb{E}\left[ \left( \frac{t^2}2 Y_{nk}^2 - (1 - \cos(t Y_{nk})) \right) \mathbb{I}_{\{|Y_{nk}| > \varepsilon\}} \right] \le \sum_{k=1}^n \mathbb{E}\left[ \frac{t^2}2 Y_{nk}^2 - (1 - \cos(t Y_{nk})) \right] \to 0
$$
注意到当 $|Y_{nk}| > \varepsilon$ 时,
$$
\frac{t^2}2 Y_{nk}^2 - (1 - \cos(t Y_{nk})) \ge \frac{t^2}2 Y_{nk}^2 - 2 = Y_{nk}^2 \left( \frac{t^2}2 - \frac2{Y_{nk}^2} \right) \ge Y_{nk}^2 \left( \frac{t^2}2 - \frac2{\varepsilon^2} \right)
$$
取 $t = \frac2\varepsilon$, 则有系数常数项 $\frac{t^2}2 - \frac2{\varepsilon^2} = \frac2{\varepsilon^2} > 0$, 得到

$$
\sum_{k=1}^n \mathbb{E}\left[ \frac2{\varepsilon^2} Y_{nk}^2 \mathbb{I}_{\{|Y_{nk}| > \varepsilon\}} \right] \le \sum_{k=1}^n \mathbb{E}\left[ \left( \frac{t^2}2 Y_{nk}^2 - (1 - \cos(t Y_{nk})) \right) \mathbb{I}_{\{|Y_{nk}| > \varepsilon\}} \right] \to 0
$$
两边同时乘以正数常数 $\frac{\varepsilon^2}2$, 即证得 Lindeberg 条件.

