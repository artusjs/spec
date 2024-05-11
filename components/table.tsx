import React from 'react';
import { useConfig } from 'nextra-theme-docs';

const Table: React.FC<{}> = () => {
  const config = useConfig();
  const packages = config.frontMatter.packages;

  return (
    <div className='content-container'>
      <div className=''>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((item) => (
              <tr key={item.name}>
                <td>
                  <a href={item.url}>{item.name}</a>
                </td>
                <td>
                  <img src={item.badge} alt={item.name} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
