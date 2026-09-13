##### 自由群

1. 先把两个群的元素当作“字母”

取所有 $a\in A\setminus\{e_A\}, \qquad b\in B\setminus\{e_B\}$ 作为字母.

这里要记住字母来自哪个群. 即使 \(A=B=\mathbb Z\), 也要把两个副本区分开. 用 $a_1,a_2,\cdots\in A, \qquad b_1,b_2,\cdots\in B$ 表示来自两个群的字母. 然后把这些字母排成有限的词, 例如 $a_1b_1a_2b_2,$ 或者 $b_1a_1b_2$. 空词记作 \(1\), 将来是群的单位元.

2. 同一个群中的相邻字母要相乘

因为我们必须保留 \(A\) 原来的群运算, 所以如果两个相邻字母都来自 \(A\), 就应当在 \(A\) 中把它们相乘:

\[ \cdots a_1a_2\cdots \quad\rightsquigarrow\quad \cdots (a_1a_2)\cdots. \]

如果 \(a_1a_2=e_A\), 就把它们整个删掉.

同样, 如果两个相邻字母来自 \(B\), 也在 \(B\) 中相乘:

\[ \cdots b_1b_2\cdots \quad\rightsquigarrow\quad \cdots (b_1b_2)\cdots. \]

例如, 假设 \(a_1,a_2\in A\), \(b\in B\), 那么 \[ a_1a_2b \] 约化为 \[ (a_1a_2)b. \]

如果 \(a_2=a_1^{-1}\), 那么 \[ a_1a_2b=a_1a_1^{-1}b \] 约化为 \[ b. \]

但是, 如果 \(a\in A\)、\(b\in B\), 那么 \(ab\) 不能继续约化, 因为 \(a,b\) 属于不同的群.

3. 约化词

一个词 \[ x_1x_2\cdots x_n \] 叫作约化词, 如果

- 每个 \(x_i\) 都不是单位元;

- 相邻字母来自不同的群.

所以约化词必须交替出现:  \[ a_1b_1a_2b_2\cdots \] 或者 \[ b_1a_1b_2a_2\cdots. \] 自由积 \(A*B\) 的元素, 就是所有这样的约化词, 再加上空词.

4. 自由积中的乘法

两个约化词相乘时, 先把它们连接起来, 然后约化.

例如 \[ (a_1b_1a_2)(a_3b_2) = a_1b_1(a_2a_3)b_2.\]

如果 \(a_2a_3=e_A\), 还要继续化简为 $a_1(b_1b_2).$

词的逆元则是倒过来, 并且每个字母取逆 \[ (a_1b_1a_2)^{-1} = a_2^{-1}b_1^{-1}a_1^{-1}. \]











Definition. A collection $A$ of subsets of the space $X$ is said to have order $m+1$ if some point of $X$ lies in $m+1$ elements of $A$, and no point of $X$ lies in more than $m+1$ elements of $\mathcal{A}$.

例子. 令 \[ X=\{1,2,3,4\}, \] 并令 \[ \mathcal A=\{A_1,A_2,A_3,A_4\}, \] 其中 \[ A_1=\{1,2\},\quad A_2=\{2,3\}, \quad A_3=\{2,4\},\quad A_4=\{4\}. \] 从而阶数为 $3$



Now we define what we mean by the topological dimension of a space $X$ Recall that given a collection $\mathcal{A}$ of subsets of $X$, a collection $\mathscr{B}$ is said to refine $\mathcal{A}$, or to be a refinement of $\mathcal{A}$, if for each element $B$ of $\mathcal{B}$ there is an element $A$ of $\mathcal{A}$ such that $B \subset A$.



Definition. A space $X$ is said to be finite dimensional if there is some integer $m$ such that for every open covering $A$ of $X$, there is an open covering $B$ of $X$ that refines $A$ and has order at most $m+1$. The topological dimension of $X$ is defined to be the smallest value of $m$ for which this statement holds; we denote it by $\dim X$.

