# Section 3: Policy Gradients and Actor-Critic

- \(t\): 离散时间步, 取 \(0,1,2,\cdots\).
- \(\mathcal S\): 所有可能状态构成的集合. \(\mathcal A\): 所有可能动作构成的集合.
- \(S_t\): 时间 \(t\) 的随机状态.  \(A_t\): 时间 \(t\) 采取的随机动作. \(R_{t+1}\): 在状态 \(S_t\) 执行动作 \(A_t\) 后得到的奖励. 均为 r.v.
- 小写字母 \(s,a,s'\): 随机变量的具体取值, 其中 \(s'\) 表示下一个状态.

$$
S_t \xrightarrow[\quad R_{t + 1}\quad]{A_t } S_{t+1}
$$

策略定义为 $\pi(a| s) := \mathbb P(A_t=a| S_t=s).$





## 0 Bellman Equation

从时间 \(t\) 开始的折扣回报定义为 $\hat Q_t := R_{t+1} +\gamma R_{t+2} +\gamma^2R_{t+3} +\cdots.$

状态价值函数定义为 $\boxed{V^\pi(s) := \mathbb E_\pi[\hat Q_t| S_t=s].}$

其中:

- 上标 \(\pi\) 表示后续动作按照策略 \(\pi\) 选择.
- \(V^\pi(s)\) 表示: 从状态 \(s\) 出发并一直执行策略 \(\pi\), 预期能够得到多少折扣回报.

动作价值函数定义为 $\boxed{Q^\pi(s,a) := \mathbb E_\pi[\hat Q_t| S_t=s,A_t=a].}$

两者的区别是: $V^\pi(s) = \sum_{a\in\mathcal A} \pi(a| s)Q^\pi(s,a).$

即 \(V^\pi\) 对当前动作也取平均, 而 \(Q^\pi\) 固定了当前动作.

根据回报的定义, $\hat Q_t = R_{t+1} +\gamma \left( R_{t+2}+\gamma R_{t+3}+\cdots \right).$

括号中的部分正好是 \(\hat Q_{t+1}\), 因此 $\boxed{\hat Q_t=R_{t+1}+\gamma \hat Q_{t+1}}.$ 这是一条逐条轨迹都成立的代数恒等式.

现在在已知 \(S_t=s\) 的条件下取期望: \[ V^\pi(s) = \mathbb E_\pi[ R_{t+1}+\gamma \hat Q_{t+1} | S_t=s ]. \]

假设环境满足 Markov 性: 给定当前状态后, 未来不再依赖更早的历史. 于是下一时刻的预期回报可以用下一状态的价值表示:

\[ \mathbb E_\pi[\hat Q_{t+1}| S_{t+1}=s'] = V^\pi(s'). \]

因此得到 Bellman 期望方程: \[ \boxed{ V^\pi(s) = \mathbb E_\pi[ R_{t+1}+\gamma V^\pi(S_{t+1}) | S_t=s ]. } \]



**优势函数.** $\boxed{A^\pi(s,a) := Q^\pi(s,a) - V^\pi(s,a).}$ 由于 $V^\pi(s)$ 正是 $Q^\pi(s,\cdot)$ 在 $\pi$ 下的平均, 故 $\mathbb E_{a\sim\pi}[A^\pi(s,a)]=0$.






## 1 Policy Gradient and REINFORCE

The reinforcement learning objective is to learn a $\theta^*$ that maximizes the objective function:

$$
J(\theta)=\mathbb{E}_{\tau \sim p_\theta(\tau)}[r(\tau)]
$$

where each rollout $\tau$ is of length $H$, distributed as follows:

$$
p_\theta(\tau)=p\left(s_0, a_0, \cdots, s_{H-1}, a_{H-1}\right)=p\left(s_0\right) \pi_\theta\left(a_0 | s_0\right) \prod_{t=1}^{H-1} p\left(s_t | s_{t-1}, a_{t-1}\right) \pi_\theta\left(a_t | s_t\right),
$$

and

$$
r(\tau)=r\left(s_0, a_0, \cdots, s_{H-1}, a_{H-1}\right)=\sum_{t=0}^{H-1} r\left(s_t, a_t\right) .
$$

One straightforward approach to optimizing this objective is to directly take the gradient of $J(\theta)$ with respect to $\theta$ and perform gradient ascent. That is, we iteratively update $\theta$ using the following gradient:

$$
\nabla_\theta J(\theta)=\nabla_\theta \mathbb{E}_{\tau \sim p_\theta(\tau)}[r(\tau)] .
$$

But how do we compute this gradient in practice? Well, one might think that we can simply approximate the expectation with trajectory samples, as usual:

$$
\nabla_\theta J(\theta) \stackrel{?}{\approx} \nabla_\theta \frac1N \sum_{i=1}^N r\left(\tau^i\right),
$$

where $\tau^1, \cdots, \tau^N$ are sampled from $p_\theta(\tau)$. Unfortunately, this does not work. Do you see why? (Hint: Note that $\frac1N \sum_{i=1}^N r\left(\tau^i\right)$ is a constant with respect to $\theta$, so its gradient is 0 .) The main issue is that the distribution over trajectories $p_\theta(\tau)$ also depends on $\theta$, so we need to take that into account when taking the gradient.

The key idea behind policy gradients is to rewrite $\nabla_\theta J(\theta)$ as some expectation over trajectories $\tau$ (not the derivative of an expectation as in Equation (4)!), so that we can then do the usual sample-based approximation. That is, we want to fill in the question mark in the following equation:

$$
\nabla_\theta J(\theta)=\nabla_\theta \mathbb{E}_{\tau \sim p_\theta(\tau)}[r(\tau)]=\mathbb{E}_{\tau \sim p_\theta(\tau)}[ \boxed{\quad ?\quad } ]
$$

If we can fill in the box, then we can compute the right-hand side using samples of $\tau$ from $p_\theta(\tau)$ as usual, which doesn't suffer from the above issue because we don't have to take the gradient of an expectation.

The remaining task is to simply figure out what goes in the box. Let's first rewrite both sides as integrals:

$$
\begin{aligned}
(\mathrm{LHS}) & =\nabla_\theta \mathbb{E}_{\tau \sim p_\theta(\tau)}[r(\tau)] =\nabla_\theta \int p_\theta(\tau) r(\tau) d \tau =\int \nabla_\theta p_\theta(\tau) r(\tau) d \tau \\
(\mathrm{RHS}) & =\mathbb{E}_{\tau \sim p_\theta(\tau)} [ \boxed{\quad ?\quad } ]
=\int p_\theta(\tau) [ \boxed{\quad ?\quad } ]
\end{aligned}
$$
where we swapped the order of integration and differentiation in Equation (9) (which is valid under mild regularity conditions that we won't worry about in practice). Comparing Equation (9) and Equation (11), we see that we can fill in the box with

$$
\boxed{?=\frac{\nabla_\theta p_\theta(\tau)}{p_\theta(\tau)} r(\tau)=\nabla_\theta \log p_\theta(\tau) r(\tau) .}
$$

Using this result, we can approximate the $\nabla_\theta J(\theta)$ as follows:

$$
\begin{aligned}
\nabla_\theta J(\theta) & =\nabla_\theta \mathbb{E}_{\tau \sim p_\theta(\tau)}[r(\tau)] \\
& =\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\nabla_\theta \log p_\theta(\tau) r(\tau)\right] \\
& \approx \frac1N \sum_{i=1}^N \nabla_\theta \log p_\theta(\tau^i) r(\tau^i) \\
& =\frac1N \sum_{i=1}^N\left(\sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta(a_t^i | s_t^i)\right)\left(\sum_{t=0}^{H-1} r(s_t^i, a_t^i)\right),
\end{aligned}
$$

where $\tau^1, \cdots, \tau^N$ are sampled from $p_\theta(\tau)$. This is the vanilla policy gradient estimator, which serves as the basis for many policy gradient methods. The step of rewriting the policy gradient as an expectation (Equation (13) to Equation (14)) is often called the **REINFORCE trick**.



## 2 Variance Reduction

While Equation (16) gives us a mathematically correct way to compute an estimate of the policy gradient using samples, this estimator often has high variance, which can lead to slow learning and poor performance in practice. So in practice, we use various variance reduction techniques to improve the performance of policy gradient methods.

### 2.1 Reward-To-Go

One way to reduce the variance is to note that the policy cannot affect rewards in the past, so we can ignore those rewards when computing the policy gradient. That is, we can replace the sum of rewards in Equation (16) with the sum of rewards starting from time step $t$ :

$$
\begin{aligned}
\nabla_\theta J(\theta) 
&\approx \frac1N \sum_{i=1}^N \sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta\left(a_t^i | s_t^i\right)\left(\sum_{t'=t}^{H-1} r\left(s_{t'}^i, a_{t'}^i\right)\right) \\
&= \frac1N \sum_{i=1}^N \sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta\left(a_t^i | s_t^i\right) Q_t^i
\end{aligned}
$$

where the term $\boxed{\hat Q_t^i := \sum\limits_{t'=t}^{H-1} r(s_{t'}^i,a_{t'}^i)}$ is often called the "reward-to-go". This reduces variance simply because the rewardto-go consists of fewer terms than the full trajectory reward.

**Remark.** 这里的 $\hat{Q}_t$ 的定义和第 0 章的定义是等价的.



**Lemma.** This reward-to-go formulation is unbiased (i.e., mathematically correct). That is, we have the following equality:
$$
\begin{aligned}
\nabla_\theta J(\theta) & =\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\left(\sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta\left(a_t | s_t\right)\right)\hat Q_0\right] \\
& =\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta\left(a_t | s_t\right) \hat Q_t\right] .
\end{aligned}
$$

**Proof.** First, by comparing Equation (18) and Equation (19), note that it suffices to show that for any $t'<t$,
$$
\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\nabla_\theta \log \pi_\theta\left(a_t | s_t\right) r\left(s_{t'}, a_{t'}\right)\right]=0 .
$$
Let's define $\tau_{i, j}=\left(s_i, a_i, s_{i+1}, a_{i+1}, \cdots, s_j, a_j\right)$ for any $0 \le i \le j \le H-1$. Using this notation, we can rewrite the left-hand side as

$$
\begin{aligned}
& \quad \mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\nabla_\theta \log \pi_\theta\left(a_t | s_t\right) r\left(s_{t'}, a_{t'}\right)\right] \\
& =\mathbb{E}_{\tau_{0: t} \sim p_\theta\left(\tau_{0: t}\right)}\left[\nabla_\theta \log \pi_\theta\left(a_t | s_t\right) r\left(s_{t'}, a_{t'}\right)\right] \\
& =\mathbb{E}_{\tau_{0: t'} \sim p_\theta\left(\tau_{0: t'}\right)}\left[\mathbb{E}_{\tau_{t'+1: t} \sim p_\theta\left(\tau_{t'+1: t} | \tau_{0: t'}\right)}\left[\nabla_\theta \log \pi_\theta\left(a_t | s_t\right) r\left(s_{t'}, a_{t'}\right)\right]\right] \\
& \left.=\mathbb{E}_{\tau_{0: t'} \sim p_\theta\left(\tau_{0: t'}\right)}\left[r\left(s_{t'}, a_{t'}\right) \cdot \mathbb{E}_{\tau_{t'+1: t} \sim p_\theta\left(\tau_{t'+1: t} | \tau_{0: t'}\right)} | \nabla_\theta \log \pi_\theta\left(a_t | s_t\right)\right]\right] \\
& =\mathbb{E}_{\tau_{0: t'} \sim p_\theta\left(\tau_{0: t'}\right)}\left[r\left(s_{t'}, a_{t'}\right) \cdot \mathbb{E}_{s_t \sim p_\theta\left(s_t | \tau_{0: t'}\right)}\left[\mathbb{E}_{a_t \sim \pi_\theta\left(a_t | s_t\right)}\left[\nabla_\theta \log \pi_\theta\left(a_t | s_t\right)\right]\right]\right] \\
& =\mathbb{E}_{\tau_{0: t'} \sim p_\theta\left(\tau_{0: t'}\right)}\left[r\left(s_{t'}, a_{t'}\right) \cdot \mathbb{E}_{s_t \sim p_\theta\left(s_t | \tau_{0: t'}\right)}\left[\int \pi_\theta\left(a_t | s_t\right) \nabla_\theta \log \pi_\theta\left(a_t | s_t\right) d a_t\right]\right] \\
& =\mathbb{E}_{\tau_{0: t'} \sim p_\theta\left(\tau_{0: t'}\right)}\left[r\left(s_{t'}, a_{t'}\right) \cdot \mathbb{E}_{s_t \sim p_\theta\left(s_t | \tau_{0: t'}\right)}\left[\int \nabla_\theta \pi_\theta\left(a_t | s_t\right) d a_t\right]\right] \\
& =\mathbb{E}_{\tau_{0: t'} \sim p_\theta\left(\tau_{0: t'}\right)}\left[r\left(s_{t'}, a_{t'}\right) \cdot \mathbb{E}_{s_t \sim p_\theta\left(s_t | \tau_{0: t'}\right)}\left[\nabla_\theta \int \pi_\theta\left(a_t | s_t\right) d a_t\right]\right] \\
& =\mathbb{E}_{\tau_{0: t'} \sim p_\theta\left(\tau_{0: t'}\right)}\left[r\left(s_{t'}, a_{t'}\right) \cdot \mathbb{E}_{s_t \sim p_\theta\left(s_t | \tau_{0: t'}\right)}\left[\nabla_\theta 1\right]\right] =0 .
\end{aligned}
$$

This completes the proof.

### 2.2 Baseline

We can further reduce the variance of the policy gradient by introducing a baseline, which is a constant $b$ that we subtract from the reward-to-go. That is, we replace the reward-to-go in Equation (19) with the reward-to-go minus a baseline:

$$
\nabla_\theta J(\theta)=\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta\left(a_t | s_t\right)\left(\hat Q_t - b\left(s_t\right)\right)\right] .
$$

This leaves the policy gradient unbiased because for any $t$,

$$
\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\nabla_\theta \log \pi_\theta\left(a_t | s_t\right) b(s_t)\right]
=b(s_t) \cdot \mathbb{E}_{s_t \sim p_\theta\left(s_t\right)}\left[\mathbb{E}_{a_t \sim \pi_\theta\left(a_t | s_t\right)}\left[\nabla_\theta \log \pi_\theta\left(a_t | s_t\right)\right]\right] =0
$$

as we have shown in the proof for the reward-to-go formulation.

The next question is, what should we actually use as the baseline $b\left(s_t\right)$ ? In practice, we typically use a learned value function $\hat{V}_{\varphi}^\pi\left(s_t\right)$ as the baseline, where $\varphi$ is the parameters of a neural network. This value function is trained to approximate the true value function $V^\pi\left(s_t\right)$, which is the expected return from state $s_t$ under the current policy $\pi_\theta$ :

$$
\hat{V}_{\varphi}^\pi\left(s_t\right) \approx V^\pi\left(s_t\right)=\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\hat Q_t \Big{|} s_t\right] .
$$
With this choice of baseline, the policy gradient estimator becomes

$$
\nabla_\theta J(\theta)=\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta\left(a_t | s_t\right)\left(\hat Q_t - \hat{V}_{\varphi}^\pi\left(s_t\right)\right)\right] .
$$

Intuitively, this value function baseline makes the policy gradient estimator more stable by centering the reward-to-go around its expected value, which can help reduce variance. Also, note that even when the value function is not accurate, the policy gradient estimator in Equation (37) is still unbiased (because we're allowed to subtract any function $b\left(s_t\right)!$ ).

### 2.3 Discounting

Another common technique for variance reduction is to introduce a discount factor $\gamma \in[0,1]$ to the rewards. By multiplying the rewards by $\gamma^t$ for time step $t$, we can reduce the variance of the policy gradient estimator by downweighting rewards that are further into the future, which are more uncertain and thus have higher variance. Specifically, we modify the original objective $J(\theta)$ to a new objective $J^\gamma(\theta)$ that incorporates discounting:

$$
J^\gamma(\theta)=\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\sum_{t=0}^{H-1} \gamma^t r(s_t, a_t)\right] .
$$

Then, as before, the (reward-to-go) policy gradient estimator becomes

$$
\nabla_\theta J^\gamma(\theta)=\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta(a_t | s_t)\left(\sum_{t'=t}^{H-1} \gamma^{t'} r(s_{t'}, a_{t'})\right)\right] .
$$

Note that introducing discounting changes the objective that we're optimizing, so it is technically biased (i.e., $J^\gamma(\theta) \neq J(\theta)$ ). However, this has several practical benefits. First, it reduces the variance. Second, in many cases, we actually do prefer immediate rewards to future rewards, so this change in the objective is often rather desirable in practice. Third, it allows us to handle the infinite-horizon case $(H=\infty)$ without worrying about divergence of the returns.

In practice, we typically apply discounting to the reward-to-go formulation, which gives us another variant of the policy gradient estimator:
$$
\begin{aligned}
\nabla_\theta J_{\mathrm{rtg}}^\gamma(\theta)
&=\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta(a_t | s_t)\left(\sum_{t'=t}^{H-1} \gamma^{t'-t} r\left(s_{t'}, a_{t'}\right)\right)\right] \\
&= \mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta\left(a_t | s_t\right) \hat Q_t\right] .
\end{aligned}
$$

where  <font : color = Red>$\boxed{\hat Q_t := \sum\limits_{t'=t}^{H-1}\gamma^{t'-t} r(s_{t'},a_{t'})}$</font>

Note that the discounting in Equation (39) is applied to the full trajectory reward, while the discounting in Equation (40) is applied to the reward-to-go by replacing $\gamma^{t'}$ with $\gamma^{t'-t}$. This modification changes the objective again. Between these two variants (Equation (39) and Equation (40)), we almost always use the reward-to-go discounting (Equation (40)) in practice. Do you see why? (Hint: The first variant makes the policy care less about states visited later in the trajectory because the gradient itself $\left(\nabla_\theta \log \pi_\theta\left(a_t | s_t\right)\right)$ is downweighted by $\gamma^t$, whereas the second variant doesn't downweight the gradient, but only downweights the rewards that are further into the future. What do you think is more desirable in practice?)

With discounting, we also need to modify the value function to be discounted as well: $\boxed{V^\pi\left(s_t\right)=\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\hat Q_t \Big{|} s_t\right] .}$

The baselined policy gradient estimator then becomes:

$$
\nabla_\theta J_{\mathrm{rtg}}^\gamma(\theta)=\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta\left(a_t | s_t\right)\left(\hat Q_t -\hat{V}_{\varphi}^\pi \left(s_t\right)\right)\right] .
$$

From now on, we will use this discounted reward-to-go formulation with a value function baseline as our default policy gradient estimator, and we will drop the superscript $\gamma$ and the subscript rtg in $J_{\text {rtg }}^\gamma(\theta)$ in the rest of the notes for simplicity.

## 3 Actor-Critic

**Lemma.**
$$
\begin{aligned}
\nabla_\theta J(\theta) & =\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta\left(a_t | s_t\right)\left(\hat Q_t -\hat{V}_{\varphi}^\pi\left(s_t\right)\right)\right] \\
& =\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta\left(a_t | s_t\right)\left(r\left(s_t, a_t\right)+\gamma V^\pi\left(s_{t+1}\right)-\hat{V}_{\varphi}^\pi\left(s_t\right)\right)\right],
\end{aligned}
$$

using the value function $V^\pi$ defined in Equation (41).

**Proof.** It suffices to show
$$
\mathbb{E}_\tau \bigl[ \nabla_\theta \log \pi_\theta(a_t | s_t)\, \hat Q_t \bigr]
= \mathbb{E}_\tau \bigl[ \nabla_\theta \log \pi_\theta(a_t | s_t) \bigl(r(s_t, a_t) + \gamma V^\pi(s_{t+1})\bigr) \bigr].
$$
Note that $\hat Q_t = \sum\limits_{t'=t}^{H-1}\gamma^{t'-t} r(s_{t'},a_{t'}) = r(s_t, a_t) + \gamma \hat Q_{t+1}.$ It suffices to show
$$
\mathbb{E}_\tau \bigl[ \nabla_\theta \log \pi_\theta(a_t | s_t)\, \hat Q_{t+1} \bigr]
= \mathbb{E}_\tau \bigl[ \nabla_\theta \log \pi_\theta(a_t | s_t)\, V^\pi(s_{t+1}) \bigr].
$$
根据 $\mathbb{E}[\hat Q_{t+1} | s_{t+1}] = V^\pi(s_{t+1})$ 易知成立.



In practice, we don't have access to the true value function $V^\pi\left(s_{t+1}\right)$, so we replace it with the learned value function $\hat{V}_{\varphi}^\pi\left(s_{t+1}\right)$. This gives us the following actor-critic ${ }^2$ policy gradient estimator:

$$
\boxed{\nabla_\theta J(\theta) \approx \mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\sum_{t=0}^{H-1} \nabla_\theta \log \pi_\theta(a_t | s_t)\left(r(s_t, a_t)+\gamma \hat{V}_{\varphi}^\pi(s_{t+1})-\hat{V}_{\varphi}^\pi(s_t)\right)\right]. }\tag{*}
$$

Note that this estimator is now biased due to modeling errors in $\hat{V}_{\varphi}^\pi\left(s_{t+1}\right)$ (unlike Equation (44), which is unbiased because it uses the true value function $V^\pi\left(s_{t+1}\right)$ ). However, it can perform much better than the unbiased Monte Carlo estimator in Equation (43) in practice, due to the significant reduction in variance. This is the first example of a bias-variance tradeoff in reinforcement learning.

Now, let's talk about value function estimation. Our goal is to $\operatorname{train} \hat{V}_{\varphi}^\pi$ to approximate the true value function $V^\pi$. The most straightforward way to do this is to minimize the mean squared error between $\hat{V}_{\varphi}^\pi\left(s_t\right)$ and the Monte Carlo return, as we discussed before:

$$
\mathcal{L}(\varphi)=\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\sum_{t=0}^{H-1}\left(\hat{V}_{\varphi}^\pi\left(s_t\right)- \hat Q_t\right)^2\right] .
$$

While this is a valid way to train the value function, it can also suffer from the high variance of the Monte Carlo returns, just like the Monte Carlo policy gradient estimator in Equation (43). To reduce variance, we can apply the same idea to value function estimation as well, by replacing the Monte Carlo return with the bootstrapped return $r\left(s_t, a_t\right)+\gamma \hat{V}_{\varphi}^\pi\left(s_{t+1}\right)$ :

$$
\mathcal{L}(\varphi)=\mathbb{E}_{\tau \sim p_\theta(\tau)}\left[\sum_{t=0}^{H-1}\left(\hat{V}_{\varphi}^\pi\left(s_t\right)-\left[r\left(s_t, a_t\right)+\gamma \hat{V}_{\varphi}^\pi\left(s_{t+1}\right)\right]_\times\right)^2\right],
$$

where the subscript × indicates the "stop-gradient" operator, which means that we treat $r\left(s_t, a_t\right)+\gamma \hat{V}_{\varphi}^\pi\left(s_{t+1}\right)$ as a constant when computing the gradient with respect to $\varphi$. Equation (51) may seem a bit circular at first glance, since we're using $\hat{V}_{\varphi}^\pi$ to train itself ("bootstrapping"). However, under certain assumptions, we have a theoretical guarantee that minimizing this loss eventually leads to the true value function $V^\pi$ with enough training iterations, even when we start from a random initialization of $\hat{V}_{\varphi}^\pi$. This is known as the temporal difference (TD) learning, and we will talk about it in more detail in the next couple of lectures. (Aside: You may also wonder why we have to put the stop-gradient operator in Equation (51). There is a subtle reason we won't go into here, but the short answer is that this becomes biased in stochastic environments without the stop-gradient operator. We may discuss this in more detail when we study TD learning.)

Our discussion so far can be summarized in the following actor-critic algorithm:

- Data collection: Collect a batch of trajectories $\tau^1, \cdots, \tau^N$ by executing the current policy $\pi_\theta$ in the environment.
- Policy ("actor") update: Update the policy parameters $\theta$ using the policy gradient estimator in Equation (*).
- Value ("critic") update: Update the value function parameters $\varphi$ by minimizing the loss $\mathcal{L}(\varphi)$.
- Repeat: Repeat the above steps until convergence.
