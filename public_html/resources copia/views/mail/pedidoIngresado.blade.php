<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title></title>

        <style type="text/css">

        </style>    
    </head>
    <body style="margin:0; padding:0; background-color:#F2F2F2;">

        <!--[if !mso]><!-- -->
        <img style="min-width:640px; display:block; margin:0; padding:0" class="mobileOff" width="640" height="1" src="images/spacer.gif">
        <!--<![endif]-->

        <center>
            <!-- Start Wrapper -->
            <table width="640" cellpadding="0" cellspacing="0" align="center" border="0" class="wrapper" bgcolor="#ffffff">
                <tbody>
                    <tr>
                        <td height="20" style="line-height:20px; font-size:20px;"> </td>
                    </tr>            
                    <tr>
                        <td align="center" bgcolor="#ffffff">

                            <table width="600" cellpadding="0" cellspacing="0" align="center" border="0" class="container">
                                <tr>
                                    <td align="left" class="mobile" style="font-family: Century Gothic, Arial, sans-serif; font-size:20px; line-height:26px; font-weight:bold;">
                                        {{ $title }}
                                    </td> 
                                </tr>
                                <tr>
                                    <td height="20" style="line-height:20px; font-size:20px;"></td>
                                </tr>                         
                                <tr>
                                    <td align="left" style="font-family:Verdana, Arial, sans serif; font-size: 14px; color: #4d4d4d; line-height:18px;">
                                        Vendiste un plato publicado en www.platosexpress.digitalstart.solutions por favor entra al sitio con tu usuario para ver el detalle de tu venta, por favor intenta confirmar el pedido a traves de este link {{ URL::to('api/pedidos/confirmar/' . $content) }}</br>
                                        o ingresa al sitio, seccion mis ventas/ventas a confirmar y confirma la venta, eso le dara aviso al comprador que la operacion ha sido concretada.

                                    </td>
                                    <td align="left" style="font-family:Verdana, Arial, sans serif; font-size: 14px; color: #4d4d4d; line-height:18px;">


                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>
                    <tr>
                        <td height="20" style="line-height:20px; font-size:20px;"> </td>
                    </tr>            
                </tbody>
            </table>
            <!-- End Wrapper -->  
        </center>
    </body>
</html>