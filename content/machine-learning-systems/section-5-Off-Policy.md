# Section 5: Advanced Policy Gradients

## 1 KL Divergence

The Kullback-Leibler divergence is a very widely used probability distribution divergence measure in machine learning and RL. Given two distributions $p(x)$ and $q(x)$ over a space $\mathcal{X}$,

$$
D_{\mathrm{KL}}(p \| q)=\mathbb{E}_{x \sim p}[\log p(x)-\log q(x)] .
$$

i.e., KL divergence is measured as a difference in log probabilities taken under expectation over the first distribution. KL divergence is always $\ge 0$.

**Lemma.** when $\delta\to 0$,  $D_{\mathrm{KL}}\left(p_\theta \| p_{\theta+\delta}\right) \approx \frac12 \delta^T F(\theta) \delta$ , where $F(\theta)=\mathbb{E}_{x \sim p_\theta} \nabla_\theta \log p_\theta(x) \nabla_\theta \log p_\theta(x)^T$ is called the Fisher information matrix.

**Proof.**
$$
\begin{aligned}
D_{\mathrm{KL}}\left(p_\theta \| p_{\theta+\delta}\right) & =\mathbb{E}_{x \sim p_\theta}\left[\log p_\theta(x)-\log p_{\theta+\delta}(x)\right] \\
& \approx \mathbb{E}_{x \sim p_\theta}\left[\log p_\theta(x)-\left(\log p_\theta(x)+\delta^T \nabla_\theta \log p_\theta(x)+\frac12 \delta^T \nabla_\theta^2 \log p_\theta(x) \delta\right)\right] \\
% & =\mathbb{E}_{x \sim p_\theta}\left[-\delta^T \nabla_\theta \log p_\theta(x)-\frac12 \delta^T \nabla_\theta^2 \log p_\theta(x) \delta\right] \\
& =-\delta^T \mathbb{E}_{x \sim p_\theta}\left[\nabla_\theta \log p_\theta(x)\right]-\frac12 \mathbb{E}_{x \sim p_\theta}\left[\delta^T \nabla_\theta^2 \log p_\theta(x) \delta\right] \\
\end{aligned}
$$

- Term 1.
  $$
  \begin{aligned}
  \mathbb{E}_{x \sim p_\theta}\left[\nabla_\theta \log p_\theta(x)\right]
  & = \int p_\theta(x) \nabla_\theta \log p_\theta(x) \mathrm{d} x
  = \int p_\theta(x) \frac{\nabla_\theta p_\theta(x)}{p_\theta(x)} \mathrm{d} x \\
  & = \int \nabla_\theta p_\theta(x) \mathrm{d} x = \nabla_\theta \int p_\theta(x) \mathrm{d} x = \nabla_\theta(1) = 0
  \end{aligned}
  $$

- Term 2.
  $$
  \begin{aligned}
  \mathbb{E}_{x \sim p_\theta}\left[\delta^T \nabla_\theta^2 \log p_\theta(x) \delta\right]
  &= \mathbb{E}_{x \sim p_\theta}\left[\delta^T \nabla_\theta\left(\nabla_\theta \log p_\theta(x)\right) \delta\right] = \mathbb{E}_{x \sim p_\theta}\left[\delta^T \nabla_\theta \frac{\nabla_\theta p_\theta(x)}{p_\theta(x)} \delta\right] \\
  &= \mathbb{E}_{x \sim p_\theta}\left[\delta^T\left(\frac{\nabla_\theta^2 p_\theta(x)}{p_\theta(x)}-\frac{\nabla_\theta p_\theta(x) \nabla_\theta p_\theta(x)^T}{p_\theta(x)^2}\right) \delta\right] \\
  & = \delta^T\left(\mathbb{E}_{x \sim p_\theta}\left[\frac{\nabla_\theta^2 p_\theta(x)}{p_\theta(x)}\right]-\mathbb{E}_{x \sim p_\theta}\left[\frac{\nabla_\theta p_\theta(x) \nabla_\theta p_\theta(x)^T}{p_\theta(x)^2}\right]\right) \delta \\
  & = \delta^T\left(\int \nabla_\theta^2 p_\theta(x) \mathrm{d} x - \int \frac{\nabla_\theta p_\theta(x) \nabla_\theta p_\theta(x)^T}{p_\theta(x)} \mathrm{d} x\right) \delta \\
  & = \delta^T\left(\nabla_\theta^2 \int p_\theta(x) \mathrm{d} x - \int\left(p_\theta(x) \nabla_\theta \log p_\theta(x)\right)\left(\nabla_\theta \log p_\theta(x)\right)^T \mathrm{~d} x\right) \delta \\
  & = \delta^T\left(\nabla_\theta^2(1)-\mathbb{E}_{x \sim p_\theta} \nabla_\theta \log p_\theta(x) \nabla_\theta \log p_\theta(x)^T\right) \delta = - \delta^T F(\theta) \delta\end{aligned}
  $$



## 2 The Off-Policy Policy Gradient

The remainder of this section note will be structured as follows. We will start from the vanilla policy gradient and the REINFORCE algorithm from lectures 5/6, we will motivate why we would like to make REINFORCE more sample efficient, and then we will try to find ways to increase sample efficiency by using slightly off-policy data.

Recap: the REINFORCE Algorithm Recall our estimation for the policy gradient:

$$
\begin{aligned}
\nabla_\theta J(\theta) & =\mathbb{E}_{\pi_\theta} \sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta\left(a_t | s_t\right) \hat{A}_t^\pi \\
& \approx \frac1N \sum_{i=1}^N \sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta\left(a_t^i | s_t^i\right) \hat{A}_{i, t}^\pi
\end{aligned}
$$

Using this gradient expression to optimize $\pi_\theta$ yielded a very simple RL algorithm called REINFORCE:

**Algorithm 1.** REINFORCE

1. Sample trajectories $\left\{\tau^i\right\}_{i=1}^N$ by running $\pi_\theta\left(a_t | s_t\right)$.
2. $\nabla_\theta J(\theta) \approx \frac1N \sum_{i=1}^N \sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta\left(a_t^i | s_t^i\right) \hat{A}_{i, t}^\pi$.
3. $\theta \leftarrow \theta+\alpha \nabla_\theta J(\theta)$.

A goal in reinforcement learning is to train policies that optimize the RL objective well, but to also do so in a manner that is sample efficient, because for many problems we care about collecting samples can be expensive. It is easy to see how REINFORCE, at an intuitive level, is wasteful in the samples it collects; our estimate of the gradient in step 2 can only use samples collected from $\pi_\theta$, because the expectation in eq. 21 is over $\pi_\theta$. This means that when we take a single gradient step in step 3, for the next iteration we are forced to collect a brand new set of samples (and we often want to take many thousands of gradient steps). This issue is further exacerbated by the fact that our policy gradient estimate, eq. 22, is itself high variance. We studied how intelligently computing $\hat{A}_{i, t}^\pi$, such as by using discounting, baselines, causality, GAE, etc., can improve sample efficiency, but in practice even with these improvements many samples can still be needed to get sufficiently low-variance gradient estimates useful for learning.

It would be great from a sample efficiency perspective if our policy gradient estimate could use samples collected by previous policies. This would unlock access to all data collected by all previous policies, and more data intuitively should yield better gradient estimates. It turns out we can exactly compute a form of the policy gradient that leverages off-policy samples.

### 2.1 The Off-Policy Policy Gradient

The goal in computing the off-policy policy gradient will be to compute $\nabla_\theta J(\theta)=\nabla_\theta \mathbb{E}_{\tau \sim p_\theta(\tau)}[r(\tau)]$ using trajectories not sampled from $p_\theta(\tau)$, but from some other distribution $\bar{p}(\tau)$, despite the expectation in the RL objective being under $p_\theta(\tau) . \bar{p}(\tau)$ can for example represent the combined distribution of all previous policies, or even previous policies and some human demos. We will denote the "behavior" policy that collected $\bar{p}(\tau)$ as $\pi_\beta(a | s)$.

$$
\begin{aligned}
\nabla_\theta J(\theta) & =\nabla_\theta \mathbb{E}_{\tau \sim p_\theta(\tau)}[r(\tau)] \\
& =\nabla_\theta \int p_\theta(\tau) r(\tau) \mathrm{d} \tau \\
& =\nabla_\theta \int \frac{\bar{p}(\tau)}{\bar{p}(\tau)} p_\theta(\tau) r(\tau) \mathrm{d} \tau \\
& =\nabla_\theta \int \bar{p}(\tau) \frac{p_\theta(\tau)}{\bar{p}(\tau)} r(\tau) \mathrm{d} \tau \\
& =\nabla_\theta \mathbb{E}_{\tau \sim \bar{p}(\tau)}\left[\frac{p_\theta(\tau)}{\bar{p}(\tau)} r(\tau)\right]
\end{aligned}
$$

where we have just applied a trick called importance sampling (IS), with $\frac{p_\theta(\tau)}{\bar{p}(\tau)}$ being the IS weights. Expanding from eq. 26,

$$
\begin{aligned}
\nabla_\theta \int \bar{p}(\tau) \frac{p_\theta(\tau)}{\bar{p}(\tau)} r(\tau) \mathrm{d} \tau & =\int \nabla_\theta\left(\bar{p}(\tau) \frac{p_\theta(\tau)}{\bar{p}(\tau)} r(\tau)\right) \mathrm{d} \tau \\
& =\int \bar{p}(\tau) \frac{\nabla_\theta p_\theta(\tau)}{\bar{p}(\tau)} r(\tau) \mathrm{d} \tau \\
& =\mathbb{E}_{\tau \sim \bar{p}(\tau)} \frac{\nabla_\theta p_\theta(\tau)}{\bar{p}(\tau)} r(\tau)
\end{aligned}
$$

because only $p_\theta(\tau)$ depends on $\theta$.

$$
\mathbb{E}_{\tau \sim \bar{p}(\tau)} \frac{\nabla_\theta p_\theta(\tau)}{\bar{p}(\tau)} r(\tau)=\mathbb{E}_{\tau \sim \bar{p}(\tau)} \frac{p_\theta(\tau) \nabla_\theta \log p_\theta(\tau)}{\bar{p}(\tau)} r(\tau)
$$

applying the same log-derivative trick we used to derive the (vanilla) policy gradient.

$$
\begin{aligned}
\mathbb{E}_{\tau \sim \bar{p}(\tau)} \frac{p_\theta(\tau)}{\bar{p}(\tau)} \nabla_\theta \log p_\theta(\tau) r(\tau) & =\mathbb{E}_{\tau \sim \bar{p}(\tau)} \frac{p\left(s_0\right) \prod_{t=0}^{H-1} \pi_\theta\left(a_t | s_t\right) p\left(s_{t+1} | s_t, a_t\right)}{p\left(s_0\right) \prod_{t=0}^{H-1} \pi_\beta\left(a_t | s_t\right) p\left(s_{t+1} | s_t, a_t\right)} \nabla_\theta \log p_\theta(\tau) r(\tau) \\
& =\mathbb{E}_{\tau \sim \bar{p}(\tau)} \frac{\prod_{t=0}^{H-1} \pi_\theta\left(a_t | s_t\right)}{\prod_{t=0}^{H-1} \pi_\beta\left(a_t | s_t\right)} \nabla_\theta \log p_\theta(\tau) r(\tau)
\end{aligned}
$$

which, then expanding out $\nabla_\theta \log p_\theta(\tau) r(\tau)$ like we did for the vanilla PG gives us

$$
\nabla_\theta J(\theta)=\mathbb{E}_{\tau \sim \bar{p}(\tau)}\left(\frac{\prod_{t=0}^{H-1} \pi_\theta\left(a_t | s_t\right)}{\prod_{t=0}^{H-1} \pi_\beta\left(a_t | s_t\right)}\right)\left(\sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta\left(a_t | s_t\right)\right)\left(\sum_{t=0}^{H-1} r\left(s_t, a_t\right)\right)
$$
Note that this last expression is exactly the same as the on-policy policy gradient, except with an IS term on the left that is a product of probability ratios. Let's multiply out the three terms inside the expectation, applying the principle of causality.

$$
=\mathbb{E}_{\tau \sim \bar{p}(\tau)}\left[\sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta\left(a_t | s_t\right)\left(\prod_{t'=0}^t \frac{\pi_\theta\left(a_{t'} | s_{t'}\right)}{\pi_\beta\left(a_{t'} | s_{t'}\right)}\right)\left(\sum_{t'=t}^{H-1} r\left(s_{t'}, a_{t'}\right)\left(\prod_{t''=t+1}^{t'} \frac{\pi_\theta\left(a_{t''} | s_{t''}\right)}{\pi_\beta\left(a_{t''} | s_{t''}\right)}\right)\right)\right]
$$

This last step was a little tricky, so try to work out how multiplying out the terms results in this expression and how causality is applied (hint: first apply causality to the return-to-go term, then distribute in the IS term, split the product, then distribute again into the RTG term, then apply causality to the 2nd IS term).

Okay! We have now derived an exact expression for the off-policy policy gradient. Are we done? Unfortunately no. While we can derive from this an unbiased estimator for the off-policy policy gradient (by sampling from $\bar{p}(\tau)$ ), the variance of this estimator has blown up, now for a new reason: the importance-sampling weights are products of per-step ratios over the horizon $H$, and products like this can vary dramatically in magnitude across trajectories. Since these weights multiply the $\nabla_\theta \log \pi_\theta$ terms in the gradient expression, $\nabla_\theta \log \pi_\theta$ terms with very small weights are effectively "ignored" relative to the ones with larger weights, in effect decreasing the effective dataset size, blowing up the sample variance.

## 3 Off-Policy Policy Iteration, Instead of PG

\(\theta_{\text{old}}\) 表示固定的旧策略参数，\(\theta\) 表示待优化的新策略参数；采样分布及价值、优势函数以旧策略为基准。

Attempting to optimize the RL objective by computing (and taking gradient steps in the direction of) the off-policy policy gradient led to a gradient estimate, that while could consume off-policy samples, was very high variance. So towards finding our desired more sample efficient algorithm, we are now going to pursue a new direction: finding an off-policy policy iteration algorithm. Recall that a policy iteration algorithm is one that takes steps that guarantee improvement of the RL objective. As we will see, we will be able to write out a practical policy iteration algorithm that will look very similar to policy gradient.

We can think of the goal of policy iteration as finding a new set of parameters $\theta$ such that $J\left(\theta\right)-$ $J(\theta_{\text{old}})>0$. Recall the time-discounted form of the RL objective:

$$
J(\theta_{\text{old}})=\mathbb{E}_{\tau \sim p_{\theta_{\text{old}}}(\tau)} \sum_t \gamma^t r\left(s_t, a_t\right)
$$



设从时刻 \(t\) 开始的折扣回报为 r.v.  \[ G_t = \sum\limits_{k=t}^{H-1}\gamma^{k-t}r(s_k,a_k). \]

那么状态价值函数 \(V^{\pi_{\theta_{\text{old}}}}\) 定义为 $\boxed{V^{\pi_{\theta_{\text{old}}}}(s) = \mathbb E_{\pi_{\theta_{\text{old}}}} \left[ G_t\mid s_t=s \right].}$ 

动作价值函数 \(Q^{\pi_{\theta_{\text{old}}}}\) 定义为 $\boxed{Q^{\pi_{\theta_{\text{old}}}}(s,a) = \mathbb E_{\pi_{\theta_{\text{old}}}} \left[ G_t\mid s_t=s,\ a_t=a \right].}$ 

advantage \[ \boxed{ A^{\pi_{\theta_{\text{old}}}}(s,a) = Q^{\pi_{\theta_{\text{old}}}}(s,a)-V^{\pi_{\theta_{\text{old}}}}(s) } \]

它们也可以用 Bellman 形式表示：
\[
\begin{aligned}
Q^{\pi_{\theta_{\text{old}}}}(s,a) &= \mathbb E_{s'\sim p(\cdot|s,a)} \left[ r(s,a)+\gamma V^{\pi_{\theta_{\text{old}}}}(s') \right],  \\
V^{\pi_{\theta_{\text{old}}}}(s) &= \mathbb E_{a\sim\pi_{\theta_{\text{old}}}(\cdot|s)} \left[ Q^{\pi_{\theta_{\text{old}}}}(s,a) \right].
\end{aligned}
\]

**Lemma.** $\displaystyle \boxed{J\left(\theta\right)-J(\theta_{\text{old}}) = \mathbb{E}_{\tau \sim p_{\theta}(\tau)}\left[\sum_{t=0}^\infty \gamma^t A^{\pi_{\theta_{\text{old}}}}\left(s_t, a_t\right)\right]}$

**Proof.**
$$
\begin{aligned}
J\left(\theta\right)-J(\theta_{\text{old}})
&\xlongequal{\text{Equation 1.}} J\left(\theta\right)-\mathbb{E}_{s_0 \sim p\left(s_0\right)}\left[V^{\pi_{\theta_{\text{old}}}}\left(s_0\right)\right] \\
&\xlongequal{\text{Equation 2.}} J\left(\theta\right)-\mathbb{E}_{\tau \sim p_{\theta}(\tau)}\left[V^{\pi_{\theta_{\text{old}}}}\left(s_0\right)\right] \\
& =J\left(\theta\right)+\mathbb{E}_{\tau \sim p_{\theta}(\tau)}\left[\sum_{t=0}^\infty \gamma^t\left(\gamma V^{\pi_{\theta_{\text{old}}}}\left(s_{t+1}\right)-V^{\pi_{\theta_{\text{old}}}}\left(s_t\right)\right)\right] \\
& =\mathbb{E}_{\tau \sim p_{\theta}(\tau)}\left[\sum_{t=0}^\infty \gamma^t r\left(s_t, a_t\right)\right]+\mathbb{E}_{\tau \sim p_{\theta}(\tau)}\left[\sum_{t=0}^\infty \gamma^t\left(\gamma V^{\pi_{\theta_{\text{old}}}}\left(s_{t+1}\right)-V^{\pi_{\theta_{\text{old}}}}\left(s_t\right)\right)\right] \\
& =\mathbb{E}_{\tau \sim p_{\theta}(\tau)}\left[\sum_{t=0}^\infty \gamma^t\left(r\left(s_t, a_t\right)+\gamma V^{\pi_{\theta_{\text{old}}}}\left(s_{t+1}\right)-V^{\pi_{\theta_{\text{old}}}}\left(s_t\right)\right)\right] \\
& =\mathbb{E}_{\tau \sim p_{\theta}(\tau)}\left[\sum_{t=0}^\infty \gamma^t A^{\pi_{\theta_{\text{old}}}}\left(s_t, a_t\right)\right]
\end{aligned}
$$

Equation 1.
\[
\begin{aligned}
J(\theta_{\text{old}}) &= \mathbb E_{\tau\sim p_{\theta_{\text{old}}}(\tau)}\left[\sum_t\gamma^t r(s_t,a_t)\right]\\
&= \mathbb E_{s_0\sim p(s_0)} \left[ \mathbb E_{\tau\sim p_{\theta_{\text{old}}}(\tau| s_0)} \left[\sum_t\gamma^t r(s_t,a_t)\right] \right]
= \mathbb E_{s_0\sim p(s_0)} \left[ V^{\pi_{\theta_{\text{old}}}}(s_0) \right]
\end{aligned}
\]
Equation 2. 轨迹分布可写为 $p_{\theta}(\tau) = p(s_0)\prod\limits_{t=0}^\infty \pi_{\theta}(a_t| s_t)\, p(s_{t+1}| s_t,a_t).$ 因此
\[
\begin{aligned}
\mathbb E_{\tau\sim p_{\theta}(\tau)} \left[V^{\pi_{\theta_{\text{old}}}}(s_0)\right]
&= \sum_\tau p_{\theta}(\tau)V^{\pi_{\theta_{\text{old}}}}(s_0) = \sum_{s_0}p(s_0)V^{\pi_{\theta_{\text{old}}}}(s_0) \underbrace{ \sum_{a_0,s_1,\cdots} p_{\theta}(a_0,s_1,\cdots| s_0) }_{=1} \\
&= \mathbb E_{s_0\sim p(s_0)} \left[V^{\pi_{\theta_{\text{old}}}}(s_0)\right].
\end{aligned}
\]




As you might observe, the RHS in eq. 44 involves an expectation over trajectories sampled from the latest policy $\pi_{\theta}$. As per our plan, we will next find a lower bound whose expectation is over $\tau \sim p_{\theta_{\text{old}}}(\tau)$, which can allow us to use off-policy samples to optimize $\theta$ (the "off"-policy in question being $\pi_{\theta_{\text{old}}}$ ). First, let's change the expectation in eq. 44 to be a composition of expectations over states and actions:

$$
\begin{aligned}
\mathbb{E}_{\tau \sim p_{\theta}(\tau)}\left[\sum_{t=0}^\infty \gamma^t A^{\pi_{\theta_{\text{old}}}}\left(s_t, a_t\right)\right] & =\sum_{t=0}^\infty \mathbb{E}_{\tau \sim p_{\theta}(\tau)}\left[\gamma^t A^{\pi_{\theta_{\text{old}}}}\left(s_t, a_t\right)\right] \\
& =\sum_{t=0}^\infty \mathbb{E}_{s_t \sim p_{\theta}\left(s_t\right)}\left[\mathbb{E}_{a_t \sim \pi_{\theta}\left(a_t | s_t\right)}\left[\gamma^t A^{\pi_{\theta_{\text{old}}}}\left(s_t, a_t\right)\right]\right] \\
& =\sum_{t=0}^\infty \mathbb{E}_{s_t \sim p_{\theta}\left(s_t\right)}\left[\mathbb{E}_{a_t \sim \pi_{\theta_{\text{old}}}\left(a_t | s_t\right)}\left[\frac{\pi_{\theta}\left(a_t | s_t\right)}{\pi_{\theta_{\text{old}}}\left(a_t | s_t\right)} \gamma^t A^{\pi_{\theta_{\text{old}}}}\left(s_t, a_t\right)\right]\right]
\end{aligned}
$$

where in eq. 45 we used the linearity of expectations, in eq. 46 we used the fact that although the expectation was originally over trajectories, the term inside the expectation depended only on $s_t$ and $a_t$, and in eq. 47 we used importance sampling. The IS weight in eq. 47 is acceptable because it is a single probability ratio, instead of a variance-exploding product we saw before. The remaining step is to try to change the outer expectation to be over $p_{\theta_{\text{old}}}\left(s_t\right)$ by constructing a lower bound.

To begin constructing the lower bound, we will first prove the following claim: $p_{\theta_{\text{old}}}\left(s_t\right)$ is close to $p_{\theta}\left(s_t\right)$ when $\pi_{\theta_{\text{old}}}$ is close to $\pi_\theta$.





**Def. (Total Variational Divergence, TVD)** 设 \(P,Q\) 是同一空间上的两个概率分布. 标准的总变差距离定义为
\[
D_{\mathrm{TV}}(P,Q) = \sup_A|P(A)-Q(A)|.
\]

- 如果是离散分布, 概率质量函数为 \(p(x),q(x)\) , 则 \[ D_{\mathrm{TV}}(P,Q) = \frac12\sum_x |p(x)-q(x)|. \]
- 如果有概率密度, 则 \[ D_{\mathrm{TV}}(P,Q) = \frac12\int |p(x)-q(x)|\,\mathrm~dx. \]

因此 \[ D_{\mathrm{TV}}(P,Q) = \frac12\|p-q\|_1. \]



**Def. (Coupling)** 给定两个分布 \(P_X\) 和 \(P_Y\), 一个 coupling 是一个联合分布 \[ \gamma(x,y)=\Pr(X=x,Y=y), \] 满足边缘分布分别是 \(P_X,P_Y\):
\[
\sum_y\gamma(x,y)=P_X(x), \qquad \sum_x\gamma(x,y)=P_Y(y).
\]
注意, Coupling 不唯一.



**Thm. (Coupling Inequality)** 对于任意 coupling \((X,Y)\), 都有 \[ D_{\mathrm{TV}}(P_X,P_Y) \le \Pr(X\neq Y). \]



**Thm. (Coupling lemma)** 如果 \[ D_{\mathrm{TV}}(P,Q)=\delta, \] 则存在一个 coupling \((X,Y)\), 使得 \[ X\sim P,\quad Y\sim Q, \] 并且
\[
P(X\neq Y)=\delta, \qquad P(X=Y)=1-\delta.
\]
更一般地, 如果 \(D_{\mathrm{TV}}(P,Q)\le\epsilon\), 就存在 coupling 使 \[ P(X\neq Y)\le\epsilon. \]

**Proof.** (1) 以离散情形为例, 定义 \[ r(z)=\min\{p(z),q(z)\}. \]
$$
 \begin{aligned}
 \sum_z r(z) &=\sum_z\min\{p(z),q(z)\}
 =\frac12\sum_z\bigl(p(z)+q(z)-|p(z)-q(z)|\bigr)\\ &=1-\frac12\sum_z|p(z)-q(z)| =1-D_{\mathrm{TV}}(P,Q) =1-\delta.
 \end{aligned}
$$
因此可以这样构造 \((X,Y)\) , 先引入随机变量 \(B\sim\operatorname{Bernoulli}(\delta)\).

- 若 \(B=0\), 则按照 \[ P(Z=z| B=0)=\frac{r(z)}{1-\delta} \] 采样 \(Z\), 然后令 \(X=Y=Z\).

- 若 \(B=1\), 则独立地按照
  \[
  P(X=z| B=1)=\frac{p(z)-r(z)}\delta, \qquad P(Y=z| B=1)=\frac{q(z)-r(z)}\delta
  \]
   采样 \(X,Y\).

检查 \(X\) 的边缘分布: $P(X=z) =(1-\delta)\frac{r(z)}{1-\delta} +\delta\frac{p(z)-r(z)}\delta=p(z).$

同理, \(Y\sim Q\). 并且
$$
\begin{aligned}
P(X = Y | B = 1)
&= \sum_z P(X = z | B = 1 ) P(Y = z | B = 1) \\
&= \sum_z \frac{p(z) - r(z)}\delta \cdot \frac{q(z) - r(z)}\delta \xlongequal{\text{必有 $p(z) = r(z)$ 或者 $q(z) = r(z)$}} \sum_z 0 = 0
\end{aligned}
$$
因此 $P(X = Y) = 1 - \delta$

(2) 当 \(D_{\mathrm{TV}}(P,Q)\le \epsilon\) 时, 令 \[ \delta=D_{\mathrm{TV}}(P,Q), \] 按照上述构造即可得到 \[ P(X\neq Y)=\delta\le\epsilon. \]



**Claim.** $\sup_s D_{\mathrm{TV}}\!\left( \pi_{\theta_{\text{old}}}(\cdot| s),\pi_{\theta}(\cdot| s) \right)\le \epsilon \quad\implies\quad D_{\mathrm{TV}}\!\left(p_{\theta_{\text{old}}}^t,p_{\theta}^t\right) \le 1-(1-\epsilon)^t \le t\epsilon .$

**Proof.** 希望构造两个 agent 轨迹分布 : $(S_0,A_0,S_1,\cdots)$ 和 $(S'_0,A'_0,S'_1,\cdots)$ 拥有相同的初始状态: \[ S_0=S'_0\] , 并且 $P(S_t\neq S'_t) \le t\varepsilon$ ,    这样根据 coupling inequation 有 $D_{\mathrm{TV}}(p_{\theta_{\text{old}}}^t,p_{\theta}^t) \le t\epsilon.$

注意 : 这两条轨迹不独立, 可以人为构造相关性.

假设在第 \(k\) 步之前两条轨迹仍然相同, 即 \(S_k=S'_k=s\). 根据 coupling lemma, 可以联合采样 \[ A_k\sim\pi_{\theta_{\text{old}}}(\cdot| s), \quad A'_k\sim\pi_{\theta}(\cdot| s), \] 使得 \[ P(A_k\neq A'_k| S_k=S'_k) \le\epsilon. \]

如果 \(A_k=A'_k\) , 从而可以令 \[ S_{k+1}=S'_{k+1}. \]

令 \(E_t\) 表示前 \(t\) 次决策都一样. 每一步在尚未分开的条件下, 继续匹配的概率至少是 \(1-\epsilon\), 所以
\[
P(E_t) = \prod_{k=0}^{t-1} P(\text{第 }k\text{ 步匹配}|\text{此前都匹配}) \ge (1-\epsilon)^t.
\]
所以 \[ P(S_t\neq S'_t) \le \Pr(E_t^c) \le 1-(1-\epsilon)^t \le t\varepsilon \]





First note the following:

$$
\begin{aligned}
\mathbb{E}_{p_{\theta}\left(s_t\right)}\left[f\left(s_t\right)\right] & =\sum_{s_t} p_{\theta}\left(s_t\right) f\left(s_t\right) \\
& =\sum_{s_t} p_{\theta_{\text{old}}}\left(s_t\right) f\left(s_t\right)+\sum_{s_t}\left(p_{\theta}\left(s_t\right)-p_{\theta_{\text{old}}}\left(s_t\right)\right) f\left(s_t\right) \\
& \ge \sum_{s_t} p_{\theta_{\text{old}}}\left(s_t\right) f\left(s_t\right)-\left|\sum_{s_t}\left(p_{\theta}\left(s_t\right)-p_{\theta_{\text{old}}}\left(s_t\right)\right) f\left(s_t\right)\right| \\
& \ge \sum_{s_t} p_{\theta_{\text{old}}}\left(s_t\right) f\left(s_t\right)-\sum_{s_t}\left|p_{\theta}\left(s_t\right)-p_{\theta_{\text{old}}}\left(s_t\right)\right|\left|f\left(s_t\right)\right| \\
& \ge \sum_{s_t} p_{\theta_{\text{old}}}\left(s_t\right) f\left(s_t\right)-\left(\max _{s_t}\left|f\left(s_t\right)\right|\right) \sum_{s_t}\left|p_{\theta}\left(s_t\right)-p_{\theta_{\text{old}}}\left(s_t\right)\right| \\
& =\mathbb{E}_{p_{\theta_{\text{old}}}\left(s_t\right)}\left[f\left(s_t\right)\right]-\left(\max _{s_t}\left|f\left(s_t\right)\right|\right)\left\|p_{\theta}(s_t) - p_{\theta_{\text{old}}}(s_t)\right\|_1
\end{aligned}
$$

Therefore, according to the Claim, when $\sup_s D_{\mathrm{TV}}\!\left( \pi_{\theta_{\text{old}}}(\cdot| s),\pi_{\theta}(\cdot| s) \right)\le \epsilon$ , then

$$
\mathbb{E}_{p_{\theta}\left(s_t\right)}\left[f\left(s_t\right)\right] \ge \mathbb{E}_{p_{\theta_{\text{old}}}\left(s_t\right)}\left[f\left(s_t\right)\right]-2 \epsilon t\left(\max _{s_t}\left|f\left(s_t\right)\right|\right)
$$

Now we can directly use this to get the bound for $J\left(\theta\right)-J(\theta_{\text{old}})$ :

Denote
$$
\begin{aligned}
f_t(s_t) &:= \mathbb E_{a_t\sim\pi_{\theta_{\text{old}}}(\cdot|s_t)} \left[ \frac{\pi_{\theta}(a_t|s_t)}     {\pi_{\theta_{\text{old}}}(a_t|s_t)} \gamma^t A^{\pi_{\theta_{\text{old}}}}(s_t,a_t) \right] \\
&= \sum_{a_t} \pi_{\theta_{\text{old}}}(a_t|s_t) \frac{\pi_{\theta}(a_t|s_t)}{\pi_{\theta_{\text{old}}}(a_t|s_t)} \gamma^t A^{\pi_{\theta_{\text{old}}}}(s_t,a_t) \\
&= \gamma^t \sum_{a_t} \pi_{\theta}(a_t|s_t) A^{\pi_{\theta_{\text{old}}}}(s_t,a_t) \\
&= \gamma^t \mathbb E_{a_t\sim\pi_{\theta}(\cdot|s_t)} \left[ A^{\pi_{\theta_{\text{old}}}}(s_t,a_t) \right]
\end{aligned}
$$

$$
J\left(\theta\right)-J(\theta_{\text{old}}) =
\sum_t \mathbb{E}_{s_t \sim p_{\theta}\left(s_t\right)} [f_t(s_t)] \ge \sum_t \mathbb{E}_{s_t \sim p_{\theta_{\text{old}}}\left(s_t\right)} [f_t(s_t)] - \sum_t 2 \epsilon t C
$$

where $C := \max_t\max_{s_t}|f_t(s_t)|.$ 

假设 \[ |r(s,a)|\leq r_{\max}, \] 而一条轨迹最多有 \(H\) 步。
\[
\left| \sum_{k=t}^{H-1}\gamma^{k-t}r_k \right| \leq r_{\max}\sum_{j=0}^{H-t-1}\gamma^j \leq (H-t)r_{\max} \leq Hr_{\max}.
\]
因此 \[ |Q^{\pi_{\theta_{\text{old}}}}(s,a)|\leq Hr_{\max} \] 并且 \[ |V^{\pi_{\theta_{\text{old}}}}(s)|\leq Hr_{\max}. \]

由 \[ A^{\pi_{\theta_{\text{old}}}}(s,a) = Q^{\pi_{\theta_{\text{old}}}}(s,a)-V^{\pi_{\theta_{\text{old}}}}(s) \] 得到 $|A^{\pi_{\theta_{\text{old}}}}(s,a)| \leq |Q^{\pi_{\theta_{\text{old}}}}(s,a)| + |V^{\pi_{\theta_{\text{old}}}}(s)| \leq 2Hr_{\max}.$ 于是 \[ |f_t(s_t)| \leq 2Hr_{\max}, \] 

从而 $C\leq 2Hr_{\max}=O(Hr_{\max})$ 得到 
$$
J\left(\theta\right)-J(\theta_{\text{old}}) \ge \sum_t \mathbb{E}_{s_t \sim p_{\theta_{\text{old}}}\left(s_t\right)}\left[f_t(s_t)\right]-\sum_t 2 \epsilon t O\left(H r_{\text {max }}\right)
$$

With this, our objective becomes:

$$
\theta \leftarrow \underset{\theta}{\arg \max } \sum_t \mathbb{E}_{s_t \sim p_{\theta_{\text{old}}}\left(s_t\right)}\left[\mathbb{E}_{a_t \sim \pi_{\theta_{\text{old}}}\left(a_t | s_t\right)}\left[\frac{\pi_{\theta}\left(a_t | s_t\right)}{\pi_{\theta_{\text{old}}}\left(a_t | s_t\right)} \gamma^t A^{\pi_{\theta_{\text{old}}}}\left(s_t, a_t\right)\right]\right]
$$
subject to the constraint $\left|\pi_{\theta}\left(a_t | s_t\right)-\pi_{\theta_{\text{old}}}\left(a_t | s_t\right)\right| \le \epsilon$





Now remember from section 1 that we generally like to work with KL divergences due to their many nice properties. Indeed in this case as well, we would like to re-write this TVD constraint as a KL constraint, because it will make subsequent constrained optimization easier. There is a known relationship between KL divergences and TVDs that we can exploit for this, namely that
$$
\left|p_{\mathcal{A}}-p_{\mathcal{B}}\right| \le \sqrt{\frac12 D_{\mathrm{KL}}\left(p_{\mathcal{A}} \| p_{\mathcal{B}}\right)}
$$

So if we constrain KL, we will be constraining an upper bound on TVD, meaning we can simply swap our TVD constraint for a KL constraint. This gives us the following constrained optimization problem:

$$
\theta \leftarrow \underset{\theta}{\arg \max } \sum_t \mathbb{E}_{s_t \sim p_{\theta_{\text{old}}}\left(s_t\right)}\left[\mathbb{E}_{a_t \sim \pi_{\theta_{\text{old}}}\left(a_t | s_t\right)}\left[\frac{\pi_{\theta}\left(a_t | s_t\right)}{\pi_{\theta_{\text{old}}}\left(a_t | s_t\right)} \gamma^t A^{\pi_{\theta_{\text{old}}}}\left(s_t, a_t\right)\right]\right]
$$

subject to the constraint

$$
D_{\mathrm{KL}}\left(\pi_{\theta}\left(a_t | s_t\right) \| \pi_{\theta_{\text{old}}}\left(a_t | s_t\right)\right) \le \epsilon
$$







## Optimize

### Method in [TRPO paper](https://arxiv.org/pdf/1502.05477)

假设本轮旧参数是 \(\theta_{\mathrm{old}}\)，采样得到的目标记作
$$
\hat J(\theta) = \frac1N\sum_{n=1}^{N} \underbrace{ \frac{\pi_\theta(a_n\mid s_n)} {\pi_{\theta_{\mathrm{old}}}(a_n\mid s_n)} }_{\text{重要性采样比率}} \underbrace{\hat A_n}_{\text{旧策略的优势估计}}
$$
其中 \[ \hat A_n = \hat Q_{\mathrm{old}}(s_n,a_n) - \hat V_{\mathrm{old}}(s_n). \]

平均 KL 记作 \[ \hat D(\theta) = \frac1N\sum\limits_{n=1}^{N} D_{\mathrm{KL}} \bigl( \pi_{\mathrm{old}}(\cdot\mid s_n) \| \pi_\theta(\cdot\mid s_n) \bigr). \] 需要求解
$$
\begin{aligned} \underset{\theta}{\operatorname{maximize}}\quad &\hat J(\theta)\\ \text{subject to}\quad &\hat D(\theta)\le\delta. \end{aligned}
$$
令 \[ \Delta\theta=\theta-\theta_{\mathrm{old}}. \] 对目标做一阶近似 \[ \hat J(\theta_{\mathrm{old}}+\Delta\theta) \approx \hat J(\theta_{\mathrm{old}}) + g^\top\Delta\theta, \] 其中 $g= \left. \nabla_\theta\hat J(\theta) \right|_{\theta=\theta_{\mathrm{old}}}.$

根据笔记最开始, $\hat D(\theta_{\mathrm{old}}+\Delta\theta) \approx \frac12\Delta\theta^\top F\Delta\theta,$ 其中 $F= \left. \nabla_\theta^2\hat D(\theta) \right|_{\theta=\theta_{\mathrm{old}}}.$ 于是局部问题变成
$$
\begin{aligned} 
\underset{\Delta\theta}{\operatorname{maximize}}\quad
&g^\top\Delta\theta\\
\text{subject to}\quad &\frac12\Delta\theta^\top F\Delta\theta\le\delta. 
\end{aligned}
$$

现在求解这个优化问题, 构造拉格朗日函数 \[ \mathcal L(\Delta\theta,\lambda) = g^\top\Delta\theta - \lambda \left( \frac12\Delta\theta^\top F\Delta\theta-\delta \right). \]

对更新向量求导 \[ g-\lambda F\Delta\theta=0. \] 因此搜索方向为 $x = F^{-1}g$

初始步长在边界 $\frac12\Delta\theta^\top F\Delta\theta = \delta$ 上面, 算出 $\Delta\theta_{\mathrm{full}} = \sqrt{\frac{2\delta}{x^\top Fx}}\,x = \sqrt{ \frac{2\delta}{g^\top F^{-1}g} } F^{-1}g.$

**算法.** 

1. 固定旧策略 \(\theta_{\mathrm{old}}\)，用它生成轨迹。估计 advantage \(\hat A_n\)。这些数在本轮策略优化中固定。

   > advantage 计算的几种方式, 假设轨迹是 $s_0, a_0, s_1, a_1, \cdots$ 以及 $Q(s_t, a_t) = \sum_{t'=0}^T \gamma^{t'} r_{t'}$
   >
   > 1. 无 critic 网络, 则用 $Q(s_t, a_t)$ 作为 advantage.
   > 2. 有 critic 网络 $V_\phi$, 但是不用 GAE, 则用 $Q(s_t, a_t) - V_\phi(s_t)$ 作为 advantage.
   > 3. 有 critic 网络 $V_\phi$, 用 GAE, 则用 $r_t + \gamma V_\phi(s_{t + 1}) - V_\phi(s_t)$ 作为 advantage.

2. 构造目标 \[ \hat J(\theta) = \frac1N\sum_n \frac{\pi_\theta(a_n\mid s_n)} {\pi_{\mathrm{old}}(a_n\mid s_n)} \hat A_n. \]

   在旧参数处 \[ g= \left.\nabla_\theta\hat J(\theta)\right|_{\theta_{\mathrm{old}}} = \frac1N\sum_n \hat A_n \nabla_\theta\log\pi_{\mathrm{old}}(a_n\mid s_n). \]

3. 用 CG 近似求解 \[ Fx=g \]. CG 算法不需要显示计算 $F$ , 而是通过 $v \mapsto Fv$ 迭代估计.
   $$
   Fv= \left. \nabla_\theta \left[ \bigl(\nabla_\theta\hat D(\theta)\bigr)^\top v \right] \right|_{\theta=\theta_{\mathrm{old}}}.
   $$

   ```python
   def kl_fn():
       return kl_divergence(old_dist, self(obs)).mean()
   
   def flat_grad(value, create_graph=False):
       # 将各参数张量的梯度拼接，顺序与参数向量一致。
       grads = torch.autograd.grad(value, params, create_graph=create_graph)
       return torch.cat([g.reshape(-1) for g in grads])
   
   def fvp(v):
       # create_graph=True 保留第一次求导的图，才能继续求二阶导数。
       kl_grad = flat_grad(kl_fn(), create_graph=True)
       return flat_grad(torch.dot(kl_grad, v)).detach()
   ```

4. 再计算 \[ \Delta\theta_{\mathrm{full}} = \sqrt{\frac{2\delta}{x^\top Fx}}\,x \] 作为起点,  线搜索并接受更新。然后把接受的参数作为下一轮旧参数。



### Method in PPO paper

Denote
$$
L\left(\theta, \lambda\right)=\sum_t \mathbb{E}_{s_t \sim p_{\theta_{\text{old}}}\left(s_t\right)}\left[\mathbb{E}_{a_t \sim \pi_{\theta_{\text{old}}}\left(a_t \mid s_t\right)}\left[\frac{\pi_{\theta}\left(a_t \mid s_t\right)}{\pi_{\theta_{\text{old}}}\left(a_t \mid s_t\right)} \gamma^t A^{\pi_{\theta_{\text{old}}}}\left(s_t, a_t\right)\right]\right]-\lambda\left(D_{\mathrm{KL}}\left(\pi_{\theta}\left(a_t \mid s_t\right) \| \pi_{\theta_{\text{old}}}\left(a_t \mid s_t\right)\right)-\epsilon\right)
$$
We will optimize this objective using something called dual gradient ascent/descent. In particular, we will alternate the following procedure:

**Algorithm 2.** Primal-dual update

1. $\theta \leftarrow \arg \max _{\theta} \mathcal{L}\left(\theta, \lambda\right)$
2. $\lambda \leftarrow \lambda+\alpha\left(D_{\mathrm{KL}}\left(\pi_{\theta}\left(a_t | s_t\right) \| \pi_{\theta_{\text{old}}}\left(a_t | s_t\right)\right)-\epsilon\right)$

where $\alpha$ is a learning rate for $\lambda$. In essence what this procedure is doing is optimizing $\theta$ to simultaneously maximize the original unconstrained objective and minimize the KL constraint to $\theta_{\text{old}}$, where the relative magnitude of these two losses is determined by $\lambda$. If the KL constraint is being violated significantly, i.e., if $D_{\mathrm{KL}}\left(\pi_{\theta}\left(a_t | s_t\right) \| \pi_{\theta_{\text{old}}}\left(a_t | s_t\right)\right)-\epsilon$ is large, then it is likely that $\lambda$ is too small, and the KL part of the loss is effectively being ignored with the model just optimizing the original unconstrained objective, and so the dual optimization step (step 2) increases the KL constraint weight $\lambda$. Similarly if the objective is being satisfied, $\lambda$ can be lowered. Dual gradient descent is an elegant way to turn general constrained optimization problems into amenable unconstrained optimization problems.

**Remark.** 从对偶函数的理解上述 Algorithm 2 的交替更新.

记 $\bar D_{\mathrm{KL}}(\theta,\theta_{\text{old}}) = \mathbb E_{s\sim p_{\theta_{\text{old}}}} \left[ D_{\mathrm{KL}} \left( \pi_{\theta}(\cdot|s) \| \pi_{\theta_{\text{old}}}(\cdot|s) \right) \right].$ 原问题是 
\[
\max_{\theta} S_{\theta_{\text{old}}}(\theta) \\
\text{subject to }  \bar D_{\mathrm{KL}}(\theta,\theta_{\text{old}})\leq\delta.
\]
定义拉格朗日函数 $L(\theta,\lambda) = \mathcal S_{\theta_{\text{old}}}(\theta) - \lambda \left(\bar D_{\mathrm{KL}}(\theta,\theta_{\text{old}})-\delta\right), \quad \lambda\geq0.$

则对偶函数是 $q(\lambda) = \max_{\theta} L(\theta,\lambda).$ 根据对偶函数的性质 $\min_{\lambda\geq0}q(\lambda) \ge \max_{\theta} S_{\theta_{\text{old}}}(\theta)$

我们下面选择优化 $q(\lambda)$ , 根据 Danskin 定理, 记  $\theta_\lambda = \arg\max_{\theta}\mathcal L(\theta,\lambda).$
$$
\frac{dq(\lambda)}{d\lambda} = \left. \frac{\partial L(\theta,\lambda)} {\partial\lambda} \right|_{\theta=\theta_\lambda} = \delta-\bar D_{\mathrm{KL}}(\theta_\lambda,\theta_{\text{old}}).
$$
因此梯度下降 : \[ \lambda \leftarrow \lambda-\alpha q'(\lambda) = \lambda+\alpha \left( \bar D_{\mathrm{KL}}(\theta,\theta_{\text{old}})-\delta \right). \]





