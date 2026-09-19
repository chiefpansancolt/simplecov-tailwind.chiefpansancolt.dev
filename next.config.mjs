import withMarkdoc from '@markdoc/next.js'
import withSearch from './src/markdoc/search.mjs'

/**
 * @markdoc/next.js compiles .md pages with Next's default SWC loader, which has
 * no RSC layer set. Next 16.2+ then treats app pages as client modules and
 * rejects their `metadata` export. Re-run the RSC-layer .md pages through the
 * server-layer SWC config instead.
 */
const withMarkdocServerLayer = (nextConfig) => ({
  ...nextConfig,
  webpack(config, options) {
    config = nextConfig.webpack(config, options)

    let rule = config.module.rules.find(
      (r) => r.test instanceof RegExp && r.test.test('page.md'),
    )
    let [swcLoader, ...rest] = rule.use
    let { test, use } = rule

    delete rule.test
    delete rule.use
    rule.test = test
    rule.oneOf = [
      {
        issuerLayer: 'rsc',
        use: [
          {
            ...swcLoader,
            options: { ...swcLoader.options, bundleLayer: 'rsc', esm: true },
          },
          ...rest,
        ],
      },
      { use },
    ]

    return config
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
}

export default withMarkdocServerLayer(
  withSearch(withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig)),
)
