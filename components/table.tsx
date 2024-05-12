import React from 'react';
import Table from 'rc-table';
import { useConfig } from 'nextra-theme-docs';

import 'rc-table/assets/index.css';

const Packages: React.FC<{}> = () => {
  const config = useConfig();
  const packages = config.frontMatter.packages;

  const columns = [
    {
      title: 'Package',
      dataIndex: 'package',
      key: 'package',
    },
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version',
    },
  ];

  const data = packages.map((item) => ({
    package: <a href={item.url}>{item.name}</a>,
    version: <img src={item.badge} alt={item.name} />,
  }));

  return (
    <div className='container py-4'>
      <Table tableLayout='auto' columns={columns} data={data} />
    </div>
  );
};

export default Packages;
