<!DOCTYPE html>
<html class="" lang="en">
<head prefix="og: http://ogp.me/ns#">
<meta charset="utf-8">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="object" property="og:type">
<meta content="GitLab" property="og:site_name">
<meta content="doc/_static/proof.js · master · Louis / Sphinxcontrib-Proof" property="og:title">
<meta content="∎ Provide sphinx directives to typeset theorems, properties, proofs, etc." property="og:description">
<meta content="https://framagit.org/spalax/sphinxcontrib-proof/-/avatar" property="og:image">
<meta content="64" property="og:image:width">
<meta content="64" property="og:image:height">
<meta content="https://framagit.org/spalax/sphinxcontrib-proof/blob/master/doc/_static/proof.js" property="og:url">
<meta content="summary" property="twitter:card">
<meta content="doc/_static/proof.js · master · Louis / Sphinxcontrib-Proof" property="twitter:title">
<meta content="∎ Provide sphinx directives to typeset theorems, properties, proofs, etc." property="twitter:description">
<meta content="https://framagit.org/spalax/sphinxcontrib-proof/-/avatar" property="twitter:image">

<title>doc/_static/proof.js · master · Louis / Sphinxcontrib-Proof · GitLab</title>
<meta content="∎ Provide sphinx directives to typeset theorems, properties, proofs, etc." name="description">
<link rel="shortcut icon" type="image/png" href="/assets/favicon-7901bd695fb93edb07975966062049829afb56cf11511236e61bcf425070e36e.png" id="favicon" data-original-href="/assets/favicon-7901bd695fb93edb07975966062049829afb56cf11511236e61bcf425070e36e.png" />
<link rel="stylesheet" media="all" href="/assets/application-340c31a75c5150c5e501ec143849adbed26fed0da5a5ee8c60fb928009ea3b86.css" />
<link rel="stylesheet" media="print" href="/assets/print-74c3df10dad473d66660c828e3aa54ca3bfeac6d8bb708643331403fe7211e60.css" />



<link rel="stylesheet" media="all" href="/assets/highlight/themes/white-a165d47ce52cf24c29686366976ae691bd9addb9641a6abeb3ba6d1823b89aa8.css" />
<script>
//<![CDATA[
window.gon={};gon.api_version="v4";gon.default_avatar_url="https://framagit.org/assets/no_avatar-849f9c04a3a0d0cea2424ae97b27447dc64a7dbfae83c036c45b403392f0e8ba.png";gon.max_file_size=12;gon.asset_host=null;gon.webpack_public_path="/assets/webpack/";gon.relative_url_root="";gon.shortcuts_path="/help/shortcuts";gon.user_color_scheme="white";gon.gitlab_url="https://framagit.org";gon.revision="6ccbccc2010";gon.gitlab_logo="/assets/gitlab_logo-7ae504fe4f68fdebb3c2034e36621930cd36ea87924c11ff65dbcb8ed50dca58.png";gon.sprite_icons="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg";gon.sprite_file_icons="/assets/file_icons-7262fc6897e02f1ceaf8de43dc33afa5e4f9a2067f4f68ef77dcc87946575e9e.svg";gon.emoji_sprites_css_path="/assets/emoji_sprites-289eccffb1183c188b630297431be837765d9ff4aed6130cf738586fb307c170.css";gon.test_env=false;gon.suggested_label_colors={"#0033CC":"UA blue","#428BCA":"Moderate blue","#44AD8E":"Lime green","#A8D695":"Feijoa","#5CB85C":"Slightly desaturated green","#69D100":"Bright green","#004E00":"Very dark lime green","#34495E":"Very dark desaturated blue","#7F8C8D":"Dark grayish cyan","#A295D6":"Slightly desaturated blue","#5843AD":"Dark moderate blue","#8E44AD":"Dark moderate violet","#FFECDB":"Very pale orange","#AD4363":"Dark moderate pink","#D10069":"Strong pink","#CC0033":"Strong red","#FF0000":"Pure red","#D9534F":"Soft red","#D1D100":"Strong yellow","#F0AD4E":"Soft orange","#AD8D43":"Dark moderate orange"};gon.first_day_of_week=0;gon.ee=false;gon.features={"gfmEmbeddedMetrics":false};
//]]>
</script>


<script src="/assets/webpack/runtime.266a8a44.bundle.js" defer="defer"></script>
<script src="/assets/webpack/main.fcd749a5.chunk.js" defer="defer"></script>
<script src="/assets/webpack/commons~pages.admin.clusters~pages.admin.clusters.destroy~pages.admin.clusters.edit~pages.admin.clus~0bac9ec4.4b3aaa21.chunk.js" defer="defer"></script>
<script src="/assets/webpack/commons~pages.groups.milestones.edit~pages.groups.milestones.new~pages.projects.blame.show~pages.pro~bedd5722.fa8ed31a.chunk.js" defer="defer"></script>
<script src="/assets/webpack/pages.projects.blob.show.5cc38b17.chunk.js" defer="defer"></script>

<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="KE9S/P7Dv78XHL7k8QmzXzYIEJ8AEloGxVk9Sxn5QYHCrj+kQwhL4Jb2truOiV1c/HSHhRaMKwLqxFFDCK+VbQ==" />
<meta content="origin-when-cross-origin" name="referrer">
<meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport">
<meta content="#474D57" name="theme-color">
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-iphone-5a9cee0e8a51212e70b90c87c12f382c428870c0ff67d1eb034d884b78d2dae7.png" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-ipad-a6eec6aeb9da138e507593b464fdac213047e49d3093fc30e90d9a995df83ba3.png" sizes="76x76" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-iphone-retina-72e2aadf86513a56e050e7f0f2355deaa19cc17ed97bbe5147847f2748e5a3e3.png" sizes="120x120" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-ipad-retina-8ebe416f5313483d9c1bc772b5bbe03ecad52a54eba443e5215a22caed2a16a2.png" sizes="152x152" />
<link color="rgb(226, 67, 41)" href="/assets/logo-d36b5212042cebc89b96df4bf6ac24e43db316143e89926c0db839ff694d2de4.svg" rel="mask-icon">
<meta content="/assets/msapplication-tile-1196ec67452f618d39cdd85e2e3a542f76574c071051ae7effbfde01710eb17d.png" name="msapplication-TileImage">
<meta content="#30353E" name="msapplication-TileColor">


<!-- Piwik -->
<script>
  var _paq = _paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//stats.framasoft.org/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', "29"]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<noscript><p><img src="//stats.framasoft.org/piwik.php?idsite=29" style="border:0;" alt="" /></p></noscript>
<!-- End Piwik Code -->



</head>

<body class="ui-indigo  gl-browser-chrome gl-platform-mac" data-find-file="/spalax/sphinxcontrib-proof/find_file/master" data-group="" data-page="projects:blob:show" data-project="sphinxcontrib-proof">

<script>
  gl = window.gl || {};
  gl.client = {"isChrome":true,"isMac":true};
</script>



<header class="navbar navbar-gitlab navbar-expand-sm js-navbar" data-qa-selector="navbar">
<a class="sr-only gl-accessibility" href="#content-body" tabindex="1">Skip to content</a>
<div class="container-fluid">
<div class="header-content">
<div class="title-container">
<h1 class="title">
<a title="Dashboard" id="logo" href="/"><img class="brand-header-logo lazy" data-src="/uploads/-/system/appearance/header_logo/1/logo.png" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
</a></h1>
<ul class="list-unstyled navbar-sub-nav">
<li class="home"><a title="Projects" class="dashboard-shortcuts-projects" href="/explore">Projects
</a></li><li class=""><a title="Groups" class="dashboard-shortcuts-groups" href="/explore/groups">Groups
</a></li><li class=""><a title="Snippets" class="dashboard-shortcuts-snippets" href="/explore/snippets">Snippets
</a></li><li>
<a title="About GitLab CE" href="/help">Help</a>
</li>
</ul>

</div>
<div class="navbar-collapse collapse">
<ul class="nav navbar-nav">
<li class="nav-item d-none d-sm-none d-md-block m-auto">
<div class="search search-form" data-track-event="activate_form_input" data-track-label="navbar_search" data-track-value="">
<form class="form-inline" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><div class="search-input-container">
<div class="search-input-wrap">
<div class="dropdown" data-url="/search/autocomplete">
<input type="search" name="search" id="search" placeholder="Search or jump to…" class="search-input dropdown-menu-toggle no-outline js-search-dashboard-options" spellcheck="false" tabindex="1" autocomplete="off" data-issues-path="/dashboard/issues" data-mr-path="/dashboard/merge_requests" aria-label="Search or jump to…" />
<button class="hidden js-dropdown-search-toggle" data-toggle="dropdown" type="button"></button>
<div class="dropdown-menu dropdown-select js-dashboard-search-options">
<div class="dropdown-content"><ul>
<li class="dropdown-menu-empty-item">
<a>
Loading...
</a>
</li>
</ul>
</div><div class="dropdown-loading"><i aria-hidden="true" data-hidden="true" class="fa fa-spinner fa-spin"></i></div>
</div>
<svg class="s16 search-icon"><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#search"></use></svg>
<svg class="s16 clear-icon js-clear-input"><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#close"></use></svg>
</div>
</div>
</div>
<input type="hidden" name="group_id" id="group_id" class="js-search-group-options" />
<input type="hidden" name="project_id" id="search_project_id" value="2254" class="js-search-project-options" data-project-path="sphinxcontrib-proof" data-name="Sphinxcontrib-Proof" data-issues-path="/spalax/sphinxcontrib-proof/issues" data-mr-path="/spalax/sphinxcontrib-proof/merge_requests" data-issues-disabled="false" />
<input type="hidden" name="search_code" id="search_code" value="true" />
<input type="hidden" name="repository_ref" id="repository_ref" value="master" />

<div class="search-autocomplete-opts hide" data-autocomplete-path="/search/autocomplete" data-autocomplete-project-id="2254" data-autocomplete-project-ref="master"></div>
</form></div>

</li>
<li class="nav-item d-inline-block d-sm-none d-md-none">
<a title="Search" aria-label="Search" data-toggle="tooltip" data-placement="bottom" data-container="body" href="/search?project_id=2254"><svg class="s16"><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#search"></use></svg>
</a></li>
<li class="nav-item header-help dropdown">
<a class="header-help-dropdown-toggle" data-toggle="dropdown" href="/help"><svg class="s16"><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#question"></use></svg>
<svg class="caret-down"><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#angle-down"></use></svg>
</a><div class="dropdown-menu dropdown-menu-right">
<ul>
<li>
<a href="/help">Help</a>
</li>

<li class="divider"></li>
<li>
<a href="https://about.gitlab.com/submit-feedback">Submit feedback</a>
</li>
<li>
<a target="_blank" class="text-nowrap" href="https://about.gitlab.com/contributing">Contribute to GitLab
</a></li>


</ul>

</div>
</li>
<li class="nav-item">
<div>
<a class="btn btn-sign-in" href="/users/sign_in?redirect_to_referer=yes">Sign in / Register</a>
</div>
</li>
</ul>
</div>
<button class="navbar-toggler d-block d-sm-none" type="button">
<span class="sr-only">Toggle navigation</span>
<svg class="s12 more-icon js-navbar-toggle-right"><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#ellipsis_h"></use></svg>
<svg class="s12 close-icon js-navbar-toggle-left"><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#close"></use></svg>
</button>
</div>
</div>
</header>

<div class="layout-page page-with-contextual-sidebar">
<div class="nav-sidebar">
<div class="nav-sidebar-inner-scroll">
<div class="context-header">
<a title="Sphinxcontrib-Proof" href="/spalax/sphinxcontrib-proof"><div class="avatar-container rect-avatar s40 project-avatar">
<img alt="Sphinxcontrib-Proof" class="avatar s40 avatar-tile lazy" width="40" height="40" data-src="https://framagit.org/spalax/sphinxcontrib-proof/-/avatar" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
</div>
<div class="sidebar-context-title">
Sphinxcontrib-Proof
</div>
</a></div>
<ul class="sidebar-top-level-items">
<li class="home"><a class="shortcuts-project qa-link-project" href="/spalax/sphinxcontrib-proof"><div class="nav-icon-container">
<svg><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#home"></use></svg>
</div>
<span class="nav-item-name">
Project
</span>
</a><ul class="sidebar-sub-level-items">
<li class="fly-out-top-item"><a href="/spalax/sphinxcontrib-proof"><strong class="fly-out-top-item-name">
Project
</strong>
</a></li><li class="divider fly-out-top-item"></li>
<li class=""><a title="Project details" class="shortcuts-project" href="/spalax/sphinxcontrib-proof"><span>Details</span>
</a></li><li class=""><a title="Activity" class="shortcuts-project-activity qa-activity-link" href="/spalax/sphinxcontrib-proof/activity"><span>Activity</span>
</a></li><li class=""><a title="Releases" class="shortcuts-project-releases" href="/spalax/sphinxcontrib-proof/-/releases"><span>Releases</span>
</a></li>

<li class=""><a title="Cycle Analytics" class="shortcuts-project-cycle-analytics" href="/spalax/sphinxcontrib-proof/cycle_analytics"><span>Cycle Analytics</span>
</a></li>
</ul>
</li><li class="active"><a class="shortcuts-tree qa-project-menu-repo" href="/spalax/sphinxcontrib-proof/tree/master"><div class="nav-icon-container">
<svg><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#doc-text"></use></svg>
</div>
<span class="nav-item-name" id="js-onboarding-repo-link">
Repository
</span>
</a><ul class="sidebar-sub-level-items">
<li class="fly-out-top-item active"><a href="/spalax/sphinxcontrib-proof/tree/master"><strong class="fly-out-top-item-name">
Repository
</strong>
</a></li><li class="divider fly-out-top-item"></li>
<li class="active"><a href="/spalax/sphinxcontrib-proof/tree/master">Files
</a></li><li class=""><a id="js-onboarding-commits-link" href="/spalax/sphinxcontrib-proof/commits/master">Commits
</a></li><li class=""><a class="qa-branches-link" id="js-onboarding-branches-link" href="/spalax/sphinxcontrib-proof/-/branches">Branches
</a></li><li class=""><a href="/spalax/sphinxcontrib-proof/-/tags">Tags
</a></li><li class=""><a href="/spalax/sphinxcontrib-proof/-/graphs/master">Contributors
</a></li><li class=""><a href="/spalax/sphinxcontrib-proof/-/network/master">Graph
</a></li><li class=""><a href="/spalax/sphinxcontrib-proof/compare?from=master&amp;to=master">Compare
</a></li><li class=""><a href="/spalax/sphinxcontrib-proof/-/graphs/master/charts">Charts
</a></li>
</ul>
</li><li class=""><a class="shortcuts-issues qa-issues-item" href="/spalax/sphinxcontrib-proof/issues"><div class="nav-icon-container">
<svg><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#issues"></use></svg>
</div>
<span class="nav-item-name" id="js-onboarding-issues-link">
Issues
</span>
<span class="badge badge-pill count issue_counter">
1
</span>
</a><ul class="sidebar-sub-level-items">
<li class="fly-out-top-item"><a href="/spalax/sphinxcontrib-proof/issues"><strong class="fly-out-top-item-name">
Issues
</strong>
<span class="badge badge-pill count issue_counter fly-out-badge">
1
</span>
</a></li><li class="divider fly-out-top-item"></li>
<li class=""><a title="Issues" href="/spalax/sphinxcontrib-proof/issues"><span>
List
</span>
</a></li><li class=""><a title="Boards" href="/spalax/sphinxcontrib-proof/-/boards"><span>
Boards
</span>
</a></li><li class=""><a title="Labels" class="qa-labels-link" href="/spalax/sphinxcontrib-proof/-/labels"><span>
Labels
</span>
</a></li>
<li class=""><a title="Milestones" class="qa-milestones-link" href="/spalax/sphinxcontrib-proof/-/milestones"><span>
Milestones
</span>
</a></li></ul>
</li><li class=""><a class="shortcuts-merge_requests qa-merge-requests-link" href="/spalax/sphinxcontrib-proof/merge_requests"><div class="nav-icon-container">
<svg><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#git-merge"></use></svg>
</div>
<span class="nav-item-name" id="js-onboarding-mr-link">
Merge Requests
</span>
<span class="badge badge-pill count merge_counter js-merge-counter">
2
</span>
</a><ul class="sidebar-sub-level-items is-fly-out-only">
<li class="fly-out-top-item"><a href="/spalax/sphinxcontrib-proof/merge_requests"><strong class="fly-out-top-item-name">
Merge Requests
</strong>
<span class="badge badge-pill count merge_counter js-merge-counter fly-out-badge">
2
</span>
</a></li></ul>
</li><li class=""><a class="shortcuts-pipelines qa-link-pipelines" href="/spalax/sphinxcontrib-proof/pipelines"><div class="nav-icon-container">
<svg><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#rocket"></use></svg>
</div>
<span class="nav-item-name" id="js-onboarding-pipelines-link">
CI / CD
</span>
</a><ul class="sidebar-sub-level-items">
<li class="fly-out-top-item"><a href="/spalax/sphinxcontrib-proof/pipelines"><strong class="fly-out-top-item-name">
CI / CD
</strong>
</a></li><li class="divider fly-out-top-item"></li>
<li class=""><a title="Pipelines" class="shortcuts-pipelines" href="/spalax/sphinxcontrib-proof/pipelines"><span>
Pipelines
</span>
</a></li><li class=""><a title="Jobs" class="shortcuts-builds" href="/spalax/sphinxcontrib-proof/-/jobs"><span>
Jobs
</span>
</a></li><li class=""><a title="Schedules" class="shortcuts-builds" href="/spalax/sphinxcontrib-proof/pipeline_schedules"><span>
Schedules
</span>
</a></li><li class=""><a title="Charts" class="shortcuts-pipelines-charts" href="/spalax/sphinxcontrib-proof/pipelines/charts"><span>
Charts
</span>
</a></li></ul>
</li>
<li class=""><a class="shortcuts-wiki qa-wiki-link" href="/spalax/sphinxcontrib-proof/wikis/home"><div class="nav-icon-container">
<svg><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#book"></use></svg>
</div>
<span class="nav-item-name">
Wiki
</span>
</a><ul class="sidebar-sub-level-items is-fly-out-only">
<li class="fly-out-top-item"><a href="/spalax/sphinxcontrib-proof/wikis/home"><strong class="fly-out-top-item-name">
Wiki
</strong>
</a></li></ul>
</li><li class=""><a class="shortcuts-snippets" href="/spalax/sphinxcontrib-proof/snippets"><div class="nav-icon-container">
<svg><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#snippet"></use></svg>
</div>
<span class="nav-item-name">
Snippets
</span>
</a><ul class="sidebar-sub-level-items is-fly-out-only">
<li class="fly-out-top-item"><a href="/spalax/sphinxcontrib-proof/snippets"><strong class="fly-out-top-item-name">
Snippets
</strong>
</a></li></ul>
</li><li class=""><a title="Members" class="shortcuts-tree" href="/spalax/sphinxcontrib-proof/-/settings/members"><div class="nav-icon-container">
<svg><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#users"></use></svg>
</div>
<span class="nav-item-name">
Members
</span>
</a><ul class="sidebar-sub-level-items is-fly-out-only">
<li class="fly-out-top-item"><a href="/spalax/sphinxcontrib-proof/-/project_members"><strong class="fly-out-top-item-name">
Members
</strong>
</a></li></ul>
</li><a class="toggle-sidebar-button js-toggle-sidebar qa-toggle-sidebar" role="button" title="Toggle sidebar" type="button">
<svg class="icon-angle-double-left"><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#angle-double-left"></use></svg>
<svg class="icon-angle-double-right"><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#angle-double-right"></use></svg>
<span class="collapse-text">Collapse sidebar</span>
</a>
<button name="button" type="button" class="close-nav-button"><svg class="s16"><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#close"></use></svg>
<span class="collapse-text">Close sidebar</span>
</button>
<li class="hidden">
<a title="Activity" class="shortcuts-project-activity" href="/spalax/sphinxcontrib-proof/activity"><span>
Activity
</span>
</a></li>
<li class="hidden">
<a title="Network" class="shortcuts-network" href="/spalax/sphinxcontrib-proof/-/network/master">Graph
</a></li>
<li class="hidden">
<a title="Charts" class="shortcuts-repository-charts" href="/spalax/sphinxcontrib-proof/-/graphs/master/charts">Charts
</a></li>
<li class="hidden">
<a class="shortcuts-new-issue" href="/spalax/sphinxcontrib-proof/issues/new">Create a new issue
</a></li>
<li class="hidden">
<a title="Jobs" class="shortcuts-builds" href="/spalax/sphinxcontrib-proof/-/jobs">Jobs
</a></li>
<li class="hidden">
<a title="Commits" class="shortcuts-commits" href="/spalax/sphinxcontrib-proof/commits/master">Commits
</a></li>
<li class="hidden">
<a title="Issue Boards" class="shortcuts-issue-boards" href="/spalax/sphinxcontrib-proof/-/boards">Issue Boards</a>
</li>
</ul>
</div>
</div>

<div class="content-wrapper">

<div class="mobile-overlay"></div>
<div class="alert-wrapper">

<div dir="auto" class="broadcast-message" style="background-color: #e75e40; color: #ffffff"><i aria-hidden="true" data-hidden="true" class="fa fa-bullhorn"></i> <p>Attention ! Gitlab fournissant maintenant nativement des certificats Let’s Encrypt aux domaines personnalisés des Gitlab Pages, nous avons coupé notre service qui le faisait automatiquement pour vous.</p>
<p>Il est <strong>impératif</strong>, pour que votre domaine personnalisé continue à avoir un certificat Let’s Encrypt à jour, d’activer la fonctionnalité native dans les paramètres de votre projet. Cette activation remplacera votre certificat actuel par un nouveau certificat Let’s Encrypt géré par Gitlab.</p>
<p>Voir les détails sur <a href="https://docs.framasoft.org/fr/gitlab/gitlab-pages-le.html" rel="nofollow noreferrer noopener" target="_blank">https://docs.framasoft.org/fr/gitlab/gitlab-pages-le.html</a></p></div>





<nav class="breadcrumbs container-fluid container-limited" role="navigation">
<div class="breadcrumbs-container">
<button name="button" type="button" class="toggle-mobile-nav"><span class="sr-only">Open sidebar</span>
<i aria-hidden="true" data-hidden="true" class="fa fa-bars"></i>
</button><div class="breadcrumbs-links js-title-container">
<ul class="list-unstyled breadcrumbs-list js-breadcrumbs-list">
<li><a href="/spalax">Louis</a><svg class="s8 breadcrumbs-list-angle"><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#angle-right"></use></svg></li> <li><a href="/spalax/sphinxcontrib-proof"><img alt="Sphinxcontrib-Proof" class="avatar-tile lazy" width="15" height="15" data-src="https://framagit.org/spalax/sphinxcontrib-proof/-/avatar" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><span class="breadcrumb-item-text js-breadcrumb-item-text">Sphinxcontrib-Proof</span></a><svg class="s8 breadcrumbs-list-angle"><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#angle-right"></use></svg></li>

<li>
<h2 class="breadcrumbs-sub-title"><a href="/spalax/sphinxcontrib-proof/blob/master/doc/_static/proof.js">Repository</a></h2>
</li>
</ul>
</div>

</div>
</nav>

<div class="flash-container flash-container-page">
</div>

<div class="d-flex"></div>
</div>
<div class=" ">
<div class="content" id="content-body">
<div class="js-signature-container" data-signatures-path="/spalax/sphinxcontrib-proof/commits/3f37e7a0bfe1de980120bfff72ea3564d36fbbd7/signatures"></div>
<div class="container-fluid container-limited">

<div class="tree-holder" id="tree-holder">
<div class="nav-block">
<div class="tree-ref-container">
<div class="tree-ref-holder">
<form class="project-refs-form" action="/spalax/sphinxcontrib-proof/refs/switch" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="destination" id="destination" value="blob" />
<input type="hidden" name="path" id="path" value="doc/_static/proof.js" />
<div class="dropdown">
<button class="dropdown-menu-toggle js-project-refs-dropdown qa-branches-select" type="button" data-toggle="dropdown" data-selected="master" data-ref="master" data-refs-url="/spalax/sphinxcontrib-proof/refs?sort=updated_desc" data-field-name="ref" data-submit-form-on-click="true" data-visit="true"><span class="dropdown-toggle-text ">master</span><i aria-hidden="true" data-hidden="true" class="fa fa-chevron-down"></i></button>
<div class="dropdown-menu dropdown-menu-paging dropdown-menu-selectable git-revision-dropdown qa-branches-dropdown">
<div class="dropdown-page-one">
<div class="dropdown-title"><span>Switch branch/tag</span><button class="dropdown-title-button dropdown-menu-close" aria-label="Close" type="button"><i aria-hidden="true" data-hidden="true" class="fa fa-times dropdown-menu-close-icon"></i></button></div>
<div class="dropdown-input"><input type="search" id="" class="dropdown-input-field qa-dropdown-input-field" placeholder="Search branches and tags" autocomplete="off" /><i aria-hidden="true" data-hidden="true" class="fa fa-search dropdown-input-search"></i><i aria-hidden="true" data-hidden="true" role="button" class="fa fa-times dropdown-input-clear js-dropdown-input-clear"></i></div>
<div class="dropdown-content"></div>
<div class="dropdown-loading"><i aria-hidden="true" data-hidden="true" class="fa fa-spinner fa-spin"></i></div>
</div>
</div>
</div>
</form>
</div>
<ul class="breadcrumb repo-breadcrumb">
<li class="breadcrumb-item">
<a href="/spalax/sphinxcontrib-proof/tree/master">sphinxcontrib-proof
</a></li>
<li class="breadcrumb-item">
<a href="/spalax/sphinxcontrib-proof/tree/master/doc">doc</a>
</li>
<li class="breadcrumb-item">
<a href="/spalax/sphinxcontrib-proof/tree/master/doc/_static">_static</a>
</li>
<li class="breadcrumb-item">
<a href="/spalax/sphinxcontrib-proof/blob/master/doc/_static/proof.js"><strong>proof.js</strong>
</a></li>
</ul>
</div>
<div class="tree-controls">
<a class="btn shortcuts-find-file" rel="nofollow" href="/spalax/sphinxcontrib-proof/find_file/master"><i aria-hidden="true" data-hidden="true" class="fa fa-search"></i>
<span>Find file</span>
</a>
<div class="btn-group" role="group"><a class="btn js-blob-blame-link" href="/spalax/sphinxcontrib-proof/blame/master/doc/_static/proof.js">Blame</a><a class="btn" href="/spalax/sphinxcontrib-proof/commits/master/doc/_static/proof.js">History</a><a class="btn js-data-file-blob-permalink-url" href="/spalax/sphinxcontrib-proof/blob/9b0e5a062db5d5f6217b535b814b3b4f654d62cf/doc/_static/proof.js">Permalink</a></div>
</div>
</div>

<div class="info-well d-none d-sm-block">
<div class="well-segment">
<ul class="blob-commit-info">
<li class="commit flex-row js-toggle-container" id="commit-3f37e7a0">
<div class="avatar-cell d-none d-sm-block">
<a href="mailto:spalax@gresille.org"><img alt="Louis Paternault&#39;s avatar" src="/assets/no_avatar-849f9c04a3a0d0cea2424ae97b27447dc64a7dbfae83c036c45b403392f0e8ba.png" class="avatar s40 d-none d-sm-inline" title="Louis Paternault" /></a>
</div>
<div class="commit-detail flex-list">
<div class="commit-content qa-commit-content">
<a class="commit-row-message item-title js-onboarding-commit-item" href="/spalax/sphinxcontrib-proof/commit/3f37e7a0bfe1de980120bfff72ea3564d36fbbd7">Javascript and CSS are now longer provided by default</a>
<span class="commit-row-message d-inline d-sm-none">
&middot;
3f37e7a0
</span>
<div class="committer">
<a class="commit-author-link" href="mailto:spalax@gresille.org">Louis Paternault</a> authored <time class="js-timeago" title="Sep 26, 2015 10:48am" datetime="2015-09-26T10:48:46Z" data-toggle="tooltip" data-placement="bottom" data-container="body">Sep 26, 2015</time>
</div>

</div>
<div class="commit-actions flex-row">

<div class="js-commit-pipeline-status" data-endpoint="/spalax/sphinxcontrib-proof/commit/3f37e7a0bfe1de980120bfff72ea3564d36fbbd7/pipelines?ref=master"></div>
<div class="commit-sha-group d-none d-sm-flex">
<div class="label label-monospace monospace">
3f37e7a0
</div>
<button class="btn btn btn-default" data-toggle="tooltip" data-placement="bottom" data-container="body" data-title="Copy commit SHA to clipboard" data-class="btn btn-default" data-clipboard-text="3f37e7a0bfe1de980120bfff72ea3564d36fbbd7" type="button" title="Copy commit SHA to clipboard" aria-label="Copy commit SHA to clipboard"><svg><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#duplicate"></use></svg></button>

</div>
</div>
</div>
</li>

</ul>
</div>


</div>
<div class="blob-content-holder" id="blob-content-holder">
<article class="file-holder">
<div class="js-file-title file-title-flex-parent">
<div class="file-header-content">
<i aria-hidden="true" data-hidden="true" class="fa fa-file-text-o fa-fw"></i>
<strong class="file-title-name qa-file-title-name">
proof.js
</strong>
<button class="btn btn-clipboard btn-transparent" data-toggle="tooltip" data-placement="bottom" data-container="body" data-class="btn-clipboard btn-transparent" data-title="Copy file path to clipboard" data-clipboard-text="{&quot;text&quot;:&quot;doc/_static/proof.js&quot;,&quot;gfm&quot;:&quot;`doc/_static/proof.js`&quot;}" type="button" title="Copy file path to clipboard" aria-label="Copy file path to clipboard"><svg><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#duplicate"></use></svg></button>
<small class="mr-1">
344 Bytes
</small>
</div>

<div class="file-actions">

<div class="btn-group" role="group"><button class="btn btn btn-sm js-copy-blob-source-btn" data-toggle="tooltip" data-placement="bottom" data-container="body" data-class="btn btn-sm js-copy-blob-source-btn" data-title="Copy source to clipboard" data-clipboard-target=".blob-content[data-blob-id=&#39;15ea0fc19ee1ac354eadbbda8ca22780e021d741&#39;]" type="button" title="Copy source to clipboard" aria-label="Copy source to clipboard"><svg><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#duplicate"></use></svg></button><a class="btn btn-sm has-tooltip" target="_blank" rel="noopener noreferrer" title="Open raw" data-container="body" href="/spalax/sphinxcontrib-proof/raw/master/doc/_static/proof.js"><i aria-hidden="true" data-hidden="true" class="fa fa-file-code-o"></i></a><a download="doc/_static/proof.js" class="btn btn-sm has-tooltip" target="_blank" rel="noopener noreferrer" title="Download" data-container="body" href="/spalax/sphinxcontrib-proof/raw/master/doc/_static/proof.js?inline=false"><svg><use xlink:href="/assets/icons-d2ccb0e13086d398012c6c445cbd9fc0ed64fb5278cafd89f8be8e0a33a85383.svg#download"></use></svg></a></div>
<div class="btn-group" role="group"><a class="btn js-edit-blob  btn-sm" href="/spalax/sphinxcontrib-proof/edit/master/doc/_static/proof.js">Edit</a><a class="btn btn-default btn-sm" href="/-/ide/project/spalax/sphinxcontrib-proof/edit/master/-/doc/_static/proof.js">Web IDE</a></div>
</div>
</div>



<div class="blob-viewer" data-type="simple" data-url="/spalax/sphinxcontrib-proof/blob/master/doc/_static/proof.js?format=json&amp;viewer=simple">
<div class="text-center prepend-top-default append-bottom-default">
<i aria-hidden="true" aria-label="Loading content…" class="fa fa-spinner fa-spin fa-2x qa-spinner"></i>
</div>

</div>


</article>
</div>

<div class="modal" id="modal-upload-blob">
<div class="modal-dialog modal-lg">
<div class="modal-content">
<div class="modal-header">
<h3 class="page-title">Replace proof.js</h3>
<button aria-label="Close" class="close" data-dismiss="modal" type="button">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<form class="js-quick-submit js-upload-blob-form" data-method="put" action="/spalax/sphinxcontrib-proof/update/master/doc/_static/proof.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="HRWBc6Lcw0BYMSZD0z1LHhSUl5XuGry5ep0XfRXOsgr39OwrHxc3H9nbLhysvaUd3ugAj/iEzb1VAHt1BJhm5g==" /><div class="dropzone">
<div class="dropzone-previews blob-upload-dropzone-previews">
<p class="dz-message light">
Attach a file by drag &amp; drop or <a class="markdown-selector" href="#">click to upload</a>
</p>
</div>
</div>
<br>
<div class="dropzone-alerts alert alert-danger data" style="display:none"></div>
<div class="form-group row commit_message-group">
<label class="col-form-label col-sm-2" for="commit_message-011fa9349cff644ade348b86b5537193">Commit message
</label><div class="col-sm-10">
<div class="commit-message-container">
<div class="max-width-marker"></div>
<textarea name="commit_message" id="commit_message-011fa9349cff644ade348b86b5537193" class="form-control js-commit-message" placeholder="Replace proof.js" required="required" rows="3">
Replace proof.js</textarea>
</div>
</div>
</div>

<input type="hidden" name="branch_name" id="branch_name" />
<input type="hidden" name="create_merge_request" id="create_merge_request" value="1" />
<input type="hidden" name="original_branch" id="original_branch" value="master" class="js-original-branch" />

<div class="form-actions">
<button name="button" type="button" class="btn btn-success btn-upload-file" id="submit-all"><i aria-hidden="true" data-hidden="true" class="fa fa-spin fa-spinner js-loading-icon hidden"></i>
Replace file
</button><a class="btn btn-cancel" data-dismiss="modal" href="#">Cancel</a>
<div class="inline prepend-left-10">
A new branch will be created in your fork and a new merge request will be started.
</div>

</div>
</form></div>
</div>
</div>
</div>

</div>
</div>

</div>
</div>
</div>
</div>




</body>
</html>

