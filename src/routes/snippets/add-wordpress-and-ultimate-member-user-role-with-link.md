---
title: 'Add WordPress and Ultimate Member User Role with Link'
date: 2020-05-12
tags: ['WordPress', 'Ultimate Member', 'PHP']
---

1. Create a php file (e.g. . `/path/to/file/addUserRole.php`)
2. Insert URL: `site_url/path/to/file/addUserRole?role=member&?redirect=site_url`

```PHP
<?php

//import from Ultimate Member
use um\core\Roles_Capabilities;

$isUltimateMember = true;

//error_reporting(0);

define('WP_USE_THEMES', false);
require('../wp-load.php'); //need this do work
add_action('profile_update', 'addUserRole', 10, 2); //register wordpress action

//get params
$role_STRING = $_REQUEST['role'];   //new role
$redirect_URL = $_REQUEST['url'];  //link to URL after setting role
$msg = "Error"; //message (displayed as GET Param)

//check for redirect link
if (!isset($_REQUEST['url'])) {
    $redirect_URL = home_url();
}

//verify if user is logged
if (is_user_logged_in()) {

    //avoid user becomes admin or main wordpress roles
    switch ($role_STRING) {
        case "wpseo_manager":
        case "wpseo_editor":
        case "translator":
        case "subscriber":
        case "editor":
        case "contributor":
        case "author":
        case "administrator":
            $msg = "User tried to become $role_STRING";
            $role_STRING = "";
            exit(wp_safe_redirect("location: $redirect_URL?msg=$msg"));
            break;

        default:
            //add user role
            addUserRole(wp_get_current_user()->ID, $role_STRING, $redirect_URL, $isUltimateMember); //get user ID
    }
}

$msg = "User not logged in";
//If user is not logged
exit(wp_safe_redirect("location: $redirect_URL?msg=$msg"));

function addUserRole($user_ID, $role_STRING, $redirect_URL, $isUltimateMember = false) {

    if ($isUltimateMember) {
        //add roles to ultimate member plugin
        $u = new Roles_Capabilities();
        $u->set_role($user_ID, $role_STRING); //add a new user-role for user->ID

    } else {
        //add role normal
        $u = new WP_User($user_ID); //pick a past user Role
        $u->add_role($role_STRING); //add a new user-role for user->ID
    }

    $msg = "Role added";
    exit(wp_safe_redirect("location: $redirect_URL?msg=$msg")); //redirect to page
}
```
