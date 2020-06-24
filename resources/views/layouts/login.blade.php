
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <title>Login </title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
<!--===============================================================================================-->  
    <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="/assets/login/vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="/assets/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="/assets/login/fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="/assets/login/vendor/animate/animate.css">
<!--===============================================================================================-->  
    <link rel="stylesheet" type="text/css" href="/assets/login/vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="/assets/login/vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="/assets/login/vendor/select2/select2.min.css">
<!--===============================================================================================-->  
    <link rel="stylesheet" type="text/css" href="/assets/login/vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="/assets/login/css/util.css">
    <link rel="stylesheet" type="text/css" href="/assets/login/css/main.css">
<!--===============================================================================================-->
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>

<style type="text/css">
    .bg-login{
        background-image: url('/assets/login/images/bg-01.jpg');
    }
</style>
</head>
<body style="background-color: #666666;">
    @yield('content')
<script src="{{asset('js/app.js')}}" ></script>
    

<!--===============================================================================================-->
    <script src="/assets/login/vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
    <script src="/assets/login/vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
    <script src="/assets/login/vendor/bootstrap/js/popper.js"></script>
    <script src="/assets/login/vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
    <script src="/assets/login/vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
    <script src="/assets/login/vendor/daterangepicker/moment.min.js"></script>
    <script src="/assets/login/vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
    <script src="/assets/login/vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
    <script src="/assets/login/js/main.js"></script>

</body>
</html>
      




