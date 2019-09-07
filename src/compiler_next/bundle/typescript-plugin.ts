import * as d from '../../declarations';
import { Plugin, TransformResult } from 'rollup';


export const typescriptPlugin = (bundleOpts: d.BundleOptions) => {
  const plugin: Plugin = {
    name: `${bundleOpts.id}TypescriptPlugin`,

    transform(code, id) {
      if (!id.endsWith('.tsx') && !id.endsWith('.ts')) {
        return null;
      }

      const transformResult: TransformResult = {
        code,
        map: null
      };

      const tsSourceFile = bundleOpts.tsBuilder.getSourceFile(id);

      bundleOpts.tsBuilder.emit(tsSourceFile,
        (filePath, data) => {
          if (filePath.endsWith('.js')) {
            transformResult.code = data;

          } else if (filePath.endsWith('.map')) {
            transformResult.map = data;
          }
        },
        undefined,
        undefined,
        bundleOpts.customTransformers
      );

      return transformResult;
    }
  };

  return plugin;
};