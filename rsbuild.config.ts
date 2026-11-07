import { defineConfig } from '@rsbuild/core';

import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  html: {
    mountId: 'resume-app',
    title: '张子昂 · 简历',
    meta: {
      description:
        '张子昂的个人简历。生物工程硕士转型软件开发，4 年商业化产品实战经验。',
    },
  },
});
