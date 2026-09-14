**定理 6.2 (Hölder 不等式).** 设 $p$ 与 $p'$ 满足 $\frac1p+\frac1{p'}=1$, 若 $f \in L^p(E), g \in L^{p'}(E)$ , 则有
$$
\|f g\|_1 \le\|f\|_p \cdot\|g\|_{p'}, \quad 1 \le p \le+\infty,
$$


( $p=+\infty$ 即 $p'=1$ 时类似)

**证明.** 当 $p$ 或 $p'$ 之一为 $\infty$ 时, 显然成立.

当 $\|f\|_p=0$ 或 $\|g\|_{p'}=0$ 时, 有 $f(x) g(x)=0 , a.e. x \in E$ , 也显然成立.

当 $\|f\|_p>0,\|g\|_{p'}>0$ , 且 $p, p'<+\infty$ 时, 则在公式 $a^{1 / p} b^{1 / p'} \le \frac{a}p+\frac{b}{p'}, \quad a>0, b>0$ 中, 令
$$
a=\frac{|f(x)|^p}{\|f\|_p^p}, \quad b=\frac{|g(x)|^{p'}}{\|g\|_{p'}^{p'}},
$$


可知

$$
\frac{|f(x) g(x)|}{\|f\|_p \cdot\|g\|_{p'}} \le \frac1p \cdot \frac{|f(x)|^p}{\|f\|_p^p}+\frac1{p'} \cdot \frac{|g(x)|^{p'}}{\|g\|_{p'}^{p'}} .
$$

将上式作积分, 即得 $\|f g\|_1 \le\|f\|_p \cdot\|g\|_{p'}$ .



**定理 6.3 (Minkowski 不等式)** 若 $f, g \in L^p(E)(1 \le p \le \infty)$ , 则
$$
\|f+g\|_p \le\|f\|_p+\|g\|_p
$$

**证明.** 当 $p=1$ 时, 显然成立; 当 $p=\infty$ 时, 因为
$$
|f(x)| \le\|f\|_\infty, a.e. x \in E, \quad|g(x)| \le\|g\|_\infty, \quad a.e. x \in E,
$$


所以有

$$
|f(x)+g(x)| \le\|f\|_\infty+\|g\|_\infty, \quad a.e. x \in E .
$$

从而可知 $\|f+g\|_\infty \le\|f\|_\infty+\|g\|_\infty$ 成立.

当 $1<p<+\infty$ 时, 我们有
$$
\begin{aligned}
\int_E|f(x)+g(x)|^p ~d x &\le \int_E|f(x)+g(x)|^{p-1} \cdot|f(x)+g(x)|~dx \\
& \le \int_E|f(x)+g(x)|^{p-1} \cdot|f(x)|~dx +\int_E|f(x)+g(x)|^{p-1} \cdot|g(x)|~dx .
\end{aligned}
$$


用 Hölder 不等式于上式右端第一个积分, 对 $|f(x)+g(x)|^{p-1}$ 与 $|f(x)|$ 分别配指标 $p'=p /(p-1)$ 与 $p$ , 可得

$$
\int_E|f(x)+g(x)|^{p-1} \cdot|f(x)|~dx \le\|f+g\|_p^{p-1} \cdot\|f\|_p \text {; }
$$


同理, 对于前式右端第二个积分也可得

$$
\int|f(x)+g(x)|^{p-1} \cdot|g(x)|~dx \le\|f+g\|_p^{p-1} \cdot\|g\|_p \text {. }
$$


将上面两式代人前式, 即有

$$
\|f+g\|_p^p \le\|f+g\|_p^{p-1} \cdot\left(\|f\|_p+\|g\|_p\right) .
$$


不妨设 $\|f+g\|_p \neq 0$ , 于是在上式两端用 $\|f+g\|_p^{p-1}$ 除之, 得 $\|f+g\|_p \le\|f\|_p+\|g\|_p .$


若 $\|f+g\|_p=0$ , 原式显然成立.