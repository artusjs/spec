import React, { useEffect, useId, useState } from 'react';

import mermaid, { type MermaidConfig } from 'mermaid';

import type { MermaidRendererProps } from '../src/typings';

const MermaidRenderer: React.FC<MermaidRendererProps> = (props) => {
  const { code, config = {} } = props;

  const id = useId();

  const [svg, setSvg] = useState('');

  const [renderError, setRenderError] = useState(false);

  const renderMermaid2SVG = React.useCallback(async () => {
    // https://github.com/mermaid-js/mermaid/blob/1b40f552b20df4ab99a986dd58c9d254b3bfd7bc/packages/mermaid/src/docs/.vitepress/theme/Mermaid.vue#L53
    const hasDarkClass = document.documentElement.classList.contains('dark');

    const mermaidConfig: MermaidConfig = {
      securityLevel: 'loose',
      startOnLoad: false,
      theme: hasDarkClass ? 'dark' : 'default',
      ...config,
    };

    try {
      mermaid.initialize(mermaidConfig);

      const { svg } = await mermaid.render(
        id.replace(/:/g, ''),
        code as string,
      );

      setSvg(svg);
    } catch (error) {
      setRenderError(true);
    }
  }, [code, config, id]);

  useEffect(() => {
    renderMermaid2SVG();
  }, [renderMermaid2SVG]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      renderMermaid2SVG();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, [renderMermaid2SVG]);

  return (
    <>
      {renderError ? null : <div dangerouslySetInnerHTML={{ __html: svg }} />}
    </>
  );
};

export default MermaidRenderer;
