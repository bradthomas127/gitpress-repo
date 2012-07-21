GitPress Repo
=============

GitPress Repo is a WordPress plugin that lets you easily embed a Github repo or Gist onto your WordPress site with a shortcode. This is great for other plugin or library authors that want to showcase the contents of a repo on their WordPress project pages. 

GitPress Repo uses [Darcy Clarke](https://github.com/darcyclarke)'s Repo.js and [Repo.js](https://github.com/darcyclarke/Repo.js) uses [Markus Ekwall](https://twitter.com/#!/mekwall)'s [jQuery Vangogh](https://github.com/mekwall/jquery-vangogh) plugin for styling of file contents. Vangogh, subsequently, utilizes [highlight.js](https://github.com/isagalaev/highlight.js), written by [Ivan Sagalaev](https://github.com/isagalaev) for syntax highlighting.

##Demo

Demo: [GitPress Repo Demo](http://wp-ultra.com/2012/07/gitpress-repo-plugin/)

##Example Use

``
[repo name="_s" author="Automattic"]
``

You can also reference a specific branch if you want:

``
[repo name="jquery" author="jquery" branch="strip_iife"]
``

Or a Gist:

``
[gist id="2639806"]
``

@author [bradthomas127](http://wp-ultra.com)
@version 1.0
