import type { CourseConfig } from './src/types.ts'

export const siteConfig: { title: string; courses: CourseConfig[] } = {
  title: '课程笔记',
  courses: [
    {
      id: 'advanced-algebra',
      title: '高等代数',
      notesDirectory: 'content/advanced-algebra',
      routePrefix: 'algebra-',
      chapters: {
        '1': '双线性型与内积空间', '2': '谱定理', '3': '群',
        '4': 'PID 上的有限生成模', '5': '矩阵标准型', '6': '张量积',
        '7': '交错代数与外代数',
      },
      entries: {
        'Section1.1 非退化双线性型_伴随形式.md': { title: '非退化双线性型与伴随形式' },
        'Section1.2 辛形式_实内积空间_复内积空间(酉空间).md': { title: '辛形式、实内积空间与复内积空间' },
        'Section2 实矩阵自伴正交对角化_复矩阵正规算子谱分解.md': { title: '实矩阵自伴正交对角化与复矩阵正规算子谱分解' },
        'Section3 群.md': { title: '群' },
        'Section4 FG_module_over_PID.md': { title: 'PID 上的有限生成模' },
        'Section5.1 有理标准型.md': { title: '有理标准型' },
        'Section5.2 Jordan标准型.md': { title: 'Jordan 标准型' },
        'Section6 Tensor Product.md': { title: '张量积' },
        'Section7 交错代数_外代数.md': { title: '交错代数与外代数' },
      },
    },
    {
      id: 'real-analysis',
      title: '实变函数',
      notesDirectory: 'content/real-analysis',
      routePrefix: 'real-',
      chapters: {
        '1': '依测度收敛',
        '2': 'Lebesgue 积分',
        '3': 'Lebesgue 密度定理',
        '4': '单调函数的 Lebesgue 微分定理',
        '5': '绝对连续函数与 Lp 空间',
      },
      entries: {
        'Section0_依测度Cauchy列.md': { title: '依测度 Cauchy 列' },
        'Section1_Lebesgue_Integration.md': { title: 'Lebesgue 积分' },
        'Section3_Lebesgue密度定理.md': { title: 'Lebesgue 密度定理' },
        'Section4_单调函数Lebesgue定理.md': { title: '单调函数的 Lebesgue 微分定理' },
        'Section5_绝对连续函数Lebesgue定理.md': { title: '绝对连续函数的 Lebesgue 微分定理' },
        'Section5.5_Lp空间.md': { title: 'Lp 空间' },
      },
    },
    {
      id: 'geometry-topology',
      title: '几何与拓扑',
      notesDirectory: 'content/geometry-topology',
      routePrefix: 'topology-',
      chapters: {
        '1': '拓扑空间与基', '2': '极限点与连续映射', '3': '商空间',
        '4': '连通性与紧致性', '5': '自由群', '6': '基本群与覆叠空间',
        '7': 'Seifert–van Kampen 定理',
      },
      entries: {
        'Section1_Topology_Space_and_Basis.md': { title: '拓扑空间与基' },
        'Section2_Limit_Point.md': { title: '极限点与连续映射' },
        'Section3_Quotient.md': { title: '商空间' },
        'Section4_Connect_Compact.md': { title: '连通性与紧致性' },
        'Section5_TopologyDimension.md': { title: '自由群' },
        'Section6_TheFundamentalGroup_CoveringMap.md': { title: '基本群与覆叠空间' },
        'Section7_TheSeifert-vanKampenTheorem.md': { title: 'Seifert–van Kampen 定理' },
      },
    },
    {
      id: 'numerical-analysis',
      title: '数值分析',
      notesDirectory: 'content/numerical-analysis',
      routePrefix: 'numerical-',
      chapters: {
        '1': '插值与逼近', '2': '数值积分', '3': '非线性方程求解',
        '4': '快速傅里叶变换', '5': '常微分方程数值解',
      },
    },
  ],
}
