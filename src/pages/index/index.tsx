import { useRequest } from 'umi';
import { Card } from 'antd';

import styles from './index.less';
import menuConfig from './menuConfig';
import { getTopicList } from '@/service/topic';

import Menu from './Menu';

export default function IndexPage(props: {
  location: { query: { tab?: 'all' | undefined } };
}) {
  const {
    query: { tab: aaa = 'all' },
  } = props.location;

  const { data, error, loading } = useRequest(
    ({ current, pageSize }) =>
      getTopicList({
        page: current,
        limit: pageSize,
        tab,
      }),
    {
      paginated: true,
    },
  );
  console.log(data, error, loading);

  return (
    <div className="topic_list">
      <Card
        size="small"
        title={<Menu menuConfig={menuConfig} tab={tab} />}
      ></Card>

      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
