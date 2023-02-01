/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

(() => {
  let prefixPath =
    window.location.host.indexOf("localhost") >= 0
      ? ""
      : "analytics-apis/docs/2.0/";
  let redirectPath = "";

  // redirect paths must land on developer.adobe.com/analytics-apis/docs/2.0/
  // or on localhost/
  if (
    (window.location.hash !== "" &&
      window.location.host.indexOf("localhost") < 0 &&
      window.location.pathname === "/analytics-apis/docs/2.0/") ||
    (window.location.hash !== "" &&
      window.location.host.indexOf("localhost") >= 0 &&
      window.location.pathname === "/")
  ) {
    switch (window.location.hash) {
      case "#!AdobeDocs/analytics-2.0-apis/master/README.md":
        redirectPath = prefixPath;
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/create-oauth-client.md":
        redirectPath = prefixPath + "guides/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/oauth-curl.md":
        redirectPath = prefixPath + "guides/use-cases/curl/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/oauth-postman.md":
        redirectPath = prefixPath + "guides/use-cases/postman/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/jwt.md":
        redirectPath = prefixPath + "guides/jwt/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/reporting-guide.md":
        redirectPath = prefixPath + "guides/endpoints/reports/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/reporting-multiple-breakdowns.md":
        redirectPath = prefixPath + "guides/endpoints/reports/breakdowns/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/reporting-tricks.md":
        redirectPath = prefixPath + "guides/endpoints/reports/debugger/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/migration-guide.md":
        redirectPath = prefixPath + "guides/migration/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/calculatedmetrics.md":
        redirectPath = prefixPath + "guides/endpoints/calculatedmetrics/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/dateranges.md":
        redirectPath = prefixPath + "guides/endpoints/date-ranges/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/tags.md":
        redirectPath = prefixPath + "guides/endpoints/componentmetadata/tags/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/shares.md":
        redirectPath =
          prefixPath + "guides/endpoints/componentmetadata/shares/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/segments-guide.md":
        redirectPath = prefixPath + "guides/endpoints/segments/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/segments.md":
        redirectPath = prefixPath + "guides/endpoints/segments/definition/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/projects-guide.md":
        redirectPath = prefixPath + "guides/endpoints/projects/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/projects.md":
        redirectPath = prefixPath + "guides/endpoints/projects/definition/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/usage-logs.md":
        redirectPath = prefixPath + "guides/endpoints/usage/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/discovery.md":
        redirectPath = prefixPath + "guides/endpoints/discovery/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/report-suites.md":
        redirectPath = prefixPath + "guides/endpoints/report-suites/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/vrs.md":
        redirectPath = prefixPath + "guides/endpoints/vrs/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/bdia.md":
        redirectPath = prefixPath + "guides/endpoints/bulk-data-insertion/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/data-repair.md":
        redirectPath = prefixPath + "guides/endpoints/data-repair/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/faq.md":
        redirectPath = prefixPath + "guides/faq/";
        break;
      case "#!AdobeDocs/analytics-2.0-apis/master/support.md":
        redirectPath = prefixPath + "support/";
        break;
    }

    window.location.href =
      decodeURIComponent("http://" + window.location.host + "/" + redirectPath);
  }
})();
