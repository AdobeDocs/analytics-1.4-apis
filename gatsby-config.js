/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    versions: [
      {
        title: 'v2.0',
        path: '/analytics-apis/docs/2.0/'
      },
      {
        title: 'v1.4',
        selected: true
      }
    ],
    pages: [
      {
        title: 'Adobe Analytics',
        path: 'index.md'
      },
      {
        title: 'Endpoint guides',
        path: 'guides/index.md'
      },
      {
        title: 'API Reference',
        path: 'https://adobedocs.github.io/analytics-1.4-apis/'
      }
    ],
    subPages: [
      {
        title: 'Getting Started',
        path: 'guides/index.md'
      },
      {
        title: 'Admin API',
        path: 'guides/admin/index.md',
        pages: [
          {
            title: 'Bookmarks',
            path: 'guides/admin/bookmark.md'
          },
          {
            title: 'Company settings',
            path: 'guides/admin/company.md'
          },
          {
            title: 'Report suites',
            path: 'guides/admin/report-suite/index.md',
            pages: [
              {
                title: 'Get methods',
                path: 'guides/admin/report-suite/get.md'
              },
              {
                title: 'Save methods',
                path: 'guides/admin/report-suite/save.md'
              },
              {
                title: 'Delete methods',
                path: 'guides/admin/report-suite/delete.md'
              }
            ]
          },
          {
            title: 'Data types',
            path: 'guides/admin/data-types.md'
          }
        ]
      },
      {
        title: 'Calculated metrics API',
        path: 'guides/calculated-metrics.md'
      },
      {
        title: 'Classifications API',
        path: 'guides/classifications/index.md',
        pages: [
          {
            title: 'Data types',
            path: 'guides/classifications/data-types.md'
          }
        ]
      },
      {
        title: 'Data feeds API',
        path: 'guides/data-feeds.md'
      },
      {
        title: 'Data insertion API',
        path: 'guides/data-insertion/index.md',
        pages: [
          {
            title: 'Variable reference',
            path: 'guides/data-insertion/variable-reference.md'
          },
          {
            title: 'Troubleshooting',
            path: 'guides/data-insertion/troubleshooting.md'
          }
        ]
      },
      {
        title: 'Data Sources API',
        path: 'guides/data-sources.md'
      },
      {
        title: 'Livestream API',
        path: 'guides/livestream/index.md',
        pages: [
          {
            title: 'Variable reference',
            path: 'guides/livestream/variable-reference.md'
          },
          {
            title: 'Example output',
            path: 'guides/livestream/example-output.md'
          },
          {
            title: 'Troubleshooting',
            path: 'guides/livestream/troubleshooting.md'
          },
          {
            title: 'FAQ',
            path: 'guides/livestream/faq.md'
          }
        ]
      },
      {
        title: 'Reporting API',
        path: 'guides/reporting/index.md',
        pages: [
          {
            title: 'Methods',
            path: 'guides/reporting/methods.md'
          },
          {
            title: 'Report description',
            path: 'guides/reporting/report-description/index.md',
            pages: [
              {
                title: 'Dimensions',
                path: 'guides/reporting/report-description/dimensions.md'
              },
              {
                title: 'Metrics',
                path: 'guides/reporting/report-description/metrics.md'
              },
              {
                title: 'Segments',
                path: 'guides/reporting/report-description/segments.md'
              },
              {
                title: 'Combinations',
                path: 'guides/reporting/report-description/combinations.md'
              },
              {
                title: 'Examples',
                path: 'guides/reporting/report-description/examples.md'
              }
            ]
          },
          {
            title: 'Report data',
            path: 'guides/reporting/report-data.md'
          },
          {
            title: 'Data Warehouse',
            path: 'guides/reporting/data-warehouse.md'
          },
          {
            title: 'Pathing',
            path: 'guides/reporting/pathing.md'
          },
          {
            title: 'Real-time',
            path: 'guides/reporting/real-time.md'
          },
          {
            title: 'Summary',
            path: 'guides/reporting/summary.md'
          },
          {
            title: 'Troubleshooting',
            path: 'guides/reporting/troubleshooting.md'
          }
        ]
      },
      {
        title: 'Segments API',
        path: 'guides/segments/index.md',
        pages: [
          {
            title: 'Data types',
            path: 'guides/segments/data-types.md'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/analytics-apis/docs/1.4/'
};
