import request from '@/utils/request';

export type homeListParamsType = {
  page?: number;
  pageSize?: number;
};

export type createArtParamsType = {};

// 写文章
export async function createArticle(params: createArtParamsType) {
  return request('/api/home/create', {
    method: 'POST',
    data: params,
  });
}

// 获取文章列表
export async function getArticleList(params: homeListParamsType) {
  return request('/api/home/list', {
    method: 'POST',
    data: params,
  });
}

// 删除文章列表
export async function deleteArticleList(params: number | string) {
  return request('/api/home/remove', {
    method: 'Delete',
    params: {
      id: params,
    },
  });
}

// 文章审核
export async function auditArticleList(params: string) {
  return request('/api/home/audit', {
    method: 'POST',
    data: {
      id: params,
    },
  });
}

// 获取文章详情
export async function getArticleDetail(params: string) {
  return request('/api/home/detail', {
    method: 'GET',
    params: {
      id: params,
    },
  });
}
