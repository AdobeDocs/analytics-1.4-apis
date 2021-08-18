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
    home: {
      title: 'Adobe Analytics',
      path: '/analytics-apis/'
    },
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
        title: 'Overview',
        path: 'index.md'
      },
      {
        title: 'Guides',
        path: 'guides'
      },
      {
        title: 'API Reference',
        path: 'api.md'
      }
    ],
    subPages: [
      {
        title: 'Getting Started',
        path: 'guides/getting-started/index.md'
      },
      {
        title: 'Reporting API',
        path: 'guides/reporting-api/index.md'
      },
      {
        title: 'Admin API',
        path: 'guides/admin-api/index.md'
      },
      {
        title: 'Live Stream',
        path: 'guides/live-stream-api/index.md'
      },
      {
        title: 'Data Feeds',
        path: 'guides/data-feeds-api/index.md'
      },
      {
        title: 'Data Sources',
        path: 'guides/data-sources-api/index.md'
      },
      {
        title: 'Data Insertion',
        path: 'guides/data-insertion-api/index.md'
      },
      {
        title: 'Data Warehouse',
        path: 'guides/data-warehouse-api/index.md'
      },
      {
        title: 'Classifications',
        path: 'guides/classifications-api/index.md'
      },
      {
        title: 'Calculated Metrics',
        path: 'guides/calc-metrics-api/index.md'
      },
      {
        title: 'Segments',
        path: 'guides/segments-api/index.md'
      },
      {
        title: 'Legacy Recommendations API',
        path: 'guides/recommendations-api/index.md'
      },
      {
        title: 'Legacy Target API',
        path: 'guides/target-api/index.md'
      },
      {
        title: 'Legacy Saint API',
        path: 'guides/saint-api/index.md'
      },
      {
        title: 'Legacy Reporting API',
        path: 'guides/reporting-api-1.3/index.md'
      },
      {
        title: 'Legacy Admin API',
        path: 'guides/admin-api-1.3/index.md'
      },
      {
        title: 'Legacy Authentication',
        path: 'guides/authentication/index.md'
      },
      {
        title: 'Legacy 1.3 APIs',
        path: 'guides/APIEOL.md'
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/analytics-apis/docs/1.4/'
};
