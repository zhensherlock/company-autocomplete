import { CompanyModelOptions } from '../types'

export const handleQueryData = (type: string, keyword: string) => {
  switch (type) {
    case 'qcc_openapi':
      // fetch(`https://c.qcc.com/embed/api/company/getCompanyName?searchKey=${value}`, {
      //   method: 'GET',
      //   mode: 'cors'
      // }).then(res => {
      // })
      queryQccOpenAPI(keyword)
      break
  }
}

const queryQccOpenAPI = (keyword: string) => {
  console.log(keyword)
  let result: CompanyModelOptions[] = []
  const res = {
    status: '200',
    result: [
      {
        'companyName': '企查查科技有限公司',
        'keyNo': 'f625a5b661058ba5082ca508f99ffe1b'
      },
      {
        'companyName': '石狮市青创城电子商务园区有限责任公司',
        'keyNo': 'af153062144625f2f82f1d2eae9bbe06'
      },
      {
        'companyName': '上海东龙服饰有限公司',
        'keyNo': '68d931176fdd2e44b229d8ff1f34652f'
      },
      {
        'companyName': '深圳振强生物技术有限公司',
        'keyNo': '106073d8ae22ce77d5159ce4cd657efc'
      },
      {
        'companyName': '西安开天传动技术有限公司',
        'keyNo': '36e4ed7802454db0df12a9cef26ea423'
      }
    ]
  }
  if (res.status !== '200') {
    return
  }
  result = res.result.map(item => {
    return {
      name: item.companyName,
      keyNo: item.keyNo
    }
  })
  return result
}
