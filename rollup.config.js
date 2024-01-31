import svelte from 'rollup-plugin-svelte';
import {
  pug,
  coffeescript,
  typescript,
  less,
  scss,
  sass,
  stylus,
  postcss,
  globalStyle,
  babel,
  replace,
} from 'svelte-preprocess';

export default {
  plugins: [
    svelte({
      preprocess: [
        replace({ ... }),
        pug({ ... }),
        coffeescript({ ... }),
        typescript({ ... }),
        less({ ... }),
        scss({ ... }),
        sass({ ... }),
        stylus({ ... }),
        babel({ ... }),
        postcss({ ... }),
        globalStyle({ ... }),
      ],
    }),
  ],
};
// rollup.config.js
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess'
import { scss, coffeescript, pug } from 'svelte-preprocess'

export default {
  ...,
  plugins: [
    svelte({
      /**
       * Auto preprocess supported languages with
       * '<template>'/'external src files' support
       **/
      preprocess: sveltePreprocess({ /* options */ })
      /**
       * It is also possible to manually enqueue
       * stand-alone processors
       * */
      preprocess: [
        pug({ /* pug options */ }),
        scss({ /* scss options */ }),
        coffeescript({ /* coffeescript options */ })
      ]
    })
  ]
}
