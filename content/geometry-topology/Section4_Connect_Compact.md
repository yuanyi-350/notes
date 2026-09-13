**Def.** Let $X$ be a topological space. A separation of $X$ is a pair $U, V$ of disjoint nonempty open subsets of $X$ whose union is $X$. The space $X$ is said to be **<u>connected</u>** if there does not exist a separation of $X$.

**Equivalent Def :** A space $X$ is connected if and only if the only subsets of $X$ that are both open and closed in $X$ are the empty set and $X$ itself.

**Example 4.** The rationals $\mathbb{Q}$ are not connected. Indeed, the only connected subspaces of $\mathbb{Q}$ are the one-point sets: If $Y$ is a subspace of $\mathbb{Q}$ containing two points $p$ and $q$, one can choose $a \notin \mathbb{Q}$ which lying between $p$ and $q$, and write $Y$ as the union of the open sets $Y \cap(-\infty, a)$ and $Y \cap(a,+\infty)$

**Def.** A space $X$ is said to be **<u>compact</u>** if every open covering $\mathcal{A}$ of $X$ contains a finite subcollection that also covers $X$.



**Lemma 26.1.** Let $Y$ be a subspace of $X$. Then $Y$ is compact $\iff$ every covering of $Y$ by sets open in $X$ contains a finite subcollection covering $Y$.

**Pf.** "$\implies$" Suppose $\mathcal{A}=\left\{A_\alpha\right\}_{\alpha \in J}$ is a covering of $Y$ by sets open in $X$. Then the collection $\left\{A_\alpha \cap Y | \alpha \in J\right\}$ is a covering of $Y$ by sets open in $Y$; hence a finite subcollection $\left\{A_{\alpha_1} \cap Y, \cdots, A_{\alpha_n} \cap Y\right\}$ covers $Y$. Then $\left\{A_{\alpha_1}, \cdots, A_{\alpha_n}\right\}$ is a subcollection of $\mathcal{A}$ that covers $Y$.

"$\impliedby$" Let $A'=\left\{A_\alpha'\right\}$ be a covering of $Y$ by sets open in $Y$. For each $\alpha$, choose a set $A_\alpha$ open in $X$ such that $A_\alpha'=A_\alpha \cap Y .$


The collection $\mathcal{A}=\left\{A_\alpha\right\}$ is a covering of $Y$ by sets open in $X$. By hypothesis, some finite subcollection $\left\{A_{\alpha_1}, \cdots, A_{\alpha_n}\right\}$ covers $Y$. Then $\left\{A_{\alpha_1}', \cdots, A_{\alpha_n}'\right\}$ is a subcollection of $A'$ that covers $Y$.



**Theorem 26.2.** Every closed subspace of a compact space is compact.
**Pf.** Let $Y$ be a closed subspace of the compact space $X$. Given a covering $\mathcal{A}$ of $Y$ by sets open in $X$.
Note that $\mathcal{A} \cup \{X-Y\}$ covers $X$ . Therefore exist finite $\mathcal{B}$ covers $X$ which $\mathcal{B} \subseteq \mathcal{A} \cup \{X - Y\}$ .
Then consider $\begin{cases}\mathcal{B}, & X - Y \notin \mathcal{B} \\ \mathcal{B} - \{X - Y\}, & X - Y \in \mathcal{B} \end{cases}$  is a finite subcollection of $\mathcal{A}$ that covers $Y$.



**Lebesgue 数引理.** 设 $(X, d)$ 是紧致**度量**空间， $\mathcal{U}$ 是 $X$ 的一个开覆盖。存在 $\delta>0$ ，使得对每个 $x \in X$ ，都存在 $U \in \mathcal{U}$ ，满足 $B(x, \delta) \subseteq U .$ 这样的 $\delta$ 称为开覆盖 $\mathcal{U}$ 的一个 Lebesgue 数。

**证明.** 因为 $\mathcal{U}$ 覆盖 $X$ ，对于每个 $x \in X$ ，可以选择一个 $U_x \in \mathcal{U}$ ，使得 $x \in U_x .$


又因为 $U_x$ 是开集，所以存在 $r_x>0$ ，使得 $B\left(x, 2 r_x\right) \subseteq U_x .$


现在考虑开球族 $\left\{B\left(x, r_x\right): x \in X\right\} .$ 显然也是 $X$ 的一个开覆盖。由于 $X$ 紧致，可以从中选出有限子覆盖：

$$
X=B\left(x_1, r_{x_1}\right) \cup \cdots \cup B\left(x_n, r_{x_n}\right) .
$$
令 $\delta=\min \left\{r_{x_1}, \ldots, r_{x_n}\right\}>0$ 并证明这个 $\delta$ 满足要求。

任取 $y \in X$ 。由于上述有限个开球覆盖 $X$ ，存在某个 $i$ ，使得 $y \in B\left(x_i, r_{x_i}\right),$ 也就是 $d\left(y, x_i\right)<r_{x_i} .$

往证 $B(y, \delta) \subseteq B(x_i, 2r_{x_i})$


由三角不等式，对任意 $z \in B(y, \delta)$ 有

$$
d\left(z, x_i\right) \leq d(z, y)+d\left(y, x_i\right)<r_{x_i}+r_{x_i}=2 r_{x_i} .
$$

因此 $z \in B\left(x_i, 2 r_{x_i}\right) \subseteq U_{x_i} .$ 即证 $B(y, \delta) \subseteq B(x_i, 2r_{x_i}) \sube U_x$

---

- $T_0$ space / Kolmogorov space : 拓扑空间 $X$ 称为 $T_0$ 空间如果对于任意两个不同的点 $x, y \in X, \quad x \neq y$, 存在开集 $U$ 使得下列两种情况至少有一种成立 $x \in U, \quad y \notin U,$ 或 $y \in U, \quad x \notin U .$

- $T_2$ space／Hausdorff space : 拓扑空间 $X$ 称为 $T_2$ 空间, 如果对于任意两个不同的点 $x, y \in X, \quad x \neq y,$ 都存在两个开集 $U, V$ 满足 $x \in U, \quad y \in V,$ 而且 $U \cap V=\varnothing .$



**Thm 26.3.** Every compact subspace of a Hausdorff space is closed.
**Pf.** Let $Y$ be a compact subspace of the Hausdorff space $X$. We shall prove that $X-Y$ is open, so that $Y$ is closed.
Let $x_0$ be a point of $X-Y$. We show there is a neighborhood of $x_0$ that is disjoint from $Y$.
For each point $y$ of $Y$, choose disjoint neighborhoods $U_y$ and $V_y$ of the points $x_0$ and $y$, respectively (using the Hausdorff condition).
The collection $\left\{V_y | y \in\right. Y\}$ is a covering of $Y$ by sets open in $X$; therefore, finitely many of them $V_{y_1}, \cdots, V_{y_n}$ cover $Y$.
The open set $V=V_{y_1} \cup \cdots \cup V_{y_n} \supseteq Y$ and it is disjoint from the open set $U=U_{y_1} \cap \cdots \cap U_{y_n}$ which is a neighborhoods of $x_0$.



**Lemma 26.4.** If $Y$ is a compact subspace of the Hausdorff space $X$ and $x_0$ is not in $Y$, then there exist disjoint open sets $U$ and $V$ of $X$ containing $x_0$ and $Y$, respectively.
**Pf.** It has already been proved in the previous thm.

---

**Def.** A space $X$ is said to be limit point compact if every infinite subset of $X$ has a limit point.

**Def.** A space $X$ is said to be locally compact at $x$ if there is some compact subspace $C$ of $X$ that contains a neighborhood of $x$. If $X$ is locally compact at each of its points, $X$ is said simply to be locally compact.

**Def.** If $Y$ is a compact Hausdorff space and $X$ is a proper subspace of $Y$ whose closure equals $Y$, then $Y$ is said to be a compactification of $X$. If $Y-X$ equals a single point, then $Y$ is called the one-point compactification of $X$.

**Thm 29.1.** Let $X$ be a space. Then $X$ is locally compact Hausdorff $\iff$ there exists a space $Y$ satisfying the following conditions:
(1) $X$ is a subspace of $Y$.
(2) The set $Y-X$ consists of a single point.
(3) $Y$ is a compact Hausdorff space.

If $Y$ and $Y'$ are two spaces satisfying these conditions, then there is a homeomorphism of $Y$ with $Y'$ that equals the identity map on $X$.

**Pf.** **<u>Step 1. (uniqueness.)</u>** Let $Y$ and $Y'$ be two spaces satisfying these conditions. Define $h: Y \to Y'$ by 
$$
\begin{cases}
\text{ single point of $Y-X \longmapsto$ the single point of $Y'−X$} \\
id, \text{ on } X
\end{cases}
$$
**Thm 29.2.** Let $X$ be a Hausdorff space. Then $X$ is locally compact $\iff$ given $x$ in $X$, and given a neighborhood $U$ of $x$, there is a neighborhood $V$ of $x$ such that $\bar{V}$ is compact and $\bar{V} \subset U$
**Pf.** 
