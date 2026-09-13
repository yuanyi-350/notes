**定义 (离散傅里叶变换).** 设有一个长度为 $N$ 的离散复数序列 $x[n]$, 其中 $n = 0, 1, \dots, N-1$. 其离散傅里叶变换 $X[k]$ 定义为:
$$
X[k] = \sum_{n=0}^{N-1} x[n] \omega_N^{kn}, \quad k = 0, 1, \dots, N-1
$$
其中 $\omega_N = e^{-i\frac{2\pi}N}$ . 直接计算的复杂度为 $O(N^2)$.

**算法.** 假设 $N = 2^m$ ($m$ 为正整数). 将原始序列 $x[n]$ 按照时间索引 $n$ 的奇偶性, 分解为两个长度为 $N/2$ 的子序列:

- 偶数序列 $x_e[r] = x[2r]$
- 奇数序列 $x_o[r] = x[2r+1]$

其中 $r = 0, 1, \dots, \frac{N}2-1$.

将这种分解代入 DFT 的定义式中,

$$
\begin{aligned}
X[k] &= \sum_{r=0}^{\frac{N}2-1} x[2r] \omega_N^{2rk} + \sum_{r=0}^{\frac{N}2-1} x[2r+1] \omega_N^{(2r+1)k} \\
&= \sum_{r=0}^{\frac{N}2-1} x_e[r] \omega_{N/2}^{rk} + \omega_N^k \sum_{r=0}^{\frac{N}2-1} x_o[r] \omega_{N/2}^{rk}
\end{aligned}
$$
记偶数序列 $x_e[r]$ 的 $N/2$ 点 DFT 为 $X_e[k]$ , 奇数序列 $x_o[r]$ 的 $N/2$ 点 DFT 为 $X_o[k]$. 因此
$$
X[k] = X_e[k] + \omega_N^k X_o[k], \quad k = 0, 1, \dots, \tfrac{N}2-1
$$
此时, $X_e[k]$ 和 $X_o[k]$ 的周期为 $N/2$, 即 $X_e[k + \frac{N}2] = X_e[k]$. 于是
$$
\begin{aligned}
X\left[k + \frac{N}2\right] &= X_e\left[k + \tfrac{N}2\right] + \omega_N^{k+\frac{N}2} X_o\left[k + \tfrac{N}2\right] \\
&= X_e[k] - \omega_N^k X_o[k]
\end{aligned}
$$
时间复杂度从严格的 $O(N^2)$ 降低至了 $O(N \log N)$.

```python
import numpy as np

def radix2_fft(x):
    x = np.asarray(x, dtype=complex)
    N = x.shape[0]

    if N <= 1:
        return x

    if N % 2 > 0:
        raise ValueError("输入序列的长度必须是 2 的整数次幂. ")

    x_even = radix2_fft(x[0::2])
    x_odd  = radix2_fft(x[1::2])

	k = np.arange(N // 2)
    W_N_k = np.exp(-2j * np.pi * k / N)

    X = np.zeros(N, dtype=complex)
    X[:N//2] = x_even + W_N_k * x_odd
    X[N//2:] = x_even - W_N_k * x_odd

    return X
```



**应用.** 求解系数矩阵为循环矩阵的线性方程组, 令
$$
L=\left(\begin{array}{cccc}
c_0 & c_{n-1} & \cdots & c_1 \\
c_1 & c_0 & \cdots & c_2 \\
\vdots & \vdots & & \vdots \\
c_{n-1} & c_{n-2} & \cdots & c_0
\end{array}\right),
$$

求解 $L x=b$ , 其中 $x=\left(x_0, x_1, \cdots, x_{n-1}\right)^{T}, b=\left(b_0, b_1, \cdots, b_{n-1}\right)^{T}$ .

首先推导 $L$ 的谱分解形式. 设 $\lambda$ 为 $L$ 的特征值,  $c= \left(c_0, c_1, \cdots, c_{n-1}\right)^{T}$ . 由 $L x=\lambda x$ , 亦即 $c * x=\lambda x$ , 两端作 DFT 得 $\hat{c} \circ \hat{x}=\lambda \hat{x}$ .

于是有 $\lambda_k=\hat{c}_k$ 为 $\hat{c}$ 第 $k$ 个分量, 相应的特征向量 $\hat{x}_j^{(k)} = \delta_{k j}= \begin{cases}1, & k=j \\ 0, & k \neq j\end{cases}$ ,


作逆变换得到

$$
\begin{aligned}
x^{(0)} &= (1,1, \cdots, 1)^{T} \\
x^{(1)} &= \left(1, \omega^{-1}, \cdots, \omega^{-(n-1)}\right)^{T}, \\
&\qquad \vdots \\
x^{(n-1)} &= \left(1, \omega^{-(n-1)}, \cdots, \omega^{-(n-1)^2}\right)^{T} .
\end{aligned}
$$

于是

$$
\begin{aligned}
L &= \left(x^{(0)}, x^{(1)}, \cdots, x^{(n-1)}\right)\left(\begin{array}{llll}
\lambda_0 & & & \\
& \lambda_1 & & \\
& & \ddots & \\
& & & \lambda_{n-1}
\end{array}\right)\left(x^{(0)}, x^{(1)}, \cdots, x^{(n-1)}\right)^{-1} \\
&= \left(n F^{-1}\right) \Lambda\left(n F^{-1}\right)^{-1}=F^{-1} \Lambda F .
\end{aligned}
$$


求解 $L x=b$ 等价于求解 $F^{-1} A F x=b$ , 即 $A(F x)=F b$ . 于是求解方程组可分为三步:

- 第一步: 求 $F b$ , 即求 $b$ 的 FFT, 得 $\hat{b}$ ;

- 第二步: 求 $A$ 即求 $c$ 的 FFT , 得 $\hat{c}$ ;

- 第三步: 求 $\hat{x}_k=\hat{b}_k / \hat{c}_k$ , 然后求 $(\hat{x})^{\vee}$ 即得 $x$ .
