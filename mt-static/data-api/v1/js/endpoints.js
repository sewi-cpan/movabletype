/*
 * Do not edit this file manually.
 * This file is generated by "build/data-api/generate-endpoint-js".
 */
(function(window) {

var DataAPI = window.MT.DataAPI.v1;

DataAPI.on('initialize', function() {
    this.generateEndpointMethods(
[
   {
      "verb" : "GET",
      "id" : "list_endpoints",
      "route" : "/endpoints"
   },
   {
      "verb" : "GET",
      "id" : "authorization",
      "route" : "/authorization"
   },
   {
      "verb" : "POST",
      "id" : "authentication",
      "route" : "/authentication"
   },
   {
      "verb" : "POST",
      "id" : "token",
      "route" : "/token"
   },
   {
      "verb" : "DELETE",
      "id" : "revoke_authentication",
      "route" : "/authentication"
   },
   {
      "verb" : "DELETE",
      "id" : "revoke_token",
      "route" : "/token"
   },
   {
      "verb" : "GET",
      "id" : "get_user",
      "route" : "/users/:user_id"
   },
   {
      "resources" : [
         "user"
      ],
      "verb" : "PUT",
      "id" : "update_user",
      "route" : "/users/:user_id"
   },
   {
      "verb" : "GET",
      "id" : "list_blogs",
      "route" : "/users/:user_id/sites"
   },
   {
      "verb" : "GET",
      "id" : "get_blog",
      "route" : "/sites/:blog_id"
   },
   {
      "verb" : "GET",
      "id" : "list_entries",
      "route" : "/sites/:site_id/entries"
   },
   {
      "resources" : [
         "entry"
      ],
      "verb" : "POST",
      "id" : "create_entry",
      "route" : "/sites/:site_id/entries"
   },
   {
      "verb" : "GET",
      "id" : "get_entry",
      "route" : "/sites/:site_id/entries/:entry_id"
   },
   {
      "resources" : [
         "entry"
      ],
      "verb" : "PUT",
      "id" : "update_entry",
      "route" : "/sites/:site_id/entries/:entry_id"
   },
   {
      "verb" : "DELETE",
      "id" : "delete_entry",
      "route" : "/sites/:site_id/entries/:entry_id"
   },
   {
      "verb" : "GET",
      "id" : "list_categories",
      "route" : "/sites/:site_id/categories"
   },
   {
      "verb" : "GET",
      "id" : "list_comments",
      "route" : "/sites/:site_id/comments"
   },
   {
      "verb" : "GET",
      "id" : "list_comments_for_entries",
      "route" : "/sites/:site_id/entries/:entry_id/comments"
   },
   {
      "resources" : [
         "comment"
      ],
      "verb" : "POST",
      "id" : "create_comment",
      "route" : "/sites/:site_id/entries/:entry_id/comments"
   },
   {
      "resources" : [
         "comment"
      ],
      "verb" : "POST",
      "id" : "create_reply_comment",
      "route" : "/sites/:site_id/entries/:entry_id/comments/:comment_id/replies"
   },
   {
      "verb" : "GET",
      "id" : "get_comment",
      "route" : "/sites/:site_id/comments/:comment_id"
   },
   {
      "resources" : [
         "comment"
      ],
      "verb" : "PUT",
      "id" : "update_comment",
      "route" : "/sites/:site_id/comments/:comment_id"
   },
   {
      "verb" : "DELETE",
      "id" : "delete_comment",
      "route" : "/sites/:site_id/comments/:comment_id"
   },
   {
      "verb" : "GET",
      "id" : "list_trackbacks",
      "route" : "/sites/:site_id/trackbacks"
   },
   {
      "verb" : "GET",
      "id" : "list_trackbacks_for_entries",
      "route" : "/sites/:site_id/entries/:entry_id/trackbacks"
   },
   {
      "verb" : "GET",
      "id" : "get_trackback",
      "route" : "/sites/:site_id/trackbacks/:ping_id"
   },
   {
      "resources" : [
         "trackback"
      ],
      "verb" : "PUT",
      "id" : "update_trackback",
      "route" : "/sites/:site_id/trackbacks/:ping_id"
   },
   {
      "verb" : "DELETE",
      "id" : "delete_trackback",
      "route" : "/sites/:site_id/trackbacks/:ping_id"
   },
   {
      "verb" : "POST",
      "id" : "upload_asset",
      "route" : "/sites/:site_id/assets/upload"
   },
   {
      "verb" : "GET",
      "id" : "list_permissions",
      "route" : "/users/:user_id/permissions"
   },
   {
      "verb" : "GET",
      "id" : "publish_entries",
      "route" : "/publish/entries"
   },
   {
      "verb" : "GET",
      "id" : "stats_provider",
      "route" : "/sites/:site_id/stats/provider"
   },
   {
      "verb" : "GET",
      "id" : "stats_pageviews_for_path",
      "route" : "/sites/:site_id/stats/path/pageviews"
   },
   {
      "verb" : "GET",
      "id" : "stats_visits_for_path",
      "route" : "/sites/:site_id/stats/path/visits"
   },
   {
      "verb" : "GET",
      "id" : "stats_pageviews_for_date",
      "route" : "/sites/:site_id/stats/date/pageviews"
   },
   {
      "verb" : "GET",
      "id" : "stats_visits_for_date",
      "route" : "/sites/:site_id/stats/date/visits"
   }
]    );
});

})(window);