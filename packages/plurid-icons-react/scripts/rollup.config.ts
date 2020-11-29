// #region imports
    // #region libraries
    import ttypescript from 'ttypescript';
    // import resolve from '@rollup/plugin-node-resolve';
    // import external from 'rollup-plugin-peer-deps-external';
    // import commonjs from '@rollup/plugin-commonjs';
    // import sourceMaps from 'rollup-plugin-sourcemaps';
    import typescript from 'rollup-plugin-typescript2';
    // #endregion libraries

    import pkg from '../package.json';
// #endregion imports



// #region module
const globals = {
};

const build =  {
    input: `source/index.ts`,
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            globals,
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'es',
            globals,
            sourcemap: true,
        },
    ],
    external: [
    ],
    watch: {
        include: 'source/**',
    },
    plugins: [
        typescript({
            typescript: ttypescript,
            useTsconfigDeclarationDir: true,
        }),
        // external({
        //     includeDependencies: true,
        // }),
        // resolve({
        //     preferBuiltins: true,
        // }),
        // commonjs(),
        // sourceMaps(),
    ],
};
// #endregion module



// #region exports
export default build;
// #endregion exports
