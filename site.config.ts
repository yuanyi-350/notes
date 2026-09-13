import type { CourseConfig } from './src/types.ts'

export const siteConfig: { title: string; courses: CourseConfig[] } = {
  title: '课程笔记',
  courses: [
    {
      id: 'numerical-analysis',
      title: '数值分析',
      notesDirectory: 'content/numerical-analysis',
      // Keep the original links working.
      routePrefix: '',
      chapters: {
        '1': '插值与逼近', '2': '数值积分', '3': '非线性方程求解',
        '4': '快速傅里叶变换', '5': '常微分方程数值解',
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
  ],
}
