<!DOCTYPE html>
<html   lang="en">
    <head>
        <meta charset="utf-8">
        <!-- Title here -->
        <title>CakeFactory</title>
        <!-- Description, Keywords and Author -->
        <meta name="description" content="Your description">
        <meta name="keywords" content="Your,Keywords">
        <meta name="author" content="ResponsiveWebInc">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>platos express</title>
        <!-- Fix for old browsers -->

        <script src="app/console-sham.js"></script>
        <!-- Styles -->
        <!-- Bootstrap CSS -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <!-- SLIDER REVOLUTION 4.x CSS SETTINGS -->
        <link href="css/settings.css" rel="stylesheet">		
        <!-- FlexSlider Css -->
        <link rel="stylesheet" href="css/flexslider.css" media="screen" />
        <!-- Portfolio CSS -->
        <link href="css/prettyPhoto.css" rel="stylesheet">
        <!-- Font awesome CSS -->
        <link href="css/font-awesome.min.css" rel="stylesheet">	
        <!-- Custom Less -->
        <link href="css/less-style.css" rel="stylesheet">	
        <!-- Custom CSS -->
        <link href="css/style.css" rel="stylesheet">

        <!--[if IE]><link rel="stylesheet" href="css/ie-style.css"><![endif]-->
        <link rel="stylesheet" href="bower_components/angular-ui-notification/dist/angular-ui-notification.css">
        <link href="bootstrap-social-gh-pages/bootstrap-social.css" rel="stylesheet">
        <link href="bootstrap-social-gh-pages/assets/css/bootstrap.css" rel="stylesheet">
        <link href="bootstrap-social-gh-pages/assets/css/font-awesome.css" rel="stylesheet">
        <link href="bootstrap-social-gh-pages/assets/css/docs.css" rel="stylesheet" >
        <!-- Favicon -->
        <link rel="shortcut icon" href="#">



        <script src="bower_components/angular/angular.min.js"></script>
        <script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js"></script>
        <script src="https://cdn.firebase.com/libs/angularfire/1.0.0/angularfire.min.js"></script>
        <script src="bower_components/angular-messages/angular-messages.min.js"></script>
        <script src="bower_components/angular-material/angular-material.min.js"></script>
        <script src="bower_components/angular-animate/angular-animate.min.js"></script>
        <script src="bower_components/angular-aria/angular-aria.min.js"></script>
        <script src="bower_components/angular-ui-notification/dist/angular-ui-notification.min.js"></script>
        <script src="bower_components/angular-ui-switch/angular-ui-switch.min.js"></script>
        <script src="bower_components/lodash/lodash.js"></script>
        <script src="bower_components/angular-route/angular-route.min.js"></script>
        <script src="bower_components/angular-local-storage/dist/angular-local-storage.min.js"></script>
        <script src="bower_components/restangular/dist/restangular.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.3/moment-with-locales.min.js"></script>
        <script type="text/javascript" src="js/ngDatepicker.min.js"></script>

        <script src="app/app.js"></script>
        <script src="app/app.config.js"></script>
        <script src="app/ngCart.js"></script> 
        <script src="app/validation.module.js"></script>
        <script src="app/errorHandler.js"></script> 

        <script src="app/controllers/indexController.js" ></script>
        <script src="app/controllers/userController.js" ></script>        
        <script src="app/services/services.js" ></script>
        <script src="app/services/service.firebase.js" ></script>
        <script src="app/services/service.mail.js" ></script>
        <script src="app/services/service.user.js" ></script>
        <script src="app/services/service.upload.js" ></script>
        <script src="app/services/confirmAlertService.js" ></script>
        <script src="app/services/service.pagination.js" ></script>
        <script src="app/services/dirPagination.js" ></script>
        <script src="app/services/service.shareData.js" ></script>
        <script src="app/services/service.apiRest.js" ></script>
        <script src="app/directive/directive.fileUpload.js" ></script>
        <script src="app/directive/directive.compareWithStartDate.js" ></script>
        <script src="app/directive/ui-switch.min.js"></script>
        <script src="app/directive/ng-really.js"></script>
        <script src="app/users/users.factory.js" ></script>

        <script src="app/users/createUserController.js" ></script>
        <script src="app/users/editUserController.js" ></script>
        <script src="app/users/loginUserController.js" ></script>
        <script src="app/users/directive.button.js" ></script>
        <script src="app/users/directive.navbar.js" ></script>
        <script src="app/platos/platos.dataService.js" ></script>

        <script src="app/filter/filter.decimal.js" ></script>

        <!--platos-->
        <script src="app/platos/newPlatosController.js" ></script>
        <script src="app/platos/listPlatosController.js" ></script>
        <!--compras-->
        <script src="app/compras/comprasController.js" ></script>
        <!-- preguntas-->
        <script src="app/compras/preguntas.dataService.js" ></script>
        <!--models-->
        <script src="app/models/models.js" ></script>
        <script src="app/models/user.domain.js" ></script>
        <script src="app/models/provincia.domain.js" ></script>
        <script src="app/models/pregunta.domain.js" ></script>
        <script src="app/models/pedido.domain.js" ></script>
        <script src="app/models/plato.domain.js" ></script>

    </head>

    <body ng-app="app" nv-file-drop="" uploader="uploader" class="ng-cloak">
        <div class="modal fade" id="shoppingcart1" tabindex="-1" role="dialog" aria-hidden="true"   >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">Carro de compras</h4>
                    </div>
                    <div class="modal-body">
                        <!-- Items table -->
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="#">Exception Reins Evocative</a></td>
                                    <td>2</td>
                                    <td>$200</td>
                                </tr>
                                <tr>
                                    <td><a href="#">Taut Mayoress Alias Appendicitis</a></td>
                                    <td>1</td>
                                    <td>$190</td>
                                </tr>
                                <tr>
                                    <td><a href="#">Sinter et Molests Perfectionist</a></td>
                                    <td>4</td>
                                    <td>$99</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>Total</th>
                                    <th>$489</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Continue Shopping</button>
                        <button type="button" class="btn btn-info">Checkout</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
        <!-- Model End -->

        <!-- Page Wrapper -->
        <div class="wrapper" ng-controller="indexController">

            <!-- Header Start -->

            <div class="header">
                <div class="container">
                    <!-- Header top area content -->
                    <div class="header-top">
                        <div class="row">
                            <div class="col-md-4 col-sm-5">
                                <!-- Link -->
                                <a href="./#/">
                                    <!-- Logo area -->
                                    <div class="logo">
                                        <img class="img-responsive" src="img/logo.png" alt="" />
                                        <!-- Heading -->
                                        <h1>@{{ titulo}}</h1>
                                        <!-- Paragraph -->
                                        <p>Facility ester expedite instinct.</p>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-2 col-sm-2">
                                <!-- Header top right content search box -->
                                <div class=" header-search">
                                    <form class="form" role="form">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Search...">
                                            <span class="input-group-btn">
                                                <button class="btn btn-default" type="button"><i class="fa fa-search"></i></button>
                                            </span>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div class="col-md-2 col-sm-2">
                                <button-nav data=""></button-nav> 
                            </div>

                            <div class="col-md-4 col-sm-4" ng-controller="indexController">
                                <!-- Button Kart -->
                                <div class="btn-cart-md">
                                    <a class="cart-checkout" href="./#/compras/checkout">
                                        <!-- Image -->
                                        <img  class="img-responsive" src="img/cart.png" alt="" />
                                        <!-- Heading -->
                                        <h4>Carro de compras</h4>
                                        <ngcart-summary></ngcart-summary>

                                        <div class="clearfix"></div>
                                    </a>

                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row" ng-show="@{{hideLogin}}">
                        <nav-bar data=""></nav-bar>
                    </div>

                </div> <!-- / .container -->
            </div>
            
            <div ng-include="./index.html"  ></div>
            
            <div class="footer padd">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <!-- Footer widget -->
                            <div class="footer-widget">
                                <!-- Logo area -->
                                <div class="logo">
                                    <img class="img-responsive" src="img/logo.png" alt="" />
                                    <!-- Heading -->
                                    <h1>@{{ titulo}}</h1>
                                </div>
                                <!-- Paragraph -->
                                <p>9Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua.</p>
                                <hr />
                                <!-- Heading -->
                                <h6>On-line Payment Clients</h6>
                                <!-- Images -->
                                <a href="#"><img class="payment img-responsive" src="img/payment/2co.gif" alt="" /></a>
                                <a href="#"><img class="payment img-responsive" src="img/payment/authorizenet.gif" alt="" /></a>
                                <a href="#"><img class="payment img-responsive" src="img/payment/discover.gif" alt="" /></a>
                                <a href="#"><img class="payment img-responsive" src="img/payment/egold.gif" alt="" /></a>
                                <a href="#"><img class="payment img-responsive" src="img/payment/mastercard.gif" alt="" /></a>
                                <a href="#"><img class="payment img-responsive" src="img/payment/paypal.gif" alt="" /></a>
                                <a href="#"><img class="payment img-responsive" src="img/payment/visa.gif" alt="" /></a>
                                <a href="#"><img class="payment img-responsive" src="img/payment/worldpay.gif" alt="" /></a>
                            </div> <!--/ Footer widget end -->
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <!-- Footer widget -->
                            <div class="footer-widget">
                                <!-- Heading -->
                                <h4>Famous Dishes</h4>
                                <!-- Images -->
                                <a href="#"><img class="dish img-responsive" src="img/dish/dish1.jpg" alt="" /></a>
                                <a href="#"><img class="dish img-responsive" src="img/dish/dish1.jpg" alt="" /></a>
                                <a href="#"><img class="dish img-responsive" src="img/dish/dish1.jpg" alt="" /></a>
                                <a href="#"><img class="dish img-responsive" src="img/dish/dish1.jpg" alt="" /></a>
                                <a href="#"><img class="dish img-responsive" src="img/dish/dish1.jpg" alt="" /></a>
                                <a href="#"><img class="dish img-responsive" src="img/dish/dish1.jpg" alt="" /></a>
                                <a href="#"><img class="dish img-responsive" src="img/dish/dish1.jpg" alt="" /></a>
                                <a href="#"><img class="dish img-responsive" src="img/dish/dish1.jpg" alt="" /></a>
                                <a href="#"><img class="dish img-responsive" src="img/dish/dish1.jpg" alt="" /></a>
                            </div> <!--/ Footer widget end -->
                        </div>
                        <div class="clearfix visible-sm"></div>
                        <div class="col-md-3 col-sm-6">
                            <!-- Footer widget -->
                            <div class="footer-widget">
                                <!-- Heading -->
                                <h4>Join Us Today</h4>
                                <!-- Paragraph -->
                                <p>There is no one who loves pain itself, who seeks after it and wants to have it.</p>
                                <!-- Subscribe form -->
                                <form role="form">
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="Your name" />
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" type="email" placeholder="Your email" />
                                    </div>
                                    <button class="btn btn-danger" type="button">Subscribe</button>
                                </form>
                            </div> <!--/ Footer widget end -->
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <!-- Footer widget -->
                            <div class="footer-widget">
                                <!-- Heading -->
                                <h4>Contact Us</h4>
                                <div class="contact-details">
                                    <!-- Address / Icon -->
                                    <i class="fa fa-map-marker br-red"></i> <span>#768, 5th floor, N S Building,<br />Csm Block, Park Road,<br /> Bangalore - 234567</span>
                                    <div class="clearfix"></div>
                                    <!-- Contact Number / Icon -->
                                    <i class="fa fa-phone br-green"></i> <span>+91 88-88-888888</span>
                                    <div class="clearfix"></div>
                                    <!-- Email / Icon -->
                                    <i class="fa fa-envelope-o br-lblue"></i> <span><a href="#">abc@example.com</a></span>
                                    <div class="clearfix"></div>
                                </div>
                                <!-- Social media icon -->
                                <div class="social">
                                    <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                                    <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
                                    <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a>
                                </div>
                            </div> <!--/ Footer widget end -->
                        </div>
                    </div>
                    <!-- Copyright -->
                    <div class="footer-copyright">
                        <!-- Paragraph -->
                        <p>&copy; Copyright 2014 <a href="#">Company Name</a></p>
                    </div>
                </div>
            </div>

            <script src="js/jquery.js"></script>
            <!-- Bootstrap JS -->
            <script src="js/bootstrap.min.js"></script>
            <!-- SLIDER REVOLUTION 4.x SCRIPTS  -->
            <script type="text/javascript" src="js/jquery.themepunch.tools.min.js"></script>
            <script type="text/javascript" src="js/jquery.themepunch.revolution.min.js"></script>
            <!-- FLEX SLIDER SCRIPTS  -->
            <script defer src="js/jquery.flexslider-min.js"></script>
            <!-- Pretty Photo JS -->
            <script src="js/jquery.prettyPhoto.js"></script>
            <!-- Respond JS for IE8 -->
            <script src="js/respond.min.js"></script>
            <!-- HTML5 Support for IE -->
            <script src="js/html5shiv.js"></script>
            <!-- Custom JS -->
            <script src="js/custom.js"></script>
            <!-- JS code for this page -->
            <script>
                                                /* ******************************************** */
                                                /*  JS for SLIDER REVOLUTION  */
                                                /* ******************************************** */
                                                jQuery(document).ready(function () {
                                                    jQuery('.tp-banner').revolution(
                                                            {
                                                                delay: 9000,
                                                                startheight: 500,
                                                                hideThumbs: 10,
                                                                navigationType: "bullet",
                                                                hideArrowsOnMobile: "on",
                                                                touchenabled: "on",
                                                                onHoverStop: "on",
                                                                navOffsetHorizontal: 0,
                                                                navOffsetVertical: 20,
                                                                stopAtSlide: -1,
                                                                stopAfterLoops: -1,
                                                                shadow: 0,
                                                                fullWidth: "on",
                                                                fullScreen: "off"
                                                            });
                                                });
                                                /* ******************************************** */
                                                /*  JS for FlexSlider  */
                                                /* ******************************************** */

                                                $(window).load(function () {
                                                    $('.flexslider-recent').flexslider({
                                                        animation: "fade",
                                                        animationSpeed: 1000,
                                                        controlNav: true,
                                                        directionNav: false
                                                    });
                                                    $('.flexslider-testimonial').flexslider({
                                                        animation: "fade",
                                                        slideshowSpeed: 5000,
                                                        animationSpeed: 1000,
                                                        controlNav: true,
                                                        directionNav: false
                                                    });
                                                });

                                                /* Gallery */

                                                jQuery(".gallery-img-link").prettyPhoto({
                                                    overlay_gallery: false, social_tools: false
                                                });

            </script>
            <script type="text/ng-template" id="template/ngCart/summary.html"><div class="row">
 
    <div class="col-md-6">@{{ ngCart.getTotalItems() }}
        <ng-pluralize count="ngCart.getTotalItems()" when="{1: 'item', 'other':'items'}"></ng-pluralize>
        <br />@{{ ngCart.totalCost() | currency }}
    </div>
</div>
            </script>
    </body>
</html>

