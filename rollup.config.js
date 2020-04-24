import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const esm = {
    input: 'scripts/main.js',
    output: {
        format: 'es',
        sourcemap: true,
        file: `public/scripts/main.esm-${process.env.npm_package_version}.min.js`
    },
    plugins: [
        commonjs(),
        resolve(),
        babel(),
        terser()
    ]
};

const iife = {
    input: 'scripts/main.js',
    output: {
        format: 'iife',
        file: `public/scripts/main.iife-${process.env.npm_package_version}.min.js`,
        name: 'main'
    },
    plugins: [
        commonjs(),
        resolve(),
        babel(),
        terser()
    ]
};

const conf = process.env.BABEL_ENV === 'esm' ? esm : iife;
export default conf;
