<!DOCTYPE html>
    <html lang="{{ app()->getLocale() }}">
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>@yield('title')</title>
  <!-- plugins:css -->
<meta name="csrf-token" content="{{ csrf_token() }}">
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">


  <link rel="stylesheet" href="/assets/admin/vendors/iconfonts/ti-icons/css/themify-icons.css">
  <link rel="stylesheet" href="/assets/admin/vendors/css/vendor.bundle.base.css">
  <link rel="stylesheet" href="/assets/admin/vendors/css/vendor.bundle.addons.css">
  <script src="/assets/admin/vendors/js/vendor.bundle.base.js"></script>
  
  <link rel="stylesheet" href="/assets/admin/css/vertical-layout-light/style.css">
  <link rel="stylesheet" href="/assets/admin/css/vertical-layout-light/custom.css">
  <link rel="stylesheet" href="/assets/admin/vendors/summernote/dist/summernote-bs4.css">
<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />








</head>
<style type="text/css">
    a{
        color:white;
        padding:10px;
    }
</style>
<body class="sidebar-dark">
      
@yield('content')
<script src="{{asset('js/app.js')}}" ></script>
  <script src="/assets/admin/vendors/js/vendor.bundle.addons.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/js/fontawesome.js"></script>

  <!-- endinject -->
  <!-- Plugin js for this page-->
  <!-- End plugin js for this page-->
  <!-- inject:js -->
  
  <script src="/assets/admin/js/off-canvas.js"></script>
  <script src="/assets/admin/js/hoverable-collapse.js"></script>
  <script src="/assets/admin/js/template.js"></script>
  <script src="/assets/admin/js/settings.js"></script>
  <script src="/assets/admin/js/todolist.js"></script>
  <!-- endinject -->
  <!-- Custom js for this page-->
  <script src="/assets/admin/js/dashboard.js"></script>
  <script src="/assets/admin/vendors/summernote/dist/summernote-bs4.min.js"></script>
  <!-- End custom js for this page-->
</body>


<!-- Mirrored from www.urbanui.com/justdo/template/demo/vertical-dark-sidebar/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 23 Mar 2019 10:57:59 GMT -->
</html>

