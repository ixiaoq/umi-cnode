import axios from 'axios';

const topicList = `${SERVER_API}/topics`;

export function getTopicList(params: {
  current: number;
  pageSize: number;
  tab: string;
}) {
  return axios({
    url: topicList,
    params,
  });
}
