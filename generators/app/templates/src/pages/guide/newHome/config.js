// 土地权属
export const landOptions = {
  tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
      bottom: 20,
      left: 'center',
      data: ['土地1', '土地2', '土地3'],
      textStyle: {
        fontSize: '12',
        color: '#fff',
      }
  },
  series: [
      {
          name: '访问来源',
          type: 'pie',
          radius: '65%',
          avoidLabelOverlap: false,
          label: {
              normal: {
                  show: false,
                  position: 'bottom'
              },
              emphasis: {
                  show: true,
                  textStyle: {
                      fontSize: '12',
                      fontWeight: 'bold',
                      color: '#fff',
                  }
              }
          },
          labelLine: {
              normal: {
                  show: true
              }
          },
          data: [
              {value: 335, name: '土地1'},
              {value: 310, name: '土地2'},
              {value: 234, name: '土地3'},
          ]
      }
  ]
};

// 项目统计
export const projectTypeOptions = {
  title: {
    text: '项目类型',
    textStyle: {
      fontSize: '14',
      color: '#0dd7f5',
      fontWeight: 'normal',
    },
    top: '10',
    left: '5'
  },
  legend: {
    data: ['项目1', '项目2'],
    textStyle: {
      fontSize: '12',
      color: '#fff',
    },
    top: 40,
    right: 10
  },
  xAxis: {
      type: 'category',
      data: ['数据1', '数据2', '数据3', '数据4'],
      axisLine:{
        lineStyle:{
            color:'#36B9EA',
            width: 1
        }
      },
  },
  yAxis: {
      type: 'value',
      axisLine:{
        lineStyle:{
            color:'#36B9EA',
            width: 1
        }
      },
      splitLine:{ 
        show:false
      },
  },
  series: [{
    name: '项目1',
    type: 'bar',
    barGap: 0,
    color: ['#399EBA'],
    data: [320, 332, 301, 334, 390]
  },
  {
      name: '项目2',
      type: 'bar',
      color: ['#CB5A14'],
      data: [220, 182, 191, 234, 290]
  }]
};

// 项目阶段分类
export const projectStageOptions = {
  title: {
      text: '项目阶段分类',
      textStyle: {
        fontSize: '14',
        color: '#0dd7f5',
        fontWeight: 'normal',
      },
  },
  tooltip: {},
  legend: {
      // data: ['预算分配（Allocated Budget）']
  },
  grid: {
    width: '80%'
  },
  radar: {
      // shape: 'circle',
      name: {
          textStyle: {
              color: '#fff',
              borderRadius: 3,
              padding: [3, 5]
          }
      },
      indicator: [
          { name: '阶段1', max: 6500},
          { name: '阶段2', max: 16000},
          { name: '阶段3', max: 30000},
          { name: '阶段4', max: 38000},
          { name: '阶段5', max: 52000},
      ]
  },
  series: [{
      name: '预算 vs 开销（Budget vs spending）',
      type: 'radar',
      areaStyle: {
        color: ['rgba(21,140,232,1)','rgba(21,140,232,.79)'],
        shadowColor: 'transparent',
        opacity: .79
      },
      data: [
          {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              // name: '预算分配（Allocated Budget）'
          }
      ]
  }]
}

// 排名统计
export const provinceRankChartsOptions = {
  color: ['#00FFD8'],
  title: {
    text: '省份排名',
    textStyle: {
      fontSize: '14',
      color: '#0dd7f5',
      fontWeight: 'normal',
    },
    top: '10',
    left: '5'
  },
  legend: {
    data: [],
    textStyle: {
      fontSize: '12',
      color: '#fff',
    },
    top: 40,
    right: 10
  },
  yAxis: {
      type: 'category',
      data: ['数据1', '数据2', '数据3', '数据4'],
      axisLine:{
        lineStyle:{
            color:'#36B9EA',
            width: 1
        }
      },
  },
  xAxis: {
      type: 'value',
      axisLine:{
        lineStyle:{
            color:'#36B9EA',
            width: 1
        }
      },
      splitLine:{ 
        show:false
      },
  },
  series: [{
    type: 'bar',
    barGap: 0,
    data: [320, 332, 301, 334, 390]
  }]
}

// 面积排名
export const areaRankChartsOptions = {
  color: ['#60BEFF'],
  title: {
    text: '面积排名',
    textStyle: {
      fontSize: '14',
      color: '#0dd7f5',
      fontWeight: 'normal',
    },
    top: '10',
    left: '5'
  },
  legend: {
    textStyle: {
      fontSize: '12',
      color: '#fff',
    },
    top: 40,
    right: 10
  },
  yAxis: {
      type: 'category',
      data: ['数据1', '数据2', '数据3', '数据4'],
      axisLine:{
        lineStyle:{
            color:'#36B9EA',
            width: 1
        }
      },
  },
  xAxis: {
      type: 'value',
      axisLine:{
        lineStyle:{
            color:'#36B9EA',
            width: 1
        }
      },
      splitLine:{ 
        show:false
      },
  },
  series: [{
    type: 'bar',
    barGap: 0,
    data: [320, 332, 301, 334, 390]
  }]
}

// 减排量排名
export const cerRanksOptions = {
  color: ['#A3FD80'],
  title: {
    text: '减排量排名',
    textStyle: {
      fontSize: '14',
      color: '#0dd7f5',
      fontWeight: 'normal',
    },
    top: '10',
    left: '5'
  },
  legend: {
    textStyle: {
      fontSize: '12',
      color: '#fff',
    },
    top: 40,
    right: 10
  },
  yAxis: {
      type: 'category',
      data: ['数据1', '数据2', '数据3', '数据4'],
      axisLine:{
        lineStyle:{
            color:'#36B9EA',
            width: 1
        }
      },
  },
  xAxis: {
      type: 'value',
      axisLine:{
        lineStyle:{
            color:'#36B9EA',
            width: 1
        }
      },
      splitLine:{ 
        show:false
      },
  },
  series: [{
    type: 'bar',
    barGap: 0,
    data: [320, 332, 301, 334, 390]
  }]
}