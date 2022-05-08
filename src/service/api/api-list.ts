interface Apicontent {
  url: string;
  method: string;
  description: string;
  mock: boolean;
  mockURL: string;
}

interface APIinterface {
  [x: string]: Apicontent;
}

export const apiList: APIinterface = {
  // mock数据
  mocklogin: {
    url: '/login',
    method: 'get',
    description: 'login...',
    mock: true,
    mockURL: 'assets/mock/login.json',
  },
  // 真实接口
  login: {
    url: '/login',
    method: 'get',
    description: 'login...',
    mock: false,
    mockURL: '',
  },
};
