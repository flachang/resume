import { defineConfig } from '@rsbuild/core';
import { pluginReact, PLUGIN_REACT_NAME } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    mountId: 'resume-app'
  }
});
