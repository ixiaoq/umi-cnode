import { Link } from 'umi';
import { Space } from 'antd';

function MenuItem(props) {
  const { title, tab, current } = props;
  console.log(current);
  return <Link to={`/?tab=${tab}`}>{title}</Link>;
}

export default function Menu(props) {
  const { tab } = props;

  const { menuConfig } = props;

  return (
    <Space>
      {menuConfig.map((menu: { tab: any }) => (
        <MenuItem current={tab} {...menu} key={menu.tab} />
      ))}
    </Space>
  );
}
